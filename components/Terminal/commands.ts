export interface CommandOutput {
  type: "text" | "success" | "error" | "table" | "link";
  content: string | string[];
  href?: string;
}

export const COMMANDS: Record<string, CommandOutput[]> = {
  help: [
    { type: "text", content: "Available commands:" },
    { type: "success", content: "  about       →  Who am I" },
    { type: "success", content: "  interests   →  What I care about" },
    { type: "success", content: "  education   →  Academic background" },
    { type: "success", content: "  contact     →  Get in touch" },
    { type: "success", content: "  ls          →  List files" },
    { type: "success", content: "  neofetch    →  System info" },
    { type: "success", content: "  clear       →  Clear terminal" },
    // { type: "success", content: "  skills      →  My stack" },
    // { type: "success", content: "  projects    →  What I've built" },
  ],

  about: [
    { type: "text", content: "┌─────────────────────────────────────────┐" },
    { type: "text", content: "│  Zain Babar                             │" },
    { type: "text", content: "│  Honours Mathematics @ UWaterloo        │" },
    { type: "text", content: "└─────────────────────────────────────────┘" },
    { type: "text", content: "" },
    {
      type: "text",
      content: "Mathematics student at the University of Waterloo.",
    },
    {
      type: "text",
      content: "Building with agent and embodied AI — from tool-use and multi-agent",
    },
    {
      type: "text",
      content: "systems to robots that act in the physical world.",
    },
    { type: "text", content: "" },
    {
      type: "text",
      content: "Also into quant finance and the math that ties it all together.",
    },
    { type: "text", content: "" },
    { type: "success", content: 'Type "interests" to see what I\'m into.' },
  ],

  interests: [
    { type: "text", content: "What I'm into:" },
    { type: "text", content: "" },
    { type: "success", content: "  Agent AI" },
    { type: "text",    content: "  Multi-agent systems, tool use, memory, planning — building AI that actually does things." },
    { type: "text", content: "" },
    { type: "success", content: "  Embodied AI" },
    { type: "text",    content: "  Robots, sim-to-real, foundation models for physical tasks — AI that lives in the world." },
    { type: "text", content: "" },
    { type: "success", content: "  AI / ML" },
    { type: "text",    content: "  LLMs, inference, fine-tuning, scaling — how models are built and why they work." },
    { type: "text", content: "" },
    { type: "success", content: "  Finance" },
    { type: "text",    content: "  Markets, derivatives, quantitative strategies, and the math underneath it all." },
    { type: "text", content: "" },
    { type: "success", content: "  Math" },
    { type: "text",    content: "  Probability, linear algebra, optimization — the foundations behind everything." },
  ],

  // skills: [
  //   { type: "text", content: "Languages:" },
  //   { type: "success", content: "  Python      ████████░░  AI/ML, Quant" },
  //   { type: "success", content: "  TypeScript  ████████░░  Web & APIs" },
  //   { type: "text", content: "" },
  //   { type: "text", content: "Tools & Frameworks:" },
  //   { type: "text", content: "  PyTorch · NumPy · Pandas · Next.js" },
  //   { type: "text", content: "" },
  //   { type: "text", content: "Interests:" },
  //   { type: "text", content: "  Options pricing · LLM inference · Stochastic calculus" },
  // ],

  // projects: [
  //   { type: "text", content: "Notable projects (scroll down for full list):" },
  //   { type: "text", content: "" },
  //   { type: "success", content: "  coming soon..." },
  // ],

  education: [
    { type: "text", content: "University of Waterloo  (2025 – present)" },
    { type: "success", content: "  Degree: Honours Bachelor of Mathematics" },
    {
      type: "text",
      content: "  Focus:  Applied Math, Statistics, Computational Finance",
    },
    { type: "text", content: "" },
    { type: "text", content: "Code Ninjas  (2023 – 2025)" },
    { type: "success", content: "  Role: Instructor" },
    {
      type: "text",
      content: "  Taught Scratch, JavaScript, and game-dev concepts to kids",
    },
  ],

  contact: [
    { type: "text", content: "Reach me at:" },
    { type: "text", content: "" },
    {
      type: "link",
      content: "  GitHub   → github.com/zainbabar",
      href: "https://github.com/zainbabar",
    },
    {
      type: "link",
      content: "  LinkedIn → linkedin.com/in/zainbabar",
      href: "https://linkedin.com/in/zainbabar",
    },
    { type: "text", content: "" },
    { type: "success", content: "  Or use the contact form below ↓" },
  ],

  ls: [
    { type: "text",    content: "total 256" },
    { type: "success", content: "-rw-r--r--  1 zain zain   6.1K  agent_loop.py" },
    { type: "success", content: "-rw-r--r--  1 zain zain   9.4K  embodied_policy.py" },
    { type: "success", content: "-rw-r--r--  1 zain zain   4.2K  quant_strategy.py" },
    { type: "success", content: "-rw-r--r--  1 zain zain   3.1K  monte_carlo_pricer.py" },
    { type: "success", content: "-rw-r--r--  1 zain zain   8.8K  arena_allocator.c" },
    { type: "success", content: "drwxr-xr-x  7 zain zain   256B  multi_agent_project/" },
    { type: "error",   content: "-rw-------  1 zain zain   ???B  do_not_open.tar.gz" },
    { type: "text",    content: "-rw-r--r--  1 zain zain   1.1K  .bashrc" },
  ],

  "rm -rf /": [
    { type: "error",   content: "rm: removing '/bin/'" },
    { type: "error",   content: "rm: removing '/boot/'" },
    { type: "error",   content: "rm: removing '/dev/'" },
    { type: "error",   content: "rm: removing '/etc/'" },
    { type: "error",   content: "rm: removing '/home/'" },
    { type: "error",   content: "rm: removing '/lib/'" },
    { type: "error",   content: "rm: removing '/opt/'" },
    { type: "error",   content: "rm: removing '/root/'" },
    { type: "error",   content: "[▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░] 61%  still going..." },
    { type: "error",   content: "rm: cannot remove '/proc/sysrq-trigger': Device or resource busy" },
    { type: "error",   content: "rm: cannot remove '/proc/1': Operation not permitted" },
    { type: "error",   content: "rm: cannot remove '/sys/kernel/security': Permission denied" },
    { type: "error",   content: "Segmentation fault (core dumped)" },
    { type: "text",    content: "" },
    { type: "text",    content: "just kidding. everything is fine." },
  ],

  sudo: [
    { type: "error", content: "[sudo] password for zain:" },
    { type: "error", content: "Sorry, try again." },
    { type: "error", content: "Sorry, try again." },
    { type: "error", content: "sudo: 3 incorrect password attempts" },
  ],

  neofetch: [
    { type: "success", content: "                 .'" },
    { type: "success", content: "               ,xNMM." },
    { type: "success", content: "             .OMMMMo" },
    { type: "success", content: "             OMMM0," },
    { type: "success", content: "  .;loddo:' lMM\"" },
    { type: "success", content: "cKMMMMMMMMMMNWMMMMMMMMMM0:" },
    { type: "success", content: ".KMMMMMMMMMMMMMMMMMMMMMMMWd." },
    { type: "success", content: "XMMMMMMMMMMMMMMMMMMMMMMMX." },
    { type: "success", content: ";MMMMMMMMMMMMMMMMMMMMMMMM:" },
    { type: "success", content: ":MMMMMMMMMMMMMMMMMMMMMMMM:" },
    { type: "success", content: ".MMMMMMMMMMMMMMMMMMMMMMMMX." },
    { type: "success", content: " kMMMMMMMMMMMMMMMMMMMMMMMMWd." },
    { type: "success", content: " .XMMMMMMMMMMMMMMMMMMMMMMMMMMk" },
    { type: "success", content: "  .XMMMMMMMMMMMMMMMMMMMMMMMMK." },
    { type: "success", content: "    kMMMMMMMMMMMMMMMMMMMMMMd" },
    { type: "success", content: "     ;KMMMMMMMWXXWMMMMMMMk." },
    { type: "success", content: "       .cooc,.    .,coo:." },
    { type: "text",    content: "" },
    { type: "success", content: "zain@macbook" },
    { type: "text",    content: "────────────────────────" },
    { type: "text",    content: "OS:       macOS Sequoia 15.3" },
    { type: "text",    content: "Host:     MacBook Pro 16\" (M4 Pro, 2024)" },
    { type: "text",    content: "Kernel:   Darwin 24.3.0" },
    { type: "text",    content: "Uptime:   7h 23m" },
    { type: "text",    content: "Packages: 312 (brew)" },
    { type: "text",    content: "Shell:    zsh 5.9" },
    { type: "text",    content: "Terminal: kitty" },
    { type: "text",    content: "CPU:      Apple M4 Pro (12-core)" },
    { type: "text",    content: "GPU:      Apple M4 Pro (20-core)" },
    { type: "text",    content: "Memory:   11.4 GiB / 24.0 GiB" },
  ],
};

export const BOOT_LINES = [
  "Initializing portfolio...",
  "Loading modules: [math] [agents] [embodied-ai] [finance]",
  "Connecting to remote server... OK",
  "Breaking into the mainframe... ACCESS GRANTED",
  'Type "help" to see available commands.',
];
