// Core Types
export interface User {
  id: string;
  email: string;
  role: UserRole;
  department?: string;
  permissions: Permission[];
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  PROCUREMENT_OFFICER = 'procurement_officer',
  VENDOR = 'vendor',
  AUDITOR = 'auditor',
  PUBLIC = 'public',
}

export enum Permission {
  CREATE_CONTRACT = 'create_contract',
  APPROVE_CONTRACT = 'approve_contract',
  VIEW_CONTRACTS = 'view_contracts',
  MANAGE_VENDORS = 'manage_vendors',
  VIEW_ANALYTICS = 'view_analytics',
  SYSTEM_ADMIN = 'system_admin',
}

// Procurement Types
export interface Contract {
  id: string;
  title: string;
  description: string;
  department: string;
  budget: {
    min: number;
    max: number;
    currency: string;
  };
  deadline: Date;
  status: ContractStatus;
  requirements: string[];
  qualificationCriteria: QualificationCriteria[];
  vendors: VendorSubmission[];
  aiEvaluation?: AIEvaluation;
  complianceStatus: ComplianceStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum ContractStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  BIDDING = 'bidding',
  EVALUATION = 'evaluation',
  AWARDED = 'awarded',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export interface QualificationCriteria {
  id: string;
  name: string;
  description: string;
  weight: number;
  required: boolean;
  type: 'boolean' | 'numeric' | 'text' | 'file';
}

export interface Vendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  businessType: BusinessType;
  certifications: Certification[];
  financialInfo: FinancialInfo;
  performanceHistory: PerformanceRecord[];
  complianceStatus: ComplianceStatus;
  aiScore?: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum BusinessType {
  SMALL_BUSINESS = 'small_business',
  LARGE_BUSINESS = 'large_business',
  MINORITY_OWNED = 'minority_owned',
  WOMAN_OWNED = 'woman_owned',
  VETERAN_OWNED = 'veteran_owned',
  DISADVANTAGED = 'disadvantaged',
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingBody: string;
  issueDate: Date;
  expiryDate: Date;
  documentUrl?: string;
}

export interface FinancialInfo {
  annualRevenue: number;
  creditRating: string;
  bondingCapacity: number;
  insuranceCoverage: InsuranceCoverage[];
}

export interface InsuranceCoverage {
  type: string;
  amount: number;
  provider: string;
  expiryDate: Date;
}

export interface PerformanceRecord {
  contractId: string;
  contractTitle: string;
  completionDate: Date;
  onTime: boolean;
  onBudget: boolean;
  qualityScore: number;
  clientFeedback?: string;
}

export interface VendorSubmission {
  id: string;
  vendorId: string;
  contractId: string;
  proposalDocument: string;
  technicalProposal: TechnicalProposal;
  financialProposal: FinancialProposal;
  submissionDate: Date;
  status: SubmissionStatus;
  aiEvaluation?: AIEvaluation;
}

export enum SubmissionStatus {
  SUBMITTED = 'submitted',
  UNDER_REVIEW = 'under_review',
  QUALIFIED = 'qualified',
  DISQUALIFIED = 'disqualified',
  AWARDED = 'awarded',
  REJECTED = 'rejected',
}

export interface TechnicalProposal {
  approach: string;
  timeline: ProjectTimeline[];
  team: TeamMember[];
  resources: Resource[];
  riskMitigation: RiskMitigation[];
}

export interface ProjectTimeline {
  phase: string;
  startDate: Date;
  endDate: Date;
  deliverables: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  experience: number;
  certifications: string[];
}

export interface Resource {
  type: string;
  description: string;
  quantity: number;
  cost?: number;
}

export interface RiskMitigation {
  risk: string;
  probability: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
}

export interface FinancialProposal {
  totalCost: number;
  breakdown: CostBreakdown[];
  paymentTerms: string;
  warranties: Warranty[];
}

export interface CostBreakdown {
  category: string;
  description: string;
  cost: number;
  percentage: number;
}

export interface Warranty {
  type: string;
  duration: number;
  coverage: string;
}

// AI Agent Types
export interface AIAgent {
  id: string;
  name: string;
  type: AgentType;
  status: AgentStatus;
  capabilities: string[];
  configuration: Record<string, any>;
  lastActivity: Date;
}

export enum AgentType {
  EXECUTIVE = 'executive',
  VENDOR_EVALUATION = 'vendor_evaluation',
  COMPLIANCE = 'compliance',
  CONTRACT_GENERATION = 'contract_generation',
  FINANCIAL = 'financial',
}

export enum AgentStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  MAINTENANCE = 'maintenance',
  ERROR = 'error',
}

