import type { Metadata } from "next";
import Image from "next/image";
import { roomsGridList } from "@/data/rooms";
import { RoomCard } from "@/components/ui/RoomCard";

export const metadata: Metadata = {
  title: "Rooms & Suites | Shri Siddh Hotel",
  description:
    "Six room types, from classic doubles to private villas. Every one designed for rest at Shri Siddh Hotel.",
};

export default function RoomsPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[380px] md:min-h-[460px] flex items-center justify-start overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=85"
            alt="Find Your Room at Shri Siddh Hotel"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        </div>

        <div className="container-site relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#c9a96e] uppercase mb-3">
              Rooms & Suites
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Find Your Room
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Six room types, from classic doubles to private villas. Every one designed for rest.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" aria-label="Available Rooms">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {roomsGridList.map((room) => (
              <RoomCard
                key={room.gridKey}
                room={room}
                className="bg-white border border-[#F0EAE1] hover:border-[#b8933f]/40 transition-colors"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
