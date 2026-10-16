import Icon from "./Icons.jsx";

const qualities = [
  "Self-Driven Learner",
  "MERN Stack Specialist",
  "Problem Solver",
  "SEO & Growth Mindset",
  "Detail Oriented",
  "Team Player",
  "Continuous Builder",
];

const educationHighlights = [
  "Algorithms & Data Structures",
  "Database Management Systems",
  "Web Programming & Software Design",
  "Computer Networks & Security",
];

export default function About() {
  return (
    <section id="about" className="section-space border-y border-white/[0.04] bg-slate-950/40 relative">
      <div className="section-shell">
        <div className="mb-14 max-w-3xl">
          <div className="eyebrow mb-3">
            <span className="eyebrow-dot" />
            Background &amp; Story
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Passionate Student, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400">Relentless Builder</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
            I combine rigorous university computer science education with self-directed online mastery in modern JavaScript ecosystems and digital growth marketing.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          {/* Main Bio & Story */}
          <div className="space-y-6 lg:col-span-7">
            <article className="glass-panel rounded-3xl p-7 sm:p-8">
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Icon name="user" size={20} />
                </span>
                About Me
              </h3>

              <div className="mt-5 space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
                <p>
                  I am <strong className="text-white font-semibold">Wendemachew Tsegaye</strong>, a 3rd-year Computer Science student at <strong className="text-cyan-200 font-semibold">Debark University</strong> in Ethiopia. From my earliest days exploring technology, I fell in love with creating tools that solve practical challenges.
                </p>
                <p>
                  As an <strong className="text-white font-semibold">online self-learner</strong>, I took initiative beyond the lecture hall to master the full-stack JavaScript ecosystem—focusing on the <strong className="text-cyan-300 font-semibold">MERN stack (MongoDB, Express.js, React, Node.js)</strong>. I spend hours researching documentation, reading codebases, and shipping real functional projects.
                </p>
                <p>
                  Complementing my coding skills, I am also an active <strong className="text-violet-300 font-semibold">Digital Marketer</strong>. I understand how to position products, leverage search engine optimization (SEO), craft compelling messaging, and utilize analytics to convert traffic into engaged users.
                </p>
              </div>

              <div className="mt-7 pt-6 border-t border-slate-800/80">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Core Qualities &amp; Mindset
                </p>
                <div className="flex flex-wrap gap-2">
                  {qualities.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Education Box */}
            <article className="glass-panel rounded-3xl p-7 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                    <Icon name="academic" size={20} />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white">
                      B.Sc. in Computer Science
                    </h3>
                    <p className="text-sm font-medium text-cyan-200">
                      Debark University, Ethiopia • 3rd Year Undergrad
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-950/60 px-3 py-1 text-xs font-semibold text-cyan-300 whitespace-nowrap">
                  In Progress
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Acquiring deep theoretical grounding in computational theory, software design principles, algorithms, and system architecture.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {educationHighlights.map((course) => (
                  <div key={course} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-cyan-300">
                      <Icon name="check" size={14} />
                    </span>
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>

          {/* Right Column: CV Spotlight Card & Self-Learning Timeline */}
          <div className="space-y-6 lg:col-span-5">
            {/* Dedicated CV / Resume Spotlight Card */}
            <div className="glow-card relative rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-cyan-950/40 p-7 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 border border-cyan-400/30">
                  <Icon name="fileText" size={24} />
                </span>
                <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-mono font-semibold text-cyan-300">
                  PDF Available
                </span>
              </div>

              <h4 className="mt-5 font-heading text-2xl font-bold text-white">
                Curriculum Vitae
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Want a complete overview of my education, MERN stack skills, certifications, and project experience? Grab a copy of my resume.
              </p>

              <div className="mt-6 space-y-2.5 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Candidate:</span>
                  <span className="font-semibold text-slate-200">Wendemachew Tsegaye</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="font-semibold text-cyan-300">3rd Year CS Student</span>
                </div>
                <div className="flex justify-between">
                  <span>Specialization:</span>
                  <span className="font-semibold text-slate-200">Full-Stack MERN &amp; SEO</span>
                </div>
                <div className="flex justify-between">
                  <span>File Format:</span>
                  <span className="font-mono text-cyan-300">PDF • Ready to Print (A4)</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <a
                  href="/Wendemu_Resume.pdf"
                  download="Wendemachew_Tsegaye_Resume.pdf"
                  className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:from-cyan-300 hover:to-white hover:shadow-cyan-400/40 hover:-translate-y-0.5"
                >
                  <Icon name="download" size={18} className="transition-transform group-hover:translate-y-0.5" />
                  <span>Download Complete CV (PDF)</span>
                </a>

                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                >
                  <Icon name="fileText" size={14} className="text-cyan-300" />
                  <span>View Online CV / Print</span>
                </a>
              </div>
            </div>

            {/* Self-Learning Journey Card */}
            <article className="glass-panel rounded-3xl p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                  <Icon name="spark" size={20} />
                </span>
                <h4 className="font-heading text-xl font-bold text-white">
                  Self-Taught Philosophy
                </h4>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                &ldquo;True mastery in tech comes from curiosity, disciplined self-learning, and relentless building. Every day is a chance to learn a new pattern, optimize a query, or refine user experience.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-800/80 pt-4">
                <div className="h-8 w-8 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-300 font-mono font-bold text-xs">
                  WT
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Wendemachew Tsegaye</p>
                  <p className="text-[11px] text-slate-500">MERN Developer &amp; Marketer</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

