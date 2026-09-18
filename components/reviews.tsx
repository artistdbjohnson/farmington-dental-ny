"use client";

import { Plate } from "@/components/plate";
import { SECTION_PAD, sectionMedia } from "@/lib/media";
import { usePrefs } from "@/lib/prefs";

export function Reviews() {
  const { t } = usePrefs();
  const [featured, ...rest] = t.reviews;

  return (
    <section id="reviews" className={`relative overflow-hidden ${SECTION_PAD}`}>
      <div className="pointer-events-none absolute inset-0">
        <Plate
          src={sectionMedia.reviews.src}
          alt=""
          className="h-full w-full"
          imageClassName="object-cover opacity-35 saturate-[0.9]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[color:var(--bg)]/78" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
          {t.chrome.happyPatients}
        </p>
        <h2 className="mb-10 text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {t.chrome.happyPatients}
        </h2>

        <article className="liquid-glass mb-4 rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-relaxed text-[color:var(--ink)] sm:text-xl">
            “{featured.quote}”
          </p>
          <p className="mt-5 text-sm text-[color:var(--muted)]">~ {featured.by}</p>
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
