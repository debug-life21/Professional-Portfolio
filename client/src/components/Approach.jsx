import Icon from "./Icons.jsx";

const services = [
  {
    number: "01",
    title: "Full-Stack MERN Development",
    category: "Web Engineering",
    description:
      "Architecting and shipping end-to-end web applications using MongoDB, Express.js, React, and Node.js with secure RESTful APIs and modern state management.",
    icon: "code",
    accent: "cyan",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JWT Auth"],
  },
  {
    number: "02",
    title: "Modern Front-End Engineering",
    category: "User Experience",
    description:
      "Crafting responsive, high-performance, and accessible web interfaces with clean component architectures, Tailwind CSS, and smooth micro-interactions.",
    icon: "layers",
    accent: "violet",
    skills: ["React 19", "Tailwind CSS", "JavaScript (ES6+)", "Responsive UI", "CSS3 / Animation"],
  },
  {
    number: "03",
    title: "Digital Marketing & SEO Growth",
    category: "Audience & Reach",
    description:
      "Boosting organic visibility, driving traffic, and optimizing conversion rates through search engine optimization (SEO), data analytics, and digital campaigns.",
    icon: "trendingUp",
    accent: "cyan",
    skills: ["SEO Optimization", "Content Strategy", "Social Media Marketing", "Analytics", "Audience Growth"],
  },
  {
    number: "04",
    title: "Backend & Database Management",
    category: "Architecture",
    description:
      "Designing structured data schemas, relational and NoSQL databases, scalable routing, server-side business logic, and third-party API integrations.",
    icon: "database",
    accent: "violet",
    skills: ["Node.js", "MongoDB / Mongoose", "MySQL", "PHP Basics", "CRUD Workflows"],
  },
];

export default function Approach() {
  return (
    <section id="services" className="section-space relative">
      <div className="section-shell">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="eyebrow mb-3">
              <span className="eyebrow-dot" />
              What I Offer
            </div>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
            Bridging technical full-stack engineering with strategic digital marketing to build products that work seamlessly and get discovered.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="glow-card group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/60 p-7 transition duration-300 hover:-translate-y-1 sm:p-8 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-13 w-13 items-center justify-center rounded-2xl border ${
                      service.accent === "cyan"
                        ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                        : "border-violet-400/20 bg-violet-400/10 text-violet-300"
                    }`}
                  >
                    <Icon name={service.icon} size={24} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-slate-800 bg-slate-900/90 px-2.5 py-0.5 text-[11px] font-medium text-slate-400">
                      {service.category}
                    </span>
                    <span className="font-mono text-xs font-semibold text-slate-500">
                      {service.number}
                    </span>
                  </div>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-white group-hover:text-cyan-200 transition">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800/60 flex flex-wrap gap-2">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition group-hover:border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

