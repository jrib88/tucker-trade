import { BasketIcon, CalendarIcon, CogIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Tucker Trade')
    .items([
      S.listItem()
        .title('Site settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Site settings')),
      S.divider(),
      S.documentTypeListItem('show').title('Shows').icon(CalendarIcon),
      S.documentTypeListItem('merchItem').title('Merch').icon(BasketIcon),
    ])
