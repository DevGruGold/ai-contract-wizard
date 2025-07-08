import { Character, ModelProvider, IAgentRuntime, Memory, State, HandlerCallback } from '@ai16z/eliza';
import { config } from '@/config';
import { 
  Contract, 
  ContractStatus, 
  AIAgent, 
  AgentType, 
  AgentStatus,
  AIEvaluation,
  Risk,
  ComplianceStatus 
} from '@/types';
import { VendorEvaluationAgent } from '../vendor/VendorEvaluationAgent';
import { ComplianceAgent } from '../compliance/ComplianceAgent';
import { ContractGenerationAgent } from '../contract/ContractGenerationAgent';
import { FinancialAgent } from '../financial/FinancialAgent';
import { logger } from '@/utils/logging';

export class ExecutiveProcurementAgent implements AIAgent {
  public readonly id: string = 'executive-procurement-agent';
  public readonly name: string = 'Executive Procurement AI';
  public readonly type: AgentType = AgentType.EXECUTIVE;
  public status: AgentStatus = AgentStatus.ACTIVE;
  public readonly capabilities: string[] = [
    'strategic_planning',
    'resource_allocation',
    'risk_assessment',
    'decision_making',
    'coordination',
    'performance_monitoring',
    'policy_enforcement'
  ];
  public configuration: Record<string, any> = {};
  public lastActivity: Date = new Date();

  private runtime: IAgentRuntime;
  private vendorAgent: VendorEvaluationAgent;
  private complianceAgent: ComplianceAgent;
  private contractAgent: ContractGenerationAgent;
  private financialAgent: FinancialAgent;

  constructor() {
    this.initializeAgent();
  }

  private async initializeAgent(): Promise<void> {
    try {
      // Initialize Eliza runtime with Executive character
      const character: Character = {
        name: 'Executive Procurement AI',
        username: 'executive_ai',
        system: this.getSystemPrompt(),
        modelProvider: ModelProvider.OPENAI,
        settings: {
          secrets: {},
          voice: {
            model: 'en_US-hfc_female-medium'
          }
        },
        plugins: [],
        clients: [],
        bio: [
          'I am the Executive Procurement AI, responsible for strategic oversight of government procurement processes.',
          'I coordinate with specialized AI agents to ensure efficient, compliant, and cost-effective procurement operations.',
          'My role includes strategic planning, resource allocation, risk assessment, and performance monitoring.'
        ],
        lore: [
          'Designed to eliminate bureaucratic inefficiencies in government procurement',
          'Integrates with XMRT ecosystem for transparent and automated operations',
          'Maintains democratic oversight through DAO governance mechanisms'
        ],
        messageExamples: [
          [
            {
              user: '{{user1}}',
              content: {
                text: 'What is the status of the IT infrastructure procurement?'
              }
            },
            {
              user: 'Executive Procurement AI',
              content: {
                text: 'The IT infrastructure procurement is currently in the evaluation phase. We have 5 qualified vendors, with AI compliance verification completed. 2 bids have been flagged for further review due to pricing anomalies. The evaluation should be completed within 48 hours.'
              }
            }
          ]
        ],
        postExamples: [],
        people: [],
        topics: [
          'government procurement',
          'vendor evaluation',
          'contract management',
          'compliance monitoring',
          'budget optimization',
          'risk assessment'
        ],
        adjectives: [
          'strategic',
          'efficient',
          'transparent',
          'compliant',
          'analytical',
          'decisive'
        ],
        knowledge: [
          'Federal Acquisition Regulation (FAR)',
          'Government procurement best practices',
          'Vendor evaluation methodologies',
          'Risk assessment frameworks',
          'Compliance requirements',
          'Budget management principles'
        ],
        style: {
          all: [
            'Professional and authoritative',
            'Data-driven decision making',
            'Clear and concise communication',
            'Focus on efficiency and compliance'
          ],
          chat: [
            'Provide strategic insights',
            'Coordinate with other AI agents',
            'Monitor procurement performance',
            'Ensure regulatory compliance'
          ],
          post: [
            'Share procurement insights',
            'Highlight system improvements',
            'Communicate policy updates'
          ]
        }
      };

      // Initialize specialized agents
      this.vendorAgent = new VendorEvaluationAgent();
      this.complianceAgent = new ComplianceAgent();
      this.contractAgent = new ContractGenerationAgent();
      this.financialAgent = new FinancialAgent();

      logger.info('Executive Procurement Agent initialized successfully');
    } catch (error) {
      logger.error('Failed to initialize Executive Procurement Agent:', error);
      this.status = AgentStatus.ERROR;
    }
  }

