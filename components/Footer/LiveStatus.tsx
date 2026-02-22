"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Cpu, Wifi, Clock } from "lucide-react";

interface StatusData {
  cpuLoad: number;
  memUsed: number;
  gpuTemp: number;
  uptime: string;
  currentTask: string;
  netLatency: number;
}

const TASKS = [
  "Training LSTM on price series",
  "Compiling arena-allocator v0.4",
  "Running Monte Carlo (N=1e6)",
  "Backtesting momentum strategy",
  "Profiling CUDA GEMM kernel",
  "Reading: Shreve Vol.II",
  "SSH into DGX Spark cluster",
  "Processing options chain data",
];

function randomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatUptime(seconds: number) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
}

function useLiveStatus() {
  const [status, setStatus] = useState<StatusData | null>(null);
  const [uptimeSeconds, setUptimeSeconds] = useState(randomBetween(200000, 800000));

  useEffect(() => {
    const generate = (): StatusData => ({
      cpuLoad: randomBetween(12, 88),
      memUsed: randomBetween(40, 85),
      gpuTemp: randomBetween(52, 78),
      uptime: formatUptime(uptimeSeconds),
      currentTask: TASKS[Math.floor(Math.random() * TASKS.length)],
      netLatency: randomBetween(1, 12),
    });

    setStatus(generate());

    const interval = setInterval(() => {
      setUptimeSeconds((s) => s + 15);
      setStatus(generate());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return status;
}

interface StatTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}

function StatTile({ icon, label, value, color = "text-[#00ff88]" }: StatTileProps) {
  return (
    <div className="flex items-center gap-3">
      <span className={`${color} flex-shrink-0`}>{icon}</span>
      <div>
        <div className="font-mono text-[10px] text-[#404040] tracking-widest uppercase">
          {label}
        </div>
        <div className={`font-mono text-sm font-medium ${color}`}>{value}</div>
      </div>
    </div>
  );
}

export default function LiveStatus() {
  const status = useLiveStatus();

  return (
    <div className="border-t border-[#1f1f1f] bg-[#0a0a0a] px-6 py-5">
      <div className="max-w-6xl mx-auto">
        {/* Top row: indicator + task */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
            <span className="font-mono text-xs text-[#404040] tracking-widest uppercase">
              System Live
            </span>
          </div>
          <AnimatePresence mode="wait">
            {status && (
              <motion.div
                key={status.currentTask}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 font-mono text-xs text-[#606060]"
              >
                <Activity size={11} className="text-[#00ff88]" />
                <span>{status?.currentTask ?? "—"}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          <StatTile
            icon={<Cpu size={14} />}
            label="CPU Load"
            value={status ? `${status.cpuLoad}%` : "—"}
            color={
              status && status.cpuLoad > 75 ? "text-red-400" :
              status && status.cpuLoad > 50 ? "text-yellow-400" :
              "text-[#00ff88]"
            }
          />
          <StatTile
            icon={<Activity size={14} />}
            label="GPU Temp"
            value={status ? `${status.gpuTemp}°C` : "—"}
            color={
              status && status.gpuTemp > 70 ? "text-red-400" :
              status && status.gpuTemp > 60 ? "text-yellow-400" :
              "text-[#00ff88]"
            }
          />
          <StatTile
            icon={<Wifi size={14} />}
            label="Net Latency"
            value={status ? `${status.netLatency}ms` : "—"}
          />
          <StatTile
            icon={<Clock size={14} />}
            label="Uptime"
            value={status?.uptime ?? "—"}
            color="text-blue-400"
          />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-[#0f0f0f] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="font-mono text-xs text-[#2a2a2a]">
            © {new Date().getFullYear()} Zain Babar
          </div>
          <div className="font-mono text-xs text-[#2a2a2a]">
            Built with Next.js · Tailwind · Framer Motion
          </div>
        </div>
      </div>
    </div>
  );
}
