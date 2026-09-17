"use client";

import { ArrowUpRight, CreditCard, FileText, Shield } from "lucide-react";
import { ExtLink } from "@/components/ext-link";
import { links } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

const ICONS = [FileText, FileText, Shield];

export function PatientInfo() {
  const { t } = usePrefs();

  return (
    <section
      id="patient-info"
      className="section-shell px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
          {t.chrome.patientInfo}
        </p>
        <h2 className="mb-10 text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {t.chrome.patientInfo}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {t.patientInfo.map((item, index) => {
            const Icon = ICONS[index] ?? FileText;
            return (
              <ExtLink
                key={item.href}
                href={item.href}
                className="liquid-glass group flex items-start justify-between gap-4 rounded-2xl p-5 transition-colors hover:bg-white/5"
              >
                <span className="flex items-start gap-3">
                  <span className="mt-0.5 text-sky">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <span className="text-base font-medium text-[color:var(--ink)]">
                    {item.label}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-[color:var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </ExtLink>
            );
          })}

          <ExtLink
            href={links.payment}
            className="liquid-glass group flex items-start justify-between gap-4 rounded-2xl p-5 transition-colors hover:bg-white/5"
          >
            <span className="flex items-start gap-3">
              <span className="mt-0.5 text-sky">
                <CreditCard size={18} strokeWidth={1.6} />
              </span>
              <span className="text-base font-medium text-[color:var(--ink)]">
                {t.chrome.makePayment}
              </span>
            </span>
            <ArrowUpRight
              size={16}
              className="mt-1 shrink-0 text-[color:var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </ExtLink>
        </div>
      </div>
    </section>
  );
}
