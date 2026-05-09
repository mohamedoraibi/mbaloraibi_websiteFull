import { ServicesPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, professionalServiceSchema } from '@/lib/schema'
export const generateMetadata=()=>metadata({locale:'en',path:'/services',title:'Services | Mohammed Al Oraibi',description:'Technical consulting, web development, automation, AI workflows, personal brand websites, and training.'})
export default function Page(){return <><ServicesPage locale="en"/>{jsonLd(professionalServiceSchema('en'))}</>}
