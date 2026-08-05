"use client";
import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, FileCheck, ArrowUpRight } from "lucide-react";
import Tilt from "@/components/Tilt";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  credentialId: string;
  color: string;
}

const certifications: Certificate[] = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy / App Brewery",
    date: "2026",
    icon: Award,
    credentialId: "UD-FSWD-992B1M",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Data Analytics, Data Science, ML, DL & NLP - All in 1 Course",
    issuer: "Udemy/Analytix AI",
    date: "May 2026",
    icon: Award,
    credentialId: "ANALYTIX-001",
    color: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google",
    date: "May 2026",
    icon: Award,
    credentialId: "24102271",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google",
    date: "May 2026",
    icon: Award,
    credentialId: "24102512",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            Qualifications
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Certifications
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, idx) => {
            const IconComp = cert.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="h-full"
              >
                <Tilt className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between h-full">
                <div>
                  {/* Decorative Icon */}
                  <div className={`p-3 rounded-xl border w-fit mb-6 ${cert.color}`}>
                    <IconComp size={24} />
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 font-display">
                    {cert.title}
                  </h4>
                  <div className="text-sm font-semibold text-slate-400 font-display">
                    {cert.issuer}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-900 flex items-center justify-between">
                  <div className="flex flex-col text-[11px] text-slate-500 font-mono">
                    <span>Issued: {cert.date}</span>
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>
                </Tilt>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
