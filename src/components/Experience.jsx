import { experiences } from "../data/content";
import Container from "./Container";

function Experience() {
  return (
    <section id="experience" className="relative py-24 scroll-mt-24">
      <Container>
        <div className="mx-auto w-full max-w-4xl">
          <p
            className="font-[var(--font-mono)] text-xs tracking-widest"
            style={{ color: "var(--accent-2)" }}
          >
            EXPERIENCE
          </p>

          <h2 className="mt-2 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Where I've worked
          </h2>

          <div className="mt-12 space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl glass-strong glow-ring p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-8"
              >
                {/* Hover Glow */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
                  style={{
                    background:
                      "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
                  }}
                />

                {/* Secondary Glow */}
                <div
                  className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
                  }}
                />

                {/* Card Content */}
                <div className="relative flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-[var(--font-display)] text-lg font-semibold">
                      {exp.role}
                    </h3>

                    <p
                      className="font-[var(--font-mono)] text-sm"
                      style={{ color: "var(--accent-2)" }}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <span
                    className="font-[var(--font-mono)] text-xs whitespace-nowrap"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  className="relative mt-4 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {exp.description}
                </p>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 font-[var(--font-mono)] text-xs transition-all duration-300 group-hover:border-[var(--accent-1)]"
                      style={{
                        background:
                          "var(--surface-muted, rgba(255,255,255,0.05))",
                        color: "var(--text-muted)",
                        border:
                          "1px solid var(--border-color, rgba(255,255,255,0.1))",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
