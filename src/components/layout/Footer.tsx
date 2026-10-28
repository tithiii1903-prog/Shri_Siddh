import Link from "next/link";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  const year = 2026;

  return (
    <footer
      className="bg-[#FEF7EA] text-[#2c221a] border-t border-[#EEDFCD]"
      role="contentinfo"
    >
      <div className="container-site py-16">
        {/* Centered Brand Logo */}
        <div className="flex flex-col items-center justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-3 group"
            aria-label="Shri Siddh — home"
          >
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <circle cx="16" cy="16" r="15" stroke="#b8933f" strokeWidth="1.5" />
              <path
                d="M21 11.5C21 9.57 19.43 8 17.5 8H12v5.5h9V11.5ZM11 16.5C11 18.43 12.57 20 14.5 20H20v-5.5H11V16.5ZM12 20v4h8"
                stroke="#b8933f"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="font-serif text-2xl font-bold text-[#b8933f] tracking-wide">
              Shri Siddh
            </span>
          </Link>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-sm">
          {/* 1. Navigate */}
          <div>
            <h3 className="font-bold text-[#1a1208] mb-4 text-sm tracking-wide">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5 text-[#5c4a3b]">
              <li>
                <Link href="/rooms" className="hover:text-[#b8933f] transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#b8933f] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/dining" className="hover:text-[#b8933f] transition-colors">
                  Dining
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#b8933f] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#b8933f] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#b8933f] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Legal */}
          <div>
            <h3 className="font-bold text-[#1a1208] mb-4 text-sm tracking-wide">
              Legal
            </h3>
            <ul className="flex flex-col gap-2.5 text-[#5c4a3b]">
              <li>
                <Link href="/privacy" className="hover:text-[#b8933f] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#b8933f] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Contact */}
          <div>
            <h3 className="font-bold text-[#1a1208] mb-4 text-sm tracking-wide">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 text-[#5c4a3b]">
              <li>1 Grand Avenue, City Centre</li>
              <li>
                <a href="tel:+911234567890" className="hover:text-[#b8933f] transition-colors">
                  +91 - 1234567890
                </a>
              </li>
              <li>
                <a href="mailto:info@shrisiddh.com" className="hover:text-[#b8933f] transition-colors">
                  info@shrisiddh.com
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Social */}
          <div>
            <h3 className="font-bold text-[#1a1208] mb-4 text-sm tracking-wide">
              Social
            </h3>
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <InstagramIcon size={16} />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <FacebookIcon size={16} />
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-14 pt-6 border-t border-[#E8DCC4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7b6b5e]">
          <p>© {year} Shri Siddh. All rights reserved.</p>
          <p>Crafted By : Kontent Kraft Digital</p>
        </div>
      </div>
    </footer>
  );
}
