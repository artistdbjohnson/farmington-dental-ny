"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ExtLink } from "@/components/ext-link";
import { cn } from "@/lib/cn";
import { RAIL, links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";
import { scrollToAnchor, syncStickyNavHeight } from "@/lib/scroll";

export function Chrome({
  scrolled,
  active,
}: {
  scrolled: boolean;
  active: string;
}) {
  const { t, locale, setLocale, theme, setTheme } = usePrefs();
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const node = headerRef.current;
    if (!node) return;
    const publish = () => syncStickyNavHeight(node);
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(node);
    window.addEventListener("resize", publish);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", publish);
    };
  }, [scrolled, menuOpen]);

  const onHero = !scrolled;

  const goTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    const node = document.getElementById(id);
    if (!node) return;
    event.preventDefault();
    setMenuOpen(false);
    scrollToAnchor(id, reduce ? "auto" : "smooth");
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 pt-[env(safe-area-inset-top,0px)] transition-colors",
        onHero ? "on-hero" : "is-stuck",
        scrolled && "bg-[color:var(--bg)]/88 backdrop-blur-md",
      )}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        {t.chrome.skip}
      </a>

      <div
        className={cn(
          "grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-4 px-5 sm:px-8 lg:gap-6 xl:gap-8",
          scrolled ? "py-2.5" : "py-4 sm:py-5",
        )}
      >
        <a
          href="#top"
          onClick={(event) => goTo(event, "top")}
          className="flex min-w-0 items-center justify-self-start gap-2.5 text-white"
        >
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={34}
            height={40}
            className="h-9 w-auto shrink-0"
          />
          <motion.span
            initial={false}
            animate={{
              width: scrolled ? 0 : "auto",
              opacity: scrolled ? 0 : 1,
              marginLeft: scrolled ? 0 : 2,
            }}
            transition={{
              duration: reduce ? 0 : 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden overflow-hidden xl:block"
          >
            <Image
              src="/brand/logo-wordmark.png"
              alt={t.brand}
              width={168}
              height={48}
              className="h-8 w-auto max-w-[148px] brightness-0 invert sm:h-9 sm:max-w-none"
            />
          </motion.span>
        </a>

        <nav
          className="liquid-glass hidden items-center gap-0.5 rounded-xl px-3.5 py-2 md:flex lg:gap-1 lg:px-4"
          aria-label="Primary"
        >
          {RAIL.map((item) => {
            const current = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => goTo(event, item.id)}
                className={cn(
                  "relative flex items-center whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm transition-colors lg:px-3.5",
                  onHero
                    ? current
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:text-white"
                    : current
                      ? "bg-white/15 text-[color:var(--ink)]"
                      : "text-[color:var(--muted)] hover:text-[color:var(--ink)]",
                )}
              >
                {t.chrome.rail[item.id]}
                {current ? (
                  <motion.span
                    layoutId="rail-underline"
                    className="rail-underline pointer-events-none absolute right-2 bottom-0.5 left-2"
                    transition={{
                      duration: reduce ? 0 : 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ) : null}
              </a>
            );
          })}
        </nav>

        <div className="hidden min-w-0 items-center justify-self-end gap-3 md:flex xl:gap-4">
          <PrefsCluster
            locale={locale}
            theme={theme}
            setLocale={setLocale}
            setTheme={setTheme}
            t={t}
            onHero={onHero}
          />
          <a
            href={links.phoneTel}
            className={cn(
              "liquid-glass shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5",
              onHero ? "text-white" : "text-[color:var(--ink)]",
            )}
          >
            {t.chrome.callNow}
          </a>
          <ExtLink
            href={links.newPatientForms}
            className={cn(
              "hidden shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors xl:inline-flex",
              onHero
                ? "bg-white text-black hover:bg-white/90"
                : "bg-navy text-white hover:bg-blue dark:bg-white dark:text-black dark:hover:bg-white/90",
            )}
          >
            {t.chrome.patientForms}
          </ExtLink>
        </div>

        <button
          type="button"
          className={cn(
            "liquid-glass col-start-3 justify-self-end rounded-lg p-2 md:hidden",
            onHero ? "text-white" : "text-[color:var(--ink)]",
          )}
          aria-label={menuOpen ? t.chrome.close : t.chrome.menu}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden px-5 pt-4 pb-3",
          onHero ? "border-t border-white/10" : "border-t border-[color:var(--line)]",
        )}
      >
        <nav
          className="no-scrollbar flex gap-2 overflow-x-auto"
          aria-label="Sections"
        >
          {RAIL.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => goTo(event, item.id)}
              className={cn(
                "relative shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition-colors",
                active === item.id
                  ? onHero
                    ? "text-white"
                    : "text-[color:var(--ink)]"
                  : onHero
                    ? "text-white/65"
                    : "text-[color:var(--muted)]",
              )}
            >
              {t.chrome.rail[item.id]}
              {active === item.id ? (
                <span className="rail-underline absolute right-2 bottom-0 left-2" />
              ) : null}
            </a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="on-hero absolute top-full right-4 left-4 z-30 md:hidden"
          >
            <div className="liquid-glass liquid-glass-panel flex flex-col gap-1 rounded-2xl p-4">
            {RAIL.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => goTo(event, item.id)}
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm text-white/85"
              >
                {t.chrome.rail[item.id]}
              </a>
            ))}
            <div className="mt-2 border-t border-white/10 pt-3">
              <PrefsCluster
                locale={locale}
                theme={theme}
                setLocale={setLocale}
                setTheme={setTheme}
                t={t}
                onHero
              />
            </div>
            <div className="mt-2 flex gap-2 border-t border-white/10 pt-3">
              <a
                href={links.phoneTel}
                className="flex-1 whitespace-nowrap rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                {t.chrome.callNow}
              </a>
              <ExtLink
                href={links.newPatientForms}
                className="flex-1 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-center text-sm font-medium text-black"
              >
                {t.chrome.patientForms}
              </ExtLink>
            </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function PrefsCluster({
  locale,
  theme,
  setLocale,
  setTheme,
  t,
  onHero,
}: {
  locale: "en" | "pt";
  theme: "dark" | "light";
  setLocale: (locale: "en" | "pt") => void;
  setTheme: (theme: "dark" | "light") => void;
  t: ReturnType<typeof usePrefs>["t"];
  onHero: boolean;
}) {
  return (
    <div
      className={cn(
        "liquid-glass flex shrink-0 items-center gap-0.5 rounded-full p-1",
        onHero ? "text-white" : "text-[color:var(--ink)]",
      )}
      role="group"
      aria-label="Language and theme"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-colors",
          locale === "en" ? "bg-white/15" : "opacity-60 hover:opacity-100",
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("pt")}
        className={cn(
          "rounded-full px-2.5 py-1 text-[11px] font-medium tracking-wide transition-colors",
          locale === "pt" ? "bg-white/15" : "opacity-60 hover:opacity-100",
        )}
        aria-pressed={locale === "pt"}
      >
        PT
      </button>
      <span className="mx-0.5 h-3 w-px bg-current opacity-20" />
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={cn(
          "rounded-full p-1.5 transition-colors",
          theme === "light" ? "bg-white/15" : "opacity-60 hover:opacity-100",
        )}
        aria-label={t.chrome.light}
        aria-pressed={theme === "light"}
      >
        <Sun size={13} strokeWidth={1.75} />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={cn(
          "rounded-full p-1.5 transition-colors",
          theme === "dark" ? "bg-white/15" : "opacity-60 hover:opacity-100",
        )}
        aria-label={t.chrome.dark}
        aria-pressed={theme === "dark"}
      >
        <Moon size={13} strokeWidth={1.75} />
      </button>
    </div>
  );
}
