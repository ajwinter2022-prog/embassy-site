export const metadata = {
  title: 'Embassy — Influencer/Talent Agency',
  description: 'Direct‑response creative with taste. Talent that actually moves product.'
}

import './globals.css'
import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
