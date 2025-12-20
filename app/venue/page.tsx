export default function VenuePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Venue & Travel</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ICECAA 2025 will be held in a hybrid format: Physical venue in Barcelona, Spain + Online participation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1 rounded-t-xl -mt-8 -mx-8 mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Physical Venue</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-lg mb-2">Barcelona Convention Center</p>
                  <p className="text-gray-600">Av. de la Reina Maria Cristina, s/n</p>
                  <p className="text-gray-600">08004 Barcelona, Spain</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Online Participation</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">By Air</h3>
                <p className="text-sm text-gray-700">
                  Barcelona-El Prat Airport (BCN) is 12 km from the venue. 
                  Direct flights from major cities worldwide.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">By Train</h3>
                <p className="text-sm text-gray-700">
                  Barcelona Sants station connects to high-speed rail network. 
                  Metro Line 3 to Plaça Espanya (5 min walk).
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">By Metro</h3>
                <p className="text-sm text-gray-700">
                  Plaça Espanya station (Lines L1, L3, L8). 
                  The venue is a 5-minute walk from the station.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accommodation</h2>
            <p className="text-gray-700 mb-4">
              We have negotiated special rates with several hotels near the venue. Book early for best rates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="font-semibold">Hotel Barcelona Center</p>
                <p className="text-sm text-gray-600">0.5 km from venue • €120/night</p>
                <p className="text-xs text-indigo-600 mt-1">Use code: ICECAA2025</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <p className="font-semibold">NH Collection Barcelona</p>
                <p className="text-sm text-gray-600">1.2 km from venue • €150/night</p>
                <p className="text-xs text-indigo-600 mt-1">Use code: ICECAA2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

