import { ContactPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'ar',path:'/contact',title:'تواصل | محمد العريبي',description:'تواصل مع محمد العريبي للاستشارات التقنية وتطوير المواقع والأتمتة.'})
export default function Page(){return <ContactPage locale="ar"/>}
