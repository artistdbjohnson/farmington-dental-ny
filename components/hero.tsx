"use client";

import Image from "next/image";
import { ExtLink } from "@/components/ext-link";
import { links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Hero() {
  const { t } = usePrefs();

  return (
    <section id="top" className="relative h-svh min-h-[640px] overflow-hidden">
      <Image
        src="/brand/hero-blur.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-still object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-veil)" }}
      />

      <div className="absolute bottom-0 left-0 z-20 max-w-2xl px-6 pb-10 sm:px-12 sm:pb-16">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-white/55 uppercase">
          {t.brand}
        </p>
        <h1 className="mb-4 text-4xl leading-tight font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t.aboutTitle}
        </h1>
        <p className="mb-7 max-w-md text-sm leading-relaxed text-white/60">
          {t.aboutSubtitle}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={links.phoneTel}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-7 sm:text-base"
          >
            {t.chrome.callNow}
          </a>
          <ExtLink
            href={links.newPatientForms}
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-7 sm:text-base"
          >
            {t.chrome.patientForms}
          </ExtLink>
        </div>
        <p className="mt-6 max-w-md text-[13px] leading-relaxed text-white/45">
          {t.serving}
        </p>
      </div>
    </section>
  );
}
