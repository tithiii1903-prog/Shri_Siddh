"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus first link on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] bg-[var(--color-espresso)] flex flex-col"
        >
          {/* Close button */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
            <span className="font-serif text-xl text-white font-semibold">
              Menu
            </span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
              >
                <Link
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "block py-4 border-b border-white/10 font-serif text-2xl font-semibold",
                    "transition-colors duration-200",
                    pathname === item.href
                      ? "text-[var(--color-gold-light)]"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer in menu */}
          <div className="px-6 py-6 border-t border-white/10">
            <p className="text-white/40 text-sm">
              © 2026 Shri Siddh Hotel
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
