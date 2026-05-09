import type { MetadataRoute } from 'next'
import { baseUrl } from '@/lib/seo'

// AI/search crawler policy:
// OAI-SearchBot is for ChatGPT search visibility. GPTBot may be used for model training.
// PerplexityBot is for Perplexity search visibility. ClaudeBot, Claude-SearchBot, and Claude-User support Anthropic discovery and user retrieval.
// Search and indexing bots should be allowed if the goal is AI search visibility.
// Private, admin, API, preview, draft, login, and build asset routes must remain blocked.
export default function robots(): MetadataRoute.Robots {
  const blocked = ['/admin','/api','/_next','/private','/preview','/drafts','/login']
  return { rules:[{ userAgent:'*', allow:'/', disallow:blocked }, ...['Googlebot','Bingbot','OAI-SearchBot','ChatGPT-User','GPTBot','PerplexityBot','ClaudeBot','Claude-SearchBot','Claude-User'].map(userAgent=>({ userAgent, allow:'/', disallow:blocked }))], sitemap:`${baseUrl()}/sitemap.xml`, host:baseUrl() }
}
