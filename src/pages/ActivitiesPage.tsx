import Layout from '../components/Layout';
import { Waves, CloudRain, Film, Dumbbell, Gamepad2, Baby, Flame, ArrowRight } from 'lucide-react';

export default function ActivitiesPage() {
  const activities = [
    {
      icon: Waves,
      title: 'Swimming Pool',
      description: 'Chill, splash, and unwind in our crystal-clear pool surrounded by greenery.',
    },
    {
      icon: CloudRain,
      title: 'Rain Dance Arena',
      description: 'Fun moments under refreshing showers – perfect for hot summer days and group celebrations.',
    },
    {
      icon: Film,
      title: 'Outdoor Projector',
      description: 'Movie nights beneath the stars with premium sound quality and comfortable seating.',
    },
    {
      icon: Dumbbell,
      title: 'Turf Court',
      description: 'Basketball & Cricket turf for energetic groups, sports enthusiasts, and friendly competitions.',
    },
    {
      icon: Gamepad2,
      title: 'Indoor Games',
      description: 'Table tennis, snow-cut table, and more – entertainment for all ages and skill levels.',
    },
    {
      icon: Baby,
      title: 'Kids Zone',
      description: 'Designed exclusively for children with safe, engaging activities and constant supervision.',
    },
    {
      icon: Flame,
      title: 'Night Campfire',
      description: 'Perfect for cozy, unforgettable evenings with stories, songs, and s\'mores under the stars.',
    },
  ];

  return (
    <Layout title="Activities">
      <div className="w-full">
        <section className="relative h-96 bg-gradient-to-br from-[#2B6430] to-[#3a7d40] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              🎉 Activities & Entertainment
            </h1>
            <p className="text-xl text-[#C8E8FF] max-w-2xl mx-auto">
              A perfect blend of nature, entertainment, and relaxation
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xl text-[#8C5A2B] mb-16">
              Experience a diverse range of activities designed for fun, relaxation, and unforgettable moments with family and friends.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#FFF7E3] to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#2B6430]/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFB61E] to-[#ff9d00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <activity.icon className="w-8 h-8 text-[#2B6430]" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#2B6430] mb-3">
                    {activity.title}
                  </h3>

                  <p className="text-lg text-[#8C5A2B] mb-6 leading-relaxed">
                    {activity.description}
                  </p>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FFB61E] font-bold hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-[#2B6430] to-[#3a7d40] rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Have Fun?</h3>
              <p className="text-lg mb-8">
                Book your stay and experience all our activities combined with premium accommodation.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB61E] hover:bg-[#ff9d00] text-[#2B6430] font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
