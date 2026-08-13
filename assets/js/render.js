/* ================================================================
   RENDER ENGINE — builds every page from the /content/*.js files.
   Do not edit unless you know JavaScript.
   All text you may want to change lives in /content/site.js,
   /content/team.js and /content/services.js.
   ================================================================ */

/* Each page sets <body data-root="./"> (root pages) or "../" (blog). */
const ROOT = document.body.dataset.root || "./";

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ---------- service category icons ----------
   Simple line icons, coloured per category via content/services.js.
   Available names: accounting, excel, payroll, tax, secretarial,
   audit, hni, startup */
const ICONS = {
  accounting: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 7.5h8M8 11.5h8M8 15.5h5"/>',
  excel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9.3h18M3 14.6h18M9 4v16M15 4v16"/>',
  payroll: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20c.3-3.2 2.5-5 5.5-5s5.2 1.8 5.5 5"/><circle cx="17" cy="9.5" r="2.5"/><path d="M16.2 14.7c2.5.4 4.1 2.2 4.3 5"/>',
  tax: '<circle cx="12" cy="12" r="9"/><path d="M9.2 14.8l5.6-5.6"/><circle cx="9.4" cy="9.4" r="1.3"/><circle cx="14.6" cy="14.6" r="1.3"/>',
  secretarial: '<path d="M3 21h18M4 9l8-5 8 5"/><path d="M6 9v12M10.5 9v12M13.5 9v12M18 9v12"/>',
  audit: '<circle cx="11" cy="11" r="6.5"/><path d="M20.5 20.5L16 16"/><path d="M8.4 11l1.9 1.9 3.4-3.4"/>',
  hni: '<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21L8.5 9M12 21l3.5-12"/>',
  startup: '<path d="M12 15l-3-3c.6-1.5 1.3-2.8 2-4 3-4.5 7.5-5.5 11-6-.5 3.5-1.5 8-6 11-1.2.7-2.5 1.4-4 2z"/><path d="M9 12H5.5S6 9.5 7.5 8.5 12 8 12 8M12 15v3.5s2.5-.5 3.5-2 .5-4.5.5-4.5"/><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2"/>'
};
function svcIcon(cat, cls) {
  const art = ICONS[cat.icon] || ICONS.accounting;
  const col = cat.color || "#0e2440";
  return `<span class="svc-ico ${cls || ""}" style="color:${col};background:${col}1a">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round">${art}</svg></span>`;
}

/* ---------- header (top bar + nav) ---------- */

/* Internal task-delegation app (Railway). Kept in the top bar rather than the
   main nav: it is for staff, not for visitors, and the main nav's single call
   to action stays "Contact Us". To move it into the nav instead, add
   ["Staff Login", STAFF_APP_URL] to the links array below and make the href
   skip the ROOT prefix for absolute URLs. */
const STAFF_APP_URL = "https://staff.casamir.in";

function renderHeader(active) {
  const links = [
    ["Home", "index.html"], ["About Us", "about.html"], ["Our Team", "team.html"],
    ["Services", "services.html"], ["Blog", "blog/index.html"], ["Contact Us", "contact.html"]
  ];
  const nav = links.map(([label, href]) => {
    const cls = (label === "Contact Us") ? "cta" : (label === active ? "active" : "");
    return `<li><a class="${cls}" href="${ROOT}${href}">${label}</a></li>`;
  }).join("");

  document.getElementById("site-header").innerHTML = `
    <div class="topbar"><div class="wrap">
      <span>${SITE.cities.join(" &nbsp;•&nbsp; ")}</span>
      <span><b><a href="tel:${SITE.phone.replace(/\s/g, "")}">${SITE.phone}</a></b> &nbsp;|&nbsp;
        <a href="mailto:${SITE.email}">${SITE.email}</a> &nbsp;|&nbsp;
        <a href="${STAFF_APP_URL}" target="_blank" rel="noopener">Staff Login</a></span>
    </div></div>
    <nav class="mainnav"><div class="wrap">
      <a class="brand" href="${ROOT}index.html">
        <img src="${ROOT}assets/images/logo.png" alt="${esc(SITE.name)} logo">
        <div class="brand-name">${esc(SITE.name)}<small>${esc(SITE.subName)}</small></div>
      </a>
      <ul class="nav-links">${nav}</ul>
    </div></nav>`;
}

