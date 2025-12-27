const milestones = [
  { label: "Submission Deadline", date: "May 30, 2026" },
  { label: "Reviews Due", date: "June 5, 2026" },
  { label: "Notification", date: "June 10, 2026" },
  { label: "Camera Ready", date: "June 15, 2026" },
  { label: "Author Registration", date: "June 18, 2026" },
  { label: "Conference", date: "June 26 & 27, 2026" },
];

export default function Timeline() {
  return (
    <div className="card">
      <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
      <ol className="relative border-l border-indigo-200 space-y-4">
        {milestones.map((m) => (
          <li key={m.label} className="pl-4 ml-2">
            <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[6px] mt-1.5"></div>
            <p className="text-sm text-gray-500">{m.date}</p>
            <p className="font-semibold text-gray-900">{m.label}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

