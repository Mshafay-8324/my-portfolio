"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: TimelineItem[] = [
  {
    company: "DevelopersHub Corporation",
    role: "AI/ML Engineering Intern",
    period: "June 2026 – July 2026",
    location: "On-site",
    description: [
      "Developed AI-powered applications using LLMs and Retrieval-Augmented Generation (RAG) techniques.",
      "Built end-to-end solutions for document question answering and support ticket classification.",
      "Integrated AI APIs, vector databases, and semantic search into production-ready applications.",
      "Developed interactive Streamlit applications for real-time AI experiences.",
      "Applied prompt engineering techniques to improve LLM response quality and accuracy.",
      "Participated in model evaluation, testing, and performance optimization.",
      "Used Git and GitHub for version control and collaborative development.",
    ],
  },
  {
    company: "Explorer Bees",
    role: "AI/ML Developer",
    period: "Jul 2025 – Dec 2025",
    location: "NASTP, Rawalpindi",
    description: [
      "Developed Python-based software solutions for computer vision applications.",
      "Collaborated with developers to build production-ready AI applications.",
      "Integrated multiple software components into complete end-to-end systems.",
      "Worked with Git for source control and collaborative development.",
      "Built reusable modules following clean coding practices.",
      "Participated in debugging, testing, and performance optimization.",
      "Developed user-facing analytics dashboards and reporting features.",
    ],
  },
  {
    company: "Kairiz CyberTechnologies",
    role: "Artificial Intelligence Intern",
    period: "Jul 2024 – Aug 2024",
    location: "On-site",
    description: [
      "Developed Python scripts for data preprocessing and automation.",
      "Cleaned and transformed datasets using Python.",
      "Built visual reports using Matplotlib.",
      "Worked collaboratively within an AI development team.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            My Path
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Work Experience
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-900 -translate-x-1/2"></div>

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 sm:mb-20 last:mb-0 ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Node */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950 shadow-md shadow-blue-500/50 -translate-x-1/2 z-10"></div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" as const }}
                  className={`w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0`}
                >
                  <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl relative">
                    {/* Header: Role & Company */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-white font-display">
                          {exp.role}
                        </h4>
                        <div className="text-sm font-semibold text-blue-400 flex items-center gap-1.5 mt-1 font-display">
                          <Briefcase size={14} />
                          {exp.company}
                        </div>
                      </div>

                      {/* Location & Period badges */}
                      <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans list-disc list-inside">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-relaxed pl-1 -indent-5 ml-5">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Empty block to preserve symmetry in large layouts */}
                <div className="hidden sm:block w-[calc(50%-2rem)]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
