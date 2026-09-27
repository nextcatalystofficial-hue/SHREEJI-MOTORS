export interface DealershipInfo {
  name: string;
  tagline: string;
  subtitle: string;
  address: {
    line1: string;
    area: string;
    colony: string;
    city: string;
    state: string;
    pincode: string;
    full: string;
  };
  timings: string;
  isOpenToday: boolean;
  googleRating: number;
  reviewCount: number;
  phone: string;
  rawPhone: string;
  whatsappNumber: string;
  phonePlaceholder: string;
  googleMapsUrl: string;
}

export const DEALERSHIP: DealershipInfo = {
  name: "SHREEJI MOTORS",
  tagline: "Premium Car & Accessories Showroom",
  subtitle: "Ratu Road, Ranchi, Jharkhand",
  address: {
    line1: "Panchsheel Nagar",
    area: "Ratu Road",
    colony: "Panchsheel Colony",
    city: "Ranchi",
    state: "Jharkhand",
    pincode: "834005",
    full: "Panchsheel Nagar, Ratu Road, Panchsheel Colony, Ranchi, Jharkhand 834005"
  },
  timings: "Open until 9:00 PM",
  isOpenToday: true,
  googleRating: 5.0,
  reviewCount: 8,
  phone: "+91 91422 12594",
  rawPhone: "9142212594",
  whatsappNumber: "919142212594",
  phonePlaceholder: "+91 91422 12594",
  googleMapsUrl: "https://maps.google.com/?q=Shreeji+Motors+Ratu+Road+Ranchi+Jharkhand+834005"
};

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  rating: number;
  date: string;
  verified: boolean;
}

export const VERIFIED_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    quote: "Best Second Hand Car Dealer In Ranchi, I Am Fully Satisfied with the car condition and transparent handover.",
    author: "Satisfied Customer",
    rating: 5,
    date: "Verified Google Review",
    verified: true
  },
  {
    id: "rev-2",
    quote: "Awesome service by avinash bhaiya. Extremely polite behavior and guided us through every detail of the vehicle.",
    author: "Local Buyer",
    rating: 5,
    date: "Verified Google Review",
    verified: true
  },
  {
    id: "rev-3",
    quote: "Good initiative and great service. The showroom presentation and car cleanliness is unmatched in Ranchi.",
    author: "Ranchi Resident",
    rating: 5,
    date: "Verified Google Review",
    verified: true
  }
];

export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  popularModels: string;
}

export const SHOWROOM_BRANDS: BrandItem[] = [
  { id: "toyota", name: "Toyota", tagline: "Renowned Reliability", popularModels: "Fortuner, Innova Crysta, Glanza" },
  { id: "hyundai", name: "Hyundai", tagline: "Cutting-edge Technology", popularModels: "Creta, Verna, Venue, i20" },
  { id: "kia", name: "Kia", tagline: "Contemporary Design", popularModels: "Seltos, Sonet, Carens" },
  { id: "tata", name: "Tata Motors", tagline: "Robust Safety & Build", popularModels: "Harrier, Safari, Nexon, Punch" },
  { id: "honda", name: "Honda", tagline: "Refined Engineering", popularModels: "City, Elevate, Amaze" },
  { id: "volkswagen", name: "Volkswagen", tagline: "German Dynamics", popularModels: "Taigun, Virtus, Polo" },
  { id: "suzuki", name: "Suzuki", tagline: "Efficiency & Trust", popularModels: "Brezza, Grand Vitara, Baleno" },
  { id: "skoda", name: "Škoda", tagline: "European Sophistication", popularModels: "Kushaq, Slavia, Octavia" }
];
