"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "./projects-data";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">
              02 / Projects
            </span>
            <div className="flex-1 h-px bg-[#1f1f1f]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] tracking-tight">
            What I&apos;ve Built
          </h2>
          <p className="mt-3 text-sm text-[#606060] max-w-lg">
            Systems tools, quantitative models, and ML experiments — mostly in C, Python, and CUDA.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/zainbabar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#404040] hover:text-[#00ff88] transition-colors tracking-wider"
          >
            ↗ See all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
