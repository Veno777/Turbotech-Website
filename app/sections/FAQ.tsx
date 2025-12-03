'use client'

import React, { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do bookings work?',
    answer: 'You can book online through our website, call us directly, or fill out our contact form. We\'ll confirm your appointment and send a reminder before your scheduled cleaning.',
  },
  {
    question: 'Do you bring your own supplies?',
    answer: 'Yes! We bring all professional-grade cleaning supplies and equipment. You don\'t need to provide anything - just let us in and we\'ll handle the rest.',
  },
  {
    question: 'Is there a cancellation fee?',
    answer: 'We require 24 hours notice for cancellations. Cancellations made less than 24 hours before the scheduled service may incur a fee. Please contact us to reschedule or cancel.',
  },
  {
    question: 'Can I request same-day cleaning?',
    answer: 'Yes, we offer same-day cleaning services subject to availability. Please call us to check availability for your preferred time slot.',
  },
  {
    question: 'Is TurboTech insured?',
    answer: 'Absolutely! We are fully insured and bonded for your peace of mind. Our insurance covers any accidental damage that may occur during cleaning.',
  },
  {
    question: 'Do you clean condos of all sizes?',
    answer: 'Yes, we clean condos of all sizes throughout the GTA. Our pricing is based on square footage, and we can provide custom quotes for larger units or special requirements.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-blue flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

