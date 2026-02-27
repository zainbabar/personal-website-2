"use client";

import { motion } from "framer-motion";

interface Props {
  zainLines: string[];
  babarLines: string[];
}

export default function AsciiReveal({ zainLines, babarLines }: Props) {
  const allLines = [...zainLines, ...babarLines];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.4 }}
      className="mt-10 text-center"
    >
      {/* ASCII name block */}
      <div className="inline-block text-left overflow-x-auto max-w-full">
        <pre className="font-mono text-[clamp(6px,1.4vw,13px)] leading-tight select-none">
          {allLines.map((line, i) => {
            const isZain = i < zainLines.length;
            const delay = 1.9 + i * 0.04;

            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay, duration: 0.25, ease: "easeOut" }}
                className={`block ${
                  isZain ? "text-accent" : "text-accent-secondary"
                }`}
              >
                {line}
              </motion.span>
            );
          })}
        </pre>
      </div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 0.6 }}
        className="mt-4 font-mono text-xs text-muted tracking-widest"
      >
        Math @ UWaterloo &nbsp;·&nbsp; Quant Finance &nbsp;·&nbsp; AI &nbsp;·&nbsp; Systems
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="mt-6 flex justify-center gap-4"
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-2.5 border border-accent text-accent font-mono text-xs rounded hover:bg-accent-hover transition-colors tracking-widest uppercase"
        >
          Contact
        </a>
      </motion.div>
    </motion.div>
  );
}
