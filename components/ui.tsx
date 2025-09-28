import React from 'react'

export function Button({ asChild, className = '', children, ...props }: any) {
  const Tag = asChild ? 'a' : 'button'
  return (
    // @ts-ignore
    <Tag className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium transition-colors ${className}`} {...props}>
      {children}
    </Tag>
  )
}

export function Card({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-white border border-black/10 rounded-3xl ${className}`}>{children}</div>
}
export function CardHeader({ className = '', children }: any){ return <div className={`p-6 pb-0 ${className}`}>{children}</div> }
export function CardContent({ className = '', children }: any){ return <div className={`p-6 ${className}`}>{children}</div> }
export function CardFooter({ className = '', children }: any){ return <div className={`p-6 pt-0 ${className}`}>{children}</div> }
export function CardTitle({ className = '', children }: any){ return <h3 className={`font-semibold ${className}`}>{children}</h3> }
export function CardDescription({ className = '', children }: any){ return <p className={`text-black/70 text-sm ${className}`}>{children}</p> }

export function Badge({ className = '', children }: any){
  return <span className={`inline-flex items-center px-2.5 py-1 rounded-lg border border-black/10 text-xs ${className}`}>{children}</span>
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} className={`w-full rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[--green] ${props.className||''}`} />
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>){
  return <textarea {...props} className={`w-full rounded-xl border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[--green] ${props.className||''}`} />
}
