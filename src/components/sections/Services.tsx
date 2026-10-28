"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { services } from "@/data/services";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const imageY = useTransform(smoothProgress, [0, 1], ["-12%", "12%"]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.08, 1.02]);

  const cardY = useTransform(smoothProgress, [0, 0.75], [90, -40]);
  const cardScale = useTransform(smoothProgress, [0, 0.45], [0.97, 1]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FAF8F5] pt-0 pb-16 md:pb-28 overflow-hidden"
      aria-labelledby="services-heading"
    >
      <div className="relative h-[440px] sm:h-[540px] md:h-[620px] lg:h-[700px] w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-[124%] -top-[12%] origin-center"
          style={{
            y: prefersReduced ? "0%" : imageY,
            scale: prefersReduced ? 1 : imageScale,
          }}
        >
          <Image
            src="https://res.cloudinary.com/dgsjdegrj/image/upload/v1793166082/6d7de90c846080c8be45ca5da26b4ab1ec23550d.png"
            alt="Shri Siddh luxury bar, cafe lounge, and selfie wall"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <motion.div
        style={{
          y: prefersReduced ? 0 : cardY,
          scale: prefersReduced ? 1 : cardScale,
        }}
        className="container-site relative z-10 -mt-48 sm:-mt-60 md:-mt-72 lg:-mt-80 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-[#FFF2D0] pt-10 sm:pt-12 pb-12 sm:pb-14 px-7 sm:px-12 md:px-14 shadow-2xl border border-[#F0E0B8]">
          <span className="text-[15px] text-[#2c221e] font-normal block mb-2 font-sans tracking-normal">
            Hotel Services
          </span>

          <h2
            id="services-heading"
            className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#1a1208] tracking-tight mb-8 sm:mb-10 leading-tight"
          >
            Everything You Need
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 sm:p-8 flex flex-col justify-start text-left shadow-xs border border-white/60 hover:shadow-md transition-all duration-300 group"
              >
                <span className="font-sans font-bold text-2xl sm:text-3xl text-black leading-none mb-4 block group-hover:text-[#b8933f] transition-colors">
                  {service.number}
                </span>

                <h3 className="font-sans font-bold text-lg sm:text-xl text-black leading-snug mb-3">
                  {service.name}
                </h3>

                <p className="font-sans text-xs sm:text-[13px] text-[#555555] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
