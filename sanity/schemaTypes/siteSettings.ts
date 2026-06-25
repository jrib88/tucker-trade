import { defineArrayMember, defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'
import { bioBody } from './shared'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  initialValue: {
    artistName: 'Tucker Trade',
    siteTitle: 'Tucker Trade',
    showHeading: 'Upcoming',
    contactHeading: 'Booking / Contact',
    contactEmail: 'tunesbytuckertrade@gmail.com',
  },
  fields: [
    defineField({ name: 'artistName', title: 'Artist name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'siteTitle', title: 'Browser title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'siteDescription', title: 'Search description', type: 'text', rows: 3, validation: (rule) => rule.max(160).warning('Aim for 160 characters or fewer.') }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (rule) => rule.required() }),
        defineField({ name: 'intro', title: 'Intro', type: 'text', rows: 3, validation: (rule) => rule.required() }),
        defineField({ name: 'backgroundImage', title: 'Hero background image', type: 'accessibleImage' }),
        defineField({ name: 'portraitImage', title: 'Artist cutout / portrait image', type: 'accessibleImage' }),
        defineField({ name: 'performanceImage', title: 'Performance image', type: 'accessibleImage' }),
        defineField({
          name: 'recordImages',
          title: 'Record images',
          type: 'array',
          validation: (rule) => rule.max(2),
          of: [{ type: 'accessibleImage' }],
        }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Artist bio',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', description: 'Use line breaks to keep the stacked display heading.', validation: (rule) => rule.required() }),
        bioBody,
        defineField({ name: 'featureImage', title: 'Feature image', type: 'accessibleImage' }),
        defineField({ name: 'stageHeading', title: 'Stage image heading', type: 'string', description: 'Use line breaks to keep the stacked display heading.', validation: (rule) => rule.required() }),
        defineField({ name: 'stageImage', title: 'Stage image', type: 'accessibleImage' }),
      ],
    }),
    defineField({
      name: 'music',
      title: 'Music',
      type: 'object',
      fields: [
        defineField({
          name: 'links',
          title: 'Streaming links',
          description: 'Add the Spotify and Apple Music / iTunes links shown in the left column.',
          type: 'array',
          of: [defineArrayMember({ type: 'socialLink' })],
          validation: (rule) => rule.max(4),
        }),
        defineField({
          name: 'featuredTrack',
          title: 'Featured audio player',
          description: 'Paste a Spotify, Apple Music, iTunes, or SoundCloud song URL for the embedded player.',
          type: 'audioTrack',
        }),
      ],
    }),
    defineField({
      name: 'soundcloudEmbeds',
      title: 'SoundCloud tracks and playlists (Deprecated)',
      type: 'array',
      deprecated: {
        reason: 'Use Music > Featured audio player for Spotify, Apple Music, iTunes, or SoundCloud URLs.',
      },
      readOnly: true,
      hidden: ({ value }) => value === undefined,
      initialValue: undefined,
      of: [defineArrayMember({ type: 'soundcloudEmbed' })],
    }),
    defineField({
      name: 'videos',
      title: 'YouTube performance videos',
      type: 'array',
      of: [{ type: 'youtubeVideo' }],
    }),
    defineField({
      name: 'mediaItems',
      title: 'Press and media',
      type: 'array',
      of: [{ type: 'mediaItem' }],
    }),
    defineField({ name: 'showHeading', title: 'Upcoming shows heading', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'contactHeading', title: 'Contact section heading', type: 'string', initialValue: 'Booking / Contact' }),
    defineField({ name: 'contactEmail', title: 'Booking / contact email', type: 'string', initialValue: 'tunesbytuckertrade@gmail.com', validation: (rule) => rule.email() }),
    defineField({
      name: 'socialLinks',
      title: 'Social and contact links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
})
