import { ContactPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/contact',title:'Contact | Mohammed Al Oraibi',description:'Contact Mohammed Al Oraibi for consulting, web development, automation, and AI workflow support.'})
export default function Page(){return <ContactPage locale="en"/>}
