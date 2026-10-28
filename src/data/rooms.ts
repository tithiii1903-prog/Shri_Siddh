export interface RoomFacility {
  title: string;
  description: string;
  image: string;
}

export interface Room {
  id: string;
  tier: "Standard" | "Deluxe" | "Suite";
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  gallery: string[];
  pricePerNight: number;
  currency: string;
  sqft: number;
  beds: number;
  bedType: string;
  sleeps: number;
  href: string;
  overviewParagraph1: string;
  overviewParagraph2: string;
  rules: string[];
  conclusionParagraph1: string;
  conclusionParagraph2: string;
}

export const standardFacilities: RoomFacility[] = [
  {
    title: "Exclusive Suites",
    description: "Spacious and beautifully furnished suites for a premium stay.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&q=80",
  },
  {
    title: "Free Wi-Fi",
    description: "High-speed internet access throughout your stay.",
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=500&q=80",
  },
  {
    title: "Infinity Pools",
    description: "Relax and unwind in our temperature-controlled pool.",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&q=80",
  },
  {
    title: "Spa & Wellness",
    description: "Rejuvenate with signature treatments and therapies.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&q=80",
  },
  {
    title: "24/7 Hotel Staff",
    description: "Round-the-clock dedicated service for all your hospitality needs.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80",
  },
];

export const standardRules: string[] = [
  "Check-in from 2:00 PM; check-out until 11:00 AM (early check-in subject to availability).",
  "Smoking is prohibited inside all rooms and indoor areas.",
  "Quiet hours are observed between 10:00 PM and 7:00 AM.",
  "Only registered guests are permitted in guest rooms after 10:00 PM.",
  "Pets are welcome in designated pet-friendly rooms with prior notice.",
  "A valid government-issued photo ID is required upon check-in.",
  "Lost room key card replacement fee applies.",
];

export const rooms: Room[] = [
  {
    id: "classic-room",
    tier: "Standard",
    name: "Classic Room",
    tagline: "A spacious, well-appointed room with everything you need for a restful stay",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793130838/d2bf36c38279e91bbc88852bf97c15f1c02f9972.png",
    imageAlt: "Classic Room with queen bed and warm lighting at Shri Siddh",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85",
    ],
    pricePerNight: 1999,
    currency: "₹",
    sqft: 30,
    beds: 1,
    bedType: "Queen Bed",
    sleeps: 3,
    href: "/rooms/classic-room",
    overviewParagraph1:
      "Our Classic Rooms are thoughtfully designed to provide a comfortable and relaxing sanctuary for your stay. Featuring a plush queen-sized bed with crisp premium linens, ambient bedside lighting, and handcrafted wooden accents, the room blends timeless elegance with modern comfort.",
    overviewParagraph2:
      "Equipped with high-speed Wi-Fi, a sleek work desk, smart temperature control, a flat-screen television, and a fully stocked minibar, every detail is tailored for both business travelers and leisure seekers. The en-suite bathroom includes a rainfall shower, plush bathrobes, and complimentary organic toiletries to ensure a truly refreshing experience.",
    rules: standardRules,
    conclusionParagraph1:
      "At Shri Siddh, we take pride in offering an authentic, peaceful sanctuary. Every room is crafted with care, ensuring that your stay is not just comfortable, but truly memorable.",
    conclusionParagraph2:
      "Whether you're visiting for leisure, business, or a spiritual getaway, our dedicated team is committed to making your stay effortless and unforgettable.",
  },
  {
    id: "deluxe-room",
    tier: "Deluxe",
    name: "Deluxe Room",
    tagline: "Elevated comfort with bespoke floral accents, expansive windows, and picturesque views",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793130838/5df877aeba73988f6416522755868693fa900d46.png",
    imageAlt: "Deluxe Room with floral artwork and panoramic views at Shri Siddh",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85",
    ],
    pricePerNight: 3999,
    currency: "₹",
    sqft: 30,
    beds: 1,
    bedType: "King Bed",
    sleeps: 3,
    href: "/rooms/deluxe-room",
    overviewParagraph1:
      "The Deluxe Room offers a generous layout bathed in warm natural light. Featuring bespoke hand-painted floral murals, a plush king bed with custom ergonomic mattress, and curated reading nook, it is an inviting haven of peace and style.",
    overviewParagraph2:
      "Guests enjoy premium bath amenities, marble vanity, high-fidelity sound dock, and personalized evening turndown service. High-speed broadband and generous desk space make remote work or restful relaxation entirely effortless.",
    rules: standardRules,
    conclusionParagraph1:
      "At Shri Siddh, we take pride in offering an authentic, peaceful sanctuary. Every room is crafted with care, ensuring that your stay is not just comfortable, but truly memorable.",
    conclusionParagraph2:
      "Whether you're visiting for leisure, business, or a spiritual getaway, our dedicated team is committed to making your stay effortless and unforgettable.",
  },
  {
    id: "penthouse-suite",
    tier: "Suite",
    name: "Penthouse Suite",
    tagline: "The pinnacle of luxury living with panoramic skyline views, private lounge, and supreme serenity",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793130838/0a9d04e8b4bf1fae76c29ee0bea8560506f83809.png",
    imageAlt: "Penthouse Suite with city views and luxury furnishings at Shri Siddh",
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=85",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=85",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
    ],
    pricePerNight: 5999,
    currency: "₹",
    sqft: 90,
    beds: 1,
    bedType: "California King",
    sleeps: 3,
    href: "/rooms/penthouse-suite",
    overviewParagraph1:
      "Perched on our highest levels, the Penthouse Suite is our crown jewel. Sweeping floor-to-ceiling glass reveals breathtaking skyline vistas, seamlessly complementing the lavish living salon, plush dining enclave, and master bedroom suite.",
    overviewParagraph2:
      "Immerse yourself in a deep-soaking bathtub with skyline views, dual rainfall showers, 24-hour dedicated butler service, and complimentary champagne upon arrival. Crafted for unforgettable moments and distinguished travellers.",
    rules: standardRules,
    conclusionParagraph1:
      "At Shri Siddh, we take pride in offering an authentic, peaceful sanctuary. Every room is crafted with care, ensuring that your stay is not just comfortable, but truly memorable.",
    conclusionParagraph2:
      "Whether you're visiting for leisure, business, or a spiritual getaway, our dedicated team is committed to making your stay effortless and unforgettable.",
  },
];

/** The 9 room cards for the rooms page grid (repeats the 3 core tiers exactly as pictured in Image 1) */
export const roomsGridList = [
  { ...rooms[0], gridKey: "grid-1" },
  { ...rooms[1], gridKey: "grid-2" },
  { ...rooms[2], gridKey: "grid-3" },
  { ...rooms[0], gridKey: "grid-4" },
  { ...rooms[1], gridKey: "grid-5" },
  { ...rooms[2], gridKey: "grid-6" },
  { ...rooms[0], gridKey: "grid-7" },
  { ...rooms[1], gridKey: "grid-8" },
  { ...rooms[2], gridKey: "grid-9" },
];
