"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Cpu, Server, Zap, HardDrive } from "lucide-react";

interface HardwareItem {
  id: string;
  name: string;
  subtitle: string;
  specs: string[];
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  description: string;
}

const HARDWARE: HardwareItem[] = [
  {
    id: "dgx-spark",
    name: "NVIDIA DGX Spark",
    subtitle: "AI Workstation",
    icon: <Cpu size={28} />,
    badge: "ACTIVE",
    badgeColor: "text-accent border-accent-border bg-accent-hover",
    description:
      "Compact AI supercomputer powered by NVIDIA Grace Blackwell. Used for local LLM inference, CUDA kernel development, and training small-to-mid scale models.",
    specs: [
      "NVIDIA Blackwell GPU (288 GB memory)",
      "Grace CPU — 20-core Neoverse V2",
      "128 GB LPDDR5x system memory",
      "1 TB NVMe SSD",
      "NVLink-C2C interconnect",
    ],
  },
  {
    id: "server-rack",
    name: "Custom Server Rack",
    subtitle: "Home Lab Infrastructure",
    icon: <Server size={28} />,
    badge: "ONLINE",
    badgeColor: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    description:
      "Self-built homelab rack running Proxmox VE with networked storage, serving as a development environment, CI/CD target, and data store for backtesting pipelines.",
    specs: [
      "2× AMD EPYC 7302 (32 cores total)",
      "256 GB ECC DDR4 RAM",
      "48 TB raw NAS storage (ZFS RAIDZ2)",
      "10GbE networking",
      "Proxmox VE + TrueNAS SCALE",
    ],
  },
  {
    id: "workstation",
    name: "Dev Workstation",
    subtitle: "Primary Build",
    icon: <Zap size={28} />,
    badge: "RUNNING",
    badgeColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    description:
      "High-throughput development machine for compiling large C/C++ projects, running backtests, and prototyping ML pipelines before pushing to the DGX cluster.",
    specs: [
      "AMD Ryzen 9 7950X (16c/32t)",
      "64 GB DDR5-6000 (G.Skill Trident Z5)",
      "NVIDIA RTX 4090 24 GB",
      "4 TB Gen4 NVMe (Samsung 990 Pro)",
      "Arch Linux / Windows 11 dual-boot",
    ],
  },
  {
    id: "network",
    name: "Network Stack",
    subtitle: "Lab Networking",
    icon: <HardDrive size={28} />,
    badge: "STABLE",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    description:
      "Enterprise-grade networking for ultra-low-latency data movement between compute nodes, critical for live trading infrastructure and distributed training.",
    specs: [
      "Mikrotik CRS326 — 10GbE core switch",
      "Ubiquiti UniFi AP WiFi 6E",
      "pfSense firewall (Netgate 4200)",
      "2× SFP+ DAC interconnects",
      "VLAN segmentation for lab isolation",
    ],
  },
];

export default function HardwareGallery() {
  const [active, setActive] = useState(0);
  const item = HARDWARE[active];

  const prev = () => setActive((i) => (i - 1 + HARDWARE.length) % HARDWARE.length);
  const next = () => setActive((i) => (i + 1) % HARDWARE.length);

  return (
    <section id="hardware" className="py-24 px-6">
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
              03 / Hardware
            </span>
            <div className="flex-1 h-px bg-border" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            The Setup
          </h2>
          <p className="mt-3 text-sm text-text-description max-w-lg">
            AI compute, custom server racks, and the hardware that powers my research.
          </p>
        </motion.div>

        {/* Carousel + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Sidebar tabs */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0">
            {HARDWARE.map((hw, i) => (
              <button
                key={hw.id}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded-lg border transition-all duration-200 ${
                  i === active
                    ? "border-accent-border bg-accent-glow text-foreground"
                    : "border-border bg-card text-text-description hover:border-border-subtle hover:text-text-secondary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={i === active ? "text-accent" : "text-muted"}>
                    {hw.icon}
                  </span>
                  <div>
                    <div className="font-mono text-sm font-medium">{hw.name}</div>
                    <div className="font-mono text-xs text-muted">{hw.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                {/* Card header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent">{item.icon}</span>
                      <span className={`font-mono text-[10px] border px-2 py-0.5 rounded tracking-wider ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                    <p className="font-mono text-xs text-muted mt-0.5">{item.subtitle}</p>
                  </div>
                  {/* Navigation arrows */}
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="p-2 border border-border rounded-lg text-muted hover:text-accent hover:border-accent-border transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      className="p-2 border border-border rounded-lg text-muted hover:text-accent hover:border-accent-border transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <p className="text-sm text-text-description leading-relaxed mb-6">{item.description}</p>

                {/* Specs */}
                <div>
                  <div className="font-mono text-xs text-muted tracking-widest uppercase mb-3">
                    Specifications
                  </div>
                  <ul className="space-y-2">
                    {item.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 font-mono text-sm text-text-secondary">
                        <span className="text-accent mt-0.5 flex-shrink-0">›</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pagination dots */}
                <div className="flex gap-1.5 mt-8">
                  {HARDWARE.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all duration-200 ${
                        i === active
                          ? "bg-accent w-6"
                          : "bg-border-subtle w-3 hover:bg-muted"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
