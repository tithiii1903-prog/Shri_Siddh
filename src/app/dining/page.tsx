import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Dining & Restaurant | Shri Siddh Hotel",
  description:
    "Seasonal ingredients, local producers, and a dining room open from breakfast through dinner, seven days a week at Shri Siddh Hotel.",
};

const mealTimings = [
  {
    label: "Breakfast",
    start: "7:00",
    startPeriod: "am",
    end: "11:00",
    endPeriod: "am",
  },
  {
    label: "Lunch",
    start: "12:00",
    startPeriod: "pm",
    end: "3:00",
    endPeriod: "pm",
  },
  {
    label: "Dinner",
    start: "6:00",
    startPeriod: "pm",
    end: "10:30",
    endPeriod: "pm",
  },
  {
    label: "Brunch (weekends only)",
    start: "10:00",
    startPeriod: "am",
    end: "3:00",
    endPeriod: "pm",
  },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.029-.474-1.701-.705-2.8-2.433-2.884-2.547-.084-.114-.689-.918-.689-1.752 0-.834.437-1.244.593-1.414.156-.17.34-.213.454-.213.114 0 .228.001.328.006.105.006.246-.04.385.294.144.346.491 1.198.534 1.285.043.088.072.19.014.304-.058.114-.088.185-.175.286-.088.102-.185.228-.264.306-.088.088-.18.184-.078.36.102.175.454.748.974 1.212.671.599 1.238.785 1.413.873.175.088.277.073.38-.044.103-.117.438-.51.555-.685.117-.175.234-.146.394-.088.16.059 1.02.481 1.195.568.175.088.292.131.335.204.043.073.043.424-.101.829z" />
    </svg>
  );
}

export default function DiningPage() {
  const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(
    "Hi, I would like to enquire about reserving the Private Dining Room at Shri Siddh Hotel."
  )}`;

  return (
    <div className="bg-[#FAF9F5]">
      <section className="relative min-h-[380px] md:min-h-[480px] flex items-center justify-start overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&q=85"
            alt="The Restaurant at Shri Siddh Hotel"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45" />
        </div>

        <div className="container-site relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#c9a96e] uppercase mb-3">
              The Restaurant
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Cooking Worth Coming Down For
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Seasonal ingredients, local producers, and a dining room open from breakfast through dinner, seven days a week.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#FAF9F5] border-b border-[#EEDFCD]" aria-label="Restaurant Hours">
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {mealTimings.map((meal) => (
              <div key={meal.label} className="border-t border-[#D5C7B3] pt-3.5 flex flex-col">
                <span className="text-xs text-neutral-500 font-medium block mb-2">
                  {meal.label}
                </span>
                <div className="flex items-baseline gap-1 text-neutral-900 font-medium">
                  <span className="text-2xl sm:text-3xl font-bold">{meal.start}</span>
                  <span className="text-xs text-neutral-500">{meal.startPeriod}</span>
                  <span className="text-neutral-400 mx-1.5 font-light">-</span>
                  <span className="text-2xl sm:text-3xl font-bold">{meal.end}</span>
                  <span className="text-xs text-neutral-500">{meal.endPeriod}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#FAF9F5]" aria-label="Private Dining">
        <div className="container-site">
          <div className="relative">
            <div className="relative w-full md:w-3/4 h-[360px] sm:h-[460px] md:h-[540px] overflow-hidden shadow-xs border border-[#EDE4D5]">
              <Image
                src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=1400&q=80"
                alt="Romantic and Private Dining at Shri Siddh"
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-8 md:mt-0 md:absolute md:right-0 md:top-12 md:w-5/12 z-10 bg-[#FFF8E7] border border-[#EEDFCD] p-8 sm:p-10 shadow-lg">
              <span className="text-xs uppercase tracking-wider text-neutral-600 font-medium mb-3 block">
                Private Dining
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight mb-4">
                A table for your occasion.
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8">
                The private dining room seats up to 14 guests and can be reserved for business dinners, celebrations, and special events. Contact us to arrange.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm py-3 px-6 rounded-sm shadow-xs transition-colors duration-200"
              >
                <WhatsAppIcon size={18} />
                <span>Booking Enquiry →</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
