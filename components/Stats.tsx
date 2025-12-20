type Stat = { label: string; value: string; subtext?: string };

const stats: Stat[] = [
  { label: "Delegates", value: "1000+", subtext: "Hybrid (on-site + virtual)" },
  { label: "Expected Papers", value: "300+", subtext: "Computer Science, Communications, AI" },
  { label: "Countries", value: "100+", subtext: "Truly international" },
  { label: "Tracks", value: "4", subtext: "AI & Machine Learning, Networks and Communications, Security Systems, and Bio-Info" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="card text-center">
          <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">{stat.label}</p>
          {stat.subtext && <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>}
        </div>
      ))}
    </div>
  );
}

