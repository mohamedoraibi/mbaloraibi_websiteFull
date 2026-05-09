import { ProjectDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=async({params}:{params:Promise<{slug:string}>})=>metadata({locale:'ar',path:`/projects/${(await params).slug}`,title:'دراسة حالة | محمد العريبي',description:'دراسة حالة تشمل المشكلة والحل والتقنيات والنتيجة.'})
export default async function Page({params}:{params:Promise<{slug:string}>}){return <ProjectDetailPage locale="ar" slug={(await params).slug}/>}
