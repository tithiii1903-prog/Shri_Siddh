export interface Rating {
  id: string;
  platform: string;
  score: string;
  outOf: string;
  logo?: string;
}

export const ratings: Rating[] = [
  { id: "google", platform: "Google", score: "4.9", outOf: "5" },
  { id: "trustpilot", platform: "Trustpilot", score: "4.8", outOf: "5" },
  { id: "tripadvisor", platform: "Tripadvisor", score: "4.9", outOf: "5" },
  { id: "booking", platform: "Booking.com", score: "9.4", outOf: "10" },
];

export interface Review {
  id: string;
  author: string;
  location: string;
  room: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    id: "review-1",
    author: "Sophie Andersen",
    location: "Copenhagen, Denmark",
    room: "Deluxe Room",
    rating: 5,
    text: "Everything about the stay was considered. The room was quiet, the bed was perfect, and the staff never made us feel like we were asking for too much.",
  },
  {
    id: "review-2",
    author: "Arjun Mehta",
    location: "Mumbai, India",
    room: "Classic Room",
    rating: 5,
    text: "A truly luxurious experience from check-in to check-out. The staff is incredibly attentive and the rooms are immaculately clean.",
  },
  {
    id: "review-3",
    author: "Priya Sharma",
    location: "Bangalore, India",
    room: "Penthouse Suite",
    rating: 5,
    text: "The penthouse suite exceeded all expectations. Stunning views, impeccable service and an unforgettable experience.",
  },
  {
    id: "review-4",
    author: "Thomas Weber",
    location: "Berlin, Germany",
    room: "Deluxe Room",
    rating: 4,
    text: "Exceptional hospitality in a beautifully designed hotel. The restaurant was outstanding and the spa was world-class.",
  },
  {
    id: "review-5",
    author: "Meera Iyer",
    location: "Chennai, India",
    room: "Classic Room",
    rating: 5,
    text: "Perfect escape from the city. Everything about the stay was considered and the staff truly goes above and beyond.",
  },
  {
    id: "review-6",
    author: "Elena Rostova",
    location: "Vienna, Austria",
    room: "Penthouse Suite",
    rating: 5,
    text: "From the architecture to the warm hospitality, every detail is refined and memorable. The private dining was extraordinary.",
  },
  {
    id: "review-7",
    author: "David Chen",
    location: "Singapore",
    room: "Classic Room",
    rating: 5,
    text: "Exceeded all expectations. Quiet sanctuary amidst the city with exceptional dining and serene ambient design.",
  },
];
