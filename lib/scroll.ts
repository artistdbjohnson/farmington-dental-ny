const LANDING_AIR = 8;

export function scrollToAnchor(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const node = document.getElementById(id);
  if (!node) return false;
  if (id === "top") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }
  const header = document.querySelector("header");
  const navH =
    header instanceof HTMLElement ? header.getBoundingClientRect().height : 0;
  const top = window.scrollY + node.getBoundingClientRect().top - navH - LANDING_AIR;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function syncStickyNavHeight(node: HTMLElement | null) {
  if (!node) return;
  const next = `${Math.round(node.getBoundingClientRect().height)}px`;
  document.documentElement.style.setProperty("--sticky-nav-height", next);
}
