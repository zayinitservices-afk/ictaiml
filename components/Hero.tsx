export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
      }}></div>
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
            ICTAIML 2026
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            International Conference on Artificial Intelligence & Machine Learning
          </p>
          <p className="text-xl md:text-2xl opacity-95 mb-8 font-medium">
            Organized by
          </p>
          <p className="text-xl md:text-2xl opacity-95 mb-8 font-medium">
            Annai College of Engineering and Technology & ZAYIN IT SERVICES
          </p>
          <p className="text-xl md:text-2xl opacity-95 mb-8 font-medium">
            May 25 & 26, 2026 | Hybrid: India + Online
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-8">
            Software Intelligence, communication, and cognition
          </p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed opacity-95">
            A global forum bridging hardware, networks, and intelligent systems to build trustworthy,
            high-performance solutions for industry and society.
          </p>
        </div>
      </div>
    </div>
  );
}

