import { useParams, Link } from "react-router-dom";
import { Clock, Star, ArrowLeft, Check, X, MapPin, Utensils, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { tourPackages } from "@/data/packages";

const PackageDetail = () => {
  const { id } = useParams();
  const pkg = tourPackages.find((p) => p.id === id);

  if (!pkg) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Package not found</h1>
          <Button asChild>
            <Link to="/packages">Back to Packages</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pkg.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        </div>
        <div className="container relative h-full flex flex-col justify-end px-4 pb-12">
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Packages
          </Link>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full capitalize">
              {pkg.category}
            </span>
            <div className="flex items-center gap-1 text-primary-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              <span>{pkg.rating}</span>
              <span className="text-primary-foreground/70">({pkg.reviews} reviews)</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            {pkg.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {pkg.destination}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {pkg.duration}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Package Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included / Excluded */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="text-palm flex items-center gap-2">
                      <Check className="h-5 w-5" />
                      What's Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-palm mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2">
                      <X className="h-5 w-5" />
                      Not Included
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.excluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <X className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Detailed Itinerary */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Detailed Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <Card key={day.day} variant="elevated">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-3">
                          <span className="w-12 h-12 rounded-full bg-gradient-ocean text-primary-foreground flex items-center justify-center text-sm font-bold">
                            Day {day.day}
                          </span>
                          <span className="font-display">{day.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{day.description}</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="flex items-start gap-2">
                            <Utensils className="h-4 w-4 text-accent mt-1" />
                            <div>
                              <span className="font-medium text-sm">Meals</span>
                              <p className="text-sm text-muted-foreground">
                                {day.meals.join(", ") || "Not included"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Hotel className="h-4 w-4 text-accent mt-1" />
                            <div>
                              <span className="font-medium text-sm">Accommodation</span>
                              <p className="text-sm text-muted-foreground">{day.accommodation}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card variant="elevated" className="sticky top-24">
                <CardHeader>
                  <CardTitle className="font-display">Book This Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    {pkg.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <p className="text-3xl font-bold text-accent">₹{pkg.price.toLocaleString('en-IN')}</p>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Destination</span>
                      <span className="font-medium">{pkg.destination}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category</span>
                      <span className="font-medium capitalize">{pkg.category}</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <Link to="/contact">Book Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Enquire</Link>
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

export default PackageDetail;
