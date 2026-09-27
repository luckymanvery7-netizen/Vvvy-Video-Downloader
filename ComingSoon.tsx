import { useState } from 'react'
import { PhoneIcon, BellIcon, CheckIcon } from './Icons'

export function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="coming-soon" className="animate-fade-up">
      <div className="relative overflow-hidden rounded-3xl border border-accent-500/20
                      bg-gradient-to-br from-base-800/80 via-base-850/60 to-accent-900/10
                      p-6 sm:p-8">
        {/* Glow accents */}
        <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-accent-600/10 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 bg-accent-800/10 blur-3xl rounded-full" />

        <div className="relative space-y-5">
          {/* Phone mockup icon */}
          <div className="flex justify-center">
            <div className="relative animate-logo-float">
              <div className="absolute inset-0 bg-accent-500/30 blur-2xl rounded-3xl" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 via-accent-600 to-accent-800 flex items-center justify-center shadow-2xl shadow-accent-600/40 border border-white/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/15 to-transparent" />
                <PhoneIcon className="w-7 h-7 text-white relative z-10" />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse-soft" />
              <span className="text-[11px] font-semibold text-accent-300 tracking-wide">
                COMING SOON
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">Vvvy for Android</h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto">
              Get one-tap downloads right from your phone. Be the first to know
              when the app launches.
            </p>
          </div>

          {/* Notify form or success */}
          {submitted ? (
            <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-2xl bg-success-500/10 border border-success-500/20 animate-bounce-in">
              <div className="w-7 h-7 rounded-lg bg-success-500/20 flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-4 h-4 text-success-400" />
              </div>
              <p className="text-sm text-success-300 font-medium">
                You&apos;re on the list — we&apos;ll let you know!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="input-field h-12 px-4 text-sm text-center"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="btn-primary w-full h-12 text-sm flex items-center justify-center gap-2"
              >
                <BellIcon className="w-4 h-4" />
                Notify me at launch
              </button>
            </form>
          )}

          {/* Feature teasers */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {['One-tap', 'Background', 'Offline'].map((label) => (
              <div key={label} className="text-center py-2 px-1 rounded-xl bg-base-900/40 border border-white/[0.04]">
                <span className="text-[11px] font-medium text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
