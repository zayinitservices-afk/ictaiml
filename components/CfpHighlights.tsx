import Link from "next/link";

export default function CfpHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card">
        <h3 className="text-xl font-semibold mb-3">Call for Papers</h3>
        <p className="text-gray-600 mb-4">
          Electronics, communication, signal processing, and AI systems. Submission deadline: July 12, 2025.
        </p>
        <Link href="/cfp" className="text-indigo-600 hover:underline">
          Learn more →
        </Link>
      </div>
      
      <div className="card">
        <h3 className="text-xl font-semibold mb-3">Key Tracks</h3>
        <ul className="text-gray-600 space-y-1 text-sm">
          <li>• VLSI & embedded systems</li>
          <li>• Wireless & 6G communication</li>
          <li>• Signal & image processing</li>
          <li>• Applied AI & edge intelligence</li>
        </ul>
      </div>
      
      <div className="card">
        <h3 className="text-xl font-semibold mb-3">Important Dates</h3>
        <ul className="text-gray-600 space-y-1 text-sm">
          <li>Submission: May 09</li>
          <li>Notification: May 16</li>
          <li>Camera Ready: May 20</li>
          <li>Conference: May 25-26</li>
        </ul>
      </div>
    </div>
  );
}

