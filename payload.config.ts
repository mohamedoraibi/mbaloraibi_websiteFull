import { Users } from './payload/collections/Users'
import { Media } from './payload/collections/Media'
import { Services, Projects, Courses, Testimonials, FAQs, ContactSubmissions, CourseInterestLeads } from './payload/collections/Content'
import { SiteSettings, Navigation, Hero, About, SocialLinks, SEOSettings, ThemeSettings } from './payload/globals/SiteGlobals'

// Payload CMS configuration foundation. In production, install the Payload packages
// allowed by your registry policy and pass this structure to Payload's buildConfig
// with the PostgreSQL adapter using DATABASE_URI.
const payloadConfig = {
  admin: { user: Users.slug },
  collections: [Users, Media, Services, Projects, Courses, Testimonials, FAQs, ContactSubmissions, CourseInterestLeads],
  globals: [SiteSettings, Navigation, Hero, About, SocialLinks, SEOSettings, ThemeSettings],
  secret: process.env.PAYLOAD_SECRET,
  database: { adapter: 'postgres', uriEnv: 'DATABASE_URI' },
}

export default payloadConfig
