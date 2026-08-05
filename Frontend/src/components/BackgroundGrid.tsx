"use client";
import React from "react";
import { motion } from "framer-motion";
import WaveCanvas from "./WaveCanvas";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Ambient background gradients and mesh */}
      <div className="bg-mesh-glow" />

      {/* 3D Particle Mesh Wave Canvas */}
      <WaveCanvas />

      {/* Radial grid overlay pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_65%,transparent_100%)]" />

      {/* Interactive/floating glowing backdrops */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="absolute top-[20%] left-[15%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-blue-600/8 blur-[100px]"
      />
      
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="absolute bottom-[30%] right-[10%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-indigo-600/6 blur-[120px]"
      />
    </div>
  );
}
