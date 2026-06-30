"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type AudioContextValue = {
  muted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playSplash: () => void;
  playWhoosh: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

function playTone(
  ctx: globalThis.AudioContext | null,
  freq: number,
  duration: number,
  type: OscillatorType = "sine",
  volume = 0.08,
) {
  if (!ctx || ctx.state === "suspended") return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const [muted, setMuted] = useState(true);
  const ctxRef = useRef<globalThis.AudioContext | null>(null);
  const ambientRef = useRef<OscillatorNode | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    ctxRef.current = new AudioContext();
    return () => {
      void ctxRef.current?.close();
    };
  }, []);

  const startAmbient = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || ambientRef.current) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 220;
    gain.gain.value = 0.015;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    ambientRef.current = osc;
    ambientGainRef.current = gain;
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      const ctx = ctxRef.current;
      if (!ctx) return next;
      if (next) {
        void ctx.suspend();
        ambientRef.current?.stop();
        ambientRef.current = null;
      } else {
        void ctx.resume();
        startAmbient();
      }
      return next;
    });
  }, [startAmbient]);

  const playClick = useCallback(() => {
    if (muted) return;
    playTone(ctxRef.current, 880, 0.06, "triangle", 0.05);
  }, [muted]);

  const playSplash = useCallback(() => {
    if (muted) return;
    playTone(ctxRef.current, 440, 0.15, "sine", 0.06);
    setTimeout(() => playTone(ctxRef.current, 330, 0.2, "sine", 0.04), 50);
  }, [muted]);

  const playWhoosh = useCallback(() => {
    if (muted) return;
    const ctx = ctxRef.current;
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  }, [muted]);

  return (
    <AudioCtx.Provider value={{ muted, toggleMute, playClick, playSplash, playWhoosh }}>
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
