import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { createWeb3Modal, defaultConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// Initialize Web3Modal configuration
const projectId = 'b59c16c98b22d36a30ec986c5e28dde6'
const metadata = {
  name: 'AI Contract Wizard',
  description: 'AI-powered contract analysis and bidding platform',
  url: 'https://aicontractwizard.com', 
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultConfig({
  chains,
  projectId,
  metadata,
})

createWeb3Modal({ wagmiConfig, projectId, chains })

const Index = () => {
  const { toast } = useToast();

  const handleScan = () => {
    toast({
      title: "Scanning Contracts",
      description: "AI is analyzing available opportunities..."
    });
  };

  return (
    <WagmiConfig config={wagmiConfig}>
      <Layout>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Contract Scanner</h1>
            <p className="text-gray-600">Discover and analyze contract opportunities</p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="flex-1 w-full">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search contracts..."
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                  <Button onClick={handleScan} className="w-full md:w-auto">
                    Start AI Scan
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold mb-2">Federal IT Services</h3>
                      <p className="text-sm text-gray-600 mb-4">Department of Defense</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Value:</span>
                          <span className="text-sm text-gray-600">$1.5M - $2M</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Due:</span>
                          <span className="text-sm text-gray-600">30 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-green-500">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold mb-2">State Healthcare System</h3>
                      <p className="text-sm text-gray-600 mb-4">Department of Health</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Value:</span>
                          <span className="text-sm text-gray-600">$800K - $1.2M</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Due:</span>
                          <span className="text-sm text-gray-600">45 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-yellow-500">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold mb-2">Cloud Migration</h3>
                      <p className="text-sm text-gray-600 mb-4">State Agency</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Value:</span>
                          <span className="text-sm text-gray-600">$2M - $2.5M</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">Due:</span>
                          <span className="text-sm text-gray-600">60 days</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-blue-500">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Layout>
    </WagmiConfig>
  );
};

export default Index;