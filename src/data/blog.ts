export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  dateFormatted: string;
  author: string;
  readingTime: string;
  sectionsPart1: BlogSection[];
  midImages: string[];
  sectionsPart2: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "a-local-guide-to-the-neighbourhood",
    href: "/blog/a-local-guide-to-the-neighbourhood",
    title: "A Local Guide to the Neighbourhood",
    excerpt:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    category: "Neighbourhood",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793168542/041f6a152d74e0db3d1d4bdc32129707190424dc.png",
    imageAlt: "Grand lobby with illuminated staircase and mosaic floor at Shri Siddh",
    date: "Oct 15, 2026",
    dateFormatted: "15 Oct 2026",
    author: "Jackson Miller",
    readingTime: "5 Min Read",
    sectionsPart1: [
      {
        heading: "Choosing a Luxury Hotel Sets the Stage for Indulgence",
        paragraphs: [
          "Whether you are travelling for business or taking time to unwind with loved ones, choosing the right luxury hotel transforms your entire stay. From bespoke bedding and ambient lighting to fine dining and serene wellness sanctuaries, a thoughtfully curated hotel is far more than just a place to sleep—it becomes a central part of your travel story.",
          "At Shri Siddh, every space is designed to help you slow down, breathe deeply, and reconnect. From our locally sourced culinary creations to our tranquil courtyard gardens, every moment is crafted with care.",
        ],
      },
      {
        heading: "Plan Activities That Align With Both Your Interests",
        paragraphs: [
          "Exploring a vibrant city requires the perfect balance between active adventure and leisurely pause. Begin your day with a morning promenade through historic neighbourhood lanes, discovering artisan workshops and hidden tea houses before returning for a refreshing midday dip in our temperature-controlled pool.",
          "Our concierge team takes immense pride in offering tailor-made recommendations. Whether you wish to book private heritage walk passes, reserve the chef's table at celebrated restaurants, or explore quiet art galleries, we ensure your daily itinerary unfolds seamlessly.",
        ],
      },
    ],
    midImages: [
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793168542/041f6a152d74e0db3d1d4bdc32129707190424dc.png",
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793168542/041f6a152d74e0db3d1d4bdc32129707190424dc.png",
    ],
    sectionsPart2: [
      {
        heading: "Choosing a Luxury Hotel Sets the Stage for Indulgence",
        paragraphs: [
          "True luxury is found in the quiet moments: the feel of crisp Egyptian cotton linens, the subtle aroma of fresh lemongrass in the spa pavilion, and the effortless warmth of staff who anticipate your needs before you ask.",
          "As evening descends, our rooftop terrace offers an intimate viewpoint to watch the city lights flicker to life while enjoying hand-blended herbal infusions or signature mocktails.",
        ],
      },
      {
        heading: "Plan Activities That Align With Both Your Interests",
        paragraphs: [
          "Travel is ultimately measured not by the miles covered, but by the memories etched into your heart. We invite you to step outside the hurried pace of daily life and immerse yourself in the gracious hospitality of Shri Siddh.",
          "We look forward to welcoming you to our home, where every arrival feels like returning to an old friend.",
        ],
      },
    ],
  },
  {
    id: "blog-2",
    slug: "finding-stillness-wellness-philosophy",
    href: "/blog/finding-stillness-wellness-philosophy",
    title: "A Local Guide to the Neighbourhood",
    excerpt:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    category: "Wellness",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793168542/a195a8af00793695fe2cf979e2a13f6deb12e2fa.png",
    imageAlt: "Reflecting pool and architecture at Shri Siddh",
    date: "Oct 15, 2026",
    dateFormatted: "15 Oct 2026",
    author: "Jackson Miller",
    readingTime: "5 Min Read",
    sectionsPart1: [
      {
        heading: "Choosing a Luxury Hotel Sets the Stage for Indulgence",
        paragraphs: [
          "Whether you are travelling for business or taking time to unwind with loved ones, choosing the right luxury hotel transforms your entire stay. From bespoke bedding and ambient lighting to fine dining and serene wellness sanctuaries, a thoughtfully curated hotel is far more than just a place to sleep—it becomes a central part of your travel story.",
          "At Shri Siddh, every space is designed to help you slow down, breathe deeply, and reconnect. From our locally sourced culinary creations to our tranquil courtyard gardens, every moment is crafted with care.",
        ],
      },
      {
        heading: "Plan Activities That Align With Both Your Interests",
        paragraphs: [
          "Exploring a vibrant city requires the perfect balance between active adventure and leisurely pause. Begin your day with a morning promenade through historic neighbourhood lanes, discovering artisan workshops and hidden tea houses before returning for a refreshing midday dip in our temperature-controlled pool.",
          "Our concierge team takes immense pride in offering tailor-made recommendations. Whether you wish to book private heritage walk passes, reserve the chef's table at celebrated restaurants, or explore quiet art galleries, we ensure your daily itinerary unfolds seamlessly.",
        ],
      },
    ],
    midImages: [
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
    ],
    sectionsPart2: [
      {
        heading: "Choosing a Luxury Hotel Sets the Stage for Indulgence",
        paragraphs: [
          "True luxury is found in the quiet moments: the feel of crisp Egyptian cotton linens, the subtle aroma of fresh lemongrass in the spa pavilion, and the effortless warmth of staff who anticipate your needs before you ask.",
          "As evening descends, our rooftop terrace offers an intimate viewpoint to watch the city lights flicker to life while enjoying hand-blended herbal infusions or signature mocktails.",
        ],
      },
      {
        heading: "Plan Activities That Align With Both Your Interests",
        paragraphs: [
          "Travel is ultimately measured not by the miles covered, but by the memories etched into your heart. We invite you to step outside the hurried pace of daily life and immerse yourself in the gracious hospitality of Shri Siddh.",
          "We look forward to welcoming you to our home, where every arrival feels like returning to an old friend.",
        ],
      },
    ],
  },
  {
    id: "blog-3",
    slug: "flavours-of-shri-siddh",
    href: "/blog/flavours-of-shri-siddh",
    title: "A Local Guide to the Neighbourhood",
    excerpt:
      "Six things worth seeing, eating, and doing within walking distance of Shri Siddh.",
    category: "Culinary",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793168542/8635ac7460ad947106f0910e28c88ff5bbc64c12.png",
    imageAlt: "Breakfast tray with croissant and fresh juice at Shri Siddh",
    date: "Oct 15, 2026",
    dateFormatted: "15 Oct 2026",
    author: "Jackson Miller",
    readingTime: "5 Min Read",
    sectionsPart1: [
      {
        heading: "Choosing a Luxury Hotel Sets the Stage for Indulgence",
        paragraphs: [
          "Whether you are travelling for business or taking time to unwind with loved ones, choosing the right luxury hotel transforms your entire stay. From bespoke bedding and ambient lighting to fine dining and serene wellness sanctuaries, a thoughtfully curated hotel is far more than just a place to sleep—it becomes a central part of your travel story.",
          "At Shri Siddh, every space is designed to help you slow down, breathe deeply, and reconnect. From our locally sourced culinary creations to our tranquil courtyard gardens, every moment is crafted with care.",
        ],
      },
      {
        heading: "Plan Activities That Align With Both Your Interests",
        paragraphs: [
          "Exploring a vibrant city requires the perfect balance between active adventure and leisurely pause. Begin your day with a morning promenade through historic neighbourhood lanes, discovering artisan workshops and hidden tea houses before returning for a refreshing midday dip in our temperature-controlled pool.",
          "Our concierge team takes immense pride in offering tailor-made recommendations. Whether you wish to book private heritage walk passes, reserve the chef's table at celebrated restaurants, or explore quiet art galleries, we ensure your daily itinerary unfolds seamlessly.",
        ],
      },
    ],
    midImages: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    ],
    sectionsPart2: [
      {
        heading: "Choosing a Luxury Hotel Sets the Stage for Indulgence",
        paragraphs: [
          "True luxury is found in the quiet moments: the feel of crisp Egyptian cotton linens, the subtle aroma of fresh lemongrass in the spa pavilion, and the effortless warmth of staff who anticipate your needs before you ask.",
          "As evening descends, our rooftop terrace offers an intimate viewpoint to watch the city lights flicker to life while enjoying hand-blended herbal infusions or signature mocktails.",
        ],
      },
      {
        heading: "Plan Activities That Align With Both Your Interests",
        paragraphs: [
          "Travel is ultimately measured not by the miles covered, but by the memories etched into your heart. We invite you to step outside the hurried pace of daily life and immerse yourself in the gracious hospitality of Shri Siddh.",
          "We look forward to welcoming you to our home, where every arrival feels like returning to an old friend.",
        ],
      },
    ],
  },
];

export const blogGridList = [
  { ...blogPosts[0], gridKey: "blog-grid-1" },
  { ...blogPosts[1], gridKey: "blog-grid-2" },
  { ...blogPosts[2], gridKey: "blog-grid-3" },
  { ...blogPosts[0], gridKey: "blog-grid-4" },
  { ...blogPosts[1], gridKey: "blog-grid-5" },
  { ...blogPosts[2], gridKey: "blog-grid-6" },
  { ...blogPosts[0], gridKey: "blog-grid-7" },
  { ...blogPosts[1], gridKey: "blog-grid-8" },
  { ...blogPosts[2], gridKey: "blog-grid-9" },
  { ...blogPosts[0], gridKey: "blog-grid-10" },
  { ...blogPosts[1], gridKey: "blog-grid-11" },
  { ...blogPosts[2], gridKey: "blog-grid-12" },
];
