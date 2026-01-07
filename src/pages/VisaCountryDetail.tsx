import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, DollarSign, FileText, AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { visaCountries } from "@/data/visaCountries";

const VisaCountryDetail = () => {
  const { id } = useParams();
  const country = visaCountries.find((c) => c.id === id);

  if (!country) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Country not found</h1>
          <Button asChild>
            <Link to="/visa-services">Back to Visa Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4">
          <Link
            to="/visa-services"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Visa Services
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{country.flag}</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
              {country.name} Visa Requirements
            </h1>
          </div>
          <p className="text-primary-foreground/80 max-w-2xl">
            Complete visa information and requirements for traveling to {country.name}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Visa Types */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Visa Types Available</h2>
                <div className="grid gap-4">
                  {country.visaTypes.map((visa, index) => (
                    <Card key={index} variant="elevated">
                      <CardContent className="p-6">
                        <h3 className="font-display text-lg font-semibold mb-4">{visa.type}</h3>
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Duration</span>
                              <span className="text-sm font-medium">{visa.duration}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Processing</span>
                              <span className="text-sm font-medium">{visa.processingTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <span className="text-xs text-muted-foreground block">Fee</span>
                              <span className="text-sm font-medium">{visa.fee}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">General Requirements</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {country.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Required Documents</h2>
                <Card variant="elevated">
                  <CardContent className="p-6">
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {country.documents.map((doc, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <FileText className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Notes */}
              {country.notes.length > 0 && (
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Important Notes</h2>
                  <Card variant="elevated" className="border-accent/30 bg-accent/5">
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {country.notes.map((note, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <AlertCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                            {note}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-display">Need Visa Assistance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our visa experts can handle your {country.name} visa application from start to finish.
                  </p>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Our Services Include:</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" />
                        Document verification
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" />
                        Application assistance
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" />
                        Embassy appointment
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-accent" />
                        Status tracking
                      </li>
                    </ul>
                  </div>
                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <Link to="/contact">Get Visa Help</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/services/visa-assistance">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisaCountryDetail;
