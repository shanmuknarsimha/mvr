import { useState } from 'react';
import Layout from '../components/Layout';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { id: 1, category: 'Cottages', title: 'Alphonso Cottage' },
    { id: 2, category: 'Pool', title: 'Swimming Pool' },
    { id: 3, category: 'Rain Dance', title: 'Rain Dance Arena' },
    { id: 4, category: 'Nature', title: 'Mango Orchards' },
    { id: 5, category: 'Food', title: 'Homely Meals' },
    { id: 6, category: 'Events', title: 'Group Celebration' },
    { id: 7, category: 'Cottages', title: 'Banginapalli Cottage' },
    { id: 8, category: 'Pool', title: 'Pool Evening' },
    { id: 9, category: 'Rain Dance', title: 'Rain Dance Fun' },
    { id: 10, category: 'Nature', title: 'Nature Walk' },
    { id: 11, category: 'Food', title: 'Outdoor Dining' },
    { id: 12, category: 'Events', title: 'Campfire Night' },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <Layout title="Gallery">
      <div className="w-full">
        <section className="relative h-80 bg-gradient-to-br from-[#2B6430] to-[#3a7d40] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              📸 Our Gallery
            </h1>
            <p className="text-xl text-[#C8E8FF] max-w-2xl mx-auto">
              Peek into the beauty and experiences at Mango Village Resorts
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image.id - 1)}
                  className="break-inside-avoid group cursor-pointer bg-gradient-to-br from-[#2B6430] to-[#3a7d40] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-[#2B6430]/20"
                >
                  <div className="aspect-square md:aspect-auto h-64 relative flex items-center justify-center bg-gradient-to-br from-[#2B6430] to-[#3a7d40]">
                    <div className="text-6xl opacity-80">📷</div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <p className="text-white font-bold text-lg">{image.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white">
                    <p className="text-xs font-bold text-[#FFB61E] mb-1">{image.category}</p>
                    <h3 className="text-sm font-bold text-[#2B6430]">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <div className="flex items-center justify-between gap-4 w-full max-w-4xl">
              <button
                onClick={handlePrevious}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <div className="flex-1 text-center">
                <div className="w-full h-96 md:h-[600px] bg-gradient-to-br from-[#2B6430] to-[#3a7d40] rounded-2xl flex items-center justify-center text-8xl mb-4">
                  📷
                </div>

                <div className="text-white">
                  <p className="text-sm text-gray-400 mb-2">
                    {images[selectedImage].category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4">
                    {images[selectedImage].title}
                  </h3>

                  <p className="text-sm text-gray-400 mb-6">
                    {selectedImage + 1} / {images.length}
                  </p>

                  <div className="flex gap-2 justify-center">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#FFB61E] hover:bg-[#ff9d00] text-[#2B6430] font-bold px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedImage ? 'bg-[#FFB61E] w-8' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
