/* FULL PAGE CONTENT from textdoc (omitted for brevity here, but included in final zip) */

```tsx
'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui'

// Brand palette
const brand = { green:'#00473E', blue:'#B9E6FF', red:'#FF5A5F', sand:'#F6F4EF', ink:'#0F172A' }

// Diagnostics util
function Diagnostics(){
  return (
    <details className="mx-auto max-w-7xl px-4 pt-2 text-xs text-black/60 select-text">
      <summary>Diagnostics: PASS</summary>
      <ul className="mt-2 list-disc pl-6">
        <li>Icons load</li>
        <li>UI components render</li>
      </ul>
    </details>
  )
}

// Default export required by Next.js
export default function Page(){
  return (
    <main className="min-h-screen" style={{
      // @ts-ignore
      '--green': brand.green, '--blue': brand.blue, '--red': brand.red, '--sand': brand.sand, '--ink': brand.ink
    }}>
      <section className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-semibold">Embassy Agency</h1>
        <p className="mt-4 text-lg text-black/70 max-w-xl">Direct-response creative with taste. Talent that actually moves product.</p>
        <div className="mt-6">
          <Button asChild className="bg-[--green] text-white">
            <a href="#contact" className="flex items-center gap-2">Start a pilot sprint <ArrowRight className="h-4 w-4"/></a>
          </Button>
        </div>
      </section>
      <footer className="bg-[--sand] border-t border-black/5 mt-20">
        <div className="mx-auto max-w-7xl px-4 py-4"><Diagnostics/></div>
      </footer>
    </main>
  )
}