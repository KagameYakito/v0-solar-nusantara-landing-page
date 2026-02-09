'use client'

import { useEffect, useState } from 'react'

export function useThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only run on client after hydration
    setMounted(true)
    const savedTheme = (localStorage.getItem('theme') || 'dark') as 'dark' | 'light'
    setTheme(savedTheme)
    applyTheme(savedTheme)
  }, [])

  const applyTheme = (newTheme: 'dark' | 'light') => {
    const html = document.documentElement
    if (newTheme === 'light') {
      html.classList.add('light-mode')
      html.classList.remove('dark')
    } else {
      html.classList.remove('light-mode')
      html.classList.add('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  return { theme, toggleTheme, mounted }
}
