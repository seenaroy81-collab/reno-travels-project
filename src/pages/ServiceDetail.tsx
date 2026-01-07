import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check, Plane, Ticket, FileCheck, Hotel, Shield, Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const IconComponent = iconMap[service.icon] || Plane;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
              {service.name}
            </h1>
          </div>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">About This Service</h2>
                <p className="text-muted-foreground leading-relaxed">{service.details}</p>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Features & Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-24">
                {/* Special Offers */}
                {service.specialOffers && service.specialOffers.length > 0 && (
                  <Card variant="elevated" className="border-accent/30">
                    <CardHeader>
                      <CardTitle className="font-display flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-accent" />
                        Special Offers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.specialOffers.map((offer, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm p-3 bg-accent/10 rounded-lg"
                          >
                            <Sparkles className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            {offer}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* CTA */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="font-display">Get Started</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Ready to use our {service.name.toLowerCase()}? Contact us today and let our experts assist you.
                    </p>
                    <Button variant="hero" className="w-full" size="lg" asChild>
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/packages">View Packages</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
