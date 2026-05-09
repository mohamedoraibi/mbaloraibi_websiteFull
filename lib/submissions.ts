import { promises as fs } from 'fs'
import path from 'path'
async function append(name: string, data: unknown) { const dir = path.join(process.cwd(), '.data'); await fs.mkdir(dir,{recursive:true}); await fs.appendFile(path.join(dir, `${name}.jsonl`), JSON.stringify({at:new Date().toISOString(), data})+'\n') }
export async function storeSubmission(collection: 'contact-submissions'|'course-interest-leads', data: unknown) { await append(collection, data) }
