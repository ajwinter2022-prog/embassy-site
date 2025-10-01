'use client';

import content from '../content/home.json'; // reads your editable content

export default function Page() {
  const { hero, services, contact } = content as any;

  return (
    <main className="min-h-screen bg-[#F6F4EF] text-slate-900">
      <header className="sticky top-0 z-50 bg-[#F6F4EF]/90 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-[#00473E] grid place-items-center text-white font-bold">Ｅ</div>
            <span className="font-semibold tracking-wide">Embassy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-[#00473E]">What We Do</a>
            <a href="#contact" className="hover:text-[#00473E]">Contact</a>
          </nav>
          <a href={hero.ctaHref} className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-[#00473E] text-white">
            {hero.ctaLabel}
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-7xl px-4 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-lg text-xs bg-[#B9E6FF]">{hero.eyebrow}</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-[1.1]">{hero.headline}</h1>
          <div className="mt-8">
            <a href={hero.ctaHref} className="inline-flex items-center px-4 py-2 rounded-xl bg-[#00473E] text-white text-sm">
              {hero.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white border-y border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-semibold">What We Do</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s: any) => (
              <div key={s.title} className="bg-white border border-black/10 rounded-3xl p-6">
                <div className="h-10 w-10 rounded-2xl bg-[#B9E6FF] grid place-items-center text-[#00473E] font-bold">★</div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-black/70">{s.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-black/70">
                  {s.bullets.map((b: string) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#00473E]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Let’s build your creator engine</h2>
            <div className="mt-6 space-y-3 text-sm text-black/80">
              <div>📧 <a className="underline underline-offset-4" href={`mailto:${contact.email}`}>{contact.email}</a></div>
              <div>📞 {contact.phone}</div>
              <div>📍 {contact.locations}</div>
            </div>
          </div>
          <div className="bg-white border border-black/10 rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Project Brief</h3>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Name" />
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" placeholder="Brand / Company" />
              <input className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" type="email" placeholder="Email" />
              <textarea className="w-full rounded-xl border border-black/10 px-3 py-2 text-sm" rows={6} placeholder="What are you selling? Targets? Timing? Budget range?"></textarea>
              <button type="button" className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-[#00473E] text-white">Send</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-2xl bg-[#00473E] grid place-items-center text-white font-bold">Ｅ</div>
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

