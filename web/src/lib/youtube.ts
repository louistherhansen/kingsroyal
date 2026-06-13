export function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url)
    const hostname = parsed.hostname.replace("www.", "")
    if (hostname === "youtu.be") {
      const id = parsed.pathname.slice(1)
      if (!id) return null
      return `https://www.youtube.com/embed/${id}`
    }
    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v")
        if (!id) return null
        return `https://www.youtube.com/embed/${id}`
      }
      if (parsed.pathname.startsWith("/embed/")) {
        return `https://www.youtube.com${parsed.pathname}`
      }
    }
    return null
  } catch {
    return null
  }
}
