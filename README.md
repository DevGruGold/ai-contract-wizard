# AI Contract Wizard - XMRT-Eliza Enhanced

🚀 **Government Procurement Automation System** powered by XMRT ecosystem and Eliza AI framework.

## 🌟 Features

### 🤖 AI-Powered Automation
- **Executive Procurement AI**: Strategic oversight and decision-making
- **Vendor Evaluation AI**: Automated vendor assessment and scoring
- **Compliance AI**: Real-time regulatory compliance monitoring
- **Contract Generation AI**: Intelligent contract creation and management
- **Financial AI**: Treasury management and payment processing

### 🔗 XMRT Ecosystem Integration
- **XMART Token Payments**: Instant, low-cost vendor payments
- **DeFi Treasury Management**: Yield optimization and liquidity provision
- **DAO Governance**: Decentralized decision-making for major procurement decisions
- **Monero Privacy**: Secure, private communications and sensitive data protection
- **Blockchain Transparency**: Immutable audit trails and public accountability

### 🛡️ Government-Grade Security
- Multi-factor authentication and role-based access control
- End-to-end encryption for sensitive communications
- Comprehensive audit logging and compliance reporting
- Federal security standards compliance (FISMA, FedRAMP ready)

### 📊 Advanced Analytics
- Real-time procurement performance dashboards
- Predictive analytics for vendor performance and risk assessment
- Cost optimization recommendations and budget analysis
- Market intelligence and competitive analysis

## 🏗️ Architecture

```
ai-contract-wizard/
├── frontend/                 # React TypeScript frontend
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── pages/           # Application pages
│   │   └── services/        # API services
├── backend/                 # Node.js TypeScript backend
│   ├── src/
│   │   ├── agents/          # AI agent implementations
│   │   ├── api/             # REST API routes
│   │   ├── services/        # Business logic
│   │   └── config/          # Configuration
└── docs/                    # Documentation
    ├── ARCHITECTURE.md      # System architecture
    └── ANALYSIS.md          # Current state analysis
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB
- Redis
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DevGruGold/ai-contract-wizard.git
cd ai-contract-wizard

# Install all dependencies
npm run install:all

# Copy environment variables
cp backend/.env.example backend/.env

# Start development servers
npm run dev
```

### Environment Setup

1. **Backend Configuration** (`backend/.env`):
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/ai-contract-wizard
   REDIS_URL=redis://localhost:6379
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key
   
   # XMRT Ecosystem
   XMART_TOKEN_ADDRESS=0x...
   BLOCKCHAIN_RPC_URL=https://mainnet.infura.io/v3/your-project-id
   
   # AI Configuration
   OPENAI_API_KEY=your-openai-api-key
   ELIZA_API_KEY=your-eliza-api-key
   ```

2. **Start Services**:
   ```bash
   # Frontend (React + Vite)
   npm run dev:frontend    # http://localhost:5173
   
   # Backend (Node.js + Express)
   npm run dev:backend     # http://localhost:3001
   
   # Both simultaneously
   npm run dev
   ```

## 📱 Application Features

### 🏛️ Government Dashboard
- **Contract Management**: Create, manage, and monitor procurement contracts
- **Vendor Portal**: Vendor registration, qualification, and performance tracking
- **Compliance Center**: Real-time compliance monitoring and reporting
- **Analytics Hub**: Procurement insights and performance metrics

### 🤝 Vendor Interface
- **Bid Submission**: Streamlined proposal submission process
- **Performance Tracking**: Real-time performance metrics and feedback
- **Payment Status**: Transparent payment tracking and history
- **Communication Portal**: Secure messaging with procurement officers

### 🔍 Public Transparency
- **Public Contracts**: Searchable database of public procurement contracts
- **Vendor Directory**: Public vendor information and performance ratings
- **Spending Analytics**: Government spending transparency and analysis
- **Audit Trails**: Blockchain-verified procurement activity logs

## 🔧 API Endpoints

### Core APIs
- `GET /api/v1/contracts` - Contract management
- `GET /api/v1/vendors` - Vendor operations
- `GET /api/v1/agents` - AI agent interactions
- `GET /api/v1/xmrt` - XMRT ecosystem integration

### AI Agent APIs
- `POST /api/v1/agents/executive/evaluate` - Executive procurement evaluation
- `POST /api/v1/agents/vendor/assess` - Vendor assessment
- `POST /api/v1/agents/compliance/check` - Compliance verification
- `POST /api/v1/agents/contract/generate` - Contract generation

### XMRT Integration APIs
- `POST /api/v1/xmrt/payments` - Token payment processing
- `GET /api/v1/xmrt/treasury` - Treasury management
- `POST /api/v1/xmrt/governance` - DAO governance actions

## 🧪 Testing

```bash
# Run all tests
npm test

# Frontend tests
npm run test:frontend

# Backend tests
npm run test:backend

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Production Build
```bash
# Build all components
npm run build

# Start production server
npm start
```

### Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Cloud Deployment
- **Frontend**: Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Railway, Heroku, or AWS ECS
- **Database**: MongoDB Atlas or AWS DocumentDB
- **Cache**: Redis Cloud or AWS ElastiCache

## 📚 Documentation

- [System Architecture](docs/ARCHITECTURE.md) - Comprehensive system design
- [Current State Analysis](docs/ANALYSIS.md) - Analysis of existing system
- [API Documentation](docs/API.md) - Complete API reference
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Projects

- [XMRT Ecosystem](https://xmrt.io) - Core XMRT platform
- [Eliza AI Framework](https://github.com/ai16z/eliza) - AI agent framework
- [XMRT AI Organization](https://github.com/DevGruGold/xmrt-ai-organization) - Autonomous AI organization

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/DevGruGold/ai-contract-wizard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/DevGruGold/ai-contract-wizard/discussions)
- **Email**: support@xmrt.io

---

**Built with ❤️ by DevGruGold | Powered by XMRT Ecosystem & Eliza AI**

