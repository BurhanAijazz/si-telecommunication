/* ============================================
   SI Telecom Exam Prep — Application Logic
   SPA with Markdown rendering, interactive MCQs,
   progress tracking, and smart bookmarking
   ============================================ */

// ================================================
// === CONTENT MANIFEST ===========================
// ================================================
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


// ================================================
// === STATE MANAGER (localStorage) ===============
// ================================================
const AppState = (() => {
  const STORAGE_KEY = "siTelecomState";
  const MAX_RECENT = 8;

  const DEFAULT = {
    version: 1,
    theme: "light",
    lastVisited: null,
    completed: {},
    bookmarked: {},
    recentlyVisited: []
  };

  let _state = null;

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      _state = raw ? { ...DEFAULT, ...JSON.parse(raw) } : { ...DEFAULT };
    } catch {
      _state = { ...DEFAULT };
    }
    _migrate();
    return _state;
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_state));
  }

  // Migrate old separate localStorage keys into unified state
  function _migrate() {
    let dirty = false;

    // Migrate old "visited" array → completed map
    const oldVisited = localStorage.getItem("visited");
    if (oldVisited) {
      try {
        const arr = JSON.parse(oldVisited);
        arr.forEach((id) => {
          if (!_state.completed[id]) {
            _state.completed[id] = Date.now();
          }
        });
      } catch { /* ignore corrupt data */ }
      localStorage.removeItem("visited");
      dirty = true;
    }

    // Migrate old "theme" key
    const oldTheme = localStorage.getItem("theme");
    if (oldTheme) {
      _state.theme = oldTheme;
      localStorage.removeItem("theme");
      dirty = true;
    }

    if (dirty) save();
  }

  // --- Public API ---
  return {
    load,
    save,
    get: () => _state,

    // Theme
    getTheme: () => _state.theme,
    setTheme: (t) => { _state.theme = t; save(); },

    // Completed
    isCompleted: (id) => !!_state.completed[id],
    toggleCompleted: (id) => {
      if (_state.completed[id]) delete _state.completed[id];
      else _state.completed[id] = Date.now();
      save();
    },
    completedCount: () => Object.keys(_state.completed).length,

    // Bookmarked
    isBookmarked: (id) => !!_state.bookmarked[id],
    toggleBookmarked: (id) => {
      if (_state.bookmarked[id]) delete _state.bookmarked[id];
      else _state.bookmarked[id] = Date.now();
      save();
    },
    getBookmarkedIds: () => Object.keys(_state.bookmarked),

    // Last Visited & Recently Visited
    setLastVisited: (id, title, group) => {
      _state.lastVisited = { id, title, group, timestamp: Date.now() };
      // Update recently visited (dedupe + cap)
      _state.recentlyVisited = _state.recentlyVisited.filter((r) => r.id !== id);
      _state.recentlyVisited.unshift({ id, timestamp: Date.now() });
      if (_state.recentlyVisited.length > MAX_RECENT) {
        _state.recentlyVisited = _state.recentlyVisited.slice(0, MAX_RECENT);
      }
      save();
    },
    getLastVisited: () => _state.lastVisited,
    getRecentlyVisited: () => _state.recentlyVisited
  };
})();


// ================================================
// === UTILITY FUNCTIONS ==========================
// ================================================

/** Human-readable relative time */
function timeAgo(timestamp) {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
}

/** Count study topics only (excludes schedule + mock tests) */
function getTotalTopicCount() {
  return CONTENT_MAP.reduce((sum, g) => {
    if (g.group === "schedule" || g.group === "Mock Tests") return sum;
    return sum + g.items.length;
  }, 0);
}

/** Count completed study topics only (excludes schedule + mock tests) */
function getCompletedTopicCount() {
  let count = 0;
  CONTENT_MAP.forEach((g) => {
    if (g.group === "schedule" || g.group === "Mock Tests") return;
    g.items.forEach((item) => {
      if (AppState.isCompleted(item.id)) count++;
    });
  });
  return count;
}

/** Find item + parent group by ID */
function findItem(id) {
  for (const group of CONTENT_MAP) {
    for (const item of group.items) {
      if (item.id === id) return { group, item };
    }
  }
  return null;
}


// ================================================
// === DOM REFERENCES =============================
// ================================================
const $ = (sel) => document.querySelector(sel);
const sidebarNav = $("#sidebar-nav");
const searchInput = $("#search-input");
const contentEl = $("#content");
const breadcrumbsEl = $("#breadcrumbs");
const actionBarEl = $("#action-bar");
const themeToggle = $("#theme-toggle");
const sidebarToggle = $("#sidebar-toggle");
const sidebar = $("#sidebar");
const overlay = $("#sidebar-overlay");
const progressBadge = $("#progress-badge");

// --- Runtime State ---
let currentId = null;
const mdCache = {};


// ================================================
// === MARKED.JS CONFIG ===========================
// ================================================
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


