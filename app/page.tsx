import Image from 'next/image'
import Navbar from './components/Navbar'
import { getImage } from './utils/turbophotos'

export default function Home() {
  return (
    <main className="bg-white text-[#0A2A43]">
      <Navbar />

      {/* HERO */}
      <section className="relative px-6 py-24 text-center">
        {/* Watermark Logo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Image
            src={getImage('logo')}
            alt="TurboTech Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold relative z-10">
          GTA Condo & Home Cleaning Done Right.
        </h1>
        <p className="mt-4 text-lg relative z-10">
          Professional, tool-ready cleaners for condos, homes, offices, and Airbnb turnovers.
        </p>
        <p className="mt-1 text-sm font-medium relative z-10">
          Serving GTA condos, Airbnb hosts, homeowners & small offices.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
          <a
            href="/book"
            className="px-6 py-3 rounded-lg bg-[#09BCFF] text-white font-semibold hover:bg-[#08a8e6] transition-colors"
          >
            Book Online
          </a>
          <a
            href="tel:6477849120"
            className="px-6 py-3 rounded-lg bg-[#0A2A43] text-white font-semibold hover:bg-[#0a3a53] transition-colors"
          >
            Text Us: 647-784-9120
          </a>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="bg-[#E8F8FF] py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Choose TurboTech Cleaning?</h2>
        <ul className="mt-6 space-y-3 text-lg max-w-2xl mx-auto">
          <li>• Tool-ready team with power brushes, scrubbers & pro equipment</li>
          <li>• Fast, reliable turnaround times (great for Airbnb & move-outs)</li>
          <li>• Transparent pricing — no surprise fees</li>
          <li>• Fully insured, GTA-based professionals</li>
        </ul>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Pricing</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Condo Cleaning',
              price: '$99+',
              desc: 'Perfect for 1–2 bedroom condos. Includes kitchen, bathroom, floors, and surfaces.',
            },
            {
              title: 'Home Cleaning',
              price: '$149+',
              desc: 'Full clean for houses & larger units. Kitchens, washrooms, common areas, and floors.',
            },
            {
              title: 'Office Cleaning',
              price: '$129+',
              desc: 'Ideal for small offices and workspaces. Desks, floors, washrooms, and garbage removal.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-[#09BCFF] text-2xl font-bold mt-2">Starting at {item.price}</p>
              <p className="mt-3 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[#E8F8FF] py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">What Clients Say</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Rohan S.',
              location: 'Brampton',
              text: 'My old tenants left the unit a complete mess, and TurboTech saved me with a fast, detailed clean. The cleaner I spoke with was very easy to work with and made everything stress-free.',
            },
            {
              name: 'Sarah M.',
              location: 'Toronto',
              text: 'They were extremely professional and came with serious power tools. They worked fast, didn\'t waste time, and left my condo noticeably cleaner than any past service I tried.',
            },
            {
              name: 'Jalen G.',
              location: 'North York',
              text: 'My Airbnb was trashed after a weekend booking, and TurboTech had the best price. I took a chance and now I\'m locked in for monthly cleans — shoutout Veno for the consistency.',
            },
          ].map((review, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
              <p className="text-lg leading-relaxed">&quot;{review.text}&quot;</p>
              <p className="mt-4 font-bold">{review.name}</p>
              <p className="text-sm text-gray-600">{review.location}</p>
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
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BCFF]"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BCFF]"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BCFF]"
            placeholder="Phone"
            type="tel"
            name="phone"
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BCFF]"
            placeholder="Address"
            name="address"
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#09BCFF]"
            rows={4}
            placeholder="Message"
            name="message"
            required
          />
          <button
            type="submit"
            className="bg-[#09BCFF] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#08a8e6] transition-colors"
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
          <a href="tel:6477849120" className="hover:text-[#09BCFF] transition-colors">
            📞 647-784-9120
          </a>
        </p>
        <p className="mt-1">
          <a href="mailto:hello@turbotechcleaners.com" className="hover:text-[#09BCFF] transition-colors">
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
