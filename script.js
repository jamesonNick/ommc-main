// =========================================================
// 1. CUSTOM MOUSE CURSOR & MAGNETIC MICRO-INTERACTIONS
// =========================================================
const cursorDot = document.getElementById('cursorDot');
const cursorFollower = document.getElementById('cursorFollower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorDot) {
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  }
});

function animateCursor() {
  followerX += (mouseX - followerX) * 0.15;
  followerY += (mouseY - followerY) * 0.15;
  if (cursorFollower) {
    cursorFollower.style.left = `${followerX}px`;
    cursorFollower.style.top = `${followerY}px`;
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// CURSOR HOVER ENHANCEMENT FOR INTERACTIVE ELEMENTS
const interactiveElements = document.querySelectorAll('a, button, .tilt-card, .quick-card, .team-card');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursorFollower?.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => cursorFollower?.classList.remove('cursor-hover'));
});

// MAGNETIC PULL EFFECT FOR BUTTONS
document.querySelectorAll('.hover-magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0px, 0px)';
  });
});

// 3D CARD TILT MICRO-INTERACTION
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 12;
    const rotateY = (centerX - x) / 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});

// =========================================================
// 2. DYNAMIC CANVAS BACKGROUND PARTICLES
// =========================================================
const canvas = document.getElementById('bgParticlesCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particlesArray = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.speedY = (Math.random() - 0.5) * 0.6;
      this.color = Math.random() > 0.5 ? '#e6007e' : '#2d7df6';
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particlesArray = [];
    const count = Math.floor((canvas.width * canvas.height) / 18000);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }
  initParticles();

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();
}

// =========================================================
// 3. SCROLL REVEAL INTERSECTION OBSERVER
// =========================================================
const observerOptions = { threshold: 0.15 };
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

