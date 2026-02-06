'use client'

import { Sun, Zap, Battery, Grid3x3, Gauge, Headset, Truck, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ProductCategories from '@/components/product-categories'
import WhyChooseUs from '@/components/why-choose-us'
import StatsCounter from '@/components/stats-counter'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <HeroSection />
      <ProductCategories />
      <WhyChooseUs />
      <StatsCounter />
      <Footer />
    </div>
  )
}
