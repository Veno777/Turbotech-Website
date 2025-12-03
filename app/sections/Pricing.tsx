import React from 'react'
import Button from '../components/Button'

interface PricingPackage {
  title: string
  price: string
  features: string[]
}

const packages: PricingPackage[] = [
  {
    title: 'Standard Condo Clean',
    price: 'Starting at $99',
    features: [
      'Dusting & vacuuming',
      'Surface cleaning',
      'Kitchen & bathroom',
      'Trash removal',
      'Up to 1,000 sq ft',
    ],
  },
  {
    title: 'Deep Clean',
    price: 'Starting at $159',
    features: [
      'Everything in Standard',
      'Baseboard cleaning',
      'Appliance deep clean',
      'Grout scrubbing',
      'Wall & window sills',
      'Up to 1,000 sq ft',
    ],
  },
  {
    title: 'Move-In/Move-Out',
    price: 'Starting at $199',
    features: [
      'Everything in Deep Clean',
      'Inside all cupboards',
      'Inside appliances',
      'All storage areas',
      'Empty unit preparation',
      'Up to 1,000 sq ft',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
            Pricing Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all your cleaning needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                index === 1
                  ? 'border-2 border-primary-blue transform scale-105'
                  : 'border border-gray-100'
              }`}
            >
              <h3 className="text-2xl font-heading font-bold text-primary-blue mb-4 text-center">
                {pkg.title}
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary-blue mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">
                Book This Service
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            *Prices may vary based on condo size and specific requirements
          </p>
          <p className="text-gray-600">
            Contact us for a custom quote for larger units or special requests
          </p>
        </div>
      </div>
    </section>
  )
}

