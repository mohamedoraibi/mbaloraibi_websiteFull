import { ServiceDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { baseUrl } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/services/automation',title:'automation | Mohammed Al Oraibi',description:'Focused consulting and implementation support for automation.'})
export default function Page(){return <><ServiceDetailPage locale="en" slug="automation"/>{jsonLd(serviceSchema('automation','en') || {})}{jsonLd(breadcrumbSchema([{name:'Home',url:baseUrl()},{name:'Services',url:baseUrl()+'/services'},{name:'automation',url:baseUrl()+'/services/automation'}]))}</>}
