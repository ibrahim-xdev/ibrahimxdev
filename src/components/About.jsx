import useScrollReveal from "../hooks/useScrollReveal";
import { about } from "../data/content";
import Container from "./Container";

export default function About() {
  const rootRef = useScrollReveal(".about-reveal");

  return (
    <section id="about" ref={rootRef} className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto w-full max-w-4xl">
          <div className="grid gap-8 lg:grid-cols-1 lg:items-start">
            {/* ==================== ABOUT ==================== */}
            <div>
              <div className="about-reveal mb-10">
                <p
                  className="font-[var(--font-mono)] text-xs tracking-widest"
                  style={{ color: "var(--accent-2)" }}
                >
                  ABOUT
                </p>

                <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
                  A bit about me
                </h2>
              </div>

              {/* About Card */}
              <div className="about-reveal group relative">
                <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-10">
                  {/* Hover Glow */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background:
                        "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative">
                    {about.paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className={`text-base leading-relaxed sm:text-lg ${
                          i > 0 ? "mt-6" : ""
                        }`}
                        style={{ color: "var(--text-muted)" }}
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== EDUCATION ==================== */}
            <div className="about-reveal">
              <p
                className="font-[var(--font-mono)] text-xs tracking-widest"
                style={{ color: "var(--accent-2)" }}
              >
                EDUCATION
              </p>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* ==================== BS CARD ==================== */}
                <div className="group relative mt-10">
                  <div className="glass-strong glow-ring relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-10">
                    {/* Hover Glow */}
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{
                        background:
                          "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative">
                      <p
                        className="font-[var(--font-mono)] text-xs tracking-widest"
                        style={{ color: "var(--accent-2)" }}
                      >
                        DEGREE
                      </p>

                      <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold">
                        BS in Computer Science
                      </h3>

                      <p
                        className="mt-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        International Islamic University Islamabad
                      </p>

                      <div
                        className="mt-6 border-t pt-5"
                        style={{
                          borderColor:
                            "var(--border-color, rgba(255,255,255,0.1))",
                        }}
                      >
                        <p
                          className="mt-2 text-sm font-medium"
                          style={{ color: "var(--text)" }}
                        >
                          Sep, 2023 - Present
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ==================== HSSC CARD ==================== */}
                <div className="group relative mt-10">
                  <div className="glass-strong glow-ring relative h-full overflow-hidden rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 sm:p-10">
                    {/* Hover Glow */}
                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                      style={{
                        background:
                          "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
                      }}
                    />

                    {/* Content */}
                    <div className="relative">
                      <p
                        className="font-[var(--font-mono)] text-xs tracking-widest"
                        style={{ color: "var(--accent-2)" }}
                      >
                        DEGREE
                      </p>

                      <h3 className="mt-3 font-[var(--font-display)] text-xl font-semibold">
                        HSSC Computer Science
                      </h3>

                      <p
                        className="mt-3 text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Punjab Group of Colleges, Gujar Khan
                      </p>

                      <div
                        className="mt-6 border-t pt-5"
                        style={{
                          borderColor:
                            "var(--border-color, rgba(255,255,255,0.1))",
                        }}
                      >
                        <p
                          className="mt-2 text-sm font-medium"
                          style={{ color: "var(--text)" }}
                        >
                          July 2021 - May 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
