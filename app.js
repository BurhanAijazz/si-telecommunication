/* ============================================
   SI Telecom Exam Prep - Application Logic
   SPA with Markdown rendering & interactive MCQs
   ============================================ */

// --- Content Manifest ---
const CONTENT_MAP = [
  {
    group: "schedule",
    title: "Master Schedule",
    items: [
      { id: "Master_Schedule", file: "Exam_Prep/Master_Schedule.md", title: "Master Schedule", marks: 200, icon: "\ud83d\udccb" }
    ]
  },
  {
    group: "Week 1",
    title: "Week 1 \u2014 General Knowledge",
    items: [
      { id: "Week01_Topic01", file: "Exam_Prep/Week01_Topic01_GK_Current_Affairs.md", title: "GK & Current Affairs", marks: 20 },
      { id: "Week01_Topic02", file: "Exam_Prep/Week01_Topic02_JK_UT_Knowledge.md", title: "J&K UT Special Reference", marks: 10 }
    ]
  },
  {
    group: "Week 2",
    title: "Week 2 \u2014 Aptitude & Language",
    items: [
      { id: "Week02_Topic03", file: "Exam_Prep/Week02_Topic03_English_Communication.md", title: "English & Communication", marks: 10 },
      { id: "Week02_Topic04", file: "Exam_Prep/Week02_Topic04_Intelligence_Reasoning.md", title: "Intelligence & Reasoning", marks: 10 },
      { id: "Week02_Topic05", file: "Exam_Prep/Week02_Topic05_Basic_Numeracy.md", title: "Basic Numeracy", marks: 10 }
    ]
  },
  {
    group: "Week 3",
    title: "Week 3 \u2014 Engineering Math",
    items: [
      { id: "Week03_Topic06", file: "Exam_Prep/Week03_Topic06_Engg_Math_Signals.md", title: "Engineering Math & Signals", marks: 10 }
    ]
  },
  {
    group: "Week 4",
    title: "Week 4 \u2014 Electronic Devices",
    items: [
      { id: "Week04_Topic07a", file: "Exam_Prep/Week04_Topic07a_Electronic_Devices.md", title: "Electronic Devices", marks: 20 }
    ]
  },
  {
    group: "Week 5",
    title: "Week 5 \u2014 Circuits & Networks",
    items: [
      { id: "Week05_Topic07b", file: "Exam_Prep/Week05_Topic07b_Analog_Circuits_Network_Theory.md", title: "Analog Circuits & Network Theory", marks: 20 }
    ]
  },
  {
    group: "Week 6",
    title: "Week 6 \u2014 Digital Electronics",
    items: [
      { id: "Week06_Topic08a", file: "Exam_Prep/Week06_Topic08a_Digital_Electronics.md", title: "Digital Electronics", marks: 20 }
    ]
  },
  {
    group: "Week 7",
    title: "Week 7 \u2014 Microprocessors",
    items: [
      { id: "Week07_Topic08b", file: "Exam_Prep/Week07_Topic08b_Microprocessors.md", title: "Microprocessors & Microcontrollers", marks: 20 }
    ]
  },
  {
    group: "Week 8",
    title: "Week 8 \u2014 Communication (Analog/Digital)",
    items: [
      { id: "Week08_Topic09a", file: "Exam_Prep/Week08_Topic09a_Comm_Analog_Digital.md", title: "Communication: Analog & Digital", marks: 20 }
    ]
  },
  {
    group: "Week 9",
    title: "Week 9 \u2014 Wireless & Mobile",
    items: [
      { id: "Week09_Topic09b", file: "Exam_Prep/Week09_Topic09b_Wireless_Mobile_Satellite.md", title: "Wireless, Mobile & Satellite", marks: 20 }
    ]
  },
  {
    group: "Week 10",
    title: "Week 10 \u2014 Networking",
    items: [
      { id: "Week10_Topic10a", file: "Exam_Prep/Week10_Topic10a_Networking_OSI_TCP.md", title: "Networking: OSI & TCP/IP", marks: 20 }
    ]
  },
  {
    group: "Week 11",
    title: "Week 11 \u2014 Programming & OS",
    items: [
      { id: "Week11_Topic10b", file: "Exam_Prep/Week11_Topic10b_Programming_OS.md", title: "Programming, DS & OS", marks: 20 }
    ]
  },
  {
    group: "Week 12",
    title: "Week 12 \u2014 Cyber Security",
    items: [
      { id: "Week12_Topic11", file: "Exam_Prep/Week12_Topic11_Cyber_Security_Legal.md", title: "Cyber Security & Legal Framework", marks: 10 }
    ]
  },
  {
    group: "Week 13",
    title: "Week 13 \u2014 IT Systems & DBMS",
    items: [
      { id: "Week13_Topic12", file: "Exam_Prep/Week13_Topic12_IT_eGovernance.md", title: "IT Systems & e-Governance", marks: 10 },
      { id: "Week13_Topic13", file: "Exam_Prep/Week13_Topic13_DBMS.md", title: "Database Management Systems", marks: 10 }
    ]
  },
  {
    group: "Week 14",
    title: "Week 14 \u2014 Emerging Tech",
    items: [
      { id: "Week14_Topic14", file: "Exam_Prep/Week14_Topic14_IoT_Embedded.md", title: "IoT, Embedded & Mechatronics", marks: 10 },
      { id: "Week14_Topic15", file: "Exam_Prep/Week14_Topic15_AI_DataScience.md", title: "AI, Data Science & Automation", marks: 10 }
    ]
  },
  {
    group: "Mock Tests",
    title: "Mock Tests",
    items: [
      { id: "Mock_Test_1", file: "Exam_Prep/Mock_Tests/Mock_Test_1.md", title: "Mock Test 1 \u2014 Basic to Moderate", marks: 200 },
      { id: "Mock_Test_2", file: "Exam_Prep/Mock_Tests/Mock_Test_2.md", title: "Mock Test 2 \u2014 Moderate to Advanced", marks: 200 },
      { id: "Mock_Test_3", file: "Exam_Prep/Mock_Tests/Mock_Test_3.md", title: "Mock Test 3 \u2014 Exam Level", marks: 200 },
      { id: "Mock_Test_4", file: "Exam_Prep/Mock_Tests/Mock_Test_4.md", title: "Mock Test 4 \u2014 Advanced Application", marks: 200 },
      { id: "Mock_Test_5", file: "Exam_Prep/Mock_Tests/Mock_Test_5.md", title: "Mock Test 5 \u2014 Numerical Focus", marks: 200 },
      { id: "Mock_Test_6", file: "Exam_Prep/Mock_Tests/Mock_Test_6.md", title: "Mock Test 6 \u2014 Final Simulation", marks: 200 }
    ]
  }
];

