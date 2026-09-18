"use client";

import { PhotoPlate } from "@/components/photo-plate";
import { sectionPlates } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Reviews() {
  const { t } = usePrefs();
  const [featured, ...rest] = t.reviews;

  return (
    <section className="section-shell px-5 py-20 sm:px-8 sm:py-28">
      <div id="reviews" className="section-anchor mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
          {t.chrome.happyPatients}
        </p>
        <h2 className="mb-10 text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {t.chrome.happyPatients}
        </h2>

        <article className="liquid-glass mb-4 grid overflow-hidden rounded-3xl md:grid-cols-[0.78fr_1.22fr]">
          <PhotoPlate
            src={sectionPlates.reviews}
            alt=""
            sizes="(min-width: 768px) 420px, 100vw"
            className="aspect-[4/5] md:aspect-auto md:min-h-[360px]"
            imageClassName="object-cover object-top"
          />
          <div className="flex flex-col justify-end p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-[color:var(--ink)] sm:text-xl">
              “{featured.quote}”
            </p>
            <p className="mt-5 text-sm text-[color:var(--muted)]">
              ~ {featured.by}
            </p>
          </div>
        </article>

        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((review) => (
            <article
              key={review.by}
              className="liquid-glass rounded-2xl p-5 sm:p-6"
            >
              <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                “{review.quote}”
              </p>
              <p className="mt-4 text-sm text-[color:var(--ink)]">~ {review.by}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
