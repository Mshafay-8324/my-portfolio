"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Brain, Code2, Users, Flame, Layers } from "lucide-react";

const keyAttributes = [
  {
    icon: GraduationCap,
    title: "CS Graduate",
    description: "Solid theoretical foundation in Computer Science principles, algorithms, and data structures.",
    color: "from-blue-500/20 to-cyan-500/20 text-blue-400",
  },
  {
    icon: Brain,
    title: "AI/ML Focus",
    description: "Hands-on experience developing intelligent systems, object detection, and LLM-powered RAG systems.",
    color: "from-indigo-500/20 to-purple-500/20 text-indigo-400",
  },
  {
    icon: Layers,
    title: "Full-Stack Learner",
    description: "Actively expanding capabilities to build modern responsive user interfaces and backend APIs.",
    color: "from-sky-500/20 to-blue-500/20 text-sky-400",
  },
  {
    icon: Flame,
    title: "Problem Solver",
    description: "Enthusiastic about tackling complex challenges and designing efficient real-world software solutions.",
    color: "from-amber-500/20 to-orange-500/20 text-amber-400",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Committed to writing reusable, readable, and well-structured code adhering to standard best practices.",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Strong communication skills, thriving in dynamic environments working closely with cross-functional teams.",
    color: "from-pink-500/20 to-rose-500/20 text-pink-400",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            About Me
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            My Journey & Core Philosophy
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Broad narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-slate-400 leading-relaxed font-sans"
          >
            <h4 className="text-xl font-bold text-white font-display">
              Driven by curiosity, fueled by logic.
            </h4>
            <p>
              As a Computer Science graduate, I've spent the past few years building deep domain expertise in Artificial Intelligence and Machine Learning. From working on computer vision algorithms to constructing responsive Retrieval-Augmented Generation (RAG) models, I enjoy writing code that makes systems smarter.
            </p>
            <p>
              Currently, I am channelling that same passion into mastering Full-Stack Web Development. I believe the future of software lies at the intersection of robust backend intelligence and beautiful, accessible user experiences.
            </p>
            <p>
              I am dedicated to writing clean, maintainable code and always looking for opportunities to collaborate with engineering teams on challenging problems.
            </p>

            {/* Education Sub-box */}
            <div className="mt-8 p-6 rounded-2xl glass-panel border-blue-500/10">
              <div className="flex items-center gap-3 mb-3 text-blue-400">
                <GraduationCap size={20} />
                <h5 className="font-bold font-display text-sm text-white">Education</h5>
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-slate-200">BSc (Hons) Computer Science</div>
                <div className="text-slate-400 font-medium">University of Hertfordshire</div>
                <div className="flex justify-between text-slate-500 text-[11px] font-mono mt-1.5">
                  <span>Jan 2025 - May 2026</span>
                  <span>GPA: 3.9/4.5</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Attributes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {keyAttributes.map((attr, idx) => {
              const IconComp = attr.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl flex gap-4 items-start"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${attr.color}`}>
                    <IconComp size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white mb-1.5 font-display">
                      {attr.title}
                    </h5>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {attr.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
