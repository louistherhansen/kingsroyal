export function getGoogleMapsEmbedUrl(url: string): string | null {
  try {
    const coordMatch = url.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/)
    if (coordMatch) {
      const [, lat, lng] = coordMatch
      return `https://maps.google.com/maps?q=${lat},${lng}&hl=id&z=17&output=embed`
    }

    const atMatch = url.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/)
    if (atMatch) {
      const [, lat, lng] = atMatch
      return `https://maps.google.com/maps?q=${lat},${lng}&hl=id&z=17&output=embed`
    }

    return null
  } catch {
    return null
  }
}
