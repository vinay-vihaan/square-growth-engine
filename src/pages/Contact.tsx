import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Corporate Office", detail: "House No. 6-3-347/7, Dwarakapuri Colony, Panjagutta, Hyderabad - 500082, Telangana" },
    { icon: Phone, title: "Customer Care", detail: "+91 040-4533 0111, 90004 06007", href: "tel:+910404533011" },
    { icon: Mail, title: "Email", detail: "squarecropsciences@gmail.com", href: "mailto:squarecropsciences@gmail.com" },
    { icon: Clock, title: "Working Hours", detail: "Mon - Sat: 9:00 AM - 6:00 PM" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-serif">Let's Grow Together</h1>
          <p className="text-primary-foreground/70 max-w-md mx-auto">
            Have a question or need guidance? We're here to help.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-foreground">Get in Touch</h2>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-card">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-sans text-foreground text-sm">{info.title}</h3>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{info.detail}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{info.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-card h-64 bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8!2d78.45!3d17.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzEyLjAiTiA3OMKwMjcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Square Cropcare Sciences Office Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border space-y-6 h-fit lg:sticky lg:top-24">
            <div className="space-y-2">
              <h2 className="text-xl font-serif text-foreground">Send Enquiry</h2>
              <p className="text-sm text-muted-foreground">Fill in the form and we'll get back to you</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                <Input placeholder="Phone Number" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
              </div>
              <Input placeholder="Email Address" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
              <Textarea placeholder="Your message..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} required />
              <Button type="submit" className="w-full bg-gradient-cta text-primary-foreground font-bold text-base">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
