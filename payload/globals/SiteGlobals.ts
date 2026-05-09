import type { GlobalConfig } from '../types'
const adminOnly = ({ req }: { req: { user?: unknown } }) => Boolean(req.user)
export const SiteSettings: GlobalConfig = { slug:'site-settings', access:{read:()=>true,update:adminOnly}, fields:[{name:'siteName',type:'text'},{name:'email',type:'email'},{name:'phone',type:'text'},{name:'calLink',type:'text'}] }
export const Navigation: GlobalConfig = { slug:'navigation', access:{read:()=>true,update:adminOnly}, fields:[{name:'items',type:'array',fields:[{name:'label',type:'text'},{name:'href',type:'text'}]}] }
export const Hero: GlobalConfig = { slug:'hero', access:{read:()=>true,update:adminOnly}, fields:[{name:'headlineEn',type:'textarea'},{name:'headlineAr',type:'textarea'},{name:'subheadlineEn',type:'textarea'},{name:'subheadlineAr',type:'textarea'}] }
export const About: GlobalConfig = { slug:'about', access:{read:()=>true,update:adminOnly}, fields:[{name:'bodyEn',type:'textarea'},{name:'bodyAr',type:'textarea'}] }
export const SocialLinks: GlobalConfig = { slug:'social-links', access:{read:()=>true,update:adminOnly}, fields:[{name:'links',type:'array',fields:[{name:'label',type:'text'},{name:'url',type:'text'}]}] }
export const SEOSettings: GlobalConfig = { slug:'seo-settings', access:{read:()=>true,update:adminOnly}, fields:[{name:'defaultTitle',type:'text'},{name:'defaultDescription',type:'textarea'},{name:'sameAs',type:'array',fields:[{name:'url',type:'text'}]}] }
export const ThemeSettings: GlobalConfig = { slug:'theme-settings', access:{read:()=>true,update:adminOnly}, fields:[{name:'primaryColor',type:'text'},{name:'accentColor',type:'text'}] }
