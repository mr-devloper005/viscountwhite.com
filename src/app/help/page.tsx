import Link from 'next/link'
import { LifeBuoy, MessageCircle, Rocket } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const supportBlocks = [
  {
    title: 'Getting Started',
    description: 'Set up your account, publish your first article, and create a clean homepage flow.',
    icon: Rocket,
  },
  {
    title: 'Publishing Guidance',
    description: 'Structure headlines, summaries, and reading sections for better engagement.',
    icon: MessageCircle,
  },
  {
    title: 'Technical Help',
    description: 'Troubleshoot account access, local draft behavior, and publishing UI issues.',
    icon: LifeBuoy,
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section className="mx-auto max-w-6xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">
            Support
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            Help built for editorial teams that ship fast.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
            Find practical support for article creation, publishing workflows, and reader-facing layout best practices.
          </p>
        </section>

        <section className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
          {supportBlocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <block.icon className="h-5 w-5 text-[#bb91ff]" />
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{block.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{block.description}</p>
            </article>
          ))}
        </section>

        <section className="mx-auto mt-10 max-w-6xl rounded-3xl border border-white/10 bg-[#111321] p-7">
          <h3 className="text-2xl font-semibold tracking-[-0.03em]">Still need help?</h3>
          <p className="mt-3 text-sm text-white/70">Our support desk responds with product-specific guidance for your article workflow.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-[#8d46ff] px-6 py-3 text-sm font-semibold text-white hover:bg-[#9f63ff]">
            Contact Support
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
