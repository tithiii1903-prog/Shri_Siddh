import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogGridList } from "@/data/blog";

export const metadata: Metadata = {
  title: "From Our Journal | Shri Siddh Hotel",
  description:
    "Discover the art of Indian hospitality through stories of local culture, culinary traditions, memorable journeys, and the little details that make every stay special.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#FAF9F5]">
      {/* ──────────────── 1. Hero Banner ──────────────── */}
      <section className="relative min-h-[380px] md:min-h-[480px] flex items-center justify-start overflow-hidden pt-28 pb-16">
        {/* Background Dining / Sanctuary View */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=85"
            alt="From Our Journal at Shri Siddh Hotel"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark luxury gradient overlays matching Image 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45" />
        </div>

        {/* Content */}
        <div className="container-site relative z-10 w-full">
          <div className="max-w-2xl">
            {/* Tag */}
            <span className="inline-block text-xs md:text-sm font-semibold tracking-widest text-[#c9a96e] uppercase mb-3">
              From Our Journal
            </span>

            {/* Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Stories Worth Staying For
            </h1>

            {/* Subtitle */}
            <p className="text-white/85 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
              Discover the art of Indian hospitality through stories of local culture, culinary traditions, memorable journeys, and the little details that make every stay special.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. Blog Cards Grid ──────────────── */}
      <section className="py-16 md:py-24" aria-label="Stories and articles">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogGridList.map((post) => (
              <article
                key={post.gridKey}
                className="group flex flex-col bg-transparent"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
                  aria-label={`Read article: ${post.title}`}
                >
                  {/* Card Image */}
                  <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden border border-[#EDE4D5] shadow-xs mb-4">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Card Details */}
                  <div className="flex flex-col">
                    <h2 className="font-bold text-base sm:text-lg text-neutral-900 group-hover:text-[#b8933f] transition-colors leading-snug mb-2 line-clamp-1">
                      {post.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <time className="text-xs text-neutral-400 font-medium">
                      {post.date}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