// --- DOM References ---
const $ = (sel) => document.querySelector(sel);
const sidebarNav = $("#sidebar-nav");
const searchInput = $("#search-input");
const contentEl = $("#content");
const breadcrumbsEl = $("#breadcrumbs");
const themeToggle = $("#theme-toggle");
const sidebarToggle = $("#sidebar-toggle");
const sidebar = $("#sidebar");
const overlay = $("#sidebar-overlay");
const progressBadge = $("#progress-badge");

// --- State ---
let currentId = null;
const mdCache = {};
const visitedTopics = new Set(JSON.parse(localStorage.getItem("visited") || "[]"));

// --- Marked.js Configuration ---
marked.setOptions({
  gfm: true,
  breaks: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  }
});

// --- Theme ---
function initTheme() {
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  // Toggle highlight.js stylesheets
  const lightSheet = document.getElementById("hljs-light");
  const darkSheet = document.getElementById("hljs-dark");
  if (lightSheet && darkSheet) {
    lightSheet.disabled = theme === "dark";
    darkSheet.disabled = theme === "light";
  }
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// --- Sidebar ---
function buildSidebar(filter = "") {
  const lowerFilter = filter.toLowerCase();
  let html = "";

  CONTENT_MAP.forEach((group) => {
    // Filter items
    const filtered = group.items.filter((item) =>
      !lowerFilter ||
      item.title.toLowerCase().includes(lowerFilter) ||
      group.title.toLowerCase().includes(lowerFilter)
    );
    if (filtered.length === 0) return;

    if (group.group === "schedule") {
      // Master schedule as special top item
      const item = filtered[0];
      const active = currentId === item.id ? " active" : "";
      html += `<a class="nav-item nav-item--schedule${active}" data-id="${item.id}">${item.title}</a>`;
      return;
    }

    const hasActive = filtered.some((item) => item.id === currentId);
    const collapsed = !hasActive && lowerFilter === "" ? "" : "";

    html += `<div class="nav-group${collapsed}">`;
    html += `<div class="nav-group-header" data-group="${group.group}">
      <svg class="chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      ${group.title}
    </div>`;
    html += `<div class="nav-group-items">`;

    filtered.forEach((item) => {
      const active = currentId === item.id ? " active" : "";
      html += `<a class="nav-item${active}" data-id="${item.id}">
        ${item.title}
        <span class="marks-tag">${item.marks}m</span>
      </a>`;
    });

    html += `</div></div>`;
  });

  sidebarNav.innerHTML = html;

  // Attach click handlers
  sidebarNav.querySelectorAll(".nav-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const id = el.getAttribute("data-id");
      navigateTo(id);
      closeSidebar();
    });
  });

  sidebarNav.querySelectorAll(".nav-group-header").forEach((el) => {
    el.addEventListener("click", () => {
      el.parentElement.classList.toggle("collapsed");
    });
  });
}

