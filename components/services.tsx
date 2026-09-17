"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Baby,
  HeartPulse,
  Layers,
  ShieldPlus,
  Siren,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";
import {
  SERVICE_KEYS,
  servicePlates,
  type ServiceKey,
} from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

const ICONS: Record<ServiceKey, typeof ShieldPlus> = {
  "Preventative Care": ShieldPlus,
  "Cosmetic Dentistry": Sparkles,
  "Restorative Dentistry": Layers,
  "Emergency Dentistry": Siren,
  "Pediatric Dentistry": Baby,
  "Endodontic Care (Root Canals)": HeartPulse,
};

export function Services() {
  const { t } = usePrefs();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<ServiceKey | "">("Preventative Care");

  return (
    <section id="services" className="section-shell px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
          {t.chrome.rail.services}
        </p>
        <h2 className="mb-8 max-w-xl text-3xl leading-tight font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {t.chrome.rail.services}
        </h2>

        <div className="liquid-glass rounded-3xl p-2 sm:p-3">
          <div className="flex flex-col gap-2">
            {SERVICE_KEYS.map((key, index) => {
              const Icon = ICONS[key];
              const isOpen = open === key;
              const copy = t.services[key];
              return (
                <article
                  key={key}
                  className="liquid-glass rounded-2xl"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? "" : key)}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left sm:px-5"
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br text-white",
                        servicePlates[key].plate,
                      )}
                    >
                      <Icon size={18} strokeWidth={1.6} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[11px] tracking-[0.18em] text-[color:var(--muted)] uppercase">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="block text-base font-medium text-[color:var(--ink)] sm:text-lg">
                        {copy.title}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{
                        duration: reduce ? 0 : 0.32,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-2xl leading-none text-[color:var(--muted)]"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={`${key}-panel`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{
                          duration: reduce ? 0 : 0.48,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                          <div
                            className={cn(
                              "liquid-glass overflow-hidden rounded-xl bg-linear-to-br p-[1px]",
                              servicePlates[key].nest,
                            )}
                          >
                            <div className="rounded-[10px] bg-[color:var(--bg-elev)]/55 p-4 sm:p-5">
                              <p className="text-sm leading-relaxed text-[color:var(--muted)] sm:text-[15px]">
                                {copy.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
