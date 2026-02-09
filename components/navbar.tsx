'use client'

import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useThemeToggle } from '@/hooks/use-theme-toggle'

export default function Navbar() {
  const { theme, toggleTheme, mounted } = useThemeToggle()

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md transition-colors duration-300 light-mode:bg-yellow-50/80 light-mode:border-yellow-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Sun className="w-6 h-6 text-blue-500 light-mode:text-yellow-600 transition-colors" />
            <span className="text-xl font-bold text-white light-mode:text-black transition-colors">Solar Nusantara</span>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
              Products
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
              Solutions
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
              About
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black">
              Contact
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 transition-colors light-mode:bg-yellow-200 light-mode:hover:bg-yellow-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Moon className="w-4 h-4 text-slate-300" />
                ) : (
                  <Sun className="w-4 h-4 text-yellow-700" />
                )}
              </button>
            )}

            <Button variant="ghost" className="text-slate-400 hover:text-white transition-colors light-mode:text-gray-600 light-mode:hover:text-black light-mode:hover:bg-yellow-100">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors light-mode:bg-yellow-500 light-mode:hover:bg-yellow-600 light-mode:text-black">
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
