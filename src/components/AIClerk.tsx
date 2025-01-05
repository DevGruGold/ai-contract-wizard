import { Robot, HelpCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const AIClerk = () => {
  const { toast } = useToast();
  const [isHelping, setIsHelping] = useState(false);

  const handleAskForHelp = () => {
    setIsHelping(true);
    toast({
      title: "AI Assistant Active",
      description: "I'm here to help! Feel free to ask any questions about contract management.",
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Robot className="h-8 w-8 text-blue-500" />
        <div>
          <h2 className="text-lg font-semibold">Hello! I'm your AI Contract Assistant</h2>
          <p className="text-gray-600">I can help you manage contracts and evaluate bids</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">How can I help you?</h4>
              <p className="text-sm">
                I can assist with:
                - Contract scanning and analysis
                - Vendor evaluation
                - Bid review processes
                - Department coordination
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        <Button 
          variant="outline"
          onClick={handleAskForHelp}
          disabled={isHelping}
        >
          {isHelping ? "I'm here to help!" : "Ask for assistance"}
        </Button>
      </div>
    </div>
  );
};