export interface AIEvaluation {
  id: string;
  agentId: string;
  targetId: string;
  targetType: 'vendor' | 'contract' | 'submission';
  scores: EvaluationScore[];
  overallScore: number;
  recommendations: string[];
  risks: Risk[];
  confidence: number;
  evaluatedAt: Date;
}

export interface EvaluationScore {
  criteria: string;
  score: number;
  maxScore: number;
  reasoning: string;
}

export interface Risk {
  type: string;
  level: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  mitigation?: string;
}

// Compliance Types
export enum ComplianceStatus {
  COMPLIANT = 'compliant',
  NON_COMPLIANT = 'non_compliant',
  PENDING_REVIEW = 'pending_review',
  REQUIRES_ATTENTION = 'requires_attention',
}

export interface ComplianceCheck {
  id: string;
  targetId: string;
  targetType: string;
  rule: ComplianceRule;
  status: ComplianceStatus;
  findings: ComplianceFinding[];
  checkedAt: Date;
  checkedBy: string; // AI agent or user ID
}

export interface ComplianceRule {
  id: string;
  name: string;
  description: string;
  category: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  automated: boolean;
  regulation: string;
}

export interface ComplianceFinding {
  type: 'violation' | 'warning' | 'recommendation';
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  remediation?: string;
}

// XMRT Ecosystem Types
export interface XMRTTransaction {
  id: string;
  type: TransactionType;
  from: string;
  to: string;
  amount: number;
  token: string;
  blockchainTxHash: string;
  status: TransactionStatus;
  contractId?: string;
  vendorId?: string;
  createdAt: Date;
  confirmedAt?: Date;
}

export enum TransactionType {
  PAYMENT = 'payment',
  REFUND = 'refund',
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  YIELD_FARMING = 'yield_farming',
  GOVERNANCE = 'governance',
}

export enum TransactionStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

export interface DeFiPosition {
  id: string;
  protocol: string;
  type: 'yield_farming' | 'liquidity_provision' | 'staking';
  amount: number;
  token: string;
  apy: number;
  startDate: Date;
  endDate?: Date;
  status: 'active' | 'closed' | 'pending';
}

export interface GovernanceProposal {
  id: string;
  title: string;
  description: string;
  proposer: string;
  type: ProposalType;
  status: ProposalStatus;
  votingStartDate: Date;
  votingEndDate: Date;
  votes: Vote[];
  result?: ProposalResult;
}

export enum ProposalType {
  POLICY_CHANGE = 'policy_change',
  BUDGET_ALLOCATION = 'budget_allocation',
  SYSTEM_UPGRADE = 'system_upgrade',
  VENDOR_QUALIFICATION = 'vendor_qualification',
}

export enum ProposalStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  PASSED = 'passed',
  REJECTED = 'rejected',
  EXPIRED = 'expired',
}

export interface Vote {
  voter: string;
  choice: 'yes' | 'no' | 'abstain';
  weight: number;
  timestamp: Date;
}

export interface ProposalResult {
  totalVotes: number;
  yesVotes: number;
  noVotes: number;
  abstainVotes: number;
  passed: boolean;
  executedAt?: Date;
}

// API Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// WebSocket Types
export interface WebSocketMessage {
  type: string;
  payload: any;
  timestamp: Date;
  userId?: string;
}

export interface NotificationMessage extends WebSocketMessage {
  type: 'notification';
  payload: {
    title: string;
    message: string;
    severity: 'info' | 'warning' | 'error' | 'success';
    actionUrl?: string;
  };
}

// Audit Types
export interface AuditLog {
  id: string;
  userId: string;
  action: string;
  resource: string;
  resourceId: string;
  details: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}

export interface SystemMetrics {
  timestamp: Date;
  activeUsers: number;
  activeContracts: number;
  totalTransactions: number;
  systemLoad: {
    cpu: number;
    memory: number;
    disk: number;
  };
  aiAgentStatus: Record<string, AgentStatus>;
}

