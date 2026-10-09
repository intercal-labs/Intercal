"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";

/**
 * Full-bleed cinematic hero: muted looping video over a still poster.
 * prefers-reduced-motion and load errors keep the lab still only.
 */
export function HeroMedia() {
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const showVideo = allowVideo && !videoFailed;

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
          className="hero-video hero-photo absolute inset-0 h-full w-full max-w-none object-cover object-[52%_28%] sm:object-[58%_32%]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={assets.hero}
          aria-hidden
          onError={() => setVideoFailed(true)}
        >
          <source src={assets.heroVideo} type="video/mp4" />
        </video>
      ) : null}

      <div aria-hidden className="hero-veil absolute inset-0" />
    </div>
  );
}
