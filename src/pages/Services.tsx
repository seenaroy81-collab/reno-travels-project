import { Link } from "react-router-dom";
import { ArrowRight, Plane, Ticket, FileCheck, Hotel, Shield, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Plane,
  Ticket,
  FileCheck,
  Hotel,
  Shield,
  Car,
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive travel solutions to make your journey seamless and memorable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Plane;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card variant="elevated" className="h-full group hover:shadow-elevated transition-all">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 mb-6 bg-gradient-ocean rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h2 className="font-display text-2xl font-semibold mb-3">{service.name}</h2>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      {service.specialOffers && service.specialOffers.length > 0 && (
                        <div className="p-3 bg-accent/10 rounded-lg mb-4">
                          <span className="text-xs font-semibold text-accent">Special Offer:</span>
                          <p className="text-sm text-foreground">{service.specialOffers[0]}</p>
                        </div>
                      )}

                      <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our experts are ready to guide you to the perfect service for your travel needs.
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

export default Services;
