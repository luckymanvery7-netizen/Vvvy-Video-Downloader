import type { VideoQuality } from '../types'
import { QUALITY_OPTIONS } from '../types'

interface QualitySelectorProps {
  value: VideoQuality
  onChange: (q: VideoQuality) => void
  disabled: boolean
}

export function QualitySelector({ value, onChange, disabled }: QualitySelectorProps) {
  return (
    <div className="space-y-3">
      <p className="section-title px-1">Video quality</p>
      <div className="grid grid-cols-3 gap-2.5">
        {QUALITY_OPTIONS.map((opt) => {
          const active = value === opt.value
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              disabled={disabled}
              className={`quality-chip ${
                active
                  ? 'border-accent-500 bg-gradient-to-br from-accent-600/25 to-accent-700/10 text-white shadow-lg shadow-accent-600/15'
                  : 'border-white/[0.06] bg-base-850 text-slate-300 hover:border-white/[0.12] hover:text-white'
              } disabled:opacity-40 disabled:cursor-not-allowed`}
              aria-pressed={active}
            >
              <span className="text-base font-bold leading-tight tracking-tight">
                {opt.label}
              </span>
              <span
                className={`text-[11px] mt-1 font-medium ${
                  active ? 'text-accent-300' : 'text-slate-500'
                }`}
              >
                {opt.sub}
              </span>
              {active && (
                <span className="absolute inset-0 rounded-2xl ring-2 ring-accent-500/25 animate-scale-in" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
