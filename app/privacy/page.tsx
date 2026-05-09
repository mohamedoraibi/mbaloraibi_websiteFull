import { PrivacyPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/privacy',title:'Privacy Policy | Mohammed Al Oraibi',description:'Privacy policy for Mohammed Al Oraibi website, contact forms, analytics, and course interest forms.'})
export default function Page(){return <PrivacyPage locale="en"/>}
