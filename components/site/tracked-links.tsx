'use client'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'
export function BookingLink({ href, children, className }: { href: string; children: ReactNode; className?: string }) { return <a href={href} className={className} target="_blank" rel="noreferrer" onClick={()=>trackEvent('consultation_booking_click')}>{children}</a> }
export function ServiceLink({ href, service, children, className }: { href: string; service: string; children: ReactNode; className?: string }) { return <Link href={href} className={className} onClick={()=>trackEvent('service_cta_click',{service})}>{children}</Link> }
export function ProjectTrack({ slug }: { slug: string }) { if (typeof window !== 'undefined') trackEvent('project_view',{slug}); return null }
export function SocialLink({ href, label, children }: { href: string; label: string; children: ReactNode }) { return <a aria-label={label} href={href} target="_blank" rel="noreferrer" className="grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={()=>trackEvent('outbound_social_click',{label})}>{children}</a> }
