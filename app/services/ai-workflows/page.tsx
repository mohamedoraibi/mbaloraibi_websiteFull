import { ServiceDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, serviceSchema, breadcrumbSchema } from '@/lib/schema'
import { baseUrl } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/services/ai-workflows',title:'ai-workflows | Mohammed Al Oraibi',description:'Focused consulting and implementation support for ai-workflows.'})
export default function Page(){return <><ServiceDetailPage locale="en" slug="ai-workflows"/>{jsonLd(serviceSchema('ai-workflows','en') || {})}{jsonLd(breadcrumbSchema([{name:'Home',url:baseUrl()},{name:'Services',url:baseUrl()+'/services'},{name:'ai-workflows',url:baseUrl()+'/services/ai-workflows'}]))}</>}
