import { sanityClient } from 'sanity:client'
import { fallbackSiteData } from './fallback-content'
import { MERCH_QUERY, SHOWS_QUERY, SITE_SETTINGS_QUERY } from './queries'
import type { MerchItem, Show, SiteData } from './types'

const hasSanityConfig = Boolean(
  import.meta.env.PUBLIC_SANITY_PROJECT_ID && import.meta.env.PUBLIC_SANITY_DATASET,
)

export async function getSiteData(): Promise<SiteData> {
  if (!hasSanityConfig) return fallbackSiteData

  try {
    const [settings, shows, merch] = await Promise.all([
      sanityClient.fetch(SITE_SETTINGS_QUERY),
      sanityClient.fetch(SHOWS_QUERY),
      sanityClient.fetch(MERCH_QUERY),
    ])

    return {
      ...fallbackSiteData,
      ...settings,
      hero: { ...fallbackSiteData.hero, ...settings?.hero },
      bio: { ...fallbackSiteData.bio, ...settings?.bio },
      soundcloudEmbeds: settings?.soundcloudEmbeds ?? [],
      videos: settings?.videos ?? [],
      mediaItems: settings?.mediaItems ?? [],
      socialLinks: settings?.socialLinks ?? [],
      shows: (shows?.length ? shows : fallbackSiteData.shows) as Show[],
      merch: (merch?.length ? merch : fallbackSiteData.merch) as MerchItem[],
    }
  } catch {
    console.warn('Unable to load Sanity content; using the local design fallback.')
    return fallbackSiteData
  }
}
