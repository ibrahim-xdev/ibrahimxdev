import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "../data/content";
import Container from "./Container";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { opacity: 0, y: 16, duration: 0.6 })
        .from(".hero-name", { opacity: 0, y: 24, duration: 0.7 }, "-=0.35")
        .from(".hero-title", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
        .from(".hero-tagline", { opacity: 0, y: 16, duration: 0.6 }, "-=0.35")
        .from(
          ".hero-cta",
          { opacity: 0, y: 16, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        )
        .from(
          ".hero-card",
          { opacity: 0, scale: 0.94, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.6",
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-screen items-center pt-28 pb-16"
    >
      <Container>
        <div className="mx-auto grid w-full max-w-4xl gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p
              className="hero-eyebrow mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-[var(--font-mono)] text-xs tracking-wide glass"
              style={{ color: "var(--accent-2)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--accent-2)" }}
              />
              Available for opportunities
            </p>

            <h1 className="hero-name font-[var(--font-display)] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="hero-title text-gradient mt-4 font-[var(--font-display)] text-xl font-medium sm:text-2xl">
              {profile.title}
            </p>

            <p
              className="hero-tagline mt-5 max-w-lg text-base leading-relaxed sm:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex gap-2">
                {" "}
                <a
                  href="#projects"
                  className="hero-cta glow-ring rounded-full px-6 py-3 font-medium text-white transition-transform hover:scale-[1.03]"
                  style={{
                    background:
                      "linear-gradient(120deg, var(--accent-1), var(--accent-2))",
                  }}
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="hero-cta glass rounded-full px-6 py-3 font-medium transition-transform hover:scale-[1.03]"
                  style={{ color: "var(--text)" }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="hero-card relative mx-auto w-full max-w-sm">
            <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30">
              <div
                className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
                }}
              />
              <p
                className="font-[var(--font-mono)] text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                Currently building
              </p>
              <p className="mt-3 font-[var(--font-display)] text-lg font-semibold">
                Scalable web apps
                <br />& AI-driven software
              </p>
              <div className="mt-6 space-y-3">
                {["Frontend", "Backend", "AI / ML"].map((row, i) => (
                  <div key={row} className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{
                        background:
                          i % 2 === 0 ? "var(--accent-1)" : "var(--accent-2)",
                      }}
                    />
                    <span
                      className="font-[var(--font-mono)] text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {row}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: "var(--text-muted)" }}
        >
          <FiArrowDown size={20} />
        </a>
      </Container>
    </section>
  );
}
