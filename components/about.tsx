"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { PhotoPlate } from "@/components/photo-plate";
import { sectionPlates } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function About() {
  const { t } = usePrefs();
  const [lead, familyTitle, familyBody, reviewedTitle, reviewedBody] =
    t.aboutBody;

  return (
    <section className="section-shell px-5 py-20 sm:px-8 sm:py-28">
      <div id="about" className="section-anchor mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
              {t.aboutEyebrow}
            </p>
            <h2 className="mb-3 text-3xl leading-tight font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mb-6 text-lg text-sky">{t.aboutSubtitle}</p>
            <p className="max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)]">
              {lead}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="liquid-glass rounded-2xl p-5">
                <h3 className="mb-2 text-base font-medium text-[color:var(--ink)]">
                  {familyTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {familyBody}
                </p>
              </article>
              <article className="liquid-glass rounded-2xl p-5">
                <h3 className="mb-2 text-base font-medium text-[color:var(--ink)]">
                  {reviewedTitle}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {reviewedBody}
                </p>
              </article>
            </div>
          </div>

          <figure className="liquid-glass overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/5]">
              <Image
                src="/brand/dr-alicia-sturn.jpg"
                alt={`${t.brand} — ${"Dr. Alicia Sturn"}`}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover object-[50%_18%]"
                priority
              />
            </div>
          </figure>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <PhotoPlate
            src={sectionPlates.about}
            alt=""
            sizes="(min-width: 1024px) 480px, 100vw"
            className="aspect-[4/5] rounded-3xl lg:aspect-[4/5]"
          />
          <div>
            <h3 className="mb-6 text-2xl font-medium tracking-tight text-[color:var(--ink)] sm:text-3xl">
              {t.whyChooseTitle}
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2">
              {t.whyChoose.map((item) => (
                <li
                  key={item}
                  className="liquid-glass flex items-start gap-3 rounded-2xl px-4 py-3.5 text-sm leading-relaxed text-[color:var(--ink)]"
                >
                  <Check
                    size={16}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-teal"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[color:var(--muted)]">
              {t.welcomeClose}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
