export default function CfpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Call for Papers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Submit your research contributions to ICTAIML 2026
            </p>
          </div>
          <div className="card space-y-8">
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Scope</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            ICTAIML 2026 welcomes original research and industry case studies spanning software modules,
            communication systems, signal processing, and artificial intelligence. Interdisciplinary
            works that connect hardware, software networks, and AI-driven applications are encouraged.
          </p>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 pb-3 border-b-2 border-indigo-500">Topics of Interest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High performance computing</li>
              <li>Blockchain Technologies</li>
              <li>Quantum computing</li>
              <li>Applied AI, edge intelligence, and federated learning</li>
              <li>Deep learning and evolutionary systems</li>
              <li>Big data and intelligent systems</li>
              <li>Business analytics and data engineering</li>
              <li>Cyber security and information retrieval systems</li>
              <li>Data privacy</li>
              <li>Community information systems</li>
              <li>Smart grid systems, intelligent control, and robotics</li>
              <li>Communication in wireless multimedia sensor networks</li>
              <li>5g networks and internet of things (IOT)</li>
              <li>Internet security and privacy localization</li>
              <li>Mobile and ubiquitous computing</li>
              <li>Computational biology</li>
              <li>Biomedical signal analysis</li>
            </ul>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Generative AI for efficient algorithms</li>
              <li>Cloud computing and solutions</li>
              <li>Digital image processing</li>
              <li>Natural language processing</li>
              <li>Communication theory</li>
              <li>Computational theory</li>
              <li>Genetic engineering</li>
              <li>AI in bio-technology</li>
              <li>5G & 6G technologies</li>
              <li>Internet of things</li>
              <li>Speech recognition</li>
              <li>Data mining</li>
              <li>Sensor-based intelligence</li>
              <li>Mobile computing</li>
              <li>Quantum computing</li>
              <li>Green computing</li>
              <li>Mobile edge and collaborative computing</li>

            </ul>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-3">
              <li className="flex justify-between"><span>Submission Deadline:</span> <strong>May 30, 2026</strong></li>
              <li className="flex justify-between"><span>Notification:</span> <strong>June 10, 2026</strong></li>
            </ul>
            <ul className="space-y-3">
              <li className="flex justify-between"><span>Camera Ready:</span> <strong>June 15, 2026</strong></li>
              <li className="flex justify-between"><span>Conference:</span> <strong>June 26-27, 2026</strong></li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 pb-3 border-b-2 border-indigo-500">Submission Guidelines</h2>
          <p className="text-gray-700 mb-4">
            Papers must follow the Springer paper template. Regular papers: up to 8 pages; short
            papers/work-in-progress: up to 4 pages. Include keywords and ORCID where available.
            Submissions undergo double-blind peer review; please anonymize manuscripts.
          </p>
          <div className="flex flex-wrap gap-3">
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
              className="bg-white border-2 border-indigo-600 text-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-50 inline-block"
            >
              Download LaTeX Template
            </a>
            {/* <a 
              href="/author-checklist.pdf" 
              download 
              className="text-indigo-600 hover:underline inline-flex items-center"
            >
              Author Checklist
            </a> */}
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Review Process</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Each paper receives at least two independent reviews plus meta-review.</li>
            <li>Criteria: originality, technical quality, clarity, reproducibility, and relevance.</li>
            <li>Acceptance requires consensus from reviewers and program chairs.</li>
            <li>Accepted papers must be presented on-site or live online; recordings are required.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-900 pb-3 border-b-2 border-indigo-500">Submission Steps</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Prepare your manuscript using the provided template (PDF upload only).</li>
            <li>Create an account and submit via the <strong>/submit</strong> page.</li>
            <li>Include keywords, affiliations, and ORCID (optional).</li>
            <li>Await confirmation email; update versions until the deadline.</li>
          </ol>
        </section>

        <section className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Registration & Publication</h2>
          <p className="text-gray-700 mb-2">
            At least one author of an accepted paper must register. Proceedings will be submitted to IEEE
            Xplore/Scopus (subject to approval) and made available to attendees. Offline payment and invoices
            are supported for institutional processing.
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            <li>Author (on-site): USD 650 | Author (online): USD 450</li>
            <li>Student (on-site): USD 400 | Student (online): USD 250</li>
            <li>Extra page charge (if approved): USD 75/page</li>
          </ul>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
}