// ================================================
// === THEME SYSTEM ===============================
// ================================================
function initTheme() {
  const saved = AppState.getTheme();
  applyTheme(saved);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  AppState.setTheme(theme);
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
  applyTheme(current === "dark" ? "light" : "dark");
});


// ================================================
// === SIDEBAR ====================================
// ================================================
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

    // --- Master Schedule (special top item) ---
    if (group.group === "schedule") {
      const item = filtered[0];
      const active = currentId === item.id ? " active" : "";
      html += `<a class="nav-item nav-item--schedule${active}" data-id="${item.id}">${item.title}</a>`;
      return;
    }

    // --- Week / Mock Test groups ---
    const hasActive = filtered.some((item) => item.id === currentId);
    const isMockTests = group.group === "Mock Tests";

    // Week completion info (only for study weeks, not mock tests)
    let completedInGroup = 0;
    let totalInGroup = group.items.length;
    if (!isMockTests) {
      group.items.forEach((item) => {
        if (AppState.isCompleted(item.id)) completedInGroup++;
      });
    } else {
      group.items.forEach((item) => {
        if (AppState.isCompleted(item.id)) completedInGroup++;
      });
    }
    const weekDone = !isMockTests && completedInGroup === totalInGroup && totalInGroup > 0;

    html += `<div class="nav-group">`;
    html += `<div class="nav-group-header${weekDone ? " week-done" : ""}" data-group="${group.group}">
      <svg class="chevron" viewBox="0 0 16 16" fill="currentColor"><path d="M6 3l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      ${group.title}
      <span class="week-progress${weekDone ? " complete" : ""}">${completedInGroup}/${totalInGroup}</span>
    </div>`;
    html += `<div class="nav-group-items">`;

    filtered.forEach((item) => {
      const classes = ["nav-item"];
      if (currentId === item.id) classes.push("active");
      if (AppState.isCompleted(item.id)) classes.push("completed");
      if (AppState.isBookmarked(item.id)) classes.push("bookmarked");

      const bookmarkDot = AppState.isBookmarked(item.id)
        ? '<span class="bookmark-dot"></span>'
        : "";

      html += `<a class="${classes.join(" ")}" data-id="${item.id}">
        ${bookmarkDot}${item.title}
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


// ================================================
// === SEARCH =====================================
// ================================================
searchInput.addEventListener("input", () => {
  buildSidebar(searchInput.value.trim());
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = "";
    buildSidebar();
    searchInput.blur();
  }
});


// ================================================
// === MOBILE SIDEBAR =============================
// ================================================
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


// ================================================
// === NAVIGATION & ROUTING =======================
// ================================================
function navigateTo(id) {
  window.location.hash = id ? `#${id}` : "";
}

async function loadContent(id) {
  // --- Guard: active exam navigation ---
  if (examState.active) {
    if (!confirm("You have an active exam in progress. Leaving will abandon it. Continue?")) {
      window.history.replaceState(null, "", `#${currentId}`);
      return;
    }
    cleanupExam();
  }

  if (!id) {
    renderHome();
    currentId = null;
    buildSidebar();
    updateBreadcrumbs(null);
    renderActionBar(null);
    return;
  }

  const found = findItem(id);
  if (!found) {
    renderError("Topic not found.");
    renderActionBar(null);
    return;
  }

  currentId = id;
  buildSidebar(searchInput.value.trim());
  updateBreadcrumbs(found);

  // Track visit
  AppState.setLastVisited(id, found.item.title, found.group.group);

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

    // --- Mock Test: use exam engine ---
    const isMockTest = found.group.group === "Mock Tests";
    if (isMockTest) {
      const testData = parseMockTestMd(md);
      testData.title = found.item.title;
      renderActionBar(null);
      renderMockTestStart(testData);
      updateProgress();
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    // --- Regular topic: markdown rendering ---
    renderActionBar(id);

    let html = marked.parse(md);
    html = processInteractiveMCQs(html);
    contentEl.innerHTML = html;

    contentEl.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightElement(block);
    });

    updateProgress();
    window.scrollTo({ top: 0, behavior: "instant" });

  } catch (err) {
    renderError(`Failed to load: ${err.message}`);
  }
}

function handleRoute() {
  const hash = window.location.hash.slice(1);
  loadContent(hash || null);
}

window.addEventListener("hashchange", handleRoute);

// Global for inline onclick in rendered HTML
window.navigateTo = navigateTo;


