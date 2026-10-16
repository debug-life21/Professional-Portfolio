import { useState } from "react";
import About from "./components/About.jsx";
import Approach from "./components/Approach.jsx";
import Contact from "./components/Contact.jsx";
import Hero from "./components/Hero.jsx";
import Icon from "./components/Icons.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl transition-all">
        <nav
          className="section-shell flex h-20 items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Wendemachew Tsegaye home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-violet-500/20 font-mono text-sm font-extrabold text-cyan-200 shadow-md shadow-cyan-400/10 transition group-hover:scale-105 group-hover:border-cyan-400/60">
              WT
            </span>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-bold tracking-tight text-white transition group-hover:text-cyan-200">
                Wendemachew<span className="text-cyan-300">.</span>
              </span>
              <span className="text-[10px] text-slate-400">
                Full-Stack MERN &amp; Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="text-xs font-semibold text-slate-300 transition hover:text-cyan-300"
                href={item.href}
              >
                {item.label}
              </a>
            ))}

            {/* Prominent CV Download in Navbar */}
            <a
              href="/Wendemu_Resume.pdf"
              download="Wendemachew_Tsegaye_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-2 text-xs font-bold text-cyan-200 backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
            >
              <Icon name="download" size={14} />
              <span>CV</span>
            </a>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-cyan-400/20 transition hover:from-cyan-300 hover:to-white hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
              <Icon name="arrowUpRight" size={13} />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-slate-700 hover:text-white md:hidden cursor-pointer"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={20} />
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="section-shell border-t border-slate-800/80 py-5 md:hidden">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-cyan-300"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
                <a
                  href="/Wendemu_Resume.pdf"
                  download="Wendemachew_Tsegaye_Resume.pdf"
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-950/40 px-4 py-2.5 text-sm font-bold text-cyan-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="download" size={16} />
                  <span>Download CV (PDF)</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-bold text-slate-950"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Get in Touch</span>
                  <Icon name="arrowUpRight" size={15} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <Approach />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-slate-950/80">
        <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
          <div>
            <a
              href="#home"
              className="font-heading text-sm font-bold text-white transition hover:text-cyan-200"
            >
              Wendemachew Tsegaye <span className="text-cyan-300">©</span>{" "}
              {new Date().getFullYear()}
            </a>
            <p className="mt-1 text-slate-400">
              3rd Year CS Undergrad • Full-Stack MERN Developer • Digital Marketer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <a
              href="/Wendemu_Resume.pdf"
              download="Wendemachew_Tsegaye_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition"
            >
              <Icon name="download" size={14} />
              <span>Download CV</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://github.com/debug-life21"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="https://linkedin.com/in/wendmachew-tsegaye"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              href="#home"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition"
            >
              <span>Back to top</span>
              <Icon name="arrowUpRight" size={13} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

