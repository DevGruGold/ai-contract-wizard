import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables
dotenv.config();

// Environment validation schema
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3001'),
  HOST: z.string().default('0.0.0.0'),
  
  // Database
  MONGODB_URI: z.string().default('mongodb://localhost:27017/ai-contract-wizard'),
  REDIS_URL: z.string().default('redis://localhost:6379'),
  
  // JWT
  JWT_SECRET: z.string().min(32),
  JWT_EXPIRES_IN: z.string().default('7d'),
  
  // Eliza AI
  ELIZA_API_KEY: z.string().optional(),
  ELIZA_MODEL: z.string().default('gpt-4'),
  ELIZA_TEMPERATURE: z.string().transform(Number).default('0.7'),
  
  // XMRT Ecosystem
  XMART_TOKEN_ADDRESS: z.string().optional(),
  XMART_PRIVATE_KEY: z.string().optional(),
  BLOCKCHAIN_RPC_URL: z.string().optional(),
  BLOCKCHAIN_NETWORK: z.string().default('ethereum'),
  
  // DeFi
  DEFI_YIELD_STRATEGY: z.enum(['conservative', 'moderate', 'aggressive']).default('conservative'),
  DEFI_MAX_ALLOCATION: z.string().transform(Number).default('0.3'),
  DEFI_MIN_LIQUIDITY: z.string().transform(Number).default('100000'),
  
  // Monero
  MONERO_WALLET_ADDRESS: z.string().optional(),
  MONERO_PRIVATE_KEY: z.string().optional(),
  MONERO_RPC_URL: z.string().default('http://localhost:18081'),
  
  // DAO
  DAO_CONTRACT_ADDRESS: z.string().optional(),
  GOVERNANCE_TOKEN_ADDRESS: z.string().optional(),
  VOTING_PERIOD: z.string().transform(Number).default('7'),
  
  // Security
  RATE_LIMIT_WINDOW: z.string().transform(Number).default('15'),
  RATE_LIMIT_MAX_REQUESTS: z.string().transform(Number).default('100'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
  
  // Email
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  
  // File Upload
  MAX_FILE_SIZE: z.string().transform(Number).default('10485760'),
  UPLOAD_PATH: z.string().default('./uploads'),
  
  // Logging
  LOG_LEVEL: z.enum(['error', 'warn', 'info', 'debug']).default('info'),
  LOG_FILE: z.string().default('./logs/app.log'),
  
  // API Keys
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  
  // Compliance
  COMPLIANCE_RULES_URL: z.string().optional(),
  AUDIT_RETENTION_DAYS: z.string().transform(Number).default('2555'),
});

// Validate environment variables
const env = envSchema.parse(process.env);

export const config = {
  // Server
  server: {
    env: env.NODE_ENV,
    port: env.PORT,
    host: env.HOST,
    isDevelopment: env.NODE_ENV === 'development',
    isProduction: env.NODE_ENV === 'production',
    isTest: env.NODE_ENV === 'test',
  },
  
  // Database
  database: {
    mongodb: {
      uri: env.MONGODB_URI,
    },
    redis: {
      url: env.REDIS_URL,
    },
  },
  
  // Authentication
  auth: {
    jwt: {
      secret: env.JWT_SECRET,
      expiresIn: env.JWT_EXPIRES_IN,
    },
  },
  
  // AI Configuration
  ai: {
    eliza: {
      apiKey: env.ELIZA_API_KEY,
      model: env.ELIZA_MODEL,
      temperature: env.ELIZA_TEMPERATURE,
    },
    openai: {
      apiKey: env.OPENAI_API_KEY,
    },
    anthropic: {
      apiKey: env.ANTHROPIC_API_KEY,
    },
  },
  
  // XMRT Ecosystem
  xmrt: {
    token: {
      address: env.XMART_TOKEN_ADDRESS,
      privateKey: env.XMART_PRIVATE_KEY,
    },
    blockchain: {
      rpcUrl: env.BLOCKCHAIN_RPC_URL,
      network: env.BLOCKCHAIN_NETWORK,
    },
    defi: {
      yieldStrategy: env.DEFI_YIELD_STRATEGY,
      maxAllocation: env.DEFI_MAX_ALLOCATION,
      minLiquidity: env.DEFI_MIN_LIQUIDITY,
    },
    monero: {
      walletAddress: env.MONERO_WALLET_ADDRESS,
      privateKey: env.MONERO_PRIVATE_KEY,
      rpcUrl: env.MONERO_RPC_URL,
    },
    dao: {
      contractAddress: env.DAO_CONTRACT_ADDRESS,
      governanceTokenAddress: env.GOVERNANCE_TOKEN_ADDRESS,
      votingPeriod: env.VOTING_PERIOD,
    },
  },
  
  // Security
  security: {
    rateLimit: {
      windowMs: env.RATE_LIMIT_WINDOW * 60 * 1000, // Convert to milliseconds
      maxRequests: env.RATE_LIMIT_MAX_REQUESTS,
    },
    cors: {
      origin: env.CORS_ORIGIN,
    },
  },
  
  // Email
  email: {
    smtp: {
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  },
  
  // File Upload
  upload: {
    maxFileSize: env.MAX_FILE_SIZE,
    uploadPath: env.UPLOAD_PATH,
  },
  
  // Logging
  logging: {
    level: env.LOG_LEVEL,
    file: env.LOG_FILE,
  },
  
  // Compliance
  compliance: {
    rulesUrl: env.COMPLIANCE_RULES_URL,
    auditRetentionDays: env.AUDIT_RETENTION_DAYS,
  },
} as const;

export type Config = typeof config;

