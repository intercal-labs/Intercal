"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/lib/assets";

/** Pause between end of one playthrough and the next start. */
const REPLAY_DELAY_MS = 30_000;

/**
 * Full-bleed cinematic hero: muted video over a still poster.
 * Plays once, waits ~30s, then plays again (no continuous loop).
 * prefers-reduced-motion and load errors keep the lab still only.
 */
export function HeroMedia() {
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    return () => {
      if (replayTimerRef.current !== null) {
        clearTimeout(replayTimerRef.current);
        replayTimerRef.current = null;
      }
    };
  }, []);

  const showVideo = allowVideo && !videoFailed;

  const clearReplayTimer = () => {
    if (replayTimerRef.current !== null) {
      clearTimeout(replayTimerRef.current);
      replayTimerRef.current = null;
    }
  };

  const handleEnded = () => {
    clearReplayTimer();
    replayTimerRef.current = setTimeout(() => {
      replayTimerRef.current = null;
      const el = videoRef.current;
      if (!el) return;
      el.currentTime = 0;
      void el.play().catch(() => {
        /* Autoplay may be blocked after long idle; poster remains. */
      });
    }, REPLAY_DELAY_MS);
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={assets.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className={`hero-photo object-cover object-[52%_28%] sm:object-[58%_32%] ${
          showVideo ? "" : "hero-photo-motion"
        }`}
      />

      {showVideo ? (
        <video
          ref={videoRef}
          className="hero-video hero-photo absolute inset-0 h-full w-full max-w-none object-cover object-[52%_28%] sm:object-[58%_32%]"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster={assets.hero}
          aria-hidden
          onEnded={handleEnded}
          onError={() => {
            clearReplayTimer();
            setVideoFailed(true);
          }}
        >
          <source src={assets.heroVideo} type="video/mp4" />
        </video>
      ) : null}

      <div aria-hidden className="hero-veil absolute inset-0" />
    </div>
  );
}
