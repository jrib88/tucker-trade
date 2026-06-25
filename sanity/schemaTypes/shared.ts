import { defineArrayMember, defineField, defineType } from 'sanity'
import { ImageIcon, LinkIcon, PlayIcon } from '@sanity/icons'

function validateAudioUrl(value?: string) {
  if (!value) return true

  try {
    const host = new URL(value).hostname.toLowerCase().replace(/^www\./, '')
    const isSupportedHost = host === 'open.spotify.com'
      || host === 'music.apple.com'
      || host === 'itunes.apple.com'
      || host === 'soundcloud.com'
      || host.endsWith('.soundcloud.com')

    return isSupportedHost || 'Use a Spotify, Apple Music, iTunes, or SoundCloud URL.'
  } catch {
    return 'Enter a valid audio URL.'
  }
}

export const accessibleImage = defineType({
  name: 'accessibleImage',
  title: 'Image',
  type: 'image',
  icon: ImageIcon,
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      validation: (rule) => rule.required().warning('Describe the image for people using screen readers.'),
    }),
  ],
})

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social or contact link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'platform', type: 'string', description: 'Optional, for internal organization in the Studio.' }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: { select: { title: 'label', subtitle: 'url' } },
})

export const soundcloudEmbed = defineType({
  name: 'soundcloudEmbed',
  title: 'SoundCloud embed',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({
      name: 'embedUrl',
      title: 'SoundCloud player URL',
      description: 'Paste the src URL from SoundCloud’s embed code (it starts with https://w.soundcloud.com/player/).',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['https'] }),
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'embedUrl' } },
})

export const audioTrack = defineType({
  name: 'audioTrack',
  title: 'Audio track',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({
      name: 'url',
      title: 'Audio URL',
      description: 'Paste a Spotify, Apple Music, iTunes, or SoundCloud URL.',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['https'] }).custom(validateAudioUrl),
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'url' } },
})

export const youtubeVideo = defineType({
  name: 'youtubeVideo',
  title: 'YouTube performance video',
  type: 'object',
  icon: PlayIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({
      name: 'url',
      title: 'YouTube URL',
      description: 'Paste a youtube.com or youtu.be video URL.',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['https'] }),
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'url' } },
})

export const mediaItem = defineType({
  name: 'mediaItem',
  title: 'Press or media item',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'caption', type: 'text', rows: 3 }),
    defineField({ name: 'image', type: 'accessibleImage', validation: (rule) => rule.required() }),
    defineField({ name: 'link', type: 'socialLink', title: 'Related link' }),
  ],
  preview: { select: { title: 'title', subtitle: 'caption', media: 'image' } },
})

export const bioBody = defineField({
  name: 'body',
  title: 'Bio copy',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    }),
  ],
  validation: (rule) => rule.required(),
})
