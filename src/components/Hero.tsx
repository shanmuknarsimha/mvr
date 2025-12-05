import { Droplets, Users, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#11202a] via-[#1a3544] to-[#11202a]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNm0wIDJjMi4yMSAwIDQgMS43OSA0IDRzLTEuNzkgNC00IDQtNC0xLjc5LTQtNCAxLjc5LTQgNC00eiIgZmlsbD0iI2ZmZDAxNCIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ffd014] to-[#ffb800] flex items-center justify-center shadow-2xl">
            <span className="text-4xl">🥭</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Mango Village Resorts
        </h1>

        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#ffd014] mb-8">
          Visakhapatnam's #1 Nature Resort for Families, Parties & Getaways
        </p>

        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Escape the noise. Slow down. Reconnect with nature — and with the people who matter.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Droplets className="w-5 h-5 text-[#ffd014]" />
            <span className="font-medium">Private Pool</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <span className="text-[#ffd014]">🎉</span>
            <span className="font-medium">Perfect for Birthdays & Events</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Heart className="w-5 h-5 text-[#ffd014]" />
            <span className="font-medium">Ideal for Couples & Families</span>
          </div>
        </div>

        <div className="mb-12">
          <p className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Packages Starting at <span className="text-[#ffd014]">₹4,999</span> / person
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#packages"
            className="group px-8 py-4 bg-[#ffd014] text-[#11202a] font-bold text-lg rounded-full hover:bg-[#ffb800] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
          >
            Check Packages
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
          >
            <span>💬</span>
            Get Best Price on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
