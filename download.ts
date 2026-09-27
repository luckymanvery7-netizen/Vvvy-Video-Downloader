import type { DownloadRequest, DownloadStatus } from '../types'

/**
 * Validates that a URL is a well-formed YouTube video link.
 * Does NOT check ownership or authorization — that is enforced server-side.
 */
export function isValidYouTubeUrl(url: string): boolean {
  try {
    const u = new URL(url.trim())
    const host = u.hostname.replace(/^www\./, '')
    if (host === 'youtu.be') return /^[\w-]{11}$/.test(u.pathname.slice(1))
    if (host === 'youtube.com') {
      const videoId = u.searchParams.get('v')
      if (videoId && /^[\w-]{11}$/.test(videoId)) return true
      if (u.pathname.startsWith('/shorts/')) {
        const id = u.pathname.split('/')[2]
        return !!id && /^[\w-]{11}$/.test(id)
      }
    }
    return false
  } catch {
    return false
  }
}

/**
 * Posts a download request to the backend edge function.
 *
 * The backend is responsible for verifying that the requesting user owns
 * or is authorized to download the requested content. The client never
 * bypasses DRM, access controls, or YouTube restrictions.
 *
 * Returns a download status. In the current scaffold the backend function
 * validates input and returns a placeholder — actual fetching must be
 * implemented server-side with authorization checks.
 */
export async function requestDownload(
  req: DownloadRequest,
): Promise<DownloadStatus> {
  const { VITE_SUPABASE_URL } = import.meta.env
  const functionUrl = `${VITE_SUPABASE_URL}/functions/v1/video-download`

  const res = await fetch(functionUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(req),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    const message =
      body.error ??
      (res.status === 429
        ? 'Too many requests. Please wait a moment and try again.'
        : 'Could not process this request. Please check the URL and try again.')
    return { state: 'error', progress: 0, message }
  }

  const data = await res.json().catch(() => ({}))
  return {
    state: data.state ?? 'complete',
    progress: data.progress ?? 100,
    message: data.message ?? 'Download ready.',
  }
}
