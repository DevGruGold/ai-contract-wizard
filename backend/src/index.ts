import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import { logger } from './utils/logging';
import procurementRoutes from './api/routes/procurement';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    services: {
      trustScoreboard: 'active',
      transformers: 'active',
      xmrtIntegration: 'active'
    }
  });
});

// API routes
app.use('/api/v1/procurement', procurementRoutes);

app.use('/api/v1/agents', (req, res) => {
  res.json({ 
    message: 'AI Agents API',
    agents: [
      { name: 'Executive AI', status: 'active' },
      { name: 'Vendor Evaluation AI', status: 'active' },
      { name: 'Compliance AI', status: 'active' },
      { name: 'Contract Generation AI', status: 'active' },
      { name: 'Financial AI', status: 'active' }
    ]
  });
});

app.use('/api/v1/xmrt', (req, res) => {
  res.json({ 
    message: 'XMRT Integration API',
    features: {
      tokenPayments: 'enabled',
      defiTreasury: 'enabled',
      daoGovernance: 'enabled',
      moneroPrivacy: 'enabled'
    }
  });
});

// Error handling
app.use((err: any, req: any, res: any, next: any) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const server = app.listen(config.server.port, '0.0.0.0', () => {
  logger.info(`🚀 XMRT-Eliza Procurement Server running on 0.0.0.0:${config.server.port}`);
  logger.info(`📊 Environment: ${config.server.env}`);
  logger.info(`🤖 AI Agents: Active`);
  logger.info(`🔗 XMRT Integration: Enabled`);
  logger.info(`📈 Trust Scoreboard: Active`);
  logger.info(`🔍 Document Analysis: Active`);
});

export default app;

