import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Users, 
  Shield, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Building
} from 'lucide-react';

interface Contract {
  id: string;
  title: string;
  department: string;
  budget: number;
  status: 'draft' | 'published' | 'bidding' | 'evaluation' | 'awarded' | 'active';
  deadline: string;
  vendorCount: number;
  complianceScore: number;
  trustScore?: number;
}

interface Vendor {
  id: string;
  name: string;
  trustScore: number;
  complianceStatus: 'compliant' | 'non_compliant' | 'pending';
  performanceRating: number;
  contractsCompleted: number;
}

export const ProcurementDashboard: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setContracts([
        {
          id: '1',
          title: 'IT Infrastructure Modernization',
          department: 'Technology',
          budget: 2500000,
          status: 'evaluation',
          deadline: '2025-02-15',
          vendorCount: 8,
          complianceScore: 92,
          trustScore: 87
        },
        {
          id: '2',
          title: 'Office Supplies Annual Contract',
          department: 'Administration',
          budget: 150000,
          status: 'bidding',
          deadline: '2025-01-30',
          vendorCount: 12,
          complianceScore: 98,
          trustScore: 94
        },
        {
          id: '3',
          title: 'Security Services Contract',
          department: 'Security',
          budget: 800000,
          status: 'awarded',
          deadline: '2025-01-20',
          vendorCount: 5,
          complianceScore: 95,
          trustScore: 91
        }
      ]);

      setVendors([
        {
          id: '1',
          name: 'TechCorp Solutions',
          trustScore: 87,
          complianceStatus: 'compliant',
          performanceRating: 4.8,
          contractsCompleted: 23
        },
        {
          id: '2',
          name: 'Global Office Supplies',
          trustScore: 94,
          complianceStatus: 'compliant',
          performanceRating: 4.9,
          contractsCompleted: 156
        },
        {
          id: '3',
          name: 'SecureGuard Services',
          trustScore: 91,
          complianceStatus: 'compliant',
          performanceRating: 4.7,
          contractsCompleted: 34
        }
      ]);

      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft': return 'bg-gray-500';
      case 'published': return 'bg-blue-500';
      case 'bidding': return 'bg-yellow-500';
      case 'evaluation': return 'bg-orange-500';
      case 'awarded': return 'bg-green-500';
      case 'active': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft': return <FileText className="h-4 w-4" />;
      case 'published': return <Users className="h-4 w-4" />;
      case 'bidding': return <Clock className="h-4 w-4" />;
      case 'evaluation': return <Shield className="h-4 w-4" />;
      case 'awarded': return <CheckCircle className="h-4 w-4" />;
      case 'active': return <TrendingUp className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getTrustScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Procurement Dashboard</h1>
          <p className="text-gray-600 mt-2">AI-Powered Government Procurement Management</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <Building className="h-4 w-4 mr-2" />
            New Contract
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Contracts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12.4M</div>
            <p className="text-xs text-muted-foreground">+8.2% from last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Qualified Vendors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">+12 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.8%</div>
            <p className="text-xs text-muted-foreground">+1.2% improvement</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="contracts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="contracts">Active Contracts</TabsTrigger>
          <TabsTrigger value="vendors">Vendor Management</TabsTrigger>
          <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Monitor</TabsTrigger>
        </TabsList>

        <TabsContent value="contracts" className="space-y-4">
          <div className="grid gap-4">
            {contracts.map((contract) => (
              <Card key={contract.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-full ${getStatusColor(contract.status)} text-white`}>
                        {getStatusIcon(contract.status)}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{contract.title}</CardTitle>
                        <CardDescription>{contract.department} Department</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {contract.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Budget</p>
                      <p className="font-semibold">${contract.budget.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Vendors</p>
                      <p className="font-semibold">{contract.vendorCount} bidders</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Compliance Score</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={contract.complianceScore} className="flex-1" />
                        <span className="text-sm font-medium">{contract.complianceScore}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Trust Score</p>
                      <p className={`font-semibold ${getTrustScoreColor(contract.trustScore || 0)}`}>
                        {contract.trustScore}%
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="outline" size="sm">AI Analysis</Button>
                    {contract.status === 'evaluation' && (
                      <Button size="sm">Review Bids</Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vendors" className="space-y-4">
          <div className="grid gap-4">
            {vendors.map((vendor) => (
              <Card key={vendor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{vendor.name}</CardTitle>
                    <Badge 
                      variant={vendor.complianceStatus === 'compliant' ? 'default' : 'destructive'}
                    >
                      {vendor.complianceStatus}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Trust Score</p>
                      <p className={`text-xl font-bold ${getTrustScoreColor(vendor.trustScore)}`}>
                        {vendor.trustScore}%
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Performance</p>
                      <p className="text-xl font-bold">{vendor.performanceRating}/5.0</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Contracts</p>
                      <p className="text-xl font-bold">{vendor.contractsCompleted}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm">View Profile</Button>
                    <Button variant="outline" size="sm">Performance History</Button>
                    <Button variant="outline" size="sm">Trust Analysis</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Agent Performance</CardTitle>
                <CardDescription>Real-time AI agent activity and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Executive AI</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Vendor Evaluation AI</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Compliance AI</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Contract Generation AI</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Financial AI</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>XMRT Integration Status</CardTitle>
                <CardDescription>Blockchain and DeFi integration metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>XMART Token Balance</span>
                    <span className="font-semibold">1,250,000 XMART</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>DeFi Yield</span>
                    <span className="font-semibold text-green-600">+8.4% APY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>DAO Proposals</span>
                    <span className="font-semibold">3 Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Privacy Transactions</span>
                    <span className="font-semibold">47 This Month</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Monitoring</CardTitle>
              <CardDescription>Real-time compliance status and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">All contracts meet FAR requirements</p>
                    <p className="text-sm text-gray-600">Last checked: 2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">2 vendors pending security clearance</p>
                    <p className="text-sm text-gray-600">Action required within 5 days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">FISMA compliance verified</p>
                    <p className="text-sm text-gray-600">All systems secure and compliant</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

