'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { label: 'Articles', href: '/articles' },
  { label: 'Features', href: '/about' },
  { label: 'Create', href: '/create' },
]

export function NavbarOverride() {
  const { isAuthenticated, logout } = useAuth()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between rounded-full border border-white/60 bg-[#ececef] px-3 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur">
        <Link href="/" className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold text-[#0f111a]">
          <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} className="h-5 w-5 object-contain" />
          {SITE_CONFIG.name}
        </Link>
        <div className="hidden items-center gap-5 text-xs font-semibold text-[#626676] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[#0f111a]">{link.label}</Link>
          ))}
          {isAuthenticated ? (
            <button type="button" onClick={logout} className="hover:text-[#0f111a]">Log Out</button>
          ) : (
            <Link href="/login" className="hover:text-[#0f111a]">Sign In</Link>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#2b2e3e] hover:bg-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="mx-auto mt-2 max-w-2xl rounded-2xl border border-white/40 bg-[#ececef] p-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] md:hidden">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl bg-white px-3 py-2 text-sm font-semibold text-[#232637]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
