"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { usePrefs } from "@/lib/prefs";

const INTRO_KEY = "fd-intro-seen";
const FADE_MS = 3700;
const ENTER_AT = 8;
const REDUCED_HOLD_MS = 1200;

type Phase = "showing" | "fading" | "hidden";

function shouldSkipIntro() {
  try {
    if (window.location.hash.length > 1) return true;
    return sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return Boolean(window.location.hash);
  }
}

function subscribeIntro() {
  return () => {};
}

export function Splash() {
  const { t } = usePrefs();
  const skipIntro = useSyncExternalStore(
    subscribeIntro,
    shouldSkipIntro,
    () => true,
  );
  const [phase, setPhase] = useState<Phase>("showing");
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const entered = useRef(false);
  const reduce = useSyncExternalStore(
    subscribeIntro,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  const enterSite = useCallback(() => {
    if (entered.current) return;
    entered.current = true;
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      /* ignore */
    }
    setPhase((prev) => (prev === "showing" ? "fading" : prev));
  }, []);

  useEffect(() => {
    if (skipIntro) {
      document.documentElement.removeAttribute("data-intro");
      document.documentElement.style.overflow = "";
      return;
    }
    document.documentElement.setAttribute("data-intro", "show");
    document.documentElement.style.overflow = "hidden";
  }, [skipIntro]);

  useEffect(() => {
    if (phase !== "fading") return;
    const overlay = overlayRef.current;
    requestAnimationFrame(() => {
      if (overlay) {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      }
    });
    document.documentElement.style.overflow = "";
    document.documentElement.removeAttribute("data-intro");
    const hide = window.setTimeout(() => setPhase("hidden"), FADE_MS);
    return () => window.clearTimeout(hide);
  }, [phase]);

  useEffect(() => {
    if (skipIntro || phase !== "showing") return;

    if (reduce) {
      const hold = window.setTimeout(enterSite, REDUCED_HOLD_MS);
      return () => window.clearTimeout(hold);
    }

    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;

    const onTime = () => {
      if (video.currentTime >= ENTER_AT) enterSite();
    };
    const onEnded = () => {
      window.setTimeout(enterSite, 400);
    };

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    const play = video.play();
    if (play?.catch) play.catch(() => {});

    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
    };
  }, [enterSite, phase, reduce, skipIntro]);

  if (skipIntro || phase === "hidden") return null;

  const [farmington, dental] = t.brand.split(" ");

  return (
    <div
      ref={overlayRef}
      className="splash-overlay"
      role="dialog"
      aria-label={t.brand}
      aria-modal="true"
    >
      {reduce ? null : (
        <video
          ref={videoRef}
          className="splash-video"
          src="/media/intro.mp4"
          poster="/media/intro-poster.jpg"
          preload="auto"
          autoPlay
          muted
          playsInline
        />
      )}
      <div className="splash-veil" />
      <div className="splash-chrome">
        {/* Decorative overlay mark; native img avoids next/image decode delay on the splash. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo-mark.png"
          alt=""
          width={58}
          height={68}
          className="splash-mark"
        />
        <div className="splash-wordmark">
          <span className="splash-wordmark-lead">{farmington}</span>
          <span className="splash-wordmark-sub">{dental}</span>
        </div>
        <p className="splash-tagline">{t.aboutSubtitle}</p>
        <button type="button" className="splash-enter" onClick={enterSite}>
          {t.chrome.enterSite}
        </button>
      </div>
    </div>
  );
}
