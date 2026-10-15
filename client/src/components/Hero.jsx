import Icon from './Icons.jsx'

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Fiverr', href: 'https://www.fiverr.com', text: 'fi' },
]

export default function Hero() {
  return (
    <section id="home" className="section-shell relative flex min-h-[calc(100svh-4.5rem)] items-center py-16 sm:py-20">
      <div className="pointer-events-none absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-8 bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-cyan-100/90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
            </span>
            SOFTWARE ENGINEERING · DEBARK UNIVERSITY
          </div>

          <p className="eyebrow mb-5">Full-stack developer</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] text-slate-50 sm:text-6xl lg:text-[4.5rem]">
            Wendmachew
            <span className="mt-2 block bg-linear-to-r from-cyan-300 via-cyan-100 to-violet-400 bg-clip-text text-transparent">
              Tsegaye.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I build useful software, from thoughtful interfaces to reliable systems.
            <span className="mt-2 block text-base text-slate-400">Software Engineering student at Debark University</span>
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
            I care about clean modular logic, thoughtful quality checks, and understanding the systems behind the interface.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_35px_-15px_rgba(34,211,238,0.8)] transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View My Work <Icon name="arrow" size={17} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/40 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-violet-400/50 hover:bg-violet-400/[0.06]"
            >
              Let&apos;s Connect <Icon name="arrowUpRight" size={16} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="mr-1 text-xs text-slate-500">FIND ME ON</span>
            {socials.map(({ label, href, icon, text }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} profile`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/55 text-slate-400 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:text-cyan-200"
              >
                {icon ? <Icon name={icon} size={17} /> : <span className="text-xs font-black">{text}</span>}
              </a>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-cyan-500/15 via-transparent to-violet-500/15 blur-2xl" />
          <div className="glass-panel relative overflow-hidden rounded-[1.6rem]">
            <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[10px] tracking-wide text-slate-500">profile.jsx</span>
              <Icon name="code" size={16} className="text-slate-500" />
            </div>
            <div className="p-6 font-mono text-[13px] leading-7 sm:p-8">
              <p className="text-slate-600"><span className="mr-5">01</span><span className="text-violet-300">const</span> <span className="text-cyan-200">developer</span> = {'{'}</p>
              <p className="text-slate-600"><span className="mr-5">02</span>  <span className="text-cyan-100">name</span>: <span className="text-emerald-300">&apos;Wendmachew Tsegaye&apos;</span>,</p>
              <p className="text-slate-600"><span className="mr-5">03</span>  <span className="text-cyan-100">focus</span>: [</p>
              <p className="text-slate-600"><span className="mr-5">04</span>    <span className="text-emerald-300">&apos;Full-stack development&apos;</span>,</p>
              <p className="text-slate-600"><span className="mr-5">05</span>    <span className="text-emerald-300">&apos;Systems engineering&apos;</span>,</p>
              <p className="text-slate-600"><span className="mr-5">06</span>    <span className="text-emerald-300">&apos;Building with purpose&apos;</span></p>
              <p className="text-slate-600"><span className="mr-5">07</span>  ],</p>
              <p className="text-slate-600"><span className="mr-5">08</span>  <span className="text-cyan-100">learning</span>: <span className="text-violet-300">true</span>,</p>
              <p className="text-slate-600"><span className="mr-5">09</span>  <span className="text-cyan-100">coffee</span>: <span className="text-amber-200">&apos;always&apos;</span></p>
              <p className="text-slate-600"><span className="mr-5">10</span>{'}'}</p>
            </div>
            <div className="flex items-center justify-between border-t border-white/[0.07] px-6 py-4 text-[11px] text-slate-500">
              <span className="inline-flex items-center gap-2"><Icon name="spark" size={14} className="text-cyan-300" /> Crafted with intention</span>
              <span>01 / 04</span>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-6 hidden items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur sm:flex">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300"><Icon name="code" size={17} /></span>
            <span><span className="block text-xs font-semibold text-slate-200">Built to be reliable</span><span className="mt-0.5 block text-[10px] text-slate-500">Thoughtful from end to end</span></span>
          </div>
        </div>
      </div>
    </section>
  )
}
