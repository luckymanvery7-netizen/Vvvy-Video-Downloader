/**
 * Reads text from the clipboard. Returns null if clipboard access is
 * unavailable or denied (e.g. non-secure context, missing permission).
 */
export async function readClipboard(): Promise<string | null> {
  try {
    if (!navigator.clipboard?.readText) return null
    return await navigator.clipboard.readText()
  } catch {
    return null
  }
}
