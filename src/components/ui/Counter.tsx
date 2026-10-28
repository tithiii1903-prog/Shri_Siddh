"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

/** Animated number count-up triggered when scrolled into view */
export function Counter({
  target,
  duration = 1800,
  suffix = "",
  decimals = 0,
}: CounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration, decimals, prefersReduced]);

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </span>
  );
}
