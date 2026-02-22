"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CalendarDays } from "lucide-react";

interface TimelineItem {
  type: "education" | "work";
  title: string;
  org: string;
  period: string;
  location: string;
  points: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    type: "education",
    title: "Honours Bachelor of Mathematics",
    org: "University of Waterloo",
    period: "2023 — Present",
    location: "Waterloo, ON",
    points: [
      "Studying Applied Mathematics, Statistics, and Computational Finance",
      "Relevant coursework: Stochastic Calculus, Numerical Analysis, Linear Algebra, Probability Theory",
      "Interested in mathematical finance, derivative pricing, and algorithmic trading strategies",
      "Co-op program — pursuing quantitative research and software engineering internships",
    ],
  },
  {
    type: "work",
    title: "Coding Instructor",
    org: "Code Ninjas",
    period: "2022 — 2023",
    location: "Mississauga, ON",
    points: [
      "Taught programming fundamentals to students aged 7–14 using Scratch and JavaScript",
      "Designed game-development projects that reinforced loops, conditionals, and functions",
      "Adapted curriculum to different learning paces; mentored students through debugging exercises",
      "Developed patience and communication skills by breaking down complex concepts simply",
    ],
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6">
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
            <span className="font-mono text-xs text-[#00ff88] tracking-widest uppercase">
              04 / Experience
            </span>
            <div className="flex-1 h-px bg-[#1f1f1f]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] tracking-tight">
            Background
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-[#1f1f1f] hidden md:block" />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="md:pl-16 relative"
              >
                {/* Icon dot */}
                <div className="hidden md:flex absolute left-0 top-5 w-10 h-10 items-center justify-center rounded-full border border-[#1f1f1f] bg-[#111111] text-[#00ff88] z-10">
                  {item.type === "education" ? (
                    <GraduationCap size={16} />
                  ) : (
                    <Briefcase size={16} />
                  )}
                </div>

                <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-7 hover:border-[#2a2a2a] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      {/* Mobile icon */}
                      <div className="md:hidden flex items-center gap-2 mb-2 text-[#00ff88]">
                        {item.type === "education" ? (
                          <GraduationCap size={14} />
                        ) : (
                          <Briefcase size={14} />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-[#e5e5e5]">{item.title}</h3>
                      <div className="font-mono text-sm text-[#00ff88] mt-0.5">{item.org}</div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <div className="flex items-center gap-1.5 font-mono text-xs text-[#404040]">
                        <CalendarDays size={11} />
                        <span>{item.period}</span>
                      </div>
                      <div className="font-mono text-xs text-[#404040]">{item.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#606060]">
                        <span className="text-[#00ff88] flex-shrink-0 mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