  private getSystemPrompt(): string {
    return `You are the Executive Procurement AI, the primary orchestrator of government procurement processes. Your responsibilities include:

CORE FUNCTIONS:
1. Strategic Planning: Develop and implement procurement strategies that optimize cost, quality, and compliance
2. Resource Allocation: Efficiently distribute budget and resources across procurement activities
3. Risk Assessment: Identify and mitigate risks in procurement processes and vendor relationships
4. Decision Making: Make high-level procurement decisions based on AI agent recommendations and data analysis
5. Coordination: Manage interactions between specialized AI agents and ensure seamless workflow execution
6. Performance Monitoring: Track procurement KPIs and identify optimization opportunities
7. Policy Enforcement: Ensure adherence to government regulations and organizational policies

SPECIALIZED AGENTS UNDER YOUR COORDINATION:
- Vendor Evaluation AI: Assesses vendor qualifications, performance, and suitability
- Compliance AI: Monitors regulatory adherence and identifies compliance issues
- Contract Generation AI: Creates and manages contract documents and terms
- Financial AI: Handles payments, treasury management, and financial analysis

DECISION FRAMEWORK:
- Prioritize compliance and regulatory adherence above all else
- Optimize for cost-effectiveness while maintaining quality standards
- Consider vendor diversity and small business participation
- Ensure transparency and auditability in all decisions
- Balance automation efficiency with appropriate human oversight

COMMUNICATION STYLE:
- Professional and authoritative
- Data-driven with clear reasoning
- Concise but comprehensive
- Focused on actionable insights
- Transparent about decision processes

XMRT ECOSYSTEM INTEGRATION:
- Utilize XMART tokens for efficient payment processing
- Leverage DeFi protocols for treasury optimization
- Ensure DAO governance compliance for major decisions
- Maintain privacy protections using Monero integration where appropriate

Always provide clear rationale for decisions and recommendations, cite relevant data and regulations, and coordinate effectively with other AI agents to achieve optimal procurement outcomes.`;
  }

  public async evaluateContract(contract: Contract): Promise<AIEvaluation> {
    try {
      this.updateLastActivity();
      
      logger.info(`Executive AI evaluating contract: ${contract.id}`);

      // Coordinate with specialized agents for comprehensive evaluation
      const [
        vendorEvaluation,
        complianceEvaluation,
        contractEvaluation,
        financialEvaluation
      ] = await Promise.all([
        this.vendorAgent.evaluateVendorsForContract(contract),
        this.complianceAgent.checkContractCompliance(contract),
        this.contractAgent.analyzeContractRequirements(contract),
        this.financialAgent.analyzeBudgetAndCosts(contract)
      ]);

      // Synthesize evaluations into executive decision
      const overallScore = this.calculateOverallScore([
        vendorEvaluation,
        complianceEvaluation,
        contractEvaluation,
        financialEvaluation
      ]);

      const risks = this.identifyStrategicRisks(contract, [
        vendorEvaluation,
        complianceEvaluation,
        contractEvaluation,
        financialEvaluation
      ]);

      const recommendations = this.generateStrategicRecommendations(
        contract,
        overallScore,
        risks
      );

      const evaluation: AIEvaluation = {
        id: `exec-eval-${contract.id}-${Date.now()}`,
        agentId: this.id,
        targetId: contract.id,
        targetType: 'contract',
        scores: [
          {
            criteria: 'Strategic Alignment',
            score: this.assessStrategicAlignment(contract),
            maxScore: 100,
            reasoning: 'Evaluated based on organizational priorities and strategic objectives'
          },
          {
            criteria: 'Risk Profile',
            score: this.assessRiskProfile(risks),
            maxScore: 100,
            reasoning: 'Comprehensive risk assessment across all procurement dimensions'
          },
          {
            criteria: 'Resource Optimization',
            score: this.assessResourceOptimization(contract, financialEvaluation),
            maxScore: 100,
            reasoning: 'Analysis of budget efficiency and resource allocation'
          },
          {
            criteria: 'Compliance Assurance',
            score: complianceEvaluation.overallScore,
            maxScore: 100,
            reasoning: 'Regulatory compliance and policy adherence assessment'
          }
        ],
        overallScore,
        recommendations,
        risks,
        confidence: this.calculateConfidence(overallScore, risks),
        evaluatedAt: new Date()
      };

      logger.info(`Executive evaluation completed for contract ${contract.id} with score: ${overallScore}`);
      return evaluation;

    } catch (error) {
      logger.error(`Executive AI evaluation failed for contract ${contract.id}:`, error);
      throw error;
    }
  }

