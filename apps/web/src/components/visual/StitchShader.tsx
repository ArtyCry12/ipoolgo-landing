"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";
import { OCEAN_FLOW_FRAGMENT, OCEAN_FLOW_VERTEX } from "@/lib/shaders/ocean-flow";

type StitchShaderProps = {
  className?: string;
  opacity?: number;
  interactive?: boolean;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function StitchShader({
  className,
  opacity = 0.8,
  interactive = true,
}: StitchShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const el = canvas;

    const gl = el.getContext("webgl") ?? el.getContext("experimental-webgl");
    if (!gl) return;

    const webgl = gl as WebGLRenderingContext;

    function compile(type: number, src: string) {
      const s = webgl.createShader(type);
      if (!s) return null;
      webgl.shaderSource(s, src);
      webgl.compileShader(s);
      return s;
    }

    const prog = webgl.createProgram();
    if (!prog) return;
    const vs = compile(webgl.VERTEX_SHADER, OCEAN_FLOW_VERTEX);
    const fs = compile(webgl.FRAGMENT_SHADER, OCEAN_FLOW_FRAGMENT);
    if (!vs || !fs) return;
    webgl.attachShader(prog, vs);
    webgl.attachShader(prog, fs);
    webgl.linkProgram(prog);
    webgl.useProgram(prog);

    const buf = webgl.createBuffer();
    webgl.bindBuffer(webgl.ARRAY_BUFFER, buf);
    webgl.bufferData(
      webgl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      webgl.STATIC_DRAW,
    );
    const pos = webgl.getAttribLocation(prog, "a_position");
    webgl.enableVertexAttribArray(pos);
    webgl.vertexAttribPointer(pos, 2, webgl.FLOAT, false, 0, 0);

    const uTime = webgl.getUniformLocation(prog, "u_time");
    const uRes = webgl.getUniformLocation(prog, "u_resolution");
    const uMouse = webgl.getUniformLocation(prog, "u_mouse");

    let mouse = { x: el.width / 2, y: el.height / 2 };
    let raf = 0;

    function syncSize() {
      const w = el.clientWidth || 1280;
      const h = el.clientHeight || 720;
      if (el.width !== w || el.height !== h) {
        el.width = w;
        el.height = h;
      }
    }

    syncSize();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(syncSize) : null;
    ro?.observe(el);

    const onMove = (event: MouseEvent) => {
      if (!interactive) return;
      const rect = el.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = (event.clientX - rect.left) / rect.width;
      const ny = 1.0 - (event.clientY - rect.top) / rect.height;
      mouse = { x: nx * el.width, y: ny * el.height };
    };

    if (interactive) window.addEventListener("mousemove", onMove);

    function render(t: number) {
      syncSize();
      webgl.viewport(0, 0, el.width, el.height);
      if (uTime) webgl.uniform1f(uTime, t * 0.001);
      if (uRes) webgl.uniform2f(uRes, el.width, el.height);
      if (uMouse) webgl.uniform2f(uMouse, mouse.x, mouse.y);
      webgl.drawArrays(webgl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(render);
    }

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      if (interactive) window.removeEventListener("mousemove", onMove);
    };
  }, [reducedMotion, interactive]);

  if (reducedMotion) {
    return (
      <div
        className={cn("absolute inset-0 bg-gradient-to-br from-brand-deep via-ocean-600 to-brand-surface", className)}
        aria-hidden
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full mix-blend-screen", className)}
      style={{ opacity }}
      aria-hidden
    />
  );
}

export function StitchGlowOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="animate-float-slow absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent-lime/20 blur-[120px] mix-blend-screen" />
      <div className="animate-float-medium absolute bottom-1/4 right-1/4 h-[600px] w-[600px] rounded-full bg-ocean-400/20 blur-[140px] mix-blend-screen" />
      <div className="animate-float-fast absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean-600/30 blur-[100px] mix-blend-screen" />
    </div>
  );
}
