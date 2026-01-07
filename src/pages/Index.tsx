import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Star, Plane, Shield, Users, Award } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import { TiltCard } from "@/components/ui/tilt-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { destinations } from "@/data/destinations";
import { tourPackages } from "@/data/packages";
import { ScrollSequence } from "@/components/ScrollSequence";
import { TextOverlay } from "@/components/TextOverlay";
import { Testimonials } from "@/components/Testimonials";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "15K+", label: "Happy Travelers" },
  { icon: MapPin, value: "100+", label: "Destinations" },
  { icon: Award, value: "25+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const features = [
  {
    icon: Plane,
    title: "Best Flight Deals",
    description: "Access exclusive fares from 500+ airlines worldwide",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with 24/7 travel support",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Personal travel consultants for tailored experiences",
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Layout>
      {/* Scrollytelling Hero Section */}
      <div ref={heroRef} className="relative h-[150vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          {/* Cinema Box Container */}
          <div className="relative w-full h-full md:h-auto md:aspect-video md:max-w-5xl overflow-hidden md:rounded-2xl bg-[#0F172A] shadow-2xl">
            {/* Mobile Scroll Sequence */}
            <div className="block md:hidden absolute inset-0 -z-0">
              <ScrollSequence frameCount={40} containerRef={heroRef} basePath="/mobile-frames" />
            </div>
            {/* Desktop Scroll Sequence */}
            <div className="hidden md:block absolute inset-0 -z-0">
              <ScrollSequence frameCount={40} containerRef={heroRef} basePath="/frames" />
            </div>
            <TextOverlay containerRef={heroRef} />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-primary relative z-10">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose <span className="text-accent">Almoued</span> Travels?
            </h2>
            <p className="text-muted-foreground">
              We go above and beyond to ensure your travel experience is nothing short of extraordinary.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card variant="elevated" className="text-center p-8 h-full hover:shadow-elevated transition-shadow duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-muted relative z-10">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Popular Destinations
              </h2>
              <p className="text-muted-foreground">
                Discover our most sought-after travel destinations
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link to="/destinations">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.slice(0, 6).map((destination, index) => (
              <TiltCard key={index} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="group overflow-hidden border-none h-full shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="text-xl font-bold">{destination.name}</h3>
                        <div className="flex items-center text-accent">
                          <Star className="mr-1 h-4 w-4 fill-current" />
                          <span className="text-sm font-medium">4.8</span>
                        </div>
                      </div>
                      <p className="mb-4 text-muted-foreground">{destination.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          {destination.price}
                        </span>
                        <Button variant="ghost" size="sm" asChild className="group-hover:translate-x-1 transition-transform text-accent">
                          <Link to={`/destinations/${destination.id}`}>Details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="py-20 bg-background relative z-10">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                Featured Packages
              </h2>
              <p className="text-muted-foreground">
                Handpicked experiences for every type of traveler
              </p>
            </div>
            <Button variant="outline" asChild className="mt-4 md:mt-0">
              <Link to="/packages">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.slice(0, 3).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Link to={`/packages/${pkg.id}`}>
                  <Card variant="destination" className="group overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {pkg.originalPrice && (
                        <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                          Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full capitalize">
                          {pkg.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          {pkg.rating} ({pkg.reviews})
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                        {pkg.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {pkg.duration}
                        </div>
                        <div className="text-right">
                          {pkg.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through mr-2">
                              ₹{pkg.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                          <span className="text-xl font-bold text-accent">₹{pkg.price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-ocean relative z-10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl opacity-50" />
        </div>

        <div className="container px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 drop-shadow-md">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-10 text-lg">
              Contact our travel experts today and let us help you plan the trip of a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild className="shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="hover:bg-white/10">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
