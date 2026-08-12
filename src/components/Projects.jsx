import { FiGithub, FiExternalLink } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import { projects } from "../data/content";

function ProjectCard({ project }) {
  return (
    <div className="project-reveal glass-strong group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-transform hover:-translate-y-1">
      <div
        className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--accent-1) 0%, transparent 70%)",
        }}
      />
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p
        className="mt-3 flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {project.description}
      </p>

      {project.tags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="glass rounded-full px-3 py-1 font(--font-mono)] text-xs"
              style={{ color: "var(--accent-2)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex items-center gap-4">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--text)" }}
          >
            <FiGithub size={16} /> Code
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
            style={{ color: "var(--text)" }}
          >
            <FiExternalLink size={16} /> Live
          </a>
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="project-reveal glass rounded-3xl border-dashed p-10 text-center">
      <p className="font-medium text-lg">Projects coming soon</p>
      {/* <p
        className="mx-auto mt-2 max-w-md text-sm leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        Add entries to the <code className="font-[var(--font-mono)]">projects</code>{" "}
        array in{" "}
        <code className="font-[var(--font-mono)]">src/data/content.js</code>{" "}
        and they'll appear here as cards automatically.
      </p> */}
    </div>
  );
}

export default function Projects() {
  const rootRef = useScrollReveal(".project-reveal");

  return (
    <section id="projects" ref={rootRef} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="project-reveal mb-12">
          <p
            className="font-(--font-mono)] text-xs tracking-widest"
            style={{ color: "var(--accent-2)" }}
          >
            PROJECTS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
        </div>

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
    </section>
  );
}
