import React from 'react'
import Button from '../components/Button'

interface Service {
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: '🧹',
    title: 'Basic Clean',
    description: 'Includes dusting, vacuuming, surfaces, wipe-down, light kitchen + bathroom cleaning for regular maintenance.',
  },
  {
    icon: '✨',
    title: 'Deep Clean',
    description: 'Baseboards, appliances, grout scrubbing, bathrooms, walls, and detailed cleaning for a thorough refresh.',
  },
  {
    icon: '🚚',
    title: 'Move-In/Move-Out',
    description: 'Full empty-unit clean, appliances, bathrooms, cupboards, inside all storage areas for a fresh start.',
  },
  {
    icon: '➕',
    title: 'Add-ons',
    description: 'Inside fridge, inside oven, balcony, laundry, pet hair removal - customize your cleaning experience.',
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
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-heading font-semibold text-primary-blue mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <div className="text-center">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

