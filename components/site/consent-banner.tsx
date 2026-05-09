'use client'
import { useEffect, useState } from 'react'
export function ConsentBanner() {
  const [show,setShow]=useState(false)
  useEffect(()=>{ if ((process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_CLARITY_ID) && localStorage.getItem('analytics-notice')!=='seen') setShow(true) },[])
  if(!show) return null
  return <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-[var(--border)] bg-white/95 p-4 shadow-2xl backdrop-blur"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm muted">We use privacy-friendly analytics to improve performance and content. No unnecessary personal data is collected.</p><button className="btn btn-primary px-4 py-2 text-sm" onClick={()=>{localStorage.setItem('analytics-notice','seen');setShow(false)}}>Got it</button></div></div>
}