// ================================================
// === ACTION BAR (Bookmark + Complete) ===========
// ================================================
function renderActionBar(id) {
  if (!id) {
    actionBarEl.innerHTML = "";
    return;
  }

  // No action bar for schedule or mock tests
  const found = findItem(id);
  if (!found || found.group.group === "schedule" || found.group.group === "Mock Tests") {
    actionBarEl.innerHTML = "";
    return;
  }

  const isCompleted = AppState.isCompleted(id);
  const isBookmarked = AppState.isBookmarked(id);

  actionBarEl.innerHTML = `
    <button class="action-btn action-btn--bookmark${isBookmarked ? " active" : ""}" id="btn-bookmark" aria-label="Toggle bookmark">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="${isBookmarked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
      </svg>
      ${isBookmarked ? "Bookmarked" : "Bookmark"}
    </button>
    <button class="action-btn action-btn--complete${isCompleted ? " active" : ""}" id="btn-complete" aria-label="Toggle completion">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${isCompleted
          ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
          : '<circle cx="12" cy="12" r="10"/>'}
      </svg>
      ${isCompleted ? "Completed" : "Mark Complete"}
    </button>
  `;

  document.getElementById("btn-bookmark").addEventListener("click", () => {
    AppState.toggleBookmarked(id);
    renderActionBar(id);
    buildSidebar(searchInput.value.trim());
  });

  document.getElementById("btn-complete").addEventListener("click", () => {
    AppState.toggleCompleted(id);
    renderActionBar(id);
    buildSidebar(searchInput.value.trim());
    updateProgress();
  });
}


// ================================================
// === BREADCRUMBS ================================
// ================================================
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


// ================================================
// === INTERACTIVE MCQ PROCESSING =================
// ================================================

/**
 * Parses the answer key table from rendered HTML and returns a map:
 *   { "1": { answer: "(b)", explanation: "..." }, "2": { ... } }
 * Handles both formats:
 *   - Topic files:  | Q1 | **(b)** | Explanation |
 *   - Mock tests:   | 1  | (b)     | Explanation |
 */
function parseAnswerKeyTable(container) {
  const answers = {};

  // Find the answer key heading
  const headings = container.querySelectorAll("h2, h3, h4");
  let answerHeading = null;

  for (const h of headings) {
    const text = h.textContent.toLowerCase();
    if (text.includes("answer key") || text.includes("answer sheet")) {
      answerHeading = h;
      break;
    }
  }

  if (!answerHeading) return answers;

  // Find the table after the heading
  let sibling = answerHeading.nextElementSibling;
  while (sibling) {
    if (sibling.tagName === "TABLE") {
      // Parse rows
      const rows = sibling.querySelectorAll("tbody tr");
      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length >= 2) {
          // Extract question number: "Q1" → "1", "1" → "1", "Q10" → "10"
          const qText = cells[0].textContent.trim();
          const qNum = qText.replace(/^Q/i, "").trim();
          // Extract answer letter
          const ansText = cells[1].textContent.trim();
          // Extract explanation (3rd column if exists)
          const explanation = cells.length >= 3 ? cells[2].innerHTML.trim() : "";

          answers[qNum] = { answer: ansText, explanation: explanation };
        }
      });
      break;
    }
    // Stop if we hit another major heading
    if (sibling.tagName && /^H[1-2]$/.test(sibling.tagName) &&
        !sibling.textContent.toLowerCase().includes("answer")) {
      break;
    }
    sibling = sibling.nextElementSibling;
  }

  return answers;
}

/**
 * Removes the entire answer key section (heading + all following content
 * until the next same-or-higher-level heading that isn't part of answers).
 */
function removeAnswerKeySection(container) {
  const headings = container.querySelectorAll("h2, h3, h4");

  for (const heading of headings) {
    const text = heading.textContent.toLowerCase();
    if (text.includes("answer key") || text.includes("answer sheet")) {
      const level = parseInt(heading.tagName[1]);
      const toRemove = [heading];

      let sibling = heading.nextElementSibling;
      while (sibling) {
        const sibTag = sibling.tagName;
        // Stop at a heading of same or higher level that isn't answer-related
        if (/^H[1-6]$/.test(sibTag) && parseInt(sibTag[1]) <= level) {
          if (!sibling.textContent.toLowerCase().includes("answer")) break;
        }
        toRemove.push(sibling);
        sibling = sibling.nextElementSibling;
      }

      toRemove.forEach((node) => node.remove());
    }
  }
}

/**
 * Finds question blocks and injects inline answer reveals.
 *
 * Handles two question formats:
 *   Format A (topic files):  <h3>Q1 (Basic)</h3> ... options ...
 *   Format B (mock tests):   <p><strong>Q1.</strong> question text</p> ... options ...
 */
