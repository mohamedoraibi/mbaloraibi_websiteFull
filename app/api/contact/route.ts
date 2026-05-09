import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactSchema } from '@/lib/validation'
import { storeSubmission } from '@/lib/submissions'

export async function POST(request: Request) {
  const body = await request.json().catch(()=>null)
  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) return NextResponse.json({ ok:false, message:'Please check the form fields and try again.' }, { status:400 })
  if (parsed.data.website) return NextResponse.json({ ok:true, message:'Thanks. Your message was received.' })
  await storeSubmission('contact-submissions', parsed.data)
  if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({ from:'Website <onboarding@resend.dev>', to:process.env.CONTACT_EMAIL, subject:`New consultation inquiry from ${parsed.data.name}`, text:`Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nPhone: ${parsed.data.phone || '-'}\nService: ${parsed.data.service}\nBudget: ${parsed.data.budget || '-'}\nMessage:\n${parsed.data.message}` }).catch(()=>undefined)
  }
  return NextResponse.json({ ok:true, message:'Thanks. Your message was received.' })
}
