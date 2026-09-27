import { useState } from 'react'
import { ChevronDownIcon } from './Icons'

const FAQS = [
  {
    q: 'What kind of videos can I download?',
    a: 'You can download videos you own (uploaded to your own channel), videos you have explicit permission or a license to download, and content explicitly licensed for reuse such as public domain or Creative Commons videos.',
  },
  {
    q: 'Can I download copyrighted videos I don\'t own?',
    a: 'No. Vvvy does not support downloading copyrighted content you do not own or have rights to. The tool does not bypass DRM, access controls, authentication, or YouTube restrictions.',
  },
  {
    q: 'What video qualities are available?',
    a: 'Vvvy offers three quality options: 360p (standard), 720p (HD), and 1080p (Full HD). Choose the one that best fits your needs and available bandwidth.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. Vvvy runs entirely in your web browser. There is nothing to download or install — just open the page, paste your link, and go.',
  },
  {
    q: 'Is Vvvy free to use?',
    a: 'Yes, Vvvy is free to use for downloading your authorized content.',
  },
  {
    q: 'Does Vvvy store my links or videos?',
    a: 'No. Your links are processed to fulfill your request and are not stored or shared with third parties.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="space-y-5 animate-fade-up">
      <div className="text-center">
        <h2 className="text-xl font-bold text-white">Frequently asked questions</h2>
        <p className="text-sm text-slate-400 mt-1.5">Everything you need to know</p>
      </div>

      <div className="space-y-2.5">
        {FAQS.map((faq, i) => {
          const isOpen = open === i
          return (
            <div
              key={faq.q}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden
                ${isOpen
                  ? 'bg-base-850/70 border-white/[0.08]'
                  : 'bg-base-850/40 border-white/[0.04] hover:border-white/[0.06]'
                }`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-white leading-snug">
                  {faq.q}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200
                    ${isOpen ? 'rotate-180 text-accent-400' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out
                  ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-400 leading-relaxed px-4 pb-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