// =========================================================
// TEAM ORGANIZATIONAL STRUCTURE DATA (UNCHANGED)
// =========================================================
const teamOrgData = {
  east: {
    title: "EAST Intra Asia Team Structure",
    members: [
      { role: "Manager", name: "Florianne Sanchez", level: "level-manager" },
      { role: "Assistant Manager", name: "Jan Lemuel Serrano", level: "level-ass-mgr" },
      { role: "Senior Pricing Analyst", name: "Kimberly Dela Cruz", level: "level-sr-analyst" },
      { role: "Senior Pricing Analyst", name: "Joana Marie Dino", level: "level-sr-analyst" },
      { role: "Senior Pricing Analyst", name: "Armida Astrero", level: "level-sr-analyst" },
      { role: "Senior Pricing Analyst", name: "Vann Heinrick Amparo", level: "level-sr-analyst" },
      { role: "Pricing Analyst", name: "Kyle Denise Manaig", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Annafeir Gacita", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Charles Joshua Agrava ", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Roxanne Joy Guevarra ", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Kathlyn Hecole", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Glancy Verdera", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Rayven Girado", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Clark John Yodico", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Ezraquel Laconsay", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Llewen Brylle Getuaban", level: "level-analyst" }
    ]
  },
  west: {
    title: "WEST Intra Asia Team Structure",
    members: [
      { role: "Manager", name: "Florianne Sanchez", level: "level-manager" },
      { role: "Assistant Manager", name: "Jan Lemuel Serrano", level: "level-ass-mgr" },
      { role: "Senior Pricing Analyst", name: "Kichelle Vega", level: "level-sr-analyst" },
      { role: "Senior Pricing Analyst", name: "Lei Khrisna Mojica", level: "level-sr-analyst" },
      { role: "Senior Pricing Analyst", name: "Grecia Gener", level: "level-sr-analyst" },
      { role: "Senior Pricing Analyst", name: "Guia Tamio", level: "level-sr-analyst" },
      { role: "Pricing Analyst", name: "Rhoda May Garcia", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Cristina Tanala", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Leonila Nika Jaud", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Jervhiny Lumagui, ", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Jeny Babe Gallardo", level: "level-analyst" }
    ]
  },
  japan: {
    title: "JAPAN Trade Team Structure",
    members: [
      { role: "Manager", name: "Florianne Sanchez", level: "level-manager" },
      { role: "Assistant Manager", name: "Jan Lemuel Serrano", level: "level-ass-mgr" },
      { role: "Senior Pricing Analyst", name: "Marjhorie Caburnay", level: "level-sr-analyst" },
      { role: "Pricing Analyst", name: "Joane Marielle Dela Cruz", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Kyla Marie Cadavis", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Jameson Nick Samson", level: "level-analyst" }
    ]
  },
  oc: {
    title: "OCEANIA Trade Team Structure",
    members: [
      { role: "Manager", name: "Florianne Sanchez", level: "level-manager" },
      { role: "Assistant Manager", name: "Jan Lemuel Serrano", level: "level-ass-mgr" },
      { role: "Assistant Supervisor", name: "Grace Dalanon", level: "level-ass-sup" },
      { role: "Pricing Analyst", name: "Thea Marie Barcelos", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Jonathan Doria", level: "level-analyst" }
    ]
  },
  breakbulk: {
    title: "BREAKBULK Trade Team Structure",
    members: [
      { role: "Manager", name: "Florianne Sanchez", level: "level-manager" },
      { role: "Assistant Manager", name: "Jan Lemuel Serrano", level: "level-ass-mgr" },
      { role: "Assistant Supervisor", name: "Grace Dalanon", level: "level-ass-sup" },
      { role: "Pricing Analyst", name: "Thea Marie Barcelos", level: "level-analyst" }
    ]
  },
  giff: {
    title: "GIFF Team Structure",
    members: [
      { role: "Manager", name: "Florianne Sanchez", level: "level-manager" },
      { role: "Assistant Manager", name: "Jan Lemuel Serrano", level: "level-ass-mgr" },
      { role: "Supervisor", name: "Carla Borja", level: "level-sup" },
      { role: "Pricing Analyst", name: "Cate Delapa", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Rhadge Christine Valdez", level: "level-analyst" },
      { role: "Pricing Analyst", name: "Neil Russel Paragas", level: "level-analyst" }
    ]
  }
};

// =========================================================
// RESOURCES DATA (UNCHANGED)
// =========================================================
const materials = [
  { id: 1, title: "Shipping Information", description: "Overview of port operations, vessel scheduling, and cargo handling procedures.", category: "guide", type: "ppt", icon: "🏗️", fileUrl: "files/Shipping.pdf" },
  { id: 2, title: "Chorus Pricing Simulation", description: "Simulation guidelines and step-by-step deck for OPUS pricing tools.", category: "tool", type: "ppt", icon: "🏷️", fileUrl: "files/Chorus.pdf" },
  { id: 3, title: "ONE Quote Pricing Part", description: "Reference material for digital instant quotes and rate engine configurations.", category: "guide", type: "ppt", icon: "📦", fileUrl: "files/Oneqoute.pdf" },
  { id: 4, title: "Pricing Five Factors", description: "Key analytical factors influencing pricing strategy and yield evaluation.", category: "guide", type: "ppt", icon: "🧠", fileUrl: "files/Five-Factors.pdf" },
  { id: 5, title: "Freetime and Waiver Request", description: "SOPs, rules, and approval workflow for freetime adjustments and demurrage waivers.", category: "guide", type: "ppt", icon: "⏰", fileUrl: "files/Freetime-Waiver.pdf" },
  { id: 6, title: "COD, ROB, and Re-Export Rates", description: "Standard rate structures for Change of Destination, Restow, and Re-Export handling.", category: "guide", type: "ppt", icon: "🔄", fileUrl: "files/Cod-Rob.pdf" },
  { id: 7, title: "TIGER System Guide (Pricing Part)", description: "User manual for TIGER pricing interface, rate entries, and approvals.", category: "tool", type: "ppt", icon: "🐯", fileUrl: "files/Tiger-System.pdf" },
  { id: 8, title: "FOB Request and Incoterms", description: "Guidelines for FOB cost allocation, trade liability, and Incoterm rules.", category: "guide", type: "ppt", icon: "🚢", fileUrl: "files/Incoterms.pdf" },
  { id: 9, title: "Pricing Initiatives", description: "Strategic projects, rate optimization plans, and yield growth targets.", category: "guide", type: "ppt", icon: "🏷️", fileUrl: "files/Pricing-Initiative.pdf" },
  { id: 10, title: "Pricing Decision", description: "Framework, threshold authority, and delegation matrix for rate approvals.", category: "guide", type: "ppt", icon: "🔀", fileUrl: "files/Pricing-Decision.pdf" },
  { id: 11, title: "SOP per Trade", description: "Standard operating procedures customized per Intra Asia trade region.", category: "guide", type: "ppt", icon: "⚙️", fileUrl: "files/sop-per-trade.pdf" },
  { id: 12, title: "Tender Process", description: "End-to-end tender lifecycle, bid templates, and submission SOPs.", category: "template", type: "ppt", icon: "📄", fileUrl: "files/Tender-Process.pdf" }
];

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const rawQuizData = [
  { resource: "Shipping Information", question: "Which operational domain is primarily covered under the 'Shipping Information' guide?", correct: "Vessel scheduling & cargo handling", incorrect: ["Annual tender submissions", "Freetime fee calculations", "Excel Macro building"], explanation: "Shipping Information focuses on vessel schedules, berth planning, and cargo handling SOPs." },
  { resource: "OPUS Pricing Simulation", question: "What is the main function of the 'OPUS Pricing Simulation' tool?", correct: "Simulating pricing scenarios and rate models", incorrect: ["Creating container vessel schematics", "Processing staff leave requests", "Generating Incoterm certificates"], explanation: "OPUS Pricing Simulation tests rate structures and profitability before live publishing." }
];

const quizData = rawQuizData.map(q => {
  const opts = shuffleArray([q.correct, ...q.incorrect]);
  return { resource: q.resource, question: q.question, options: opts, answer: opts.indexOf(q.correct), explanation: q.explanation };
});

const rawPolData = [
  { prompt: "SGPSS (Singapore Port)", correct: "Singapore", incorrect: ["Malaysia", "Vietnam", "Thailand"], exp: "SGPSS is UN/LOCODE for Singapore Terminal Port." },
  { prompt: "JPTYO (Tokyo Port)", correct: "Japan", incorrect: ["South Korea", "China", "Taiwan"], exp: "JPTYO represents Tokyo Port in Japan." }
];

const polData = rawPolData.map(item => {
  const opts = shuffleArray([item.correct, ...item.incorrect]);
  return { prompt: item.prompt, options: opts, answer: opts.indexOf(item.correct), exp: item.exp };
});

const rawPuzzleData = [
  { term: "TEU", correct: "Twenty-foot Equivalent Unit", incorrect: ["Total Export Utilization", "Terminal Engine Unit", "Trade Entry Umbrella"], exp: "TEU is standard measure for container capacity." }
];

const puzzleData = rawPuzzleData.map(item => {
  const opts = shuffleArray([item.correct, ...item.incorrect]);
  return { term: item.term, options: opts, answer: opts.indexOf(item.correct), exp: item.exp };
});

// DOM ELEMENTS & EVENT CONTROLS
const materialsGrid = document.getElementById("materialsGrid");
const searchToggle = document.getElementById("searchToggle");
const searchBarOverlay = document.getElementById("searchBarOverlay");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const resourceModal = document.getElementById("resourceModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let activeCategory = "all";

function triggerConfetti() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0.2, y: 0.6 } });
    confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 0.8, y: 0.6 } });
  }
}

