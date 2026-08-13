import { FiGithub, FiExternalLink } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import { projects } from "../data/content";
import Container from "./Container";

function ProjectCard({ project }) {
  return (
    <div className="project-reveal group relative">
      {/* Project Card */}
      <div className="glass-strong glow-ring relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
        {/* Hover Glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
          style={{
            background:
              "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
          }}
        />

        {/* Content */}
        <div className="relative flex h-full flex-col">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          <p
            className="mt-3 flex-1 text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {project.description}
          </p>

          {/* Tags */}
          {project.tags?.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="glass rounded-full px-3 py-1 font-[var(--font-mono)] text-xs"
                  style={{ color: "var(--accent-2)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="mt-6 flex items-center gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:opacity-80"
                style={{ color: "var(--text)" }}
              >
                <FiGithub size={16} />
                Code
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:scale-105 hover:opacity-80"
                style={{ color: "var(--text)" }}
              >
                <FiExternalLink size={16} />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <Container>
      <div className="project-reveal group relative">
        <div className="glass glow-ring relative overflow-hidden rounded-3xl border-dashed p-10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
          {/* Hover Glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background:
                "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
            }}
          />

          <p className="relative text-lg font-medium">Projects coming soon</p>

          {/* 
          <p
            className="relative mx-auto mt-2 max-w-md text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Add entries to the{" "}
            <code className="font-[var(--font-mono)]">projects</code> array in{" "}
            <code className="font-[var(--font-mono)]">
              src/data/content.js
            </code>{" "}
            and they'll appear here as cards automatically.
          </p>
          */}
        </div>
      </div>
    </Container>
  );
}

export default function Projects() {
  const rootRef = useScrollReveal(".project-reveal");

  return (
    <section id="projects" ref={rootRef} className="relative py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Section Heading */}
          <div className="project-reveal mb-12">
            <p
              className="font-[var(--font-mono)] text-xs tracking-widest"
              style={{ color: "var(--accent-2)" }}
            >
              PROJECTS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Selected work
            </h2>
          </div>

          {/* Projects */}
          {projects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </Container>
    </section>
  );
}
