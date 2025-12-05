import { MapPin, Clock, Leaf, Heart } from 'lucide-react';

export default function Escape() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#11202a] via-[#1a3544] to-[#11202a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZDAxNCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Escape the City. Reconnect With Life.
          </h2>
          <div className="w-24 h-1 bg-[#ffd014] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-[#ffd014] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Just 15–20 minutes from Visakhapatnam
                </h3>
                <p className="text-gray-300">
                  Close to the city, yet miles away from the chaos and noise
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Leaf className="w-8 h-8 text-[#ffd014] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Surrounded by Lush Greenery
                </h3>
                <p className="text-gray-300">
                  Wake up to greenery, breathe cleaner air, and enjoy the slow rhythm of village life
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Heart className="w-8 h-8 text-[#ffd014] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Without Compromising Comfort
                </h3>
                <p className="text-gray-300">
                  Experience nature while enjoying modern amenities and facilities
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#ffd014] to-[#ffb800] rounded-3xl p-8 sm:p-12 shadow-2xl">
              <Clock className="w-12 h-12 text-[#11202a] mb-6" />
              <h3 className="text-3xl font-bold text-[#11202a] mb-4">
                Create Unforgettable Memories
              </h3>
              <p className="text-[#11202a]/80 text-lg mb-6">
                Whether it's an intimate celebration or a full group gathering, we make it effortless and unforgettable.
              </p>
              <p className="text-xl font-bold text-[#11202a] mb-8">
                Your perfect escape is just a call away.
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#11202a] text-white font-bold text-lg rounded-full hover:bg-[#1a3544] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Best Price on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <blockquote className="text-2xl sm:text-3xl font-light text-white italic max-w-4xl mx-auto">
            "A place where time slows down, and memories speed up."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
