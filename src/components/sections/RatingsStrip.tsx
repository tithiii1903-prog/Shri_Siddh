import { Star } from "lucide-react";

export function RatingsStrip({ transparent = false }: { transparent?: boolean }) {
  return (
    <div
      className={transparent ? "bg-transparent py-2.5" : "bg-[var(--color-espresso)] py-5"}
      aria-label="Guest ratings across platforms"
    >
      <div className="container-site flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-10 text-white">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={transparent ? "fill-white text-white" : "fill-[var(--color-gold)] text-[var(--color-gold)]"}
              />
            ))}
          </div>
          <span className="text-sm font-semibold tracking-wide">4.9 out of 5</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium">
          <span>Google</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium">
          <span className="text-[#00b67a] text-base leading-none">★</span>
          <span>Trustpilot</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-medium">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="11.5" r="2" fill="currentColor" />
            <circle cx="15.5" cy="11.5" r="2" fill="currentColor" />
            <circle cx="8.5" cy="11.5" r="0.8" fill="#1a1208" />
            <circle cx="15.5" cy="11.5" r="0.8" fill="#1a1208" />
            <path d="M12 12V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Tripadvisor</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm font-bold tracking-tight">
          <span>Booking.com</span>
        </div>
      </div>
    </div>
  );
}
