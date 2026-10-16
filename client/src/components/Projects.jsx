import { useState } from "react";
import Icon from "./Icons.jsx";

const projects = [
  {
    name: "Smart Café Management System",
    number: "01",
    category: "Full-Stack",
    badge: "Featured Project",
    description:
      "A complete database-driven management platform built for cafe operations. Features interactive menu administration, order handling, customer management, and real-time inventory tracking.",
    tags: ["PHP", "MySQL", "JavaScript", "Responsive UI", "Admin Dashboard"],
    highlights: [
      "Role-based administrative control",
      "Dynamic order entry and menu catalog",
      "Relational MySQL database design",
    ],
    href: "https://debug-life21.github.io/My_Portfolio/dku_cafe/cafe/index.php",
    github: "https://github.com/debug-life21",
  },
  {
    name: "Full-Stack MERN Application Hub",
    number: "02",
    category: "Full-Stack",
    badge: "MERN Stack",
    description:
      "End-to-end full-stack web application powered by MongoDB, Express, React, and Node.js. Demonstrates decoupled RESTful API endpoints, state management, and modern component architecture.",
    tags: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "RESTful API design with Express & Node",
      "MongoDB database modeling with Mongoose",
      "Interactive modern client interface in React",
    ],
    href: "https://github.com/debug-life21",
    github: "https://github.com/debug-life21",
  },
  {
    name: "Real-Time Digital Clock & Dashboard",
    number: "03",
    category: "JavaScript",
    badge: "Dynamic Tool",
    description:
      "A precision digital clock and time dashboard designed with responsive CSS layouts, real-time JavaScript DOM updates, and sleek dark aesthetic.",
    tags: ["JavaScript", "DOM Manipulation", "CSS3 Grid", "Clean UI"],
    highlights: [
      "Smooth second-by-second reactive updates",
      "Responsive typography and modern dark aesthetics",
      "Lightweight zero-dependency architecture",
    ],
    href: "https://debug-life21.github.io/My_Portfolio/digitalclock.html",
    github: "https://github.com/debug-life21",
  },
  {
    name: "Academic Student Registration Portal",
    number: "04",
    category: "Web Tools",
    badge: "Form UX",
    description:
      "A structured academic registration system featuring client-side input validation, accessible form design, and clean data collection workflows.",
    tags: ["HTML5", "CSS3", "JavaScript", "Form Validation", "Accessibility"],
    highlights: [
      "Structured validation for error prevention",
      "Clean semantic hierarchy and keyboard navigation",
      "Mobile-friendly adaptive layouts",
    ],
    href: "https://debug-life21.github.io/My_Portfolio/student%20registration.html",
    github: "https://github.com/debug-life21",
  },
  {
    name: "Precision Web Calculator",
    number: "05",
    category: "JavaScript",
    badge: "Logic & State",
    description:
      "A functional web calculator engineered with accurate decimal handling, operation chaining, keyboard event support, and clean glassmorphic styling.",
    tags: ["JavaScript", "Arithmetic Logic", "State Management", "Glass UI"],
    highlights: [
      "Expression evaluation with precedence logic",
      "Keyboard shortcut listeners for fast input",
      "Smooth button micro-animations",
    ],
    href: "https://debug-life21.github.io/My_Portfolio/calcu.html",
    github: "https://github.com/debug-life21",
  },
];

const categories = ["All", "Full-Stack", "JavaScript", "Web Tools"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="section-space border-y border-white/[0.04] bg-slate-950/40 relative"
    >
      <div className="section-shell">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              Featured Projects
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400">Work</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            A curation of academic and self-directed applications highlighting full-stack engineering, clean UI architecture, and practical problem solving.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                filter === cat
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.name}
              className="glow-card group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 p-7 sm:p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-sm font-bold text-cyan-300">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-950/40 px-3 py-0.5 text-[11px] font-semibold text-cyan-200">
                      {project.badge}
                    </span>
                    <span className="rounded-full border border-slate-800 bg-slate-900 px-2.5 py-0.5 text-[11px] text-slate-400">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-heading text-2xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Project highlights */}
                <ul className="mt-5 space-y-2 border-t border-slate-800/60 pt-4 text-xs text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-cyan-300">
                        <Icon name="check" size={13} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-slate-800/60">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-400/10 border border-cyan-400/30 px-4 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    <span>Live Preview</span>
                    <Icon name="arrowUpRight" size={14} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition"
                  >
                    <Icon name="github" size={15} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

