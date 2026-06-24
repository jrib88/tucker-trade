import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const show = defineType({
  name: 'show',
  title: 'Show',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({ name: 'title', title: 'Event title', type: 'string' }),
    defineField({ name: 'date', type: 'date', validation: (rule) => rule.required() }),
    defineField({ name: 'venue', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'city', title: 'City / location', type: 'string' }),
    defineField({
      name: 'showType',
      title: 'Show type',
      type: 'string',
      initialValue: 'upcoming',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'ticketStatus', title: 'Ticket status / callout', type: 'string', description: 'For example: Sold out, Limited tickets, or VIP available.' }),
    defineField({ name: 'ticketUrl', title: 'Ticket URL', type: 'url', validation: (rule) => rule.uri({ scheme: ['http', 'https'] }) }),
  ],
  preview: {
    select: { title: 'venue', subtitle: 'date', city: 'city' },
    prepare: ({ title, subtitle, city }) => ({ title, subtitle: [subtitle, city].filter(Boolean).join(' — ') }),
  },
})
