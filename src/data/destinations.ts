export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  bestTime: string;
  duration: string;
  price: string;
}

export const destinations: Destination[] = [
  {
    id: "maldives",
    name: "Maldives",
    country: "Maldives",
    description: "Experience paradise on earth with crystal-clear waters, pristine white-sand beaches, and luxurious overwater villas in the Maldives.",
    image: "/assets/destination-maldives.jpg",
    highlights: ["Overwater Villas", "Snorkeling & Diving", "Private Beach Dinners", "Spa Treatments"],
    bestTime: "November - April",
    duration: "5-7 Days",
    price: "From ₹2,10,000",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Paradise",
        description: "Arrive at Velana International Airport and transfer to your resort via speedboat.",
        activities: ["Airport pickup", "Speedboat transfer", "Resort check-in", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Island Exploration",
        description: "Discover the beauty of your private island resort.",
        activities: ["Sunrise yoga", "Snorkeling session", "Beach lunch", "Sunset cruise"]
      },
      {
        day: 3,
        title: "Ocean Adventures",
        description: "Dive into the underwater world of the Maldives.",
        activities: ["Scuba diving", "Dolphin watching", "Private beach dinner", "Stargazing"]
      },
      {
        day: 4,
        title: "Relaxation Day",
        description: "Unwind with spa treatments and leisure activities.",
        activities: ["Spa treatments", "Private pool time", "Water sports", "Fine dining"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Bid farewell to paradise.",
        activities: ["Final breakfast", "Photo session", "Airport transfer"]
      }
    ]
  },
  {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    description: "Discover the Island of Gods with its stunning temples, lush rice terraces, vibrant culture, and world-class surfing beaches.",
    image: "/assets/destination-bali.jpg",
    highlights: ["Ancient Temples", "Rice Terraces", "Beach Clubs", "Traditional Dance"],
    bestTime: "April - October",
    duration: "7-10 Days",
    price: "From ₹1,50,000",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali",
        description: "Arrive at Ngurah Rai Airport and transfer to your villa in Ubud.",
        activities: ["Airport pickup", "Villa check-in", "Welcome drink", "Local dinner"]
      },
      {
        day: 2,
        title: "Ubud Cultural Tour",
        description: "Explore the cultural heart of Bali.",
        activities: ["Tegallalang Rice Terraces", "Tirta Empul Temple", "Art galleries", "Traditional dance show"]
      },
      {
        day: 3,
        title: "Temple & Volcano",
        description: "Visit sacred temples and witness volcanic landscapes.",
        activities: ["Mount Batur sunrise trek", "Hot springs", "Temple visits", "Coffee plantation"]
      },
      {
        day: 4,
        title: "Beach Paradise",
        description: "Transfer to Seminyak for beach activities.",
        activities: ["Beach club experience", "Surfing lesson", "Sunset at Tanah Lot", "Seafood dinner"]
      },
      {
        day: 5,
        title: "Island Hopping",
        description: "Day trip to Nusa Penida island.",
        activities: ["Kelingking Beach", "Crystal Bay snorkeling", "Angel's Billabong", "Broken Beach"]
      }
    ]
  },
  {
    id: "dubai",
    name: "Dubai",
    country: "UAE",
    description: "Experience the ultimate in luxury and innovation in the city of superlatives, from the world's tallest building to man-made islands.",
    image: "/assets/destination-dubai.jpg",
    highlights: ["Burj Khalifa", "Desert Safari", "Luxury Shopping", "Palm Jumeirah"],
    bestTime: "November - March",
    duration: "4-6 Days",
    price: "From ₹1,85,000",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai",
        description: "Welcome to the city of gold.",
        activities: ["Airport transfer", "Hotel check-in", "Dubai Mall visit", "Burj Khalifa observation deck"]
      },
      {
        day: 2,
        title: "Old Dubai Tour",
        description: "Discover the traditional side of Dubai.",
        activities: ["Gold Souk", "Spice Souk", "Abra boat ride", "Al Fahidi Historic District"]
      },
      {
        day: 3,
        title: "Desert Adventure",
        description: "Experience the Arabian desert.",
        activities: ["Desert safari", "Dune bashing", "Camel riding", "BBQ dinner under stars"]
      },
      {
        day: 4,
        title: "Luxury Experience",
        description: "Indulge in Dubai's world-renowned luxury.",
        activities: ["Palm Jumeirah tour", "Atlantis Aquaventure", "Yacht cruise", "Fine dining"]
      }
    ]
  },
  {
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    description: "Fall in love with the iconic blue domes, stunning sunsets, and romantic atmosphere of this legendary Greek island.",
    image: "/assets/destination-santorini.jpg",
    highlights: ["Oia Sunset", "Wine Tasting", "Volcanic Beaches", "Ancient Ruins"],
    bestTime: "April - October",
    duration: "5-7 Days",
    price: "From ₹1,70,000",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Santorini",
        description: "Welcome to the pearl of the Aegean.",
        activities: ["Airport transfer", "Hotel check-in", "Fira exploration", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Oia Discovery",
        description: "Explore the most picturesque village.",
        activities: ["Oia walking tour", "Blue dome churches", "Art galleries", "Famous sunset viewing"]
      },
      {
        day: 3,
        title: "Volcanic Adventure",
        description: "Discover the island's volcanic origins.",
        activities: ["Volcano boat trip", "Hot springs swim", "Thirassia island", "Seafood lunch"]
      },
      {
        day: 4,
        title: "Wine & Beach",
        description: "Taste local wines and relax on unique beaches.",
        activities: ["Winery visits", "Red Beach", "Black Beach", "Traditional Greek dinner"]
      }
    ]
  },
  {
    id: "switzerland",
    name: "Switzerland",
    country: "Switzerland",
    description: "Discover the breathtaking Alpine scenery, charming villages, and world-class skiing in the heart of Europe.",
    image: "/assets/destination-switzerland.jpg",
    highlights: ["Swiss Alps", "Scenic Trains", "Chocolate Tours", "Lake Cruises"],
    bestTime: "June - September, December - March",
    duration: "7-10 Days",
    price: "From ₹2,50,000",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Zurich",
        description: "Arrive in Switzerland's largest city.",
        activities: ["Airport transfer", "Old Town walking tour", "Lake Zurich cruise", "Swiss dinner"]
      },
      {
        day: 2,
        title: "Lucerne Experience",
        description: "Discover the charm of Lucerne.",
        activities: ["Chapel Bridge", "Lion Monument", "Mount Pilatus excursion", "Lakeside dinner"]
      },
      {
        day: 3,
        title: "Interlaken Adventure",
        description: "Heart of the Swiss Alps.",
        activities: ["Scenic train journey", "Paragliding option", "Harder Kulm viewpoint", "Alpine dinner"]
      },
      {
        day: 4,
        title: "Jungfrau Region",
        description: "Visit the Top of Europe.",
        activities: ["Jungfraujoch railway", "Ice Palace", "Sphinx Observatory", "Grindelwald village"]
      }
    ]
  },
  {
    id: "paris",
    name: "Paris",
    country: "France",
    description: "Experience the City of Light with its iconic landmarks, world-class museums, exquisite cuisine, and romantic ambiance.",
    image: "/assets/destination-paris.jpg",
    highlights: ["Eiffel Tower", "Louvre Museum", "Champs-Élysées", "Seine Cruise"],
    bestTime: "April - June, September - November",
    duration: "5-7 Days",
    price: "From ₹1,95,000",
    itinerary: [
      {
        day: 1,
        title: "Bienvenue à Paris",
        description: "Welcome to the City of Light.",
        activities: ["Airport transfer", "Hotel check-in", "Champs-Élysées walk", "Welcome dinner"]
      },
      {
        day: 2,
        title: "Iconic Paris",
        description: "Visit the city's most famous landmarks.",
        activities: ["Eiffel Tower visit", "Arc de Triomphe", "Seine River cruise", "Trocadéro photos"]
      },
      {
        day: 3,
        title: "Art & Culture",
        description: "Immerse yourself in Parisian art.",
        activities: ["Louvre Museum", "Tuileries Garden", "Musée d'Orsay", "Latin Quarter dinner"]
      },
      {
        day: 4,
        title: "Versailles Day Trip",
        description: "Discover royal grandeur.",
        activities: ["Palace of Versailles", "Gardens exploration", "Marie Antoinette's Estate", "French cuisine class"]
      }
    ]
  },
  {
    id: "japan",
    name: "Japan",
    country: "Japan",
    description: "A seamless blend of ancient traditions and futuristic innovation, from the neon streets of Tokyo to the serene temples of Kyoto.",
    image: "/assets/destination-japan.jpg",
    highlights: ["Tokyo Nightlife", "Kyoto Temples", "Mount Fuji", "Cherry Blossom"],
    bestTime: "March - May, September - November",
    duration: "10-14 Days",
    price: "From ₹2,70,000",
    itinerary: [
      {
        day: 1,
        title: "Tokyo Arrival",
        description: "Welcome to the world's most populous metropolis.",
        activities: ["Airport transfer", "Shibuya Crossing", "Welcome Dinner", "Shinjuku Night Walk"]
      },
      {
        day: 2,
        title: "Modern & Traditional",
        description: "Explore the contrast of Tokyo.",
        activities: ["Meiji Shrine", "Harajuku shopping", "Asakusa Senso-ji", "Akihabara electronics"]
      },
      {
        day: 3,
        title: "Kyoto Transfer",
        description: "Bullet train to the cultural capital.",
        activities: ["Shinkansen ride", "Kinkaku-ji (Golden Pavilion)", "Gion District", "Tea Ceremony"]
      },
      {
        day: 4,
        title: "Arashiyama",
        description: "Visit the famous bamboo grove.",
        activities: ["Bamboo Grove", "Monkey Park", "Tenryu-ji Temple", "Togetsukyo Bridge"]
      }
    ]
  },
  {
    id: "iceland",
    name: "Iceland",
    country: "Iceland",
    description: "Land of fire and ice, featuring dramatic waterfalls, glaciers, volcanoes, and the spectacular Northern Lights.",
    image: "/assets/destination-iceland.jpg",
    highlights: ["Northern Lights", "Blue Lagoon", "Golden Circle", "Glacier Hiking"],
    bestTime: "September - March (Aurora), June - August (Midnight Sun)",
    duration: "7-9 Days",
    price: "From ₹2,35,000",
    itinerary: [
      {
        day: 1,
        title: "Reykjavik Arrival",
        description: "Land in Keflavik and transfer to the capital.",
        activities: ["Blue Lagoon soak", "Reykjavik city tour", "Hallgrimskirkja", "Harpa Concert Hall"]
      },
      {
        day: 2,
        title: "Golden Circle",
        description: "The classic Icelandic route.",
        activities: ["Thingvellir National Park", "Geysir Geothermal Area", "Gullfoss Waterfall", "Kerid Crater"]
      },
      {
        day: 3,
        title: "South Coast",
        description: "Waterfalls and black sand beaches.",
        activities: ["Seljalandsfoss", "Skogafoss", "Reynisfjara Beach", "Vik Village"]
      },
      {
        day: 4,
        title: "Glacier Adventure",
        description: "Explore the icy giants.",
        activities: ["Jokulsarlon Glacial Lagoon", "Diamond Beach", "Crystal Ice Caves", "Glacier Hike"]
      }
    ]
  }
];
