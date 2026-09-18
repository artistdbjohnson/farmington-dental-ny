export function scrollToAnchor(
  id: string,
  behavior: ScrollBehavior = "smooth",
) {
  const node = document.getElementById(id);
  if (!node) return false;
  node.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function syncStickyNavHeight(node: HTMLElement | null) {
  if (!node) return;
  const next = `${Math.round(node.getBoundingClientRect().height)}px`;
  document.documentElement.style.setProperty("--sticky-nav-height", next);
}
