// import SubmitForm from "@/components/SubmitForm";

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Beautiful Landing Content */}
          <div className="flex flex-col items-center justify-center min-h-[70vh]">
            <div className="text-center max-w-4xl mx-auto space-y-8">
              {/* Icon/Illustration */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-8">
                    <svg 
                      className="w-24 h-24 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Paper Submission
              </h1>

              {/* Subheading */}
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
                Submit your research contribution to ICCINGES 2026
              </p>

              {/* Main Message Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-indigo-200 mb-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="flex-shrink-0">
                      <svg 
                        className="w-12 h-12 text-indigo-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      Coming Soon
                    </h2>
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    The Microsoft CMT link for paper submission will be updated soon on this page.
                  </p>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-lg text-gray-600">
                      Please check back later or visit our <a href="/author" className="text-indigo-600 hover:text-indigo-800 font-semibold underline">Author Guidelines</a> page for submission instructions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Submission Guidelines
                  </h3>
                  <p className="text-gray-700">
                    Review the author guidelines and paper preparation requirements before submitting.
                  </p>
                  <a 
                    href="/author" 
                    className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-semibold"
                  >
                    View Guidelines →
                  </a>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Important Dates
                  </h3>
                  <p className="text-gray-700">
                    Stay updated with submission deadlines and important conference dates.
                  </p>
                  <a 
                    href="/cfp" 
                    className="inline-block mt-4 text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    View Dates →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Commented Out Original Code */}
          {/* 
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Submit Your Paper</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Submit your research contribution to ICECAA 2025
            </p>
          </div>
          <div className="flex justify-center">
            <div className="card max-w-4xl w-full">
              <SubmitForm />
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
}

