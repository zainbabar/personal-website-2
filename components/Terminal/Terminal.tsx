"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { COMMANDS, BOOT_LINES, CommandOutput } from "./commands";

interface HistoryEntry {
  command?: string;
  outputs: CommandOutput[];
}

export default function Terminal() {
  const [bootDone, setBootDone] = useState(false);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setBootLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setBootDone(true);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll the terminal container only — never the page
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [bootLines, history]);

  const focusInput = () => inputRef.current?.focus({ preventScroll: true });

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      if (cmd === "clear") {
        setHistory([]);
        setCmdHistory((prev) => [cmd, ...prev]);
        setCmdIndex(-1);
        setInput("");
        return;
      }

      const outputs: CommandOutput[] =
        COMMANDS[cmd] ??
        (cmd.startsWith("sudo ") ? COMMANDS["sudo"] : null) ??
        [
          {
            type: "error",
            content: `Command not found: "${cmd}". Type "help" for options.`,
          },
        ];

      setHistory((prev) => [...prev, { command: raw.trim(), outputs }]);
      setCmdHistory((prev) => [cmd, ...prev]);
      setCmdIndex(-1);
      setInput("");
    },
    []
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(cmdIndex - 1, -1);
      setCmdIndex(next);
      setInput(next === -1 ? "" : cmdHistory[next] ?? "");
    }
  };

  const outputColor = (type: CommandOutput["type"]) => {
    switch (type) {
      case "success": return "text-accent";
      case "error":   return "text-red-400";
      case "link":    return "text-blue-400 underline cursor-pointer";
      default:        return "text-text-secondary";
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl"
      >
        {/* Window chrome */}
        <div className="bg-card border border-border rounded-xl overflow-hidden terminal-shadow">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-card-deep border-b border-border">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="font-mono text-xs text-muted ml-4">
              zain@portfolio — bash
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollContainerRef}
            className="relative p-6 min-h-[380px] max-h-[520px] overflow-y-auto cursor-text"
            onClick={focusInput}
          >
            <div className="terminal-scanline" />

            {/* Boot lines */}
            {bootLines.map((line, i) => (
              <div
                key={i}
                className="font-mono text-sm text-muted leading-relaxed"
              >
                {i === bootLines.length - 1 && !bootDone ? (
                  <>
                    {line}
                    <span className="cursor-blink ml-0.5">█</span>
                  </>
                ) : (
                  line
                )}
              </div>
            ))}

            {bootDone && (
              <>
                {/* History */}
                {history.map((entry, idx) => (
                  <div key={idx} className="mt-3">
                    {entry.command && (
                      <div className="font-mono text-sm text-foreground flex items-center gap-1">
                        <span className="text-accent">❯</span>
                        <span>{entry.command}</span>
                      </div>
                    )}
                    {entry.outputs.map((out, oi) => (
                      <div
                        key={oi}
                        className={`font-mono text-sm leading-relaxed ${outputColor(out.type)}`}
                        onClick={
                          out.type === "link" && out.href
                            ? () => window.open(out.href, "_blank")
                            : undefined
                        }
                      >
                        {Array.isArray(out.content)
                          ? out.content.join("\n")
                          : out.content}
                      </div>
                    ))}
                  </div>
                ))}

                {/* Active input line */}
                <div className="mt-3 flex items-center gap-1 font-mono text-sm text-foreground">
                  <span className="text-accent">❯</span>
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full bg-transparent outline-none text-foreground caret-accent font-mono text-sm"
                      spellCheck={false}
                      autoComplete="off"
                    />
                    {input === "" && (
                      <span className="absolute left-0 top-0 cursor-blink text-accent select-none pointer-events-none">
                        █
                      </span>
                    )}
                  </div>
                </div>
              </>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

      </motion.div>
    </section>
  );
}
