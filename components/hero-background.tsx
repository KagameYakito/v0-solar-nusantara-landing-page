'use client'

export default function HeroBackground() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Background Image Layer - Full opacity at top */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/solar-grid-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Linear Fade Overlay - Image opacity fades from 100% to 0% at button level */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.2) 30%, rgba(15, 23, 42, 0.5) 55%, rgba(15, 23, 42, 1) 75%)',
        }}
      />

      {/* Solid Dark Gradient Background - Below fade line */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800" />
    </div>
  )
}
