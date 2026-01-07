export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  description: string;
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    meals: string[];
    accommodation: string;
  }[];
  category: "adventure" | "luxury" | "cultural" | "honeymoon" | "family";
}

export const tourPackages: TourPackage[] = [
  {
    id: "maldives-luxury-escape",
    name: "Maldives Luxury Escape",
    destination: "Maldives",
    description: "Indulge in the ultimate luxury experience with overwater villas, private beaches, and world-class spa treatments in the Maldives.",
    image: "/assets/destination-maldives.jpg",
    duration: "6 Days / 5 Nights",
    price: 295000,
    originalPrice: 365000,
    rating: 4.9,
    reviews: 234,
    highlights: ["Overwater Villa Stay", "Private Beach Dinner", "Sunset Dolphin Cruise", "Couple's Spa"],
    category: "honeymoon",
    included: [
      "5 nights accommodation in Overwater Villa",
      "Daily breakfast and dinner",
      "Return speedboat transfers",
      "Sunset dolphin cruise",
      "One couple's spa treatment",
      "Private beach dinner",
      "Snorkeling equipment",
      "24/7 concierge service"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Additional excursions",
      "Alcoholic beverages"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        description: "Arrive at Velana International Airport. VIP transfer to your private overwater villa. Welcome champagne and resort orientation.",
        meals: ["Welcome Dinner"],
        accommodation: "Overwater Villa"
      },
      {
        day: 2,
        title: "Romantic Exploration",
        description: "Sunrise yoga session, followed by a guided snorkeling tour. Afternoon at leisure. Evening sunset dolphin cruise.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Overwater Villa"
      },
      {
        day: 3,
        title: "Spa & Relaxation",
        description: "Morning at leisure. Afternoon couple's spa treatment with ocean views. Private starlit beach dinner.",
        meals: ["Breakfast", "Private Beach Dinner"],
        accommodation: "Overwater Villa"
      },
      {
        day: 4,
        title: "Ocean Adventures",
        description: "Scuba diving experience (optional). Island hopping excursion. Sunset fishing trip.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Overwater Villa"
      },
      {
        day: 5,
        title: "Leisure Day",
        description: "Full day at leisure. Enjoy resort facilities, water sports, or simply relax on your private deck.",
        meals: ["Breakfast", "Farewell Dinner"],
        accommodation: "Overwater Villa"
      },
      {
        day: 6,
        title: "Departure",
        description: "Final sunrise from your villa. Breakfast and transfer to airport.",
        meals: ["Breakfast"],
        accommodation: "N/A"
      }
    ]
  },
  {
    id: "bali-cultural-journey",
    name: "Bali Cultural Journey",
    destination: "Bali",
    description: "Immerse yourself in Balinese culture with temple visits, traditional ceremonies, rice terrace walks, and authentic local experiences.",
    image: "/assets/destination-bali.jpg",
    duration: "8 Days / 7 Nights",
    price: 160000,
    originalPrice: 200000,
    rating: 4.8,
    reviews: 189,
    highlights: ["Temple Ceremonies", "Rice Terrace Trek", "Traditional Dance", "Cooking Class"],
    category: "cultural",
    included: [
      "7 nights accommodation",
      "Daily breakfast",
      "All temple entrance fees",
      "Private guide and driver",
      "Traditional dance show",
      "Cooking class",
      "Rice terrace trek",
      "Airport transfers"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners (except cooking class)",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali",
        description: "Airport pickup and transfer to Ubud. Evening welcome dinner with traditional Balinese dance.",
        meals: ["Welcome Dinner"],
        accommodation: "Ubud Villa"
      },
      {
        day: 2,
        title: "Sacred Temples",
        description: "Visit Tirta Empul for purification ceremony. Explore Gunung Kawi temple. Afternoon at Tegallalang Rice Terraces.",
        meals: ["Breakfast"],
        accommodation: "Ubud Villa"
      },
      {
        day: 3,
        title: "Art & Craft",
        description: "Visit traditional art villages. Silver jewelry workshop. Batik painting class.",
        meals: ["Breakfast"],
        accommodation: "Ubud Villa"
      },
      {
        day: 4,
        title: "Volcano Sunrise",
        description: "Early morning trek to Mount Batur for sunrise. Natural hot springs. Coffee plantation visit.",
        meals: ["Breakfast", "Lunch"],
        accommodation: "Ubud Villa"
      },
      {
        day: 5,
        title: "Cooking Experience",
        description: "Morning market visit. Full-day Balinese cooking class with lunch prepared by you.",
        meals: ["Breakfast", "Cooking Class Lunch"],
        accommodation: "Seminyak Hotel"
      },
      {
        day: 6,
        title: "Temple & Beach",
        description: "Visit Tanah Lot temple at sunset. Afternoon beach time. Seafood dinner by the ocean.",
        meals: ["Breakfast", "Dinner"],
        accommodation: "Seminyak Hotel"
      },
      {
        day: 7,
        title: "Leisure Day",
        description: "Free day to explore or relax. Optional spa treatments. Farewell dinner.",
        meals: ["Breakfast", "Farewell Dinner"],
        accommodation: "Seminyak Hotel"
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to airport for departure.",
        meals: ["Breakfast"],
        accommodation: "N/A"
      }
    ]
  },
  {
    id: "dubai-adventure-package",
    name: "Dubai Adventure Package",
    destination: "Dubai",
    description: "Experience the thrill of Dubai with desert safaris, dune bashing, skydiving options, and adrenaline-pumping water sports.",
    image: "/assets/destination-dubai.jpg",
    duration: "5 Days / 4 Nights",
    price: 195000,
    rating: 4.7,
    reviews: 156,
    highlights: ["Desert Safari", "Dune Bashing", "Skydiving Option", "Jet Ski Experience"],
    category: "adventure",
    included: [
      "4 nights 5-star accommodation",
      "Daily breakfast",
      "Desert safari with BBQ dinner",
      "Dune bashing experience",
      "Jet ski session",
      "Dubai City tour",
      "Burj Khalifa tickets",
      "Airport transfers"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Skydiving (optional add-on)",
      "Personal expenses",
      "Visa fees"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & City Exploration",
        description: "Airport transfer to hotel. Afternoon Dubai Mall visit. Evening at Burj Khalifa observation deck.",
        meals: ["Dinner"],
        accommodation: "5-Star Dubai Hotel"
      },
      {
        day: 2,
        title: "Desert Adventure",
        description: "Morning at leisure. Afternoon desert safari with dune bashing, camel riding, and BBQ dinner under the stars.",
        meals: ["Breakfast", "BBQ Dinner"],
        accommodation: "5-Star Dubai Hotel"
      },
      {
        day: 3,
        title: "Water Sports Day",
        description: "Morning jet ski experience at Palm Jumeirah. Afternoon at Atlantis Aquaventure. Optional skydiving over Palm.",
        meals: ["Breakfast"],
        accommodation: "5-Star Dubai Hotel"
      },
      {
        day: 4,
        title: "Old Dubai & Culture",
        description: "Morning at Gold and Spice Souks. Abra boat ride. Afternoon at Dubai Frame. Sunset yacht cruise dinner.",
        meals: ["Breakfast", "Cruise Dinner"],
        accommodation: "5-Star Dubai Hotel"
      },
      {
        day: 5,
        title: "Departure",
        description: "Leisure morning. Airport transfer for departure.",
        meals: ["Breakfast"],
        accommodation: "N/A"
      }
    ]
  },
  {
    id: "europe-family-tour",
    name: "European Family Adventure",
    destination: "Paris & Switzerland",
    description: "Create unforgettable family memories across Europe's most magical destinations, from Parisian wonders to Swiss Alpine adventures.",
    image: "/assets/destination-switzerland.jpg",
    duration: "10 Days / 9 Nights",
    price: 390000,
    originalPrice: 465000,
    rating: 4.9,
    reviews: 98,
    highlights: ["Disneyland Paris", "Eiffel Tower", "Swiss Alps", "Scenic Train Rides"],
    category: "family",
    included: [
      "9 nights family accommodation",
      "Daily breakfast",
      "Disneyland Paris tickets",
      "Eiffel Tower access",
      "Swiss scenic train pass",
      "Jungfraujoch excursion",
      "All transfers",
      "Family-friendly guide"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Lunches and dinners",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bonjour Paris!",
        description: "Arrive in Paris. Transfer to family-friendly hotel. Evening Seine River cruise.",
        meals: ["Welcome Dinner"],
        accommodation: "Paris Family Hotel"
      },
      {
        day: 2,
        title: "Disneyland Magic",
        description: "Full day at Disneyland Paris with FastPass access to popular rides.",
        meals: ["Breakfast"],
        accommodation: "Paris Family Hotel"
      },
      {
        day: 3,
        title: "Iconic Paris",
        description: "Morning at Eiffel Tower. Afternoon at Louvre (kid-friendly tour). Evening Champs-Élysées stroll.",
        meals: ["Breakfast"],
        accommodation: "Paris Family Hotel"
      },
      {
        day: 4,
        title: "Versailles Adventure",
        description: "Day trip to Palace of Versailles. Garden exploration. Treasure hunt for kids.",
        meals: ["Breakfast", "Picnic Lunch"],
        accommodation: "Paris Family Hotel"
      },
      {
        day: 5,
        title: "Journey to Switzerland",
        description: "Scenic train from Paris to Interlaken. Arrival and settlement. Evening lake walk.",
        meals: ["Breakfast", "Train Snacks"],
        accommodation: "Interlaken Family Hotel"
      },
      {
        day: 6,
        title: "Top of Europe",
        description: "Jungfraujoch excursion - Ice Palace, Sphinx Observatory, snow activities.",
        meals: ["Breakfast", "Mountain Lunch"],
        accommodation: "Interlaken Family Hotel"
      },
      {
        day: 7,
        title: "Adventure Day",
        description: "Trotti bike ride. Rope park for kids. Lake Thun boat cruise.",
        meals: ["Breakfast"],
        accommodation: "Interlaken Family Hotel"
      },
      {
        day: 8,
        title: "Lucerne Discovery",
        description: "Transfer to Lucerne. Swiss Transport Museum (kids' favorite). Chapel Bridge walk.",
        meals: ["Breakfast"],
        accommodation: "Lucerne Family Hotel"
      },
      {
        day: 9,
        title: "Mount Pilatus",
        description: "Golden Round Trip - boat, cogwheel train, and cable car. Farewell fondue dinner.",
        meals: ["Breakfast", "Farewell Dinner"],
        accommodation: "Lucerne Family Hotel"
      },
      {
        day: 10,
        title: "Departure",
        description: "Transfer to Zurich airport for departure.",
        meals: ["Breakfast"],
        accommodation: "N/A"
      }
    ]
  },
  {
    id: "greek-islands-luxury",
    name: "Greek Islands Luxury Cruise",
    destination: "Santorini",
    description: "Sail through the stunning Greek islands with private yacht experiences, wine tastings, and unforgettable Mediterranean sunsets.",
    image: "/assets/destination-santorini.jpg",
    duration: "7 Days / 6 Nights",
    price: 330000,
    rating: 4.8,
    reviews: 145,
    highlights: ["Private Yacht", "Wine Tasting", "Caldera Views", "Volcano Tour"],
    category: "luxury",
    included: [
      "6 nights luxury cave hotel",
      "Daily gourmet breakfast",
      "Private catamaran cruise",
      "Volcano and hot springs tour",
      "Wine estate tour with tasting",
      "Private sunset dinner in Oia",
      "All transfers",
      "Private guide"
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Additional meals",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Santorini",
        description: "VIP airport greeting. Luxury transfer to cave hotel. Welcome champagne with caldera views.",
        meals: ["Welcome Dinner"],
        accommodation: "Luxury Cave Hotel"
      },
      {
        day: 2,
        title: "Oia Discovery",
        description: "Private walking tour of Oia. Blue dome photography tour. Sunset dinner at exclusive restaurant.",
        meals: ["Breakfast", "Sunset Dinner"],
        accommodation: "Luxury Cave Hotel"
      },
      {
        day: 3,
        title: "Catamaran Adventure",
        description: "Full-day private catamaran cruise. Swimming, snorkeling, and gourmet lunch on board.",
        meals: ["Breakfast", "Yacht Lunch"],
        accommodation: "Luxury Cave Hotel"
      },
      {
        day: 4,
        title: "Wine & Culture",
        description: "Morning at ancient Akrotiri ruins. Afternoon wine estate tour with premium tasting.",
        meals: ["Breakfast", "Wine Pairing Dinner"],
        accommodation: "Luxury Cave Hotel"
      },
      {
        day: 5,
        title: "Volcano Experience",
        description: "Volcano hiking tour. Natural hot springs swim. Evening at leisure in Fira.",
        meals: ["Breakfast"],
        accommodation: "Luxury Cave Hotel"
      },
      {
        day: 6,
        title: "Beach & Spa",
        description: "Morning at Red Beach. Afternoon spa treatment. Farewell dinner with caldera views.",
        meals: ["Breakfast", "Farewell Dinner"],
        accommodation: "Luxury Cave Hotel"
      },
      {
        day: 7,
        title: "Departure",
        description: "Leisurely morning. Luxury transfer to airport.",
        meals: ["Breakfast"],
        accommodation: "N/A"
      }
    ]
  }
];
