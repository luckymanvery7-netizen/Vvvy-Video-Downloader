import { PlayIcon } from './Icons'

export function Header() {
  return (
    <header className="flex flex-col items-center pt-20 pb-8 animate-fade-in">
      {/* Animated logo */}
      <div className="relative mb-6 animate-logo-float">
        <div className="absolute inset-0 bg-accent-500/40 blur-2xl rounded-3xl animate-logo-glow" />
        <div className="absolute inset-0 bg-accent-400/20 blur-xl rounded-3xl" />
        <div className="relative w-18 h-18 rounded-3xl bg-gradient-to-br from-accent-400 via-accent-600 to-accent-800 flex items-center justify-center shadow-2xl shadow-accent-600/40 border border-white/10">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/15 to-transparent" />
          <PlayIcon className="w-9 h-9 text-white relative z-10 drop-shadow-md" />
        </div>
      </div>

      {/* Brand + tagline */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                   bg-base-800/80 border border-white/[0.06] mb-4"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-success-400 animate-pulse-soft" />
        <span className="text-[11px] font-medium text-slate-400 tracking-wide">
          Fast · Free · Authorized content only
        </span>
      </div>

      <h1 className="text-[2rem] leading-tight font-bold tracking-tight text-white text-center max-w-xs">
        Download your{' '}
        <span className="bg-gradient-to-r from-accent-300 via-accent-400 to-accent-300 bg-clip-text text-transparent">
          YouTube videos
        </span>
      </h1>
      <p className="text-base text-slate-400 mt-3 text-center leading-relaxed max-w-sm px-2">
        Paste a link, pick your quality, and download videos you own or are
        authorized to save — in seconds.
      </p>
    </header>
  )
}