// TEAM ORG MODAL TRIGGER
document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    const teamKey = card.dataset.team;
    const teamInfo = teamOrgData[teamKey];
    if (!teamInfo) return;

    let orgTreeHTML = teamInfo.members.map(member => `
      <div class="org-node ${member.level}">
        <span class="org-role">${member.role}</span>
        <span class="org-name">${member.name}</span>
      </div>
    `).join("");

    modalBody.innerHTML = `
      <h3 style="margin-bottom:6px;">${teamInfo.title}</h3>
      <p style="color:var(--text-muted); font-size:12px; margin-bottom:15px;">Department Organizational Breakdown</p>
      <div class="org-chart-tree">${orgTreeHTML}</div>
    `;

    resourceModal.classList.add("active");
  });
});

// RENDER MATERIALS GRID
function renderMaterials() {
  if (!materialsGrid) return;
  
  const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const filtered = materials.filter(item => {
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(query) || item.description.toLowerCase().includes(query);
    return matchCat && matchSearch;
  });

  materialsGrid.innerHTML = "";

  if (filtered.length === 0) {
    materialsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted);">No materials found.</p>`;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "resource-card hover-card tilt-card";
    card.onclick = () => openResourceModal(item);
    card.innerHTML = `
      <div style="font-size:26px; margin-bottom:8px;">${item.icon || '📄'}</div>
      <h4 style="font-size:14px; margin-bottom:4px;">${item.title}</h4>
      <p style="font-size:12px; color: var(--text-muted);">${item.description}</p>
      <span style="font-size:10px; color:var(--primary-blue); display:inline-block; margin-top:8px;">
        Click to view PPT →
      </span>
    `;
    materialsGrid.appendChild(card);
  });
}

