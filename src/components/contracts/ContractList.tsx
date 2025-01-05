import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Award, Users } from "lucide-react";

export const ContractList = () => {
  return (
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
                <div className="flex items-center gap-2 text-green-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">5 AI-Verified Submissions</span>
                </div>
              </div>
            </div>
            <div className="text-green-500">
              <Award className="h-5 w-5" />
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" className="w-full">View & Evaluate</Button>
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
  );
};
