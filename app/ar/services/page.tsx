import { ServicesPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { jsonLd, professionalServiceSchema } from '@/lib/schema'
export const generateMetadata=()=>metadata({locale:'ar',path:'/services',title:'الخدمات | محمد العريبي',description:'استشارات تقنية وتطوير مواقع وأتمتة وتدفقات ذكاء اصطناعي وتدريب.'})
export default function Page(){return <><ServicesPage locale="ar"/>{jsonLd(professionalServiceSchema('ar'))}</>}
