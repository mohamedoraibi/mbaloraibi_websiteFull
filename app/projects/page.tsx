import { ProjectsPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'en',path:'/projects',title:'Projects and Case Studies | Mohammed Al Oraibi',description:'Case studies covering web development, automation, AI workflows, and digital solution planning.'})
export default function Page(){return <ProjectsPage locale="en"/>}
