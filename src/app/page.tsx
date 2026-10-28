import { Hero } from "@/components/sections/Hero";
import { FindYourRoom } from "@/components/sections/FindYourRoom";
import { Services } from "@/components/sections/Services";
import { OurStory } from "@/components/sections/OurStory";
import { VideoSection } from "@/components/sections/VideoSection";
import { HotelFacilities } from "@/components/sections/HotelFacilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";

/**
 * Home page — composes all sections in order matching the Figma design.
 * This is a Server Component; individual sections opt into "use client" as needed.
 */
export default function HomePage() {
  return (
    <>
      {/* Hero section with CodePen scroll animation, integrated booking bar and ratings */}
      <Hero />

      {/* Rooms */}
      <FindYourRoom />

      {/* Services — dark section */}
      <Services />

      {/* Our Story */}
      <OurStory />

      {/* Video */}
      <VideoSection />

      {/* Hotel Facilities */}
      <HotelFacilities />

      {/* Testimonials */}
      <Testimonials />

      {/* Gallery */}
      <GalleryPreview />

      {/* Blog */}
      <BlogPreview />
    </>
  );
}
