import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { StickyBookNow } from "@/components/ui/StickyBookNow";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shri Siddh Hotel — A Place Truly Worth Staying",
    template: "%s | Shri Siddh Hotel",
  },
  description:
    "Shri Siddh Hotel offers luxury rooms, suites, and villas with exceptional dining, spa, and concierge services. Experience gracious hospitality in the heart of Hyderabad.",
  keywords: [
    "luxury hotel Hyderabad",
    "Shri Siddh Hotel",
    "hotel rooms suites",
    "spa wellness hotel",
    "fine dining hotel",
  ],
  authors: [{ name: "Shri Siddh Hotel" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shrisiddh.com",
    siteName: "Shri Siddh Hotel",
    title: "Shri Siddh Hotel — A Place Truly Worth Staying",
    description:
      "Experience luxury hospitality at Shri Siddh Hotel. Elegantly appointed rooms, world-class dining, and personalized service await.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Shri Siddh Hotel grand lobby",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Siddh Hotel",
    description: "A Place Truly Worth Staying",
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: "Shri Siddh Hotel",
  description:
    "A premier hotel offering luxury rooms, fine dining, spa, and exceptional hospitality in Hyderabad.",
  url: "https://shrisiddh.com",
  telephone: "+91-123-456-7890",
  email: "info@shrisiddh.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Heritage Lane, Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1284",
    bestRating: "5",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
    { "@type": "LocationFeatureSpecification", name: "Spa", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Infinity Pool", value: true },
    { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(typeof window!=="undefined"&&"scrollRestoration" in window.history){window.history.scrollRestoration="manual";}if(typeof window!=="undefined"&&!window.location.hash){window.scrollTo(0,0);}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ScrollProgressBar />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyBookNow />
      </body>
    </html>
  );
}
