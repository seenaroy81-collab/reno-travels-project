import { Link } from "react-router-dom";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { destinations } from "@/data/destinations";

const Destinations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            From tropical paradises to cultural capitals, discover the world's most inspiring destinations
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="destination" className="group overflow-hidden h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <MapPin className="h-4 w-4 text-accent" />
                      {dest.country}
                    </div>
                    <h2 className="font-display text-2xl font-semibold mb-3">{dest.name}</h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {dest.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.slice(0, 3).map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {dest.duration}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {dest.bestTime}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-accent">{dest.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Can't find your dream destination?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our travel experts can create a custom itinerary just for you.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
