export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Register for Conference</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join ICECAA 2025 - Register now to secure your spot
            </p>
          </div>
          <div className="flex justify-center">
            <div className="card max-w-3xl w-full">
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
        </div>
      </div>
    </div>
  );
}

