import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://alginexa.com',
      lastModified: new Date(),
    },
  ]
}