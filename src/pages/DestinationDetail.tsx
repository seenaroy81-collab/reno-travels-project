import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Calendar, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { destinations } from "@/data/destinations";

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    return (
      <Layout>
        <div className="container px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Button asChild>
            <Link to="/destinations">Back to Destinations</Link>
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
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
        </div>
        <div className="container relative h-full flex flex-col justify-end px-4 pb-12">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Destinations
          </Link>
          <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-2">
            <MapPin className="h-4 w-4" />
            {destination.country}
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            {destination.name}
          </h1>
          <div className="flex flex-wrap gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {destination.duration}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Best: {destination.bestTime}
            </span>
            <span className="font-semibold text-accent text-lg">{destination.price}</span>
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
                <h2 className="text-2xl font-display font-bold mb-4">About {destination.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">Highlights</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-2xl font-display font-bold mb-6">Sample Itinerary</h2>
                <div className="space-y-4">
                  {destination.itinerary.map((day) => (
                    <Card key={day.day} variant="elevated">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-3">
                          <span className="w-10 h-10 rounded-full bg-gradient-ocean text-primary-foreground flex items-center justify-center text-sm font-bold">
                            {day.day}
                          </span>
                          <span className="font-display">{day.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">{day.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {day.activities.map((activity, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-muted rounded-full"
                            >
                              {activity}
                            </span>
                          ))}
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
                  <CardTitle className="font-display">Book This Destination</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <p className="text-3xl font-bold text-accent">{destination.price}</p>
                    <span className="text-sm text-muted-foreground">per person</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">{destination.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best Time</span>
                      <span className="font-medium">{destination.bestTime}</span>
                    </div>
                  </div>

                  <Button variant="hero" className="w-full" size="lg" asChild>
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/packages">View Packages</Link>
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

export default DestinationDetail;
