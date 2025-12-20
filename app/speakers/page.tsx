export default function SpeakersPage() {
  const speakers = [
    {
      name: "Dr. Gang Li",
      title: "Professor - School of Information Technology",
      affiliation: "Deakin University, Burwood Campus, Australia",
      bio: "Specialized in AI, data privacy, machine learning, and cyber resilience, directing research centres like TULIP LAB and CREST",
      image: "/speakers/sarah-chen.jpg",
    },
    {
      name: "Dr. Sachi Nandan Mohanty",
      title: "Professor - School of Computer Science and Engineering",
      affiliation: "VIT, Andra Pradesh, India",
      bio: "Specialization in fuzzy decision making, cognition, machine learning in health care, socisal network analysis, MCDM, brain computer interface. ",
      image: "/speakers/michael-rodriguez.jpg",
    },
    {
      name: "Dr. Xiao Zhi Gao",
      title: "Professor - School of Computing",
      affiliation: "University of Eastern, Finland",
      bio: "Specialization in data mining, machine learning, networking, industrial electronics, and signal processing.",
      image: "/speakers/priya-sharma.jpg",
    },
    {
      name: "Dr. Deepak Mishra",
      title: "Professor - Department of Avionics",
      affiliation: "Indian Institute of Space Science and Technology",
      bio: "Specialization in computer vision, deep learning, and robotics, with extensive experience in satellite image processing and navigation systems.",
      image: "/speakers/david-kim.jpg",
    },
    {
      name: "Dr. Sri Devi",
      title: "Associate Professor - Department of Information Systems",
      affiliation: "University of Malaya, Malaysia",
      bio: "Specialization in information retrieval, natural language processing, and data analytics.",
      image: "/speakers/david-kim.jpg",
    },
    {
      name: "Mr. Chandrasekar Surendhar",
      title: "Technical Project Manager",
      affiliation: "NTT Data Singapore PVT LTD, Singapore",
      bio: "Specialization in data storage management, automation, problem solving and optimization.",
      image: "/speakers/david-kim.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Keynote Speakers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from world-renowned experts in Electronics, Communication, and Artificial Intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2"></div>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                      <p className="text-indigo-600 font-semibold mb-1">{speaker.title}</p>
                      <p className="text-gray-600 text-sm mb-3">{speaker.affiliation}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Invited Speakers</h2>
            <p className="text-gray-600 mb-6">
              Additional invited speakers will be announced soon. Check back for updates.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">Industry Leaders</p>
                <p>Experts from leading tech companies</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">Academic Pioneers</p>
                <p>Renowned professors and researchers</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-2">Innovation Showcase</p>
                <p>Cutting-edge research presentations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