// --- Search ---
searchInput.addEventListener("input", () => {
  buildSidebar(searchInput.value.trim());
});

// Clear search on Escape
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    buildSidebar();
    searchInput.blur();
  }
});

// --- Mobile Sidebar ---
function openSidebar() {
  sidebar.classList.add("open");
  overlay.classList.add("visible");
}

function closeSidebar() {
  sidebar.classList.remove("open");
  overlay.classList.remove("visible");
}

sidebarToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

overlay.addEventListener("click", closeSidebar);

// --- Navigation ---
function findItem(id) {
  for (const group of CONTENT_MAP) {
    for (const item of group.items) {
      if (item.id === id) return { group, item };
    }
  }
  return null;
}

function navigateTo(id) {
  window.location.hash = id ? `#${id}` : "";
}

async function loadContent(id) {
  if (!id) {
    renderHome();
    currentId = null;
    buildSidebar();
    updateBreadcrumbs(null);
    return;
  }

  const found = findItem(id);
  if (!found) {
    renderError("Topic not found.");
    return;
  }

  currentId = id;
  buildSidebar(searchInput.value.trim());
  updateBreadcrumbs(found);

  // Show loading
  contentEl.innerHTML = `<div class="loading"><div class="spinner"></div>Loading content...</div>`;

  try {
    let md;
    if (mdCache[id]) {
      md = mdCache[id];
    } else {
      const res = await fetch(found.item.file);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      md = await res.text();
      mdCache[id] = md;
    }

    // Render markdown
    let html = marked.parse(md);

    // Post-process: interactive MCQs
    html = processInteractiveMCQs(html);

    contentEl.innerHTML = html;

    // Highlight code blocks
    contentEl.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });

    // Track visited
    visitedTopics.add(id);
    localStorage.setItem("visited", JSON.stringify([...visitedTopics]));
    updateProgress();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "instant" });

  } catch (err) {
    renderError(`Failed to load: ${err.message}`);
  }
}

// --- Breadcrumbs ---
function updateBreadcrumbs(found) {
  if (!found) {
    breadcrumbsEl.innerHTML = `<span class="current">Home</span>`;
    return;
  }

  const weekLabel = found.group.group === "schedule" ? "" : found.group.group;
  let html = `<a href="#" onclick="navigateTo('');return false;">Home</a>`;

  if (weekLabel) {
    html += `<span class="separator">/</span><span class="current">${weekLabel}</span>`;
  }

  html += `<span class="separator">/</span><span class="current">${found.item.title}</span>`;
  breadcrumbsEl.innerHTML = html;
}

