'use client'

import { Button } from '@/components/ui/button'
import { Zap, Search } from 'lucide-react'
import { useState } from 'react'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Gradient Fade */}
      <div className="absolute inset-0 -z-20">
        {/* Image Layer - Solar panels visible at top */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/solar-grid-background.jpg)',
            backgroundPosition: 'center top',
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Fade Overlay - Image fades from top to middle, then transitions to dark gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 20%, rgba(15,23,42,0.4) 40%, rgba(15,23,42,0.7) 55%, rgba(15,23,42,1) 70%, rgba(30,41,59,1) 100%)',
          }}
        />

        {/* Solid Dark Gradient Background - Fills below fade transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-colors">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-white/80 font-medium">Powering Industrial Future</span>
          </div>

          {/* Main Tagline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight drop-shadow-lg">
              Powering Indonesia's
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Industrial Future
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md light-mode:text-gray-700">
            Premium electrical materials and solar energy systems for businesses. Complete solutions for your energy needs with guaranteed quality and support.
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-lg mx-auto pt-4">
            <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 transition-all duration-300 hover:bg-white/15 focus-within:bg-white/20 focus-within:border-blue-400/50 light-mode:bg-yellow-100/30 light-mode:border-yellow-300/50 light-mode:hover:bg-yellow-100/40 light-mode:focus-within:bg-yellow-100/50">
              <Search className="w-5 h-5 text-white/60 light-mode:text-yellow-700 mr-3" />
              <input
                type="text"
                placeholder="Search products, components, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-base light-mode:text-black light-mode:placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* CTA Buttons - Glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-blue-500/30 light-mode:bg-yellow-500 light-mode:hover:bg-yellow-600 light-mode:text-black light-mode:border-yellow-400/50"
              style={{
                boxShadow: '0 0 30px rgba(37, 99, 235, 0.5), 0 0 60px rgba(37, 99, 235, 0.3)',
              }}
            >
              Request Quotation
            </Button>
            <Button
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg border-2 border-orange-500 transition-all duration-200 backdrop-blur-sm hover:shadow-lg light-mode:bg-yellow-200/30 light-mode:hover:bg-yellow-200/50 light-mode:text-black light-mode:border-yellow-600"
              style={{
                boxShadow: '0 0 20px rgba(249, 115, 22, 0.3)',
              }}
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
