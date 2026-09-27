import { LinkIcon, QualityIcon, BoltIcon } from './Icons'

const STEPS = [
  {
    icon: LinkIcon,
    title: 'Paste your link',
    desc: 'Copy any YouTube URL and paste it into the input field at the top of the page.',
  },
  {
    icon: QualityIcon,
    title: 'Select quality',
    desc: 'Choose 360p for quick saves, 720p for HD, or 1080p for full high definition.',
  },
  {
    icon: BoltIcon,
    title: 'Download authorized content',
    desc: 'Tap download and Vvvy processes your request — for videos you own or are authorized to download.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="space-y-5 animate-fade-up">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">How it works</h2>
        <p className="text-sm text-slate-400 mt-1.5">Three simple steps to your video</p>
      </div>

      {/* Steps with connector line */}
      <div className="relative space-y-3">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="flex items-start gap-4 p-4 rounded-2xl bg-base-850/60 border border-white/[0.05]
                       hover:border-white/[0.1] transition-all duration-200"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-600/20 to-accent-800/10 border border-accent-500/20 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-accent-400" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-white text-[11px] font-bold flex items-center justify-center shadow-lg shadow-accent-600/30">
                {i + 1}
              </span>
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
