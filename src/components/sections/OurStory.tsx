import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function OurStory() {
  return (
    <section
      className="py-[var(--section-py)] bg-[var(--color-cream)]"
      aria-labelledby="our-story-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal from="left">
            <div className="flex flex-col gap-5">
              <span className="label-text">Our Story</span>
              <h2
                id="our-story-heading"
                className="heading-section gold-underline in-view"
              >
                A Hotel Built to Last
              </h2>
              <p className="text-[var(--color-brown-mid)] leading-relaxed max-w-lg">
                Founded on the belief that true luxury lies in the details, Shri Siddh Hotel
                has stood as a landmark of gracious hospitality for over two decades. Every
                corner tells a story of craftsmanship, care, and a commitment to making
                every guest feel genuinely at home.
              </p>
              <p className="text-[var(--color-brown-mid)] leading-relaxed max-w-lg">
                Our team of dedicated professionals brings warmth and expertise to every
                interaction, ensuring that your stay exceeds every expectation — from the
                first welcome to the fond farewell.
              </p>
              <div className="mt-2">
                <Button variant="gold" href="/about">
                  Learn More →
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={0.15}>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="https://res.cloudinary.com/dgsjdegrj/image/upload/v1793166197/eebb5f0664a09e805cbb76e3d7f0575faeef3695.png"
                alt="Shri Siddh Hotel exterior — a landmark of architectural elegance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[var(--color-gold)] -z-10" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
