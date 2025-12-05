'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { getVideo, getImage } from '../utils/turbophotos'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showLateOverlay, setShowLateOverlay] = useState(false)
  const [useImageFallback, setUseImageFallback] = useState(false)
  const overlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) {
      setUseImageFallback(true)
      return
    }

    // Set up late-hours overlay timing (show for 4 seconds between 5s-9s)
    const startAt = 5 // seconds into the clip
    const endAt = 9 // startAt + 4

    const checkTime = () => {
      if (!video || video.duration === Infinity || isNaN(video.duration)) return
      const t = video.currentTime % (video.duration || 14)
      if (t >= startAt && t <= endAt) {
        setShowLateOverlay(true)
      } else {
        setShowLateOverlay(false)
      }
    }

    video.addEventListener('timeupdate', checkTime)
    video.addEventListener('error', () => {
      setUseImageFallback(true)
    })

    // Ensure autoplay on mobile
    const tryPlay = async () => {
      try {
        video.muted = true
        await video.play()
      } catch (e) {
        // Autoplay blocked or video failed - use image fallback
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

    // Initial overlay show for first 4 seconds
    setShowLateOverlay(true)
    overlayTimeoutRef.current = setTimeout(() => {
      if (!video.paused) setShowLateOverlay(false)
    }, 4000)

    return () => {
      video.removeEventListener('timeupdate', checkTime)
      video.removeEventListener('error', () => {})
      if (overlayTimeoutRef.current) {
        clearTimeout(overlayTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background - Video or Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {!useImageFallback ? (
          <video
            ref={videoRef}
            id="heroVideo"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={getVideo('miniScrub')} type="video/quicktime" />
            <source src={getVideo('cornerClip')} type="video/quicktime" />
            <source src={getVideo('spinClip')} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={getImage('pavelDanilyuk')}
            alt="TurboTech Cleaners professional cleaning service"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Late-Hours Overlay (appears for 4 seconds when video is playing) */}
      {!useImageFallback && (
        <div
          id="lateOverlay"
          className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 ${
            showLateOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl px-8 py-6 text-center border-2 border-primary-turquoise/50">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
              Late-Night Cleaning Available
            </h3>
            <p className="text-xl md:text-2xl text-primary-turquoise font-semibold">
              We&apos;re Open Until 10 PM
            </p>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src={getImage('logo')}
            alt="TurboTech Cleaners Logo"
            width={200}
            height={67}
            className="object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-4 drop-shadow-lg">
          Premium Condo Cleaning Across the GTA
        </h1>

        {/* Subheadline */}
        <h2 className="text-2xl md:text-3xl font-heading font-semibold text-white mb-4 drop-shadow-md">
          Spotless. Fast. Reliable.
        </h2>

        {/* Description */}
        <p className="text-white text-lg md:text-xl mb-6 opacity-95 max-w-2xl mx-auto drop-shadow-md">
          Fast, reliable, and fully insured. Cleaning that puts a smile on your face!
        </p>

        {/* Phone Number - Prominent and Clickable */}
        <p className="text-white font-semibold text-lg md:text-xl mb-8 drop-shadow-md">
          Call us now:{' '}
          <a 
            href="tel:6477849120" 
            className="text-primary-turquoise hover:text-[#08a8e6] underline font-bold transition-colors"
          >
            647-784-9120
          </a>
        </p>

        {/* Book Now Button */}
        <div className="flex justify-center mb-4">
          <a
            href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="bg-primary-turquoise hover:bg-[#08a8e6] text-white font-semibold py-3 px-8 rounded-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-[15px]"
            style={{
              letterSpacing: '1px',
            }}
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
