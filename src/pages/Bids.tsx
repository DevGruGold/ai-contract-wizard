import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const Bids = () => {
  const { toast } = useToast();

  const handleBidSubmit = () => {
    toast({
      title: "Bid Submitted Successfully",
      description: "Your AI-enhanced bid has been submitted to the contract system."
    });
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Active Bids</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Federal IT Infrastructure Project</CardTitle>
              <CardDescription>Due in 5 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Bid Status</p>
                  <p className="text-sm text-muted-foreground">AI Analysis in Progress</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Contract Value</p>
                  <p className="text-sm text-muted-foreground">$2.5M - $3.2M</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Win Probability</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-400 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <Button className="w-full" onClick={handleBidSubmit}>Submit Bid</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>State Healthcare System Update</CardTitle>
              <CardDescription>Due in 12 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Bid Status</p>
                  <p className="text-sm text-muted-foreground">Draft</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Contract Value</p>
                  <p className="text-sm text-muted-foreground">$1.8M - $2.1M</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Win Probability</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Continue Draft</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Bids;