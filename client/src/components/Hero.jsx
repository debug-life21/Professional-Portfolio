import { useState } from "react";
import Icon from "./Icons.jsx";

const profilePhoto = "/profile.jpg";
const cvPdfPath = "/Wendemu_Resume.pdf";

const quickLinks = [
  { label: "Email", href: "mailto:debuglife1221@gmail.com", icon: "mail" },
  { label: "Call", href: "tel:+251903166512", icon: "phone" },
  { label: "GitHub", href: "https://github.com/debug-life21", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/wendmachew-tsegaye",
    icon: "linkedin",
  },
];

const highlights = [
  { label: "Education", value: "3rd Year CS", sub: "Debark University" },
  { label: "Core Stack", value: "MERN Stack", sub: "Mongo, Express, React, Node" },
  { label: "Growth", value: "Digital Marketer", sub: "SEO & Content Strategy" },
  { label: "Focus", value: "Self-Learner", sub: "Continuous Building" },
];

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5rem)] items-center py-16 sm:py-24"
    >
      {/* Ambient gradient lights */}
      <div className="pointer-events-none absolute -left-28 top-12 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-96 w-96 rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-900/5 blur-[140px]" />

      <div className="section-shell relative w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="reveal">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-950/40 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-cyan-200">
                3rd Year CS Student • Self-Taught MERN &amp; Digital Marketer
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem] leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400">
                Wendemachew
              </span>{" "}
              Tsegaye
            </h1>

            {/* Subtitle */}
            <p className="mt-4 font-heading text-xl font-semibold text-cyan-200 sm:text-2xl">
              Full-Stack JavaScript (MERN) Developer &amp; Digital Marketer
            </p>

            {/* Bio paragraph */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A passionate 3rd-year Computer Science student at Debark University and relentless online self-learner.
              I design and engineer responsive web applications using <span className="font-semibold text-white">MongoDB, Express.js, React, and Node.js</span>, while driving online visibility through <span className="font-semibold text-white">data-backed SEO &amp; digital marketing</span>.
            </p>

            {/* Primary Action Buttons including prominent Download CV */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={cvPdfPath}
                download="Wendemachew_Tsegaye_Resume.pdf"
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-400 p-[1px] font-semibold shadow-[0_10px_30px_-10px_rgba(34,211,238,0.5)] transition hover:shadow-[0_15px_35px_-8px_rgba(34,211,238,0.7)] hover:-translate-y-0.5"
              >
                <span className="inline-flex h-full w-full items-center gap-2.5 rounded-[11px] bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-opacity-80">
                  <Icon name="download" size={17} className="text-cyan-300 group-hover:animate-bounce" />
                  <span>Download CV</span>
                  <span className="rounded-md bg-cyan-400/15 px-2 py-0.5 text-[11px] font-mono font-medium text-cyan-300">
                    PDF
                  </span>
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:border-cyan-400/50 hover:bg-slate-800/80 hover:text-white hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <Icon name="arrow" size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-cyan-500/10 px-4 py-3 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20 hover:text-cyan-200 hover:-translate-y-0.5"
              >
                <span>Let&apos;s Connect</span>
                <Icon name="arrowUpRight" size={15} />
              </a>
            </div>

            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Connect:
              </span>
              {quickLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-slate-800 hover:text-cyan-200"
                >
                  <Icon name={icon} size={15} />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Highlight Badges Strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-slate-800/80 pt-6">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border border-slate-800/60 bg-slate-950/40 p-3 backdrop-blur-sm">
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
                    {item.label}
                  </dt>
                  <dd className="mt-1 font-heading text-sm font-bold text-white sm:text-base">
                    {item.value}
                  </dd>
                  <p className="mt-0.5 text-[11px] text-slate-500 truncate">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Portrait & Floating Badges */}
          <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Ambient glow underneath */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-violet-500/20 to-sky-400/20 blur-2xl" />

            <div className="glass-panel relative overflow-hidden rounded-3xl p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950/80">
                {!photoFailed ? (
                  <img
                    src={profilePhoto}
                    alt="Portrait of Wendemachew Tsegaye"
                    className="aspect-[4/5] w-full object-cover object-top transition duration-500 hover:scale-[1.02]"
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full flex-col items-center justify-center bg-slate-900 text-center p-6">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
                      <Icon name="user" size={48} />
                    </div>
                    <p className="mt-4 font-heading text-lg font-bold text-white">
                      Wendemachew Tsegaye
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Full-Stack MERN Developer
                    </p>
                  </div>
                )}

                {/* Subtle gradient overlay at the bottom of the photo */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="font-heading text-base font-bold text-white">
                      Wendemachew Tsegaye
                    </p>
                    <p className="text-xs text-cyan-300">
                      Debark University • CS 3rd Year
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Tech Chip: Top Right */}
            <div className="animate-float absolute -top-4 -right-2 sm:-right-4 hidden sm:flex items-center gap-2.5 rounded-2xl border border-cyan-400/30 bg-slate-900/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <Icon name="code" size={17} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Stack</p>
                <p className="text-xs font-bold text-cyan-200">Full-Stack MERN</p>
              </div>
            </div>

            {/* Floating Tech Chip: Bottom Left */}
            <div className="animate-float-delayed absolute -bottom-5 -left-2 sm:-left-4 hidden sm:flex items-center gap-2.5 rounded-2xl border border-violet-400/30 bg-slate-900/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-md">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300">
                <Icon name="trendingUp" size={17} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Expertise</p>
                <p className="text-xs font-bold text-violet-200">Digital Marketing &amp; SEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

