"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews } from "@/data/ratings";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;
  // Maximum slide steps (allows scrolling through all reviews)
  const maxIndex = total - 1;

  const prev = () => setCurrentIndex((i) => (i > 0 ? i - 1 : maxIndex));
  const next = () => setCurrentIndex((i) => (i < maxIndex ? i + 1 : 0));

  return (
    <section
      className="py-16 md:py-24 bg-[var(--color-cream)] overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-site">
        {/* Header row matching Figma Image 1 */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 md:mb-12">
          <Reveal>
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#5c4a3e] uppercase block mb-2 font-sans">
                GUEST REVIEWS
              </span>
              <h2
                id="testimonials-heading"
                className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#1a1208] tracking-tight leading-tight"
              >
                What Guests Say
              </h2>
            </div>
          </Reveal>

          {/* Ratings Strip on the Right matching Image 1 */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm">
              {/* 5 gold stars */}
              <div className="flex gap-0.5 text-[#b8933f]" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#b8933f] text-[#b8933f]" />
                ))}
              </div>
              <span className="font-bold text-sm sm:text-base text-[#1a1208]">4.9 out of 5</span>

              {/* Google with authentic brand colors */}
              <span className="font-semibold text-sm">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>

              {/* Trustpilot */}
              <span className="flex items-center gap-1 font-semibold text-sm text-[#1a1208]">
                <span className="text-[#00B67A] text-base leading-none">★</span> Trustpilot
              </span>

              {/* Tripadvisor */}
              <span className="flex items-center gap-1.5 font-semibold text-sm text-[#1a1208]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" stroke="#00AA6C" strokeWidth="2" fill="#00AA6C" />
                  <circle cx="8.5" cy="11.5" r="2.2" fill="white" />
                  <circle cx="15.5" cy="11.5" r="2.2" fill="white" />
                  <circle cx="8.5" cy="11.5" r="1" fill="#1a1208" />
                  <circle cx="15.5" cy="11.5" r="1" fill="#1a1208" />
                </svg>
                Tripadvisor
              </span>

              {/* Booking.com */}
              <span className="font-bold text-sm text-[#003580]">
                Booking.com
              </span>
            </div>
          </Reveal>
        </div>

        {/* Working Slider Window */}
        <Reveal delay={0.15}>
          <div className="relative overflow-hidden w-full -mr-4 sm:-mr-8">
            <div
              className="flex gap-4 sm:gap-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                transform: `translateX(-${currentIndex * 290}px)`,
              }}
              role="list"
              aria-label="Guest reviews slider"
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="w-[265px] sm:w-[280px] lg:w-[295px] flex-shrink-0 bg-[#FFFDF6]/90 border border-[#E6D7BE] p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-shadow duration-300 hover:shadow-md min-h-[340px]"
                  role="listitem"
                >
                  {/* Top 5 Gold Stars */}
                  <div>
                    <div className="flex gap-1 mb-5" aria-label={`${review.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < review.rating
                              ? "fill-[#b8933f] text-[#b8933f]"
                              : "fill-[#E6D7BE] text-[#E6D7BE]"
                          }
                        />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-[13px] text-[#3a322c] leading-relaxed font-sans font-normal">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Details matching Figma Image 1 */}
                  <div className="pt-6 mt-auto">
                    <h4 className="font-sans font-bold text-sm text-[#1a1208] mb-0.5">
                      {review.author}
                    </h4>
                    <p className="font-sans text-xs text-[#666666] mb-3">
                      {review.location}
                    </p>
                    <span className="font-sans text-[11px] text-[#888888] font-normal block leading-tight">
                      Stayed at
                    </span>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-[#1a1208]">
                      {review.room}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Working Slider Controls at Bottom Center matching Image 1 */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-10 md:mt-12">
          {/* Previous Arrow */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="p-2 text-[#1a1208] hover:opacity-60 transition-opacity cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Progress Bar Track with sliding indicator */}
          <div className="w-44 sm:w-60 h-[2px] bg-black/15 relative overflow-hidden rounded-full">
            <div
              className="h-full bg-[#1a1208] transition-all duration-400 ease-out rounded-full"
              style={{
                width: `${100 / total}%`,
                transform: `translateX(${currentIndex * 100}%)`,
              }}
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={next}
            aria-label="Next review"
            className="p-2 text-[#1a1208] hover:opacity-60 transition-opacity cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
