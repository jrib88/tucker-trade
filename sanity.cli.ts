import { defineCliConfig } from 'sanity/cli'

const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {}

export default defineCliConfig({
  api: {
    projectId: env.SANITY_STUDIO_PROJECT_ID || env.PUBLIC_SANITY_PROJECT_ID || 'placeholder',
    dataset: env.SANITY_STUDIO_DATASET || env.PUBLIC_SANITY_DATASET || 'production',
  },
})
