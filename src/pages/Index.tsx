const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="max-w-4xl w-full p-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Proposals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Intelligent contract opportunity scanning and bidding powered by AI
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Feature Cards */}
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-blue-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Smart Contract Scanning</h3>
              <p className="text-gray-500 mt-2">Automatically discover relevant contract opportunities across federal and state systems</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-purple-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">AI-Powered Bidding</h3>
              <p className="text-gray-500 mt-2">Leverage AI to create competitive bids based on your company's capabilities</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-indigo-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-700">Web3 Authentication</h3>
              <p className="text-gray-500 mt-2">Secure and seamless verification with WalletConnect integration</p>
            </div>
          </div>
          
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
            Connect Wallet to Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;