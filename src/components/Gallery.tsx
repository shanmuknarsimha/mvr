import { useState } from "react";
import {
  Image as ImageIcon,
  PlayCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Auto-import ALL images from folder
const imageModules = import.meta.glob(
  "/src/assets/gallery/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

type MediaItem = {
  type: "image" | "video";
  src: string; // image URL or youtube embed URL
  label?: string;
};

// Convert imported assets → array of image items
const imageItems: MediaItem[] = Object.values(imageModules).map(
  (mod: any, idx) => ({
    type: "image",
    src: mod.default,
    label: `Gallery Image ${idx + 1}`,
  })
);

// 🎬 Add YouTube links here
const videoItems: MediaItem[] = [
  {
    type: "video",
    src: "https://www.youtube.com/embed/XBhEN5hU4z0",
    label: "Resort Walkthrough",
  },
  // { type: "video", src: "https://www.youtube.com/embed/ANOTHER_ID", label: "Pool Highlights" }
];

// Merge videos + images
const mediaItems: MediaItem[] = [...videoItems, ...imageItems];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const prev = (e: any) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const next = (e: any) => {
    e.stopPropagation();
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % mediaItems.length);
  };

  const activeItem = activeIndex !== null ? mediaItems[activeIndex] : null;

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#2B6430] mb-4">
          📸 Gallery
        </h2>

        <p className="text-center text-xl text-[#8C5A2B] mb-12">
          Enjoy moments from around our resort:
        </p>

        {/* GRID GALLERY */}
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              className="relative overflow-hidden shadow-lg group cursor-pointer bg-black"
            >
              {/* Fixed 16:9 ratio box */}
              <div className="w-full aspect-[16/9] relative">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    loading="lazy"
                    alt={item.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full">
                    <iframe
                      src={`${item.src}?mute=1&controls=0&modestbranding=1&rel=0`}
                      className="w-full h-full object-cover pointer-events-none"
                      loading="lazy"
                    />
                    </div>
                )}
              </div>

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all" />
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-[#8C5A2B] mt-6 italic">
          Tap any media to view in fullscreen.
        </p>
      </div>

      {/* FULLSCREEN LIGHTBOX */}
      {activeItem && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        >
          {/* Close */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white hover:bg-black/80"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-4 p-2 bg-black/60 rounded-full text-white hover:bg-black/80"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-4 p-2 bg-black/60 rounded-full text-white hover:bg-black/80"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Content */}
          <div className="max-w-5xl w-full px-4">
            {activeItem.type === "image" ? (
              <img
                src={activeItem.src}
                alt={activeItem.label}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            ) : (
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`${activeItem.src}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0`}
                  className="absolute inset-0 w-full h-full rounded-xl"
                  allow="autoplay; encrypted-media; fullscreen"
                />
              </div>
            )}
            {activeItem.label && (
              <p className="text-center text-white/80 mt-4 text-sm">
                {activeItem.label}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
