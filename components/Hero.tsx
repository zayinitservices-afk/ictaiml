'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const getBackgroundStyle = () => {
    if (currentSlide === 0) {
      return {
        background: 'linear-gradient(to right, #4f46e5, #9333ea, #db2777)',
      };
    } else {
      return {
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/ACET.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    }
  };

  return (
    <div className="relative text-white overflow-hidden">
      <div
        className="relative py-24 transition-all duration-1000"
        style={getBackgroundStyle()}
      >
        {currentSlide === 0 && (
          <>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
            }}></div>
          </>
        )}
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
                ICCINGES 2026
              </h1>
            </div>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              International Conference on Computational Intelligence and Next Generation Engineering Solutions
            </p>
            <p className="text-xl md:text-2xl opacity-95 mb-8 font-medium">
              Organized by
            </p>
            <p className="text-xl md:text-2xl opacity-95 mb-8 font-medium">
              Annai College of Engineering and Technology & ZAYIN IT SERVICES
            </p>
            <p className="text-xl md:text-2xl opacity-95 mb-8 font-medium">
              June 26 & 27, 2026 | Hybrid
            </p>
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 leading-relaxed opacity-95">
              A global forum bridging hardware, networks, and intelligent systems to build trustworthy,
              high-performance solutions for industry and society.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index ? 'w-8 bg-white' : 'w-3 bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

