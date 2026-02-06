'use client'

import { Sun, Zap, Battery, Grid3x3, Gauge, Radio } from 'lucide-react'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'Solar Panels',
    icon: Sun,
    description: 'High-efficiency photovoltaic systems',
  },
  {
    id: 2,
    name: 'Inverters',
    icon: Zap,
    description: 'Advanced power conversion technology',
  },
  {
    id: 3,
    name: 'Batteries',
    icon: Battery,
    description: 'Energy storage solutions',
  },
  {
    id: 4,
    name: 'Switchgear',
    icon: Radio,
    description: 'Industrial switching equipment',
  },
  {
    id: 5,
    name: 'Transformers',
    icon: Grid3x3,
    description: 'Power distribution systems',
  },
  {
    id: 6,
    name: 'Energy Meters',
    icon: Gauge,
    description: 'Smart monitoring systems',
  },
]

export default function ProductCategories() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Categories</h2>
          <p className="text-xl text-slate-400">Comprehensive solutions for all your electrical and solar needs</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const IconComponent = product.icon
            return (
              <div
                key={product.id}
                className="group relative p-6 rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 glow-orange"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-lg bg-slate-800/50 group-hover:bg-blue-600/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-orange-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-slate-400 mb-6">{product.description}</p>

                {/* Button */}
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 p-0 h-auto font-semibold"
                >
                  View Details →
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
