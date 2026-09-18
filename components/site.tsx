"use client";

import { useEffect, useState } from "react";
import { About } from "@/components/about";
import { Chrome } from "@/components/chrome";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PatientInfo } from "@/components/patient-info";
import { Reviews } from "@/components/reviews";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { RAIL } from "@/lib/copy";
import { scrollToAnchor } from "@/lib/scroll";

export function Site() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = RAIL.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-22% 0px -62% 0px", threshold: [0.12, 0.28, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash || hash === "top" || hash === "content") return;
    const frame = window.requestAnimationFrame(() => {
      scrollToAnchor(hash, "auto");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <Chrome scrolled={scrolled} active={active} />
      <main id="content">
        <Hero />
        <About />
        <Services />
        <Team />
        <Reviews />
        <PatientInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
