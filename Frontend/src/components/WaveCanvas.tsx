"use client";
import React, { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle field properties
    const rows = 40;
    const cols = 40;
    const spacing = 35; // Spacing between particles
    
    // Wave parameters
    let phase = 0;
    const amplitude = 32; // height of the wave ripples

    // Tilt angle controls
    let targetRotationX = 0.45; // Initial tilt looking down
    let targetRotationY = 0.35; // Initial angle looking side-on
    let rotationX = 0.45;
    let rotationY = 0.35;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to range [-1, 1]
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      // Adjust rotation targets based on mouse position
      targetRotationY = 0.35 + nx * 0.12;
      targetRotationX = 0.45 + ny * 0.10;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize 3D grid layout coordinates relative to center
    const particles: { x: number; z: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * spacing;
        const z = (r - rows / 2) * spacing;
        particles.push({ x, z });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate current tilt rotation toward targets
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      phase += 0.015; // Animation ripple speed

      const fov = 750; // Camera perspective strength
      const centerX = width / 2;
      const centerY = height * 0.6; // Anchor wave to the bottom half

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Wave formula combining distance from center and coordinates
        const dist = Math.sqrt(p.x * p.x + p.z * p.z);
        const y = Math.sin(dist * 0.006 - phase) * Math.cos(p.x * 0.004 + phase) * amplitude;

        // Apply 3D coordinate rotations
        // 1. Rotate around Y-axis (left/right rotation)
        const rx1 = p.x * cosY - p.z * sinY;
        const rz1 = p.x * sinY + p.z * cosY;

        // 2. Rotate around X-axis (up/down tilt)
        const ry2 = y * cosX - rz1 * sinX;
        const rz2 = y * sinX + rz1 * cosX;

        // 3D Perspective projection calculations
        const scale = fov / (fov + rz2);

        // Render point if camera scale is positive
        if (scale > 0) {
          const screenX = centerX + rx1 * scale;
          const screenY = centerY + ry2 * scale;

          // Render only inside canvas screen boundaries
          if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
            // Fade particles out the further they are in background depth
            const maxDistance = (rows / 2) * spacing * 1.5;
            const alpha = Math.max(0.01, Math.min(0.6, 1 - (rz2 + maxDistance / 2) / maxDistance));

            ctx.beginPath();
            // Circle radius scales with camera depth perspective
            ctx.arc(screenX, screenY, scale * 1.3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(96, 165, 250, ${alpha * 0.9})`;
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90 pointer-events-none" />;
}
