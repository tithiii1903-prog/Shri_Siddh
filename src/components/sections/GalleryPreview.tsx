"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

interface GalleryItemData {
  src: string;
  alt: string;
  title: string;
  category: string;
  span: string;
}

const galleryItems: GalleryItemData[] = [
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

export function GalleryPreview() {
  return (
    <section
      className="py-16 md:py-24 bg-[var(--color-cream)]"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-10 flex-wrap">
          <Reveal>
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#5c4a3e] uppercase block mb-2 font-sans">
                GALLERY
              </span>
              <h2
                id="gallery-heading"
                className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#1a1208] tracking-tight leading-tight font-sans"
              >
                Explore Your Dream Hotel
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 bg-gradient-to-r from-[#D4A353] via-[#C5933E] to-[#A87926] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:brightness-105 transition-all rounded-[3px]"
            >
              View Gallery →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
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
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
      />

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-400" />

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
