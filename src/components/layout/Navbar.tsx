"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLeft, navRight } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Scroll behavior with rAF throttle
  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      // Hide on scroll down, show on scroll up
      if (y > lastScrollY.current && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
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
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isDarkHero =
    pathname === "/" ||
    pathname === "/rooms" ||
    pathname === "/services" ||
    pathname === "/dining" ||
    pathname === "/gallery" ||
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/blog";
  const solidNav = scrolled || !isDarkHero;

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden && !menuOpen ? "-100%" : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          solidNav
            ? "bg-[#FEF7EA]/95 backdrop-blur-md shadow-xs border-b border-[#EEDFCD]"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav
          className="container-site flex items-center justify-between h-16 md:h-20"
          aria-label="Main navigation"
        >
          {/* Left links — desktop only */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            {navLeft.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
                scrolled={solidNav}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Logo — centered on desktop */}
          <Link
            href="/"
            className="flex items-center gap-2.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            aria-label="Shri Siddh — return to homepage"
          >
            <ShriSiddhLogo scrolled={solidNav} />
          </Link>

          {/* Right links — desktop only */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
            {navRight.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                active={pathname === item.href}
                scrolled={solidNav}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto p-2 -mr-2 rounded"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X
                size={24}
                className={solidNav ? "text-[var(--color-espresso)]" : "text-white"}
              />
            ) : (
              <Menu
                size={24}
                className={solidNav ? "text-[var(--color-espresso)]" : "text-white"}
              />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

/* ──────────────────────────────────────────── */
/* NavLink                                      */
/* ──────────────────────────────────────────── */
function NavLink({
  href,
  active,
  scrolled,
  children,
}: {
  href: string;
  active: boolean;
  scrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium tracking-wide transition-colors duration-200",
        "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0",
        "after:bg-current after:transition-all after:duration-300",
        "hover:after:w-full focus-visible:after:w-full",
        scrolled
          ? "text-[var(--color-espresso)] hover:text-[var(--color-gold)]"
          : "text-white/90 hover:text-white",
        active && (scrolled ? "text-[var(--color-gold)]" : "text-white after:w-full")
      )}
    >
      {children}
    </Link>
  );
}

/* ──────────────────────────────────────────── */
/* SVG Logo                                     */
/* ──────────────────────────────────────────── */
function ShriSiddhLogo({ scrolled }: { scrolled: boolean }) {
  const textColor = scrolled ? "#1a1208" : "#ffffff";
  const dotColor = scrolled ? "rgba(26, 18, 8, 0.4)" : "rgba(255, 255, 255, 0.65)";
  const centerDotColor = scrolled ? "#b8933f" : "rgba(255, 255, 255, 0.95)";

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2.5">
        {/* Dual curved wave monogram matching Figma */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <path
            d="M8 20C8 13.3726 13.3726 8 20 8C23.5 8 26.5 9.5 28 12C28 12 25.5 12.5 24 13.5C21 15.5 18 18 14 20C10 22 8 20 8 20Z"
            fill={textColor}
          />
          <path
            d="M28 16C28 22.6274 22.6274 28 16 28C12.5 28 9.5 26.5 8 24C8 24 10.5 23.5 12 22.5C15 20.5 18 18 22 16C26 14 28 16 28 16Z"
            fill={textColor}
          />
        </svg>
        <span
          style={{ color: textColor }}
          className="font-serif text-xl font-bold tracking-wide leading-none transition-colors duration-300"
        >
          Shri Siddh
        </span>
      </div>

      {/* Dotted pearl accent beneath logo from Figma */}
      <div className="flex items-center justify-center gap-1.5 mt-1.5" aria-hidden="true">
        {[-7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].map((offset) => {
          const isCenter = offset === 0;
          const isMid = Math.abs(offset) <= 2;
          return (
            <span
              key={offset}
              className="rounded-full inline-block transition-colors duration-300"
              style={{
                width: isCenter ? "5px" : isMid ? "4px" : "3px",
                height: isCenter ? "5px" : isMid ? "4px" : "3px",
                backgroundColor: isCenter ? centerDotColor : dotColor,
                opacity: Math.max(0.3, 1 - Math.abs(offset) * 0.08),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* MobileMenu                                   */
/* ──────────────────────────────────────────── */
import { MobileMenu } from "./MobileMenu";