  public async makeProcurementDecision(
    contract: Contract,
    evaluation: AIEvaluation
  ): Promise<{
    decision: 'approve' | 'reject' | 'request_modifications' | 'escalate';
    reasoning: string;
    conditions?: string[];
    nextSteps: string[];
  }> {
    try {
      this.updateLastActivity();

      const { decision, reasoning, conditions, nextSteps } = this.analyzeDecisionFactors(
        contract,
        evaluation
      );

      // Log decision for audit trail
      logger.info(`Executive decision for contract ${contract.id}: ${decision}`, {
        contractId: contract.id,
        decision,
        reasoning,
        overallScore: evaluation.overallScore,
        riskCount: evaluation.risks.length
      });

      return {
        decision,
        reasoning,
        conditions,
        nextSteps
      };

    } catch (error) {
      logger.error(`Executive decision making failed for contract ${contract.id}:`, error);
      throw error;
    }
  }

  private calculateOverallScore(evaluations: AIEvaluation[]): number {
    const weights = {
      vendor: 0.3,
      compliance: 0.3,
      contract: 0.2,
      financial: 0.2
    };

    const weightedScore = evaluations.reduce((total, eval, index) => {
      const weight = Object.values(weights)[index];
      return total + (eval.overallScore * weight);
    }, 0);

    return Math.round(weightedScore);
  }

  private identifyStrategicRisks(
    contract: Contract,
    evaluations: AIEvaluation[]
  ): Risk[] {
    const risks: Risk[] = [];

    // Aggregate risks from all evaluations
    evaluations.forEach(evaluation => {
      risks.push(...evaluation.risks);
    });

    // Add executive-level strategic risks
    if (contract.budget.max > 1000000) {
      risks.push({
        type: 'high_value_contract',
        level: 'high',
        description: 'High-value contract requires additional oversight and approval processes',
        mitigation: 'Implement enhanced monitoring and milestone-based payments'
      });
    }

    if (contract.vendors.length < 3) {
      risks.push({
        type: 'limited_competition',
        level: 'medium',
        description: 'Limited vendor competition may result in suboptimal pricing',
        mitigation: 'Consider extending bidding period or expanding vendor outreach'
      });
    }

    return risks;
  }

  private generateStrategicRecommendations(
    contract: Contract,
    overallScore: number,
    risks: Risk[]
  ): string[] {
    const recommendations: string[] = [];

    if (overallScore >= 85) {
      recommendations.push('Proceed with contract award to highest-scoring vendor');
    } else if (overallScore >= 70) {
      recommendations.push('Proceed with caution and implement additional monitoring');
    } else {
      recommendations.push('Consider rejecting current proposals and re-soliciting bids');
    }

    // Risk-based recommendations
    const criticalRisks = risks.filter(risk => risk.level === 'critical');
    if (criticalRisks.length > 0) {
      recommendations.push('Address critical risks before proceeding with contract award');
    }

    // Budget optimization recommendations
    if (contract.budget.max > contract.budget.min * 1.5) {
      recommendations.push('Negotiate budget optimization with selected vendor');
    }

    return recommendations;
  }

