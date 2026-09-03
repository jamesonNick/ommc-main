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
  {
    id: 1,
    title: "Shipping Information",
    description: "Overview of port operations, vessel scheduling, and cargo handling procedures.",
    category: "guide",
    type: "ppt",
    icon: "🏗️",
    fileUrl: "files/Shipping.pdf"
  },
  {
    id: 2,
    title: "OPUS Pricing Simulation",
    description: "Simulation guidelines and step-by-step deck for OPUS pricing tools.",
    category: "tool",
    type: "ppt",
    icon: "🏷️",
    fileUrl: "files/Opus-Pricing.pdf"
  },
  {
    id: 3,
    title: "ONE Quote Pricing Part",
    description: "Reference material for digital instant quotes and rate engine configurations.",
    category: "guide",
    type: "ppt",
    icon: "📦",
    fileUrl: "files/Oneqoute.pdf"
  },
  {
    id: 4,
    title: "Pricing Five Factors",
    description: "Key analytical factors influencing pricing strategy and yield evaluation.",
    category: "guide",
    type: "ppt",
    icon: "🧠",
    fileUrl: "files/Five-Factors.pdf"
  },
  {
    id: 5,
    title: "Freetime and Waiver Request",
    description: "SOPs, rules, and approval workflow for freetime adjustments and demurrage waivers.",
    category: "guide",
    type: "ppt",
    icon: "⏰",
    fileUrl: "files/Freetime-Waiver.pdf"
  },
  {
    id: 6,
    title: "COD, ROB, and Re-Export Rates",
    description: "Standard rate structures for Change of Destination, Restow, and Re-Export handling.",
    category: "guide",
    type: "ppt",
    icon: "🔄",
    fileUrl: "files/Cod-Rob.pdf"
  },
  {
    id: 7,
    title: "TIGER System Guide (Pricing Part)",
    description: "User manual for TIGER pricing interface, rate entries, and approvals.",
    category: "tool",
    type: "ppt",
    icon: "🐯",
    fileUrl: "files/Tiger-System.pdf"
  },
  {
    id: 8,
    title: "FOB Request and Incoterms",
    description: "Guidelines for FOB cost allocation, trade liability, and Incoterm rules.",
    category: "guide",
    type: "ppt",
    icon: "🚢",
    fileUrl: "files/Incoterms.pdf"
  },
  {
    id: 9,
    title: "Pricing Initiatives",
    description: "Strategic projects, rate optimization plans, and yield growth targets.",
    category: "guide",
    type: "ppt",
    icon: "🏷️",
    fileUrl: "files/Pricing-Initiative.pdf"
  },
  {
    id: 10,
    title: "Pricing Decision",
    description: "Framework, threshold authority, and delegation matrix for rate approvals.",
    category: "guide",
    type: "ppt",
    icon: "🔀",
    fileUrl: "files/Pricing-Decision.pdf"
  },
  {
    id: 11,
    title: "SOP per Trade",
    description: "Standard operating procedures customized per Intra Asia trade region.",
    category: "guide",
    type: "ppt",
    icon: "⚙️",
    fileUrl: "files/sop-per-trade.pdf"
  },
  {
    id: 12,
    title: "Tender Process",
    description: "End-to-end tender lifecycle, bid templates, and submission SOPs.",
    category: "template",
    type: "ppt",
    icon: "📄",
    fileUrl: "files/Tender-Process.pdf"
  }
];

