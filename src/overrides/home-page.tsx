import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import { ContentImage } from '@/components/shared/content-image'

export const HOME_PAGE_OVERRIDE_ENABLED = true

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('article', 12, { fresh: true, allowMockFallback: true })
  const heroPost = posts[0]
  const gridPosts = posts.slice(1, 9)

  return (
    <div className="min-h-screen bg-[#05060c] text-white">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(112,70,255,0.38),transparent_35%),radial-gradient(circle_at_70%_40%,rgba(255,109,57,0.28),transparent_30%),radial-gradient(circle_at_45%_75%,rgba(56,138,255,0.24),transparent_35%)]" />
          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mb-5 flex items-center justify-center gap-1 text-[#9f63ff]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mx-auto max-w-xl text-sm text-white/70">“Finally, an article platform that just works.”</p>
            <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              A publication that
              <span className="mx-2 inline-block bg-[#8d46ff] px-3 py-1 text-white">sells your</span>
              writing while you sleep.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75">
              Launch your article site in minutes and start getting discovered with editorial pages built for reading depth.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/articles" className="inline-flex items-center gap-2 rounded-full bg-[#8d46ff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#9f63ff]">
                Read Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {heroPost ? (
            <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.1rem]">
                <ContentImage src={(heroPost.media?.[0]?.url as string) || '/placeholder.svg'} alt={heroPost.title} fill className="object-cover" />
              </div>
            </div>
          ) : null}
        </section>

        <section className="rounded-t-[2rem] bg-[#e6e7eb] px-4 py-16 text-[#0d0f1b] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Over <span className="text-[#8d46ff]">2,000,000</span> readers and writers can’t be wrong.
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {gridPosts.map((post) => (
                <Link key={post.id} href={`/articles/${post.slug}`} className="group overflow-hidden rounded-3xl border border-[#cfd2dc] bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ContentImage src={(post.media?.[0]?.url as string) || '/placeholder.svg'} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm font-semibold">{post.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e6e7eb] px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-[#d6d9e2] bg-[#f2f3f7] p-8 text-center shadow-sm">
            <h3 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              I didn’t expect building a publication could really feel this fun.
            </h3>
            <p className="mt-5 text-sm text-[#61667c]">Editorial Creator</p>
          </div>
        </section>

        <section className="bg-[#e6e7eb] px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-center text-5xl font-semibold leading-tight tracking-[-0.05em] text-[#111323]">
              Five reasons to use
              <span className="ml-2 text-[#8d46ff]">this article platform.</span>
            </h3>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ['FAST PUBLISH', 'Launch in minutes with zero setup complexity.', true],
                ['NO CODING NEEDED', 'Everything is visual and easy for editors.', false],
                ['CLEAN LAYOUTS', 'Templates are flexible and article-first.', false],
                ['NO LIMITS', 'Publish as many stories as you need.', true],
              ].map(([label, text, dark]) => (
                <div key={label as string} className={dark ? 'rounded-3xl bg-[#191b24] p-7 text-white' : 'rounded-3xl bg-[#f3f4f8] p-7 text-[#141726]'}>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f63ff]">{label}</p>
                  <p className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
