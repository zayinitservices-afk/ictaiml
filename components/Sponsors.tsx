const sponsors = [
  { tier: "Platinum", names: ["SynTech Labs", "GlobalComm"] },
  { tier: "Gold", names: ["AeroAI", "PhotonCircuits", "SignalWorks"] },
  { tier: "Community", names: ["Open Hardware Alliance", "OSS AI Collective"] },
];

export default function Sponsors() {
  return (
    <div className="card">
      <h3 className="text-2xl font-semibold mb-4">Sponsors & Partners</h3>
      <div className="space-y-3">
        {sponsors.map((s) => (
          <div key={s.tier}>
            <p className="font-semibold text-gray-800">{s.tier}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-700 mt-1">
              {s.names.map((name) => (
                <span key={name} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Interested in sponsoring? Email sponsorship@icecaa2025.org for the prospectus.
      </p>
    </div>
  );
}

