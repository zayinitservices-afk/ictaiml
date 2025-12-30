import Link from "next/link";

export default function AuthorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Author Guidelines</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guidelines and instructions for authors submitting to ICCINGES 2026
            </p>
          </div>

          <div className="space-y-8">
            {/* Instructions Section */}
            <section className="card">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-2 border-indigo-500">
                Instructions
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  Prospective authors are invited to submit full-length original research papers. While submitting a manuscript to ICCINGES 2026, the authors acknowledge that no paper substantially similar in content has been or will be submitted to another journal, conference, or workshop during the review period. In such a case, the paper will be rejected without review.
                </p>
                <p>
                  Papers must be electronically submitted before the deadline expires without exception through Microsoft CMT. The paper must not exceed 12 pages in length (including all text, figures, and references). The manuscript must be submitted in PDF format only and the file size of the manuscript should not exceed 10 MB.
                </p>
                <p>
                  ICCINGES 2026 follows a single-blind review process. Hence, the authors must NOT remove the names and affiliations of authors from the paper. Use a proper tool to convert the resulting source into a PDF document that has only scalable fonts with all fonts embedded. The images embedded in the paper must not contain transparent pixels (i.e., an alpha-channel of a transparent color), since this could lead to problems when displaying or printing the PDF. The PDF manuscript must not have Adobe Document Protection or Document Security enabled.
                </p>
              </div>
            </section>

            {/* Paper Preparation Section */}
            <section className="card">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 pb-3 border-b-2 border-indigo-500">
                Paper Preparation
              </h2>
              <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                <p>
                  Authors must use the manuscript template specified here. The LaTeX and Word templates can be downloaded from the following links:
                </p>
                <div className="flex flex-wrap gap-3 my-4">
                  <a 
                    href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium text-lg"
                  >
                    Springer Conference Proceedings Guidelines
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 my-4">
                  <a 
                    href="/springer-template.docm" 
                    download 
                    className="btn-primary inline-block"
                  >
                    Download DOCX Template
                  </a>
                  <a 
                    href="/template.zip" 
                    download 
                    className="bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
                  >
                    Download LaTeX Template
                  </a>
                </div>
              </div>
            </section>

            {/* Important Note Section */}
            <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Important note:</h2>
              <p className="text-blue-800 text-lg leading-relaxed">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. The link will be updated in this website very soon.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

