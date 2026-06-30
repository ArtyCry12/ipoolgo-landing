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
  onIntroComplete: () => void;
};

const AudioCtx = createContext<AudioContextValue | null>(null);

function playTone(
  ctx: globalThis.AudioContext | null,
  freq: number,
  duration: number,
  type: OscillatorType = "sine",
  volume = 0.08,
) {
  if (!ctx) return;
  if (ctx.state === "suspended") void ctx.resume();
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
  const [muted, setMuted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  const ctxRef = useRef<globalThis.AudioContext | null>(null);
  const ambientRef = useRef<OscillatorNode | null>(null);
  const ambientGainRef = useRef<GainNode | null>(null);
  const introDoneRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    ctxRef.current = new AudioContext();
    const resumeOnInteraction = () => {
      void ctxRef.current?.resume();
    };
    window.addEventListener("pointerdown", resumeOnInteraction, { once: true });
    window.addEventListener("keydown", resumeOnInteraction, { once: true });

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("pointerdown", resumeOnInteraction);
      window.removeEventListener("keydown", resumeOnInteraction);
      ambientRef.current?.stop();
      void ctxRef.current?.close();
    };
  }, []);

  const stopAmbient = useCallback(() => {
    ambientRef.current?.stop();
    ambientRef.current = null;
    ambientGainRef.current = null;
  }, []);

  const startAmbient = useCallback(
    (fadeIn = false) => {
      const ctx = ctxRef.current;
      if (!ctx || reducedMotion || muted || ambientRef.current) return;
      void ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = 220;
      const targetVol = 0.015;
      gain.gain.value = fadeIn ? 0 : targetVol;
      if (fadeIn) {
        gain.gain.linearRampToValueAtTime(targetVol, ctx.currentTime + 1.2);
      }
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      ambientRef.current = osc;
      ambientGainRef.current = gain;
    },
    [muted, reducedMotion],
  );

  useEffect(() => {
    if (muted || reducedMotion) {
      stopAmbient();
      void ctxRef.current?.suspend();
    } else if (introDoneRef.current) {
      startAmbient();
    } else {
      void ctxRef.current?.resume();
    }
  }, [muted, reducedMotion, startAmbient, stopAmbient]);

  const onIntroComplete = useCallback(() => {
    introDoneRef.current = true;
    if (!muted && !reducedMotion) {
      startAmbient(true);
    }
  }, [muted, reducedMotion, startAmbient]);

  const toggleMute = useCallback(() => {
    setMuted((m) => !m);
  }, []);

  const playClick = useCallback(() => {
    playTone(ctxRef.current, 880, 0.06, "triangle", 0.05);
  }, []);

  const playSplash = useCallback(() => {
    playTone(ctxRef.current, 440, 0.15, "sine", 0.06);
    setTimeout(() => playTone(ctxRef.current, 330, 0.2, "sine", 0.04), 50);
  }, []);

  const playWhoosh = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;
    if (ctx.state === "suspended") void ctx.resume();
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
  }, []);

  return (
    <AudioCtx.Provider
      value={{ muted, toggleMute, playClick, playSplash, playWhoosh, onIntroComplete }}
    >
      {children}
    </AudioCtx.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioCtx);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
