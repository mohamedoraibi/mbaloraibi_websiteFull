import Link from 'next/link'
import { Code2, Linkedin, Github, Twitter } from 'lucide-react'
import { Locale, nav, site, localePath } from '@/lib/i18n'
import { ButtonLink } from '@/components/ui/button'
import { SocialLink } from './tracked-links'

export function Header({ locale }: { locale: Locale }) {
 const other = locale === 'ar' ? '/' : '/ar'
 return <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[#f7f5ef]/80 backdrop-blur-xl"><div className="container flex h-18 items-center justify-between py-3"><Link href={localePath(locale,'/')} className="flex items-center gap-3 font-black"><span className="grid size-10 place-items-center rounded-2xl bg-[var(--primary)] text-white"><Code2 size={20}/></span><span>{locale==='ar'?site.arabicName:site.name}</span></Link><nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">{nav[locale].map(i=><Link key={i.href} href={i.href} className="text-sm font-semibold text-gray-700 hover:text-black">{i.label}</Link>)}</nav><div className="flex items-center gap-2"><Link href={other} className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-sm font-bold">{locale==='ar'?'English':'العربية'}</Link><ButtonLink href={localePath(locale,'/contact')} className="hidden sm:inline-flex">{locale==='ar'?'احجز استشارة':'Book'}</ButtonLink></div></div></header>
}

export function Footer({ locale }: { locale: Locale }) {
 const t = locale==='ar' ? {cta:'جاهز لتحويل الفكرة إلى نظام عملي؟',contact:'تواصل الآن',links:'روابط الموقع',social:'الروابط الاجتماعية',privacy:'الخصوصية'} : {cta:'Ready to turn an idea into a practical system?',contact:'Contact now',links:'Sitemap',social:'Social profiles',privacy:'Privacy'}
 return <footer className="border-t border-[var(--border)] bg-[#111827] text-white"><div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_.8fr_.8fr]"><div><p className="eyebrow text-[#e5b36e]">{locale==='ar'?site.arabicName:site.name}</p><h2 className="mt-3 max-w-xl text-3xl font-black">{t.cta}</h2><ButtonLink href={localePath(locale,'/contact')} className="mt-6 bg-white text-[#111827] hover:shadow-none">{t.contact}</ButtonLink><p className="mt-5 text-sm text-gray-300">{site.email} · {site.phone}</p></div><div><h3 className="font-bold">{t.links}</h3><div className="mt-4 grid gap-3 text-sm text-gray-300">{nav[locale].map(i=><Link key={i.href} href={i.href}>{i.label}</Link>)}<Link href={localePath(locale,'/privacy')}>{t.privacy}</Link><Link href="/llms.txt">llms.txt</Link></div></div><div><h3 className="font-bold">{t.social}</h3><div className="mt-4 flex gap-3">{site.socials.map(s=><SocialLink key={s.label} href={s.url} label={s.label}>{s.label==='LinkedIn'?<Linkedin/>:s.label==='GitHub'?<Github/>:<Twitter/>}</SocialLink>)}</div></div></div><div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">© {new Date().getFullYear()} {site.name}. All rights reserved.</div></footer>
}
