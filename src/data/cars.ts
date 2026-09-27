import heroShowroom from '../assets/images/hero_showroom_1790518730598.jpg';
import showroomInterior from '../assets/images/showroom_interior_1790518741878.jpg';
import carCreta from '../assets/images/car_creta_dark_1790518754015.jpg';
import carInnova from '../assets/images/car_innova_dark_1790518768484.jpg';
import carFortuner from '../assets/images/car_fortuner_dark_1790518783346.jpg';

export interface Vehicle {
  id: string;
  slug: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  fuel: 'Petrol' | 'Diesel' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  mileageKm: number;
  priceLakh: number;
  formattedPrice: string;
  location: string;
  featured: boolean;
  status: 'Available' | 'Reserved';
  bodyType: 'SUV' | 'Sedan' | 'MPV';
  engineCc: string;
  owners: string;
  insurance: string;
  registrationState: string;
  color: string;
  image: string;
  gallery: string[];
  highlights: string[];
  features: string[];
  overview: string;
}

export const INVENTORY_CARS: Vehicle[] = [
  {
    id: "car-1",
    slug: "toyota-fortuner-4x2-at-2022",
    brand: "Toyota",
    model: "Fortuner",
    variant: "2.8 4x2 AT",
    year: 2022,
    fuel: "Diesel",
    transmission: "Automatic",
    mileageKm: 34000,
    priceLakh: 32.50,
    formattedPrice: "₹32.50 Lakh",
    location: "Ratu Road, Ranchi",
    featured: true,
    status: "Available",
    bodyType: "SUV",
    engineCc: "2755 cc",
    owners: "1st Owner",
    insurance: "Comprehensive Valid",
    registrationState: "JH-01 (Ranchi)",
    color: "Attitude Black Metallic",
    image: carFortuner,
    gallery: [carFortuner, heroShowroom, showroomInterior],
    highlights: [
      "Pristine single owner vehicle with documented service records",
      "Full genuine leather upholstery and ventilated front seats",
      "Touchscreen infotainment with Apple CarPlay & Android Auto",
      "Bi-beam LED projector headlamps with aggressive DRL signature"
    ],
    features: [
      "7 Airbags & ABS with EBD",
      "Vehicle Stability Control (VSC)",
      "Electrically adjustable driver & co-driver seats",
      "Dual-zone automatic climate control",
      "Cruise Control & Drive Modes (Eco/Normal/Sport)",
      "18-inch Diamond Cut Alloy Wheels"
    ],
    overview: "An imposing, commanding flagship SUV engineered for uncompromising road presence and durability. Well-maintained with thorough care and presented ready for inspection at our Ratu Road showroom bay."
  },
  {
    id: "car-2",
    slug: "hyundai-creta-sx-o-ivt-2022",
    brand: "Hyundai",
    model: "Creta",
    variant: "SX (O) 1.5 IVT",
    year: 2022,
    fuel: "Petrol",
    transmission: "Automatic",
    mileageKm: 32000,
    priceLakh: 14.25,
    formattedPrice: "₹14.25 Lakh",
    location: "Ratu Road, Ranchi",
    featured: true,
    status: "Available",
    bodyType: "SUV",
    engineCc: "1497 cc",
    owners: "1st Owner",
    insurance: "Zero Dep Active",
    registrationState: "JH-01 (Ranchi)",
    color: "Phantom Black",
    image: carCreta,
    gallery: [carCreta, showroomInterior, heroShowroom],
    highlights: [
      "Panoramic Voice-Enabled Sunroof",
      "Bose 8-Speaker Premium Sound System",
      "Ventilated Front Seats for ultimate summer comfort",
      "Smooth IVT automatic transmission with paddle shifters"
    ],
    features: [
      "10.25-inch HD Touchscreen Navigation",
      "BlueLink connected car technology",
      "Tire Pressure Monitoring System (TPMS)",
      "Rear parking camera with dynamic guidelines",
      "Electronic Parking Brake with Auto Hold",
      "Air Purifier with AQI display"
    ],
    overview: "India's favorite mid-size premium SUV offering effortless urban driving and sophisticated styling. Carefully preserved and available for a private walkthrough."
  },
  {
    id: "car-3",
    slug: "toyota-innova-crysta-2-4-vx-at-2021",
    brand: "Toyota",
    model: "Innova Crysta",
    variant: "2.4 VX AT 7-Seater",
    year: 2021,
    fuel: "Diesel",
    transmission: "Automatic",
    mileageKm: 48000,
    priceLakh: 19.50,
    formattedPrice: "₹19.50 Lakh",
    location: "Ratu Road, Ranchi",
    featured: true,
    status: "Available",
    bodyType: "MPV",
    engineCc: "2393 cc",
    owners: "1st Owner",
    insurance: "Valid Comprehensive",
    registrationState: "JH-01 (Ranchi)",
    color: "Garnet Red Metallic",
    image: carInnova,
    gallery: [carInnova, heroShowroom, showroomInterior],
    highlights: [
      "Captain Seats in middle row with individual armrests",
      "Bulletproof Toyota 2.4L GD series turbo-diesel reliability",
      "Supreme ride comfort across city and highways",
      "Immaculately maintained cabin with zero rattles"
    ],
    features: [
      "Automatic LED Headlamps",
      "Multi-zone climate control with rear roof vents",
      "Smart Entry with Push Button Start",
      "Eco and Power driving dynamics",
      "Hill Start Assist Control (HAC)",
      "Premium ambient ceiling illumination"
    ],
    overview: "The pinnacle of long-distance family travel and executive luxury. Combines unmatched reliability with generous space and smooth automatic gearing."
  },
  {
    id: "car-4",
    slug: "kia-seltos-gtx-plus-dct-2022",
    brand: "Kia",
    model: "Seltos",
    variant: "GTX Plus 1.4 Turbo DCT",
    year: 2022,
    fuel: "Petrol",
    transmission: "Automatic",
    mileageKm: 27000,
    priceLakh: 15.80,
    formattedPrice: "₹15.80 Lakh",
    location: "Ratu Road, Ranchi",
    featured: true,
    status: "Available",
    bodyType: "SUV",
    engineCc: "1353 cc Turbo",
    owners: "1st Owner",
    insurance: "Comprehensive Valid",
    registrationState: "JH-01 (Ranchi)",
    color: "Aurora Black Pearl",
    image: carCreta,
    gallery: [carCreta, showroomInterior],
    highlights: [
      "1.4L Turbocharged GDi Engine with Dual-Clutch 7-Speed",
      "360-Degree Surround View Camera & Blind View Monitor",
      "8-inch Heads-Up Display (HUD)",
      "GT-Line sporty exterior accents and red brake calipers"
    ],
    features: [
      "Bose 8-Speaker Premium Sound System",
      "Ambient Mood Lighting with Sound Sync",
      "Ventilated Driver & Passenger Seats",
      "Wireless Smartphone Charging Pad",
      "All-wheel disc brakes",
      "UV Cut Solar Glass"
    ],
    overview: "Sporty, sharp, and technologically ahead. The Seltos GTX+ delivers rapid turbo acceleration paired with an opulent interior cabin."
  },
  {
    id: "car-5",
    slug: "tata-harrier-xz-plus-dark-2022",
    brand: "Tata Motors",
    model: "Harrier",
    variant: "XZ+ Dark Edition AT",
    year: 2022,
    fuel: "Diesel",
    transmission: "Automatic",
    mileageKm: 31000,
    priceLakh: 17.90,
    formattedPrice: "₹17.90 Lakh",
    location: "Ratu Road, Ranchi",
    featured: false,
    status: "Available",
    bodyType: "SUV",
    engineCc: "1956 cc Kryotec",
    owners: "1st Owner",
    insurance: "Valid Up to 2027",
    registrationState: "JH-01 (Ranchi)",
    color: "Oberon Black",
    image: carFortuner,
    gallery: [carFortuner, heroShowroom],
    highlights: [
      "Land Rover OMEGARC architecture derived platform",
      "Dark Edition signature Blackstone interior and alloy wheels",
      "Kryotec 170PS 2.0L Diesel engine with 6-speed torque converter",
      "Massive panoramic sunroof with anti-pinch technology"
    ],
    features: [
      "JBL 9-Speaker Audio System with Subwoofer",
      "6-Way Powered Driver Seat with memory",
      "ESP with 14 additional safety features",
      "Cornering front fog lamps",
      "Rain sensing wipers & auto headlamps",
      "Terrain Response Modes (Normal, Wet, Rough)"
    ],
    overview: "Built on Land Rover pedigree, the Harrier Dark Edition delivers unmatched high-speed stability, commanding stance, and rugged Indian road readiness."
  },
  {
    id: "car-6",
    slug: "honda-city-zx-cvt-2021",
    brand: "Honda",
    model: "City",
    variant: "5th Gen ZX CVT",
    year: 2021,
    fuel: "Petrol",
    transmission: "Automatic",
    mileageKm: 36000,
    priceLakh: 11.75,
    formattedPrice: "₹11.75 Lakh",
    location: "Ratu Road, Ranchi",
    featured: false,
    status: "Available",
    bodyType: "Sedan",
    engineCc: "1498 cc i-VTEC",
    owners: "1st Owner",
    insurance: "Zero Dep Current",
    registrationState: "JH-01 (Ranchi)",
    color: "Golden Brown Metallic",
    image: carInnova,
    gallery: [carInnova, showroomInterior],
    highlights: [
      "Legendary 1.5L i-VTEC high-revving petrol engine",
      "Full LED 9-Array Headlights with integrated LED DRLs",
      "Honda LaneWatch camera on passenger ORVM",
      "Executive rear seat comfort with generous legroom"
    ],
    features: [
      "Electric one-touch sunroof",
      "Leather upholstery with soft touch dashboard padding",
      "7-inch HD full color TFT driver display",
      "Remote Engine Start with key fob",
      "6 Airbags and Hill Start Assist",
      "8-inch touchscreen with Alexa connectivity"
    ],
    overview: "The quintessential executive sedan known for silky smooth petrol refinement, plush rear lounge seating, and timeless design."
  }
];
