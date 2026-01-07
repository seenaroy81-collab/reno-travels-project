export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  details: string;
  features: string[];
  specialOffers?: string[];
}

export const services: Service[] = [
  {
    id: "air-fares",
    name: "Air Fares",
    description: "Get the best deals on domestic and international flights with our extensive airline partnerships.",
    icon: "Plane",
    details: "We partner with over 500 airlines worldwide to bring you the best fares for your travel needs. Our expert team monitors prices 24/7 to ensure you get the best deals, whether you're flying economy or first class.",
    features: [
      "Best price guarantee on all flights",
      "Access to exclusive airline deals",
      "Flexible booking and cancellation options",
      "Multi-city and round-trip options",
      "Premium cabin upgrades available",
      "24/7 flight support and rebooking assistance",
      "Loyalty program integration",
      "Group booking discounts"
    ],
    specialOffers: [
      "10% off on first booking",
      "Free seat selection on select routes",
      "Bonus miles on partner airlines"
    ]
  },
  {
    id: "ticketing",
    name: "Ticketing Services",
    description: "Complete ticketing solutions for flights, trains, buses, and event bookings worldwide.",
    icon: "Ticket",
    details: "From flight tickets to train passes and event bookings, we handle all your ticketing needs. Our streamlined process ensures quick confirmations and instant e-tickets delivered to your inbox.",
    features: [
      "Instant e-ticket delivery",
      "Multi-modal transport bookings",
      "Event and attraction tickets",
      "Rail passes for Europe and Asia",
      "Ferry and cruise bookings",
      "Theme park and museum tickets",
      "Sports and concert tickets",
      "Airport transfer bookings"
    ],
    specialOffers: [
      "Bundle discounts on flight + activity packages",
      "Early bird rates for attractions"
    ]
  },
  {
    id: "visa-assistance",
    name: "Visa Services",
    description: "Hassle-free visa processing for over 150 countries with expert documentation support.",
    icon: "FileCheck",
    details: "Navigating visa requirements can be complex. Our dedicated visa team handles everything from document preparation to embassy appointments, ensuring a smooth approval process for your travel destination.",
    features: [
      "Expert visa consultation",
      "Document preparation and review",
      "Embassy appointment scheduling",
      "Application tracking",
      "Rush processing available",
      "Business visa expertise",
      "Student visa assistance",
      "Multiple entry visa support"
    ],
    specialOffers: [
      "Free visa consultation for package bookings",
      "Priority processing for repeat customers"
    ]
  },
  {
    id: "hotel-booking",
    name: "Hotel Reservations",
    description: "Access to millions of properties worldwide, from budget stays to luxury resorts.",
    icon: "Hotel",
    details: "Whether you're looking for a cozy boutique hotel or a five-star resort, we have access to over 2 million properties worldwide. Our partnerships ensure you get competitive rates and exclusive amenities.",
    features: [
      "Price match guarantee",
      "Free cancellation options",
      "Exclusive member rates",
      "Room upgrade opportunities",
      "Late checkout arrangements",
      "Special requests handling",
      "Resort credit packages",
      "All-inclusive options"
    ],
    specialOffers: [
      "Book 3 nights, get 4th night free at select properties",
      "Complimentary breakfast at partner hotels"
    ]
  },
  {
    id: "travel-insurance",
    name: "Travel Insurance",
    description: "Comprehensive travel protection plans covering medical, trip cancellation, and more.",
    icon: "Shield",
    details: "Travel with peace of mind knowing you're protected. Our insurance partners offer comprehensive coverage for medical emergencies, trip cancellations, lost luggage, and more.",
    features: [
      "Medical emergency coverage",
      "Trip cancellation protection",
      "Lost baggage compensation",
      "Flight delay coverage",
      "Adventure sports coverage",
      "24/7 emergency assistance",
      "COVID-19 coverage options",
      "Multi-trip annual plans"
    ],
    specialOffers: [
      "15% off annual multi-trip plans",
      "Free upgrade to premium coverage for honeymoon packages"
    ]
  },
  {
    id: "car-rental",
    name: "Car Rentals",
    description: "Rent vehicles worldwide with our network of trusted car rental partners.",
    icon: "Car",
    details: "Explore your destination at your own pace with our car rental services. From economy cars to luxury vehicles, we offer a wide range of options with competitive rates and comprehensive insurance.",
    features: [
      "Wide vehicle selection",
      "GPS and child seat options",
      "Unlimited mileage options",
      "One-way rentals available",
      "Chauffeur services",
      "Full insurance coverage",
      "Airport pickup and drop-off",
      "24/7 roadside assistance"
    ],
    specialOffers: [
      "Free GPS with weekly rentals",
      "Complimentary upgrade for loyalty members"
    ]
  }
];
