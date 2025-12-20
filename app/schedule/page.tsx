import ScheduleList from "@/components/ScheduleList";

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Conference Schedule</h1>
            <p className="text-xl text-gray-600 mb-2">
              October 15-17, 2025 | Hybrid: Singapore + Online
            </p>
            <p className="text-gray-500">
              Full schedule will be published after paper acceptance notifications
            </p>
          </div>
          <ScheduleList />
        </div>
      </div>
    </div>
  );
}

