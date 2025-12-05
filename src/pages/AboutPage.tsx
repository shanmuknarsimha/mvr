import Layout from '../components/Layout';
import { MapPin, Users, Leaf, Heart, Award, Home } from 'lucide-react';

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: Leaf,
      title: 'Nature Immersion',
      description: 'Surrounded by lush mango orchards and pristine countryside',
    },
    {
      icon: Heart,
      title: 'Premium Hospitality',
      description: 'World-class service with personalized attention to every guest',
    },
    {
      icon: Award,
      title: '98% Satisfaction',
      description: '1200+ happy guests who return year after year',
    },
    {
      icon: Users,
      title: 'Group-Friendly',
      description: 'Perfect for families, friends, corporate, and celebrations',
    },
    {
      icon: Home,
      title: 'Comfort & Style',
      description: '5 thoughtfully designed cottages with modern amenities',
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Just 45 minutes from Visakhapatnam city center',
    },
  ];

  return (
    <Layout title="About Us">
      <div className="w-full">
        <section className="relative h-96 bg-gradient-to-br from-[#2B6430] to-[#3a7d40] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              About Mango Village
            </h1>
            <p className="text-xl text-[#C8E8FF] max-w-2xl mx-auto">
              Your Gateway to Authentic Countryside Experience
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-[#2B6430] mb-8 text-center">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-[#8C5A2B] space-y-6 leading-relaxed">
              <p>
                Nestled in the heart of Visakhapatnam's lush countryside, Mango Village Resorts was born from a simple vision: to create a sanctuary where families, friends, and travelers could escape the chaos of city life and reconnect with nature, with each other, and with themselves.
              </p>

              <p>
                Surrounded by endless mango orchards and the serene ambiance of rural life, our resort has become a cherished destination for over 1,200 guests seeking authentic, memorable experiences. Every cottage, every corner, every experience has been thoughtfully designed to balance comfort with nature's beauty.
              </p>

              <p>
                Whether you're celebrating a milestone, hosting a corporate retreat, or simply seeking peace and tranquility, Mango Village Resorts transforms ordinary moments into extraordinary memories. We believe that true luxury lies not in opulence, but in meaningful connections and experiences that last a lifetime.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FFF7E3]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-[#2B6430] mb-12 text-center">
              Why Choose Mango Village Resorts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#2B6430]/10"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFB61E] to-[#ff9d00] rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-[#2B6430]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2B6430] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#8C5A2B]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-[#2B6430] to-[#3a7d40] rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-serif font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To provide authentic countryside experiences that nurture human connections, create lasting memories, and offer a refreshing escape from urban life. We are committed to hospitality excellence while preserving the natural beauty and peaceful ambiance of our mango orchards.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#FFB61E] to-[#ff9d00] rounded-3xl p-8 text-[#2B6430]">
                <h3 className="text-3xl font-serif font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To become Visakhapatnam's most beloved destination resort, recognized for our exceptional hospitality, authentic experiences, and commitment to sustainable practices. A place where every guest feels welcomed like family and leaves with cherished memories.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FFF7E3]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-[#2B6430] mb-4 text-center">
              Location Details
            </h2>

            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-[#FFB61E]/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#2B6430] mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-[#FFB61E]" />
                    Address
                  </h3>
                  <p className="text-lg text-[#8C5A2B] mb-2">Devarapalli</p>
                  <p className="text-lg text-[#8C5A2B] mb-2">Visakhapatnam, Andhra Pradesh</p>
                  <p className="text-lg text-[#8C5A2B]">India</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2B6430] mb-4">Distance & Access</h3>
                  <p className="text-lg text-[#8C5A2B] mb-2">45 minutes from Vizag city center</p>
                  <p className="text-lg text-[#8C5A2B] mb-2">Easy access via main highway</p>
                  <p className="text-lg text-[#8C5A2B]">Ample parking available</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Mango+Village+Resorts+Devarapalli+Visakhapatnam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB61E] hover:bg-[#ff9d00] text-[#2B6430] font-bold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
