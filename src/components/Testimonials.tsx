import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Adventure Enthusiast",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        content: "Almoued Travels made our honeymoon absolutely magical. The attention to detail and personalized itinerary was beyond our expectations.",
        location: "Paris, France"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Business Traveler",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        content: "I've used many agencies, but none match the seamless experience provided here. Their 24/7 support is a game changer.",
        location: "Tokyo, Japan"
    },
    {
        id: 3,
        name: "Emma Davis",
        role: "Family Vacationer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        content: "Traveling with kids can be stressful, but they handled everything perfectly. We made memories that will last a lifetime.",
        location: "Bali, Indonesia"
    }
];

export const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="container px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-sm font-medium mb-4">
                        <Star className="w-4 h-4 fill-primary" />
                        <span>Trusted by 15K+ Travelers</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Stories from the <span className="text-accent">Journey</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Don't just take our word for it. Hear what our community of explorers has to say about their experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 50 }}
                            whileHover={{ y: -10 }}
                        >
                            <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-8 flex flex-col h-full">
                                    <Quote className="w-10 h-10 text-primary/20 mb-6" />
                                    <p className="text-muted-foreground text-lg mb-8 flex-grow italic">
                                        "{testimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                            <p className="text-sm text-primary/80">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
