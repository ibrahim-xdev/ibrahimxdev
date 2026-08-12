import useScrollReveal from "../hooks/useScrollReveal";
import { about } from "../data/content";

export default function About() {
  const rootRef = useScrollReveal(".about-reveal");

  return (
    <section id="about" ref={rootRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
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
                i > 0 ? "mt-4" : ""
              }`}
              style={{ color: "var(--text-muted)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
