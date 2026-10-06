"use client";

import Image from "next/image";
import { ExtLink } from "@/components/ext-link";
import { SectionHead } from "@/components/section-head";
import { links } from "@/lib/copy";
import { instagramPosts } from "@/lib/instagram";
import { usePrefs } from "@/lib/prefs";

export function Social() {
  const { t } = usePrefs();

  return (
    <section className="section-shell py-20 sm:py-28">
      <div id="instagram" className="section-anchor mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionHead
              kicker={t.chrome.instagram}
              title={t.chrome.instagramAccount}
              titleClassName="text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl"
            />
          </div>
          <ExtLink
            href={links.instagram}
            className="text-sm text-sky underline-offset-4 hover:underline"
          >
            {t.chrome.instagramOpen}
          </ExtLink>
        </div>
      </div>

      <div className="ig-marquee" role="region" aria-label={t.chrome.instagramFeed}>
        <div className="ig-track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="ig-set"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {instagramPosts.map((post) => (
                <li key={`${copy}-${post.href}`} className="ig-card">
                  <ExtLink
                    href={post.href}
                    tabIndex={copy === 1 ? -1 : undefined}
                    className="absolute inset-0 block"
                  >
                    <Image
                      src={post.src}
                      alt={copy === 1 ? "" : post.alt}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </ExtLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
