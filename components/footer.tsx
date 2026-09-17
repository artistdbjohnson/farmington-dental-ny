"use client";

import Image from "next/image";
import { ExtLink } from "@/components/ext-link";
import { links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Footer() {
  const { t } = usePrefs();

  return (
    <footer className="border-t border-[color:var(--line)] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-mark.png"
              alt=""
              width={28}
              height={32}
              className="h-8 w-auto"
            />
            <Image
              src="/brand/logo-wordmark.png"
              alt={t.brand}
              width={140}
              height={40}
              className="h-7 w-auto dark:brightness-0 dark:invert"
            />
          </div>
          <p className="mt-4 text-sm text-[color:var(--muted)]">
            {t.address[0]}
            <br />
            {t.address[1]}
          </p>
          <p className="mt-2 text-sm">
            <a href={links.phoneTel} className="text-sky hover:underline">
              {t.phone}
            </a>
            {" · "}
            <a href={links.email} className="text-sky hover:underline">
              {t.email}
            </a>
          </p>
        </div>

        <div className="text-sm text-[color:var(--muted)]">
          <ExtLink href={links.privacy} className="hover:text-[color:var(--ink)]">
            {t.patientInfo[2].label}
          </ExtLink>
          <p className="mt-3">{t.chrome.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}
