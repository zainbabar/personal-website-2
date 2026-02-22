export interface CommandOutput {
  type: "text" | "success" | "error" | "table" | "link";
  content: string | string[];
  href?: string;
}

export const COMMANDS: Record<string, CommandOutput[]> = {
  help: [
    { type: "text", content: "Available commands:" },
    { type: "success", content: "  about       →  Who am I" },
    { type: "success", content: "  skills      →  Tech stack & languages" },
    { type: "success", content: "  projects    →  What I've built" },
    { type: "success", content: "  education   →  Academic background" },
    { type: "success", content: "  contact     →  Get in touch" },
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
};

export const BOOT_LINES = [
  "Initializing portfolio v2.0...",
  "Loading modules: [math] [quant] [ai] [systems]",
  "Connecting to DGX Spark cluster... OK",
  'Type "help" to see available commands.',
];
