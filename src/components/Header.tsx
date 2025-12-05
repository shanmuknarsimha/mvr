import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: 'hero-video', label: 'Home' },
    { path: 'about-us', label: 'About Us' },
    { path: 'activities', label: 'Activities' },
    { path: 'cottages', label: 'Cottages' },
    { path: 'gallery', label: 'Gallery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} className='h-12 w-12' alt="" />
          <div className="sm:block">
            <h1 className="text-lg font-serif font-bold text-[#2B6430]">Mango Village Resorts</h1>
            <p className="text-xs text-[#8C5A2B]">A real time in nature</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              href={'#'+link.path}
              className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                isActive(link.path)
                  ? 'bg-[#FFB61E] text-[#2B6430]'
                  : 'text-[#2B6430] hover:bg-[#FFB61E]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-[#FFF7E3] rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#2B6430]" />
          ) : (
            <Menu className="w-6 h-6 text-[#2B6430]" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden bg-[#FFF7E3] border-t-2 border-[#2B6430]/10">
          <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                href={'#'+link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  isActive(link.path)
                    ? 'bg-[#FFB61E] text-[#2B6430]'
                    : 'text-[#2B6430] hover:bg-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-[#FFB61E] hover:bg-[#ff9d00] text-[#2B6430] font-bold px-4 py-3 rounded-lg transition-all duration-300 text-center"
            >
              Book on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