function injectInlineAnswers(container, answers) {
  if (Object.keys(answers).length === 0) return;

  // --- Format A: Questions as ### headings (e.g., ### Q1 (Basic)) ---
  const allHeadings = container.querySelectorAll("h3");
  allHeadings.forEach((heading) => {
    const match = heading.textContent.match(/^Q(\d+)/i);
    if (!match) return;
    const qNum = match[1];
    const ansData = answers[qNum];
    if (!ansData) return;

    // Find the insertion point: the last element before the next --- (hr) or next heading
    let lastOption = heading;
    let sibling = heading.nextElementSibling;
    while (sibling) {
      if (sibling.tagName === "HR" || /^H[1-3]$/.test(sibling.tagName)) break;
      if (sibling.tagName === "DETAILS") break; // already processed
      lastOption = sibling;
      sibling = sibling.nextElementSibling;
    }

    // Create the reveal card
    const card = createAnswerCard(qNum, ansData);
    lastOption.insertAdjacentElement("afterend", card);
  });

  // --- Format B: Questions as bold paragraphs (e.g., **Q1.** ...) ---
  const allParagraphs = container.querySelectorAll("p");
  allParagraphs.forEach((p) => {
    const match = p.textContent.match(/^Q(\d+)\./i);
    if (!match) return;
    const qNum = match[1];
    const ansData = answers[qNum];
    if (!ansData) return;

    // Already handled by Format A?
    if (p.previousElementSibling && p.previousElementSibling.tagName === "DETAILS" &&
        p.previousElementSibling.classList.contains("mcq-card")) return;

    // Find insertion point: after options list (usually a <ul> right after the <p>)
    let lastOption = p;
    let sibling = p.nextElementSibling;
    while (sibling) {
      if (sibling.tagName === "HR" || /^H[1-4]$/.test(sibling.tagName)) break;
      if (sibling.tagName === "DETAILS") break;
      // Check if this is the start of the NEXT question
      if (sibling.tagName === "P" && /^Q\d+\./i.test(sibling.textContent.trim())) break;
      lastOption = sibling;
      sibling = sibling.nextElementSibling;
    }

    const card = createAnswerCard(qNum, ansData);
    lastOption.insertAdjacentElement("afterend", card);
  });
}

/**
 * Creates a <details> card for a single question's answer.
 */
function createAnswerCard(qNum, ansData) {
  const details = document.createElement("details");
  details.className = "mcq-card";

  const summary = document.createElement("summary");
  summary.innerHTML = `Reveal Answer — Q${qNum}`;

  const answerDiv = document.createElement("div");
  answerDiv.className = "mcq-answer";

  let answerHtml = `<strong>Answer: ${ansData.answer}</strong>`;
  if (ansData.explanation) {
    answerHtml += `<br><span class="mcq-explanation">${ansData.explanation}</span>`;
  }
  answerDiv.innerHTML = answerHtml;

  details.appendChild(summary);
  details.appendChild(answerDiv);
  return details;
}

/**
 * Main MCQ processing pipeline:
 * 1. Parse answer key table → build answers map
 * 2. Inject inline answer reveals after each question
 * 3. Remove the answer key section from the bottom
 */
function processInteractiveMCQs(html) {
  const container = document.createElement("div");
  container.innerHTML = html;

  // Step 1: Parse the answer key
  const answers = parseAnswerKeyTable(container);

  // Step 2: Inject inline answers next to each question
  injectInlineAnswers(container, answers);

  // Step 3: Remove the answer key section from the bottom
  if (Object.keys(answers).length > 0) {
    removeAnswerKeySection(container);
  }

  // Also remove trailing <hr> that preceded the answer key
  const children = container.children;
  while (children.length > 0 && children[children.length - 1].tagName === "HR") {
    children[children.length - 1].remove();
  }

  return container.innerHTML;
}


// ================================================
// === MOCK TEST EXAM ENGINE ======================
// ================================================

// --- Exam State ---
const examState = {
  active: false,
  testData: null,
  userAnswers: {},
  startTime: null,
  timerId: null
};

/**
 * Parse raw mock test markdown into structured data.
 * Returns { title, questions[], sections[], duration, correctMarks, wrongMarks }
 */
