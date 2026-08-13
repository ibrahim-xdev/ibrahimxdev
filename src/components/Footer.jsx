import { profile } from "../data/content";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative py-8">
      <Container>
        {" "}
        <div className="max-w-4xl mx-auto border border-slate-700"></div>
        <div
          className="flex justify-between mt-3 mx-auto max-w-4xl text-center font-[var(--font-mono)] text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>{" "}
          <p>Built with React, Vite & Tailwind.</p>
        </div>
      </Container>
    </footer>
  );
}
