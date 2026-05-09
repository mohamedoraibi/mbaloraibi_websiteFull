import { NextResponse } from 'next/server'
import { courseInterestSchema } from '@/lib/validation'
import { storeSubmission } from '@/lib/submissions'

export async function POST(request: Request) {
  const body = await request.json().catch(()=>null)
  const parsed = courseInterestSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok:false, message:'Please check the form fields and try again.' }, { status:400 })
  if (parsed.data.website) return NextResponse.json({ ok:true, message:'Thanks. Your interest was registered.' })
  await storeSubmission('course-interest-leads', parsed.data)
  return NextResponse.json({ ok:true, message:'Thanks. Your interest was registered.' })
}
