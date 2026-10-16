import { useState } from "react";
import Icon from "./Icons.jsx";

const skillCategories = [
  {
    id: "mern",
    name: "Full-Stack MERN",
    icon: "code",
    color: "cyan",
    headline: "Core JavaScript Ecosystem",
    description: "End-to-end web engineering with React, Node, Express, and MongoDB.",
    skills: [
      { name: "React.js", level: "Advanced", tag: "Frontend" },
      { name: "Node.js", level: "Proficient", tag: "Runtime" },
      { name: "Express.js", level: "Proficient", tag: "Backend Framework" },
      { name: "MongoDB / Mongoose", level: "Proficient", tag: "NoSQL DB" },
      { name: "RESTful APIs", level: "Advanced", tag: "Architecture" },
      { name: "Authentication / JWT", level: "Proficient", tag: "Security" },
    ],
  },
  {
    id: "frontend",
    name: "Front-End & UI/UX",
    icon: "layers",
    color: "violet",
    headline: "Pixel-Perfect Experiences",
    description: "Responsive layouts, intuitive component designs, and modern CSS.",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", tag: "Language" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Styling" },
      { name: "HTML5 & Semantic Markup", level: "Advanced", tag: "Structure" },
      { name: "CSS3 / Flexbox & Grid", level: "Advanced", tag: "Layouts" },
      { name: "Responsive & Mobile-First", level: "Advanced", tag: "UX" },
      { name: "DOM & Fetch API", level: "Advanced", tag: "Interactivity" },
    ],
  },
  {
    id: "marketing",
    name: "Digital Marketing & SEO",
    icon: "trendingUp",
    color: "cyan",
    headline: "Traffic, Visibility & Growth",
    description: "Data-driven strategies to boost online reach, engagement, and conversion.",
    skills: [
      { name: "Search Engine Optimization (SEO)", level: "Proficient", tag: "Search" },
      { name: "Social Media Marketing", level: "Proficient", tag: "Outreach" },
      { name: "Web Analytics & Metrics", level: "Proficient", tag: "Data" },
      { name: "Content Strategy", level: "Proficient", tag: "Brand" },
      { name: "Conversion Optimization (CRO)", level: "Intermediate", tag: "Growth" },
      { name: "Digital Campaign Management", level: "Intermediate", tag: "Acquisition" },
    ],
  },
  {
    id: "foundations",
    name: "CS & Databases",
    icon: "academic",
    color: "violet",
    headline: "University Grounding",
    description: "Computer science theory, algorithms, relational databases, and server basics.",
    skills: [
      { name: "Data Structures & Algorithms", level: "Proficient", tag: "Theory" },
      { name: "MySQL / Relational DB", level: "Proficient", tag: "SQL" },
      { name: "PHP (Basics & CRUD)", level: "Intermediate", tag: "Backend" },
      { name: "Object-Oriented Programming", level: "Proficient", tag: "Paradigm" },
      { name: "Software Design", level: "Proficient", tag: "Engineering" },
      { name: "Computer Networking Basics", level: "Proficient", tag: "Systems" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    icon: "terminal",
    color: "cyan",
    headline: "Productive Development",
    description: "Version control, API testing, fast bundling, and collaborative workflows.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", tag: "Version Control" },
      { name: "VS Code", level: "Advanced", tag: "IDE" },
      { name: "Postman", level: "Proficient", tag: "API Testing" },
      { name: "Vite", level: "Proficient", tag: "Build Tool" },
      { name: "Linux / CLI Basics", level: "Intermediate", tag: "OS" },
      { name: "npm / Package Ecosystem", level: "Proficient", tag: "Dependencies" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="section-space relative">
      <div className="section-shell">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              Technical Arsenal
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400">Expertise</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            From modern JavaScript full-stack development to technical search engine optimization and digital marketing strategy.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${
              activeCategory === "all"
                ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-cyan-400 text-slate-950 shadow-md shadow-cyan-400/20"
                  : "border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              <Icon name={cat.icon} size={14} />
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedCategories.map((group) => (
            <article
              key={group.id}
              className="glow-card flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                      group.color === "cyan"
                        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        : "border-violet-400/20 bg-violet-400/10 text-violet-300"
                    }`}
                  >
                    <Icon name={group.icon} size={20} />
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {group.headline}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-white">
                  {group.name}
                </h3>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                  {group.description}
                </p>

                <div className="mt-6 space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-900/50 px-3.5 py-2 text-xs transition hover:border-slate-700 hover:bg-slate-900/80"
                    >
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="rounded-md bg-slate-800/80 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400">
                <span>Continuously practicing</span>
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

