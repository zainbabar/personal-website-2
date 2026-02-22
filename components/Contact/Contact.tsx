"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — wire to Formspree / Resend as needed
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6">
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
              05 / Contact
            </span>
            <div className="flex-1 h-px bg-[#1f1f1f]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e5e5e5] tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm text-[#606060] max-w-lg">
            Interested in quant research, AI projects, or just want to talk hardware? Reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <a
              href="https://github.com/zainbabar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#111111] border border-[#1f1f1f] rounded-xl hover:border-[#00ff88]/30 transition-colors group"
            >
              <div className="p-2.5 border border-[#1f1f1f] rounded-lg group-hover:border-[#00ff88]/30 text-[#404040] group-hover:text-[#00ff88] transition-colors">
                <Github size={20} />
              </div>
              <div>
                <div className="font-mono text-sm text-[#e5e5e5] group-hover:text-[#00ff88] transition-colors">
                  GitHub
                </div>
                <div className="font-mono text-xs text-[#404040]">github.com/zainbabar</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/zainbabar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-[#111111] border border-[#1f1f1f] rounded-xl hover:border-blue-400/30 transition-colors group"
            >
              <div className="p-2.5 border border-[#1f1f1f] rounded-lg group-hover:border-blue-400/30 text-[#404040] group-hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </div>
              <div>
                <div className="font-mono text-sm text-[#e5e5e5] group-hover:text-blue-400 transition-colors">
                  LinkedIn
                </div>
                <div className="font-mono text-xs text-[#404040]">linkedin.com/in/zainbabar</div>
              </div>
            </a>

            <div className="p-5 bg-[#111111] border border-[#1f1f1f] rounded-xl">
              <div className="font-mono text-xs text-[#404040] tracking-widest uppercase mb-2">
                Availability
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                <span className="font-mono text-sm text-[#a0a0a0]">
                  Open to co-op / internship roles
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 p-8 bg-[#111111] border border-[#1f1f1f] rounded-xl text-center">
                <CheckCircle size={40} className="text-[#00ff88]" />
                <div className="font-mono text-lg text-[#e5e5e5]">Message sent.</div>
                <div className="font-mono text-sm text-[#606060]">
                  I&apos;ll get back to you soon.
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 bg-[#111111] border border-[#1f1f1f] rounded-xl p-7"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-[#404040] tracking-widest uppercase block mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 font-mono text-sm text-[#e5e5e5] placeholder-[#2a2a2a] focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-[#404040] tracking-widest uppercase block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 font-mono text-sm text-[#e5e5e5] placeholder-[#2a2a2a] focus:outline-none focus:border-[#00ff88]/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-[#404040] tracking-widest uppercase block mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 font-mono text-sm text-[#e5e5e5] placeholder-[#2a2a2a] focus:outline-none focus:border-[#00ff88]/50 transition-colors resize-none"
                    placeholder="What's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-[#00ff88]/60 text-[#00ff88] font-mono text-xs rounded-lg hover:bg-[#00ff8810] disabled:opacity-50 disabled:cursor-not-allowed transition-colors tracking-widest uppercase"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={13} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
