import { Layout } from "@/components/layout/Layout";
const images = [
  { src: "/assets/destination-japan.jpg", alt: "Tokyo, Japan" },
  { src: "/assets/destination-iceland.jpg", alt: "Northern Lights, Iceland" },
  { src: "/assets/destination-maldives.jpg", alt: "Maldives" },
  { src: "/assets/destination-bali.jpg", alt: "Bali" },
  { src: "/assets/destination-dubai.jpg", alt: "Dubai" },
  { src: "/assets/destination-santorini.jpg", alt: "Santorini" },
  { src: "/assets/destination-switzerland.jpg", alt: "Switzerland" },
  { src: "/assets/destination-paris.jpg", alt: "Paris" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-ocean">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Explore stunning moments from our adventures around the world</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl shadow-card group cursor-pointer">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
