import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'
export function ButtonLink({ className, variant='primary', ...props }: ComponentProps<typeof Link> & { variant?: 'primary'|'secondary' }) { return <Link className={cn('btn', variant==='primary'?'btn-primary':'btn-secondary', className)} {...props} /> }
export function Button({ className, variant='primary', children, ...props }: ComponentProps<'button'> & { variant?: 'primary'|'secondary'; children: ReactNode }) { return <button className={cn('btn', variant==='primary'?'btn-primary':'btn-secondary', className)} {...props}>{children}</button> }
