"use client";
import React from "react";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 font-display">
            Education
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Academic Background
          </h3>
          <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full mx-auto md:mx-0"></div>
        </div>
        {/* Education Card */}
        <div className="glass-panel border-blue-500/10 p-6 rounded-2xl max-w-md mx-auto md:mx-0">
          <div className="flex items-center gap-3 mb-3 text-blue-400">
            <GraduationCap size={20} />
            <h5 className="font-bold font-display text-sm text-white">BSc (Hons) Computer Science</h5>
          </div>
          <div className="text-xs text-slate-300 space-y-1">
            <div className="font-semibold text-slate-200">University of Hertfordshire</div>
            <div className="text-slate-400 font-medium">Jan 2025 - May 2026</div>
            <div className="flex justify-between text-slate-500 text-[11px] font-mono mt-1.5">
              <span>GPA: 3.9/4.5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
