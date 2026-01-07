import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { visaCountries } from "@/data/visaCountries";

const VisaServices = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Global Visa Services
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Expert visa assistance for destinations worldwide. We handle the paperwork so you can focus on your adventure.
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Select Your Destination Country
            </h2>
            <p className="text-muted-foreground">
              Click on a country to view visa requirements and processing details
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visaCountries.map((country, index) => (
              <Link
                key={country.id}
                to={`/visa-services/${country.id}`}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Card variant="elevated" className="h-full group hover:shadow-elevated transition-all text-center">
                  <CardContent className="p-6">
                    <span className="text-6xl mb-4 block">{country.flag}</span>
                    <h3 className="font-display text-xl font-semibold mb-2">{country.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {country.visaTypes.length} visa type{country.visaTypes.length !== 1 ? "s" : ""} available
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent font-medium text-sm group-hover:gap-2 transition-all">
                      View Requirements <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Our Visa Process
            </h2>
            <p className="text-muted-foreground">Simple steps to get your visa approved</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free initial consultation to understand your travel needs" },
              { step: "02", title: "Documentation", desc: "We guide you through all required documents" },
              { step: "03", title: "Application", desc: "We submit and track your application" },
              { step: "04", title: "Approval", desc: "Receive your visa and travel with confidence" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ocean rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {item.step}
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Don't See Your Country?
          </h2>
          <p className="text-muted-foreground mb-6">
            We assist with visa applications for over 150 countries. Contact us for personalized assistance.
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

export default VisaServices;
