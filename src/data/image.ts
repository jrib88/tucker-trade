import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from './types'

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET
const builder = projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null

export function imageUrl(image?: SanityImage, width?: number, height?: number) {
  if (!image?.asset?.url) return undefined
  if (!builder) return image.asset.url

  let url = builder.image(image).auto('format')
  if (width) url = url.width(width)
  if (height) url = url.height(height).fit('crop')
  return url.url()
}