// Helper function to shuffle choices randomly
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// =========================================================
// GAME 1 DATA: RESOURCE QUIZ (20 QUESTIONS)
// =========================================================
const rawQuizData = [
  { resource: "Shipping Information", question: "Which operational domain is primarily covered under the 'Shipping Information' guide?", correct: "Vessel scheduling & cargo handling", incorrect: ["Annual tender submissions", "Freetime fee calculations", "Excel Macro building"], explanation: "Shipping Information focuses on vessel schedules, berth planning, and cargo handling SOPs." },
  { resource: "OPUS Pricing Simulation", question: "What is the main function of the 'OPUS Pricing Simulation' tool?", correct: "Simulating pricing scenarios and rate models", incorrect: ["Creating container vessel schematics", "Processing staff leave requests", "Generating Incoterm certificates"], explanation: "OPUS Pricing Simulation tests rate structures and profitability before live publishing." },
  { resource: "ONE Quote Pricing Part", question: "What does the 'ONE Quote Pricing' module focus on?", correct: "Digital instant quote engines & rate rules", incorrect: ["Manual breakbulk manifests", "Tender contract archiving", "Terminal electricity costs"], explanation: "ONE Quote governs automated instant quotation rules and spot rate algorithms." },
  { resource: "Pricing Five Factors", question: "Why do pricing teams study the 'Pricing Five Factors' module?", correct: "To evaluate market yield and pricing strategy", incorrect: ["To track crew schedules", "To assign container repair teams", "To inspect port cranes"], explanation: "The Five Factors guide evaluates supply/demand, market rates, cost, volume, and trade yield." },
  { resource: "Freetime and Waiver Request", question: "When should a coordinator consult the 'Freetime and Waiver Request' SOP?", correct: "When processing demurrage/detention waivers", incorrect: ["When booking vessel fuel bunkering", "When submitting a tender bid", "When setting up a new user account"], explanation: "Demurrage and detention free-time extension procedures are detailed in this SOP." },
  { resource: "COD, ROB, and Re-Export Rates", question: "What does 'COD' stand for in trade logistics operations?", correct: "Change of Destination", incorrect: ["Container On Deck", "Cost Of Delivery", "Cargo On Demand"], explanation: "COD stands for Change of Destination when rerouting cargo mid-transit." },
  { resource: "TIGER System Guide", question: "What is the primary operational role of the TIGER System in pricing?", correct: "User interface for pricing entries and approvals", incorrect: ["Vessel navigation software", "Customer survey tool", "Port crane remote controller"], explanation: "TIGER is ONE's pricing interface for entering, filing, and approving freight rates." },
  { resource: "FOB Request and Incoterms", question: "Under standard FOB terms, when does risk transfer to the buyer?", correct: "When goods are loaded on board the vessel", incorrect: ["When goods arrive at final destination", "When invoice is created", "When container enters terminal gate"], explanation: "FOB (Free On Board) transfers risk once goods are safely loaded on board at POL." },
  { resource: "Pricing Initiatives", question: "What is the target objective of 'Pricing Initiatives' documentation?", correct: "Executing rate optimization and yield growth plans", incorrect: ["Maintaining warehouse inventory", "Designing marketing banners", "Scheduling staff shifts"], explanation: "Pricing Initiatives focus on yield improvement and trade corridor revenue optimization." },
  { resource: "Pricing Decision", question: "What vital authority tool is found inside the 'Pricing Decision' guide?", correct: "Approval delegation matrix & threshold levels", incorrect: ["Port customs tax calculator", "Vessel engine manual", "Container painting standards"], explanation: "Pricing Decision details delegation thresholds for managers and pricing analysts." },
  { resource: "SOP per Trade", question: "Why are 'SOP per Trade' documents categorized individually?", correct: "Each trade region has tailored operating rules", incorrect: ["To limit system access", "To track employee attendance", "For printing formatting only"], explanation: "Operating nuances vary across East, West, Japan, Oceania, Breakbulk, and GIFF trades." },
  { resource: "Tender Process", question: "What key asset is provided inside the 'Tender Process' module?", correct: "Standard tender bid templates and lifecycle SOPs", incorrect: ["Daily vessel position map", "Bunkering price indices", "Port pilot contact lists"], explanation: "Tender Process includes bidding frameworks, RFQ templates, and submission workflows." },
  { resource: "COD, ROB, and Re-Export Rates", question: "What does 'ROB' stand for in ocean shipping terms?", correct: "Restow On Board", incorrect: ["Return On Berth", "Rate Of Booking", "Re-Export On Barge"], explanation: "ROB (Restow On Board) applies when containers are shifted on board to access other cargo." },
  { resource: "Freetime and Waiver Request", question: "What happens if a container stays past the allowed freetime without a waiver?", correct: "Demurrage or Detention charges are incurred", incorrect: ["The cargo is returned to shipper immediately", "Freight charges are refunded", "Vessel sailing is delayed"], explanation: "Overstaying allotted free days generates demurrage/detention charges." },
  { resource: "ONE Quote Pricing Part", question: "Which rate type is primarily issued through ONE Quote?", correct: "Instant spot rates and short-term quotes", incorrect: ["Long-term 5-year government tenders", "Crew wage contracts", "Feeder vessel charter rates"], explanation: "ONE Quote automates instant short-term spot quotations for cargo bookings." },
  { resource: "Shipping Information", question: "Which document contains official cut-off times for terminal container gate-in?", correct: "Shipping Information / Vessel Schedule", incorrect: ["Staff Payroll Form", "Incoterm Standard 2020", "Office Expense Log"], explanation: "Terminal gate-in cut-off times are listed in vessel schedules under Shipping Information." },
  { resource: "Pricing Five Factors", question: "Which of the following is considered one of the core pricing factors?", correct: "Market Competition & Supply-Demand", incorrect: ["Office desk layout", "Vessel paint color", "IT server hardware manufacturer"], explanation: "Market competition and space capacity are fundamental pricing factors." },
  { resource: "TIGER System Guide", question: "Can a pricing analyst approve rates above their assigned authority threshold in TIGER?", correct: "No, higher approval from Manager/Supervisor is needed", incorrect: ["Yes, thresholds can be bypassed anytime", "Yes, if the customer requests it", "No, rates are automatically rejected forever"], explanation: "TIGER enforces delegation thresholds requiring higher manager sign-off when exceeded." },
  { resource: "FOB Request and Incoterms", question: "Who pays for main ocean carriage under CIF (Cost, Insurance & Freight)?", correct: "The Seller", incorrect: ["The Buyer", "The Terminal Operator", "The Customs Broker"], explanation: "Under CIF, the seller pays ocean freight and marine insurance to the destination port." },
  { resource: "SOP per Trade", question: "Where should an analyst check for specific local surcharge rules in East Asia?", correct: "East Trade SOP Documentation", incorrect: ["Breakbulk Manual Only", "General IT Guidebook", "Global Fleet Engine Manual"], explanation: "Trade-specific SOPs detail local surcharges and region-specific guidelines." }
];

