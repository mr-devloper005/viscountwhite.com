import Link from 'next/link'
import { ArrowRight, Lightbulb, PenLine, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const pillars = [
  {
    title: 'Reading-First Foundation',
    body: 'Long-form stories stay easy to read with clean structure, calmer spacing, and strong typography across devices.',
    icon: PenLine,
  },
  {
    title: 'Visual Discovery Flow',
    body: 'Images, article covers, and connected sections help visitors discover more content naturally without getting lost.',
    icon: Sparkles,
  },
  {
    title: 'Connected Content System',
    body: 'Articles, visuals, listings, and resources are linked through one navigation rhythm for smoother exploration.',
    icon: Lightbulb,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">
            About
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Built for stories, visuals, and discoverable content in one place.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            Viscountwhite brings together reading-first publishing, visual browsing, and connected discovery so visitors can move naturally between content types.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/articles" className="inline-flex items-center gap-2 rounded-full bg-[#8d46ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9f63ff]">
              Explore Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/create" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Start Creating
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <item.icon className="h-5 w-5 text-[#bb91ff]" />
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.body}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
