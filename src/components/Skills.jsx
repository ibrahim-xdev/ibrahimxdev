import useScrollReveal from "../hooks/useScrollReveal";
import { skillGroups } from "../data/content";

export default function Skills() {
  const rootRef = useScrollReveal(".skill-reveal");

  return (
    <section id="skills" ref={rootRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="skill-reveal mb-12">
          <p
            className="font-[var(--font-mono)] text-xs tracking-widest"
            style={{ color: "var(--accent-2)" }}
          >
            SKILLS
          </p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools I build with
          </h2>
        </div>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-reveal">
              <h3
                className="mb-4 font-[var(--font-mono)] text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="glass rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105"
                    style={{ color: "var(--text)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
