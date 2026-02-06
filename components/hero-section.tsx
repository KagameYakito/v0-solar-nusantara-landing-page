'use client'

import { Button } from '@/components/ui/button'
import { Zap } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-slate-300">Powering Industrial Future</span>
          </div>

          {/* Tagline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Powering Indonesia's
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Industrial Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Premium electrical materials and solar energy systems for businesses. Complete solutions for your energy needs with guaranteed quality and support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg glow rounded-lg">
              Request Quotation
            </Button>
            <Button
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-900 px-8 py-6 text-lg rounded-lg bg-transparent"
            >
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
