import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Leaf, Target, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products, categories } from "@/data/products";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", location: "", crop: "", message: "" });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-serif">Product Not Found</h1>
          <Link to="/products">
            <Button variant="outline">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Enquiry Submitted!", description: "Our expert will contact you within 24 hours." });
    setForm({ name: "", phone: "", location: "", crop: "", message: "" });
  };

  const cat = categories.find((c) => c.id === product.category);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" /> Products
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" width={640} height={640} />
            </div>
            <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider bg-secondary px-3 py-1 rounded-full">
              {cat?.name}
            </span>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-serif text-foreground">{product.name}</h1>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-2 font-semibold font-sans text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Key Benefits
              </h2>
              <ul className="space-y-2">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Leaf className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Crops */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-2 font-semibold font-sans text-foreground">
                <Target className="h-5 w-5 text-primary" /> Recommended For
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.targetCrops.map((crop) => (
                  <span key={crop} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div className="space-y-3">
              <h2 className="flex items-center gap-2 font-semibold font-sans text-foreground">
                <Droplets className="h-5 w-5 text-primary" /> Usage
              </h2>
              <p className="text-sm text-muted-foreground bg-muted p-4 rounded-xl">{product.usage}</p>
            </div>

            {/* Enquiry Form */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border space-y-4">
              <h2 className="text-xl font-serif text-foreground">Get Best Price & Usage Guidance</h2>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                  <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                  <Input placeholder="Crop Type" value={form.crop} onChange={(e) => setForm({ ...form, crop: e.target.value })} />
                </div>
                <Textarea placeholder="Your requirement..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={3} />
                <Button type="submit" className="w-full bg-gradient-cta text-primary-foreground font-bold text-base">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
