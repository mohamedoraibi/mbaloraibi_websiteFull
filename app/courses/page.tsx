import { CoursesPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
import { courseSchema, jsonLd } from '@/lib/schema'
export const generateMetadata=()=>metadata({locale:'en',path:'/courses',title:'Courses | Mohammed Al Oraibi',description:'Register interest in upcoming beginner-friendly programming and AI productivity courses.'})
export default function Page(){return <><CoursesPage locale="en"/>{jsonLd(courseSchema('en'))}</>}
