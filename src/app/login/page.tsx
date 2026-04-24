'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      toast({
        title: 'Missing fields',
        description: 'Please enter both email and password.',
      })
      return
    }

    try {
      await login(email.trim(), password)
      toast({
        title: 'Signed in',
        description: 'Login saved locally in this browser.',
      })
      router.push('/articles')
      router.refresh()
    } catch {
      toast({
        title: 'Sign in failed',
        description: 'Please try again.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h1 className="text-4xl font-semibold tracking-[-0.05em]">Welcome back to your editorial desk</h1>
            <p className="mt-5 text-sm leading-8 text-white/75">
              Sign in to publish new articles, edit drafts, and keep your reader experience consistent.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                'Article-only publishing flow',
                'Fast publish and update cycle',
                'Session stored in local browser storage',
              ].map((item) => (
                <p key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#bb91ff]" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101220] p-8 shadow-[0_24px_72px_rgba(0,0,0,0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">Sign In</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45"
                placeholder="Email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                autoComplete="email"
              />
              <input
                className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#8d46ff] px-6 text-sm font-semibold text-white hover:bg-[#9f63ff] disabled:opacity-70"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-white/70">
              <Link href="/forgot-password" className="hover:underline">Forgot password?</Link>
              <Link href="/register" className="font-semibold hover:underline">Create account</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
