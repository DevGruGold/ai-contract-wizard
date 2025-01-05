import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wand2, Shield } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useAIService } from "@/utils/aiService";

export const CompanyProfile = () => {
  const [companyDescription, setCompanyDescription] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const aiService = useAIService();

  const generateCompanyProfile = async () => {
    const enhancedText = await aiService.enhanceWithAI(companyDescription);
    setCompanyDescription(enhancedText);
    
    const verification = await aiService.verifySubmission(enhancedText);
    setIsVerified(verification.verified);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Company Profile</CardTitle>
          {isVerified && (
            <div className="flex items-center gap-2 text-green-600">
              <Shield className="w-4 h-4" />
              <span className="text-sm">AI Verified</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Company Description</label>
          <div className="flex gap-2">
            <Textarea 
              placeholder="Describe your company's capabilities, experience, and past performance metrics..."
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              className="min-h-[150px]"
            />
          </div>
          <Button 
            onClick={generateCompanyProfile}
            className="w-full sm:w-auto flex items-center gap-2"
          >
            <Wand2 className="w-4 h-4" />
            Enhance & Verify with AI
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};