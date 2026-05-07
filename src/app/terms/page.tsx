import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const sections = [
  {
    title: 'Account Responsibility',
    body: 'You are responsible for maintaining account security and accuracy of published profile details.',
  },
  {
    title: 'Content Ownership',
    body: 'You retain ownership of your articles and grant this platform the right to display, format, and distribute them on your site.',
  },
  {
    title: 'Acceptable Use',
    body: 'No unlawful, abusive, spam, or misleading content may be published through this platform.',
  },
  {
    title: 'Service Changes',
    body: 'We may improve or modify UI features over time to maintain quality and platform reliability.',
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">
            Terms
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Terms of Service</h1>
        </section>

        <section className="mx-auto mt-10 max-w-5xl space-y-4">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/70">{section.body}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
