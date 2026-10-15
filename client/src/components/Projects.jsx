import Icon from './Icons.jsx'

const projects = [
  {
    name: 'Cafe Management System',
    period: '2024 — PRESENT',
    description: 'A cafe operations tool focused on processing orders, organizing data entries, and keeping day-to-day inventory visible and manageable.',
    tags: ['Full-stack', 'Order workflow', 'Inventory'],
    featured: true,
  },
  {
    name: 'A new idea is brewing',
    period: 'NEXT BUILD',
    description: 'A place for the next thoughtful build. More details will be shared as the project takes shape.',
    tags: ['MERN stack', 'In progress'],
  },
  {
    name: 'More on the way',
    period: 'COMING SOON',
    description: 'Exploring useful problems and turning them into clean, reliable software—one project at a time.',
    tags: ['Experimentation', 'Engineering'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-space border-y border-white/4 bg-slate-950/35">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl">
              Projects with <span className="text-cyan-300">purpose.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">A selection of practical builds and the ideas currently taking shape.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.name}
              className={`group relative overflow-hidden rounded-3xl border bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1.5 sm:p-7 ${project.featured ? 'border-cyan-300/20 md:col-span-2' : 'border-slate-800/90 hover:border-violet-400/30'}`}
            >
              <div className={`absolute right-0 top-0 h-40 w-40 rounded-full blur-[80px] transition-opacity group-hover:opacity-80 ${index === 0 ? 'bg-cyan-400/10' : 'bg-violet-500/10'}`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500">{project.period}</span>
                  <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1 text-[10px] font-medium text-slate-400">
                    {project.featured ? 'FEATURED PROJECT' : 'IN DEVELOPMENT'}
                  </span>
                </div>
                <div className={`relative mt-7 overflow-hidden rounded-2xl border border-white/6 bg-slate-900/70 ${project.featured ? 'h-48 sm:h-56' : 'flex h-36 items-center justify-center'}`}>
                  {project.featured ? (
                    <div className="absolute inset-0 grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr]">
                      <div className="border-r border-white/5 bg-slate-950/65 p-3 sm:p-4">
                        <div className="mb-5 flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-cyan-300" /><span className="hidden text-[8px] font-semibold text-slate-400 sm:inline">CAFE / OPS</span></div>
                        <div className="space-y-3">
                          {['Overview', 'Orders', 'Inventory', 'Reports'].map((item, itemIndex) => (
                            <div key={item} className={`h-2 rounded-full ${itemIndex === 0 ? 'w-full bg-cyan-300/45' : 'w-3/4 bg-slate-700/70'}`} />
                          ))}
                        </div>
                      </div>
                      <div className="p-3 sm:p-5">
                        <div className="flex items-start justify-between">
                          <div><p className="text-[8px] uppercase tracking-widest text-slate-500">Overview</p><p className="mt-1 text-xs font-semibold text-slate-200 sm:text-sm">Today&apos;s operations</p></div>
                          <span className="rounded-md border border-emerald-300/15 bg-emerald-300/6 px-2 py-1 text-[8px] text-emerald-200">LIVE</span>
                        </div>
                        <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
                          {['Orders', 'Inventory', 'Activity'].map((label, metricIndex) => (
                            <div key={label} className="rounded-lg border border-white/5 bg-slate-950/55 p-2 sm:p-3">
                              <p className="text-[7px] text-slate-500 sm:text-[9px]">{label}</p>
                              <p className={`mt-2 text-xs font-semibold sm:text-sm ${metricIndex === 0 ? 'text-cyan-200' : 'text-slate-200'}`}>{['12', 'In stock', 'Updated'][metricIndex]}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex h-10 items-end gap-1 rounded-lg border border-white/4 bg-slate-950/40 px-3 pt-2 sm:h-12">
                          {[30, 48, 38, 67, 52, 78, 58, 90, 64, 72, 50, 84, 62, 96].map((height, barIndex) => (
                            <span key={barIndex} className="flex-1 rounded-t-sm bg-linear-to-t from-cyan-500/20 to-cyan-300/70" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${index === 1 ? 'border-violet-300/15 bg-violet-300/6 text-violet-300' : 'border-cyan-300/15 bg-cyan-300/6 text-cyan-200'}`}>
                      <Icon name={index === 1 ? 'spark' : 'code'} size={21} />
                    </div>
                  )}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-100">{project.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1 text-[10px] text-slate-400">{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
