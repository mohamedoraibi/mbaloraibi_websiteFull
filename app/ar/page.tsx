import { Header, Footer } from '@/components/site/layout'
import { HomePage } from '@/components/site/home'
import { metadata } from '@/lib/seo'
import { faqSchema, jsonLd, personSchema, professionalServiceSchema, websiteSchema } from '@/lib/schema'
export const generateMetadata = () => metadata({ locale:'ar', path:'/', title:'محمد العريبي | مهندس برمجيات ومستشار تقني', description:'استشارات تقنية، تطوير مواقع، أتمتة أعمال، تدفقات ذكاء اصطناعي، وتعليم تقني مبسط.' })
export default function Page(){ return <div dir="rtl" lang="ar"><Header locale="ar"/><div id="main"><HomePage locale="ar"/></div>{jsonLd(personSchema())}{jsonLd(websiteSchema('ar'))}{jsonLd(professionalServiceSchema('ar'))}{jsonLd(faqSchema('ar'))}<Footer locale="ar"/></div> }
