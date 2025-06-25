# Monchain Landing Page

<div align="center">

![Monchain Logo](https://img.shields.io/badge/Monchain-Next--Gen%20Blockchain-8b5cf6?style=for-the-badge&logo=blockchain&logoColor=white)

[![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-06b6d4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

**🌐 Live Site: [https://monchain.org](https://monchain.org)**

*The official landing page for Monchain - A next-generation Layer 1 blockchain platform combining EVM compatibility with Cosmos interoperability.*

</div>

---

## 🚀 Overview

Monchain is a revolutionary Layer 1 blockchain that bridges the gap between Ethereum's battle-tested EVM and Cosmos' innovative interoperability. This landing page showcases our complete ecosystem of decentralized applications and developer tools.

### ✨ Key Features

- **🔥 Lightning Fast**: Sub-second finality with 10,000+ TPS throughput
- **🛡️ Enterprise Security**: Military-grade cryptographic protocols
- **🔗 EVM Compatible**: Deploy existing Solidity contracts without modification
- **🌐 Cosmos Interoperability**: Seamless cross-chain communication via IBC
- **💰 Low Cost**: Transaction fees as low as $0.001

---

## 🏗️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **Next.js** | React Framework | 14.0+ |
| **TypeScript** | Type Safety | 5.0+ |
| **Tailwind CSS** | Styling Framework | 3.0+ |
| **Lucide React** | Icon Library | Latest |
| **Turbopack** | Development Bundler | Latest |

---

## 🌟 Ecosystem

### Core Infrastructure
- **🪙 [Faucet](https://faucet.monchain.org)** - Get testnet tokens (1,000 MON daily)
- **🔍 [Explorer](https://explorer.monchain.org)** - Blockchain explorer with real-time data
- **⚙️ RPC Endpoint**: `https://rpc.monchain.org/`
- **🔗 Chain ID**: `16789`

### DeFi Applications
- **🔄 [MonSwap](https://monswap.org)** - Native DEX with 0.3% trading fees
- **🌱 [MonFarm](https://monfarm.org)** - Stake & Farm platform with up to 125% APY

### Developer Tools
- JSON-RPC API
- JavaScript SDK
- Smart Contract Templates
- Testing Framework

---

## 🛠️ Getting Started

### Prerequisites

```bash
Node.js 18.0+ and npm/yarn
```

### Installation

```bash
# Clone the repository
git clone https://github.com/monchain/landing-page.git
cd monchain-landing

# Install dependencies
npm install
# or
yarn install

# Start development server with Turbopack
npm run dev --turbo
# or
yarn dev --turbo
```

### Environment Setup

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://monchain.org
NEXT_PUBLIC_RPC_URL=https://rpc.monchain.org/
NEXT_PUBLIC_CHAIN_ID=16789
```

---

## 📁 Project Structure

```
monchain-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── favicon.ico        # Brand favicon
├── components/            # React components
│   ├── MonchainLanding.tsx # Main landing page component
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/                   # Utilities & configurations
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

---

## 🎨 Design System

### Color Palette
```css
Primary Gradient: purple-500 → cyan-500
Secondary: gray-900, gray-800
Accent Colors:
- Cyan: Faucet & Network tools
- Purple: Explorer & Core features  
- Orange: MonSwap DEX
- Green: MonFarm DeFi
```

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: 4xl - 7xl with gradient text
- **Body**: lg - xl for readability

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Required for production:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_RPC_URL`
- `NEXT_PUBLIC_CHAIN_ID`

---

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: < 500KB (gzipped)
- **Load Time**: < 2s on 3G networks

---

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
npm run type-check   # TypeScript validation
```

### Code Style

- **ESLint**: Airbnb configuration
- **Prettier**: Automatic code formatting
- **Husky**: Pre-commit hooks
- **TypeScript**: Strict mode enabled

---

## 🌐 Network Information

### Testnet Configuration

```javascript
// Add to MetaMask
const MonchainTestnet = {
  chainId: "0x4185", // 16789 in hex
  chainName: "Monchain Testnet",
  rpcUrls: ["https://rpc.monchain.org/"],
  nativeCurrency: {
    name: "MON",
    symbol: "MON",
    decimals: 18
  },
  blockExplorerUrls: ["https://explorer.monchain.org/"]
};
```

### Smart Contract Integration

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

// Deploy on Monchain - Full EVM compatibility
contract MonchainDApp {
    // Your existing Ethereum contracts work seamlessly
}
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 🔗 Links

- **🌐 Website**: [https://monchain.org](https://monchain.org)
- **📖 Documentation**: [https://docs.monchain.org](https://docs.monchain.org)
- **🔍 Explorer**: [https://explorer.monchain.org](https://explorer.monchain.org)
- **🪙 Faucet**: [https://faucet.monchain.org](https://faucet.monchain.org)
- **🔄 MonSwap**: [https://monswap.org](https://monswap.org)
- **🌱 MonFarm**: [https://monfarm.org](https://monfarm.org)

### Community

- **💬 Discord**: [Join our community](https://discord.gg/monchain)
- **🐦 Twitter**: [@MonchainOrg](https://twitter.com/MonchainOrg)
- **📝 Medium**: [Monchain Blog](https://medium.com/@monchain)
- **💻 GitHub**: [MonchainOrg](https://github.com/MonchainOrg)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment and hosting
- **Lucide** - For beautiful, consistent icons
- **Our Community** - For continuous feedback and support

---

<div align="center">

**Built with ❤️ by the Monchain Team**

*Empowering the future of decentralized infrastructure*

![Footer](https://img.shields.io/badge/Made%20with-Next.js%20%E2%9A%A1%20TypeScript-blue?style=flat&logo=heart&logoColor=red)

</div>