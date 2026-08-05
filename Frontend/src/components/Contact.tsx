"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";

// Inline Github Icon replacement (brand icons removed from newer lucide-react)
function Github({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Inline Linkedin Icon replacement (brand icons removed from newer lucide-react)
function Linkedin({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Contact Me
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white font-display">
                Let's talk about your next project
              </h4>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                I am always open to discussing new opportunities, full-time engineering roles, AI/ML integrations, or collaborative web development ventures. Feel free to reach out via email or any of the social platforms below!
              </p>
            </div>

            {/* Icon cards list */}
            <div className="space-y-4 mt-8 lg:mt-0">
              {/* Email */}
              <a
                href="mailto:mohammadshafay453@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/10">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">EMAIL ME</div>
                  <div className="text-sm font-semibold text-slate-200">mohammadshafay453@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mohammad-shafay-6b5651291"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/10">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">LINKEDIN</div>
                  <div className="text-sm font-semibold text-slate-200">linkedin.com/in/mohammad-shafay-6b5651291</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Mshafay-8324"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="p-3 bg-slate-900 text-slate-400 rounded-xl border border-slate-800">
                  <Github size={20} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">GITHUB</div>
                  <div className="text-sm font-semibold text-slate-200">github.com/Mshafay-8324</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+923145778224"
                className="flex items-center gap-4 p-4 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/10">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 font-mono">PHONE</div>
                  <div className="text-sm font-semibold text-slate-200">+92 314 5778224</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
