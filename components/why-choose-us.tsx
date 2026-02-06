'use client'

import { Shield, Headset, Truck } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Quality Certified Products',
    description: 'All products meet international standards and certifications for safety and reliability',
  },
  {
    id: 2,
    icon: Headset,
    title: 'Technical Support Team',
    description: 'Expert support available to assist with installation, maintenance, and troubleshooting',
  },
  {
    id: 3,
    icon: Truck,
    title: 'Fast Delivery Nationwide',
    description: 'Nationwide logistics network ensuring quick and reliable product delivery',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h2>
          <p className="text-xl text-slate-400">We provide comprehensive B2B solutions tailored to your business</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                className="relative p-8 rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/50 to-slate-950/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-orange-600/5 pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-800/50">
                    <IconComponent className="w-8 h-8 text-blue-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
