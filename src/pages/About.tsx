import { Shield, Leaf, TrendingUp, Award, Users, FlaskConical } from "lucide-react";
import farmField from "@/assets/farm-field.png";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={farmField} alt="Agricultural field at sunrise" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 to-brand-green-dark/70" />
        </div>
        <div className="container mx-auto relative z-10 text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif text-primary-foreground">Your Partner in Crop Protection</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Nourishing Growth, Enriching Lives since inception
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Square Cropcare Sciences Pvt. Ltd., we are committed to delivering high-quality crop protection solutions that enhance agricultural productivity. With a strong focus on innovation and quality, our products are designed to provide optimal performance for farmers, ensuring healthier crops and better yields.
            </p>
            <p>
              Founded on the principles of sustainability and excellence, we specialize in manufacturing and supplying a wide range of pesticide products that meet the needs of modern agriculture. Our solutions are carefully developed using advanced technology and stringent quality control processes to ensure they meet the highest standards of efficacy and safety.
            </p>
            <p>
              Our mission is to empower farmers by providing them with reliable, effective, and environmentally responsible products that not only protect crops but also contribute to sustainable agricultural practices. We pride ourselves on our continuous research and development efforts to improve product performance, offering solutions that help overcome the evolving challenges of agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: FlaskConical, title: "Innovation", desc: "Continuously developing advanced formulations for better results" },
              { icon: Shield, title: "Quality", desc: "ISO-certified processes ensuring highest standards of safety & efficacy" },
              { icon: Leaf, title: "Sustainability", desc: "Eco-friendly products for responsible agriculture" },
              { icon: Award, title: "Excellence", desc: "Striving for the best in everything we do" },
              { icon: Users, title: "Trust", desc: "Building lasting relationships with farmers and partners" },
              { icon: TrendingUp, title: "Growth", desc: "Enabling higher yields and better profits for farmers" },
            ].map((v, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-card text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
