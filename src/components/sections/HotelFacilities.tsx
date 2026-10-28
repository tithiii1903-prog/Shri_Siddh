import Image from "next/image";
import { facilities } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";

export function HotelFacilities() {
  return (
    <section
      className="py-[var(--section-py)] bg-white"
      aria-labelledby="facilities-heading"
    >
      <div className="container-site">
        <Reveal className="mb-10">
          <span className="label-text block mb-2">Hotel Facilities</span>
          <h2
            id="facilities-heading"
            className="heading-section gold-underline in-view"
          >
            Our Luxorefi Hotel
          </h2>
          <p className="text-[var(--color-brown-mid)] mt-3 max-w-2xl text-sm">
            Thoughtfully curated facilities for both leisure and business guests.
          </p>
        </Reveal>

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
      </div>
    </section>
  );
}
