'use client'

import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export default function HeroSection() {
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
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Premium electrical materials and solar energy systems for businesses. Complete solutions for your energy needs with guaranteed quality and support.
          </p>

          {/* CTA Buttons - Glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-blue-500/30"
              style={{
                boxShadow: '0 0 30px rgba(37, 99, 235, 0.5), 0 0 60px rgba(37, 99, 235, 0.3)',
              }}
            >
              Request Quotation
            </Button>
            <Button
              className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg border-2 border-orange-500 transition-all duration-200 backdrop-blur-sm hover:shadow-lg"
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
