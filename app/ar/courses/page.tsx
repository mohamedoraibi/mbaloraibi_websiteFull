import { CoursesPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { courseSchema, jsonLd } from '@/lib/schema'
export const generateMetadata=()=>metadata({locale:'ar',path:'/courses',title:'الدورات | محمد العريبي',description:'سجّل اهتمامك بدورات البرمجة وأدوات الذكاء الاصطناعي القادمة.'})
export default function Page(){return <><CoursesPage locale="ar"/>{jsonLd(courseSchema('ar'))}</>}
