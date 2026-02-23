"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Project, LANG_COLORS } from "./projects-data";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-card border border-border rounded-xl p-6 hover:border-accent-border transition-colors duration-300 flex flex-col"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,var(--accent-glow),transparent_60%)]" />

      {project.featured && (
        <div className="absolute top-4 right-4">
          <span className="font-mono text-[10px] text-accent border border-accent-border bg-accent-hover px-2 py-0.5 rounded tracking-wider">
            FEATURED
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="font-mono text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-200 pr-16">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm text-text-description leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`font-mono text-[10px] border px-2 py-0.5 rounded tracking-wider ${
              LANG_COLORS[tag] ?? "text-text-description border-border-subtle bg-card-hover"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-border-deep flex items-center justify-between">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-muted hover:text-accent transition-colors"
        >
          <Github size={13} />
          <span>View Source</span>
        </a>
        <ExternalLink
          size={13}
          className="text-text-faint group-hover:text-muted transition-colors"
        />
      </div>
    </motion.div>
  );
}
