import { Link } from "react-router-dom";
import { Logo } from "@/components/ui/logo";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Tour Packages", path: "/packages" },
    { name: "Destinations", path: "/destinations" },
    { name: "Visa Services", path: "/visa-services" },
    { name: "All Services", path: "/services" },
  ],
  destinations: [
    { name: "Maldives", path: "/destinations/maldives" },
    { name: "Bali", path: "/destinations/bali" },
    { name: "Dubai", path: "/destinations/dubai" },
    { name: "Paris", path: "/destinations/paris" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-white/5">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <Logo variant="light" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Your trusted partner for unforgettable travel experiences. We craft personalized journeys to the world's most beautiful destinations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 hover:bg-accent hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-accent">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-accent">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors text-sm font-medium tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-accent/80" />
                <span className="text-white/70 text-sm">
                  MG Road, Shenoys<br />
                  Kochi, Kerala 682035
                </span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 shrink-0 text-accent/80" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@almoued.com"
                  className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 shrink-0 text-accent/80" />
                  info@almoued.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs tracking-wider uppercase">
            © {new Date().getFullYear()} RENO ROY. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs tracking-wider uppercase font-medium">
            <Link to="/privacy" className="text-white/40 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
