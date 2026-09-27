import type { DownloadStatus } from '../types'
import { AlertIcon, CheckIcon } from './Icons'

interface StatusMessageProps {
  status: DownloadStatus
}

export function StatusMessage({ status }: StatusMessageProps) {
  if (status.state === 'error') {
    return (
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-error-500/10 border border-error-500/20 animate-slide-down">
        <div className="w-8 h-8 rounded-lg bg-error-500/20 flex items-center justify-center flex-shrink-0">
          <AlertIcon className="w-4 h-4 text-error-400" />
        </div>
        <p className="text-sm text-error-300 leading-relaxed pt-1">{status.message}</p>
      </div>
    )
  }

  if (status.state === 'complete') {
    return (
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-success-500/10 border border-success-500/20 animate-bounce-in">
        <div className="w-8 h-8 rounded-lg bg-success-500/20 flex items-center justify-center flex-shrink-0">
          <CheckIcon className="w-4 h-4 text-success-400" />
        </div>
        <p className="text-sm text-success-300 leading-relaxed pt-1">{status.message}</p>
      </div>
    )
  }

  return null
}
