"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp, Mail } from "lucide-react";

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

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop, { passive: true });
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/80 backdrop-blur-md py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright notice */}
        <div className="text-center md:text-left">
          <span className="text-base font-bold text-white tracking-tight font-display">
            Shafay<span className="text-blue-500">.</span>
          </span>
          <p className="text-xs text-slate-500 mt-2 font-sans">
            © {currentYear} Muhammad Shafay. All rights reserved.
          </p>
        </div>

        {/* Navigation shortcuts */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:mohammadshafay453@gmail.com"
            aria-label="Email"
            className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://linkedin.com/in/mohammad-shafay-6b5651291"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Mshafay-8324"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 text-slate-400 hover:text-white transition-colors duration-200"
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Floating Scroll to Top FAB */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:scale-105 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
