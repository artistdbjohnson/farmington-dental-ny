"use client";

import { useState } from "react";
import { ExtLink } from "@/components/ext-link";
import { PhotoPlate } from "@/components/photo-plate";
import { links, sectionPlates } from "@/lib/copy";
import { usePrefs } from "@/lib/prefs";

export function Contact() {
  const { t } = usePrefs();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = encodeURIComponent(
      `${name}\n${email}\n\n${message}`.trim(),
    );
    const subject = encodeURIComponent(t.chrome.formSubject);
    const mailbox = `mailto:${t.email}?subject=${subject}&body=${body}`;
    window.location.assign(mailbox);
  }

  return (
    <section className="section-shell px-5 py-20 sm:px-8 sm:py-28">
      <div id="contact" className="section-anchor mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium tracking-[0.22em] text-steel uppercase">
          {t.chrome.contactUs}
        </p>
        <h2 className="mb-8 text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl">
          {t.chrome.contactUs}
        </h2>

        <PhotoPlate
          src={sectionPlates.contact}
          alt=""
          sizes="(min-width: 768px) 1100px, 100vw"
          className="mb-8 aspect-[16/8] rounded-3xl sm:aspect-[21/9]"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <article className="liquid-glass rounded-2xl p-5 sm:p-6">
              <h3 className="mb-3 text-sm font-medium tracking-wide text-steel uppercase">
                {t.chrome.contactInfo}
              </h3>
              <p className="text-[15px] leading-relaxed text-[color:var(--ink)]">
                {t.address[0]}
                <br />
                {t.address[1]}
              </p>
              <p className="mt-4">
                <a
                  href={links.phoneTel}
                  className="text-[15px] text-sky transition-colors hover:text-[color:var(--ink)]"
                >
                  {t.phone}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={links.email}
                  className="text-[15px] text-sky transition-colors hover:text-[color:var(--ink)]"
                >
                  {t.email}
                </a>
              </p>
              <ExtLink
                href={links.maps}
                className="mt-4 inline-block text-sm text-[color:var(--muted)] underline-offset-4 hover:underline"
              >
                {t.chrome.openMaps}
              </ExtLink>
            </article>

            <article className="liquid-glass rounded-2xl p-5 sm:p-6">
              <h3 className="mb-3 text-sm font-medium tracking-wide text-steel uppercase">
                {t.chrome.officeHours}
              </h3>
              <p className="whitespace-pre-line text-[15px] leading-relaxed text-[color:var(--ink)]">
                {t.hours}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
                {t.serving}
              </p>
            </article>
          </div>

          <div className="space-y-4">
            <div className="liquid-glass overflow-hidden rounded-2xl">
              <iframe
                title={t.address.join(", ")}
                src={links.mapsEmbed}
                className="h-56 w-full border-0 grayscale invert-0 contrast-[0.95] dark:invert-[0.12]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form
              onSubmit={onSubmit}
              className="liquid-glass space-y-3 rounded-2xl p-5 sm:p-6"
            >
              <label className="block text-sm">
                <span className="mb-1.5 block text-[color:var(--muted)]">
                  {t.chrome.formName}
                </span>
                <input
                  required
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl bg-white/5 px-3 py-2.5 text-[color:var(--ink)] outline-none ring-1 ring-white/10 focus:ring-sky"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-[color:var(--muted)]">
                  {t.chrome.formEmail}
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl bg-white/5 px-3 py-2.5 text-[color:var(--ink)] outline-none ring-1 ring-white/10 focus:ring-sky"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-[color:var(--muted)]">
                  {t.chrome.formMessage}
                </span>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-y rounded-xl bg-white/5 px-3 py-2.5 text-[color:var(--ink)] outline-none ring-1 ring-white/10 focus:ring-sky"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90"
              >
                {t.chrome.formSend}
              </button>
              <p className="text-xs leading-relaxed text-[color:var(--muted)]">
                {t.chrome.formHint}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
