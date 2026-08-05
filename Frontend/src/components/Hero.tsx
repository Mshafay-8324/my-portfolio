"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, Mail } from "lucide-react";
import Tilt from "@/components/Tilt";

// Types out phrases sequentially
function TypingEffect({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetween = 2500,
}: {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentIdx];

    if (!isDeleting && displayedText === currentPhrase) {
      const timer = setTimeout(() => setIsDeleting(true), delayBetween);
      return () => clearTimeout(timer);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentIdx((prev) => (prev + 1) % phrases.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentPhrase.substring(0, displayedText.length - 1)
          : currentPhrase.substring(0, displayedText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIdx, phrases, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="text-blue-500 font-semibold border-r-2 border-blue-500 animate-pulse pr-1">
      {displayedText}
    </span>
  );
}

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 w-fit mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 font-display leading-[1.1]">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">Muhammad Shafay</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium text-slate-300 mb-6 font-display h-8">
            <span className="hidden sm:inline">Software Developer | </span>
            <TypingEffect
              phrases={[
                "AI & ML Developer",
                "Full-Stack Web Developer",
                "Problem Solver",
                "Clean Code Enthusiast",
              ]}
            />
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 leading-relaxed font-sans">
            I build intelligent AI applications and modern web experiences with a passion for solving real-world problems. Specialized in AI/ML solutions and crafting premium frontend designs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center"></div>
        </motion.div>

        {/* Right Column: Premium Code Terminal Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 hidden md:block"
        >
          <Tilt maxRotation={6} scale={1.01} className="relative group">
            {/* Shadow decoration behind terminal */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-xl group-hover:opacity-30 transition duration-1000"></div>
            
            {/* Terminal Container */}
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">shafay.json</div>
                <div className="w-12"></div> {/* Spacer */}
              </div>

              {/* Window Content */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300">
                <div>
                  <span className="text-indigo-400">const</span> developer = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-400">"Muhammad Shafay"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">education:</span> <span className="text-emerald-400">"BSc (Hons) Computer Science"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">specialty:</span> [
                  <span className="text-emerald-400">"AI/ML"</span>, <span className="text-emerald-400">"Full-Stack Dev"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreSkills:</span> &#123;
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">languages:</span> [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"JS"</span>, <span className="text-emerald-400">"HTML5"</span>, <span className="text-emerald-400">"CSS3"</span>],
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">aiMlStack:</span> [<span className="text-emerald-400">"YOLOv11"</span>, <span className="text-emerald-400">"OpenCV"</span>, <span className="text-emerald-400">"PyTorch"</span>, <span className="text-emerald-400">"LLMs"</span>],
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">webStack:</span> [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Express"</span>, <span className="text-emerald-400">"Flask"</span>]
                </div>
                <div className="pl-4">&#125;,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">passionateAbout:</span> <span className="text-orange-400">true</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">openToRelocate:</span> <span className="text-orange-400">true</span>
                </div>
                <div>&#125;;</div>

                {/* Cursor Blinking */}
                <div className="mt-4 text-slate-500">
                  <span>$</span> <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
