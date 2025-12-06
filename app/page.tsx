'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { getImage, getVideo } from './utils/turbophotos'

export default function Home() {
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0)

  // Carousel images
  const carouselImages = [
    getImage('pixabay271624'),
    getImage('jvdm1454806'),
    getImage('cleanliving'),
    getImage('kitchen2'),
    getImage('kitchen3'),
  ]

  // Auto-rotate carousel - 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselImage((prev) => (prev + 1) % carouselImages.length)
    }, 3500) // 3.5 seconds
    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <main className="bg-white text-[#0A2A43]">
      <Navbar />

      {/* HERO - Video Background with Watermark */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Desktop Video Background - Only load on desktop */}
        <div className="hidden md:block absolute inset-0 w-full h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/turbophotos/Turbo Spin clip.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Mobile Hero - Image only */}
        <div className="block md:hidden absolute inset-0 w-full h-full">
          <Image
            src={getImage('cleanliving')}
            alt="TurboTech Cleaners"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Watermark Logo Overlay - Center, subtle opacity */}
        <div className="absolute inset-0 flex items-center justify-center opacity-12 pointer-events-none z-10">
          <Image
            src={getImage('logoWatermark')}
            alt="TurboTech Logo"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Premium Condo & Home Cleaning in the GTA
          </h1>
          <p className="text-lg md:text-xl text-white mb-2 opacity-95 drop-shadow-md">
            Serving GTA condos & Airbnb hosts / Homeowners
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              target="_top"
              href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
              className="px-6 py-3 rounded-lg bg-[#09BCFF] text-white font-semibold hover:bg-[#08a8e6] transition-colors shadow-lg"
            >
              Book Now
            </a>
            <a
              href="tel:6477849120"
              className="px-6 py-3 rounded-lg bg-[#32D296] text-white font-semibold hover:bg-[#2bb882] transition-colors shadow-lg"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>

      {/* WHY SECTION - Option 4: 4-Card Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Why Choose <span className="text-[#32D296]">TurboTech Cleaning?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="text-[#32D296] text-4xl mb-3">⚙️</div>
              <h3 className="text-xl font-semibold mb-2">Tool-Ready Team</h3>
              <p className="text-gray-600">Power brushes, scrubbers & pro equipment for deep, fast, efficient cleaning.</p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="text-[#32D296] text-4xl mb-3">⏱️</div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnarounds</h3>
              <p className="text-gray-600">Great for Airbnb, move-outs, and last-minute condo cleanings.</p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="text-[#32D296] text-4xl mb-3">💵</div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">Clear rates, no upsells, no surprise fees — ever.</p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition">
              <div className="text-[#32D296] text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Insured Professionals</h3>
              <p className="text-gray-600">Fully insured, GTA-based cleaners you can trust in your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / SERVICES */}
      <section id="pricing" className="py-16 px-6 bg-[#F0FAFF]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Pricing</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Condo Cleaning',
              price: '$99',
              desc: 'Regular maintenance cleaning for your condo. Bathrooms, kitchen, appliances, cupboards.',
              image: getImage('cleanedbathroom'),
            },
            {
              title: 'Home Cleaning',
              price: '$149',
              desc: 'Full home cleaning. Kitchen, bathrooms, floors.',
              image: getImage('cleankitchen'),
            },
            {
              title: 'Office Cleaning',
              price: '$129',
              desc: 'Office spaces, common areas, desks, floors.',
              image: getImage('teamcleaners'),
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              {/* Service Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-[#32D296] text-2xl font-bold mt-2">Starting at {item.price}</p>
                <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
                <a
                  target="_top"
                  href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
                  className="mt-4 inline-block w-full text-center px-4 py-2 rounded-lg bg-[#32D296] text-white font-semibold hover:bg-[#2bb882] transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS / TESTIMONIALS */}
      <section id="reviews" className="bg-white py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Clients Say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Rohan',
              location: 'Brampton',
              text: 'Something my old tenants left the place a mess. TurboTech really saved me, and the guy I talked with was very easy to work with. Highly recommended!',
              image: getImage('person1'),
            },
            {
              name: 'Sarah M',
              location: 'Toronto',
              text: 'They are very professional and came in with a lot of power tools; they do not waste time. Great experience and thorough!',
              image: getImage('person2'),
            },
            {
              name: 'Jalen G',
              location: 'North York',
              text: 'My Airbnb was so trashed, and TurboTech had the best price. I took a chance, and now we\'re locked in for monthly cleans. Shoutout to Veno!',
              image: getImage('person3'),
            },
          ].map((review, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm p-6 border border-gray-100">
              {/* Reviewer Image */}
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-lg leading-relaxed text-center mb-4">&quot;{review.text}&quot;</p>
              <p className="text-center font-bold">{review.name}</p>
              <p className="text-center text-sm text-gray-600">{review.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + CONTACT FORM */}
      <section id="faq" className="py-20 px-6 max-w-3xl mx-auto bg-[#F0FAFF]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

        <div className="mt-10 space-y-6">
          {[
            ['How do bookings work?', 'Book online or text/call us directly. We confirm every appointment manually.'],
            ['Do you bring your own supplies?', 'Yes — we bring all tools, vacuums, solutions, and equipment.'],
            ['Is there a cancellation fee?', 'Cancellations within 24 hours may include a small fee.'],
            ['Can I request same-day cleaning?', 'Yes — subject to availability. Text for fastest response.'],
            ['Is TurboTech insured?', 'Yes — fully insured & background checked.'],
            ['Do you clean condos of all sizes?', 'Yes — studios to penthouses.'],
          ].map(([q, a], i) => (
            <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-lg mb-2">{q}</p>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        {/* CONTACT FORM */}
        <form className="mt-14 space-y-4" action="/api/contact" method="POST">
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Phone"
            type="tel"
            name="phone"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Address"
            name="address"
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            rows={4}
            placeholder="Message"
            name="message"
            required
          />
          <button
            type="submit"
            className="bg-[#32D296] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#2bb882] transition-colors"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#32D296] text-white py-10 px-6 text-center">
        <p className="font-bold text-xl">TurboTech Cleaning</p>
        <p className="mt-2">Condo • Airbnb • Move‑out • Deep Cleans</p>
        <p className="mt-1">Proudly serving the Greater Toronto Area</p>

        <p className="mt-4">
          <a href="tel:6477849120" className="hover:text-[#0A2A43] transition-colors font-semibold">
            Phone: 647-784-9120
          </a>
        </p>
        <p className="mt-1">
          <a href="mailto:hello@turbotechcleaners.com" className="hover:text-[#0A2A43] transition-colors font-semibold">
            Email: hello@turbotechcleaners.com
          </a>
        </p>

        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} TurboTech Cleaning — All rights reserved
        </p>
      </footer>
    </main>
  )
}
