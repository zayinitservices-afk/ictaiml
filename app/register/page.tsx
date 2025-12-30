export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Register for Conference</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join ICCINGES 2026 - Register now to secure your spot
            </p>
          </div>

          {/* Registration Not Started Notice */}
          <div className="flex justify-center mb-8">
            <div className="max-w-4xl w-full">
              <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                }}></div>
                <div className="relative text-center text-white">
                  <div className="flex justify-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
                      <svg 
                        className="w-16 h-16 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                    Registration Not Yet Started
                  </h2>
                  <p className="text-xl md:text-2xl opacity-95 leading-relaxed max-w-2xl mx-auto">
                    Registration for ICCINGES 2026 will open soon. Please check back later or visit our 
                    <a href="/cfp" className="underline font-semibold hover:opacity-80 ml-1">Call for Papers</a> page for important dates and updates.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a 
                      href="/cfp" 
                      className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      View Important Dates
                    </a>
                    <a 
                      href="/contact" 
                      className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-all"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Commented Out Registration Form */}
          {/*
          <div className="flex justify-center">
            <div className="card max-w-3xl w-full opacity-50 pointer-events-none">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">First Name</label>
              <input type="text" className="input" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Last Name</label>
              <input type="text" className="input" required />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="input" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Affiliation</label>
            <input type="text" className="input" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Attendance Mode</label>
            <select className="input" required>
              <option value="">Select mode</option>
            <option value="physical">Physical (Singapore)</option>
            <option value="online">Online</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Payment Method</label>
            <select className="input" required>
              <option value="">Select method</option>
              <option value="bank">Bank Transfer</option>
              <option value="upi">UPI</option>
              <option value="invoice">Request Invoice</option>
            </select>
          </div>
          
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>
        
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> After registration, you will receive payment instructions via email. 
            An invoice will be generated for your records.
          </p>
        </div>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

