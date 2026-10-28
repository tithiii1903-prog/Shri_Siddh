import type { Metadata } from "next";
import Image from "next/image";
import { facilities } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { notFound } from "next/navigation";
import { BedDouble, Users, Maximize2 } from "lucide-react";
import { rooms } from "@/data/rooms";
import { RoomGalleryCarousel } from "@/components/ui/RoomGalleryCarousel";
import { RoomCard } from "@/components/ui/RoomCard";

interface RoomDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.id,
  }));
}

export async function generateMetadata({
  params,
}: RoomDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms.find((r) => r.id === slug);
  if (!room) return { title: "Room Not Found" };

  return {
    title: `${room.name} | Shri Siddh Hotel`,
    description: room.tagline,
  };
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.029-.474-1.701-.705-2.8-2.433-2.884-2.547-.084-.114-.689-.918-.689-1.752 0-.834.437-1.244.593-1.414.156-.17.34-.213.454-.213.114 0 .228.001.328.006.105.006.246-.04.385.294.144.346.491 1.198.534 1.285.043.088.072.19.014.304-.058.114-.088.185-.175.286-.088.102-.185.228-.264.306-.088.088-.18.184-.078.36.102.175.454.748.974 1.212.671.599 1.238.785 1.413.873.175.088.277.073.38-.044.103-.117.438-.51.555-.685.117-.175.234-.146.394-.088.16.059 1.02.481 1.195.568.175.088.292.131.335.204.043.073.043.424-.101.829z" />
    </svg>
  );
}

export default async function RoomDetailPage({ params }: RoomDetailPageProps) {
  const { slug } = await params;
  const room = rooms.find((r) => r.id === slug);

  if (!room) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(
    `Hi, I'd like to book the ${room.name} (₹${room.pricePerNight}/night) at Shri Siddh Hotel.`
  )}`;

  const otherRooms = rooms.filter((r) => r.id !== room.id);
  const suggestedRooms = otherRooms.length >= 3 ? otherRooms.slice(0, 3) : rooms;

  return (
    <div className="bg-[#FAF8F5]">
      <RoomGalleryCarousel images={room.gallery} roomName={room.name} />

      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-8 flex flex-col">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold mb-1">
              {room.tier}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-3">
              {room.name}
            </h1>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              {room.tagline}
            </p>

            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-4 tracking-tight">
                Room Overview
              </h2>
              <div className="flex flex-col gap-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>{room.overviewParagraph1}</p>
                <p>{room.overviewParagraph2}</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 tracking-tight">
                Room Facilities
              </h2>
              <p className="text-neutral-600 text-sm mb-6">
                Every room is designed to provide maximum comfort and convenience. These are accompanied by complimentary access to our hotel facilities:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {facilities.map((facility, i) => (
                  <Reveal key={facility.id} delay={i * 0.08} from="bottom">
                    <div className="flex flex-col gap-3 group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={facility.image}
                          alt={facility.imageAlt}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[var(--color-espresso)]">
                          {facility.name}
                        </h3>
                        <p className="text-xs text-[var(--color-brown-mid)] mt-1 leading-relaxed">
                          {facility.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-[#E8DCC4]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">
                    Room Rules & Regulations
                  </h3>
                  <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed list-disc pl-4 marker:text-[#b8933f]">
                    {room.rules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-4 tracking-tight">
                    Conclusion
                  </h3>
                  <div className="flex flex-col gap-3.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    <p>{room.conclusionParagraph1}</p>
                    <p>{room.conclusionParagraph2}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-[#FEF7EA] border border-[#EEDFCD] rounded-sm p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-neutral-600 font-medium">Start</span>
                <span className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 ml-1">
                  {room.currency}{room.pricePerNight.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-neutral-500">/night</span>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-700 py-3 border-y border-[#E8DCC4]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Maximize2 size={15} strokeWidth={1.5} className="text-[#b8933f]" />
                  {room.sqft} Sq Ft
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <BedDouble size={15} strokeWidth={1.5} className="text-[#b8933f]" />
                  {room.beds} Bed
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Users size={15} strokeWidth={1.5} className="text-[#b8933f]" />
                  {room.sleeps} Sleeps
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-3.5 px-6 rounded-sm flex items-center justify-center gap-2.5 transition-colors shadow-sm text-sm"
              >
                <WhatsAppIcon size={20} />
                <span>Book on WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>

        <section className="mt-20 pt-16 border-t border-[#E8DCC4]" aria-label="Other rooms you may like">
          <span className="text-xs font-semibold tracking-widest text-[#c9a96e] uppercase block mb-2">
            Rooms and Suites
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-8 tracking-tight">
            Other rooms you may like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestedRooms.map((suggestedRoom) => (
              <RoomCard
                key={suggestedRoom.id}
                room={suggestedRoom}
                className="bg-white border border-[#F0EAE1] hover:border-[#b8933f]/40 transition-colors"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