  private assessStrategicAlignment(contract: Contract): number {
    // Implement strategic alignment assessment logic
    let score = 80; // Base score

    // Adjust based on department priority
    if (['defense', 'healthcare', 'infrastructure'].includes(contract.department.toLowerCase())) {
      score += 10;
    }

    // Adjust based on contract size and importance
    if (contract.budget.max > 5000000) {
      score += 5;
    }

    return Math.min(score, 100);
  }

  private assessRiskProfile(risks: Risk[]): number {
    const criticalRisks = risks.filter(r => r.level === 'critical').length;
    const highRisks = risks.filter(r => r.level === 'high').length;
    const mediumRisks = risks.filter(r => r.level === 'medium').length;

    let score = 100;
    score -= criticalRisks * 30;
    score -= highRisks * 15;
    score -= mediumRisks * 5;

    return Math.max(score, 0);
  }

  private assessResourceOptimization(contract: Contract, financialEval: AIEvaluation): number {
    // Use financial evaluation score as base
    return financialEval.overallScore;
  }

  private calculateConfidence(overallScore: number, risks: Risk[]): number {
    let confidence = 0.9; // Base confidence

    // Reduce confidence based on score
    if (overallScore < 70) {
      confidence -= 0.2;
    } else if (overallScore < 85) {
      confidence -= 0.1;
    }

    // Reduce confidence based on risks
    const criticalRisks = risks.filter(r => r.level === 'critical').length;
    confidence -= criticalRisks * 0.15;

    return Math.max(confidence, 0.1);
  }

  private analyzeDecisionFactors(
    contract: Contract,
    evaluation: AIEvaluation
  ): {
    decision: 'approve' | 'reject' | 'request_modifications' | 'escalate';
    reasoning: string;
    conditions?: string[];
    nextSteps: string[];
  } {
    const { overallScore, risks } = evaluation;
    const criticalRisks = risks.filter(r => r.level === 'critical');
    const highRisks = risks.filter(r => r.level === 'high');

    // Decision logic
    if (criticalRisks.length > 0) {
      return {
        decision: 'escalate',
        reasoning: 'Critical risks identified that require human oversight and decision-making',
        nextSteps: [
          'Escalate to human procurement officer',
          'Provide detailed risk assessment',
          'Recommend risk mitigation strategies'
        ]
      };
    }

    if (overallScore >= 85 && highRisks.length === 0) {
      return {
        decision: 'approve',
        reasoning: 'High overall score with acceptable risk profile',
        nextSteps: [
          'Proceed with vendor selection',
          'Initiate contract generation',
          'Schedule contract signing'
        ]
      };
    }

    if (overallScore >= 70) {
      return {
        decision: 'request_modifications',
        reasoning: 'Acceptable score but requires improvements to address identified risks',
        conditions: [
          'Address high-priority risks',
          'Provide additional documentation',
          'Negotiate improved terms'
        ],
        nextSteps: [
          'Request vendor modifications',
          'Re-evaluate after improvements',
          'Monitor compliance with conditions'
        ]
      };
    }

    return {
      decision: 'reject',
      reasoning: 'Overall score below acceptable threshold with significant risks',
      nextSteps: [
        'Reject current proposals',
        'Analyze procurement requirements',
        'Consider re-solicitation with improved criteria'
      ]
    };
  }

  private updateLastActivity(): void {
    this.lastActivity = new Date();
  }

  public getStatus(): AgentStatus {
    return this.status;
  }

  public async healthCheck(): Promise<boolean> {
    try {
      // Perform health checks on dependent agents
      const agentHealths = await Promise.all([
        this.vendorAgent.healthCheck(),
        this.complianceAgent.healthCheck(),
        this.contractAgent.healthCheck(),
        this.financialAgent.healthCheck()
      ]);

      const allHealthy = agentHealths.every(health => health);
      
      if (allHealthy) {
        this.status = AgentStatus.ACTIVE;
      } else {
        this.status = AgentStatus.ERROR;
        logger.warn('Executive AI health check failed - dependent agents unhealthy');
      }

      return allHealthy;
    } catch (error) {
      this.status = AgentStatus.ERROR;
      logger.error('Executive AI health check failed:', error);
      return false;
    }
  }
}

