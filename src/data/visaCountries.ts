export interface VisaCountry {
  id: string;
  name: string;
  flag: string;
  visaTypes: {
    type: string;
    duration: string;
    processingTime: string;
    fee: string;
  }[];
  requirements: string[];
  documents: string[];
  notes: string[];
}

export const visaCountries: VisaCountry[] = [
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    visaTypes: [
      { type: "Tourist Visa", duration: "Up to 180 days", processingTime: "3-5 business days", fee: "$25 - $75" },
      { type: "Business Visa", duration: "Up to 365 days", processingTime: "5-7 business days", fee: "$80 - $150" },
      { type: "e-Visa", duration: "30-180 days", processingTime: "1-4 business days", fee: "$25 - $80" }
    ],
    requirements: [
      "Valid passport with at least 6 months validity",
      "Passport-size photographs (2 copies)",
      "Completed visa application form",
      "Proof of accommodation in India",
      "Return flight tickets",
      "Sufficient funds proof"
    ],
    documents: [
      "Original passport",
      "2 recent passport photos (51mm x 51mm)",
      "Bank statements (last 3 months)",
      "Hotel booking confirmation",
      "Flight itinerary",
      "Travel insurance"
    ],
    notes: [
      "E-Visa is available for citizens of most countries",
      "Yellow fever vaccination certificate required if traveling from endemic countries",
      "Registration with local police may be required for stays over 180 days"
    ]
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    visaTypes: [
      { type: "B1/B2 Tourist/Business", duration: "Up to 180 days per visit", processingTime: "3-5 weeks", fee: "$185" },
      { type: "F1 Student Visa", duration: "Duration of study", processingTime: "4-8 weeks", fee: "$185 + SEVIS fee" },
      { type: "H1B Work Visa", duration: "Up to 3 years", processingTime: "3-6 months", fee: "$460+" }
    ],
    requirements: [
      "Valid passport (6+ months validity)",
      "DS-160 online application",
      "Visa interview appointment",
      "Strong ties to home country",
      "Financial documentation",
      "Purpose of travel documentation"
    ],
    documents: [
      "Valid passport",
      "DS-160 confirmation page",
      "Visa fee receipt",
      "Passport photo (US specifications)",
      "Bank statements",
      "Employment letter",
      "Property documents (if applicable)",
      "Travel itinerary"
    ],
    notes: [
      "Interview at US Embassy/Consulate is mandatory",
      "ESTA available for Visa Waiver Program countries",
      "Processing times vary by embassy location"
    ]
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    visaTypes: [
      { type: "Standard Visitor Visa", duration: "Up to 6 months", processingTime: "3-4 weeks", fee: "£115" },
      { type: "Long-term Visitor", duration: "2, 5, or 10 years", processingTime: "3-4 weeks", fee: "£428 - £1,102" },
      { type: "Student Visa", duration: "Duration of course", processingTime: "3-4 weeks", fee: "£490" }
    ],
    requirements: [
      "Valid passport",
      "Online application completion",
      "Biometric appointment",
      "Proof of funds",
      "Accommodation details",
      "Travel itinerary"
    ],
    documents: [
      "Valid passport",
      "Application form printout",
      "Bank statements (6 months)",
      "Employment/business proof",
      "Accommodation booking",
      "Flight reservations",
      "Travel insurance",
      "TB test (if applicable)"
    ],
    notes: [
      "Applications processed through VFS Global centers",
      "Priority service available for faster processing",
      "Health surcharge may apply for longer stays"
    ]
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    visaTypes: [
      { type: "Tourist Visa (30 days)", duration: "30 days", processingTime: "2-3 business days", fee: "$90" },
      { type: "Tourist Visa (90 days)", duration: "90 days", processingTime: "2-3 business days", fee: "$250" },
      { type: "Transit Visa", duration: "48-96 hours", processingTime: "1-2 business days", fee: "$40 - $60" }
    ],
    requirements: [
      "Valid passport (6+ months)",
      "Passport-size photograph",
      "Confirmed hotel booking",
      "Return ticket",
      "Sufficient funds",
      "Sponsor/host details (if applicable)"
    ],
    documents: [
      "Passport color scan",
      "Passport photo (white background)",
      "Hotel reservation",
      "Flight booking",
      "Bank statement",
      "Travel insurance"
    ],
    notes: [
      "Many nationalities get visa on arrival",
      "Ramadan may affect processing times",
      "Visa can be extended from within UAE"
    ]
  },
  {
    id: "schengen",
    name: "Schengen Area",
    flag: "🇪🇺",
    visaTypes: [
      { type: "Short-stay (C Visa)", duration: "Up to 90 days", processingTime: "15-30 days", fee: "€90" },
      { type: "Airport Transit (A Visa)", duration: "Transit only", processingTime: "15-30 days", fee: "€90" },
      { type: "National Visa (D Visa)", duration: "90+ days", processingTime: "30-60 days", fee: "Varies" }
    ],
    requirements: [
      "Valid passport (3+ months post-travel)",
      "Completed application form",
      "Travel insurance (€30,000 coverage)",
      "Proof of accommodation",
      "Flight itinerary",
      "Financial means proof"
    ],
    documents: [
      "Valid passport with blank pages",
      "2 passport photos (35mm x 45mm)",
      "Travel insurance certificate",
      "Flight reservation",
      "Hotel bookings for entire stay",
      "Bank statements (3 months)",
      "Employment letter",
      "No Objection Certificate (if employed)"
    ],
    notes: [
      "Apply at embassy of main destination country",
      "90 days maximum in any 180-day period",
      "Covers 27 European countries"
    ]
  },
  {
    id: "australia",
    name: "Australia",
    flag: "🇦🇺",
    visaTypes: [
      { type: "eVisitor (651)", duration: "Up to 3 months", processingTime: "1-4 weeks", fee: "Free" },
      { type: "ETA (601)", duration: "Up to 3 months", processingTime: "1-24 hours", fee: "AUD 20" },
      { type: "Visitor Visa (600)", duration: "3-12 months", processingTime: "4-8 weeks", fee: "AUD 190-1,120" }
    ],
    requirements: [
      "Valid passport",
      "Health requirements met",
      "Good character",
      "Genuine temporary entrant",
      "Adequate funds",
      "Health insurance"
    ],
    documents: [
      "Valid passport",
      "Passport photos",
      "Bank statements",
      "Employment letter",
      "Travel itinerary",
      "Proof of ties to home country",
      "Travel insurance",
      "Invitation letter (if visiting friends/family)"
    ],
    notes: [
      "Apply online through ImmiAccount",
      "Health examinations may be required",
      "Biometrics collection may be necessary"
    ]
  },
  {
    id: "thailand",
    name: "Thailand",
    flag: "🇹🇭",
    visaTypes: [
      { type: "Visa on Arrival", duration: "15 days", processingTime: "On arrival", fee: "THB 2,000" },
      { type: "Tourist Visa (TR)", duration: "60 days", processingTime: "2-5 business days", fee: "THB 1,000" },
      { type: "Multiple Entry Tourist", duration: "6 months", processingTime: "3-5 business days", fee: "THB 5,000" }
    ],
    requirements: [
      "Valid passport (6+ months)",
      "Passport-size photos",
      "Confirmed return ticket",
      "Hotel reservation",
      "Sufficient funds (THB 20,000)",
      "Completed application form"
    ],
    documents: [
      "Valid passport",
      "Application form",
      "2 passport photos (4cm x 6cm)",
      "Flight tickets",
      "Hotel booking",
      "Bank statement"
    ],
    notes: [
      "Many nationalities exempt for short stays",
      "Visa extensions possible at immigration offices",
      "90-day reporting required for long stays"
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    visaTypes: [
      { type: "Visa-Free Entry", duration: "14-90 days", processingTime: "On arrival", fee: "Free" },
      { type: "Tourist Visa", duration: "30 days", processingTime: "3-5 business days", fee: "SGD 30" },
      { type: "Multiple Journey Visa", duration: "Up to 5 years", processingTime: "4-6 weeks", fee: "SGD 30" }
    ],
    requirements: [
      "Valid passport (6+ months)",
      "Completed visa application",
      "Recent photograph",
      "Proof of accommodation",
      "Return/onward ticket",
      "Sufficient funds"
    ],
    documents: [
      "Valid passport",
      "Application form",
      "Passport photo",
      "Flight itinerary",
      "Hotel booking",
      "Bank statement",
      "Invitation letter (if applicable)"
    ],
    notes: [
      "Many nationalities enjoy visa-free entry",
      "SG Arrival Card required before arrival",
      "Stay extensions possible at ICA"
    ]
  }
];
