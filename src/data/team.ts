export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "With over 20 years in the travel industry, Sarah founded Wanderlust Travels with a vision to create personalized travel experiences that transform lives.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      email: "sarah@wanderlusttravels.com"
    }
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    role: "Head of Operations",
    bio: "Michael ensures every trip runs smoothly. His attention to detail and logistics expertise guarantee seamless travel experiences for all our clients.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      email: "michael@wanderlusttravels.com"
    }
  },
  {
    id: "emma-rodriguez",
    name: "Emma Rodriguez",
    role: "Senior Travel Consultant",
    bio: "Emma's passion for exploration has taken her to over 50 countries. She uses her firsthand experience to craft unforgettable itineraries.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      email: "emma@wanderlusttravels.com"
    }
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    role: "Visa & Documentation Expert",
    bio: "James navigates the complex world of travel documentation with ease. His expertise ensures hassle-free visa processing for our clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      email: "james@wanderlusttravels.com"
    }
  },
  {
    id: "priya-patel",
    name: "Priya Patel",
    role: "Customer Relations Manager",
    bio: "Priya's warm approach and problem-solving skills make her the go-to person for client support. She ensures every traveler feels valued.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      email: "priya@wanderlusttravels.com"
    }
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Adventure Travel Specialist",
    bio: "An adrenaline enthusiast, David specializes in adventure and eco-tourism. From mountain treks to diving expeditions, he plans thrilling getaways.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    social: {
      linkedin: "https://linkedin.com",
      email: "david@wanderlusttravels.com"
    }
  }
];