function openResourceModal(item) {
  const pdfViewerUrl = `${item.fileUrl}#toolbar=1&navpanes=0&view=FitH`;

  modalBody.innerHTML = `
    <h3 style="margin-bottom:6px; font-size:20px;">${item.title}</h3>
    <p style="color:var(--text-muted); font-size:13px; margin-bottom:15px;">${item.description}</p>
    <div style="height:600px; width:100%;">
      <iframe src="${pdfViewerUrl}" width="100%" height="100%" style="border:none; border-radius:8px;"></iframe>
    </div>
    <div style="margin-top: 15px; text-align: right;">
      <a href="${item.fileUrl}" target="_blank" class="btn btn-primary hover-magnetic" style="display:inline-block; font-size:13px; padding:10px 18px;">
        Open Full Presentation ↗
      </a>
    </div>
  `;
  resourceModal.classList.add("active");
}

// ARCADE CENTER TABS
document.querySelectorAll(".game-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".game-tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".game-view").forEach(v => v.style.display = "none");

    tab.classList.add("active");
    const gameType = tab.dataset.game;

    if (gameType === "quiz") {
      document.getElementById("quizGame").style.display = "block";
    } else if (gameType === "polpod") {
      document.getElementById("polpodGame").style.display = "block";
      loadPolQuestion();
    } else if (gameType === "puzzle") {
      document.getElementById("puzzleGame").style.display = "block";
      loadPuzzleQuestion();
    }
  });
});

let currentQuizIdx = 0, quizScore = 0, canAnswerQuiz = true;

function loadQuizQuestion() {
  canAnswerQuiz = true;
  const item = quizData[currentQuizIdx];
  if (!item) return;
  document.getElementById("quizQuestionCount").innerText = `Question ${currentQuizIdx + 1} of ${quizData.length}: ${item.resource}`;
  document.getElementById("quizScore").innerText = `Score: ${quizScore}`;
  document.getElementById("quizQuestionText").innerText = item.question;
  document.getElementById("quizFeedback").innerText = "";

  const container = document.getElementById("quizOptions");
  container.innerHTML = "";
  item.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerText = opt;
    btn.onclick = () => {
      if (!canAnswerQuiz) return;
      canAnswerQuiz = false;
      if (idx === item.answer) {
        btn.classList.add("correct");
        quizScore++;
        triggerConfetti();
        document.getElementById("quizFeedback").innerHTML = `<span style="color:#10b981;">Correct! 🎉 ${item.explanation}</span>`;
      } else {
        btn.classList.add("incorrect");
        container.children[item.answer].classList.add("correct");
        document.getElementById("quizFeedback").innerHTML = `<span style="color:var(--primary-pink);">Incorrect. ❌ ${item.explanation}</span>`;
      }
      setTimeout(() => {
        currentQuizIdx++;
        if (currentQuizIdx < quizData.length) loadQuizQuestion();
        else {
          document.getElementById("quizContent").style.display = "none";
          document.getElementById("quizResult").style.display = "block";
          document.getElementById("quizFinalScore").innerText = `You scored ${quizScore} out of ${quizData.length}!`;
        }
      }, 2000);
    };
    container.appendChild(btn);
  });
}

function restartQuiz() {
  currentQuizIdx = 0; quizScore = 0;
  document.getElementById("quizContent").style.display = "block";
  document.getElementById("quizResult").style.display = "none";
  loadQuizQuestion();
}

let polIdx = 0, polScore = 0, canAnswerPol = true;

