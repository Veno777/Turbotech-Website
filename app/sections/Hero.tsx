'use client'

import React, { useEffect, useRef, useState } from 'react'
import { getVideo } from '../utils/turbophotos'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showLateOverlay, setShowLateOverlay] = useState(false)
  const overlayTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

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

    // Ensure autoplay on mobile
    const tryPlay = async () => {
      try {
        video.muted = true
        await video.play()
      } catch (e) {
        // Autoplay blocked - user will need to interact
        console.log('Autoplay blocked')
      }
    }
    tryPlay()

    // Accessibility: respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery && mediaQuery.matches) {
      video.pause()
    }

    // Initial overlay show for first 4 seconds
    setShowLateOverlay(true)
    overlayTimeoutRef.current = setTimeout(() => {
      if (!video.paused) setShowLateOverlay(false)
    }, 4000)

    return () => {
      video.removeEventListener('timeupdate', checkTime)
      if (overlayTimeoutRef.current) {
        clearTimeout(overlayTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
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
          {/* Fallback if videos don't load */}
          Your browser does not support the video tag.
        </video>
        {/* Fallback background image if video fails */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/turbophotos/pexels-pavel-danilyuk-7108400.jpg')",
          }}
        ></div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Late-Hours Overlay (appears for 4 seconds) */}
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

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-5 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 drop-shadow-lg">
          TurboTech Cleaners
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-4 drop-shadow-md">
          Spotless. Fast. Reliable.
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto drop-shadow-md">
          Premium Condo, Airbnb & Move-Out Cleaning — Serving the GTA
        </p>

        {/* Square Booking Button */}
        <a
          target="_top"
          href="https://app.squareup.com/appointments/book/yf9w9iexbe2vql/L1V07E9ZSCW9A/start"
          rel="nofollow"
          className="inline-block bg-primary-turquoise hover:bg-[#08a8e6] text-white uppercase font-body font-semibold text-[15px] tracking-wider px-8 py-4 rounded-[10px] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          style={{
            letterSpacing: '1px',
            lineHeight: '48px',
            height: '48px',
          }}
        >
          Book Now
        </a>
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
