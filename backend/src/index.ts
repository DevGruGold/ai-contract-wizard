import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config';
import { logger } from './utils/logging';

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: config.security.cors.origin }));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API routes
app.use('/api/v1/contracts', (req, res) => {
  res.json({ message: 'Contracts API - Coming Soon' });
});

app.use('/api/v1/vendors', (req, res) => {
  res.json({ message: 'Vendors API - Coming Soon' });
});

app.use('/api/v1/agents', (req, res) => {
  res.json({ message: 'AI Agents API - Coming Soon' });
});

app.use('/api/v1/xmrt', (req, res) => {
  res.json({ message: 'XMRT Integration API - Coming Soon' });
});

// Error handling
app.use((err: any, req: any, res: any, next: any) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const server = app.listen(config.server.port, config.server.host, () => {
  logger.info(`🚀 XMRT-Eliza Procurement Server running on ${config.server.host}:${config.server.port}`);
  logger.info(`📊 Environment: ${config.server.env}`);
  logger.info(`🤖 AI Agents: Initializing...`);
});

export default app;

