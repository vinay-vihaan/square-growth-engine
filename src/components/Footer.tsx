import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-green-dark text-primary-foreground">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold font-sans">
                <span className="text-brand-lime">SQUARE</span>
              </h3>
              <p className="text-[10px] tracking-[0.15em] opacity-70 font-sans">CROPCARE SCIENCES PVT. LTD.</p>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Nourishing Growth, Enriching Lives. India's trusted partner for advanced crop protection & agricultural solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold font-sans text-brand-lime">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/products", label: "Products" },
                { href: "/about", label: "About Us" },
                { href: "/dealer", label: "Become a Dealer" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.href} to={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold font-sans text-brand-lime">Products</h4>
            <nav className="flex flex-col gap-2">
              {["Crop Protection", "Bio Products", "Plant Growth Solutions"].map((cat) => (
                <Link key={cat} to="/products" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {cat}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold font-sans text-brand-lime">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="https://maps.google.com" target="_blank" rel="noopener" className="flex items-start gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>House No. 6-3-347/7, Dwarakapuri Colony, Panjagutta, Hyderabad - 500082, Telangana</span>
              </a>
              <a href="tel:+910404533011" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +91 040-4533 0111
              </a>
              <a href="mailto:squarecropsciences@gmail.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="h-4 w-4 flex-shrink-0" />
                squarecropsciences@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">© 2025 Square Cropcare Sciences Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="text-sm opacity-60 hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
