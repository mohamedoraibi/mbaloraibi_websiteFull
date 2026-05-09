import { ServiceDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { baseUrl } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/services/technical-consulting',title:'technical-consulting | Mohammed Al Oraibi',description:'Focused consulting and implementation support for technical-consulting.'})
export default function Page(){return <><ServiceDetailPage locale="en" slug="technical-consulting"/>{jsonLd(serviceSchema('technical-consulting','en') || {})}{jsonLd(breadcrumbSchema([{name:'Home',url:baseUrl()},{name:'Services',url:baseUrl()+'/services'},{name:'technical-consulting',url:baseUrl()+'/services/technical-consulting'}]))}</>}
