"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const galleryItems: GalleryImage[] = [
  // Row 1
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85",
    alt: "Hotel reception lobby with green sofa and warm lighting at Shri Siddh",
    category: "Lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85",
    alt: "Guest enjoying morning relaxation in luxury suite at Shri Siddh",
    category: "Suites",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=85",
    alt: "Grand dining hall with chandelier and polished parquet floor at Shri Siddh",
    category: "Dining",
  },
  // Row 2
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&q=85",
    alt: "Overhead view of resort pool and sun loungers at Shri Siddh",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=85",
    alt: "Artisan bedside styling with orchid and woven lantern at Shri Siddh",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
    alt: "Spacious master bedroom with king bed and panoramic windows at Shri Siddh",
    category: "Rooms",
  },
  // Row 3
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85",
    alt: "Hotel reception lobby and luggage concierge at Shri Siddh",
    category: "Lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=85",
    alt: "Serene bedroom sanctuary with classic draped curtains at Shri Siddh",
    category: "Suites",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=85",
    alt: "Fine dining ambiance with banquet seating at Shri Siddh",
    category: "Dining",
  },
  // Row 4
  {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&q=85",
    alt: "Tropical poolside oasis and relaxation loungers at Shri Siddh",
    category: "Pool",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=900&q=85",
    alt: "Warm handcrafted bedside details and luxury linens at Shri Siddh",
    category: "Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
    alt: "Grand luxury bedroom layout with ambient bedside illumination at Shri Siddh",
    category: "Rooms",
  },
];

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<GalleryImage | null>(null);

  return (
    <div className="bg-[#FAF9F5]">
      {/* ──────────────── Hero Banner ──────────────── */}
      <section className="relative min-h-[420px] md:min-h-[500px] flex items-end justify-between overflow-hidden pt-28 pb-12 md:pb-16">
        {/* Background Lobby Architecture Scene */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=85"
            alt="Shri Siddh Hotel Grand Architecture"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark luxury gradient overlays matching Image 2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Content: Left title box + Right ratings strip */}
        <div className="container-site relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left Title Box (Frosted look matching Image 2) */}
          <div className="max-w-xl">
            {/* Tag Badge */}
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white tracking-wider uppercase mb-3">
              Shri Siddh
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-3">
              A Look Inside
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Rooms, dining, and spaces worth seeing before you arrive.
            </p>
          </div>

          {/* Right Ratings Strip matching Image 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-black/40 backdrop-blur-md px-5 py-3 border border-white/15">
            {/* Stars + Score */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-[#c9a96e]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#c9a96e] text-[#c9a96e]" />
                ))}
              </div>
              <span className="text-white text-xs font-semibold tracking-wide">
                4.9 out of 5
              </span>
            </div>

            {/* Platform Badges */}
            <div className="flex items-center gap-4 text-[11px] text-white/70 font-medium">
              <span className="hover:text-white transition-colors">Google</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Trustpilot</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Tripadvisor</span>
              <span>•</span>
              <span className="hover:text-white transition-colors">Booking.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── Photo Mosaic Grid ──────────────── */}
      <section className="py-16 md:py-24" aria-label="Photo Gallery Grid">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setActivePhoto(item)}
                className="group relative h-[320px] sm:h-[360px] md:h-[400px] w-full overflow-hidden cursor-pointer border border-[#EFE7DC] shadow-xs"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle dark hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

                {/* Category badge appearing on hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-white text-xs font-medium tracking-wide">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── Lightbox Modal ──────────────── */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photo preview"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo preview"
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X size={22} />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activePhoto.src}
              alt={activePhoto.alt}
              fill
              className="object-contain"
            />
            <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/80 text-xs sm:text-sm bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full">
              {activePhoto.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
