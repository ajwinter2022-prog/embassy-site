'use client';

export default function Page() {
  return (
    <main
      className="min-h-screen bg-[#F6F4EF] text-slate-900"
      style={{
        // brand palette as CSS vars (optional to tweak)
        // @ts-ignore
        '--green': '#00473E',
        '--blue': '#B9E6FF',
        '--red': '#FF5A5F',
      }}
    >
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-[#F6F4EF]/90 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-[--green] grid place-items-center text-white font-bold">Ｅ</div>
            <span className="font-semibold tracking-wide">Embassy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[--green]">What We Do</a>
            <a href="#contact" className="hover:text-[--green]">Contact</a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-[--green] text-white"
          >
            Book a discovery call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-lg text-xs bg-[--blue]">Influencer & Talent Agency</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.1]">
            Direct-response <span className="text-[--green]">creative</span> with taste.
            <br />Talent that actually <span className="underline decoration-[--red] decoration-4 underline-offset-4">moves product</span>.
          </h1>
          <p className="mt-6 text-lg text-black/70">
            Embassy pairs brand aesthetics with sales DNA. We plan, cast, produce, and scale creator content across TikTok,
            Reels, and Shorts—then turn winners into always-on engines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-xl bg-[--green] text-white text-sm">
              Start a pilot sprint
            </a>
            <a href="#services" className="inline-flex items-center px-4 py-2 rounded-xl border border-black/10 text-sm">
              See services →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">What We Do</h2>
            <p className="mt-2 text-black/70">End-to-end creator growth. Plug all or part of our stack into your brand.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                t: 'Campaign Strategy',
                d: 'Creative angles, hooks, and briefs that convert across TikTok, Reels, and Shorts.',
                pts: ['Concepting + copy pack', 'UGC + influencer mix', 'Attribution + pixel plan'],
              },
              {
                t: 'Talent Sourcing',
                d: 'Shortlists across niches with performance data, not vibes.',
                pts: ['Roster + open market', 'Usage/whitelist ready', 'Brand fit filtering'],
              },
              {
                t: 'Production',
                d: 'Casting, shoots, editing, and QC at creator speed.',
                pts: ['Creator toolkits', 'On-site or remote', '24–72h turnarounds'],
              },
              {
                t: 'Paid + Whitelisting',
                d: 'Scale winners with spark ads / allow-listing. We chase MER, not vanity views.',
                pts: ['Spark + whitelist', 'Iterate top hooks', 'Weekly learning agenda'],
              },
              {
                t: 'Brand Partnerships',
                d: 'Ambassador programs, retail integrations, and affiliate structuring.',
                pts: ['Tiered comp', 'Retail tie-ins', 'Affiliate infra'],
              },
              {
                t: 'TikTok Shop + Attribution',
                d: 'SKU setup, creator seeding, and rev-share mechanics that move units.',
                pts: ['Shop ops', 'Creator seeding', 'Rev-share + LTV'],
              },
            ].map((s) => (
              <div key={s.t} className="bg-white border border-black/10 rounded-3xl p-6">
                <div className="h-10 w-10 rounded-2xl bg-[--blue] grid place-items-center text-[--green] font-bold">★</div>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-1 text-sm text-black/70">{s.d}</p>
                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  {s.pts.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[--green]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s build your creator engine</h2>
            <p className="mt-2 text-black/70 max-w-xl">
              Tell us about your product, offer, and targets. We’ll reply with a mini plan and a pilot sprint rec.
            </p>

            <div className="mt-6 space-y-3 text-sm text-black/80">
              <div>📧 <a className="underline underline-offset-4" href="mailto:hello@embassy.agency">hello@embassy.agency</a></div>
              <div>📞 (305) 555-0199</div>
              <div>📍 Miami • New York • Remote</div>
            </div>
          </div>

          <div className="bg-white border border-black/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Project Brief</h3>
            <p className="text-sm text-black/70">We’ll reply with next steps + calendar link.</p>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Name" />
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Brand / Company" />
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Email" type="email" />
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Website / TikTok Shop (optional)" />
              <textarea className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" rows={6} placeholder="What are you selling? Targets? Timing? Budget range?"></textarea>
              <button type="button" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-[--green] text-white">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-[--green] grid place-items-center text-white font-bold">Ｅ</div>
            <div className="text-sm">© {new Date().getFullYear()} Embassy. All rights reserved.</div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="underline underline-offset-4">Creator sign-up</a>
            <a href="#contact" className="underline underline-offset-4">Brand inquiry</a>
            <a href="#" className="underline underline-offset-4">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

