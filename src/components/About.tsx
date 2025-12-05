import { Star, Droplets, Calendar, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11202a] mb-4">
            Where Nature, Comfort & Celebration Come Together
          </h2>
          <div className="w-24 h-1 bg-[#ffd014] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Mango Village Resorts is a serene, lush, mango-orchard retreat just minutes away from Vizag city — designed for people who want peace, space, and unforgettable moments.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-[#11202a] text-center mb-12">
            Why Guests Love Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#11202a] to-[#1a3544] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Star className="w-12 h-12 text-[#ffd014] mx-auto mb-4" />
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <p className="text-gray-200 text-lg">
                5-Star Reviews across families, students & corporate groups
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#11202a] to-[#1a3544] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Droplets className="w-12 h-12 text-[#ffd014] mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-4">Premium Facilities</div>
              <p className="text-gray-200 text-lg">
                Private pool, rain dance arena & vast green spaces
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#11202a] to-[#1a3544] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Calendar className="w-12 h-12 text-[#ffd014] mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-4">Perfect for Events</div>
              <p className="text-gray-200 text-lg">
                Ideal for birthdays, pre-wedding shoots, team outings & weekend escapes
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#11202a] to-[#1a3544] rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl">
              <CheckCircle2 className="w-12 h-12 text-[#ffd014] mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-4">Fully Customizable</div>
              <p className="text-gray-200 text-lg">
                Clean, spacious, and fully customizable for any event
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-2xl sm:text-3xl font-bold text-[#11202a] italic">
            This is where "memorable" becomes <span className="text-[#ffd014]">guaranteed</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
