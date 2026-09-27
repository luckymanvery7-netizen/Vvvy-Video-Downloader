import type { DownloadStatus } from '../types'
import { DownloadIcon, AlertIcon, CheckIcon } from './Icons'

interface DownloadButtonProps {
  status: DownloadStatus
  disabled: boolean
  onClick: () => void
}

const LABELS: Record<DownloadStatus['state'], string> = {
  idle: 'Download Video',
  resolving: 'Resolving link…',
  preparing: 'Preparing download…',
  downloading: 'Downloading…',
  complete: 'Download Another',
  error: 'Try Again',
}

export function DownloadButton({ status, disabled, onClick }: DownloadButtonProps) {
  const busy =
    status.state === 'resolving' ||
    status.state === 'preparing' ||
    status.state === 'downloading'

  const isComplete = status.state === 'complete'
  const isError = status.state === 'error'

  const buttonClass = isError
    ? 'btn-error'
    : isComplete
      ? 'btn-success'
      : 'btn-primary'

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || busy}
        className={`${buttonClass} w-full h-16 text-base flex items-center justify-center gap-3`}
      >
        {busy ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>{LABELS[status.state]}</span>
          </>
        ) : isError ? (
          <>
            <AlertIcon className="w-5 h-5" />
            <span>{LABELS[status.state]}</span>
          </>
        ) : isComplete ? (
          <>
            <CheckIcon className="w-5 h-5" />
            <span>{LABELS[status.state]}</span>
          </>
        ) : (
          <>
            <DownloadIcon className="w-5 h-5" />
            <span>{LABELS[status.state]}</span>
          </>
        )}
      </button>

      {/* Premium progress bar */}
      {busy && (
        <div className="space-y-2 animate-slide-down">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">
              {LABELS[status.state]}
            </span>
            <span className="text-accent-300 font-semibold tabular-nums">
              {Math.round(status.progress)}%
            </span>
          </div>
          <div className="relative h-2.5 rounded-full bg-base-700 overflow-hidden">
            {/* Track shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-shimmer" />
            {/* Fill */}
            <div
              className="relative h-full progress-bar transition-all duration-300 ease-out rounded-full"
              style={{ width: `${status.progress}%` }}
            >
              <div className="absolute inset-0 progress-bar-striped animate-progress-stripe rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
            </div>
          </div>
          <div className="flex justify-between gap-1">
            {[10, 30, 50, 70, 90].map((mark) => (
              <div
                key={mark}
                className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                  status.progress >= mark
                    ? 'bg-accent-500/60'
                    : 'bg-base-700'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
