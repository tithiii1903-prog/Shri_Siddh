"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function StickyBookNow() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > window.innerHeight * 0.8);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById("booking-bar");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const first = el.querySelector<HTMLElement>("button, input");
      setTimeout(() => first?.focus(), 600);
    } else {
      router.push("/#booking-bar");
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <Button
        variant="green"
        size="md"
        onClick={scrollToBooking}
        className="shadow-xl"
        aria-label="Book now — scroll to booking form"
      >
        Book Now
      </Button>
    </div>
  );
}
