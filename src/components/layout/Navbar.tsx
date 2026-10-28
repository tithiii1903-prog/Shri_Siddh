"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { navLeft, navRight } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
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

          <Link
            href="/"
            className="flex items-center gap-2.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            aria-label="Shri Siddh — return to homepage"
          >
            <div className="flex flex-col items-center">
              <Image
                src="/logo.png"
                alt="Shri Siddh"
                width={150}
                height={38}
                priority
                className={cn(
                  "h-8 md:h-9 w-auto object-contain transition-all duration-300",
                  !solidNav && "brightness-0 invert"
                )}
              />
            </div>
          </Link>

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

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}

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
