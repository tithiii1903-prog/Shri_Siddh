import { Hero } from "@/components/sections/Hero";
import { FindYourRoom } from "@/components/sections/FindYourRoom";
import { Services } from "@/components/sections/Services";
import { OurStory } from "@/components/sections/OurStory";
import { VideoSection } from "@/components/sections/VideoSection";
import { HotelFacilities } from "@/components/sections/HotelFacilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FindYourRoom />
      <Services />
      <OurStory />
      <VideoSection />
      <HotelFacilities />
      <Testimonials />
      <GalleryPreview />
      <BlogPreview />
    </>
  );
}
