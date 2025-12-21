import ScheduleList from "@/components/ScheduleList";
import Link from "next/link";

export default function SchedulePage() {
  const dates = [
    { 
      phase: "Paper Submission", 
      date: "May 30, 2026", 
      description: "Full paper submission deadline (12 pages for regular, 6 pages for short papers)",
      status: "upcoming"
    },
    { 
      phase: "Notification of Acceptance", 
      date: "July 10, 2026", 
      description: "Authors will be notified of acceptance/rejection decisions",
      status: "upcoming"
    },
    { 
      phase: "Camera-Ready Submission", 
      date: "June 15, 2026", 
      description: "Final version with revisions must be submitted",
      status: "upcoming"
    },
    /* { 
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
    }, */
    { 
      phase: "Conference Dates", 
      date: "June 26 & 27, 2026", 
      description: "Two days of technical sessions, keynotes, and networking",
      status: "upcoming"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Conference Program</h1>
            <p className="text-xl text-gray-600 mb-2">
              June 26 & 27, 2026 | Hybrid: Annai Engineering College + Online
            </p>
            <p className="text-gray-500">
              Important dates, schedule, venue, and travel information
            </p>
          </div>

          {/* Important Dates Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Important Dates
            </h2>
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
          </section>

          {/* Conference Schedule Section */}
          {/* <section className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Conference Schedule
            </h2>
            <ScheduleList />
          </section> */}

          {/* Venue & Travel Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Venue & Travel
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1 rounded-t-xl -mt-8 -mx-8 mb-6"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Physical Venue</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold text-lg mb-2">Annai Engineering College</p>
                    <p className="text-gray-600">Kumbakonam</p>
                    <p className="text-gray-600">Kumbakonam</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Accessibility:</strong> The venue is fully accessible with wheelchair ramps, 
                      elevators, and accessible restrooms. Sign language interpretation available upon request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1 rounded-t-xl -mt-8 -mx-8 mb-6"></div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Online Participation</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    For participants unable to attend in person, full online access will be provided via 
                    our virtual conference platform. All sessions will be live-streamed with interactive Q&A.
                  </p>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <p className="text-sm">
                      <strong>Platform:</strong> Zoom Webinar + Conference App<br/>
                      <strong>Access:</strong> Login credentials will be sent via email after registration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Travel Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">By Air</h4>
                  <p className="text-sm text-gray-700">
                    Singapore Changi Airport (SIN) is 20 km from the venue. 
                    Direct flights from major cities worldwide. Airport shuttle and taxi services available.
                  </p>
                </div> */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">By Bus</h4>
                  <p className="text-sm text-gray-700">
                    Nearest bus stop: Kallapuliyur. 
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">By Taxi/Auto</h4>
                  <p className="text-sm text-gray-700">
                    Taxis and autos are readily available throughout Kumbakonam.
                    Approximately 20 minutes from Kumbakonam railway station and bus terminus.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Accommodation</h3>
              <p className="text-gray-700 mb-4">
                We have negotiated special rates with several hotels near the venue. Book early for best rates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold">Madhanam Inn</p>
                  <p className="text-sm text-gray-600">3 kms from venue • Rs 2000/night</p>
                  <p className="text-xs text-indigo-600 mt-1">Use code: ICTAIML2026</p>
                </div>
                {/* <div className="p-4 border border-gray-200 rounded-lg">
                  <p className="font-semibold">Pan Pacific Singapore</p>
                  <p className="text-sm text-gray-600">0.5 km from venue • SGD 280/night</p>
                  <p className="text-xs text-indigo-600 mt-1">Use code: ICECAA2025</p>
                </div> */}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t Miss Out!</h2>
            <p className="text-lg mb-6">
              Submit your papers early and register before the early bird deadline to save on registration fees.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/submit" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Submit Paper
              </Link>
              <Link href="/register" className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border-2 border-white">
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
