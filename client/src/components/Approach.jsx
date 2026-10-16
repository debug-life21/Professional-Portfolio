import Icon from "./Icons.jsx";

const principles = [
  {
    number: "01",
    title: "Understand the system",
    description:
      "Start with the real problem, the people using it, and how the pieces need to work together.",
    icon: "layers",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Build with clarity",
    description:
      "Keep logic modular, interfaces purposeful, and implementation straightforward to maintain.",
    icon: "code",
    accent: "violet",
  },
  {
    number: "03",
    title: "Test the details",
    description:
      "Trace defects, verify expected behavior, and treat reliability as part of the build.",
    icon: "shield",
    accent: "cyan",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section-space">
      <div className="section-shell">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="">How I work</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-100 sm:text-4xl">
              Thoughtful from{" "}
              <span className="text-violet-400">start to finish.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Good software is more than code. It should solve the right problem
            and be dependable after delivery.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="group rounded-2xl border border-slate-800/80 bg-slate-950/55 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-slate-900/60"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border ${principle.accent === "cyan" ? "border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200" : "border-violet-300/15 bg-violet-400/[0.07] text-violet-300"}`}
                >
                  <Icon name={principle.icon} size={19} />
                </span>
                <span className="font-mono text-xs text-slate-600">
                  {principle.number}
                </span>
              </div>
              <h3 className="mt-6 text-base font-semibold text-slate-100">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
