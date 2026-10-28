"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { BookingBar } from "./BookingBar";
import { RatingsStrip } from "./RatingsStrip";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const scale = useTransform(smoothProgress, [0, 0.85], [1, 1.2]);
  const imageY = useTransform(smoothProgress, [0, 0.85], ["0%", "-4%"]);

  const textOpacity = useTransform(smoothProgress, [0, 0.38], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.38], [0, -55]);
  const textScale = useTransform(smoothProgress, [0, 0.38], [1, 0.96]);

  const barOpacity = useTransform(smoothProgress, [0, 0.65, 0.95], [1, 1, 0.85]);
  const barY = useTransform(smoothProgress, [0, 0.45], [0, -15]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-[180vh]"
      aria-label="Hero: A Place Truly Worth Staying"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        <motion.div
          className="absolute inset-0 z-0 origin-center"
          style={{
            scale: prefersReduced ? 1 : scale,
            y: prefersReduced ? "0%" : imageY,
          }}
        >
          <Image
            src="https://res.cloudinary.com/dgsjdegrj/image/upload/v1793165771/home_page.png"
            alt="Shri Siddh Hotel grand facade with warm glowing interior"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-black/75 via-black/35 to-transparent z-10 pointer-events-none" />

        <div className="pt-20 sm:pt-24 z-20 pointer-events-none" />

        <motion.div
          style={{
            opacity: prefersReduced ? 1 : textOpacity,
            y: prefersReduced ? 0 : textY,
            scale: prefersReduced ? 1 : textScale,
          }}
          className="relative z-20 text-center px-4 max-w-6xl mx-auto my-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/95 text-xs sm:text-sm md:text-base font-medium tracking-wide mb-2 sm:mb-3 drop-shadow-sm"
          >
            Welcome to Shri Siddh Hotel
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] mb-3 sm:mb-4 lg:whitespace-nowrap"
          >
            A Place Truly Worth Staying
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/90 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-6 sm:mb-7 leading-relaxed drop-shadow-sm font-light"
          >
            Rooms, suites, and villas designed for rest. Dining worth booking.
            <br className="hidden sm:inline" />
            {" "}A team that anticipates before you ask.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap"
          >
            <Link
              href="/rooms"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 bg-white text-black font-semibold text-xs sm:text-sm tracking-wide shadow-sm hover:bg-white/90 transition-all rounded-none"
            >
              View Rooms →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-2.5 sm:px-7 sm:py-3 bg-transparent border border-white/70 text-white font-medium text-xs sm:text-sm tracking-wide hover:bg-white/10 hover:border-white transition-all rounded-none"
            >
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            opacity: prefersReduced ? 1 : barOpacity,
            y: prefersReduced ? 0 : barY,
          }}
          className="relative z-20 w-full px-4 pb-3 sm:pb-5 max-w-5xl mx-auto"
        >
          <BookingBar />
          <div className="mt-2.5 sm:mt-3">
            <RatingsStrip transparent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
