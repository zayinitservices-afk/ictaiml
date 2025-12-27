'use client';
import Image from 'next/image';
import { useState } from 'react';

type SpeakerImageProps = {
  src: string;
  alt: string;
  name: string;
  className?: string;
};

export default function SpeakerImage({ src, alt, name, className = '' }: SpeakerImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Fallback to initials
    const initials = name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
    
    return (
      <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold ${className}`}>
        {initials}
      </div>
    );
  }

  return (
    <div className={`relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-indigo-100 shadow-lg bg-gradient-to-br from-indigo-400 to-purple-500 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        className="w-full h-full object-cover"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  );
}