const quizData = rawQuizData.map(q => {
  const opts = shuffleArray([q.correct, ...q.incorrect]);
  return { resource: q.resource, question: q.question, options: opts, answer: opts.indexOf(q.correct), explanation: q.explanation };
});

// =========================================================
// GAME 2 DATA: GUESS THE POL / POD (20 QUESTIONS)
// =========================================================
const rawPolData = [
  { prompt: "SGPSS (Singapore Port)", correct: "Singapore", incorrect: ["Malaysia", "Vietnam", "Thailand"], exp: "SGPSS is UN/LOCODE for Singapore Terminal Port." },
  { prompt: "JPTYO (Tokyo Port)", correct: "Japan", incorrect: ["South Korea", "China", "Taiwan"], exp: "JPTYO represents Tokyo Port in Japan." },
  { prompt: "CNSHA (Shanghai Port)", correct: "China", incorrect: ["Hong Kong", "Philippines", "Indonesia"], exp: "CNSHA is Shanghai, one of the world's largest container ports." },
  { prompt: "PHMNL (Manila Port)", correct: "Philippines", incorrect: ["Indonesia", "Malaysia", "Singapore"], exp: "PHMNL is the gateway port in Manila, Philippines." },
  { prompt: "KRPUS (Busan Port)", correct: "South Korea", incorrect: ["Japan", "China", "Taiwan"], exp: "KRPUS is the main container hub in Busan, South Korea." },
  { prompt: "MYPKG (Port Klang)", correct: "Malaysia", incorrect: ["Indonesia", "Thailand", "Singapore"], exp: "MYPKG represents Port Klang, Malaysia's main seaport." },
  { prompt: "THBKK (Bangkok Port)", correct: "Thailand", incorrect: ["Vietnam", "Cambodia", "Myanmar"], exp: "THBKK is Bangkok Port in Thailand." },
  { prompt: "VNSGN (Ho Chi Minh City / Saigon)", correct: "Vietnam", incorrect: ["Thailand", "Philippines", "Malaysia"], exp: "VNSGN represents Ho Chi Minh City ports in Vietnam." },
  { prompt: "IDTPP (Tanjung Priok, Jakarta)", correct: "Indonesia", incorrect: ["Malaysia", "Philippines", "Brunei"], exp: "IDTPP is Jakarta's main container port in Indonesia." },
  { prompt: "HKHKG (Hong Kong Port)", correct: "Hong Kong", incorrect: ["Taiwan", "Singapore", "Macau"], exp: "HKHKG is the global transshipment hub of Hong Kong." },
  { prompt: "TWKHH (Kaohsiung Port)", correct: "Taiwan", incorrect: ["China", "Japan", "South Korea"], exp: "TWKHH represents Kaohsiung, the largest port in Taiwan." },
  { prompt: "JPYOK (Yokohama Port)", correct: "Japan", incorrect: ["South Korea", "China", "Taiwan"], exp: "JPYOK is Yokohama Port in Japan." },
  { prompt: "CNNBO (Ningbo-Zhoushan Port)", correct: "China", incorrect: ["Japan", "South Korea", "Vietnam"], exp: "CNNBO is Ningbo, a major container port in East China." },
  { prompt: "SGSIN (Singapore Transshipment)", correct: "Singapore", incorrect: ["Malaysia", "Indonesia", "Thailand"], exp: "SGSIN is widely used for Singapore transshipment bookings." },
  { prompt: "MYTPP (Tanjung Pelepas)", correct: "Malaysia", incorrect: ["Indonesia", "Singapore", "Philippines"], exp: "MYTPP represents Port of Tanjung Pelepas, Malaysia." },
  { prompt: "THLCH (Laem Chabang Port)", correct: "Thailand", incorrect: ["Vietnam", "Malaysia", "Myanmar"], exp: "THLCH is Laem Chabang, Thailand's main deep-sea port." },
  { prompt: "VNDAD (Da Nang Port)", correct: "Vietnam", incorrect: ["Thailand", "Cambodia", "Philippines"], exp: "VNDAD represents Da Nang Port in Central Vietnam." },
  { prompt: "AUDRW (Darwin Port)", correct: "Australia (Oceania)", incorrect: ["New Zealand", "Fiji", "Papua New Guinea"], exp: "AUDRW is Darwin Port in Australia." },
  { prompt: "NZAKL (Auckland Port)", correct: "New Zealand (Oceania)", incorrect: ["Australia", "Fiji", "Samoa"], exp: "NZAKL is Auckland, New Zealand's primary container hub." },
  { prompt: "PGPOM (Port Moresby)", correct: "Papua New Guinea (Oceania)", incorrect: ["Fiji", "Australia", "New Zealand"], exp: "PGPOM represents Port Moresby in Papua New Guinea." }
];

