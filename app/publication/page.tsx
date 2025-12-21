export default function PublicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Publication</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All accepted papers will be published in conference proceedings and indexed in major databases
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1 rounded-t-xl -mt-8 -mx-8 mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Proceedings</h2>
              <p className="text-gray-700 mb-4">
                All accepted and presented papers will be published in the ICTAIML 2026 Conference Proceedings.
                The proceedings will be submitted for indexing in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>IEEE Xplore Digital Library</li>
                <li>Scopus</li>
                <li>Web of Science</li>
                <li>Google Scholar</li>
                <li>ACM Digital Library</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> At least one author must register and present the paper at the conference 
                  for inclusion in the proceedings.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-1 rounded-t-xl -mt-8 -mx-8 mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Issue Opportunities</h2>
              <p className="text-gray-700 mb-4">
                Selected high-quality papers will be invited for extension and publication in special issues 
                of prestigious journals:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>IEEE Transactions on Communications</li>
                <li>IEEE Transactions on AI</li>
                <li>ACM Transactions on Embedded Computing Systems</li>
                <li>Journal of Signal Processing Systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Publication Guidelines</h2>
            <div className="space-y-4 text-gray-700">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Paper Format</h3>
                <p>Papers must follow Springer paper template. Maximum length: 12 pages (regular papers) or 8 pages (short papers), excluding references.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Camera-Ready Submission</h3>
                <p>Camera-ready papers must be submitted by June 15, 2026. Authors must incorporate reviewer feedback and ensure compliance with formatting guidelines.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Copyright</h3>
                <p>Authors must sign the Springer copyright form upon acceptance. The copyright will be transferred to Springer for proceedings publication.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Plagiarism Policy</h3>
                <p>All submissions will be checked for plagiarism. Papers with similarity index above 15% will be rejected.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Camera-Ready Deadline</p>
                <p className="text-lg">June 15, 2026</p>
              </div>
              <div>
                <p className="font-semibold">Proceedings Publication</p>
                <p className="text-lg">June 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

