import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="border-t border-white/10 bg-[#05060c] px-4 pb-14 pt-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-[#121420] p-6 sm:p-8">
          <h3 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Enough scrolling.
            <br />
            Time to <span className="bg-[#8d46ff] px-2">build.</span>
          </h3>
          <Link href="/register" className="mt-6 inline-flex rounded-full bg-[#8d46ff] px-7 py-3 text-sm font-semibold text-white hover:bg-[#9f63ff]">
            Open Your Publication
          </Link>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <img src="/favicon.png" alt={`${SITE_CONFIG.name} logo`} className="h-6 w-6 object-contain" />
                <p className="text-xl font-semibold">{SITE_CONFIG.name}</p>
              </div>
              <p className="mt-4 text-sm text-white/65">Copyright © 2026.</p>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <p className="font-semibold text-white">Product</p>
              <Link href="/articles" className="block hover:text-white">Articles</Link>
              <Link href="/about" className="block hover:text-white">Features</Link>
              <Link href="/help" className="block hover:text-white">Support</Link>
            </div>
            <div className="space-y-2 text-sm text-white/80">
              <p className="font-semibold text-white">Company</p>
              <Link href="/about" className="block hover:text-white">About</Link>
              <Link href="/terms" className="block hover:text-white">Terms</Link>
              <Link href="/privacy" className="block hover:text-white">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
