import { Mail, MessageCircle, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const lanes = [
  {
    icon: MessageCircle,
    title: 'Editorial Support',
    body: 'Get help with article structure, publishing flow, and homepage storytelling.',
  },
  {
    icon: Sparkles,
    title: 'Partnerships',
    body: 'Collaborate on sponsored stories, branded editorials, and campaign integrations.',
  },
  {
    icon: Mail,
    title: 'Technical Help',
    body: 'Report issues related to account access, drafts, or publishing UI behavior.',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#bb91ff]">
              Contact
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
              Let’s build better article experiences together.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">
              Share what you are trying to publish or improve, and we will route your message to the right team.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                  <lane.icon className="h-5 w-5 text-[#bb91ff]" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/75">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101220] p-7 shadow-[0_24px_72px_rgba(0,0,0,0.45)]">
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45" placeholder="Your name" />
              <input className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-white placeholder:text-white/45" placeholder="What do you need help with?" />
              <textarea className="min-h-[180px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/45" placeholder="Share the full context so we can respond with the right next step." />
              <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full bg-[#8d46ff] px-6 text-sm font-semibold text-white hover:bg-[#9f63ff]">
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
