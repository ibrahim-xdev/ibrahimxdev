import { experiences } from "../data/content";
import Container from "./Container";

function Experience() {
  return (
    <section id="experience" className="relative py-24 scroll-mt-24">
      <Container>
        {" "}
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
                className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl sm:p-8"
              >
                <div
                  className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-30 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
                  }}
                />

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
                      className="rounded-full px-3 py-1 font-[var(--font-mono)] text-xs"
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
