import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Zap, Home as HouseIcon, Image } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const sidebarLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/activities', label: 'Activities', icon: Zap },
    { path: '/cottages', label: 'Cottages', icon: HouseIcon },
    { path: '/gallery', label: 'Gallery', icon: Image },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden flex-col w-64 bg-white border-r-2 border-[#2B6430]/10 min-h-screen">

      <nav className="flex-1 p-6 space-y-2">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                isActive(link.path)
                  ? 'bg-[#FFB61E] text-[#2B6430] shadow-lg'
                  : 'text-[#2B6430] hover:bg-[#FFF7E3]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t-2 border-[#2B6430]/10">
        <div className="bg-gradient-to-br from-[#FFB61E] to-[#ff9d00] rounded-xl p-4 text-center">
          <p className="text-sm text-[#2B6430] font-medium mb-3">Need Help?</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#2B6430] hover:bg-[#1d4822] text-white font-bold py-2 rounded-lg transition-all duration-300 text-sm"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </aside>
  );
}
