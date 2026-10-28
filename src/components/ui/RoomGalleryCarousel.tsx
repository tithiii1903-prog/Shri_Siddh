"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RoomGalleryCarouselProps {
  images: string[];
  roomName: string;
}

export function RoomGalleryCarousel({ images, roomName }: RoomGalleryCarouselProps) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const nextIndex = (index + 1) % images.length;

  return (
    <section className="relative w-full bg-neutral-900 overflow-hidden pt-20 md:pt-24" aria-label="Room photo gallery">
      {/* 2-photo display matching Image 2 */}
      <div className="relative h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full flex">
        {/* Photo 1 (Main view) */}
        <div className="relative w-full md:w-1/2 h-full border-r border-black/20">
          <Image
            src={images[index]}
            alt={`${roomName} - View ${index + 1}`}
            fill
            priority
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Photo 2 (Side / bathroom view) — hidden on small mobile, visible on tablet+ */}
        <div className="relative hidden md:block md:w-1/2 h-full">
          <Image
            src={images[nextIndex]}
            alt={`${roomName} - View ${nextIndex + 1}`}
            fill
            className="object-cover transition-all duration-500"
          />
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Thumbnails indicator */}
      <div className="flex items-center justify-center gap-2 py-3 bg-[#1a1208]">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-[#c9a96e]" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
