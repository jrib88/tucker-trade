import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID || import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder'
const dataset = import.meta.env.SANITY_STUDIO_DATASET || import.meta.env.PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'tucker-trade',
  title: 'Tucker Trade',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
})
