import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Menu, X, Search, FileText, Settings, LogOut, Building2, Users, Award } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been disconnected from your account"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">GovContracts AI</h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/"}>
              <Search className="mr-2" />
              Contract Management
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/vendors"}>
              <Building2 className="mr-2" />
              Vendor Directory
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/evaluations"}>
              <Award className="mr-2" />
              Bid Evaluations
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/departments"}>
              <Users className="mr-2" />
              Departments
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/settings"}>
              <Settings className="mr-2" />
              Settings
            </Button>
          </nav>
          
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-500" onClick={handleLogout}>
              <LogOut className="mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div className="lg:pl-64">
        <main className="min-h-screen p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;