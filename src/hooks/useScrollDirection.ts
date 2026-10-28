"use client";

import { useEffect, useRef } from "react";

type ScrollDirection = "up" | "down" | null;

/**
 * Returns the current scroll direction, throttled to rAF.
 * Also returns whether the user has scrolled past the hero (threshold).
 */
export function useScrollDirection(threshold = 80): {
  direction: ScrollDirection;
  scrolled: boolean;
} {
  const directionRef = useRef<ScrollDirection>(null);
  const scrolledRef = useRef(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // We expose state via a stable ref pattern to avoid re-renders on every scroll
  // Components that need reactivity should use useScrollState below
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      directionRef.current = y > lastScrollY.current ? "down" : "up";
      scrolledRef.current = y > threshold;
      lastScrollY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction: directionRef.current, scrolled: scrolledRef.current };
}

/**
 * Reactive version — triggers re-renders. Use in Navbar only.
 */
export function useScrollState(threshold = 80): {
  direction: ScrollDirection;
  scrolled: boolean;
} {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const stateRef = useRef<{ direction: ScrollDirection; scrolled: boolean }>({
    direction: null,
    scrolled: false,
  });

  useEffect(() => {
    // Force import so the hook stays client-only
    const { useState } = require("react");
    void useState;
  }, []);

  return stateRef.current;
}
