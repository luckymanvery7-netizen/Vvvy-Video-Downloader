import { PlayIcon, MailIcon, HeartIcon } from './Icons'

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="mt-12 pb-10 animate-fade-up">
      <div className="glass-panel-soft p-6 space-y-6">
        {/* Brand row */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-accent-700 flex items-center justify-center shadow-lg shadow-accent-600/30">
                <PlayIcon className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-accent-400/25 blur-md -z-10" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">Vvvy</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            A clean, fast tool for downloading your authorized YouTube videos.
            Built with respect for content creators and copyright.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => scrollTo('downloader')}
            className="text-xs font-medium text-slate-400 hover:text-accent-400 transition-colors"
          >
            Download
          </button>
          <button
            onClick={() => scrollTo('how-it-works')}
            className="text-xs font-medium text-slate-400 hover:text-accent-400 transition-colors"
          >
            How it works
          </button>
          <button
            onClick={() => scrollTo('features')}
            className="text-xs font-medium text-slate-400 hover:text-accent-400 transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="text-xs font-medium text-slate-400 hover:text-accent-400 transition-colors"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollTo('coming-soon')}
            className="text-xs font-medium text-slate-400 hover:text-accent-400 transition-colors"
          >
            App
          </button>
        </div>

        {/* Contact */}
        <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-base-850/50 border border-white/[0.04]">
          <MailIcon className="w-4 h-4 text-slate-500" />
          <span className="text-xs text-slate-500">hello@vvvy.app</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Bottom */}
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-slate-500 leading-relaxed text-center max-w-xs">
            For authorized content only. Vvvy does not bypass DRM,
            access controls, authentication, or YouTube restrictions.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <span>© 2026 Vvvy</span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-1">
              Built with <HeartIcon className="w-3 h-3 text-error-400/60" /> for creators
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
