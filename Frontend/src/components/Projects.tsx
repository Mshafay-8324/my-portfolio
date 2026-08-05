"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Tilt from "@/components/Tilt";

interface Project {
  title: string;
  description: string;
  tags: string[];

  live?: string;
  inProgress?: boolean;
  gradient: string; // Gradient direction / colors for SVG mockup
}

const projects: Project[] = [
  {
    title: "Facial Recognition Attendance System",
    description: "Developed a real-time web-based attendance system using YOLOv8, InsightFace, and facial recognition for automated attendance management.",
    tags: ["YOLOv8", "InsightFace", "Python", "OpenCV"],

    gradient: "from-blue-600/20 via-indigo-600/10 to-transparent",
  },
  {
    title: "General Health Query Chatbot",
    description: "Developed an AI-powered health chatbot using Llama 3.1, Groq API, and Streamlit with prompt engineering and safety guardrails.",
    tags: ["Llama 3.1", "Groq API", "Streamlit", "Prompt Engineering"],

    gradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
  },
  {
    title: "Football Analytics System",
    description: "Developed a football analytics platform using YOLOv11, OpenCV, and DeepSORT to generate player tracking and performance insights.",
    tags: ["YOLOv11", "OpenCV", "DeepSORT", "Python"],

    gradient: "from-purple-600/20 via-indigo-600/10 to-transparent",
  },
  {
    title: "AI Research Assistant (RAG)",
    description: "Built a RAG-based PDF question-answering system using semantic search, vector embeddings, and LLM-powered responses.",
    tags: ["RAG", "Python", "LangChain", "LLMs", "Vector Embeddings"],

    gradient: "from-sky-600/20 via-blue-600/10 to-transparent",
  },
  {
    title: "AI Email Assistant Agent",
    description: "Built an AI-powered email assistant that automatically classifies incoming emails, generates concise summaries, and drafts professional replies using intelligent automation workflows.",
    tags: ["n8n", "Ollama", "Llama 3.2", "AI Agents", "Workflow Automation"],
    inProgress: true,
    gradient: "from-teal-600/20 via-cyan-600/10 to-transparent",
  },
  {
    title: "Kotal Restaurant Website",
    description: "Developed and deployed a responsive restaurant website featuring menus, services, and an optimized user experience.",
    tags: ["React", "Next.js", "Tailwind CSS", "Web Dev"],
    live: "https://www.kotal.pk",

    gradient: "from-amber-600/20 via-orange-600/10 to-transparent",
  },
  {
    title: "Luminous Stone Tops",
    description: "Developed a responsive corporate website showcasing custom stone fabrication services, projects, and business information.",
    tags: ["React", "Next.js", "Tailwind CSS", "UI/UX"],
    live: "https://www.luminoustops.com",

    gradient: "from-rose-600/20 via-pink-600/10 to-transparent",
  },
  {
    title: "Personal Portfolio",
    description: "Building a responsive portfolio website using React, HTML, CSS, and JavaScript to showcase projects and technical skills.",
    tags: ["React", "HTML5", "CSS3", "JavaScript", "Framer Motion"],
    live: "#",

    gradient: "from-blue-600/30 via-indigo-600/20 to-transparent",
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            My Creations
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Featured Projects
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="h-full"
            >
              <Tilt className="glass-panel glass-panel-hover flex flex-col h-full rounded-2xl overflow-hidden group">
                {/* Dynamic Design Placeholder Canvas */}
                <div className={`relative h-44 w-full bg-gradient-to-br ${proj.gradient} flex items-center justify-center border-b border-slate-900/60 overflow-hidden`}>
                  {/* Tech grid overlay decoration */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                  {/* Abstract shape decoration */}
                  <div className="absolute w-24 h-24 rounded-full bg-blue-500/10 blur-xl group-hover:scale-125 transition-transform duration-700" />

                  {/* Visual Icon */}
                  <Code2 size={40} className="text-slate-500/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500 z-10" />

                  {proj.inProgress && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        In Progress
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 text-[10px] text-slate-500 font-mono tracking-widest uppercase">
                    Project #{idx + 1}
                  </div>
                </div>

                {/* Project Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 font-display group-hover:text-blue-400 transition-colors duration-300">
                      {proj.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-sans">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Tag List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-1 text-[10px] font-semibold tracking-wider text-slate-400 bg-slate-950/40 border border-slate-800/80 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links Row */}
                    <div className="flex items-center gap-4">
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
