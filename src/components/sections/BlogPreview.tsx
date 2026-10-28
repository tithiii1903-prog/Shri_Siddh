import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export function BlogPreview() {
  return (
    <section
      className="py-[var(--section-py)] bg-[var(--color-cream)]"
      aria-labelledby="blog-heading"
    >
      <div className="container-site">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <Reveal>
            <div>
              <span className="label-text block mb-2">From Our Journal</span>
              <h2
                id="blog-heading"
                className="heading-section gold-underline in-view"
              >
                Stories Worth Sharing
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="gold" href="/blog">
              View All Posts →
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.1} from="bottom">
              <article className="group flex flex-col bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-500">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--color-gold)] text-white text-xs font-medium tracking-wide">
                    {post.category}
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  <time
                    dateTime={post.date}
                    className="text-xs text-[var(--color-brown-mid)]"
                  >
                    {post.date}
                  </time>
                  <h3 className="font-serif font-bold text-lg text-[var(--color-espresso)] leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[var(--color-brown-mid)] leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-gold-dark)] transition-colors mt-2"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
