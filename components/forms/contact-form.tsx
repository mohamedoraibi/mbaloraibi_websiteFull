'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'
import type { Locale } from '@/lib/i18n'
export function ContactForm({ locale }: { locale: Locale }) {
 const [status,setStatus]=useState<'idle'|'loading'|'success'|'error'>('idle'); const [msg,setMsg]=useState('')
 const ar=locale==='ar'
 async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setStatus('loading'); const fd=new FormData(e.currentTarget); const data=Object.fromEntries(fd); data.language=locale; const res=await fetch('/api/contact',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)}); const json=await res.json(); setMsg(json.message); setStatus(res.ok?'success':'error'); if(res.ok) { trackEvent('contact_form_submit'); e.currentTarget.reset() } }
 return <form onSubmit={submit} className="card grid gap-4 p-5 md:p-7"><input className="sr-only" name="website" tabIndex={-1} autoComplete="off" /><div className="grid gap-4 md:grid-cols-2"><Field label={ar?'الاسم':'Name'} name="name" required/><Field label={ar?'البريد الإلكتروني':'Email'} name="email" type="email" required/><Field label={ar?'الهاتف اختياري':'Phone optional'} name="phone"/><label>{ar?'الخدمة المطلوبة':'Service interest'}<select name="service" required><option value="">{ar?'اختر خدمة':'Choose a service'}</option><option>Technical Consulting</option><option>Web Development</option><option>Automation</option><option>AI Workflows</option><option>Training</option></select></label><Field label={ar?'نطاق الميزانية اختياري':'Budget range optional'} name="budget"/></div><label>{ar?'الرسالة':'Message'}<textarea name="message" required minLength={10} rows={5} /></label><Button disabled={status==='loading'}>{status==='loading'?(ar?'جار الإرسال':'Sending'):(ar?'إرسال الرسالة':'Send message')}</Button>{msg?<p className={status==='error'?'text-red-700':'text-green-700'}>{msg}</p>:null}</form>
}
function Field(props: React.InputHTMLAttributes<HTMLInputElement> & { label:string }) { const {label,...rest}=props; return <label>{label}<input {...rest}/></label> }
