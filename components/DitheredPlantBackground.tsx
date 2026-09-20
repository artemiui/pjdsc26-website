"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  vy: number;
  size: number;
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
  type: "cross" | "dot" | "cluster" | "diamond";
  colorType: "teal" | "coral" | "navy" | "mint";
}

interface FloatingMedicalCross {
  x: number;
  y: number;
  baseX: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  style: "solid" | "dithered" | "outline" | "cluster";
  colorType: "teal" | "coral" | "navy" | "mint";
  alpha: number;
  pulsePhase: number;
  pulseSpeed: number;
}

const BAYER_4X4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

export default function DitheredPlantBackground({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDark, setIsDark] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseRef.current.targetX = (e.clientX / innerWidth - 0.5) * 2;
      mouseRef.current.targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Initialize Spores / Dither Particles
    const particlesCount = 40;
    const particles: Particle[] = [];
    const colorsList: ("teal" | "coral" | "navy" | "mint")[] = [
      "teal",
      "teal",
      "coral",
      "mint",
      "navy",
    ];
    const typesList: ("cross" | "dot" | "cluster" | "diamond")[] = [
      "cross",
      "dot",
      "cross",
      "cluster",
      "diamond",
    ];

    for (let i = 0; i < particlesCount; i++) {
      const rx = Math.random() * width;
      particles.push({
        x: rx,
        baseX: rx,
        y: Math.random() * height,
        vy: 0.25 + Math.random() * 0.55,
        size: Math.random() > 0.6 ? 3 : 2,
        alpha: 0.15 + Math.random() * 0.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        type: typesList[Math.floor(Math.random() * typesList.length)],
        colorType: colorsList[Math.floor(Math.random() * colorsList.length)],
      });
    }

    // Initialize Bigger Floating Medical Crosses
    const floatingCrosses: FloatingMedicalCross[] = [];
    const crossStyles: ("solid" | "dithered" | "outline" | "cluster")[] = [
      "cluster",
      "dithered",
      "outline",
      "dithered",
      "cluster",
    ];

    for (let i = 0; i < 9; i++) {
      const rx = Math.random() * width;
      floatingCrosses.push({
        x: rx,
        baseX: rx,
        y: Math.random() * height,
        vy: 0.2 + Math.random() * 0.35,
        size: 18 + Math.floor(Math.random() * 18), // 18px to 36px
        rotation: (Math.random() - 0.5) * 0.4,
        rotSpeed: (Math.random() - 0.5) * 0.005,
        style: crossStyles[i % crossStyles.length],
        colorType: colorsList[i % colorsList.length],
        alpha: 0.25 + Math.random() * 0.35,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.025,
      });
    }

    // Color definitions based on theme
    const getColors = () => {
      if (isDark) {
        return {
          stemPrimary: "rgba(110, 158, 148, 0.45)", // Teal
          stemSecondary: "rgba(227, 131, 99, 0.35)", // Coral
          leafTeal: "rgba(110, 158, 148, 0.55)",
          leafMint: "rgba(158, 200, 189, 0.65)",
          leafCoral: "rgba(227, 131, 99, 0.65)",
          leafNavy: "rgba(124, 165, 203, 0.35)",
          particleTeal: "rgba(110, 158, 148, 0.7)",
          particleCoral: "rgba(227, 131, 99, 0.75)",
          particleMint: "rgba(175, 225, 205, 0.8)",
          particleNavy: "rgba(124, 165, 203, 0.5)",
          crossCoral: "rgba(227, 131, 99, 0.75)",
          crossTeal: "rgba(110, 158, 148, 0.7)",
          crossMint: "rgba(175, 225, 205, 0.75)",
          crossNavy: "rgba(124, 165, 203, 0.6)",
        };
      }
      return {
        stemPrimary: "rgba(35, 71, 102, 0.22)", // Deep Navy
        stemSecondary: "rgba(227, 131, 99, 0.25)", // Coral
        leafTeal: "rgba(110, 158, 148, 0.45)",
        leafMint: "rgba(139, 185, 110, 0.4)",
        leafCoral: "rgba(227, 131, 99, 0.45)",
        leafNavy: "rgba(35, 71, 102, 0.35)",
        particleTeal: "rgba(110, 158, 148, 0.6)",
        particleCoral: "rgba(227, 131, 99, 0.65)",
        particleMint: "rgba(110, 158, 148, 0.5)",
        particleNavy: "rgba(35, 71, 102, 0.45)",
        crossCoral: "rgba(227, 131, 99, 0.55)",
        crossTeal: "rgba(110, 158, 148, 0.5)",
        crossMint: "rgba(74, 119, 110, 0.45)",
        crossNavy: "rgba(35, 71, 102, 0.42)",
      };
    };

    // Pixel drawing primitives
    const pixelSize = 3;

    const drawPixel = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(Math.floor(x), Math.floor(y), pixelSize, pixelSize);
    };

    const drawCross = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      const px = Math.floor(x);
      const py = Math.floor(y);
      ctx.fillRect(px, py, pixelSize, pixelSize); // center
      ctx.fillRect(px - pixelSize, py, pixelSize, pixelSize); // left
      ctx.fillRect(px + pixelSize, py, pixelSize, pixelSize); // right
      ctx.fillRect(px, py - pixelSize, pixelSize, pixelSize); // top
      ctx.fillRect(px, py + pixelSize, pixelSize, pixelSize); // bottom
    };

    const drawDiamond = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      const px = Math.floor(x);
      const py = Math.floor(y);
      ctx.fillRect(px, py - pixelSize, pixelSize, pixelSize);
      ctx.fillRect(px - pixelSize, py, pixelSize, pixelSize);
      ctx.fillRect(px + pixelSize, py, pixelSize, pixelSize);
      ctx.fillRect(px, py + pixelSize, pixelSize, pixelSize);
    };

    const drawCluster = (x: number, y: number, color: string) => {
      ctx.fillStyle = color;
      const px = Math.floor(x);
      const py = Math.floor(y);
      ctx.fillRect(px, py, pixelSize, pixelSize);
      ctx.fillRect(px + pixelSize, py, pixelSize, pixelSize);
      ctx.fillRect(px, py + pixelSize, pixelSize, pixelSize);
      ctx.fillRect(px + pixelSize, py + pixelSize, pixelSize, pixelSize);
    };

    // Dithered Greek / Swiss Medical Cross Renderer
    const drawMedicalCross = (
      x: number,
      y: number,
      size: number,
      rotation: number,
      color: string,
      style: "solid" | "dithered" | "outline" | "cluster",
      alpha: number
    ) => {
      ctx.save();
      ctx.translate(Math.floor(x), Math.floor(y));
      if (rotation !== 0) ctx.rotate(rotation);
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

      const armWidth = Math.max(pixelSize * 2, Math.floor(size / 3));
      const halfSize = Math.floor(size / 2);
      const halfArm = Math.floor(armWidth / 2);

      if (style === "outline") {
        // Crisp stepped Greek cross outline
        ctx.strokeStyle = color;
        ctx.lineWidth = pixelSize;
        ctx.beginPath();
        // Top arm
        ctx.moveTo(-halfArm, -halfSize);
        ctx.lineTo(halfArm, -halfSize);
        ctx.lineTo(halfArm, -halfArm);
        // Right arm
        ctx.lineTo(halfSize, -halfArm);
        ctx.lineTo(halfSize, halfArm);
        ctx.lineTo(halfArm, halfArm);
        // Bottom arm
        ctx.lineTo(halfArm, halfSize);
        ctx.lineTo(-halfArm, halfSize);
        ctx.lineTo(-halfArm, halfArm);
        // Left arm
        ctx.lineTo(-halfSize, halfArm);
        ctx.lineTo(-halfSize, -halfArm);
        ctx.lineTo(-halfArm, -halfArm);
        ctx.closePath();
        ctx.stroke();

        // Inner glowing core dot
        drawCross(0, 0, color);
      } else if (style === "dithered") {
        // Bayer 4x4 dither fill inside the Greek medical cross
        for (let py = -halfSize; py <= halfSize; py += pixelSize) {
          for (let px = -halfSize; px <= halfSize; px += pixelSize) {
            const inVert = Math.abs(px) <= halfArm && Math.abs(py) <= halfSize;
            const inHoriz = Math.abs(py) <= halfArm && Math.abs(px) <= halfSize;

            if (inVert || inHoriz) {
              const distFromCenter =
                Math.sqrt(px * px + py * py) / (halfSize + 0.001);
              const density = 0.95 - distFromCenter * 0.5;

              const gx = Math.floor((x + px) / pixelSize) & 3;
              const gy = Math.floor((y + py) / pixelSize) & 3;
              if (density > BAYER_4X4[gy][gx] / 16) {
                ctx.fillStyle = color;
                ctx.fillRect(px, py, pixelSize, pixelSize);
              }
            }
          }
        }

        // 4 satellite dither crosses in diagonal corners (as seen in reference 74064854dabdf0f1c7e478ef26817b5a)
        const satOffset = halfSize + pixelSize * 2;
        drawCross(-satOffset, -satOffset, color);
        drawCross(satOffset, -satOffset, color);
        drawCross(-satOffset, satOffset, color);
        drawCross(satOffset, satOffset, color);
      } else if (style === "cluster") {
        // High-contrast bold medical cross with accented corner stipples
        ctx.fillStyle = color;
        // Central vertical & horizontal bars
        ctx.fillRect(-halfArm, -halfSize, armWidth, size);
        ctx.fillRect(-halfSize, -halfArm, size, armWidth);

        // Subtle glowing center highlight
        ctx.fillStyle = isDark
          ? "rgba(255, 255, 255, 0.85)"
          : "rgba(255, 255, 255, 0.95)";
        ctx.fillRect(
          -pixelSize,
          -pixelSize,
          pixelSize * 2,
          pixelSize * 2
        );

        // Corner dither clusters
        const d = halfArm + pixelSize * 2;
        ctx.fillStyle = color;
        ctx.fillRect(d, d, pixelSize, pixelSize);
        ctx.fillRect(-d, -d, pixelSize, pixelSize);
        ctx.fillRect(d, -d, pixelSize, pixelSize);
        ctx.fillRect(-d, d, pixelSize, pixelSize);
      } else {
        // Clean solid Swiss medical cross
        ctx.fillStyle = color;
        ctx.fillRect(-halfArm, -halfSize, armWidth, size);
        ctx.fillRect(-halfSize, -halfArm, size, armWidth);
      }

      ctx.restore();
    };

    // Dithered Leaf Renderer
    const drawDitheredLeaf = (
      startX: number,
      startY: number,
      length: number,
      widthMax: number,
      angle: number,
      curve: number,
      colors: ReturnType<typeof getColors>,
      leafId: number,
      time: number
    ) => {
      const steps = Math.max(12, Math.floor(length / 5));
      const sway = Math.sin(time * 1.4 + leafId) * 0.08;
      const finalAngle = angle + sway;

      for (let i = 0; i <= steps; i++) {
        const t = i / steps; // 0 (base) to 1 (tip)

        const spineDistance = t * length;
        const curveOffset = Math.sin(t * Math.PI) * curve * length * 0.25;

        const spineX =
          startX +
          Math.cos(finalAngle) * spineDistance -
          Math.sin(finalAngle) * curveOffset;
        const spineY =
          startY +
          Math.sin(finalAngle) * spineDistance +
          Math.cos(finalAngle) * curveOffset;

        const nx = -Math.sin(finalAngle);
        const ny = Math.cos(finalAngle);

        const currentHalfWidth =
          Math.sin(Math.PI * Math.pow(t, 0.65)) * widthMax * 0.5;

        const dStep = pixelSize;
        for (let d = -currentHalfWidth; d <= currentHalfWidth; d += dStep) {
          const px = spineX + nx * d;
          const py = spineY + ny * d;

          const normDist = Math.abs(d) / (currentHalfWidth + 0.001);
          const density = 1.0 - Math.pow(normDist, 1.4) * 0.75 + (1 - t) * 0.15;

          const gridX = Math.floor(px / pixelSize) & 3;
          const gridY = Math.floor(py / pixelSize) & 3;
          const threshold = BAYER_4X4[gridY][gridX] / 16;

          if (density > threshold) {
            let color = colors.leafTeal;

            if (t > 0.8) {
              color = colors.leafCoral;
            } else if (normDist < 0.22) {
              color = t % 0.2 < 0.1 ? colors.leafMint : colors.leafNavy;
            } else if (normDist > 0.75) {
              color = colors.leafNavy;
            }

            drawPixel(px, py, color);

            if (
              normDist > 0.82 &&
              threshold > 0.5 &&
              Math.floor(px + py) % 19 === 0
            ) {
              drawCross(px, py, colors.leafCoral);
            }
          }
        }
      }
    };

    // Botanical Plant Architecture
    interface BranchConfig {
      baseXRatio: number;
      heightRatio: number;
      baseAngle: number;
      curveAmp: number;
      leafPairs: number;
      leafLength: number;
      leafWidth: number;
      colorTheme: "teal" | "coral";
    }

    const branches: BranchConfig[] = [
      {
        baseXRatio: 0.82,
        heightRatio: 0.78,
        baseAngle: -Math.PI * 0.54,
        curveAmp: 0.12,
        leafPairs: 7,
        leafLength: 68,
        leafWidth: 32,
        colorTheme: "teal",
      },
      {
        baseXRatio: 0.92,
        heightRatio: 0.52,
        baseAngle: -Math.PI * 0.58,
        curveAmp: -0.15,
        leafPairs: 5,
        leafLength: 52,
        leafWidth: 26,
        colorTheme: "coral",
      },
      {
        baseXRatio: 0.12,
        heightRatio: 0.62,
        baseAngle: -Math.PI * 0.46,
        curveAmp: -0.14,
        leafPairs: 5,
        leafLength: 58,
        leafWidth: 28,
        colorTheme: "teal",
      },
      {
        baseXRatio: 0.05,
        heightRatio: 0.38,
        baseAngle: -Math.PI * 0.42,
        curveAmp: 0.1,
        leafPairs: 4,
        leafLength: 42,
        leafWidth: 22,
        colorTheme: "coral",
      },
    ];

    // Fixed Ambient Big Medical Crosses (Framing margins and periphery)
    const anchorCrosses = [
      {
        xRatio: 0.08,
        yRatio: 0.22,
        size: 46,
        style: "dithered" as const,
        colorType: "coral" as const,
        baseAlpha: 0.38,
        baseRot: 0,
      },
      {
        xRatio: 0.04,
        yRatio: 0.54,
        size: 54,
        style: "outline" as const,
        colorType: "teal" as const,
        baseAlpha: 0.28,
        baseRot: 0.05,
      },
      {
        xRatio: 0.18,
        yRatio: 0.82,
        size: 38,
        style: "cluster" as const,
        colorType: "navy" as const,
        baseAlpha: 0.34,
        baseRot: -0.04,
      },
      {
        xRatio: 0.92,
        yRatio: 0.18,
        size: 52,
        style: "cluster" as const,
        colorType: "coral" as const,
        baseAlpha: 0.42,
        baseRot: 0.08,
      },
      {
        xRatio: 0.86,
        yRatio: 0.48,
        size: 44,
        style: "dithered" as const,
        colorType: "mint" as const,
        baseAlpha: 0.36,
        baseRot: -0.06,
      },
      {
        xRatio: 0.95,
        yRatio: 0.76,
        size: 64,
        style: "outline" as const,
        colorType: "teal" as const,
        baseAlpha: 0.26,
        baseRot: 0.12,
      },
      {
        xRatio: 0.26,
        yRatio: 0.12,
        size: 32,
        style: "dithered" as const,
        colorType: "teal" as const,
        baseAlpha: 0.25,
        baseRot: 0,
      },
    ];

    let time = 0;

    const render = () => {
      time += 0.018;

      // Smooth mouse lerp
      mouseRef.current.x +=
        (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y +=
        (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const colors = getColors();

      // 1. Draw Ambient Big Anchor Medical Crosses (Parallax & Gentle Breathing)
      anchorCrosses.forEach((ac, idx) => {
        const pX =
          width * ac.xRatio + mouseRef.current.x * (12 + (idx % 3) * 6);
        const pY =
          height * ac.yRatio + mouseRef.current.y * (10 + (idx % 2) * 5);
        const breathing = 0.85 + 0.15 * Math.sin(time * 0.8 + idx * 1.5);
        const rot = ac.baseRot + Math.sin(time * 0.5 + idx) * 0.03;

        let color = colors.crossCoral;
        if (ac.colorType === "teal") color = colors.crossTeal;
        else if (ac.colorType === "mint") color = colors.crossMint;
        else if (ac.colorType === "navy") color = colors.crossNavy;

        drawMedicalCross(
          pX,
          pY,
          ac.size,
          rot,
          color,
          ac.style,
          ac.baseAlpha * breathing
        );
      });

      // 2. Draw Floating Bigger Medical Crosses (Drifting slowly upward)
      for (const fc of floatingCrosses) {
        fc.y -= fc.vy;
        fc.pulsePhase += fc.pulseSpeed;
        fc.rotation += fc.rotSpeed;
        fc.x = fc.baseX + Math.sin(time * 0.7 + fc.pulsePhase) * 22;

        if (fc.y < -fc.size) {
          fc.y = height + fc.size + 10;
          fc.baseX = fc.x = Math.random() * width;
        }

        const alphaPulse = 0.7 + 0.3 * Math.sin(fc.pulsePhase);
        let color = colors.crossCoral;
        if (fc.colorType === "teal") color = colors.crossTeal;
        else if (fc.colorType === "mint") color = colors.crossMint;
        else if (fc.colorType === "navy") color = colors.crossNavy;

        drawMedicalCross(
          fc.x,
          fc.y,
          fc.size,
          fc.rotation,
          color,
          fc.style,
          fc.alpha * alphaPulse
        );
      }

      // 3. Draw Floating Micro-Spores / Dither Particles
      for (const p of particles) {
        p.y -= p.vy;
        p.pulsePhase += p.pulseSpeed;
        p.x = p.baseX + Math.sin(time * 0.8 + p.pulsePhase) * 16;

        if (p.y < -20) {
          p.y = height + 10;
          p.baseX = p.x = Math.random() * width;
        }

        const alphaMultiplier = 0.5 + 0.5 * Math.sin(p.pulsePhase);
        const currentAlpha = p.alpha * alphaMultiplier;

        let color = colors.particleTeal;
        if (p.colorType === "coral") color = colors.particleCoral;
        else if (p.colorType === "mint") color = colors.particleMint;
        else if (p.colorType === "navy") color = colors.particleNavy;

        ctx.globalAlpha = currentAlpha;

        if (p.type === "cross") {
          drawCross(p.x, p.y, color);
        } else if (p.type === "cluster") {
          drawCluster(p.x, p.y, color);
        } else if (p.type === "diamond") {
          drawDiamond(p.x, p.y, color);
        } else {
          drawPixel(p.x, p.y, color);
        }
      }

      ctx.globalAlpha = 1.0;

      // 4. Draw Botanical Dithered Plants
      branches.forEach((b, bIdx) => {
        const rootX = width * b.baseXRatio;
        const rootY = height + 10;
        const stemLength = height * b.heightRatio;

        const mouseInfluence = mouseRef.current.x * 0.06;
        const windSway = Math.sin(time + bIdx * 1.3) * 0.05 + mouseInfluence;
        const mainAngle = b.baseAngle + windSway;

        const stemSegments = 24;
        let prevX = rootX;
        let prevY = rootY;
        const nodes: { x: number; y: number; progress: number }[] = [];

        for (let s = 1; s <= stemSegments; s++) {
          const prog = s / stemSegments;
          const curveVal =
            Math.sin(prog * Math.PI * 0.9) * b.curveAmp * stemLength;
          const currX =
            rootX +
            Math.cos(mainAngle) * (prog * stemLength) -
            Math.sin(mainAngle) * curveVal;
          const currY =
            rootY +
            Math.sin(mainAngle) * (prog * stemLength) +
            Math.cos(mainAngle) * curveVal;

          const stemThickness = Math.max(1, Math.floor((1 - prog * 0.6) * 3));
          for (let tx = -stemThickness; tx <= stemThickness; tx += pixelSize) {
            const sx = currX + tx;
            const sy = currY;
            const threshold =
              BAYER_4X4[Math.floor(sy / pixelSize) & 3][
                Math.floor(sx / pixelSize) & 3
              ] / 16;
            if (0.55 > threshold) {
              drawPixel(
                sx,
                sy,
                b.colorTheme === "coral"
                  ? colors.stemSecondary
                  : colors.stemPrimary
              );
            }
          }

          if (s % 3 === 0) {
            nodes.push({ x: currX, y: currY, progress: prog });
            drawCross(
              currX,
              currY,
              b.colorTheme === "coral"
                ? colors.leafCoral
                : colors.leafTeal
            );
          }

          prevX = currX;
          prevY = currY;
        }

        nodes.forEach((node, nIdx) => {
          if (node.progress < 0.15 || node.progress > 0.94) return;

          const side = nIdx % 2 === 0 ? 1 : -1;
          const leafScale =
            Math.sin(node.progress * Math.PI * 0.95) *
            (0.7 + 0.3 * (1 - node.progress));
          const currentLeafLength = b.leafLength * leafScale;
          const currentLeafWidth = b.leafWidth * leafScale;

          const leafAngle =
            mainAngle + side * Math.PI * 0.38 + (side > 0 ? 0.2 : -0.2);

          drawDitheredLeaf(
            node.x,
            node.y,
            currentLeafLength,
            currentLeafWidth,
            leafAngle,
            side * 0.25,
            colors,
            bIdx * 10 + nIdx,
            time
          );
        });

        const tip = nodes[nodes.length - 1];
        if (tip) {
          drawDitheredLeaf(
            tip.x,
            tip.y,
            b.leafLength * 0.5,
            b.leafWidth * 0.45,
            mainAngle - 0.2,
            0.1,
            colors,
            bIdx * 99,
            time
          );
          drawDitheredLeaf(
            tip.x,
            tip.y,
            b.leafLength * 0.5,
            b.leafWidth * 0.45,
            mainAngle + 0.2,
            -0.1,
            colors,
            bIdx * 99 + 1,
            time
          );
          drawCross(tip.x, tip.y, colors.particleCoral);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDark]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block opacity-85 dark:opacity-90 transition-opacity duration-700"
      />
      {/* Central Soft Vignette to ensure maximum content readability */}
      <div 
        className="absolute inset-0 bg-radial from-transparent via-transparent to-background/50 pointer-events-none" 
      />
    </div>
  );
}
