const committees = [
  {
    title: "General Chairs",
    people: [
      "Prof. A. K. Rao (NUS, Singapore)",
      "Dr. Mei Lin (NTU, Singapore)",
    ],
  },
  {
    title: "Program Chairs",
    people: [
      "Prof. Carlos Alvarez (UPC, Spain)",
      "Dr. Sara Nguyen (UNSW, Australia)",
    ],
  },
  {
    title: "Industry Liaison",
    people: [
      "Priya Desai (Qualcomm)",
      "Kenji Watanabe (Sony AI)",
    ],
  },
  {
    title: "Workshops & Tutorials",
    people: [
      "Dr. Isha Kapoor (IIT Delhi)",
      "Dr. Peter Huang (HKUST)",
    ],
  },
];

export default function Committee() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {committees.map((group) => (
        <div key={group.title} className="card">
          <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
          <ul className="space-y-1 text-gray-700 text-sm">
            {group.people.map((p) => (
              <li key={p}>• {p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

