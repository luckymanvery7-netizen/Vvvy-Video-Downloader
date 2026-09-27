import { useState } from 'react'
import { ClipboardIcon } from './Icons'
import { readClipboard } from '../lib/clipboard'
import { isValidYouTubeUrl } from '../lib/download'

interface UrlInputProps {
  value: string
  onChange: (value: string) => void
  disabled: boolean
}

export function UrlInput({ value, onChange, disabled }: UrlInputProps) {
  const [pasteFailed, setPasteFailed] = useState(false)

  const handlePaste = async () => {
    const text = await readClipboard()
    if (text) {
      onChange(text.trim())
      setPasteFailed(false)
    } else {
      setPasteFailed(true)
      setTimeout(() => setPasteFailed(false), 2500)
    }
  }

  const isValid = value.length > 0 && isValidYouTubeUrl(value)
  const showError = value.length > 0 && !isValid

  return (
    <div className="space-y-2">
      <label htmlFor="yt-url" className="sr-only">
        YouTube video URL
      </label>
      <div className="relative">
        <input
          id="yt-url"
          type="url"
          inputMode="url"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Paste YouTube link…"
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="input-field h-14 pl-4 pr-16 text-base"
          aria-invalid={showError}
        />
        <button
          type="button"
          onClick={handlePaste}
          disabled={disabled}
          className="absolute right-2 top-1/2 -translate-y-1/2
                     flex items-center justify-center
                     w-11 h-11 rounded-xl
                     bg-base-700/80 hover:bg-base-600
                     text-slate-300 hover:text-white
                     transition-all duration-200 active:scale-90
                     disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Paste from clipboard"
        >
          <ClipboardIcon className="w-5 h-5" />
        </button>
      </div>
      {pasteFailed && (
        <p className="text-sm text-warning-400 animate-slide-down">
          Could not access clipboard. Paste manually with long-press.
        </p>
      )}
      {showError && (
        <p className="text-sm text-error-400 animate-slide-down">
          Enter a valid YouTube link (youtube.com/watch, youtu.be, or /shorts/).
        </p>
      )}
    </div>
  )
}
