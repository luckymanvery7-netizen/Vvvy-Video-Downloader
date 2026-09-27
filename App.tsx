import { useState, useCallback } from 'react'
import { Navbar } from './components/Navbar'
import { Header } from './components/Header'
import { UrlInput } from './components/UrlInput'
import { QualitySelector } from './components/QualitySelector'
import { DownloadButton } from './components/DownloadButton'
import { StatusMessage } from './components/StatusMessage'
import { ComplianceNotice } from './components/ComplianceNotice'
import { HowItWorks } from './components/HowItWorks'
import { Features } from './components/Features'
import { SupportedContent } from './components/SupportedContent'
import { FAQ } from './components/FAQ'
import { ComingSoon } from './components/ComingSoon'
import { Footer } from './components/Footer'
import { isValidYouTubeUrl, requestDownload } from './lib/download'
import type { VideoQuality, DownloadStatus } from './types'

const IDLE: DownloadStatus = { state: 'idle', progress: 0, message: '' }

export default function App() {
  const [url, setUrl] = useState('')
  const [quality, setQuality] = useState<VideoQuality>('720p')
  const [status, setStatus] = useState<DownloadStatus>(IDLE)

  const busy =
    status.state === 'resolving' ||
    status.state === 'preparing' ||
    status.state === 'downloading'

  const canSubmit = url.trim().length > 0 && isValidYouTubeUrl(url) && !busy

  const handleDownload = useCallback(async () => {
    if (!isValidYouTubeUrl(url)) return

    setStatus({ state: 'resolving', progress: 0, message: '' })

    const timer = setInterval(() => {
      setStatus((prev) => {
        if (prev.state !== 'resolving' && prev.state !== 'preparing' && prev.state !== 'downloading') return prev
        const next = Math.min(prev.progress + 8, 90)
        if (next >= 40 && prev.state === 'resolving') {
          return { state: 'preparing', progress: next, message: '' }
        }
        if (next >= 70 && prev.state === 'preparing') {
          return { state: 'downloading', progress: next, message: '' }
        }
        return { ...prev, progress: next }
      })
    }, 400)

    try {
      const result = await requestDownload({ url: url.trim(), quality })
      clearInterval(timer)
      setStatus(result)
    } catch {
      clearInterval(timer)
      setStatus({
        state: 'error',
        progress: 0,
        message: 'Network error. Check your connection and try again.',
      })
    }
  }, [url, quality])

  const handleReset = useCallback(() => {
    setStatus(IDLE)
  }, [])

  const handleSubmit = useCallback(() => {
    if (status.state === 'complete' || status.state === 'error') {
      handleReset()
      return
    }
    handleDownload()
  }, [status.state, handleDownload, handleReset])

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-base-950 px-4 sm:px-6">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-600/[0.08] blur-[130px] rounded-full" />
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent-800/[0.05] blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-accent-800/[0.06] blur-[100px] rounded-full" />
      </div>

      <Navbar />

      <main className="relative w-full max-w-md flex flex-col flex-1 z-10">
        <Header />

        {/* Main downloader card */}
        <section
          id="downloader"
          className="glass-panel p-6 sm:p-7 space-y-7 animate-scale-in shadow-2xl shadow-black/30 scroll-mt-20"
        >
          <UrlInput value={url} onChange={setUrl} disabled={busy} />

          <QualitySelector value={quality} onChange={setQuality} disabled={busy} />

          <DownloadButton
            status={status}
            disabled={!canSubmit && status.state !== 'complete' && status.state !== 'error'}
            onClick={handleSubmit}
          />

          <StatusMessage status={status} />

          <ComplianceNotice />
        </section>

        {/* How it works */}
        <div className="mt-12">
          <HowItWorks />
        </div>

        {/* Features */}
        <div className="mt-12">
          <Features />
        </div>

        {/* Supported content */}
        <div className="mt-12">
          <SupportedContent />
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <FAQ />
        </div>

        {/* Coming soon: Android app */}
        <div className="mt-12">
          <ComingSoon />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}
