"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/ratings";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = reviews.length;

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <section
      className="py-[var(--section-py)] bg-[var(--color-review-bg)]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <Reveal>
            <div>
              <span className="label-text block mb-2">Guest Reviews</span>
              <h2
                id="testimonials-heading"
                className="heading-section gold-underline in-view"
              >
                What Guests Say
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 text-sm text-[var(--color-espresso)]">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <span className="font-bold text-lg">4.9 out of 5</span>
              <span className="text-[var(--color-google)] font-semibold">Google</span>
              <span className="text-[#00B67A] font-semibold">Trustpilot</span>
              <span className="text-[#34E0A1] font-semibold hidden sm:block">Tripadvisor</span>
              <span className="text-[#003580] font-semibold hidden sm:block">Booking.com</span>
            </div>
          </Reveal>
        </div>

        {/* Cards — visible window */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-[var(--ease-luxury)]"
            style={{ transform: `translateX(-${active * (100 / 3 + 1.5)}%)` }}
            role="list"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-[calc(100%-1.25rem)] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] flex-shrink-0 bg-white p-6 border border-[var(--color-cream-dark)]"
                role="listitem"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "fill-[var(--color-gold)] text-[var(--color-gold)]"
                          : "fill-[var(--color-cream-dark)] text-[var(--color-cream-dark)]"
                      }
                    />
                  ))}
                </div>
                {/* Text */}
                <p className="text-sm text-[var(--color-brown-mid)] leading-relaxed mb-6">
                  {review.text}
                </p>
                {/* Author */}
                <div>
                  <p className="font-semibold text-sm text-[var(--color-espresso)]">{review.author}</p>
                  <p className="text-xs text-[var(--color-brown-mid)] mt-0.5">{review.location}</p>
                  <p className="text-xs text-[var(--color-brown-mid)]">Stayed at {review.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 border border-[var(--color-espresso)] flex items-center justify-center hover:bg-[var(--color-espresso)] hover:text-white transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          {/* Progress bar */}
          <div className="w-32 h-px bg-[var(--color-espresso)]/20 relative">
            <div
              className="h-full bg-[var(--color-espresso)] transition-all duration-500"
              style={{ width: `${((active + 1) / total) * 100}%` }}
            />
          </div>
          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 border border-[var(--color-espresso)] flex items-center justify-center hover:bg-[var(--color-espresso)] hover:text-white transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