/* ---------- footer ---------- */
function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <div class="wrap">
      <p class="disc">${SITE.disclaimer}</p>
      <p>${esc(SITE.copyright)}</p>
    </div>`;
}

/* ---------- home page ---------- */
function renderHome() {
  document.getElementById("hero").innerHTML = `
    <div class="kicker">${esc(SITE.positioning)}</div>
    <h1>${SITE.heroHeading}</h1>
    <p>${esc(SITE.heroText)}</p>
    <div class="btns">
      <a href="${ROOT}services.html" class="btn-gold">${esc(SITE.heroButton1)}</a>
      <a href="${ROOT}team.html" class="btn-line">${esc(SITE.heroButton2)}</a>
    </div>
    <div class="cities">Presence &nbsp; ${SITE.cities.map(c => `<b>${esc(c)}</b>`).join(" · ")}</div>`;

  document.getElementById("stats").innerHTML =
    `<div class="wrap">${SITE.stats.map(s =>
      `<div class="stat"><b>${esc(s.big)}</b><span>${esc(s.small)}</span></div>`).join("")}</div>`;

  document.getElementById("svc-grid").innerHTML = SERVICES.map(cat =>
    `<a class="svc" href="${ROOT}services.html">
       <div class="svc-head">${svcIcon(cat)}<h3>${esc(cat.title)}</h3></div>
       <p>${esc(cat.short)}</p></a>`).join("");

  const team = [...TEAM].sort((a, b) => a.order - b.order);
  document.getElementById("team-grid").innerHTML = team.map(m =>
    `<a class="member" href="${ROOT}team.html">
       <div class="ph"><img src="${ROOT}${m.photo}" alt="${esc(m.name)}"
         onerror="this.style.display='none'"></div>
       <h3>${esc(m.name)}</h3><span>${esc(m.role_title)}</span></a>`).join("");

  renderExperience();
  renderCta();
}

function renderExperience() {
  const box = document.getElementById("exp");
  if (!box) return;
  box.innerHTML = `
    <p class="lbl">${esc(SITE.experienceLabel)}</p>
    <div class="chips">${SITE.experience.map(x => `<span>${esc(x)}</span>`).join("")}</div>`;
}

function renderCta() {
  const box = document.getElementById("cta");
  if (!box) return;
  box.innerHTML = `
    <h2>${esc(SITE.ctaHeading)}</h2>
    <p>${esc(SITE.ctaText)}</p>
    <a href="${ROOT}contact.html">${esc(SITE.ctaButton)}</a>`;
}

/* ---------- about page ---------- */
function renderAbout() {
  document.getElementById("about-body").innerHTML =
    SITE.aboutParagraphs.map(p => `<p>${esc(p)}</p>`).join("");
  document.getElementById("quote-band").innerHTML =
    `<div class="ln"></div><p>"${esc(SITE.tagline)}"</p>`;
  renderExperience();
}

/* ---------- team page ---------- */
function renderTeam() {
  const team = [...TEAM].sort((a, b) => a.order - b.order);
  document.getElementById("profiles").innerHTML = team.map((m, i) => {
    const meta = [
      m.membership_no ? "Membership No. " + m.membership_no : "",
      m.frn ? "FRN: " + m.frn : ""
    ].filter(Boolean).join(" &nbsp;·&nbsp; ");
    return `
    <div class="profile">
      <div class="ph"><img src="${ROOT}${m.photo}" alt="${esc(m.name)}"
        onerror="this.style.display='none'"></div>
      <div class="info">
        <h3>${esc(m.name)}</h3>
        <div class="meta">${esc(m.role_title)}${meta ? " &nbsp;|&nbsp; " + meta : ""}</div>
        <div class="firm">${esc(m.firm_name)}</div>
        <p class="bio clamp" id="bio-${i}">${esc(m.bio)}</p>
        <button class="more" onclick="toggleBio(${i}, this)">READ FULL PROFILE ▾</button>
      </div>
    </div>`;
  }).join("");
}
function toggleBio(i, btn) {
  const bio = document.getElementById("bio-" + i);
  const open = bio.classList.toggle("clamp");
  btn.textContent = open ? "READ FULL PROFILE ▾" : "SHOW LESS ▴";
}

/* ---------- services page ---------- */
function renderServices() {
  document.getElementById("acc-list").innerHTML = SERVICES.map((cat, i) => `
    <div class="acc${i === 0 ? " open" : ""}">
      <button class="acc-head" onclick="this.parentElement.classList.toggle('open')">
        ${svcIcon(cat, "sm")}<h3>${esc(cat.title)}</h3><span class="mark">+</span>
      </button>
      <div class="acc-body"><div class="acc-inner">${cat.items.map(it =>
        `<div class="acc-item"><h4>${esc(it.name)}</h4><p>${esc(it.desc)}</p></div>`).join("")}
      </div></div>
    </div>`).join("");
  renderCta();
}

/* ---------- contact page ---------- */
function renderContact() {
  document.getElementById("c-details").innerHTML = `
    <h3>Office</h3>
    <div class="c-line"><b>Firm</b><span>${esc(SITE.contactFirm)}</span></div>
    <div class="c-line"><b>Address</b><span>${esc(SITE.address)}</span></div>
    <div class="c-line"><b>Phone</b><span><a href="tel:${SITE.phone.replace(/\s/g, "")}">${esc(SITE.phone)}</a></span></div>
    <div class="c-line"><b>Email</b><span><a href="mailto:${SITE.email}">${esc(SITE.email)}</a></span></div>
    <div class="c-line"><b>Website</b><span><a href="https://${esc(SITE.website)}" target="_blank" rel="noopener">${esc(SITE.website)}</a></span></div>
    <div class="map-box"><iframe loading="lazy"
      src="https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed"
      title="Office location map"></iframe></div>`;

  const firmsBox = document.getElementById("firm-offices");
  if (firmsBox && SITE.memberFirms && SITE.memberFirms.length) {
    firmsBox.innerHTML = `
      <h3 class="firms-title">Member Firm Offices</h3>
      <div class="firm-grid">${SITE.memberFirms.map(f => `
        <div class="c-card firm-card">
          <h3>${esc(f.firm)}</h3>
          <div class="c-line"><b>Contact</b><span>${esc(f.person)}</span></div>
          <div class="c-line"><b>Address</b><span>${esc(f.address)}</span></div>
          ${f.phone ? `<div class="c-line"><b>Phone</b><span><a href="tel:${f.phone.replace(/\s/g, "")}">${esc(f.phone)}</a></span></div>` : ""}
          ${f.email ? `<div class="c-line"><b>Email</b><span><a href="mailto:${f.email}">${esc(f.email)}</a></span></div>` : ""}
          ${f.website ? `<div class="c-line"><b>Website</b><span><a href="https://${esc(f.website)}" target="_blank" rel="noopener">${esc(f.website)}</a></span></div>` : ""}
        </div>`).join("")}
      </div>`;
  }

  const form = document.getElementById("c-form");
  if (!SITE.formspreeId) {
    form.insertAdjacentHTML("afterbegin",
      `<div class="form-note">Contact form is not live yet — a Formspree ID needs to be
       added in content/site.js. Meanwhile, please reach us by phone or email.</div>`);
  } else {
    form.action = "https://formspree.io/f/" + SITE.formspreeId;
  }
  form.addEventListener("submit", function (e) {
    let ok = true;
    form.querySelectorAll("[required]").forEach(f => {
      const err = f.parentElement.querySelector(".form-err");
      const bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
      if (err) err.style.display = bad ? "block" : "none";
      if (bad) ok = false;
    });
    if (!ok || !SITE.formspreeId) {
      e.preventDefault();
      if (ok && !SITE.formspreeId)
        alert("The contact form is not connected yet. Please call or email us directly.");
    }
  });
}
