import { ProjectDetailPage } from '@/components/site/pages'
import { metadata } from '@/lib/seo'
export const generateMetadata=async({params}:{params:Promise<{slug:string}>})=>metadata({locale:'en',path:`/projects/${(await params).slug}`,title:'Case Study | Mohammed Al Oraibi',description:'Project case study with problem, solution, technologies, and result.'})
export default async function Page({params}:{params:Promise<{slug:string}>}){return <ProjectDetailPage locale="en" slug={(await params).slug}/>}
