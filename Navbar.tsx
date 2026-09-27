import { PlayIcon } from './Icons'

export function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-md px-4 pt-3">
        <div className="flex items-center justify-between rounded-2xl bg-base-900/80 backdrop-blur-xl border border-white/[0.06] px-4 py-2.5 shadow-lg shadow-black/20">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-accent-400 to-accent-700 flex items-center justify-center shadow-md shadow-accent-600/30">
                <PlayIcon className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-accent-400/30 blur-md -z-10" />
            </div>
            <span className="text-base font-bold tracking-tight text-white">Vvvy</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => scrollTo('downloader')}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Download
            </button>
            <button
              onClick={() => scrollTo('faq')}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollTo('downloader')}
              className="ml-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-400 hover:to-accent-500 transition-all active:scale-95 shadow-md shadow-accent-600/25"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
