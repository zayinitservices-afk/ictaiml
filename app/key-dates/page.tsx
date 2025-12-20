export default function KeyDatesPage() {
  const dates = [
    { 
      phase: "Paper Submission", 
      date: "June 15, 2025", 
      description: "Full paper submission deadline (8 pages for regular, 4 pages for short papers)",
      status: "upcoming"
    },
    { 
      phase: "Notification of Acceptance", 
      date: "July 30, 2025", 
      description: "Authors will be notified of acceptance/rejection decisions",
      status: "upcoming"
    },
    { 
      phase: "Camera-Ready Submission", 
      date: "August 15, 2025", 
      description: "Final version with revisions must be submitted",
      status: "upcoming"
    },
    { 
      phase: "Early Bird Registration", 
      date: "August 20, 2025", 
      description: "Register early to avail discounted rates",
      status: "upcoming"
    },
    { 
      phase: "Regular Registration", 
      date: "September 5, 2025", 
      description: "Last date for regular registration",
      status: "upcoming"
    },
    { 
      phase: "Conference Dates", 
      date: "September 10-12, 2025", 
      description: "Three days of technical sessions, keynotes, and networking",
      status: "upcoming"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Important Dates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with all important deadlines and conference dates
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="space-y-8">
              {dates.map((item, idx) => (
                <div key={idx} className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{item.phase}</h3>
                      <div className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-sm whitespace-nowrap">
                        {item.date}
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t Miss Out!</h2>
            <p className="text-lg mb-6">
              Submit your papers early and register before the early bird deadline to save on registration fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/submit" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Submit Paper
              </a>
              <a href="/register" className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border-2 border-white">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

