'use client'

import { Sun } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="w-5 h-5 text-blue-500" />
              <span className="text-lg font-bold text-white">Solar Nusantara</span>
            </div>
            <p className="text-slate-400 text-sm">
              Powering Indonesia's industrial future with premium electrical materials and solar energy systems.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Solar Panels
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Inverters
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Batteries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Switchgear
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Industrial Power
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Solar Systems
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Energy Storage
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="mailto:info@solarnusantara.com" className="hover:text-white transition-colors">
                  info@solarnusantara.com
                </a>
              </li>
              <li>
                <a href="tel:+6200000000" className="hover:text-white transition-colors">
                  +62 (000) 0000000
                </a>
              </li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>&copy; 2024 Solar Nusantara. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
