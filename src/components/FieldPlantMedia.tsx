"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/lib/assets";

type PlantClip = {
  src: string;
  poster: string;
  alt: string;
};

const clips: PlantClip[] = [
  {
    src: assets.plant1Video,
    poster: assets.plant1Poster,
    alt: "Industrial plant instrumentation and controls",
  },
  {
    src: assets.plant2Video,
    poster: assets.plant2Poster,
    alt: "On-site field instrumentation work",
  },
];

/**
 * Editorial plant clips: muted, playsInline, autoplay when in view,
 * pause when off-screen. Plays once per enter (calm cadence).
 * prefers-reduced-motion and load errors keep poster stills only.
 */
export function FieldPlantMedia() {
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className="field-media grid gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-6">
      <PlantFrame
        clip={clips[0]}
        allowVideo={allowVideo}
        className="lg:col-span-7"
        aspectClass="aspect-[4/3] sm:aspect-[16/11]"
      />
      <PlantFrame
        clip={clips[1]}
        allowVideo={allowVideo}
        className="lg:col-span-5 lg:mt-16"
        aspectClass="aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4]"
      />
    </div>
  );
}

function PlantFrame({
  clip,
  allowVideo,
  className,
  aspectClass,
}: {
  clip: PlantClip;
  allowVideo: boolean;
  className?: string;
  aspectClass: string;
}) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const playedThisEnter = useRef(false);

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0, 0.35, 0.6] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !allowVideo || videoFailed) return;

    if (inView) {
      if (!playedThisEnter.current) {
        playedThisEnter.current = true;
        el.currentTime = 0;
        void el.play().catch(() => {
          /* Autoplay blocked — poster remains. */
        });
      }
    } else {
      el.pause();
      playedThisEnter.current = false;
    }
  }, [inView, allowVideo, videoFailed]);

  const showVideo = allowVideo && !videoFailed;

  return (
    <div ref={frameRef} className={`field-frame min-w-0 ${className ?? ""}`}>
      <div
        className={`relative overflow-hidden bg-tan/40 ${aspectClass}`}
      >
        <Image
          src={clip.poster}
          alt={clip.alt}
          fill
          sizes="(max-width: 1024px) 92vw, 48vw"
          className="field-still object-cover"
        />

        {showVideo ? (
          <video
            ref={videoRef}
            className="field-video absolute inset-0 h-full w-full max-w-none object-cover"
            muted
            playsInline
            preload="metadata"
            poster={clip.poster}
            aria-hidden
            onEnded={() => {
              const el = videoRef.current;
              if (el) el.pause();
            }}
            onError={() => setVideoFailed(true)}
          >
            <source src={clip.src} type="video/mp4" />
          </video>
        ) : null}

        <div aria-hidden className="field-frame-veil absolute inset-0" />
      </div>
    </div>
  );
}
