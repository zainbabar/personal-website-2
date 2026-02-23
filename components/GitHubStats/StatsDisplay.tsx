"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, BookOpen, Users, ExternalLink } from "lucide-react";

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  fork: boolean;
}

export interface GitHubData {
  login: string;
  public_repos: number;
  followers: number;
  stars: number;
  topLangs: { name: string; count: number }[];
  repos: Repo[];
}

const LANG_COLORS: Record<string, string> = {
  C:          "#555599",
  "C++":      "#f34b7d",
  Python:     "#3572A5",
  Rust:       "#dea584",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Go:         "#00ADD8",
  CUDA:       "#3A4E3A",
  Lua:        "#000080",
};

function useCountUp(target: number, duration = 1200, startDelay = 0) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let start: number | null = null;
    const timeout = setTimeout(() => {
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.floor(eased * target));
        if (progress < 1) rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, startDelay]);

  return value;
}

function StatCard({
  icon,
  label,
  value,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  delay: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const count = useCountUp(inView ? value : 0, 1000, delay);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="bg-card border border-border rounded-xl p-6 flex flex-col items-center gap-2 hover:border-accent-border transition-colors"
    >
      <span className="text-accent">{icon}</span>
      <span className="font-mono text-3xl font-bold text-foreground">{count}</span>
      <span className="font-mono text-xs text-muted tracking-widest uppercase">{label}</span>
    </motion.div>
  );
}

export default function StatsDisplay({ data }: { data: GitHubData }) {
  const maxLangCount = Math.max(...data.topLangs.map((l) => l.count), 1);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-accent tracking-widest uppercase">
              05 / GitHub
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Activity
          </h2>
          <p className="mt-3 text-sm text-text-description max-w-lg">
            Live stats pulled from the GitHub API.
          </p>
        </motion.div>

        {/* Stat tiles */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <StatCard icon={<BookOpen size={20} />} label="Repos"     value={data.public_repos} delay={0}   />
          <StatCard icon={<Star size={20} />}     label="Stars"     value={data.stars}        delay={100} />
          <StatCard icon={<Users size={20} />}    label="Followers" value={data.followers}    delay={200} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Languages */}
          {data.topLangs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
                Top Languages
              </div>
              <div className="space-y-4">
                {data.topLangs.map((lang, i) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: LANG_COLORS[lang.name] ?? "#606060" }}
                        />
                        <span className="font-mono text-sm text-text-secondary">{lang.name}</span>
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {lang.count} repo{lang.count !== 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="h-1 bg-card-hover rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(lang.count / maxLangCount) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: LANG_COLORS[lang.name] ?? "#606060" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Repos list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="font-mono text-xs text-muted tracking-widest uppercase mb-5">
              Repositories
            </div>
            <div className="space-y-3">
              {data.repos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-card-hover transition-colors group"
                >
                  <div className="min-w-0">
                    <div className="font-mono text-sm text-foreground group-hover:text-accent transition-colors truncate">
                      {repo.name}
                    </div>
                    {repo.description && (
                      <div className="font-mono text-xs text-muted mt-0.5 truncate">
                        {repo.description}
                      </div>
                    )}
                    <div className="flex items-center gap-3 mt-1.5">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: LANG_COLORS[repo.language] ?? "#606060" }}
                          />
                          <span className="font-mono text-xs text-muted">{repo.language}</span>
                        </div>
                      )}
                      {repo.stargazers_count > 0 && (
                        <div className="flex items-center gap-1 text-muted">
                          <Star size={10} />
                          <span className="font-mono text-xs">{repo.stargazers_count}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-text-faint group-hover:text-muted transition-colors flex-shrink-0 mt-1" />
                </motion.a>
              ))}
            </div>

            <a
              href={`https://github.com/${data.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-5 pt-4 border-t border-border-deep font-mono text-xs text-muted hover:text-accent transition-colors"
            >
              <Github size={12} />
              View all on GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
