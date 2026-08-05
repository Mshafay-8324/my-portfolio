"use client";
import React from "react";
import { motion } from "framer-motion";
import { Code, Layout, Server, BrainCircuit, Database, Wrench } from "lucide-react";

interface Skill {
  name: string;
  learning?: boolean;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Programming",
    icon: Code,
    color: "text-blue-400 border-blue-500/10",
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "SQL" },
    ],
  },
  {
    title: "Web Development",
    icon: Layout,
    color: "text-indigo-400 border-indigo-500/10",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Flask" },
      { name: "Streamlit" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    color: "text-purple-400 border-purple-500/10",
    skills: [
      { name: "LLMs" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Computer Vision" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
    ],
  },
  {
    title: "AI Automation",
    icon: BrainCircuit,
    color: "text-pink-400 border-pink-500/10",
    skills: [
      { name: "n8n" },
      { name: "LangChain" },
      { name: "Ollama" },
      { name: "AI Agents" },
      { name: "Workflow Automation" },
    ],
  },
  {
    title: "Computer Vision",
    icon: Database,
    color: "text-emerald-400 border-emerald-500/10",
    skills: [
      { name: "YOLOv11" },
      { name: "YOLOv8" },
      { name: "OpenCV" },
      { name: "Roboflow" },
      { name: "DeepSORT" },
    ],
  },
  {
    title: "Data & Databases",
    icon: Database,
    color: "text-cyan-400 border-cyan-500/10",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Data Preprocessing" },
      { name: "SQLite" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    color: "text-amber-400 border-amber-500/10",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Google Colab" },
      { name: "Jupyter Notebook" },
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            My Toolbox
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Technical Skills & Expertise
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between"
              >
                {/* Header of the Card */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-slate-950/65 ${cat.color} border`}>
                      <IconComp size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white font-display">
                      {cat.title}
                    </h4>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${skill.learning
                          ? "bg-blue-500/10 border border-blue-500/30 text-blue-300 font-semibold"
                          : "bg-slate-950/50 border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700"
                          }`}
                      >
                        {skill.name}
                        {skill.learning && (
                          <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
