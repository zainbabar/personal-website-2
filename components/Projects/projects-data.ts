export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: "arena-allocator",
    description:
      "A high-performance arena memory allocator written in C. Implements region-based memory management with O(1) allocation, ideal for game engines and embedded systems.",
    tags: ["C", "Systems", "Memory"],
    github: "https://github.com/zainbabar",
    featured: true,
  },
  {
    title: "monte-carlo-pricer",
    description:
      "European and American option pricing engine using Monte Carlo simulation with variance reduction techniques (antithetic variates, control variates).",
    tags: ["Python", "Finance", "Quant"],
    github: "https://github.com/zainbabar",
    featured: true,
  },
  {
    title: "momentum-bot",
    description:
      "Live cryptocurrency momentum trading strategy with Binance API integration. Implements cross-asset momentum signals with dynamic position sizing.",
    tags: ["Python", "Finance", "Algo Trading"],
    github: "https://github.com/zainbabar",
    featured: true,
  },
  {
    title: "matmul-bench",
    description:
      "Custom CUDA GEMM kernel benchmarks comparing naive, tiled, and cuBLAS implementations. Includes roofline model analysis and DRAM bandwidth profiling.",
    tags: ["CUDA", "C++", "HPC"],
    github: "https://github.com/zainbabar",
  },
  {
    title: "http-server-c",
    description:
      "A minimal HTTP/1.1 server built from raw sockets in C. Handles concurrent connections via a thread pool and serves static files with proper MIME types.",
    tags: ["C", "Networking", "Systems"],
    github: "https://github.com/zainbabar",
  },
  {
    title: "kalman-filter",
    description:
      "Kalman filter implementation for real-time stock price estimation and signal denoising. Includes extended Kalman filter for nonlinear systems.",
    tags: ["Python", "Math", "Finance"],
    github: "https://github.com/zainbabar",
  },
];

export const LANG_COLORS: Record<string, string> = {
  C: "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "C++": "text-blue-300 border-blue-300/30 bg-blue-300/10",
  Python: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  CUDA: "text-green-400 border-green-400/30 bg-green-400/10",
  Rust: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  Finance: "text-purple-400 border-purple-400/30 bg-purple-400/10",
  Quant: "text-purple-300 border-purple-300/30 bg-purple-300/10",
  "Algo Trading": "text-pink-400 border-pink-400/30 bg-pink-400/10",
  Systems: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  HPC: "text-red-400 border-red-400/30 bg-red-400/10",
  Memory: "text-teal-400 border-teal-400/30 bg-teal-400/10",
  Networking: "text-indigo-400 border-indigo-400/30 bg-indigo-400/10",
  Math: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
};
