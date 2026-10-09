"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assets } from "@/lib/assets";

/**
 * Field I&C editorial media: one muted HTX plant clip.
 * Autoplay when in view, pause off-screen, continuous loop while playing.
 * prefers-reduced-motion and load errors keep the poster still only.
 */
export function FieldPlantMedia() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [allowVideo, setAllowVideo] = useState(false);
  const [inView, setInView] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowVideo(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

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
      void el.play().catch(() => {
        /* Autoplay blocked — poster remains. */
      });
    } else {
      el.pause();
    }
  }, [inView, allowVideo, videoFailed]);

  const showVideo = allowVideo && !videoFailed;

  return (
    <div ref={frameRef} className="field-media min-w-0">
      <div className="field-frame relative aspect-[16/11] overflow-hidden bg-tan/40 sm:aspect-[16/10] lg:aspect-[3/2]">
        <Image
          src={assets.fieldHoustonPoster}
          alt="Industrial plant instrumentation and controls — Greater Houston"
          fill
          sizes="(max-width: 1024px) 92vw, 55vw"
          className="field-still object-cover"
        />

        {showVideo ? (
          <video
            ref={videoRef}
            className="field-video absolute inset-0 h-full w-full max-w-none object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster={assets.fieldHoustonPoster}
            aria-hidden
            onError={() => setVideoFailed(true)}
          >
            <source src={assets.fieldHoustonVideo} type="video/mp4" />
          </video>
        ) : null}

        <div aria-hidden className="field-frame-veil absolute inset-0" />
      </div>
    </div>
  );
}
