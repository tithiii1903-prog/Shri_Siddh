import { rooms } from "@/data/rooms";
import { RoomCard } from "@/components/ui/RoomCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FindYourRoom() {
  return (
    <section
      id="rooms"
      className="py-[var(--section-py)] bg-[var(--color-cream)]"
      aria-labelledby="rooms-heading"
    >
      <div className="container-site">
        {/* Header row */}
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <Reveal>
            <SectionHeading
              label="Rooms & Suites"
              heading="Find Your Room"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="gold" href="/rooms">
              View Rooms →
            </Button>
          </Reveal>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.12} from="bottom">
              <RoomCard room={room} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
