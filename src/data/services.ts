export interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const servicesPageList: ServiceDetail[] = [
  {
    id: "restaurant",
    category: "Dining",
    title: "Restaurant",
    description:
      "The Restaurant at Shri Siddh serves breakfast, lunch, and dinner daily. Our kitchen works with local producers to keep the menu seasonal and honest. The dining room seats 60 with a private dining room for up to 14. Weekend brunch is served from 10 am to 3 pm. See the menu.",
    image:
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1000&q=80",
    imageAlt: "Grand restaurant dining room with crystal chandeliers and banquet tables at Shri Siddh",
  },
  {
    id: "garage-parking",
    category: "Transport",
    title: "Garage & Parking",
    description:
      "Our underground garage accommodates up to 60 vehicles with 24-hour security and CCTV coverage on every level. Valet parking is available at the main entrance. Electric vehicle charging stations are available on Level B1. Daily and overnight rates apply.",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1000&q=80",
    imageAlt: "Bright and secure underground parking facility with EV charging at Shri Siddh",
  },
  {
    id: "laundry",
    category: "Laundry",
    title: "Laundry",
    description:
      "Our laundry service collects garments from your room, cleans and presses them, and returns them the same day when dropped off before 9am. Express 4-hour service is available at an additional charge. Dry cleaning, pressing only, and delicate care can also be handled.",
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1000&q=80",
    imageAlt: "Professional valet and laundry service with crisp folded linens at Shri Siddh",
  },
  {
    id: "spa-wellness",
    category: "Wellness",
    title: "Spa & Wellness",
    description:
      "Shri Siddh Spa offers a full menu of treatments across massage, facials, body wraps, and hydrotherapy. Our facilities include a heated indoor pool, steam room, sauna, and relaxation lounge. Treatments can be booked at the spa desk. Day passes are available to non-resident guests.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80",
    imageAlt: "Relaxing poolside lounge and spa treatments at Shri Siddh",
  },
  {
    id: "concierge",
    category: "Other",
    title: "Concierge",
    description:
      "Our concierge team is available around the clock to arrange airport transfers, restaurant reservations, city tours, theatre tickets, and anything else that makes your stay easier. Private car hire and chauffeur service are available on request.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1000&q=80",
    imageAlt: "Luxury chauffeur and personalized 24/7 concierge service at Shri Siddh",
  },
];

export interface Service {
  id: string;
  number: string;
  name: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "restaurant",
    number: "01",
    name: "Restaurant",
    description:
      "Seasonal ingredients, a considered wine list, and a dining room that is genuinely worth the visit.",
    icon: "UtensilsCrossed",
  },
  {
    id: "banquet-hall",
    number: "02",
    name: "Banquet Hall",
    description:
      "Secure underground parking with valet service, EV charging, and 24-hour security on each level.",
    icon: "Car",
  },
  {
    id: "conference-room",
    number: "03",
    name: "Conference Room",
    description:
      "Same-day laundry, dry cleaning, and pressing for all garments. Drop off by 9am and back by evening.",
    icon: "Shirt",
  },
  {
    id: "laundry-parking",
    number: "04",
    name: "Laundry and Parking",
    description:
      "A full-service spa with pool, sauna, steam room, and a complete treatment menu for every guest.",
    icon: "Leaf",
  },
];

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const facilities: Facility[] = [
  {
    id: "exclusive-suites",
    name: "Exclusive Suites",
    description: "Experience refined luxury in elegantly designed suites with premium comfort and exceptional privacy.",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793130834/89ada55816126cea778ea2ac6cacb2293c1df353.png",
    imageAlt: "Luxurious exclusive suite at Shri Siddh",
  },
  {
    id: "free-wifi",
    name: "Banquet Hall",
    description: "Stay connected with complimentary high-speed Wi-Fi throughout your stay.",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793166405/6569b5c4dc2100eaaf37877da0f38382ae26cf11.png",
    imageAlt: "High-speed Wi-Fi connectivity at Shri Siddh",
  },
  {
    id: "infinity-pools",
    name: "Infinity Pools",
    description: "Relax in stunning infinity pools with breathtaking views and a serene atmosphere.",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793130833/7ffa7e1ab49c517aaa261a24e460b6be2c8af363.png",
    imageAlt: "Infinity pool with panoramic views at Shri Siddh",
  },
  {
    id: "spa-wellness",
    name: "Conference Room",
    description: "Rejuvenate your mind and body with soothing spa treatments and wellness experiences.",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793166465/60a07ab3bf66874a3f3e3908e1ec05bcf5048043.png",
    imageAlt: "Spa and wellness center at Shri Siddh",
  },
  {
    id: "hotel-staff",
    name: "24/7 Hotel Staff",
    description: "Enjoy round-the-clock assistance from our dedicated team, always ready to make your stay exceptional.",
    image:
      "https://res.cloudinary.com/dgsjdegrj/image/upload/v1793130833/f4c4087b0ba59b5c88d8375808ce61ef5e484603.png",
    imageAlt: "Professional hotel staff at Shri Siddh",
  },
];
