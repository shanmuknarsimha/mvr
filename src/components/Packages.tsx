import { Cake, Coffee, GraduationCap, Heart, Users, CheckCircle2, Shield, Clock, Headphones } from 'lucide-react';

export default function Packages() {
  const packages = [
    {
      icon: Cake,
      title: 'Birthday Bash Package',
      subtitle: 'For kids, teens & adults who want a fun, stress-free celebration',
      price: '₹5,999',
      features: ['Decor setup', 'Cake table', 'Decorative lights', 'Seating arrangements', 'Pool access', 'Outdoor games'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: Coffee,
      title: 'Kitty Party Package',
      subtitle: 'Perfect for groups who want a chilled, private afternoon',
      price: '₹4,499',
      features: ['High-tea snacks', 'Rain dance', 'Indoor games', 'Outdoor games', 'Private spaces', 'Photo opportunities'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'Student & College Day Package',
      subtitle: 'The most popular package — full fun, zero restrictions',
      price: '₹3,999',
      features: ['DJ music', 'Rain dance', 'Cricket turf', 'Photo spots', 'Pool access', 'All activities'],
      gradient: 'from-blue-500 to-cyan-600',
      popular: true
    },
    {
      icon: Heart,
      title: 'Pre-Wedding / Couple Package',
      subtitle: 'Romantic, aesthetic & peaceful',
      price: '₹6,499',
      features: ['Decor setups', 'Private photoshoot zones', 'Candlelight options', 'Pool access', 'Romantic ambiance', 'Custom arrangements'],
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Fun Day / Family Day Package',
      subtitle: 'The complete day-out experience',
      price: '₹4,999',
      features: ['Pool access', 'All games', 'Kids play area', 'Sit-out spaces', 'Food options', 'Full-day access'],
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const benefits = [
    { icon: Shield, text: 'Transparent pricing' },
    { icon: CheckCircle2, text: 'Zero hidden charges' },
    { icon: Headphones, text: 'Dedicated event managers' },
    { icon: Users, text: 'Perfect for small or large groups' }
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11202a] mb-4">
            Packages Designed for Every Occasion
          </h2>
          <div className="w-24 h-1 bg-[#ffd014] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700">
            Transparent pricing. Zero hidden charges. 100% tailored to your event.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-xl border-2 ${pkg.popular ? 'border-[#ffd014]' : 'border-gray-200'} overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 bg-[#ffd014] text-[#11202a] px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  🔥 MOST POPULAR
                </div>
              )}

              <div className={`bg-gradient-to-r ${pkg.gradient} p-8 text-white`}>
                <pkg.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-white/90 text-sm mb-4">{pkg.subtitle}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm">Starting at</span>
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-sm">/ person</span>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-4">Includes:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#ffd014] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="block w-full text-center px-6 py-3 bg-[#11202a] text-white font-semibold rounded-full hover:bg-[#1a3544] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 sm:p-12 mb-12">
          <h3 className="text-3xl font-bold text-[#11202a] text-center mb-10">
            Why Book With Us
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-md">
                <benefit.icon className="w-6 h-6 text-[#ffd014]" />
                <span className="font-semibold text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#ffd014]/20 text-[#11202a] px-6 py-3 rounded-full mb-6">
              <Clock className="w-5 h-5" />
              <span className="font-bold">Bookings fill fast — especially weekends</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-[#ffd014] text-[#11202a] font-bold text-xl rounded-full hover:bg-[#ffb800] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
