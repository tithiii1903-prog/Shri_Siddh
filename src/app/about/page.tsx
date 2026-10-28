import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { services } from "@/data/services";
import { facilities } from "@/data/services";
import { VideoSection } from "@/components/sections/VideoSection";

export const metadata: Metadata = {
  title: "About Us | Shri Siddh Hotel",
  description:
    "Independent and family-owned since 2008. Built on the belief that a good hotel should feel like a sanctuary.",
};

const stats = [
  { value: "16", label: "Years of hospitality" },
  { value: "6", label: "Room types" },
  { value: "72", label: "Bedrooms and suites" },
  { value: "5", label: "Average guest rating" },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F5]">
      {/* ──────────────── 1. Hero Banner ──────────────── */}
      <section className="relative min-h-[420px] md:min-h-[500px] flex items-end justify-between overflow-hidden pt-28 pb-12 md:pb-16">
        {/* Background Dining / Sanctuary View */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=85"
            alt="Shri Siddh Hotel sanctuary interior"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark luxury gradient overlays matching Image 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </div>

        {/* Hero Content */}
        <div className="container-site relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Left Title Box */}
          <div className="max-w-xl">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#c9a96e] uppercase mb-3">
              Our Story
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-3">
              Built to Last, Built to Welcome
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Independent and family-owned since 2008. Built on the belief that a good hotel should feel like a sanctuary.
            </p>
          </div>

          {/* Right Ratings Strip matching Image 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 bg-black/40 backdrop-blur-md px-5 py-3 border border-white/15">
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

      {/* ──────────────── 2. Our Story / A Hotel Built to Last ──────────────── */}
      <section className="py-20 md:py-28" aria-labelledby="about-story-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Story Copy */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs font-semibold tracking-widest text-[#c9a96e] uppercase mb-2">
                Our Story
              </span>

              <h2
                id="about-story-heading"
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6"
              >
                A Hotel Built to Last
              </h2>

              <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                <p>
                  Shri Siddh was founded in 2008 with a simple vision: to create a hotel that blends timeless Indian hospitality with modern comfort and sophistication. Over the past sixteen years, we have welcomed travellers from across the globe into our serene sanctuary.
                </p>
                <p>
                  Our architecture was designed to honor traditional proportions while embracing contemporary minimalism. Every corridor, courtyard, and guest suite is planned to invite natural light, quiet reflection, and effortless relaxation.
                </p>
                <p>
                  From handcrafted wooden furnishings and bespoke stone accents to thoughtfully curated ambient lighting, every corner of our property reflects our dedication to durable craftsmanship and enduring beauty.
                </p>
                <p>
                  More than just a place to sleep, Shri Siddh is an experience of warmth, genuine care, and attentive service that stays with our guests long after their journey concludes.
                </p>
              </div>
            </div>

            {/* Right Column: Hotel Architecture Exterior Image */}
            <div className="lg:col-span-6">
              <div className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden shadow-sm border border-[#EDE4D5]">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80"
                  alt="Modern facade and architectural craftsmanship of Shri Siddh Hotel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 3. Stats Strip ──────────────── */}
      <section className="py-12 md:py-16 bg-[#FFF8E7] border-y border-[#EEDFCD]" aria-label="Key Hotel Statistics">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col ${
                  i !== 0 ? "md:border-l md:border-[#E8DCC4] md:pl-8" : ""
                }`}
              >
                <span className="font-serif text-4xl sm:text-5xl font-bold text-neutral-900 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-neutral-600 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────── 4. Hotel Services / Everything You Need ──────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Services overview">
        {/* Full-width luxury bedroom backdrop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1920&q=80"
            alt="Warm ambient bedroom at Shri Siddh"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Overlapping Card Container */}
        <div className="container-site relative z-10">
          <div className="bg-[#FFF8E7] p-8 sm:p-12 md:p-16 shadow-xl border border-[#EEDFCD] max-w-5xl mx-auto">
            <span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-2">
              Hotel Services
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight mb-8">
              Everything You Need
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((svc) => (
                <div
                  key={svc.id}
                  className="bg-white p-6 border border-[#EFE7DC] shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="font-serif text-2xl font-bold text-neutral-900 block mb-3">
                      {svc.number}
                    </span>
                    <h3 className="font-bold text-base text-neutral-900 mb-2">
                      {svc.name}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 5. Video Section ──────────────── */}
      <VideoSection />

      {/* ──────────────── 6. Hotel Facilities ──────────────── */}
      <section className="py-20 md:py-28 bg-[#FAF9F5]" aria-labelledby="facilities-heading">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#c9a96e] uppercase block mb-2">
                Hotel Facilities
              </span>
              <h2
                id="facilities-heading"
                className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight"
              >
                Our Luxorefi Hotel Facilities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md">
              The best facilities for you to make your vacation unforgettable.
            </p>
          </div>

          {/* 5-Column Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="flex flex-col bg-white border border-[#EFE7DC] rounded-sm overflow-hidden shadow-xs group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={facility.image}
                    alt={facility.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3.5 flex flex-col gap-1">
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900">
                    {facility.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500 leading-relaxed line-clamp-3">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
