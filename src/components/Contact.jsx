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
            Open for opportunities in full-stack developmenent. Based in
            Islambad, Pakistan. Available worldwide.
          </p>

          <div className="contact-reveal glass-strong glow-ring mt-10 flex max-w-md flex-col items-center gap-5 rounded-3xl p-8">
            <a
              href={`mailto:${profile.email}`}
              className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 font-medium text-white transition-transform hover:scale-[1.02]"
              style={{
                background:
                  "linear-gradient(120deg, var(--accent-1), var(--accent-2))",
              }}
            >
              <FiMail size={18} />
              {profile.email}
            </a>

            <div className="flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
              >
                <FiGithub size={18} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="glass flex h-11 w-11 items-center justify-center rounded-full transition-transform hover:scale-110"
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
