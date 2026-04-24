'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

export default function RegisterPage() {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast({
        title: 'Missing fields',
        description: 'Please complete all fields.',
      })
      return
    }

    try {
      await signup(name.trim(), email.trim(), password)
      toast({
        title: 'Account created',
        description: 'You are now signed in and saved locally.',
      })
      router.push('/articles')
      router.refresh()
    } catch {
      toast({
        title: 'Signup failed',
        description: 'Please try again.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h1 className="text-4xl font-semibold tracking-[-0.05em]">Create your writer account</h1>
            <p className="mt-5 text-sm leading-8 text-white/75">
              Launch your profile and start publishing article-first content in minutes.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101220] p-8 shadow-[0_24px_72px_rgba(0,0,0,0.45)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">Create Account</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45"
                placeholder="Full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoComplete="name"
              />
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
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                autoComplete="new-password"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#8d46ff] px-6 text-sm font-semibold text-white hover:bg-[#9f63ff] disabled:opacity-70"
              >
                {isLoading ? 'Creating...' : 'Create account'}
              </button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-white/70">
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
