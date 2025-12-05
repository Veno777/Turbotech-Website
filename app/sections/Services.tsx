import React from 'react'
import { getImage } from '../utils/turbophotos'

interface Service {
  icon: string
  title: string
  description: string
  price?: string
  image?: string
}

const services: Service[] = [
  {
    icon: '🏢',
    title: 'Condo Cleaning',
    description: 'Regular maintenance cleaning for your condo. Includes dusting, vacuuming, surfaces, and light kitchen + bathroom cleaning.',
    price: 'Starting from: $89',
    image: getImage('janetrangdoan'), // Human face image
  },
  {
    icon: '🏠',
    title: 'Airbnb Cleaning',
    description: 'Fast turnover cleaning to get your rental ready for the next guest. Professional, thorough, and guest-ready every time.',
    price: 'Starting from: $95',
    image: getImage('karolaG1'), // Human face image
  },
  {
    icon: '🚚',
    title: 'Move-Out Cleaning',
    description: 'Complete empty-unit deep clean. Includes appliances, bathrooms, cupboards, inside all storage areas for a fresh start.',
    price: 'Starting from: $149',
    image: getImage('lilianaDrew1'), // Human face image
  },
  {
    icon: '✨',
    title: 'Deep / Heavy‑Duty Clean',
    description: 'Inside oven/fridge, cupboard interiors, grout scrub, vents & baseboards. Perfect for seasonal deep cleans.',
    price: 'Add‑on: from $49',
    image: getImage('karolaG2'), // Human face image
  },
  {
    icon: '⚡',
    title: 'Express Touch‑Up',
    description: 'Fast 60‑minute clean focused on high traffic areas — perfect between regular cleans or last-minute touch-ups.',
    price: 'Starting from: $45',
    image: getImage('lilianaDrew2'), // Human face image
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs across the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Service Image */}
              {service.image && (
                <div
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-primary-blue/20 group-hover:bg-primary-blue/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 text-5xl">{service.icon}</div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-primary-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                {service.price && (
                  <p className="text-lg font-semibold text-primary-blue mt-4">
                    {service.price}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
