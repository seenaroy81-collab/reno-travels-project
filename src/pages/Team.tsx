import { Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { teamMembers } from "@/data/team";

const Team = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Our Team</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Meet the passionate experts behind your perfect journey</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} variant="elevated" className="overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  {member.social && (
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && <a href={member.social.linkedin} className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"><Linkedin className="h-4 w-4" /></a>}
                      {member.social.email && <a href={`mailto:${member.social.email}`} className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"><Mail className="h-4 w-4" /></a>}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
