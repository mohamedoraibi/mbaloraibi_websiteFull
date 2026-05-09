import { ServiceDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, serviceSchema } from '@/lib/schema'
export const generateMetadata=()=>metadata({locale:'ar',path:'/services/technical-consulting',title:'technical-consulting | محمد العريبي',description:'خدمة تقنية متخصصة من محمد العريبي.'})
export default function Page(){return <><ServiceDetailPage locale="ar" slug="technical-consulting"/>{jsonLd(serviceSchema('technical-consulting','ar') || {})}</>}
