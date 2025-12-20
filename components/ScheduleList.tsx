const dayOne = [
  { time: "09:00", title: "Opening Keynote: Edge AI for Everything", speaker: "Prof. Mei Lin", track: "Plenary" },
  { time: "10:30", title: "VLSI & Low-Power Circuits", speaker: "Session A1", track: "Room 1" },
  { time: "10:30", title: "6G & Massive MIMO", speaker: "Session B1", track: "Room 2" },
  { time: "14:00", title: "Tutorial: Foundation Models on Device", speaker: "Dr. Carlos Alvarez", track: "Tutorial Hall" },
];

const dayTwo = [
  { time: "09:00", title: "Plenary: Trustworthy Communication Networks", speaker: "Dr. Sara Nguyen", track: "Plenary" },
  { time: "10:30", title: "Signal & Image Processing", speaker: "Session A2", track: "Room 1" },
  { time: "10:30", title: "Robotics & Control", speaker: "Session B2", track: "Room 2" },
  { time: "14:00", title: "Industry Demos & Posters", speaker: "Exhibit Hall", track: "Expo" },
];

const dayThree = [
  { time: "09:00", title: "Panel: GenAI Safety & Verification", speaker: "Industry + Academia", track: "Plenary" },
  { time: "10:30", title: "Smart Systems & IoT", speaker: "Session A3", track: "Room 1" },
  { time: "10:30", title: "Edge AI & Embedded ML", speaker: "Session B3", track: "Room 2" },
  { time: "14:00", title: "Closing & Best Paper Awards", speaker: "Organizing Committee", track: "Plenary" },
];

function DaySchedule({ title, items }: { title: string; items: typeof dayOne }) {
  return (
    <div className="card">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx} className="border-l-4 border-indigo-500 pl-4">
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-600">{item.speaker}</p>
              </div>
              <div className="text-right min-w-[110px]">
                <p className="font-medium">{item.time}</p>
                <p className="text-sm text-gray-600">{item.track}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScheduleList() {
  return (
    <div className="space-y-6">
      <DaySchedule title="Day 1 — October 15, 2025" items={dayOne} />
      <DaySchedule title="Day 2 — October 16, 2025" items={dayTwo} />
      <DaySchedule title="Day 3 — October 17, 2025" items={dayThree} />

      <div className="text-center text-gray-500 py-8">
        <p>Full schedule with detailed sessions, chairs, and DOIs will be published after acceptance.</p>
      </div>
    </div>
  );
}

