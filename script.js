(() => {
  const progress = document.querySelector(".reading-track");
  const fill = document.querySelector(".reading-fill");
  const chapters = Array.from(document.querySelectorAll("[data-chapter]"));
  const chapterLinks = Array.from(document.querySelectorAll(".chapter-nav a"));
  const topbar = document.querySelector(".topbar");
  const awakening = document.querySelector("#transformation");
  const awakeningArt = document.querySelector("#transformation-art");
  const awakeningSteps = Array.from(awakening.querySelectorAll(".awakening-steps li"));
  const scrollHint = awakening.querySelector(".scroll-hint");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  let scheduled = false;

  function updateAwakening(headerBottom) {
    const viewport = Math.max(1, innerHeight - headerBottom);
    const start = innerHeight - viewport * .05;
    const end = headerBottom + viewport * .2;
    const amount = reducedMotion.matches ? 1 : Math.max(0, Math.min(1, (start - awakeningArt.getBoundingClientRect().top) / (start - end)));
    awakening.style.setProperty("--awakening", amount.toFixed(3));
    const stage = amount < .28 ? 0 : amount < .72 ? 1 : 2;
    awakeningSteps.forEach((step, index) => {
      if (index === stage) step.setAttribute("aria-current", "step");
      else step.removeAttribute("aria-current");
    });
    scrollHint.hidden = reducedMotion.matches;
  }

  function updateReading() {
    const scrollable = document.documentElement.scrollHeight - innerHeight;
    const percentage = scrollable > 0 ? Math.max(0, Math.min(100, scrollY / scrollable * 100)) : 100;
    fill.style.width = `${percentage}%`;
    progress.setAttribute("aria-valuenow", String(Math.round(percentage)));
    const headerBottom = topbar.getBoundingClientRect().bottom;
    const marker = headerBottom + 100;
    let active = null;
    for (const chapter of chapters) {
      if (chapter.getBoundingClientRect().top <= marker) active = chapter.id;
    }
    if (document.querySelector("#personnages").getBoundingClientRect().top <= marker) active = null;
    for (const link of chapterLinks) {
      if (link.hash === `#${active}`) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
    updateAwakening(headerBottom);
    scheduled = false;
  }

  function scheduleReading() {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateReading);
    }
  }
  addEventListener("scroll", scheduleReading, { passive: true });
  addEventListener("resize", scheduleReading);
  addEventListener("pageshow", scheduleReading);
  reducedMotion.addEventListener("change", scheduleReading);
  document.querySelectorAll("details").forEach(detail => detail.addEventListener("toggle", scheduleReading));
  updateReading();

  const videoNote = document.querySelector("#transformation-video-note");
  const videoFrame = document.querySelector("#transformation-video-player iframe");
  if (location.protocol === "file:") {
    videoNote.textContent = "YouTube peut bloquer la lecture depuis un fichier local. Dans ce cas, utilise le lien ci-dessous.";
  }
  videoFrame.addEventListener("error", () => {
    videoNote.textContent = "Le lecteur YouTube n'a pas pu se charger. Utilise le lien ci-dessous.";
  });

})();