function parseMockTestMd(md) {
  const lines = md.split("\n");
  const questions = [];
  const sections = [];
  const answers = {};

  let currentSection = null;
  let currentQuestion = null;
  let inAnswerKey = false;
  let title = "";

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();
    if (!trimmed) continue;

    // Title from first H1
    if (!title) {
      const h1 = trimmed.match(/^#\s+(.+)/);
      if (h1) { title = h1[1]; continue; }
    }

    // Answer key section
    if (/^##\s*.*(ANSWER\s*KEY|Answer\s*Key)/i.test(trimmed)) {
      inAnswerKey = true;
      if (currentQuestion) { questions.push(currentQuestion); currentQuestion = null; }
      continue;
    }

    if (inAnswerKey) {
      // Parse table rows by splitting on pipe
      const cells = trimmed.split("|").filter((c) => c.trim()).map((c) => c.trim());
      if (cells.length >= 2) {
        const qNum = cells[0].replace(/^Q/i, "").trim();
        const ansMatch = cells[1].match(/\(?([a-d])\)?/i);
        if (ansMatch && /^\d+$/.test(qNum)) {
          answers[qNum] = {
            letter: ansMatch[1].toLowerCase(),
            explanation: cells.length >= 3 ? cells.slice(2).join(" ") : ""
          };
        }
      }
      continue;
    }

    // Skip table headers / separator rows
    if (/^\|[-\s|]+\|$/.test(trimmed)) continue;

    // Section headers: ### Subject 1: ... (Q1-Q10, 20 Marks)
    const section = trimmed.match(/^###\s+(.+)/);
    if (section && !/^###\s*Q\d+/i.test(trimmed)) {
      if (currentQuestion) { questions.push(currentQuestion); currentQuestion = null; }
      currentSection = section[1];
      sections.push({ title: currentSection, startIndex: questions.length });
      continue;
    }

    // Questions: **Q1.** question text
    const q = trimmed.match(/^\*\*Q(\d+)\.\*\*\s*(.*)/);
    if (q) {
      if (currentQuestion) questions.push(currentQuestion);
      currentQuestion = {
        num: parseInt(q[1]),
        text: q[2].trim(),
        options: [],
        section: currentSection
      };
      continue;
    }

    // Options: - (a) option text
    if (currentQuestion) {
      const opt = trimmed.match(/^-\s*\(([a-d])\)\s*(.*)/i);
      if (opt) {
        currentQuestion.options.push({
          letter: opt[1].toLowerCase(),
          text: opt[2].trim()
        });
      }
    }
  }

  if (currentQuestion) questions.push(currentQuestion);

  // Merge answers into questions
  questions.forEach((q) => {
    const ans = answers[q.num.toString()];
    if (ans) { q.answer = ans.letter; q.explanation = ans.explanation; }
  });

  return { title, questions, sections, duration: 120, correctMarks: 2, wrongMarks: -0.5 };
}

/** Format seconds as MM:SS */
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// ---- Start Page ----

function renderMockTestStart(testData) {
  actionBarEl.innerHTML = "";

  contentEl.innerHTML = `
    <div class="exam-start-page">
      <div class="exam-start-icon">\ud83d\udcdd</div>
      <h1 class="exam-start-title">${testData.title}</h1>
      <p class="exam-start-sub">JKSSB Sub-Inspector (Telecommunication)</p>

      <div class="exam-info-grid">
        <div class="exam-info-item"><span class="exam-info-value">${testData.questions.length}</span><span class="exam-info-label">Questions</span></div>
        <div class="exam-info-item"><span class="exam-info-value">${testData.questions.length * testData.correctMarks}</span><span class="exam-info-label">Total Marks</span></div>
        <div class="exam-info-item"><span class="exam-info-value">${testData.duration}</span><span class="exam-info-label">Minutes</span></div>
        <div class="exam-info-item"><span class="exam-info-value">+${testData.correctMarks} / ${testData.wrongMarks}</span><span class="exam-info-label">Marking</span></div>
      </div>

      <div class="exam-rules">
        <h3>Instructions</h3>
        <ul>
          <li>Each question carries <strong>${testData.correctMarks} marks</strong></li>
          <li><strong>${testData.wrongMarks} marks</strong> for each wrong answer</li>
          <li>No marks deducted for unanswered questions</li>
          <li>Timer starts when you click \u201cStart Test\u201d</li>
          <li>Test auto-submits when time runs out</li>
          <li>You can review and change answers before submitting</li>
        </ul>
      </div>

      <button class="exam-start-btn" id="btn-start-exam">
        \u25b6 Start Test
      </button>
    </div>
  `;

  document.getElementById("btn-start-exam").addEventListener("click", () => {
    startExam(testData);
  });
}

// ---- Exam Mode ----

function startExam(testData) {
  examState.active = true;
  examState.testData = testData;
  examState.userAnswers = {};
  examState.startTime = Date.now();

  // Hide sidebar on mobile
  closeSidebar();

  // Build exam bar (sticky header below main header)
  const bar = document.createElement("div");
  bar.className = "exam-bar";
  bar.id = "exam-bar";
  bar.innerHTML = `
    <span class="exam-bar-title">${testData.title}</span>
    <span class="exam-bar-timer" id="exam-timer">${formatTime(testData.duration * 60)}</span>
    <span class="exam-bar-progress" id="exam-progress">0 / ${testData.questions.length} answered</span>
    <button class="exam-bar-submit" id="exam-bar-submit">Submit Test</button>
  `;
  const main = document.getElementById("main");
  main.insertBefore(bar, breadcrumbsEl);

  // Hide breadcrumbs and action bar during exam
  breadcrumbsEl.style.display = "none";
  actionBarEl.innerHTML = "";

  // Render questions
  renderExamQuestions(testData);

  // Start timer
  examState.timerId = setInterval(updateExamTimer, 1000);

  // Attach submit handler
  document.getElementById("exam-bar-submit").addEventListener("click", confirmSubmit);

  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderExamQuestions(testData) {
  let html = "";
  let currentSection = null;

  testData.questions.forEach((q) => {
    // Section divider
    if (q.section && q.section !== currentSection) {
      currentSection = q.section;
      html += `<div class="exam-section-header">${currentSection}</div>`;
    }

    html += `
      <div class="exam-question" id="eq-${q.num}">
        <div class="exam-question-header">
          <span class="exam-question-num">Q${q.num}</span>
          <span class="exam-question-marks">${testData.correctMarks} marks</span>
        </div>
        <div class="exam-question-text">${q.text}</div>
        <div class="exam-options">
          ${q.options.map((opt) => `
            <label class="exam-option" data-qnum="${q.num}" data-letter="${opt.letter}">
              <span class="exam-option-radio"></span>
              <span class="exam-option-letter">(${opt.letter})</span>
              <span class="exam-option-text">${opt.text}</span>
            </label>
          `).join("")}
        </div>
      </div>
    `;
  });

  // Bottom submit
  html += `
    <div class="exam-bottom-actions">
      <p class="exam-bottom-info">\ud83d\udccc You have answered <strong><span id="exam-bottom-count">0</span> / ${testData.questions.length}</strong> questions</p>
      <button class="exam-submit-btn" id="exam-bottom-submit">\ud83d\udce8 Submit Test</button>
    </div>
  `;

  contentEl.innerHTML = html;

  // Attach option click handlers
  contentEl.querySelectorAll(".exam-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      selectAnswer(parseInt(opt.dataset.qnum), opt.dataset.letter);
    });
  });

  // Bottom submit handler
  document.getElementById("exam-bottom-submit").addEventListener("click", confirmSubmit);
}

