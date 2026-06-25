export type PortableTextValue = Array<Record<string, unknown>>

export type SanityImage = {
  asset?: {
    _id?: string
    url?: string
    metadata?: {
      dimensions?: {
        width?: number
        height?: number
      }
    }
  }
  alt?: string
  crop?: Record<string, number>
  hotspot?: Record<string, number>
}

export type Link = {
  _key?: string
  label: string
  url: string
  platform?: string
}

export type Show = {
  _id?: string
  title?: string
  date: string
  venue: string
  city?: string
  ticketStatus?: string
  ticketUrl?: string
  showType?: 'upcoming' | 'past'
}

export type MerchItem = {
  _id?: string
  title: string
  price?: string
  description?: string
  image?: SanityImage
  imageAlt?: string
  imageFallback?: string
  productUrl?: string
}

export type Embed = {
  _key?: string
  title: string
  embedUrl: string
  description?: string
}

export type AudioTrack = {
  _key?: string
  title?: string
  url: string
  description?: string
}

export type Video = {
  _key?: string
  title: string
  url: string
  description?: string
}

export type MediaItem = {
  _key?: string
  title?: string
  caption?: string
  image?: SanityImage
  link?: Link
}

export type SiteData = {
  artistName: string
  siteTitle: string
  siteDescription: string
  hero: {
    heading: string
    intro: string
    backgroundImage?: SanityImage
    portraitImage?: SanityImage
    performanceImage?: SanityImage
    recordImages?: SanityImage[]
  }
  bio: {
    heading: string
    body: PortableTextValue
    featureImage?: SanityImage
    stageHeading: string
    stageImage?: SanityImage
  }
  music: {
    links: Link[]
    featuredTrack?: AudioTrack
  }
  soundcloudEmbeds: Embed[]
  videos: Video[]
  mediaItems: MediaItem[]
  socialLinks: Link[]
  contactEmail?: string
  contactHeading?: string
  showHeading: string
  shows: Show[]
  merch: MerchItem[]
}
