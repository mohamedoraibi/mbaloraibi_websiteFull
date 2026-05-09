import { PrivacyPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'ar',path:'/privacy',title:'سياسة الخصوصية | محمد العريبي',description:'سياسة الخصوصية لموقع محمد العريبي ونماذج التواصل والتحليلات.'})
export default function Page(){return <PrivacyPage locale="ar"/>}
