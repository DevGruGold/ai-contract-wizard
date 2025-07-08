# AI Contract Wizard Backend

XMRT-Eliza Government Procurement Automation System Backend

## Features

- 🤖 **AI Agents**: Executive, Vendor Evaluation, Compliance, Contract Generation, Financial
- 🔗 **XMRT Integration**: Token payments, DeFi treasury, DAO governance
- 🛡️ **Security**: JWT auth, rate limiting, audit logging
- 📊 **Analytics**: Real-time procurement metrics and insights
- 🔄 **Automation**: End-to-end procurement workflow automation

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build
npm start
```

## API Endpoints

- `GET /health` - Health check
- `/api/v1/contracts` - Contract management
- `/api/v1/vendors` - Vendor operations
- `/api/v1/agents` - AI agent interactions
- `/api/v1/xmrt` - XMRT ecosystem integration

## Architecture

```
backend/
├── src/
│   ├── agents/          # AI agent implementations
│   ├── api/             # REST API routes and controllers
│   ├── services/        # Business logic services
│   ├── config/          # Configuration management
│   ├── utils/           # Utility functions
│   └── types/           # TypeScript type definitions
├── docs/                # API documentation
└── tests/               # Test suites
```

## Environment Variables

See `.env.example` for required configuration variables.

## Development

- `npm run dev` - Start development server with hot reload
- `npm run test` - Run test suite
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

