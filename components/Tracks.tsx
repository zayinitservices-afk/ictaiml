const tracks = [
  {
    title: "Communication Systems",
    items: ["5G/6G", "MIMO & beamforming", "Network slicing", "IoT connectivity"],
  },
  {
    title: "Signal & Image Processing",
    items: ["Speech & audio", "Computer vision", "Remote sensing", "Medical imaging"],
  },
  {
    title: "Artificial Intelligence",
    items: ["Edge AI", "Generative models", "Responsible AI", "Federated learning"],
  },
  {
    title: "Robotics & Control",
    items: ["Autonomous systems", "SLAM", "Sensors & perception", "Industrial automation"],
  },
  {
    title: "Smart Systems & Applications",
    items: ["Smart grids", "Intelligent transportation", "Cyber-physical systems", "Digital twins"],
  },
];

export default function Tracks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {tracks.map((track) => (
        <div key={track.title} className="card h-full">
          <h3 className="text-xl font-semibold mb-2">{track.title}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
            {track.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

