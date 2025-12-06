import { Link } from "react-router-dom";
import { Phone, Instagram, Youtube, MapPin } from "lucide-react";
import logo from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2f19] text-white pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand / small about */}
          <div>
            <div className="flex flex-row gap-4">
              <img src={logo} className='h-16 w-16' alt="" />
              <h3 className="text-2xl font-serif font-bold mb-3">
                Mango Village Resorts
              </h3>
            </div>
            <p className="text-sm text-white/70 mb-4">
              A lush mango orchard getaway near Vizianagaram – perfect for
              family trips, college groups, and unforgettable celebrations.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <MapPin className="w-4 h-4" />
              <span>Chinagudipala, Vepada Mandal, Vizianagaram, Andhra Pradesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-[#FFB61E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#FFB61E] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-[#FFB61E] transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/cottages"
                  className="hover:text-[#FFB61E] transition-colors"
                >
                  Cottages
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-[#FFB61E] transition-colors"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Events & Packages */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Events & Packages</h4>
            <ul className="space-y-1 text-sm text-white/80 mb-4">
              <li>🎉 Destination weddings & sangeeth</li>
              <li>💍 Mehndi & engagement functions</li>
              <li>🏢 Corporate outings & team events</li>
              <li>🎂 Birthday parties & reunions</li>
              <li>🎒 College trips & student get-togethers</li>
              <li>🐾 Kitty parties & family gatherings</li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
              <div className="flex items-center gap-2 text-sm text-white/90 mb-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919010221616" className="hover:text-[#FFB61E]">
                  +91 90102 21616
                </a>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <a
                  href="https://www.instagram.com/mangovillageresorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/90 hover:text-[#FFB61E]"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
                <a
                  href="https://www.youtube.com/@MangoVillageResorts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-white/90 hover:text-[#FFB61E]"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Find us on Google Maps</h4>
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.959872912831!2d83.0510355!3d17.9806038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bd70065329df9%3A0x66aa1328e36f35a2!2sMango%20Village%20Resorts!5e0!3m2!1sen!2sin!4v1764830448591!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {year} Mango Village Resorts. All rights reserved.</p>
          <p className="text-center md:text-right">
            Designed with ❤️ for nature lovers & happy stays.
          </p>
        </div>
      </div>
    </footer>
  );
}
