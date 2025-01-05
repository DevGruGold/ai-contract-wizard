import Layout from "@/components/Layout";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet } from 'viem/chains';
import { CompanyProfile } from "@/components/company/CompanyProfile";
import { ContractScanner } from "@/components/contracts/ContractScanner";
import { ContractList } from "@/components/contracts/ContractList";
import { AIClerk } from "@/components/AIClerk";

const projectId = 'b59c16c98b22d36a30ec986c5e28dde6';
const metadata = {
  name: 'Government Contract Management',
  description: 'AI-powered government contract management and vendor evaluation platform',
  url: 'https://aicontractwizard.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: 'light',
  themeVariables: {
    '--w3m-z-index': 1000,
  },
});

const Index = () => {
  return (
    <WagmiConfig config={wagmiConfig as any}>
      <Layout>
        <div className="container mx-auto max-w-6xl">
          <AIClerk />
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Government Contract Management</h1>
            <p className="text-gray-600">Manage, evaluate, and award contracts with AI-powered vendor assessment</p>
          </div>

          <div className="grid gap-6">
            <ContractScanner />
            <ContractList />
          </div>
        </div>
      </Layout>
    </WagmiConfig>
  );
};

export default Index;