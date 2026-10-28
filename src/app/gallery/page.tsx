"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import { Star, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";



interface GalleryItemData {
  src: string;
  alt: string;
  title: string;
  category: string;
  span: string;
}

const galleryItems: GalleryItemData[] = [
  // Row 1: Wide (2 cols), Portrait (1 col), Portrait (1 col)
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793165771/home_page.png",
    alt: "Hotel facade and grand lobby entrance",
    title: "Grand Entrance Facade",
    category: "Architecture",
    span: "lg:col-span-2",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167009/f557dfe8d3ad7219040e44f89e2c7a418cf90249.png",
    alt: "Modern line art mural with warm ambient lighting",
    title: "Modern Line Art Mural",
    category: "Art & Interior",
    span: "lg:col-span-1",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167009/6eb111dfea57e66dea96952dd01fd7416042e003.png",
    alt: "Shri Siddh golden wall emblem and indoor botanical garden",
    title: "Shri Siddh Emblem",
    category: "Heritage",
    span: "lg:col-span-1",
  },
  // Row 2: Portrait (1 col, 400x500), Portrait (1 col), Wide (2 cols)
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/f867bf494ac30e8ad11e1c7e4e4c825dd0c205d9.png",
    alt: "Luxury bedroom suite with arched architectural headboard",
    title: "Signature Bedroom Suite",
    category: "Accommodations",
    span: "lg:col-span-1",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/ad2c359eaad5943264ed56aa58fb48ec8ac62836.png",
    alt: "3D sculpted relief faces wall with illuminated granite staircase",
    title: "Sculpted Relief Wall",
    category: "Art & Design",
    span: "lg:col-span-1",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/e11155825a8d31c336dddc8ececd703d3ec0e8a3.png",
    alt: "Grand dining room with velvet banquet seating and ornamental moldings",
    title: "Grand Dining Hall",
    category: "Fine Dining",
    span: "lg:col-span-2",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793165771/home_page.png",
    alt: "Hotel facade and grand lobby entrance",
    title: "Grand Entrance Facade",
    category: "Architecture",
    span: "lg:col-span-2",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167009/f557dfe8d3ad7219040e44f89e2c7a418cf90249.png",
    alt: "Modern line art mural with warm ambient lighting",
    title: "Modern Line Art Mural",
    category: "Art & Interior",
    span: "lg:col-span-1",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167009/6eb111dfea57e66dea96952dd01fd7416042e003.png",
    alt: "Shri Siddh golden wall emblem and indoor botanical garden",
    title: "Shri Siddh Emblem",
    category: "Heritage",
    span: "lg:col-span-1",
  },
  // Row 2: Portrait (1 col, 400x500), Portrait (1 col), Wide (2 cols)
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/f867bf494ac30e8ad11e1c7e4e4c825dd0c205d9.png",
    alt: "Luxury bedroom suite with arched architectural headboard",
    title: "Signature Bedroom Suite",
    category: "Accommodations",
    span: "lg:col-span-1",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/ad2c359eaad5943264ed56aa58fb48ec8ac62836.png",
    alt: "3D sculpted relief faces wall with illuminated granite staircase",
    title: "Sculpted Relief Wall",
    category: "Art & Design",
    span: "lg:col-span-1",
  },
  {
    src: "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793167007/e11155825a8d31c336dddc8ececd703d3ec0e8a3.png",
    alt: "Grand dining room with velvet banquet seating and ornamental moldings",
    title: "Grand Dining Hall",
    category: "Fine Dining",
    span: "lg:col-span-2",
  },
];

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState<GalleryItemData | null>(null);

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
        <Reveal delay={0.15}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {galleryItems.map((item, index) => (
                      <GalleryCard key={index} item={item} />
                    ))}
                  </div>
                </Reveal>
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
function GalleryCard({ item }: { item: GalleryItemData }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      href="/gallery"
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden block ${item.span} h-[260px] sm:h-[320px] lg:h-[360px] cursor-pointer bg-[#e8deca] shadow-xs`}
      aria-label={`${item.category}: ${item.title}`}
    >
      {/* Zooming background image on hover */}
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      {/* Smooth dark vignette overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-400" />

      {/* Kathy Kato Cursor-Tracking Floating Badge (KRQOKY) */}
      <div
        className="absolute top-0 left-0 pointer-events-none z-20 transition-opacity duration-300 hidden md:block"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
          willChange: "transform",
        }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md px-4 py-2.5 shadow-2xl border border-white/60 text-left min-w-[170px]">
          <span className="text-[10px] font-bold tracking-widest text-[#b8933f] uppercase block mb-0.5">
            {item.category}
          </span>
          <h3 className="text-sm font-semibold text-[#1a1208] leading-tight">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Mobile/Touch Fallback Label */}
      <div className="md:hidden absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
        <span className="text-[10px] font-bold tracking-widest text-[#e8c872] uppercase block mb-0.5">
          {item.category}
        </span>
        <h3 className="text-sm font-semibold text-white leading-tight">
          {item.title}
        </h3>
      </div>
    </Link>
  );
}
