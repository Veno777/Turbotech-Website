'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import { getImage, getVideo } from './utils/turbophotos'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [useImageFallback, setUseImageFallback] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      setUseImageFallback(true)
      return
    }

    video.addEventListener('error', () => {
      setUseImageFallback(true)
    })

    const tryPlay = async () => {
      try {
        video.muted = true
        await video.play()
      } catch (e) {
        setUseImageFallback(true)
      }
    }
    tryPlay()

    // Accessibility: respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery && mediaQuery.matches) {
      video.pause()
      setUseImageFallback(true)
    }
  }, [])

  return (
    <main className="bg-white text-[#0A2A43]">
      <Navbar />

      {/* HERO - Video Background with Watermark */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {!useImageFallback ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={getImage('pavelDanilyuk')}
            >
              <source src={getVideo('spinClip')} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={getImage('pavelDanilyuk')}
              alt="TurboTech Cleaners"
              fill
              className="object-cover"
              priority
            />
          )}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Watermark Logo Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none z-10">
          <Image
            src={getImage('logo')}
            alt="TurboTech Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Premium Condo & Home Cleaning in the GTA
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 opacity-95 drop-shadow-md">
            Optional: Serving GTA condos & Airbnb hosts
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-[#09BCFF] text-white font-semibold hover:bg-[#08a8e6] transition-colors shadow-lg"
            >
              Book Now
            </a>
            <a
              href="tel:6477849120"
              className="px-6 py-3 rounded-lg bg-[#28C76F] text-white font-semibold hover:bg-[#24b362] transition-colors shadow-lg"
            >
              Text Us
            </a>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-[#F0FAFF] py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose TurboTech Cleaning?</h2>
        <ul className="mt-6 space-y-3 text-lg max-w-2xl mx-auto">
          <li>• Tool-ready team with power brushes, scrubbers & pro equipment</li>
          <li>• Fast, reliable turnaround times (great for Airbnb & move-outs)</li>
          <li>• Transparent pricing — no surprise fees</li>
          <li>• Fully insured, GTA-based professionals</li>
        </ul>
      </section>

      {/* PRICING / SERVICES */}
      <section id="pricing" className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Pricing</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Condo Clean',
              price: '$99',
              desc: 'Perfect for 1–2 bedroom condos. Includes kitchen, bathroom, floors, and surfaces.',
              image: getImage('jvdm'), // cleanedbathroom.jpg equivalent
            },
            {
              title: 'Home Clean',
              price: '$149',
              desc: 'Full clean for houses & larger units. Kitchens, washrooms, common areas, and floors.',
              image: getImage('fotoaibe'), // cleankitchen.jpg equivalent
            },
            {
              title: 'Office Clean',
              price: '$129',
              desc: 'Ideal for small offices and workspaces. Desks, floors, washrooms, and garbage removal.',
              image: getImage('pavelDanilyuk'), // teamcleaners.jpg equivalent
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
                <p className="text-[#28C76F] text-2xl font-bold mt-2">Starting at {item.price}</p>
                <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
                <a
                  href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mt-4 inline-block w-full text-center px-4 py-2 rounded-lg bg-[#28C76F] text-white font-semibold hover:bg-[#24b362] transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS / TESTIMONIALS */}
      <section id="reviews" className="bg-[#F0FAFF] py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Clients Say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Rohan S.',
              location: 'Brampton',
              text: 'My old tenants left the unit a complete mess, and TurboTech saved me with a fast, detailed clean. The cleaner I spoke with was very easy to work with and made everything stress-free.',
              image: getImage('karolaG1'), // person1
            },
            {
              name: 'Sarah M.',
              location: 'Toronto',
              text: 'They were extremely professional and came with serious power tools. They worked fast, didn\'t waste time, and left my condo noticeably cleaner than any past service I tried.',
              image: getImage('karolaG2'), // person2
            },
            {
              name: 'Jalen G.',
              location: 'North York',
              text: 'My Airbnb was trashed after a weekend booking, and TurboTech had the best price. I took a chance and now I\'m locked in for monthly cleans — shoutout Veno for the consistency.',
              image: getImage('lilianaDrew1'), // person3
            },
          ].map((review, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm p-6">
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

      {/* GALLERY */}
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            getImage('lilianaDrew1'),
            getImage('lilianaDrew2'),
            getImage('janetrangdoan'),
            getImage('jvdm'),
            getImage('fotoaibe'),
            getImage('pavelDanilyuk'),
            getImage('karolaG1'),
            getImage('karolaG2'),
          ].map((image, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image}
                alt={`TurboTech Cleaning ${i + 1}`}
                fill
                className="object-cover group-hover:brightness-110 transition-all"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ + CONTACT */}
      <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

        <div className="mt-10 space-y-6">
          {[
            ['How do bookings work?', 'Book online or text/call us directly. We confirm every appointment manually.'],
            ['Do you bring your own supplies?', 'Yes — we bring all tools, vacuums, solutions, and equipment.'],
            ['Is there a cancellation fee?', 'Cancellations within 24 hours may include a small fee.'],
            ['Can I request same-day cleaning?', 'Yes — subject to availability. Text for fastest response.'],
            ['Are you insured?', 'Yes — fully insured & background checked.'],
            ['Do you clean condos of all sizes?', 'Yes — studios to penthouses.'],
          ].map(([q, a], i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <p className="font-semibold text-lg mb-2">{q}</p>
              <p className="text-sm text-gray-600">{a}</p>
            </div>
          ))}
        </div>

        {/* CONTACT FORM */}
        <form className="mt-14 space-y-4" action="/api/contact" method="POST">
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28C76F]"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28C76F]"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28C76F]"
            placeholder="Phone"
            type="tel"
            name="phone"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28C76F]"
            placeholder="Address"
            name="address"
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28C76F]"
            rows={4}
            placeholder="Message"
            name="message"
            required
          />
          <button
            type="submit"
            className="bg-[#28C76F] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#24b362] transition-colors"
          >
            Send Request
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A2A43] text-white py-10 px-6 text-center">
        <p className="font-bold text-xl">TurboTech Cleaning</p>
        <p className="mt-2">Condo • Home • Office • Move-out</p>
        <p className="mt-1">Serving the Greater Toronto Area</p>

        <p className="mt-4">
          <a href="tel:6477849120" className="hover:text-[#28C76F] transition-colors">
            📞 647-784-9120
          </a>
        </p>
        <p className="mt-1">
          <a href="mailto:hello@turbotechcleaners.com" className="hover:text-[#28C76F] transition-colors">
            📩 hello@turbotechcleaners.com
          </a>
        </p>

        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} TurboTech Cleaning — All rights reserved
        </p>
      </footer>
    </main>
  )
}
