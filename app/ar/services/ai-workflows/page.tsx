import { ServiceDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, serviceSchema } from '@/lib/schema'
export const generateMetadata=()=>metadata({locale:'ar',path:'/services/ai-workflows',title:'ai-workflows | محمد العريبي',description:'خدمة تقنية متخصصة من محمد العريبي.'})
export default function Page(){return <><ServiceDetailPage locale="ar" slug="ai-workflows"/>{jsonLd(serviceSchema('ai-workflows','ar') || {})}</>}
