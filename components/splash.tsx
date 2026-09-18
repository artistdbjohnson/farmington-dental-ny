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
const POSTER_HOLD_MS = 2200;

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
  const entered = useRef(false);

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
    const hold = window.setTimeout(enterSite, POSTER_HOLD_MS);
    return () => window.clearTimeout(hold);
  }, [enterSite, phase, skipIntro]);

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
