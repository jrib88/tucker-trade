import { defineField, defineType } from 'sanity'
import { BasketIcon } from '@sanity/icons'

export const merchItem = defineType({
  name: 'merchItem',
  title: 'Merch item',
  type: 'document',
  icon: BasketIcon,
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'price', type: 'string', description: 'For example: $35' }),
    defineField({ name: 'description', type: 'text', rows: 4 }),
    defineField({ name: 'image', type: 'accessibleImage', validation: (rule) => rule.required() }),
    defineField({
      name: 'productUrl',
      title: 'Product URL',
      type: 'url',
      validation: (rule) => rule.uri({ scheme: ['http', 'https'] }),
    }),
    defineField({ name: 'sortOrder', title: 'Sort order', type: 'number', initialValue: 100 }),
  ],
  preview: { select: { title: 'title', subtitle: 'price', media: 'image' } },
})
