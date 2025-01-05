import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Award, Users, Building2, Clock, Flag } from "lucide-react";
import { BidReview } from "./BidReview";
import { useState } from "react";

export const ContractList = () => {
  const [showBidReview, setShowBidReview] = useState(false);

  return (
    <div className="space-y-6">
      {showBidReview && (
        <BidReview />
      )}
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold mb-2">IT Infrastructure Upgrade</h3>
                <p className="text-sm text-gray-600 mb-4">Department of Defense</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Budget:</span>
                    <span className="text-sm text-gray-600">$1.5M - $2M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Deadline: 30 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">5 Qualified Vendors</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">AI Compliance Verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <Flag className="w-4 h-4" />
                    <span className="text-sm">2 Flagged Bids</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full">Review Submissions</Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-2 text-red-600 hover:text-red-700"
                onClick={() => setShowBidReview(true)}
              >
                <Flag className="w-4 h-4" />
                Review Flagged Bids
              </Button>
            </div>
          </CardContent>
        </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold mb-2">Healthcare Data System</h3>
              <p className="text-sm text-gray-600 mb-4">Health & Human Services</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Budget:</span>
                  <span className="text-sm text-gray-600">$800K - $1.2M</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm">Deadline: 45 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">3 Qualified Vendors</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-600">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">Pending Review</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">Review Submissions</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold mb-2">Cloud Migration Project</h3>
              <p className="text-sm text-gray-600 mb-4">State Agency</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Budget:</span>
                  <span className="text-sm text-gray-600">$2M - $2.5M</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Deadline: 60 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">7 Qualified Vendors</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">Committee Review</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">Review Submissions</Button>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};
