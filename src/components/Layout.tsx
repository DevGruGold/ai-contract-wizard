import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Menu, X, Search, FileText, Settings, LogOut } from "lucide-react";
import { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "You have been disconnected from your wallet"
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          <div className="p-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">AI Proposals</h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/"}>
              <Search className="mr-2" />
              Contract Scanner
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/bids"}>
              <FileText className="mr-2" />
              Active Bids
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => window.location.href = "/settings"}>
              <Settings className="mr-2" />
              Settings
            </Button>
          </nav>
          
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start text-red-500" onClick={handleLogout}>
              <LogOut className="mr-2" />
              Disconnect Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <main className="min-h-screen p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;