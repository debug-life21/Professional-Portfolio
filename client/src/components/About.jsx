import Icon from './Icons.jsx'

const strengths = [
  {
    number: '01',
    title: 'Full-stack systems',
    description: 'Connecting clean, accessible interfaces to dependable APIs and well-structured data.',
  },
  {
    number: '02',
    title: 'Quality by design',
    description: 'Tracing defects, testing assumptions, and building QA-minded workflows into the process.',
  },
  {
    number: '03',
    title: 'Beyond the screen',
    description: 'Comfortable maintaining hardware infrastructure and understanding the systems underneath.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-space border-y border-white/[0.04] bg-slate-950/35">
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow">A little about me</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl">
            Engineering with <span className="text-cyan-300">intention.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-3xl p-7 sm:p-9">
            <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200">
              <Icon name="spark" size={21} />
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-100">Curious by nature. Precise by practice.</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I&apos;m a software engineering student at Debark University with a deep commitment to writing clean, modular logic. My interests span the complete lifecycle of a product: shaping intuitive experiences, engineering full-stack systems, and keeping the underlying technology working well.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              I enjoy turning complex requirements into practical tools, examining system defects methodically, and making reliability part of the build—not an afterthought.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Clean code', 'Systems thinking', 'Continuous learning'].map((item) => (
                <span key={item} className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300">{item}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Education</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-100">Learning to engineer what&apos;s next</h3>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-400/[0.07] text-violet-300"><Icon name="code" size={19} /></span>
              </div>
              <div className="relative ml-1 border-l border-slate-700/80 pl-6">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.65)]" />
                <p className="text-sm font-semibold text-slate-200">Software Engineering</p>
                <p className="mt-1 text-sm text-slate-400">Debark University</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">Developing a strong foundation in software design, systems, and problem solving.</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {strengths.map((strength) => (
                <article key={strength.number} className="rounded-2xl border border-slate-800/80 bg-slate-900/45 p-5 transition hover:border-cyan-300/20">
                  <span className="font-mono text-xs text-cyan-300/75">{strength.number} / 03</span>
                  <h4 className="mt-4 text-sm font-semibold text-slate-200">{strength.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{strength.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
