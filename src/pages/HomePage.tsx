import { UtensilsCrossed, CheckCircle, Star, Trees, Sparkles, Car, Waves, CloudRain, Film, Dumbbell, Gamepad2, Users, Heart, HomeIcon } from 'lucide-react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import ActivityVideo from '../components/ActivityVideo';

import topview from '../assets/gallery/topview.webp';
import pool from '../assets/gallery/pool.webp';
import billiards from '../assets/gallery/billiards.webp';
import projector from '../assets/gallery/projector.webp';
import raindance from '../assets/gallery/raindance.webp';
import turf from '../assets/gallery/turf.webp';
import dining from '../assets/gallery/dining.webp';
import countryside from '../assets/gallery/countryside.webp';
import directions from '../assets/gallery/directions.webp';
import event from '../assets/gallery/event.webp';
import heroimg from '../assets/gallery/hero.webp';
import tinyhomes from '../assets/gallery/tinyhomes.webp';
import lxryhomes from '../assets/gallery/lxryhomes.webp';
import humanfossball from '../assets/gallery/humanfossball.webp';


export default function HomePage() {

  const features = [
    'Simple, fresh, homely meals prepared in-house',
    'Served hot, hygienic, and delicious',
    'Perfect for families, kids, and large groups',
  ];
  const reviews = [
    {
      text: 'Best hidden gem near Vizag!',
      author: 'Mahesh',
    },
    {
      text: 'Perfect for birthdays and reunions. Kids loved it.',
      author: 'Aruna',
    },
    {
      text: 'Clean cottages, great food, outstanding hospitality.',
      author: 'Sandeep',
    },
    {
      text: 'Rain dance + projector = perfect night.',
      author: 'Teja',
    },
  ];
  const highlights = [
    { icon: Trees, text: 'Surrounded by mango orchards', start: 131, end: 135, thumbnailimg: topview },
    { icon: Sparkles, text: 'Peaceful countryside ambience', start: 11, end: 13, thumbnailimg: countryside },
    { icon: Car, text: 'Easy access from Vizag', start: 4, end: 7, thumbnailimg: directions },
    { icon: Heart, text: 'A place where "time slows down and memories speed up"', start: 617, end: 627, thumbnailimg: humanfossball },
  ];
  const activities = [
    { title: "Swimming Pool", description: "Chill, splash, unwind", icon: Waves, start: 92, end: 95, thumbnailimg: pool },
    { title: "Rain Dance", description: "Fun moments under refreshing showers", icon: CloudRain, start: 96, end: 100, thumbnailimg: raindance },
    { title: "Outdoor Projector", description: "Movie nights beneath the stars", icon: Film, start: 100, end: 103, thumbnailimg: projector },
    { title: "Turf Court", description: "Basketball & Cricket turf for energetic groups", icon: Dumbbell, start: 46, end: 48, thumbnailimg: turf },
    { title: "Indoor Games", description: "Billiards, Table tennis, Archery, Fossball, chess, carroms & more", icon: Gamepad2, start: 105, end: 116, thumbnailimg: billiards },
    { title: "Group fun", description: "Designed exclusively by us", icon: Users, start: 117, end: 118, thumbnailimg: humanfossball },
  ];

  return (
    <Layout title="Home">
      <div className="w-full">
        {/* Hero Section / Background Video Section */}
        <ActivityVideo startAt={0} stopAt={135} thumbnailUrl={heroimg} />

        {/* About Us Section */}
        <section className="py-20 bg-gradient-to-b from-[#FFF7E3] to-white" id="about-us">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-6">
              🌿 Where Nature, Comfort & Celebration Come Together
            </h2>

            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl text-[#8C5A2B] leading-relaxed mb-6">
                Just 45 minutes from Vizag, Mango Village Resorts is your escape into pure greenery — surrounded by endless mango trees, quiet countryside ambience, and premium stays designed for joy, peace, and togetherness.
              </p>

              <p className="text-xl text-[#8C5A2B] leading-relaxed font-medium">
                Whether it's a family weekend, birthday bash, college reunion, team outing or a cozy couple stay — this is where memories are made.
              </p>
            </div>

            <div className="mt-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B6430] to-[#FFB61E] rounded-3xl transform rotate-1"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#FFB61E] mb-1">4.6</div>
                    <div className="text-sm text-[#2B6430]">Rated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#FFB61E] mb-1">1200+</div>
                    <div className="text-sm text-[#2B6430]">Happy Guests</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#FFB61E] mb-1">45min</div>
                    <div className="text-sm text-[#2B6430]">From Vizag</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#FFB61E] mb-1">100%</div>
                    <div className="text-sm text-[#2B6430]">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-white" id="activities">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-4">
              🎉 What Makes Us Special
            </h2>

            <h3 className="text-2xl font-semibold text-center text-[#8C5A2B] mb-12">
              Enjoy Activities Like:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#FFF7E3] to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#2B6430]/10"
                >
                  {/* Video snippet */}
                  <ActivityVideo startAt={activity.start} stopAt={activity.end} thumbnailUrl={activity.thumbnailimg} />

                  {/* Icon + text */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FFB61E] to-[#ff9d00] rounded-xl flex items-center justify-center">
                      <activity.icon className="w-7 h-7 text-[#2B6430]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#2B6430] mb-2">
                        {activity.title}
                      </h4>
                      <p className="text-[#8C5A2B]">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            <p className="text-center text-xl text-[#2B6430] font-medium italic">
              A perfect blend of nature, entertainment, and relaxation — all in one place.
            </p>
          </div>
        </section>

        {/* Cottages Section */}
        <section className="py-20 bg-gradient-to-b from-[#FFF7E3] to-[#C8E8FF]/20" id="cottages">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-4">
              🏡 Cottages & Stays
            </h2>

            <p className="text-center text-xl text-[#8C5A2B] mb-4 max-w-3xl mx-auto">
              Choose from beautifully crafted rooms wrapped in greenery.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Couple Stays */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#FFB61E]/30">
                <ActivityVideo startAt={61} stopAt={77} thumbnailUrl={tinyhomes} />

                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-[#FFB61E]" />
                  <h3 className="text-2xl font-serif font-bold text-[#FFB61E]">
                    Couple Stays
                  </h3>
                </div>

                <ul className="space-y-3 text-[#8C5A2B] text-lg">
                  {[
                    "Cozy & private tiny Cootages for two",
                    "Comfortable beds with fresh linens",
                    "Attached bathrooms with hot water",
                    "Peaceful ambience ideal for couples",
                    "Campfire & stargazing spots",
                    "Perfect for romantic getaways",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <CheckCircle className="w-5 h-5 text-[#FFB61E] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Family & Group Cottages */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#2B6430]/30">
                <ActivityVideo startAt={52} stopAt={60} thumbnailUrl={lxryhomes} />

                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-[#2B6430]" />
                  <h3 className="text-2xl font-serif font-bold text-[#2B6430]">
                    Family & Group Cottages
                  </h3>
                </div>

                <ul className="space-y-3 text-[#8C5A2B] text-lg mb-6">
                  {[
                    "Spacious & Luxurious Cottages for families and groups",
                    "Premium amenities — fridge, kettle & essentials",
                    "Ideal for celebrations & long stays",
                    "Attached bathrooms with hot water",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-center">
                      <CheckCircle className="w-5 h-5 text-[#2B6430] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-lg text-[#2B6430] font-semibold mb-3">
                  Our Signature Mango Cottages:
                </div>

                <ul className="text-[#8C5A2B] text-lg flex  flex-wrap gap-x-4 gap-y-2">
                  {["Alphonso", "Banginapalli", "Rasalu", "Kobbarimamidi", "Suvarnareka"].map(
                    (name, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <HomeIcon className="w-6 h-6 text-[#2B6430]" />
                        <span>{name}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="max-w-5xl my-16 mx-auto lg:px-6">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-12">
                🍽️ Food & Kitchen
              </h2>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-[#FFB61E]/30">
                <ActivityVideo startAt={79} stopAt={90} thumbnailUrl={dining} />
                <div className="flex justify-center items-center mb-8">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <UtensilsCrossed className="w-8 h-8 text-[#2B6430]" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#2B6430] mx-2">
                    In house Kitchen & Dining
                  </h3>
                </div>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#2B6430] flex-shrink-0 mt-1" />
                      <p className="text-xl text-[#8C5A2B] leading-relaxed">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages / Events Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-3">
              🎉 Perfect for Every Kind of Event
            </h2>
            <p className="text-center text-lg md:text-xl text-[#8C5A2B] mb-10">
              From destination weddings and college trips to kitty parties and family get-togethers,
              our packages fit almost every celebration.
            </p>

            {/* Simple “suitable for all events” + video row */}
            <div className="grid gap-10 md:grid-cols-2 items-center">
              <div className="rounded-2xl overflow-hidden">
                <ActivityVideo startAt={123} stopAt={125} thumbnailUrl={event} />
              </div>
              <div className="space-y-4">
                <ul className="space-y-3 text-lg font-medium text-[#2B6430]">
                  <li className="flex items-center gap-3">
                    <span className="bg-pink-100 text-pink-600 px-2 py-1 rounded-full text-sm font-bold shadow-sm">❤️</span>
                    Destination weddings & sangeeth
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm font-bold shadow-sm">💍</span>
                    Mehndi & engagement functions
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-bold shadow-sm">💼</span>
                    Corporate outings & team events
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm font-bold shadow-sm">🎂</span>
                    Birthday parties & reunions
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm font-bold shadow-sm">🎒</span>
                    College trips & student gatherings
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm font-bold shadow-sm">🐾</span>
                    Kitty parties & family get-togethers
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-20 bg-gradient-to-br from-[#2B6430] to-[#3a7d40] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-white mb-12">
              🌤️ Escape the City. Reconnect With Life.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (

                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#FFB61E]/30 hover:border-[#FFB61E] transition-all duration-300 transform hover:scale-105"
                >
                  <ActivityVideo startAt={highlight.start} stopAt={highlight.end} thumbnailUrl={highlight.thumbnailimg} />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#FFB61E] rounded-full flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-[#2B6430]" />
                    </div>
                    <p className="text-lg text-white pt-2 leading-relaxed">
                      {highlight.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-[#FFF7E3]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-12">
              🌟 Guest Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#2B6430]/10"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFB61E] text-[#FFB61E]" />
                    ))}
                  </div>
                  <p className="text-lg text-[#2B6430] font-medium mb-3">
                    "{review.text}"
                  </p>
                  <p className="text-[#8C5A2B]">— {review.author}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFB61E] to-[#ff9d00] text-[#2B6430] font-bold text-xl px-8 py-4 rounded-full shadow-lg">
                <Users className="w-6 h-6" />
                Join 1200+ happy guests who rediscovered joy here.
              </div>
            </div>
          </div>
        </section>

        <Gallery />
      </div>
    </Layout>
  );
}
