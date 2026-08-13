import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import { profile } from "../data/content";
import Container from "./Container";

export default function Contact() {
  const rootRef = useScrollReveal(".contact-reveal");

  return (
    <section id="contact" ref={rootRef} className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          <p
            className="contact-reveal font-[var(--font-mono)] text-xs tracking-widest"
            style={{ color: "var(--accent-2)" }}
          >
            CONTACT
          </p>

          <h2 className="contact-reveal mt-3 font-[var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl">
            Let's build something
          </h2>

          <p
            className="contact-reveal mt-4 max-w-md text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Open for opportunities in full-stack development. Based in
            Islamabad, Pakistan. Available worldwide.
          </p>

          {/* Contact Card */}
          <div className="contact-reveal group relative mt-10 flex max-w-md flex-col items-center gap-5 overflow-hidden rounded-3xl glass-strong glow-ring p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
            {/* Purple Hover Glow */}
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-50"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
              }}
            />

            {/* Cyan Hover Glow */}
            <div
              className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
              style={{
                background:
                  "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
              }}
            />

            {/* Email Button */}
            <a
              href={`mailto:${profile.email}`}
              className="relative flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(120deg, var(--accent-1), var(--accent-2))",
              }}
            >
              <FiMail size={18} />
              {profile.email}
            </a>

            {/* Social Links */}
            <div className="relative flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FiGithub size={18} />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
