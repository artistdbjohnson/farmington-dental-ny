"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

type Phase = "idle" | "armed" | "settled";

/**
 * Once-per-load settle for a section kicker + heading.
 * Stays idle (fully visible) when the heading is already on screen,
 * when motion preference is unknown, or when reduced motion is set.
 */
export function SectionHead({
  anchorId,
  kicker,
  title,
  titleClassName,
}: {
  anchorId: string;
  kicker: string;
  title: string;
  titleClassName: string;
}) {
  const reduce = useReducedMotion();
  const headRef = useRef<HTMLHeadingElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (reduce !== false) return;
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    // Hash scrolling lands a frame or two after hydration. Wait, then
    // leave the landing heading still. Only headings still below the
    // fold get armed.
    const timer = window.setTimeout(() => {
      if (cancelled) return;
      if (window.location.hash.replace("#", "") === anchorId) return;
      const node = headRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
      if (inView) return;

      setPhase("armed");
      observer = new IntersectionObserver(
        (entries) => {
          if (cancelled) return;
          if (entries.some((entry) => entry.isIntersecting)) {
            setPhase("settled");
            observer?.disconnect();
          }
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.4 },
      );
      observer.observe(node);
    }, 80);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [anchorId, reduce]);

  const armed = phase !== "idle";
  const settled = phase === "settled";

  return (
    <>
      <p
        className="threshold-settle mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase"
        data-armed={armed ? "true" : undefined}
        data-settled={settled ? "true" : undefined}
      >
        {kicker}
      </p>
      <h2
        ref={headRef}
        className={cn("threshold-settle", titleClassName)}
        data-armed={armed ? "true" : undefined}
        data-settled={settled ? "true" : undefined}
        data-lag="heading"
      >
        {title}
      </h2>
    </>
  );
}
