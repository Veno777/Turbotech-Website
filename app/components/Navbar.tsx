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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3">
              <Image
                src={getImage('logo')}
                alt="TurboTech Cleaners Logo"
                width={120}
                height={40}
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
                className="text-[#0A2A43] hover:text-[#09BCFF] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            {/* Phone Number */}
            <a
              href="tel:6477849120"
              className="text-[#0A2A43] hover:text-[#09BCFF] font-semibold transition-colors"
            >
              647-784-9120
            </a>
            {/* Book Now Button */}
            <a
              href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="bg-[#28C76F] hover:bg-[#24b362] text-white font-semibold py-2 px-6 rounded-lg uppercase tracking-wide transition-all duration-300 text-sm"
              style={{ letterSpacing: '0.5px' }}
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
                className="block text-[#0A2A43] hover:text-[#09BCFF] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            {/* Mobile Phone Number */}
            <a
              href="tel:6477849120"
              className="block text-[#0A2A43] hover:text-[#09BCFF] font-semibold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Call: 647-784-9120
            </a>
            {/* Mobile Book Now Button */}
            <div className="pt-2">
              <a
                href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="block w-full bg-[#28C76F] hover:bg-[#24b362] text-white font-semibold py-3 px-6 rounded-lg uppercase tracking-wide transition-all duration-300 text-center text-sm"
                style={{ letterSpacing: '0.5px' }}
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
