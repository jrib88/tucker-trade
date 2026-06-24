import { defineConfig } from 'astro/config'
import sanity from '@sanity/astro'
import { loadEnv } from 'vite'

const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '')

export default defineConfig({
  integrations: [
    sanity({
      // Placeholder values let the design build before a Sanity project is connected.
      // The frontend deliberately skips CMS requests until both variables are supplied.
      projectId: env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
      dataset: env.PUBLIC_SANITY_DATASET || 'production',
      apiVersion: env.PUBLIC_SANITY_API_VERSION || '2026-06-23',
      useCdn: true,
    }),
  ],
})
