import { TrendingUp, DollarSign, Megaphone, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const DealerPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "Our business development team will contact you shortly." });
    setForm({ name: "", phone: "", email: "", location: "", business: "", message: "" });
  };

  const benefits = [
    { icon: DollarSign, title: "High-Margin Products", desc: "Premium products with excellent profit margins for dealers" },
    { icon: TrendingUp, title: "Strong Demand", desc: "Growing market with increasing demand for quality crop protection" },
    { icon: Megaphone, title: "Marketing Support", desc: "Full marketing materials, training, and promotional assistance" },
    { icon: Award, title: "Trusted Brand", desc: "ISO-certified, established brand that farmers know and trust" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif">Grow With Square</h1>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            Become a dealer and unlock high-demand agricultural products with strong market potential.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground text-center mb-12">Why Partner With Us?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 shadow-card text-center space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold font-sans text-foreground text-sm md:text-base">{b.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-serif text-foreground">Apply Now</h2>
              <p className="text-muted-foreground text-sm">Fill in your details and our team will reach out to you</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input placeholder="Location / City" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required />
              <Input placeholder="Current Business (if any)" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} />
              <Textarea placeholder="Tell us why you want to partner with Square..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} />
              <Button type="submit" size="lg" className="w-full bg-gradient-cta text-primary-foreground font-bold text-base">
                Submit Application <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerPage;
