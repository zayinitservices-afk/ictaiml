export default function Venue() {
  return (
    <div className="card grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-2xl font-semibold mb-2">Venue</h3>
        <p className="text-gray-700 mb-3">Anai Engineering College, Kovilacheri</p>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
          <li>Hybrid setup with high-bandwidth live streaming</li>
          <li>On-site poster halls & demo booths</li>
          <li>Easy access from Kumbakonam Bus Terminus (20 mins)</li>
        </ul>
        <p className="text-sm text-gray-600">
          Accommodation: partner hotels within 5–10 minutes walk; discounted rates for registered authors.
        </p>
      </div>
      <div className="rounded-lg overflow-hidden border border-gray-200">
        <iframe
          title="Venue map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=103.856%2C1.280%2C103.864%2C1.287&layer=mapnik"
          className="w-full h-64"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

