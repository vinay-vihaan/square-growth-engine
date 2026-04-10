import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Leaf, TrendingUp, Users, Award, FlaskConical, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import EnquiryDialog from "@/components/EnquiryDialog";
import { categories, products } from "@/data/products";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Lush green agricultural field" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/90 via-brand-green-dark/70 to-transparent" />
    </div>
    <div className="container mx-auto relative z-10 py-20">
      <div className="max-w-2xl space-y-6 animate-fade-up">
        <span className="inline-block px-4 py-1.5 bg-brand-lime/20 text-brand-lime rounded-full text-sm font-semibold tracking-wide border border-brand-lime/30">
          ISO Certified • Trusted Across India
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-primary-foreground">
          Rooted in Tradition,{" "}
          <span className="text-brand-lime italic">Growing for the Future</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-xl">
          India's trusted partner for advanced crop protection & agricultural solutions designed for higher yield, healthier crops, and better profits.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link to="/products">
            <Button size="lg" className="bg-brand-lime text-brand-green-dark font-bold text-base px-8 hover:bg-brand-lime/90 shadow-lg">
              Explore Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <EnquiryDialog
            trigger={
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base px-8">
                <Phone className="mr-2 h-5 w-5" /> Talk to an Expert
              </Button>
            }
          />
        </div>
      </div>
    </div>
  </section>
);

const CategoriesSection = () => (
  <section className="py-16 md:py-24 bg-gradient-subtle">
    <div className="container mx-auto">
      <div className="text-center mb-12 space-y-3">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">Our Product Range</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Comprehensive agricultural solutions for every farming need
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((cat, i) => (
          <Link
            to="/products"
            key={cat.id}
            className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-up stagger-${i + 1}`}
            style={{ opacity: 0 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={640} height={640} />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
              <span className="inline-flex items-center text-primary font-semibold text-sm pt-1 group-hover:gap-2 transition-all">
                View Products <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => {
  const featured = products.slice(0, 6);
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Featured Products</h2>
          <p className="text-muted-foreground">Trusted by farmers across India for proven results</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {featured.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={320} height={320} />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold font-sans text-foreground group-hover:text-primary transition-colors text-sm md:text-base">{product.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">{product.shortBenefit}</p>
                <EnquiryDialog
                  productName={product.name}
                  trigger={
                    <Button size="sm" className="w-full bg-gradient-cta text-primary-foreground font-semibold text-xs mt-2">
                      Enquire Now
                    </Button>
                  }
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => {
  const reasons = [
    { icon: FlaskConical, title: "Advanced Formulations", desc: "Cutting-edge technology for maximum effectiveness" },
    { icon: CheckCircle2, title: "Proven Results", desc: "Tested and trusted across multiple crops and regions" },
    { icon: Shield, title: "Quality Assured", desc: "Strict quality control and ISO-certified processes" },
    { icon: Leaf, title: "Sustainable Solutions", desc: "Eco-friendly products for long-term soil health" },
    { icon: TrendingUp, title: "Continuous R&D", desc: "Always innovating for better crop performance" },
    { icon: Users, title: "Farmer First", desc: "Dedicated support and expert guidance for every farmer" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-serif">Why Choose Square?</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto">Built for Indian Farmers. Backed by Science.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="text-center space-y-3 p-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-lime/20 flex items-center justify-center mx-auto">
                <r.icon className="h-7 w-7 text-brand-lime" />
              </div>
              <h3 className="font-semibold font-sans text-sm md:text-base">{r.title}</h3>
              <p className="text-xs md:text-sm text-primary-foreground/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto">
      <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card-hover text-center space-y-6 border border-border">
        <Award className="h-12 w-12 text-brand-gold mx-auto" />
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">
          Not sure which product is right for your crop?
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Get expert guidance tailored to your farm. Our agricultural specialists are ready to help you achieve the best results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <EnquiryDialog
            trigger={
              <Button size="lg" className="bg-gradient-cta text-primary-foreground font-bold px-8">
                Get Free Consultation
              </Button>
            }
          />
          <a href="tel:+919000406007">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
              <Phone className="mr-2 h-5 w-5" /> Request Call Back
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const DealerCTA = () => (
  <section className="py-16 md:py-20 bg-brand-earth-light">
    <div className="container mx-auto text-center space-y-6">
      <h2 className="text-2xl md:text-3xl font-serif text-foreground">Grow With Square</h2>
      <p className="text-muted-foreground max-w-md mx-auto">
        Become a dealer and unlock high-demand agricultural products with strong market potential.
      </p>
      <Link to="/dealer">
        <Button size="lg" className="bg-brand-earth text-primary-foreground font-bold px-8 hover:bg-brand-earth/90">
          Become a Dealer <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </section>
);

const Index = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseSection />
      <CTASection />
      <DealerCTA />
    </div>
  );
};

export default Index;
