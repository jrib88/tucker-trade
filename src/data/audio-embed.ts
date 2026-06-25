const spotifyEmbedTypes = new Set(['track', 'album', 'playlist', 'artist', 'episode', 'show'])

export type AudioEmbed = {
  provider: 'Spotify' | 'Apple Music' | 'SoundCloud'
  src: string
  kind: 'single' | 'collection'
}

export function getAudioEmbed(url?: string): AudioEmbed | undefined {
  if (!url) return undefined

  let parsed: URL

  try {
    parsed = new URL(url)
  } catch {
    return undefined
  }

  const host = parsed.hostname.toLowerCase().replace(/^www\./, '')

  if (host === 'open.spotify.com') {
    const parts = parsed.pathname.split('/').filter(Boolean)
    const start = parts[0]?.startsWith('intl-') ? 1 : 0
    const type = parts[start]
    const id = parts[start + 1]

    if (!spotifyEmbedTypes.has(type) || !id) return undefined

    return {
      provider: 'Spotify',
      src: `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`,
      kind: type === 'track' ? 'single' : 'collection',
    }
  }

  if (host === 'music.apple.com' || host === 'itunes.apple.com') {
    return {
      provider: 'Apple Music',
      src: `https://embed.music.apple.com${parsed.pathname}${parsed.search}`,
      kind: parsed.pathname.includes('/song/') || parsed.searchParams.has('i') ? 'single' : 'collection',
    }
  }

  if (host === 'w.soundcloud.com' && parsed.pathname.startsWith('/player')) {
    return {
      provider: 'SoundCloud',
      src: parsed.toString(),
      kind: 'single',
    }
  }

  if (host === 'soundcloud.com' || host.endsWith('.soundcloud.com')) {
    const params = new URLSearchParams({
      url: parsed.toString(),
      color: '#ed2e59',
      auto_play: 'false',
      hide_related: 'true',
      show_comments: 'false',
      show_user: 'true',
      show_reposts: 'false',
      show_teaser: 'false',
      visual: 'false',
    })

    return {
      provider: 'SoundCloud',
      src: `https://w.soundcloud.com/player/?${params.toString()}`,
      kind: 'single',
    }
  }

  return undefined
}