const polData = rawPolData.map(item => {
  const opts = shuffleArray([item.correct, ...item.incorrect]);
  return { prompt: item.prompt, options: opts, answer: opts.indexOf(item.correct), exp: item.exp };
});

// =========================================================
// GAME 3 DATA: SHIPPING ACRONYM MATCHER (20 QUESTIONS)
// =========================================================
const rawPuzzleData = [
  { term: "TEU", correct: "Twenty-foot Equivalent Unit", incorrect: ["Total Export Utilization", "Terminal Engine Unit", "Trade Entry Umbrella"], exp: "TEU is standard measure for container capacity." },
  { term: "BAF", correct: "Bunker Adjustment Factor", incorrect: ["Basic Allowance Fee", "Border Approval Format", "Bulk Allocation Freight"], exp: "BAF adjusts freight rates for fuel price changes." },
  { term: "CY / CFS", correct: "Container Yard / Container Freight Station", incorrect: ["Customs Yard / Cargo Forwarding Service", "Control Zone / Central Freight System", "Cargo Yard / Crane Flight System"], exp: "CY handles FCL containers; CFS handles LCL cargo." },
  { term: "ETA / ETD", correct: "Estimated Time of Arrival / Departure", incorrect: ["Export Tax Adjustment / Departure", "Emergency Transit Allowance", "Entry Terminal Authority"], exp: "ETA and ETD track vessel port schedules." },
  { term: "POL / POD", correct: "Port of Loading / Port of Discharge", incorrect: ["Payment on Loading / Delivery", "Priority Operational Line", "Primary Overseas Depot"], exp: "POL is origin port; POD is destination port." },
  { term: "CAF", correct: "Currency Adjustment Factor", incorrect: ["Container Allowance Fee", "Customs Clearance Fee", "Cargo Approval Format"], exp: "CAF offsets currency exchange rate fluctuations." },
  { term: "THC", correct: "Terminal Handling Charge", incorrect: ["Transit Haul Cost", "Total Freight Surcharge", "Trade Harbor Clearance"], exp: "THC covers container handling costs at ports." },
  { term: "FCL / LCL", correct: "Full Container Load / Less than Container Load", incorrect: ["Final Cargo List / Local Cargo List", "Fast Container Line / Light Container Line", "Forward Clearance Log / Local Log"], exp: "FCL is a dedicated container; LCL is shared cargo." },
  { term: "BL / BoL", correct: "Bill of Lading", incorrect: ["Border License", "Booking Log", "Bulk Loading List"], exp: "The Bill of Lading is the official legal transport document." },
  { term: "SOC / COC", correct: "Shipper Owned Container / Carrier Owned Container", incorrect: ["System Operator Code / Cargo Code", "Storage On Crane / Clearance On CY", "Standard Ocean Cargo / Carrier Cargo"], exp: "SOC belongs to shipper; COC belongs to ONE carrier." },
  { term: "D/O", correct: "Delivery Order", incorrect: ["Dispatch Officer", "Demurrage Option", "Deck Operation"], exp: "A Delivery Order releases cargo to consignee at destination." },
  { term: "POD (Receipt)", correct: "Proof of Delivery", incorrect: ["Port of Destination", "Port Operator Depot", "Primary Order Document"], exp: "In cargo claims, POD confirms goods were safely delivered." },
  { term: "L/C", correct: "Letter of Credit", incorrect: ["Loading Certificate", "Liner Contract", "Local Charge"], exp: "L/C is a financial bank guarantee used in international trade." },
  { term: "NVOCC", correct: "Non-Vessel Operating Common Carrier", incorrect: ["National Vessel Operations Customs Council", "New Cargo Transport Commission", "Navigational Vessel Officer Code"], exp: "NVOCCs issue BLs without operating their own ships." },
  { term: "O/F", correct: "Ocean Freight", incorrect: ["Official Fee", "Operational Framework", "Overseas Forwarder"], exp: "O/F is basic sea carriage cost from POL to POD." },
  { term: "VGM", correct: "Verified Gross Mass", incorrect: ["Vessel Gate Manifest", "Value Goods Margin", "Volume Gross Meter"], exp: "SOLAS requires VGM weight certification before loading." },
  { term: "ISPS", correct: "International Ship and Port Facility Security", incorrect: ["International Shipping Payment System", "Inland Storage Pricing Standard", "Integrated Sea Port Service"], exp: "ISPS code enforces maritime security at ports." },
  { term: "DG", correct: "Dangerous Goods / Hazardous Cargo", incorrect: ["Direct Gate-in", "Demurrage Guarantee", "Destination Group"], exp: "DG cargo requires specialized IMDG handling approvals." },
  { term: "OOG", correct: "Out of Gauge Cargo", incorrect: ["Ocean Operations Guide", "Official Origin Guarantee", "Overseas Order Group"], exp: "OOG cargo exceeds standard container dimensions." },
  { term: "FEU", correct: "Forty-foot Equivalent Unit", incorrect: ["Freight Forwarding Unit", "Feeder Export Unit", "Foreign Exchange Unit"], exp: "FEU represents one standard 40ft container." }
];

