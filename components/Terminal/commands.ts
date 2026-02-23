export interface CommandOutput {
  type: "text" | "success" | "error" | "table" | "link";
  content: string | string[];
  href?: string;
}

export const COMMANDS: Record<string, CommandOutput[]> = {
  help: [
    { type: "text", content: "Available commands:" },
    { type: "success", content: "  about       →  Who am I" },
    { type: "success", content: "  education   →  Academic background" },
    { type: "success", content: "  contact     →  Get in touch" },
    { type: "success", content: "  ls          →  List files" },
    { type: "success", content: "  clear       →  Clear terminal" },
  ],

  about: [
    { type: "text", content: "┌─────────────────────────────────────────┐" },
    { type: "text", content: "│  Zain Babar                             │" },
    { type: "text", content: "│  Honours Mathematics @ UWaterloo        │" },
    { type: "text", content: "└─────────────────────────────────────────┘" },
    { type: "text", content: "" },
    {
      type: "text",
      content:
        "I'm a Math student at the University of Waterloo with a deep interest",
    },
    {
      type: "text",
      content:
        "in Quantitative Finance, AI/ML systems, and low-level engineering.",
    },
    { type: "text", content: "" },
    {
      type: "text",
      content:
        "I build things from CUDA kernels to Monte Carlo option pricers.",
    },
    {
      type: "text",
      content: "When I'm not at my desk, I'm probably configuring servers.",
    },
    { type: "text", content: "" },
    { type: "success", content: 'Type "skills" to see my stack.' },
  ],

  skills: [
    { type: "text", content: "Languages:" },
    {
      type: "success",
      content: "  C / C++  ██████████  Systems & HPC",
    },
    {
      type: "success",
      content: "  Python   ████████░░  AI/ML, Quant",
    },
    {
      type: "success",
      content: "  Rust     ██████░░░░  Low-latency tools",
    },
    {
      type: "success",
      content: "  TypeScript ████████░  Web & APIs",
    },
    { type: "text", content: "" },
    { type: "text", content: "Tools & Frameworks:" },
    {
      type: "text",
      content:
        "  PyTorch · CUDA · NumPy · Pandas · Next.js · Linux · Docker",
    },
    { type: "text", content: "" },
    { type: "text", content: "Interests:" },
    {
      type: "text",
      content:
        "  Stochastic calculus · Options pricing · LLM inference · GPU clusters",
    },
  ],

  projects: [
    { type: "text", content: "Notable projects (scroll down for full list):" },
    { type: "text", content: "" },
    { type: "success", content: "  [C]       arena-allocator   — custom memory allocator" },
    { type: "success", content: "  [Python]  monte-carlo-pricer — Black-Scholes MC engine" },
    { type: "success", content: "  [Python]  momentum-bot      — live crypto trading strategy" },
    { type: "success", content: "  [CUDA]    matmul-bench      — GEMM kernel benchmarks" },
    { type: "text", content: "" },
    { type: "text", content: 'See full grid by scrolling to #projects.' },
  ],

  education: [
    { type: "text", content: "University of Waterloo  (2023 – present)" },
    { type: "success", content: "  Degree: Honours Bachelor of Mathematics" },
    {
      type: "text",
      content: "  Focus:  Applied Math, Statistics, Computational Finance",
    },
    { type: "text", content: "" },
    { type: "text", content: "Code Ninjas  (2022 – 2023)" },
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
    { type: "text",    content: "total 128" },
    { type: "success", content: "-rw-r--r--  1 zain zain   4.2K  quant_strategy.py" },
    { type: "success", content: "-rw-r--r--  1 zain zain   8.8K  arena_allocator.c" },
    { type: "success", content: "-rw-r--r--  1 zain zain   3.1K  monte_carlo_pricer.py" },
    { type: "success", content: "-rw-r--r--  1 zain zain   2.4K  black_scholes.ipynb" },
    { type: "success", content: "drwxr-xr-x  4 zain zain   128B  secret_project/" },
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
};

export const BOOT_LINES = [
  "Initializing portfolio v2.0...",
  "Loading modules: [math] [quant] [ai] [systems]",
  "Connecting to remote server... OK",
  "Breaking into the mainframe... ACCESS GRANTED",
  'Type "help" to see available commands.',
];
