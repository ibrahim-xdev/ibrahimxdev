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
            {/* About */}
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

              <div className="about-reveal glass-strong rounded-3xl p-8 sm:p-10">
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

            {/* Education */}
            <div className="about-reveal">
              <p
                className="font-[var(--font-mono)] text-xs tracking-widest"
                style={{ color: "var(--accent-2)" }}
              >
                EDUCATION
              </p>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="glass-strong glow-ring mt-10 rounded-3xl p-8 sm:p-10">
                  <div>
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

                <div className="about-reveal">
                  <div className="glass-strong glow-ring mt-10 rounded-3xl p-8 sm:p-10">
                    <div>
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
