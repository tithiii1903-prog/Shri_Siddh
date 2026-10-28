import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Shri Siddh Hotel Journal`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts;

  return (
    <div className="bg-[#FAF9F5]">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-20">
        <div className="relative h-[340px] sm:h-[440px] md:h-[500px] w-full overflow-hidden border border-[#EDE4D5] shadow-xs">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute right-0 bottom-0 z-10 bg-[#FFF8E7] border-t border-l border-[#EEDFCD] p-5 sm:p-6 min-w-[200px] sm:min-w-[240px] shadow-md flex flex-col gap-2.5">
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-neutral-500 font-medium">Author</span>
              <span className="font-bold text-neutral-900">{post.author}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-neutral-500 font-medium">Time</span>
              <span className="font-bold text-neutral-900">{post.readingTime}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs">
              <span className="text-neutral-500 font-medium">Date</span>
              <span className="font-bold text-neutral-900">{post.dateFormatted}</span>
            </div>
          </div>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.15] mt-8 mb-8">
          {post.title}
        </h1>

        <div className="flex flex-col gap-8 text-sm sm:text-base text-neutral-700 leading-relaxed">
          {post.sectionsPart1.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-3.5">
              <h2 className="font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
          {post.midImages.map((imgSrc, imgIdx) => (
            <div
              key={imgIdx}
              className="relative h-[220px] sm:h-[260px] md:h-[280px] w-full overflow-hidden border border-[#EDE4D5] shadow-xs"
            >
              <Image
                src={imgSrc}
                alt={`${post.title} visual perspective ${imgIdx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 text-sm sm:text-base text-neutral-700 leading-relaxed">
          {post.sectionsPart2.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-3.5">
              <h2 className="font-bold text-xl sm:text-2xl text-neutral-900 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
          ))}
        </div>

        <section className="mt-20 pt-16 border-t border-[#E8DCC4]" aria-label="Related articles">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <article key={related.id} className="group flex flex-col">
                <Link
                  href={`/blog/${related.slug}`}
                  className="flex flex-col focus-visible:outline-2 focus-visible:outline-[#c9a96e]"
                >
                  <div className="relative h-[180px] sm:h-[200px] w-full overflow-hidden border border-[#EDE4D5] shadow-xs mb-3">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#b8933f] transition-colors leading-snug mb-1.5 line-clamp-1">
                    {related.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-2 mb-2">
                    {related.excerpt}
                  </p>
                  <time className="text-[11px] text-neutral-400 font-medium">
                    {related.date}
                  </time>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
