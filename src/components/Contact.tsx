import { MessageCircle, Phone, MapPin, Send, Clock } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hi! I'm interested in booking Mango Village Resorts.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEvent Date: ${formData.eventDate}%0AMessage: ${formData.message}`;

    window.open(`https://wa.me/919999999999?text=${whatsappMessage}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919999999999?text=Hi!%20I%20want%20to%20know%20about%20packages%20and%20availability%20at%20Mango%20Village%20Resorts', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#11202a] mb-4">
            Get Packages & Prices on WhatsApp in 60 Seconds
          </h2>
          <div className="w-24 h-1 bg-[#ffd014] mx-auto mb-8"></div>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold">
            <Clock className="w-5 h-5" />
            <span>We respond fast — usually within 2–5 minutes</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-[#11202a] mb-6">Quick Enquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ffd014] focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ffd014] focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ffd014] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#ffd014] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#ffd014] text-[#11202a] font-bold text-lg rounded-full hover:bg-[#ffb800] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">or</p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full px-8 py-4 bg-green-500 text-white font-bold text-lg rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Instantly
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#11202a] to-[#1a3544] rounded-3xl p-8 sm:p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffd014] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#11202a]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Call Us</p>
                    <a href="tel:+919999999999" className="text-[#ffd014] hover:underline text-lg">
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffd014] rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#11202a]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <button onClick={handleWhatsAppClick} className="text-[#ffd014] hover:underline text-lg">
                      Chat with us instantly
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffd014] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#11202a]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-gray-300">
                      Near Vizag, surrounded by lush private mango orchards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-[#11202a] mb-4">Why Contact Us Now?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd014] text-xl">✓</span>
                  <span className="text-gray-700">Get instant price quotes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd014] text-xl">✓</span>
                  <span className="text-gray-700">Check real-time availability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd014] text-xl">✓</span>
                  <span className="text-gray-700">Customize your package</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffd014] text-xl">✓</span>
                  <span className="text-gray-700">Book your preferred date</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
