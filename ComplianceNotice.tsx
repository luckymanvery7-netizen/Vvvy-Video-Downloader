import { ShieldIcon } from './Icons'

export function ComplianceNotice() {
  return (
    <div className="flex items-start gap-2.5 pt-1">
      <ShieldIcon className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
      <p className="text-xs text-slate-500 leading-relaxed">
        Only download videos you own or are authorized to download.
        Vvvy does not bypass DRM, access controls, or YouTube restrictions.
      </p>
    </div>
  )
}