const puzzleData = rawPuzzleData.map(item => {
  const opts = shuffleArray([item.correct, ...item.incorrect]);
  return { term: item.term, options: opts, answer: opts.indexOf(item.correct), exp: item.exp };
});

// DOM ELEMENTS
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

// CONFETTI EFFECT
function triggerConfetti() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0.2, y: 0.6 } });
    confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 0.8, y: 0.6 } });
  }
}

// TEAM ORG MODAL LISTENER
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
    card.className = "resource-card hover-card";
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

// OPEN RESOURCE MODAL (UPDATED TO BE LARGER & READABLE)
function openResourceModal(item) {
  const pdfViewerUrl = `${item.fileUrl}#toolbar=1&navpanes=0&view=FitH`;

  modalBody.innerHTML = `
    <h3 style="margin-bottom:6px; font-size:20px;">${item.title}</h3>
    <p style="color:var(--text-muted); font-size:13px; margin-bottom:15px;">${item.description}</p>
    <div style="height:600px; width:100%;">
      <iframe src="${pdfViewerUrl}" width="100%" height="100%" style="border:none; border-radius:8px;"></iframe>
    </div>
    <div style="margin-top: 15px; text-align: right;">
      <a href="${item.fileUrl}" target="_blank" class="btn btn-primary" style="display:inline-block; font-size:13px; padding:10px 18px;">
        Open Full Presentation ↗
      </a>
    </div>
  `;
  resourceModal.classList.add("active");
}

// =========================================================
// ARCADE CENTER GAME CONTROLLERS
// =========================================================

// GAME TAB SWITCHER
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

// --- ENGINE GAME 1: RESOURCE QUIZ (20 QUESTIONS) ---
let currentQuizIdx = 0, quizScore = 0, canAnswerQuiz = true;

function loadQuizQuestion() {
  canAnswerQuiz = true;
  const item = quizData[currentQuizIdx];
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

// --- ENGINE GAME 2: GUESS POL / POD (20 QUESTIONS) ---
let polIdx = 0, polScore = 0, canAnswerPol = true;

function loadPolQuestion() {
  canAnswerPol = true;
  const item = polData[polIdx];
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

// --- ENGINE GAME 3: ACRONYM MATCHER (20 QUESTIONS) ---
let puzIdx = 0, puzScore = 0, canAnswerPuz = true;

function loadPuzzleQuestion() {
  canAnswerPuz = true;
  const item = puzzleData[puzIdx];
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

// INITIALIZATION & EVENT CONTROLS
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

// INITIAL RUN ON LOAD
renderMaterials();
loadQuizQuestion();