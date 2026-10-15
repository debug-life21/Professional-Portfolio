import { useState } from 'react'
import About from './components/About.jsx'
import Approach from './components/Approach.jsx'
import Contact from './components/Contact.jsx'
import Hero from './components/Hero.jsx'
import Icon from './components/Icons.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Approach', href: '#approach' },
  { label: 'Work', href: '#projects' },
  { label: 'Stack', href: '#skills' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen overflow-clip">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/75 backdrop-blur-xl">
        <nav className="section-shell flex h-18 items-center justify-between" aria-label="Main navigation">
          <a href="#home" className="group flex items-center gap-3" aria-label="Wendmachew Tsegaye home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/20 bg-linear-to-br from-cyan-300/10 to-violet-400/10 font-mono text-xs font-bold text-cyan-200 transition group-hover:border-cyan-200/50">WT</span>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-200 sm:block">Wendmachew<span className="text-cyan-300">.</span></span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => <a key={item.href} className="text-xs font-medium text-slate-400 transition hover:text-cyan-200" href={item.href}>{item.label}</a>)}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200">
              Get in touch <Icon name="arrowUpRight" size={14} />
            </a>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 text-slate-300 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name="menu" size={19} />
          </button>
        </nav>
        {menuOpen && (
          <div className="section-shell border-t border-slate-800/70 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {[...navigation, { label: 'Contact', href: '#contact' }].map((item) => (
                <a key={item.href} className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-900 hover:text-cyan-200" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <Hero />
        <About />
        <Approach />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-slate-950/50">
        <div className="section-shell flex flex-col gap-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="font-medium text-slate-300 transition hover:text-cyan-200">Wendmachew Tsegaye <span className="text-cyan-300">©</span> {new Date().getFullYear()}</a>
          <p>Designed &amp; built with intention.</p>
          <a href="#home" className="inline-flex items-center gap-1.5 transition hover:text-cyan-200">Back to top <Icon name="arrowUpRight" size={13} /></a>
        </div>
      </footer>
    </div>
  )
}