// --- Interactive MCQ Processing ---
function processInteractiveMCQs(html) {
  // Strategy: Find answer patterns and wrap them in <details> cards.
  // We look for common answer patterns in our files:
  // 1. "**Answer: X**" or "**Ans: X**" on a single line
  // 2. Answer key tables (we leave those as-is but wrap sections)

  // Pattern: lines with **Answer:...** — wrap the preceding question block
  // We'll work with the HTML to find question+answer pairs and wrap them

  const container = document.createElement("div");
  container.innerHTML = html;

  // Find all <p> or <strong> that contain "Answer" patterns
  const allElements = container.querySelectorAll("p, li");

  allElements.forEach((el) => {
    const text = el.textContent.trim();

    // Match answer lines: "Answer: X" or "Ans: X" etc.
    if (/^\*?\*?\(?\s*(Answer|Ans)\s*[:)]/i.test(text) || /^\*?\*?\s*(Answer|Ans)\s*[:)]/i.test(el.innerHTML)) {
      // Wrap this element in a details/summary
      const details = document.createElement("details");
      details.className = "mcq-card";

      const summary = document.createElement("summary");
      summary.textContent = "Show Answer";

      const answerDiv = document.createElement("div");
      answerDiv.className = "mcq-answer";
      answerDiv.innerHTML = el.innerHTML;

      details.appendChild(summary);
      details.appendChild(answerDiv);

      el.replaceWith(details);
    }
  });

  // Also handle answer key sections: find headings that say "Answer Key" and wrap the content
  const headings = container.querySelectorAll("h2, h3, h4");
  headings.forEach((heading) => {
    const text = heading.textContent.toLowerCase();
    if (text.includes("answer key") || text.includes("answer sheet")) {
      // Collect all siblings until the next heading of same or higher level
      const level = parseInt(heading.tagName[1]);
      const wrapper = document.createElement("details");
      wrapper.className = "mcq-card";

      const summary = document.createElement("summary");
      summary.innerHTML = `<strong>${heading.textContent}</strong> (click to reveal)`;

      const answerDiv = document.createElement("div");
      answerDiv.className = "mcq-answer";

      let sibling = heading.nextElementSibling;
      const toMove = [];
      while (sibling) {
        const sibTag = sibling.tagName;
        if (/^H[1-6]$/.test(sibTag) && parseInt(sibTag[1]) <= level) break;
        toMove.push(sibling);
        sibling = sibling.nextElementSibling;
      }

      toMove.forEach((node) => answerDiv.appendChild(node));

      wrapper.appendChild(summary);
      wrapper.appendChild(answerDiv);
      heading.replaceWith(wrapper);
    }
  });

  return container.innerHTML;
}

// --- Home Page ---
function renderHome() {
  const totalTopics = CONTENT_MAP.reduce((sum, g) => sum + (g.group === "schedule" ? 0 : g.items.length), 0);
  const visited = visitedTopics.size;

  let weekCards = "";
  CONTENT_MAP.forEach((group) => {
    if (group.group === "schedule") return;
    group.items.forEach((item) => {
      const visitedClass = visitedTopics.has(item.id) ? ' style="border-left: 3px solid var(--accent);"' : "";
      weekCards += `
        <a class="week-card" onclick="navigateTo('${item.id}');return false;"${visitedClass}>
          <div class="week-card-header">${group.group}</div>
          <div class="week-card-title">${item.title}</div>
          <div class="week-card-meta">${item.marks} Marks${visitedTopics.has(item.id) ? " \u2714" : ""}</div>
        </a>`;
    });
  });

  contentEl.innerHTML = `
    <div class="home-hero">
      <h1>Sub-Inspector (Telecom) Exam Prep</h1>
      <p>J&K Police, Home Department \u2014 JKSSB<br>
      100 MCQs \u00b7 200 Marks \u00b7 120 Minutes \u00b7 -0.5 Negative Marking</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-value">16</span>
        <span class="stat-label">Weeks</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">19</span>
        <span class="stat-label">Topics</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">6</span>
        <span class="stat-label">Mock Tests</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">${visited}/${totalTopics}</span>
        <span class="stat-label">Completed</span>
      </div>
    </div>

    <h2 style="font-size:18px; margin-bottom:16px; border:none;">All Topics</h2>
    <div class="week-grid">${weekCards}</div>
  `;
}

// --- Error ---
function renderError(msg) {
  contentEl.innerHTML = `
    <div class="error-state">
      <h2>Oops!</h2>
      <p>${msg}</p>
      <p><a href="#" onclick="navigateTo('');return false;">Back to Home</a></p>
    </div>`;
}

// --- Progress ---
function updateProgress() {
  const totalTopics = CONTENT_MAP.reduce((sum, g) => sum + (g.group === "schedule" ? 0 : g.items.length), 0);
  progressBadge.textContent = `${visitedTopics.size} / ${totalTopics} topics`;
}

// --- Router ---
function handleRoute() {
  const hash = window.location.hash.slice(1);
  loadContent(hash || null);
}

window.addEventListener("hashchange", handleRoute);

// Make navigateTo global for inline onclick
window.navigateTo = navigateTo;

// --- Init ---
function init() {
  initTheme();
  buildSidebar();
  updateProgress();
  handleRoute();
}

// Keyboard shortcut: Ctrl+K or / to focus search
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement.tagName !== "INPUT")) {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

init();
