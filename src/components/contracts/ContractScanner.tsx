import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContractScanner = () => {
  const { toast } = useToast();

  const handleScan = () => {
    toast({
      title: "AI Contract Analysis",
      description: "Analyzing vendor submissions and compliance requirements..."
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search contracts, vendors, or departments..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <Button onClick={handleScan} className="w-full md:w-auto flex items-center gap-2">
            <Brain className="w-4 h-4" />
            AI Compliance Check
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};