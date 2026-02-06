'use client'

import { Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sun className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-bold text-white">Solar Nusantara</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Products
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-slate-400 hover:text-white">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
