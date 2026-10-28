import type { Metadata } from "next";
import Image from "next/image";
import { servicesPageList } from "@/data/services";

export const metadata: Metadata = {
  title: "Hotel Services | Shri Siddh Hotel",
  description:
    "Every service at Shri Siddh is designed to make your stay easier and worth remembering.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#FAF9F5]">
      {/* ──────────────── Hero Banner ──────────────── */}
      <section className="relative min-h-[380px] md:min-h-[460px] flex items-center justify-start overflow-hidden pt-28 pb-16">
        {/* Background Reception Desk Scene */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=85"
            alt="Hotel Services at Shri Siddh"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark luxury gradient overlays matching design */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45" />
        </div>

        {/* Content */}
        <div className="container-site relative z-10 w-full">
          <div className="max-w-2xl">
            {/* Tag */}
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#c9a96e] uppercase mb-3">
              Hotel Services
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Everything You Could Need
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Every service at Shri Siddh is designed to make your stay easier and worth remembering.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── Services List ──────────────── */}
      <section className="py-20 md:py-28" aria-label="Hotel Services List">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {servicesPageList.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center group"
              >
                {/* Left Column: Image */}
                <div className="md:col-span-6">
                  <div className="relative h-[280px] sm:h-[340px] md:h-[380px] w-full overflow-hidden shadow-xs border border-[#EDE4D5]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Right Column: Text Content */}
                <div className="md:col-span-6 flex flex-col justify-center">
                  {/* Category */}
                  <span className="text-sm font-medium text-neutral-500 mb-2 block tracking-wide">
                    {service.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight mb-4">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-lg">
                    {service.description}
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
