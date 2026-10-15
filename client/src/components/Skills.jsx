import Icon from './Icons.jsx'

const skillGroups = [
  {
    number: '01',
    title: 'Full-Stack Development',
    description: 'Interfaces, server-side logic, and the tools that connect them.',
    icon: 'code',
    skills: ['React.js', 'Node.js', 'Express.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
    accent: 'cyan',
  },
  {
    number: '02',
    title: 'Database Layers',
    description: 'Practical persistence and relational data foundations.',
    icon: 'code',
    skills: ['MongoDB (Offline Docker Core)', 'PHP (Basic)', 'MySQL (Basic)'],
    accent: 'violet',
  },
  {
    number: '03',
    title: 'Analytical Systems',
    description: 'Turning structured information into clear, useful insights.',
    icon: 'spark',
    skills: ['Advanced Microsoft Excel', 'Data processing', 'Quality testing'],
    accent: 'cyan',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="section-shell">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Tools &amp; capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl">
              My technical <span className="text-violet-400">toolkit.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">A growing, practical skill set for building and maintaining dependable digital products.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.number} className="glow-card rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 transition duration-300 hover:-translate-y-1 sm:p-7">
              <div className="mb-7 flex items-start justify-between">
                <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${group.accent === 'cyan' ? 'border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200' : 'border-violet-300/15 bg-violet-400/[0.07] text-violet-300'}`}>
                  <Icon name={group.icon} size={20} />
                </span>
                <span className="font-mono text-xs text-slate-600">{group.number} / 03</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
              <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition hover:border-slate-600 hover:text-white">{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