function selectAnswer(qNum, letter) {
  const questionEl = document.getElementById(`eq-${qNum}`);
  questionEl.querySelectorAll(".exam-option").forEach((opt) => {
    opt.classList.remove("selected");
  });
  questionEl.querySelector(`[data-letter="${letter}"]`).classList.add("selected");
  examState.userAnswers[qNum] = letter;
  updateExamProgress();
}

function updateExamProgress() {
  const answered = Object.keys(examState.userAnswers).length;
  const total = examState.testData.questions.length;
  const topEl = document.getElementById("exam-progress");
  if (topEl) topEl.textContent = `${answered} / ${total} answered`;
  const bottomEl = document.getElementById("exam-bottom-count");
  if (bottomEl) bottomEl.textContent = answered;
}

// ---- Timer ----

function updateExamTimer() {
  const elapsed = Math.floor((Date.now() - examState.startTime) / 1000);
  const total = examState.testData.duration * 60;
  const remaining = Math.max(0, total - elapsed);

  const timerEl = document.getElementById("exam-timer");
  if (timerEl) {
    timerEl.textContent = formatTime(remaining);
    timerEl.classList.toggle("warning", remaining <= 300 && remaining > 60);
    timerEl.classList.toggle("critical", remaining <= 60);
  }

  if (remaining <= 0) {
    submitExam();
  }
}

// ---- Submit & Results ----

function confirmSubmit() {
  const answered = Object.keys(examState.userAnswers).length;
  const total = examState.testData.questions.length;
  const unanswered = total - answered;
  let msg = "Submit your test?";
  if (unanswered > 0) {
    msg = `You have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Submit anyway?`;
  }
  if (confirm(msg)) submitExam();
}

function submitExam() {
  if (examState.timerId) { clearInterval(examState.timerId); examState.timerId = null; }
  const timeElapsed = Math.floor((Date.now() - examState.startTime) / 1000);
  examState.active = false;

  // Mark this mock test as completed
  if (currentId) {
    AppState.setCompleted(currentId);
    buildSidebar(searchInput.value.trim());
  }

  renderExamResults(examState.testData, examState.userAnswers, timeElapsed);
}

