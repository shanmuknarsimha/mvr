import { Waves, Music, Trophy, Baby, Sparkles, TreePine } from 'lucide-react';

export default function Experience() {
  const activities = [
    {
      icon: Waves,
      title: 'Swimming Pool Access',
      description: 'Dive into our pristine private pool'
    },
    {
      icon: Music,
      title: 'Rain Dance Arena',
      description: 'Dance and celebrate under the rain'
    },
    {
      icon: Trophy,
      title: 'Box Cricket Turf',
      description: 'Professional cricket ground for matches'
    },
    {
      icon: Baby,
      title: 'Kids Play Zones',
      description: 'Safe and fun areas for children'
    },
    {
      icon: TreePine,
      title: 'Outdoor Games',
      description: 'Lawn activities for all ages'
    },
    {
      icon: Sparkles,
      title: 'Event Spaces',
      description: 'Perfect for celebrations and gatherings'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11202a] mb-4">
            What Makes Us Special
          </h2>
          <div className="w-24 h-1 bg-[#ffd014] mx-auto mb-8"></div>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
            More space. More freedom. More fun.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every corner of our resort is built for experiences you'll talk about long after your trip.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#11202a] text-center mb-10">
            Enjoy Activities Like:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#ffd014] transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ffd014] to-[#ffb800] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <activity.icon className="w-8 h-8 text-[#11202a]" />
                </div>
                <h4 className="text-xl font-bold text-[#11202a] mb-3">
                  {activity.title}
                </h4>
                <p className="text-gray-600">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-[#11202a] to-[#1a3544] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Perfect for groups, families & celebrations.
          </p>
        </div>
      </div>
    </section>
  );
}
