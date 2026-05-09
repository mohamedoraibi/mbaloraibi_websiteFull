import type { Metadata } from 'next'
import { Locale, localePath, site } from './i18n'

export const baseUrl = () => (process.env.NEXT_PUBLIC_SITE_URL || 'https://mohammedaloraibi.com').replace(/\/$/, '')

export function metadata({ locale, path='/', title, description }: { locale: Locale; path?: string; title: string; description: string }): Metadata {
  const url = `${baseUrl()}${localePath(locale, path)}`
  const en = `${baseUrl()}${path}`
  const ar = `${baseUrl()}${localePath('ar', path)}`
  return {
    title,
    description,
    metadataBase: new URL(baseUrl()),
    alternates: { canonical: url, languages: { en, ar, 'x-default': en } },
    openGraph: { title, description, url, siteName: site.name, type: 'website', locale: locale === 'ar' ? 'ar_AR' : 'en_US' },
    twitter: { card: 'summary_large_image', title, description },
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION, other: process.env.BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } : undefined },
  }
}
