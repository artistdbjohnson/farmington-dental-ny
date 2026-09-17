"use client";

import Image from "next/image";
import { teamPlates } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Team() {
  const { t } = usePrefs();

  return (
    <section id="team" className="section-shell px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
          {t.chrome.meetTeam}
        </p>
        <h2 className="mb-10 text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {t.chrome.meetTeam}
        </h2>

        <article className="liquid-glass mb-14 grid overflow-hidden rounded-3xl md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[420px]">
            <Image
              src={teamPlates.doctor.src}
              alt={`${teamPlates.doctor.name}, ${teamPlates.doctor.title}`}
              fill
              sizes="(min-width: 768px) 420px, 100vw"
              className="object-cover object-[50%_18%]"
            />
          </div>
          <div className="flex flex-col justify-end p-6 sm:p-10">
            <p className="text-xs tracking-[0.2em] text-steel uppercase">
              {teamPlates.doctor.title}
            </p>
            <h3 className="mt-2 text-3xl font-medium tracking-tight text-[color:var(--ink)]">
              {teamPlates.doctor.name}
            </h3>
          </div>
        </article>

        <h3 className="mb-6 text-xl font-medium text-[color:var(--ink)]">
          {t.chrome.hygienists}
        </h3>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {teamPlates.hygienists.map((person) => (
            <li key={person.name} className="liquid-glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.src}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 220px, 45vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="px-3 py-3 text-sm font-medium text-[color:var(--ink)]">
                {person.name}
              </p>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 mb-6 text-xl font-medium text-[color:var(--ink)]">
          {t.chrome.adminTeam}
        </h3>
        <ul className="max-w-xs">
          {teamPlates.admin.map((person) => (
            <li key={person.name} className="liquid-glass overflow-hidden rounded-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={person.src}
                  alt={person.name}
                  fill
                  sizes="280px"
                  className="object-cover object-top"
                />
              </div>
              <p className="px-3 py-3 text-sm font-medium text-[color:var(--ink)]">
                {person.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
