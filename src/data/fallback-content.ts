import type { SiteData } from './types'

export const fallbackSiteData: SiteData = {
  artistName: 'Tucker Trade',
  siteTitle: 'Tucker Trade',
  siteDescription: 'Tucker Trade — DJ, producer, performer.',
  hero: {
    heading: 'DJ - Producer - Performer',
    intro: 'High-impact vocals, dance-floor anthems, and\nsleazy, skanky late-night club energy!',
  },
  bio: {
    heading: 'Loud.\nLyrical.\nAlive.',
    body: [
      {
        _key: 'fallback-bio',
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _key: 'fallback-bio-span',
            _type: 'span',
            marks: [],
            text: 'Crimson Thorns was born out of late nights, loud amps, and a refusal to play it safe. From those first sweaty gigs to full-throttle tours, they’ve stayed true to what matters — honesty, noise, and connection. Their music doesn’t just play — it hits, it heals, it hangs around.',
          },
        ],
      },
    ],
    stageHeading: 'From the\nstage.',
  },
  music: {
    links: [
      {
        label: 'Spotify',
        platform: 'spotify',
        url: 'https://open.spotify.com/artist/1vCZ3pfyE3EJ2nvdHndO2P?si=WqvnHiiPQC2sNB0-UYhgOA',
      },
      {
        label: 'iTunes / Apple Music',
        platform: 'apple',
        url: 'https://music.apple.com/ca/artist/tucker-trade/1800073687',
      },
    ],
    featuredTrack: {
      title: 'Petty Excuses',
      url: 'https://open.spotify.com/track/5VmvN87tauCdE1LxVrs4ZI',
    },
  },
  soundcloudEmbeds: [],
  videos: [],
  mediaItems: [],
  socialLinks: [],
  contactEmail: 'tunesbytuckertrade@gmail.com',
  contactHeading: 'Booking / Contact',
  showHeading: 'Upcoming',
  shows: [
    { date: '2030-04-04', venue: 'The Furnace', city: 'Blackridge City', ticketStatus: 'Sold out', showType: 'upcoming' },
    { date: '2030-04-06', venue: 'The Hollow Arena', city: 'Eastvale', ticketStatus: 'Sold out', showType: 'upcoming' },
    { date: '2030-04-09', venue: 'Ironworks Hall', city: 'Crestmont', ticketStatus: 'Limited tickets', showType: 'upcoming' },
    { date: '2030-04-11', venue: 'Echo Bay Pavilion', city: 'Ravenport', ticketStatus: 'VIP available', showType: 'upcoming' },
    { date: '2030-04-13', venue: 'The Spire Theatre', city: 'Northpoint', ticketStatus: 'Sold out', showType: 'upcoming' },
    { date: '2030-04-16', venue: 'Glasshouse Stage', city: 'Emberfall', ticketStatus: 'Limited tickets', showType: 'upcoming' },
    { date: '2030-04-18', venue: 'Violet Hill Arena', city: 'Kingsford', ticketStatus: 'VIP available', showType: 'upcoming' },
    { date: '2030-04-21', venue: 'Emberlight Ballroom', city: 'Westmoor', ticketStatus: 'Sold out', showType: 'upcoming' },
  ],
  merch: [
    { title: 'Crimson\nlogo tee', price: '$35', description: 'Classic black tee with the signature thorn emblem front and center. Worn, washed, and ready for the pit.', imageFallback: '/assets/merch-10-35bfe1b1f7.png', imageAlt: 'Crimson logo tee' },
    { title: 'Tour\nhoodie ’25', price: '$65', description: 'Soft, oversized hoodie featuring the New Voltage tour design and back print of all city stops.', imageFallback: '/assets/merch-11-04cedeafef.png', imageAlt: 'Tour hoodie' },
    { title: 'Crimson\nThorns sweater', price: '$55', description: 'Keep it loud and warm — embroidered logo with “Crimson Thorns” stitched across the chest.', imageFallback: '/assets/merch-14-993137bc3e.png', imageAlt: 'Crimson Thorns sweater' },
    { title: 'Limited\nedition vinyl', price: '$40', description: '180g red-and-black vinyl, with the new cover, lyric sheet and band signatures.', imageFallback: '/assets/merch-13-6fc86dddba.png', imageAlt: 'Limited edition vinyl' },
    { title: 'Backstage\npass keytag', price: '$12', description: 'Carry a piece of the tour with you — faux backstage laminate key tag with the New Voltage album cover.', imageFallback: '/assets/merch-16-26eda265e2.png', imageAlt: 'Backstage pass keytag' },
    { title: 'Voltage\nsticker set', price: '$5', description: 'Sticker set featuring the band’s new album cover.', imageFallback: '/assets/merch-17-4547ba414c.png', imageAlt: 'Voltage sticker set' },
    { title: 'Voltage\ntote bag', price: '$20', description: 'Heavy canvas tote for your records, snacks, or regrets.', imageFallback: '/assets/merch-18-30edb1c704.png', imageAlt: 'Voltage tote bag' },
    { title: 'Crimson\nThorns mug', price: '$10', description: 'Keep the new album cover close to your mornings.', imageFallback: '/assets/merch-19-461aba0866.png', imageAlt: 'Crimson Thorns mug' },
  ],
}
