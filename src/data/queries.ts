import { defineQuery } from 'groq'

const imageFields = /* groq */ `
  asset->{
    _id,
    url,
    metadata { dimensions { width, height } }
  },
  alt,
  crop,
  hotspot
`

export const SITE_SETTINGS_QUERY = defineQuery(/* groq */ `
  *[_id == "siteSettings"][0]{
    artistName,
    siteTitle,
    siteDescription,
    hero {
      heading,
      intro,
      backgroundImage { ${imageFields} },
      portraitImage { ${imageFields} },
      performanceImage { ${imageFields} },
      recordImages[] { ${imageFields} }
    },
    bio {
      heading,
      body,
      featureImage { ${imageFields} },
      stageHeading,
      stageImage { ${imageFields} }
    },
    music {
      links[] { _key, label, url, platform },
      featuredTrack { _key, title, url, description }
    },
    soundcloudEmbeds[] { _key, title, embedUrl, description },
    videos[] { _key, title, url, description },
    mediaItems[] {
      _key,
      title,
      caption,
      image { ${imageFields} },
      link { label, url, platform }
    },
    socialLinks[] { _key, label, url, platform },
    contactEmail,
    contactHeading,
    showHeading
  }
`)

export const SHOWS_QUERY = defineQuery(/* groq */ `
  *[_type == "show"] | order(date asc) {
    _id,
    title,
    date,
    venue,
    city,
    ticketStatus,
    ticketUrl,
    showType
  }
`)

export const MERCH_QUERY = defineQuery(/* groq */ `
  *[_type == "merchItem"] | order(sortOrder asc, _createdAt asc) {
    _id,
    title,
    price,
    description,
    image { ${imageFields} },
    productUrl
  }
`)
