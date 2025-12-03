import React from 'react'

interface Testimonial {
  name: string
  quote: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    quote: 'Fantastic condo clean! My unit looks brand new.',
    image: '/images/testimonial1.jpg',
  },
  {
    name: 'Daniel P.',
    quote: 'Reliable and professional — best cleaners I\'ve hired.',
    image: '/images/testimonial2.jpg',
  },
  {
    name: 'Aisha K.',
    quote: 'Deep clean exceeded expectations.',
    image: '/images/testimonial3.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by homeowners across the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center mr-4"
                  style={{
                    backgroundImage: `url('${testimonial.image}')`,
                  }}
                >
                  <div className="w-full h-full rounded-full bg-primary-blue/20"></div>
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

