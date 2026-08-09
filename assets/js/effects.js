/* ================================================================
   EFFECTS — scroll reveals, counters, navbar, back-to-top, WhatsApp.
   Loaded after render.js on every page. Do not edit unless you
   know JavaScript. (The WhatsApp number lives in content/site.js.)
   ================================================================ */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- scroll-reveal ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    /* team profiles slide in from alternating sides */
    document.querySelectorAll(".profile").forEach((p, i) =>
      p.classList.add(i % 2 ? "reveal-right" : "reveal-left"));

    document.querySelectorAll(
      ".svc, .member, .profile, .stat, .post-card, .acc, .c-card, " +
      ".sec-kicker, .sec-title, .sec-sub, .about-body p, .quote-band p, .exp .lbl"
    ).forEach(el => { el.classList.add("reveal"); io.observe(el); });

    /* stagger cards inside their grids */
    document.querySelectorAll(".svc-grid, .team-grid, .stats .wrap, .blog-grid")
      .forEach(grid => [...grid.children].forEach(
        (c, i) => c.style.transitionDelay = (i * 70) + "ms"));

    /* experience chips ripple in */
    document.querySelectorAll(".chips").forEach(box => {
      [...box.children].forEach((c, i) => {
        c.classList.add("reveal");
        c.style.transitionDelay = (i * 45) + "ms";
        io.observe(c);
      });
    });
  }

  /* ---------- animated stat counters ---------- */
  if (!reduceMotion) {
    document.querySelectorAll(".stat b").forEach(b => {
      const m = b.textContent.trim().match(/^(\d+)(.*)$/);
      if (!m) return;                       // non-numeric stats (e.g. "AI") stay as-is
      const target = +m[1], suffix = m[2];
      b.textContent = "0" + suffix;
      const obs = new IntersectionObserver(es => {
        es.forEach(e => {
          if (!e.isIntersecting) return;
          obs.disconnect();
          const t0 = performance.now(), dur = 1200;
          (function tick(t) {
            const p = Math.min((t - t0) / dur, 1);
            const eased = p < .5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
            b.textContent = Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
        });
      }, { threshold: 0.6 });
      obs.observe(b);
    });
  }

  /* ---------- navbar shadow + back-to-top ---------- */
  const nav = document.querySelector("nav.mainnav");
  const top = document.createElement("button");
  top.className = "to-top";
  top.setAttribute("aria-label", "Back to top");
  top.textContent = "↑";
  top.onclick = () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  document.body.appendChild(top);

  /* gold reading-progress bar along the top edge */
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.appendChild(bar);

  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
    top.classList.toggle("show", window.scrollY > 600);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = max > 0 ? (window.scrollY / max) * 100 + "%" : "0";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* soft fade between pages (internal links only) */
  document.body.classList.add("page-enter");
  window.addEventListener("pageshow", () => document.body.classList.remove("page-exit"));
  if (!reduceMotion) {
    document.addEventListener("click", e => {
      const a = e.target.closest("a[href]");
      if (!a || a.target === "_blank" || e.button !== 0 ||
          e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = a.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") ||
          href.startsWith("tel:") || href.startsWith("http")) return;
      e.preventDefault();
      document.body.classList.add("page-exit");
      setTimeout(() => { window.location.href = href; }, 180);
    });
  }

  /* ---------- floating WhatsApp button ---------- */
  if (typeof SITE !== "undefined" && SITE.whatsapp) {
    const wa = document.createElement("a");
    wa.className = "wa-float";
    wa.href = "https://wa.me/" + SITE.whatsapp.replace(/\D/g, "");
    wa.target = "_blank";
    wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat on WhatsApp");
    wa.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.5c1.2.5 2.5.8 3.8.8 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.2 0-2.4-.3-3.5-.8l-.6-.3-4.9.9 1-4.7-.3-.6c-.9-1.5-1.4-3.2-1.4-5 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.5 10.5-9.9 10.5zm5.4-7.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.4z"/></svg>';
    document.body.appendChild(wa);
  }
})();
