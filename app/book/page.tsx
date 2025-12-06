import Script from 'next/script'
import Navbar from '../components/Navbar'

export default function Book() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-center">
      <Navbar />
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2A43] mb-4">
          Book Your Cleaning
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Secure your appointment through our trusted system.
        </p>

        <div className="mt-12 min-h-[600px]">
          {/* Square embed */}
          <div id="square-appointments-widget"></div>
        </div>
      </div>

      {/* Square Embedded Widget */}
      <Script
        src="https://square.site/appointments/buyer/widget/yf9w9iexbe2vql/L1V07E9ZSCW9A.js"
        strategy="afterInteractive"
      />
    </main>
  )
}

