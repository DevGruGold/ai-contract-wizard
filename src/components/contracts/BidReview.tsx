import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, XCircle, Eye } from "lucide-react";
import { AI_AGENTS, type AIAgentRole } from "@/utils/aiAgents";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AIFlaggedIssue {
  agentRole: AIAgentRole;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

const mockIssues: AIFlaggedIssue[] = [
  {
    agentRole: 'compliance',
    severity: 'high',
    description: 'Missing required certifications in bid documentation'
  },
  {
    agentRole: 'technical',
    severity: 'medium',
    description: 'Proposed timeline may be unrealistic for scope'
  }
];

export const BidReview = () => {
  const [isReviewed, setIsReviewed] = useState(false);
  const { toast } = useToast();

  const handleApprove = () => {
    setIsReviewed(true);
    toast({
      title: "Bid Approved",
      description: "The flagged bid has been manually approved"
    });
  };

  const handleReject = () => {
    setIsReviewed(true);
    toast({
      title: "Bid Rejected",
      description: "The flagged bid has been rejected"
    });
  };

  const getSeverityColor = (severity: AIFlaggedIssue['severity']) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          Flagged Bid Review
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockIssues.map((issue, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {AI_AGENTS[issue.agentRole].provider}
                  </Badge>
                  <span className="font-medium">
                    {AI_AGENTS[issue.agentRole].description}
                  </span>
                </div>
                <Badge className={getSeverityColor(issue.severity)}>
                  {issue.severity} severity
                </Badge>
              </div>
              <p className="text-gray-600">{issue.description}</p>
            </div>
          ))}

          <div className="flex gap-4 mt-6">
            <Button
              onClick={handleApprove}
              disabled={isReviewed}
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Approve Bid
            </Button>
            <Button
              onClick={handleReject}
              disabled={isReviewed}
              variant="destructive"
              className="flex items-center gap-2"
            >
              <XCircle className="h-4 w-4" />
              Reject Bid
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};