function renderExamResults(testData, userAnswers, timeElapsed) {
  // Remove exam bar
  const bar = document.getElementById("exam-bar");
  if (bar) bar.remove();
  breadcrumbsEl.style.display = "";
  updateBreadcrumbs(findItem(currentId));

  // Calculate scores
  let correct = 0, wrong = 0, unanswered = 0;
  let totalScore = 0;

  testData.questions.forEach((q) => {
    const ua = userAnswers[q.num];
    if (!ua) { unanswered++; }
    else if (ua === q.answer) { correct++; totalScore += testData.correctMarks; }
    else { wrong++; totalScore += testData.wrongMarks; }
  });

  const maxScore = testData.questions.length * testData.correctMarks;
  const percentage = maxScore > 0 ? Math.round((Math.max(0, totalScore) / maxScore) * 100) : 0;
  const timeMins = Math.floor(timeElapsed / 60);
  const timeSecs = timeElapsed % 60;

  let html = `
    <div class="exam-results">
      <div class="exam-results-header">
        <h1>\ud83c\udfc1 Test Results</h1>
        <p class="exam-results-subtitle">${testData.title}</p>
      </div>

      <div class="exam-score-card">
        <div class="exam-score-main">
          <span class="exam-score-value">${totalScore % 1 === 0 ? totalScore : totalScore.toFixed(1)}</span>
          <span class="exam-score-max">/ ${maxScore}</span>
        </div>
        <div class="exam-score-pct ${percentage >= 50 ? "pass" : "fail"}">${percentage}%</div>
      </div>

      <div class="exam-results-stats">
        <div class="exam-rstat correct">
          <span class="exam-rstat-value">${correct}</span>
          <span class="exam-rstat-label">Correct</span>
          <span class="exam-rstat-marks">+${correct * testData.correctMarks}</span>
        </div>
        <div class="exam-rstat wrong">
          <span class="exam-rstat-value">${wrong}</span>
          <span class="exam-rstat-label">Wrong</span>
          <span class="exam-rstat-marks">${(wrong * testData.wrongMarks).toFixed(1)}</span>
        </div>
        <div class="exam-rstat skipped">
          <span class="exam-rstat-value">${unanswered}</span>
          <span class="exam-rstat-label">Skipped</span>
          <span class="exam-rstat-marks">0</span>
        </div>
      </div>

      <div class="exam-results-time">\u23f1 Time taken: ${timeMins}m ${timeSecs}s of ${testData.duration} minutes</div>

      <div class="exam-results-actions">
        <button class="exam-retake-btn" onclick="navigateTo('${currentId}');">\u21bb Retake Test</button>
        <button class="exam-home-btn" onclick="navigateTo('');">\u2190 Back to Dashboard</button>
      </div>

      <h2 class="exam-detail-heading">Detailed Answers</h2>
  `;

  let currentSection = null;

  testData.questions.forEach((q) => {
    if (q.section && q.section !== currentSection) {
      currentSection = q.section;
      html += `<div class="exam-section-header">${currentSection}</div>`;
    }

    const ua = userAnswers[q.num];
    let rClass, badge;
    if (!ua) {
      rClass = "result-skipped";
      badge = '<span class="exam-rbadge skipped">0</span>';
    } else if (ua === q.answer) {
      rClass = "result-correct";
      badge = `<span class="exam-rbadge correct">+${testData.correctMarks}</span>`;
    } else {
      rClass = "result-wrong";
      badge = `<span class="exam-rbadge wrong">${testData.wrongMarks}</span>`;
    }

    html += `
      <div class="exam-question ${rClass}">
        <div class="exam-question-header">
          <span class="exam-question-num">Q${q.num}</span>
          ${badge}
        </div>
        <div class="exam-question-text">${q.text}</div>
        <div class="exam-options result-mode">
          ${q.options.map((opt) => {
            let cls = "";
            let tag = "";
            if (opt.letter === q.answer) {
              cls = "correct";
              tag = ua === q.answer && ua === opt.letter
                ? '<span class="exam-otag correct">\u2713 Your answer (correct)</span>'
                : '<span class="exam-otag correct">\u2713 Correct answer</span>';
            }
            if (opt.letter === ua && ua !== q.answer) {
              cls += " wrong";
              tag = '<span class="exam-otag wrong">\u2717 Your answer</span>';
            }
            return `
              <div class="exam-option ${cls}">
                <span class="exam-option-letter">(${opt.letter})</span>
                <span class="exam-option-text">${opt.text}</span>
                ${tag}
              </div>`;
          }).join("")}
        </div>
        ${q.explanation ? `<div class="exam-explanation">${q.explanation}</div>` : ""}
      </div>
    `;
  });

  html += "</div>";
  contentEl.innerHTML = html;
  actionBarEl.innerHTML = "";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function cleanupExam() {
  if (examState.timerId) { clearInterval(examState.timerId); examState.timerId = null; }
  examState.active = false;
  examState.testData = null;
  examState.userAnswers = {};
  const bar = document.getElementById("exam-bar");
  if (bar) bar.remove();
  breadcrumbsEl.style.display = "";
}


// ================================================
// === HOME PAGE / DASHBOARD ======================
// ================================================
function renderHome() {
  const totalTopics = getTotalTopicCount();
  const completedCount = getCompletedTopicCount();
  const pendingCount = totalTopics - completedCount;
  const percentage = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const lastVisited = AppState.getLastVisited();
  const bookmarkedIds = AppState.getBookmarkedIds();
  const recentlyVisited = AppState.getRecentlyVisited();

  let html = "";

  // --- Hero ---
  html += `
    <div class="home-hero">
      <h1>Sub-Inspector (Telecom) Exam Prep</h1>
      <p>J&K Police, Home Department \u2014 JKSSB<br>
      100 MCQs \u00b7 200 Marks \u00b7 120 Minutes \u00b7 -0.5 Negative Marking</p>
    </div>
  `;

  // --- Resume Card ---
  if (lastVisited) {
    const groupLabel = lastVisited.group && lastVisited.group !== "schedule"
      ? `${lastVisited.group} \u2192 `
      : "";
    html += `
      <div class="resume-card" onclick="navigateTo('${lastVisited.id}');return false;" tabindex="0" role="button">
        <div class="resume-card-icon">\ud83d\udcd6</div>
        <div class="resume-card-body">
          <div class="resume-card-label">Continue where you left off</div>
          <div class="resume-card-title">${groupLabel}${lastVisited.title}</div>
          <div class="resume-card-time">${timeAgo(lastVisited.timestamp)}</div>
        </div>
        <div class="resume-card-arrow">\u2192</div>
      </div>
    `;
  }

  // --- Stats Grid ---
  html += `
    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-value">16</span>
        <span class="stat-label">Weeks</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">${totalTopics}</span>
        <span class="stat-label">Topics</span>
      </div>
      <div class="stat-card">
        <span class="stat-value">${completedCount}</span>
        <span class="stat-label">Completed</span>
      </div>
      <div class="stat-card stat-card--accent">
        <span class="stat-value">${percentage}%</span>
        <span class="stat-label">Progress</span>
      </div>
    </div>
  `;

  // --- Progress Bar ---
  html += `
    <div class="progress-section">
      <div class="progress-bar-container">
        <div class="progress-bar-fill" style="width: ${percentage}%"></div>
      </div>
      <div class="progress-text">${completedCount} of ${totalTopics} topics completed \u2022 ${pendingCount} remaining</div>
    </div>
  `;

  // --- Bookmarked Topics ---
  if (bookmarkedIds.length > 0) {
    html += `<div class="dashboard-section">
      <h2 class="section-title"><span class="section-icon">\ud83d\udd16</span> Bookmarked Topics</h2>
      <div class="bookmark-grid">`;

    bookmarkedIds.forEach((id) => {
      const found = findItem(id);
      if (found) {
        const isDone = AppState.isCompleted(id);
        html += `
          <a class="bookmark-card${isDone ? " completed" : ""}" onclick="navigateTo('${id}');return false;">
            <div class="bookmark-card-group">${found.group.group}</div>
            <div class="bookmark-card-title">${found.item.title}</div>
            ${isDone ? '<span class="bookmark-card-check">\u2713</span>' : ""}
          </a>`;
      }
    });

    html += `</div></div>`;
  }

  // --- Recently Visited ---
  if (recentlyVisited.length > 0) {
    html += `<div class="dashboard-section">
      <h2 class="section-title"><span class="section-icon">\ud83d\udd59</span> Recently Visited</h2>
      <div class="recent-list">`;

    recentlyVisited.forEach((entry) => {
      const found = findItem(entry.id);
      if (found) {
        const isDone = AppState.isCompleted(entry.id);
        html += `
          <a class="recent-item" onclick="navigateTo('${entry.id}');return false;">
            <span class="recent-item-title">
              ${isDone ? '<span class="recent-check">\u2713</span>' : ""}
              ${found.item.title}
            </span>
            <span class="recent-item-meta">
              <span class="recent-item-group">${found.group.group}</span>
              <span class="recent-item-time">${timeAgo(entry.timestamp)}</span>
            </span>
          </a>`;
      }
    });

    html += `</div></div>`;
  }

  // --- All Topics Grid ---
  html += `<div class="dashboard-section">
    <h2 class="section-title"><span class="section-icon">\ud83d\udcda</span> All Topics</h2>
    <div class="week-grid">`;

  CONTENT_MAP.forEach((group) => {
    if (group.group === "schedule") return;
    group.items.forEach((item) => {
      const isDone = AppState.isCompleted(item.id);
      const isBookmarked = AppState.isBookmarked(item.id);
      html += `
        <a class="week-card${isDone ? " completed" : ""}" onclick="navigateTo('${item.id}');return false;">
          <div class="week-card-header">
            ${group.group}
            ${isBookmarked ? '<span class="card-bookmark">\u2691</span>' : ""}
          </div>
          <div class="week-card-title">${item.title}</div>
          <div class="week-card-meta">
            ${item.marks} Marks
            ${isDone ? '<span class="card-done-badge">\u2713 Done</span>' : ""}
          </div>
        </a>`;
    });
  });

  html += `</div></div>`;

  contentEl.innerHTML = html;
}


// ================================================
// === ERROR STATE ================================
// ================================================
function renderError(msg) {
  contentEl.innerHTML = `
    <div class="error-state">
      <h2>Oops!</h2>
      <p>${msg}</p>
      <p><a href="#" onclick="navigateTo('');return false;">Back to Home</a></p>
    </div>`;
}


// ================================================
// === PROGRESS BADGE (HEADER) ====================
// ================================================
function updateProgress() {
  const total = getTotalTopicCount();
  const done = getCompletedTopicCount();
  progressBadge.textContent = `${done} / ${total} topics`;
}


// ================================================
// === KEYBOARD SHORTCUTS =========================
// ================================================
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && e.key === "k") || (e.key === "/" && document.activeElement.tagName !== "INPUT")) {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});


// ================================================
// === INIT =======================================
// ================================================
function init() {
  AppState.load();
  initTheme();
  buildSidebar();
  updateProgress();
  handleRoute();
}

init();
