'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { getImage } from './utils/turbophotos'

export default function Home() {
  const [currentCarouselImage, setCurrentCarouselImage] = useState(0)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Carousel images
  const carouselImages = [
    getImage('pixabay271624'),
    getImage('jvdm1454806'),
    getImage('cleanliving'),
    getImage('kitchen2'),
    getImage('kitchen3'),
  ]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselImage((prev) => (prev + 1) % carouselImages.length)
    }, 3000) // 3 seconds
    return () => clearInterval(interval)
  }, [carouselImages.length])


  return (
    <main className="bg-white text-[#0A2A43]">
      <Navbar />

      {/* HERO - Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background - Different videos for mobile and desktop */}
        <div className="absolute inset-0 w-full h-full">
          {/* Mobile Video */}
          <video
            className="md:hidden w-full h-full object-contain"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/turbophotos/mini scrub turbo (1).mp4" type="video/mp4" />
          </video>
          {/* Desktop Video */}
          <video
            className="hidden md:block w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/turbophotos/Turbo Spin clip.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Premium Condo & Home Cleaning in the GTA
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 font-semibold italic drop-shadow-md">
            &quot;We don&apos;t cut corners — we clean them.&quot;
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
              className="px-6 py-3 rounded-lg bg-[#3FCF8E] text-white font-semibold hover:bg-[#38b87d] transition-colors shadow-lg"
            >
              Text Us
            </a>
          </div>

          {/* Open Late Note */}
          <div className="open-late">
            Open Late — Available Until 10 PM!
          </div>
        </div>
      </section>

      {/* WHY SECTION - With Carousel */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose TurboTech Cleaning?
          </h2>

          {/* Carousel */}
          <div className="relative h-64 md:h-96 mb-16 rounded-xl overflow-hidden shadow-lg">
            {carouselImages.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === currentCarouselImage ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={img}
                  alt={`TurboTech Cleaning ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Why Points - Professional Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-200">
              <div className="text-4xl mb-4 text-center">⚙️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Tool-Ready Team</h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed">Power brushes, scrubbers & pro equipment for deep, fast, efficient cleaning.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-green-200">
              <div className="text-4xl mb-4 text-center">⏱️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Fast Turnarounds</h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed">Great for Airbnb, move-outs, and last-minute condo cleanings.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-cyan-200">
              <div className="text-4xl mb-4 text-center">💵</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Transparent Pricing</h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed">Clear rates, no upsells, no surprise fees — ever.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-purple-200">
              <div className="text-4xl mb-4 text-center">🔒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">Insured Professionals</h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed">Fully insured, GTA-based cleaners you can trust in your home.</p>
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
              desc: 'Bathroom, kitchen, appliances, countertops, cupboards, floors, and common areas. Bedrooms can be added. A full reset to keep your condo clean and organized.',
              image: getImage('cleanedbathroom'),
              bookingUrl: 'https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start',
            },
            {
              title: 'Home Cleaning',
              price: '$149',
              desc: 'Full-home cleaning including bathrooms, kitchen, appliances, floors, baseboards, bedrooms, and living spaces. Ideal for regular maintenance or detailed deep cleaning.',
              image: getImage('cleankitchen'),
              bookingUrl: 'https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start',
            },
            {
              title: 'Office Cleaning',
              price: '$129',
              desc: 'Desks, common areas, bathrooms, kitchenettes, floors, garbage removal, and high-touch surfaces. A thorough clean to keep your workspace spotless and professional.',
              image: getImage('teamcleaners'),
              bookingUrl: 'https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start',
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
                  href={item.bookingUrl}
                  target="_blank"
                  className="mt-4 inline-block w-full text-center px-4 py-2 rounded-lg bg-[#32D296] text-white font-semibold hover:bg-[#2bb882] transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLEANING CHECKLIST SECTION */}
      <section className="py-20 bg-gradient-to-b from-[#F0FAFF] to-white">
        <div className="max-w-5xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A43] mb-4">What&apos;s Included in Every Cleaning</h2>
          <p className="text-xl text-[#32D296] font-semibold italic mt-3">We don&apos;t cut corners — we clean them.</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Kitchen */}
          <div className="bg-gradient-to-r from-[#32D296]/10 to-[#09BCFF]/10 rounded-2xl shadow-lg p-8 border-2 border-[#32D296]/30 hover:border-[#32D296]/50 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#32D296]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#32D296]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2A43]">Kitchen</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Countertops, backsplash & stove top',
                'Exterior appliances (fridge, oven, dishwasher, microwave)',
                'Microwave deep clean — inside & out',
                'Sink scrub + chrome polished',
                'Cupboard exteriors wiped (handles included)',
                'Spot-clean walls + switches',
                'Degrease high-touch areas',
                'Floors swept & mopped',
                'Garbage emptied + bin wiped',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#32D296] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bathrooms */}
          <div className="bg-gradient-to-r from-[#32D296]/10 to-[#09BCFF]/10 rounded-2xl shadow-lg p-8 border-2 border-[#32D296]/30 hover:border-[#32D296]/50 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#09BCFF]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#09BCFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2A43]">Bathrooms</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Toilets sanitized (base, seat, behind)',
                'Showers, tubs & tiles scrubbed',
                'Remove soap scum + water stains',
                'Sinks, counters & fixtures polished',
                'Mirrors streak-free',
                'Spot-clean walls & switches',
                'Chrome + glass shined',
                'Floors disinfected',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#32D296] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Living Areas */}
          <div className="bg-gradient-to-r from-[#32D296]/10 to-[#09BCFF]/10 rounded-2xl shadow-lg p-8 border-2 border-[#32D296]/30 hover:border-[#32D296]/50 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#32D296]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#32D296]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0A2A43]">Bedrooms &amp; Living Areas</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Full dusting (surfaces, décor, reachable vents)',
                'Baseboards wiped',
                'Doors, handles & switches cleaned',
                'Furniture wipe-down (tops + sides)',
                'Floors vacuumed',
                'Hard floors mopped',
                'General tidy + reset',
                'Spot-clean smudges on walls',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#32D296] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 px-6">
          <div className="bg-gradient-to-r from-[#32D296]/10 to-[#09BCFF]/10 rounded-2xl p-8 border-2 border-[#32D296]/30">
            <div className="flex items-center justify-center gap-3 mb-6">
              <svg className="w-8 h-8 text-[#32D296]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-bold text-[#0A2A43]">Always Included</h3>
            </div>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {[
                'Power-tool detailing for tough buildup',
                'High-pressure edge cleaning',
                'HEPA vacuum for allergen removal',
                'Microfiber wipe-downs for a streak-free finish',
                'Rapid-dry floor finish',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#32D296] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-[15px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
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

        <div className="mt-10 space-y-5 max-w-3xl mx-auto">
          {[
            {
              question: 'How do bookings work?',
              answer: 'Book online, text, or call us directly. Each appointment is confirmed manually to ensure accuracy.',
            },
            {
              question: 'Do you bring your own supplies?',
              answer: 'Yes! Our team comes fully equipped with professional-grade tools, vacuums, cleaning solutions, and all necessary equipment.',
            },
            {
              question: 'Is there a cancellation fee?',
              answer: 'Cancellations within 24 hours of the scheduled appointment may incur a small fee. We appreciate your understanding.',
            },
            {
              question: 'Can I request same-day cleaning?',
              answer: 'Yes! Same-day appointments are subject to availability. Text for the fastest response.',
            },
            {
              question: 'Do you clean condos of all sizes?',
              answer: 'Yes, from small studios to luxury penthouses. We tailor our cleaning to your space.',
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                className="w-full text-left flex justify-between items-center py-3 px-0 font-bold text-lg text-[#333] bg-transparent border-none cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span>{faq.question}</span>
                <span
                  className={`transition-transform duration-300 ease-in-out text-[#333] ${
                    openFaqIndex === i ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pb-3 text-[#555] leading-relaxed font-normal">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CONTACT FORM */}
        <form 
          className="mt-14 space-y-4" 
          onSubmit={async (e) => {
            e.preventDefault()
            setIsSubmitting(true)
            setSubmitStatus('idle')

            try {
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: formData.name,
                  email: formData.email,
                  phone: formData.phone,
                  address: formData.address,
                  message: formData.message,
                }),
              })

              const data = await res.json()

              if (data.success) {
                setSubmitStatus('success')
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  message: '',
                })
                alert("Request sent! We'll contact you shortly.")
              } else {
                setSubmitStatus('error')
                alert('Something went wrong. Please try again.')
              }
            } catch (error) {
              console.error('Error submitting form:', error)
              setSubmitStatus('error')
              alert('Something went wrong. Please try again.')
            } finally {
              setIsSubmitting(false)
            }
          }}
        >
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
          <input
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <textarea
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#32D296]"
            rows={4}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#32D296] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#2bb882] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Request'}
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">Request sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">Error sending request. Please try again.</p>
          )}
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
          <a href="mailto:info@turbotechcleaners.com" className="hover:text-[#0A2A43] transition-colors font-semibold">
            Email: info@turbotechcleaners.com
          </a>
        </p>

        <p className="mt-6 text-sm">
          © {new Date().getFullYear()} TurboTech Cleaning — All rights reserved
        </p>
      </footer>
    </main>
  )
}