function loadPolQuestion() {
  canAnswerPol = true;
  const item = polData[polIdx];
  if (!item) return;
  document.getElementById("polQuestionCount").innerText = `Port ${polIdx + 1} of ${polData.length}`;
  document.getElementById("polScore").innerText = `Score: ${polScore}`;
  document.getElementById("polQuestionText").innerText = item.prompt;
  document.getElementById("polFeedback").innerText = "";

  const container = document.getElementById("polOptions");
  container.innerHTML = "";
  item.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerText = opt;
    btn.onclick = () => {
      if (!canAnswerPol) return;
      canAnswerPol = false;
      if (idx === item.answer) {
        btn.classList.add("correct");
        polScore++;
        triggerConfetti();
        document.getElementById("polFeedback").innerHTML = `<span style="color:#10b981;">Correct Country! ⚓ ${item.exp}</span>`;
      } else {
        btn.classList.add("incorrect");
        container.children[item.answer].classList.add("correct");
        document.getElementById("polFeedback").innerHTML = `<span style="color:var(--primary-pink);">Incorrect. ❌ ${item.exp}</span>`;
      }
      setTimeout(() => {
        polIdx++;
        if (polIdx < polData.length) loadPolQuestion();
        else {
          document.getElementById("polContent").style.display = "none";
          document.getElementById("polResult").style.display = "block";
          document.getElementById("polFinalScore").innerText = `You scored ${polScore} out of ${polData.length}!`;
        }
      }, 2000);
    };
    container.appendChild(btn);
  });
}

function restartPolGame() {
  polIdx = 0; polScore = 0;
  document.getElementById("polContent").style.display = "block";
  document.getElementById("polResult").style.display = "none";
  loadPolQuestion();
}

let puzIdx = 0, puzScore = 0, canAnswerPuz = true;

function loadPuzzleQuestion() {
  canAnswerPuz = true;
  const item = puzzleData[puzIdx];
  if (!item) return;
  document.getElementById("puzQuestionCount").innerText = `Term ${puzIdx + 1} of ${puzzleData.length}`;
  document.getElementById("puzScore").innerText = `Score: ${puzScore}`;
  document.getElementById("puzQuestionText").innerText = item.term;
  document.getElementById("puzFeedback").innerText = "";

  const container = document.getElementById("puzOptions");
  container.innerHTML = "";
  item.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.innerText = opt;
    btn.onclick = () => {
      if (!canAnswerPuz) return;
      canAnswerPuz = false;
      if (idx === item.answer) {
        btn.classList.add("correct");
        puzScore++;
        triggerConfetti();
        document.getElementById("puzFeedback").innerHTML = `<span style="color:#10b981;">Matched! 🧩 ${item.exp}</span>`;
      } else {
        btn.classList.add("incorrect");
        container.children[item.answer].classList.add("correct");
        document.getElementById("puzFeedback").innerHTML = `<span style="color:var(--primary-pink);">Incorrect Match. ❌ ${item.exp}</span>`;
      }
      setTimeout(() => {
        puzIdx++;
        if (puzIdx < puzzleData.length) loadPuzzleQuestion();
        else {
          document.getElementById("puzContent").style.display = "none";
          document.getElementById("puzResult").style.display = "block";
          document.getElementById("puzFinalScore").innerText = `You scored ${puzScore} out of ${puzzleData.length}!`;
        }
      }, 2000);
    };
    container.appendChild(btn);
  });
}

function restartPuzzleGame() {
  puzIdx = 0; puzScore = 0;
  document.getElementById("puzContent").style.display = "block";
  document.getElementById("puzResult").style.display = "none";
  loadPuzzleQuestion();
}

if (closeModal) closeModal.addEventListener("click", () => resourceModal.classList.remove("active"));
window.addEventListener("click", (e) => { if (e.target === resourceModal) resourceModal.classList.remove("active"); });

if (searchToggle) {
  searchToggle.addEventListener("click", () => {
    searchBarOverlay.classList.toggle("open");
    if (searchBarOverlay.classList.contains("open")) searchInput.focus();
  });
}
if (searchInput) searchInput.addEventListener("input", renderMaterials);

document.querySelectorAll(".pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    activeCategory = pill.dataset.category;
    renderMaterials();
  });
});

function setTheme(theme) {
  if (theme === "light") document.body.classList.add("light-theme");
  else document.body.classList.remove("light-theme");
  localStorage.setItem("selectedTheme", theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    setTheme(currentTheme);
  });
}

setTheme(localStorage.getItem("selectedTheme") || "dark");
if (scrollTopBtn) scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// INITIAL RUN
renderMaterials();
loadQuizQuestion();
