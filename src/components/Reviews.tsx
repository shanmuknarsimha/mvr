import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Nikhil',
      rating: 5,
      text: 'Perfect for birthdays. Extremely clean & well managed.',
      avatar: '👨'
    },
    {
      name: 'Sahithi',
      rating: 5,
      text: 'Rain dance & cricket turf made our team outing awesome.',
      avatar: '👩'
    },
    {
      name: 'Harsha',
      rating: 5,
      text: 'Peaceful, green & safe for families.',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya',
      rating: 5,
      text: 'Beautiful location for our pre-wedding shoot. Highly recommended!',
      avatar: '👰'
    },
    {
      name: 'Raj',
      rating: 5,
      text: 'Best place for college get-togethers. Amazing facilities and staff.',
      avatar: '🎓'
    },
    {
      name: 'Anitha',
      rating: 5,
      text: 'My daughter\'s birthday was magical here. Thank you team!',
      avatar: '👩‍👧'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ffd014] text-[#11202a] px-6 py-3 rounded-full font-bold text-lg mb-6">
            <Star className="w-5 h-5 fill-current" />
            <span>Rated 4.8/5 by 1,200+ Happy Guests</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-[#11202a] mb-4">
            Real Reviews, Real Experiences
          </h2>
          <div className="w-24 h-1 bg-[#ffd014] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700">
            People don't just visit us. They return.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <Quote className="w-10 h-10 text-[#ffd014] mb-4 opacity-50" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffd014] fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffd014] to-[#ffb800] rounded-full flex items-center justify-center text-2xl">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-[#11202a]">— {review.name}</p>
                  <p className="text-sm text-gray-600">Verified Guest</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#11202a] to-[#1a3544] rounded-3xl p-8 sm:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#ffd014] fill-current" />
              ))}
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join 1,200+ Happy Guests
            </h3>

            <p className="text-xl text-gray-300 mb-8">
              From corporate teams to families, students to couples — everyone finds their perfect escape here.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-[#ffd014] mb-2">98%</div>
                <p className="text-gray-300 text-sm">5-Star Reviews</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#ffd014] mb-2">1,200+</div>
                <p className="text-gray-300 text-sm">Happy Guests</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#ffd014] mb-2">95%</div>
                <p className="text-gray-300 text-sm">Return Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#ffd014] mb-2">500+</div>
                <p className="text-gray-300 text-sm">Events Hosted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
