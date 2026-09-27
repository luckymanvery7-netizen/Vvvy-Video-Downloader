export type VideoQuality = '360p' | '720p' | '1080p'

export interface DownloadRequest {
  url: string
  quality: VideoQuality
}

export interface DownloadStatus {
  state: 'idle' | 'resolving' | 'preparing' | 'downloading' | 'complete' | 'error'
  progress: number
  message: string
}

export const QUALITY_OPTIONS: { value: VideoQuality; label: string; sub: string }[] = [
  { value: '360p', label: '360p', sub: 'Standard' },
  { value: '720p', label: '720p', sub: 'HD' },
  { value: '1080p', label: '1080p', sub: 'Full HD' },
]

export const YOUTUBE_URL_REGEX =
  /^(https?:\/\/)?(www\.youtube\.com\/watch\?v=|youtu\.be\/|www\.youtube\.com\/shorts\/)[\w-]{11}/
