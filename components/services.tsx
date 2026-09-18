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
import { PhotoPlate } from "@/components/photo-plate";
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
    <section className="section-shell px-5 py-20 sm:px-8 sm:py-28">
      <div id="services" className="section-anchor mx-auto max-w-6xl">
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
              const plate = servicePlates[key];
              return (
                <article
                  key={key}
                  className="liquid-glass rounded-2xl"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? "" : key)}
                    className="flex w-full items-center gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5"
                  >
                    <span className="relative h-14 w-[4.75rem] shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-24">
                      <PhotoPlate
                        src={plate.src}
                        alt=""
                        sizes="96px"
                        className="h-full w-full"
                        imageClassName="object-cover"
                      />
                      <span
                        className={cn(
                          "absolute bottom-1 left-1 flex h-7 w-7 items-center justify-center rounded-lg bg-linear-to-br text-white",
                          plate.plate,
                        )}
                      >
                        <Icon size={14} strokeWidth={1.6} />
                      </span>
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
                          <div className="relative mb-3 overflow-hidden rounded-xl">
                            <PhotoPlate
                              src={plate.src}
                              alt=""
                              sizes="(min-width: 768px) 960px, 100vw"
                              className="aspect-[16/9] min-h-[180px] sm:min-h-[240px]"
                            />
                            <span
                              className={cn(
                                "absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br text-white shadow-sm",
                                plate.plate,
                              )}
                            >
                              <Icon size={15} strokeWidth={1.6} />
                            </span>
                          </div>
                          <div
                            className={cn(
                              "liquid-glass overflow-hidden rounded-xl bg-linear-to-br p-[1px]",
                              plate.nest,
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
