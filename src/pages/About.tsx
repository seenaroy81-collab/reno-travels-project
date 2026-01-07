import { Link } from "react-router-dom";
import { Award, Users, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">About Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Crafting unforgettable journeys since 1999</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 1999, Almoued Travel began with a simple mission: to make extraordinary travel experiences accessible to everyone. What started as a small family-owned agency has grown into a trusted name in the travel industry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we've helped over 15,000 travelers explore more than 100 destinations worldwide. Our team of passionate travel experts works tirelessly to create personalized itineraries that turn dream vacations into reality.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, value: "15K+", label: "Happy Travelers" },
              { icon: Globe, value: "100+", label: "Destinations" },
              { icon: Award, value: "25+", label: "Years Experience" },
              { icon: Heart, value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-muted rounded-xl">
                <stat.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" asChild><Link to="/team">Meet Our Team</Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
