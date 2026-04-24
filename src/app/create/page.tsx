import Link from 'next/link'
import { ArrowRight, PenSquare, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export default function CreatePage() {
  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section>
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">
            Create
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Start your next article in a focused writing workspace.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            Build headlines, summaries, and long-form content with a clear flow optimized for publication-ready writing.
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-[#111321] p-7">
            <PenSquare className="h-6 w-6 text-[#bb91ff]" />
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Write New Article</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">Open the article editor and save your draft locally before publishing.</p>
            <Link href="/create/article" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8d46ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9f63ff]">
              Open Editor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <Sparkles className="h-6 w-6 text-[#bb91ff]" />
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Browse Published Posts</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">Review existing stories and keep your editorial voice consistent.</p>
            <Link href="/articles" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              View Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  )
}
