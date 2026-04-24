import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const sections = [
  {
    title: 'Data We Collect',
    body: 'We collect account profile details and the content you publish through this interface.',
  },
  {
    title: 'How We Use Data',
    body: 'Your data helps us render pages, personalize writing workflows, and secure account access.',
  },
  {
    title: 'Storage and Session',
    body: 'Some account and draft activity is stored locally in your browser for faster UI behavior.',
  },
  {
    title: 'Your Controls',
    body: 'You can update your profile details, remove published content, and manage account access at any time.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">
        <section className="mx-auto max-w-5xl">
          <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">
            Privacy
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Privacy Policy</h1>
          <p className="mt-5 text-sm text-white/70">Last updated: April 24, 2026</p>
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
