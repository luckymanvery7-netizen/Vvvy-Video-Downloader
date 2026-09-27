import { ShieldIcon, InfoIcon, SparkleIcon, NoEntryIcon } from './Icons'

export function SupportedContent() {
  return (
    <section id="supported" className="space-y-5 animate-fade-up">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">Supported content</h2>
        <p className="text-sm text-slate-400 mt-1.5">What you can and can&apos;t download</p>
      </div>

      <div className="space-y-2.5">
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-success-500/[0.06] border border-success-500/15">
          <div className="w-9 h-9 rounded-xl bg-success-500/15 flex items-center justify-center flex-shrink-0">
            <ShieldIcon className="w-4 h-4 text-success-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-success-300">Your own videos</p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Content you uploaded to your own YouTube channel.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-2xl bg-accent-500/[0.06] border border-accent-500/15">
          <div className="w-9 h-9 rounded-xl bg-accent-500/15 flex items-center justify-center flex-shrink-0">
            <SparkleIcon className="w-4 h-4 text-accent-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-accent-300">Authorized content</p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Videos you have explicit permission or a license to download.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-2xl bg-base-850/50 border border-white/[0.04]">
          <div className="w-9 h-9 rounded-xl bg-base-700/60 flex items-center justify-center flex-shrink-0">
            <InfoIcon className="w-4 h-4 text-slate-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-300">Public domain &amp; Creative Commons</p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Content explicitly licensed for reuse and downloading.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 rounded-2xl bg-error-500/[0.05] border border-error-500/12">
          <div className="w-9 h-9 rounded-xl bg-error-500/12 flex items-center justify-center flex-shrink-0">
            <NoEntryIcon className="w-4 h-4 text-error-400/80" />
          </div>
          <div>
            <p className="text-sm font-semibold text-error-300/80">Not supported</p>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Downloading copyrighted content you don&apos;t own or have rights to.
              Vvvy does not bypass DRM, access controls, authentication, or
              YouTube restrictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
