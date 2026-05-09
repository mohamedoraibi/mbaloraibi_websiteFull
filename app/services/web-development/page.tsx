import { ServiceDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { baseUrl } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/services/web-development',title:'web-development | Mohammed Al Oraibi',description:'Focused consulting and implementation support for web-development.'})
export default function Page(){return <><ServiceDetailPage locale="en" slug="web-development"/>{jsonLd(serviceSchema('web-development','en') || {})}{jsonLd(breadcrumbSchema([{name:'Home',url:baseUrl()},{name:'Services',url:baseUrl()+'/services'},{name:'web-development',url:baseUrl()+'/services/web-development'}]))}</>}
