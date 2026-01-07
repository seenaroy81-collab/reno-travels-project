import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";

const branches = [
  { city: "Kochi", address: "MG Road, Shenoys, Kochi, Kerala 682035", phone: "+91 98765 43210", email: "kochi@almoued.com" },
  { city: "Dubai", address: "Business Bay, Downtown Dubai, UAE", phone: "+971 4 123 4567", email: "dubai@almoued.com" },
  { city: "London", address: "78 Oxford Street, London W1D 1BS", phone: "+44 20 7946 0958", email: "london@almoued.com" },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };
  return (
    <Layout>
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">We'd love to hear from you. Get in touch with our travel experts.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Send Us a Message</h2>
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. One of our travel experts will get back to you within 24 hours.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Email Address" required />
                  </div>
                  <Input placeholder="Subject" required />
                  <Textarea placeholder="Your Message" rows={5} required />
                  <Button variant="hero" size="lg" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold mb-6">Our Branches</h2>
              <div className="space-y-4">
                {branches.map((branch, i) => (
                  <Card key={i} variant="elevated">
                    <CardHeader className="pb-2"><CardTitle className="font-display text-lg">{branch.city}</CardTitle></CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex items-start gap-2"><MapPin className="h-4 w-4 text-accent mt-0.5" />{branch.address}</div>
                      <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><a href={`tel:${branch.phone}`} className="hover:text-accent">{branch.phone}</a></div>
                      <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><a href={`mailto:${branch.email}`} className="hover:text-accent">{branch.email}</a></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <div><span className="font-medium">Business Hours:</span><br /><span className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};

export default Contact;
