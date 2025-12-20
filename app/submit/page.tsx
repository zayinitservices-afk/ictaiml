import SubmitForm from "@/components/SubmitForm";

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </div>
    </div>
  );
}

