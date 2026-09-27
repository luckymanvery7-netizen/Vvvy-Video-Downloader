import { BoltIcon, ShieldIcon, GaugeIcon, DevicesIcon, LockIcon, GlobeIcon } from './Icons'

const FEATURES = [
  {
    icon: BoltIcon,
    title: 'Lightning fast',
    desc: 'Process and download videos in seconds with an optimized pipeline.',
  },
  {
    icon: ShieldIcon,
    title: 'Authorized only',
    desc: 'Built to respect content rights — no bypassing DRM or YouTube restrictions.',
  },
  {
    icon: GaugeIcon,
    title: 'Quality choices',
    desc: 'Pick from 360p, 720p, or 1080p to match your needs and save bandwidth.',
  },
  {
    icon: DevicesIcon,
    title: 'Works everywhere',
    desc: 'Mobile-first design that adapts beautifully to phones, tablets, and desktops.',
  },
  {
    icon: LockIcon,
    title: 'Privacy first',
    desc: 'Your links are processed securely and not stored or shared with third parties.',
  },
  {
    icon: GlobeIcon,
    title: 'No app install',
    desc: 'Runs entirely in your browser — nothing to download or install.',
  },
]

export function Features() {
  return (
    <section id="features" className="space-y-5 animate-fade-up">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">Why Vvvy</h2>
        <p className="text-sm text-slate-400 mt-1.5">Everything you need to save your videos</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            className="p-4 rounded-2xl bg-base-850/50 border border-white/[0.04]
                       hover:border-white/[0.08] hover:bg-base-850/70
                       transition-all duration-200 animate-fade-up"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-600/20 to-accent-800/10 border border-accent-500/15 flex items-center justify-center mb-3">
              <f.icon className="w-5 h-5 text-accent-400" />
            </div>
            <h3 className="text-sm font-semibold text-white leading-tight">{f.title}</h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
