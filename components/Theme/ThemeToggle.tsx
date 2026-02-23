"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="font-mono text-[10px] tracking-widest uppercase
                 border border-[#404040] rounded px-2.5 py-1.5
                 text-[#404040] hover:text-[#00ff88] hover:border-[#00ff88]
                 transition-colors duration-200 flex items-center gap-2"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
      <span>{theme === "dark" ? "DARK" : "LIGHT"}</span>
    </button>
  );
}
