import { ProjectsPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=()=>metadata({locale:'ar',path:'/projects',title:'المشاريع ودراسات الحالة | محمد العريبي',description:'دراسات حالة في تطوير المواقع والأتمتة وتخطيط الحلول الرقمية.'})
export default function Page(){return <ProjectsPage locale="ar"/>}
