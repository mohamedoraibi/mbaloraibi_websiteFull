'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'
import type { Locale } from '@/lib/i18n'
export function CourseInterestForm({ locale }: { locale: Locale }) {
 const [status,setStatus]=useState('idle'); const [msg,setMsg]=useState(''); const ar=locale==='ar'
 async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setStatus('loading'); const data=Object.fromEntries(new FormData(e.currentTarget)); data.language=locale; const res=await fetch('/api/course-interest',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(data)}); const json=await res.json(); setMsg(json.message); setStatus(res.ok?'success':'error'); if(res.ok){trackEvent('course_interest_submit'); e.currentTarget.reset()} }
 return <form onSubmit={submit} className="card grid gap-4 p-5 md:p-7"><input className="sr-only" name="website" tabIndex={-1}/><label>{ar?'الاسم':'Name'}<input name="name" required/></label><label>{ar?'البريد الإلكتروني':'Email'}<input name="email" type="email" required/></label><label>{ar?'الدورة محل الاهتمام':'Course interest'}<select name="course" required><option value="">{ar?'اختر دورة':'Choose a course'}</option><option>Programming Foundations for Beginners</option><option>Practical AI Tools for Productivity</option></select></label><label>{ar?'رسالة اختيارية':'Optional message'}<textarea name="message" rows={4}/></label><Button disabled={status==='loading'}>{status==='loading'?(ar?'جار التسجيل':'Submitting'):(ar?'سجّل اهتمامك':'Register interest')}</Button>{msg?<p className={status==='error'?'text-red-700':'text-green-700'}>{msg}</p>:null}</form>
}
