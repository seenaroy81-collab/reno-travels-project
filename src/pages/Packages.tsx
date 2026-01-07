import { Link } from "react-router-dom";
import { Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { tourPackages } from "@/data/packages";

const categories = ["all", "adventure", "luxury", "cultural", "honeymoon", "family"] as const;

const Packages = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Tour Packages
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Handcrafted travel experiences designed to create lasting memories
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          {/* Filter tabs - for visual purposes */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors capitalize ${cat === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
              >
                {cat === "all" ? "All Packages" : cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <Link
                key={pkg.id}
                to={`/packages/${pkg.id}`}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card variant="destination" className="group overflow-hidden h-full">
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {pkg.originalPrice && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {pkg.category}
                    </span>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-medium">{pkg.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">({pkg.reviews} reviews)</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold mb-2">{pkg.name}</h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {pkg.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pkg.highlights.slice(0, 3).map((highlight, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
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
                        <span className="text-2xl font-bold text-accent">₹{pkg.price.toLocaleString('en-IN')}</span>
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
            Need a Custom Package?
          </h2>
          <p className="text-muted-foreground mb-6">
            We can tailor any trip to match your preferences and budget.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact">
              Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
