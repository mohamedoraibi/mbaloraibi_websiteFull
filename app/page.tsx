import { Header, Footer } from '@/components/site/layout'
import { HomePage } from '@/components/site/home'
import { metadata } from '@/lib/seo'
import { faqSchema, jsonLd, personSchema, professionalServiceSchema, websiteSchema } from '@/lib/schema'
export const generateMetadata = () => metadata({ locale:'en', path:'/', title:'Mohammed Al Oraibi | Software Engineer & Technical Consultant', description:'Premium technical consulting, web development, automation, AI workflows, and beginner-friendly technology education.' })
export default function Page(){ return <><Header locale="en"/><div id="main"><HomePage locale="en"/></div>{jsonLd(personSchema())}{jsonLd(websiteSchema('en'))}{jsonLd(professionalServiceSchema('en'))}{jsonLd(faqSchema('en'))}<Footer locale="en"/></> }
