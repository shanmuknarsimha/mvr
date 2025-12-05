import Layout from '../components/Layout';
import { Wifi, Wind, Droplet, Wind as Fan, Utensils, CheckCircle } from 'lucide-react';

export default function CottagesPage() {
  const cottages = [
    {
      name: 'Alphonso',
      type: 'Family & Group',
      description: 'Elegant & warm cottage perfect for small to medium families.',
      amenities: ['AC', 'Private Bathroom', 'Fridge', 'Kettle', 'Fresh Linens', 'Attached Patio'],
    },
    {
      name: 'Banginapalli',
      type: 'Family & Group',
      description: 'Spacious & group-friendly, ideal for large gatherings and celebrations.',
      amenities: ['AC', 'Private Bathroom', 'Fridge', 'Kettle', 'Fresh Linens', 'Kitchen Access'],
    },
    {
      name: 'Rasalu',
      type: 'Family & Group',
      description: 'Premium interiors designed for comfort lovers seeking luxury.',
      amenities: ['AC', 'Private Bathroom', 'Fridge', 'Kettle', 'Fresh Linens', 'Mini Bar'],
    },
    {
      name: 'Kobbarimamidi',
      type: 'Family & Group',
      description: 'Rustic charm combined with modern comfort for authentic experience.',
      amenities: ['AC', 'Private Bathroom', 'Fridge', 'Kettle', 'Fresh Linens', 'Nature View'],
    },
    {
      name: 'Suvarnareka',
      type: 'Family & Group',
      description: 'Aesthetic, airy, and picture-perfect for memorable stays.',
      amenities: ['AC', 'Private Bathroom', 'Fridge', 'Kettle', 'Fresh Linens', 'Balcony'],
    },
  ];

  return (
    <Layout title="Cottages">
      <div className="w-full">
        <section className="relative h-96 bg-gradient-to-br from-[#2B6430] to-[#3a7d40] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              🏡 Our Premium Cottages
            </h1>
            <p className="text-xl text-[#C8E8FF] max-w-2xl mx-auto">
              Beautifully crafted stays wrapped in greenery and comfort
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-serif font-bold text-[#2B6430] mb-4">
                All Stays Include Premium Amenities
              </h2>
              <p className="text-xl text-[#8C5A2B]">
                Premium interiors • Attached bathrooms • Fridge • Kettle • Fresh linens
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {cottages.map((cottage, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#FFF7E3] to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[#2B6430]/10"
                >
                  <div className="h-48 bg-gradient-to-br from-[#2B6430] to-[#3a7d40] flex items-center justify-center text-6xl">
                    🏠
                  </div>

                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="text-3xl font-bold text-[#2B6430] mb-2">
                        {cottage.name}
                      </h3>
                      <p className="text-sm font-bold text-[#FFB61E]">
                        {cottage.type}
                      </p>
                    </div>

                    <p className="text-lg text-[#8C5A2B] mb-6 leading-relaxed">
                      {cottage.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-bold text-[#2B6430] mb-3">Amenities:</h4>
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {cottage.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-[#8C5A2B]">
                            <CheckCircle className="w-4 h-4 text-[#FFB61E] flex-shrink-0" />
                            <span className="text-sm">{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#FFB61E] hover:bg-[#ff9d00] text-[#2B6430] font-bold py-3 rounded-lg transition-all duration-300 text-center"
                    >
                      Reserve Now
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#FFB61E] to-[#ff9d00] rounded-3xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold text-[#2B6430] mb-4">
                Not sure which cottage is right for you?
              </h3>
              <p className="text-lg text-[#2B6430]/80 mb-8">
                Chat with our team on WhatsApp. We'll help you choose the perfect cottage for your needs.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#2B6430] hover:bg-[#1d4822] text-white font-bold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Expert Recommendation
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
