'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { getImage } from '../utils/turbophotos'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between min-h-[30px] py-0.5">
          {/* Logo - Larger */}
          <div className="flex-shrink-0 overflow-visible">
            <a href="/" className="flex items-center">
              <Image
                src={getImage('newlogo')}
                alt="TurboTech Cleaners Logo"
                width={169}
                height={59}
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black hover:text-[#09BCFF] transition-colors font-bold text-lg"
              >
                {link.name}
              </a>
            ))}
            {/* Phone Number */}
            <a
              href="tel:6477849120"
              className="text-black hover:text-[#09BCFF] font-bold text-lg transition-colors"
            >
              647-784-9120
            </a>
            {/* Book Now Button */}
            <a
              target="_top"
              href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
              className="text-white font-medium text-sm border-radius-8"
              style={{
                backgroundColor: '#09BCFF',
                borderRadius: '8px',
                padding: '0 28px',
                height: '40px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-black hover:text-[#09BCFF] transition-colors font-bold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Phone Number */}
            <a
              href="tel:6477849120"
              className="block text-black hover:text-[#09BCFF] font-bold text-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              647-784-9120
            </a>
            {/* Mobile Book Now Button */}
            <div className="pt-2">
              <a
                target="_top"
                href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
                className="block w-full text-white font-medium text-sm text-center"
                style={{
                  backgroundColor: '#09BCFF',
                  borderRadius: '8px',
                  padding: '12px 28px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
