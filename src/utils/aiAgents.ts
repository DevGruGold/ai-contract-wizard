import { AIProvider } from './aiService';

export type AIAgentRole = 'compliance' | 'technical' | 'financial' | 'security';

export interface AIAgentConfig {
  provider: AIProvider;
  role: AIAgentRole;
  description: string;
  readonly: boolean;
}

// Immutable AI agent configurations
export const AI_AGENTS: Record<AIAgentRole, AIAgentConfig> = Object.freeze({
  compliance: {
    provider: 'anthropic',
    role: 'compliance',
    description: 'Evaluates bids for regulatory compliance and policy adherence',
    readonly: true
  },
  technical: {
    provider: 'openai',
    role: 'technical',
    description: 'Assesses technical capabilities and solution architecture',
    readonly: true
  },
  financial: {
    provider: 'deepseek',
    role: 'financial',
    description: 'Analyzes cost proposals and financial viability',
    readonly: true
  },
  security: {
    provider: 'gemini',
    role: 'security',
    description: 'Reviews security measures and risk assessments',
    readonly: true
  }
});