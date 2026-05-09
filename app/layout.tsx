import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { AnalyticsLayer } from '@/components/site/analytics'
import { ConsentBanner } from '@/components/site/consent-banner'
import { baseUrl } from '@/lib/seo'
const geistSans = Geist({ variable:'--font-geist-sans', subsets:['latin'] })
const geistMono = Geist_Mono({ variable:'--font-geist-mono', subsets:['latin'] })
export const metadata: Metadata = { metadataBase: new URL(baseUrl()), title:{default:'Mohammed Al Oraibi', template:'%s | Mohammed Al Oraibi'} }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>{children}<AnalyticsLayer/><ConsentBanner/></body></html> }
