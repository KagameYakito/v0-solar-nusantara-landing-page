'use client'

const stats = [
  {
    id: 1,
    number: '10,000+',
    label: 'Projects Powered',
  },
  {
    id: 2,
    number: '500+',
    label: 'Business Clients',
  },
  {
    id: 3,
    number: '24h',
    label: 'Response Guarantee',
  },
]

export default function StatsCounter() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 via-blue-600/10 to-orange-600/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="relative text-center p-8 rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-lg text-slate-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
