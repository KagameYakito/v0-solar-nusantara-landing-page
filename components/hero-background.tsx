'use client'

export default function HeroBackground() {
  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background Image Layer - 100% opacity at top, positioned absolutely */}
      <div
        className="absolute inset-0 w-full"
        style={{
          backgroundImage: 'url(/solar-grid-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Fade Mask - Image transitions from 100% opacity to 0% opacity */}
      <div
        className="absolute inset-0 w-full"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, transparent 50%, rgba(15, 23, 42, 1) 85%, rgba(15, 23, 42, 1) 100%)',
          mixBlendMode: 'multiply',
        }}
      />

      {/* Solid Dark Gradient - Fills the space below the fade */}
      <div className="absolute inset-0 w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" style={{ zIndex: -1 }} />
    </div>
  )
}
