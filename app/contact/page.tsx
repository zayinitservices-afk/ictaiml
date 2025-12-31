export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the ICCINGES 2026 organizing committee
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input type="text" className="input" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input type="email" className="input" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input type="text" className="input" required />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea className="input min-h-[150px]" required />
          </div>
          
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
            </div>
            
            <div className="card bg-gradient-to-br from-indigo-50 to-purple-50">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">General Inquiries</h4>
                  <p className="text-gray-700">Email: iccinges.con@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">Technical Support</h4>
                  <p className="text-gray-700">Email: iccinges.con@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">Registration</h4>
                  <p className="text-gray-700">Email: iccinges.con@gmail.com</p>
                </div>
                {/* <div className="pt-6 border-t border-gray-300">
                  <h4 className="font-semibold text-lg mb-2 text-gray-900">Office Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM (UTC+8)</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

