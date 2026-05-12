const STORAGE_KEY = "northstar-planner-v1";
const BUDGET_PLANNER_CLEANUP_MIGRATION_KEY = "personalDockBudgetPlannerCleanupDone";
const LEGACY_ACTION_STORAGE_KEY = "actionboard-v1";
const ACTION_DAILY_STORAGE_KEY = "dockActionDailyBoards";
const DEFAULT_VIEW = "actionBoard";
const BACKUP_FORMAT = "personaldock-backup";
const BACKUP_VERSION = 1;
const EXPENSE_TRACKER_STORAGE_KEY = "personaldock-expense-tracker-v1";
const EXPENSE_TRACKER_DEFAULT_CATEGORY = "Groceries";
const EXPENSE_TRACKER_CATEGORIES = ["Groceries", "Household"];
const EXPENSE_TRACKER_STARTER_MERCHANTS = {
  Groceries: ["Whole Foods", "Trader Joe's"],
  Household: ["Walmart"]
};
const BUDGET_PLANNING_PERIODS = ["week", "month", "year"];
const DEFAULT_BUDGET_PLANNING_PERIOD = "month";
const BUDGET_PLANNING_PERIOD_LABELS = {
  week: "Weekly",
  month: "Monthly",
  year: "Yearly"
};

const VIEW_DETAILS = {
  dashboard: "Quickly review today's priorities and recent notes.",
  actionBoard: "Organize tasks by energy, urgency, and life context.",
  waitingFor: "Run your GTD capture, context lists, waiting items, projects, reference, and someday lists from one place.",
  budgetPlanner: "Track personal spending items so income, spending, and progress stay visible.",
  expenseTracker: "Log expenses quickly with weekly, monthly, and yearly totals split by currency.",
  budgetPlanning: "Plan and track weekly, monthly, and yearly budgets in a separate planning workspace.",
  planner: "Plan your day, set goals, capture notes, and track short-term plans in one place.",
  promise: "Record commitments and promises you have made to other people.",
  diary: "Write and revisit your daily journal entries.",
  bits: "Capture small fragments, quick thoughts, and scattered everyday life details.",
  calendar: "View and manage your schedule in a monthly calendar.",
  datesBoard: "Track countdowns, reminders, and special dates all in one place.",
  lessonsLearned: "Record personal reflections, insights, and lessons learned over time.",
  settings: "Manage backups, import data, and adjust app preferences."
};

const PLANNER_SECTION_DEFINITIONS = [
  { id: "daily-plan", title: "Daily Plan" },
  { id: "goals", title: "Goals" },
  { id: "notes", title: "Notes" }
];

const WAITING_STATUSES = ["Waiting", "Follow Up", "Received", "Done"];
const GTD_CONTEXT_OPTIONS = ["", "@Mac", "@Phone", "@Home", "@Errands", "@Work"];
const GTD_EMPTY_CONTEXT_LABEL = "No context yet";

const LEFT_COLUMN_SECTION_IDS = ["deepWork", "easyWork", "top3PrioritiesToday"];
const QUADRANT_SECTION_IDS = [
  "importantUrgent",
  "importantNotUrgent",
  "notImportantUrgent",
  "notImportantNotUrgent"
];
const TASK_LIMITS = {
  top3PrioritiesToday: 3
};
const TASK_LIMIT_MESSAGES = {
  top3PrioritiesToday: "You can only keep 3 top priorities."
};
const LEGACY_ACTION_SAMPLE_TASKS = {
  deepWork: ["Outline the project", "Focus on one lesson", "Clean up a core workflow"],
  easyWork: ["Tidy the desktop", "Back up computer files", "Do and fold the laundry"],
  importantUrgent: ["Finish today's must-deliver item"],
  importantNotUrgent: ["Move the long-term learning plan forward", "Maintain the weekly exercise habit"],
  notImportantUrgent: ["Reply to urgent but low-value messages"],
  notImportantNotUrgent: ["Casual browsing", "Catch up on social feeds"],
  mealPlan: ["Breakfast: oats and eggs", "Lunch: rice, vegetables, and protein", "Dinner: keep it light"],
  life: ["Restock daily essentials", "Refresh one room"],
  exercise: ["Walk for 20 minutes", "Stretch before dinner"],
  eveningNight: ["Take a shower", "Write tomorrow's top three", "Keep phone time short before bed"],
  extraLearning: ["Practice JavaScript", "Study SwiftUI basics", "Improve how you use AI tools"],
  weirdIdeas: ["Sketch a small life-system app idea"],
  memo: ["Drop quick reminders here"]
};

const ACTION_SECTION_DEFINITIONS = [
  {
    id: "deepWork",
    title: "Deep Work",
    emoji: "DI",
    accent: "#d6ede6",  /* cool sage-teal — focus / deep concentration */
    size: "featured",
    sampleTasks: []
  },
  {
    id: "easyWork",
    title: "Easy Tasks",
    emoji: "EZ",
    accent: "#ddf8d2",  /* bright lime pastel — light energy */
    size: "featured",
    sampleTasks: []
  },
  {
    id: "top3PrioritiesToday",
    title: "Top 3 Priorities Today",
    emoji: "T3",
    accent: "#d8f5e4",  /* clean mint — daily clarity */
    size: "",
    sampleTasks: []
  },
  {
    id: "importantUrgent",
    title: "Important & Urgent",
    emoji: "!!",
    accent: "#c8eed8",  /* saturated emerald — high alert */
    size: "",
    sampleTasks: []
  },
  {
    id: "importantNotUrgent",
    title: "Important but Not Urgent",
    emoji: "++",
    accent: "#d2f0e0",  /* growth emerald — plan ahead */
    size: "",
    sampleTasks: []
  },
  {
    id: "notImportantUrgent",
    title: "Not Important but Urgent",
    emoji: "->",
    accent: "#e4f8ec",  /* soft neutral mint — delegate */
    size: "",
    sampleTasks: []
  },
  {
    id: "notImportantNotUrgent",
    title: "Not Important and Not Urgent",
    emoji: "--",
    accent: "#eef8f2",  /* barely-there green — low priority */
    size: "",
    sampleTasks: []
  },
  {
    id: "mealPlan",
    title: "Meal Plan",
    emoji: "MP",
    accent: "#dcf5e8",  /* fresh spring green — nourishment */
    size: "tall",
    sampleTasks: []
  },
  {
    id: "life",
    title: "Life",
    emoji: "LF",
    accent: "#d0ede4",  /* warm sage — life balance */
    size: "",
    sampleTasks: []
  },
  {
    id: "exercise",
    title: "Exercise",
    emoji: "EX",
    accent: "#c4f0cc",  /* vivid lime — peak energy */
    size: "",
    sampleTasks: []
  },
  {
    id: "eveningNight",
    title: "Evening / Night",
    emoji: "PM",
    accent: "#e2f5eb",  /* calm dusk green — wind down */
    size: "tall",
    sampleTasks: []
  },
  {
    id: "extraLearning",
    title: "Extra Learning",
    emoji: "XL",
    accent: "#d6ece2",  /* knowledge sage — study */
    size: "",
    sampleTasks: []
  },
  {
    id: "weirdIdeas",
    title: "Weird Ideas",
    emoji: "WI",
    accent: "#c8f0d8",  /* bright idea-lime — creative */
    size: "",
    sampleTasks: []
  },
  {
    id: "memo",
    title: "Memo",
    emoji: "MM",
    accent: "#e6f8ef",  /* lightest mint — reference */
    size: "",
    sampleTasks: []
  }
];

const BUDGET_CATEGORY_DEFINITIONS = [
  {
    id: "monthlyBudget",
    title: "Monthly Budget",
    sampleItems: [
      { title: "Groceries and ingredients", amount: 240 },
      { title: "Transportation", amount: 90 },
      { title: "Daily buffer", amount: 120 }
    ]
  },
  {
    id: "payroll",
    title: "Payroll",
    sampleItems: [
      { title: "Main job income", amount: 3200, checked: true },
      { title: "Freelance income", amount: 450 }
    ]
  },
  {
    id: "wishlist",
    title: "Wishlist",
    sampleItems: [
      { title: "Desk lamp", amount: 78 },
      { title: "Weekend cafe budget", amount: 35 }
    ]
  },
  {
    id: "travel",
    title: "Travel",
    sampleItems: [
      { title: "Train tickets", amount: 96 },
      { title: "Hotel deposit", amount: 180 }
    ]
  },
  {
    id: "savings",
    title: "Savings",
    sampleItems: [
      { title: "Emergency fund", amount: 300, checked: true },
      { title: "Learning fund", amount: 120 }
    ]
  },
  {
    id: "bills",
    title: "Bills",
    sampleItems: [
      { title: "Internet", amount: 45, checked: true },
      { title: "Phone", amount: 28 },
      { title: "Utilities", amount: 110 }
    ]
  },
  {
    id: "shopping",
    title: "Shopping",
    sampleItems: [
      { title: "Notebook refill", amount: 18 },
      { title: "Skincare restock", amount: 42 }
    ]
  }
];

const DEFAULT_BUDGET_CATEGORY_ID = "monthlyBudget";

const DEFAULT_NOTES = [
  "Keep the day small enough that you still have energy left at the end.",
  "Protect deep work time before opening your messages.",
  "Review your budget once in the evening instead of checking it all day."
];

const DEFAULT_WAITING_ITEMS = [
  {
    title: "Expense reimbursement confirmation",
    person: "Finance team",
    status: "Waiting",
    dueDate: "2026-04-29",
    note: "Waiting for confirmation on whether more receipts are needed."
  },
  {
    title: "Collaboration material reply",
    person: "Project collaborator",
    status: "Follow Up",
    dueDate: "2026-04-30",
    note: "Follow up once if there is still no reply before Wednesday."
  },
  {
    title: "Delivery arrival notice",
    person: "Store",
    status: "Received",
    dueDate: "2026-05-02",
    note: "Arrange receipt after the shipping update comes through."
  }
];

const DEFAULT_INBOX_ITEMS = [
  "Capture a loose idea before it turns into background stress."
];

const DEFAULT_PROJECTS = [
  {
    title: "Refresh the weekly reset",
    note: "Keep the checklist short enough that it actually gets used every Sunday."
  }
];

const DEFAULT_SOMEDAY_ITEMS = [
  {
    title: "Try a small weekend workshop",
    note: "Keep the idea visible without committing time to it yet."
  }
];

const DEFAULT_REFERENCE_ITEMS = [
  {
    title: "Home account notes",
    link: "",
    note: "Keep router, utility, or subscription details here when they are reference-only."
  }
];

const PRIORITY_ORDER = [
  "top3PrioritiesToday",
  "importantUrgent",
  "deepWork",
  "importantNotUrgent",
  "mealPlan",
  "life",
  "exercise",
  "eveningNight"
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0
});

const cnyFormatter = new Intl.NumberFormat("zh-CN", {
  style: "currency",
  currency: "CNY",
  maximumFractionDigits: 0
});

// Update this value manually to change the exchange rate used for totals.
const CNY_TO_USD_RATE = 0.138;

function normalizeBudgetCurrency(value) {
  if (typeof value !== "string") {
    return "USD";
  }

  const normalized = value.trim().toUpperCase();

  if (normalized === "CNY" || normalized === "RMB" || normalized === "\u00a5" || normalized === "R") {
    return "CNY";
  }

  return "USD";
}

function formatBudgetUsdAmount(amount) {
  const safeAmount = Number(amount);
  return `$${(Number.isFinite(safeAmount) ? safeAmount : 0).toFixed(2)}`;
}

function formatBudgetRmbAmount(amount) {
  const safeAmount = Number(amount);
  const fixed = (Number.isFinite(safeAmount) ? safeAmount : 0)
    .toFixed(2)
    .replace(/\.00$/, "")
    .replace(/(\.\d)0$/, "$1");

  return `R${fixed}`;
}

function createSplitCurrencyTotals() {
  return {
    usd: 0,
    rmb: 0,
    hasUsd: false,
    hasRmb: false
  };
}

function getSplitCurrencyTotalsFromBudgetItems(items) {
  return items.reduce((totals, item) => {
    const amount = Number(item?.amount);
    const safeAmount = Number.isFinite(amount) ? amount : 0;
    const currency = normalizeBudgetCurrency(item?.currency);

    if (currency === "CNY") {
      totals.hasRmb = true;
      totals.rmb += safeAmount;
    } else {
      totals.hasUsd = true;
      totals.usd += safeAmount;
    }

    return totals;
  }, createSplitCurrencyTotals());
}

function formatBudgetSplitTotalDisplay(totals) {
  const usdRaw = totals?.usd ?? totals?.USD;
  const rmbRaw = totals?.rmb ?? totals?.RMB;
  const usd = Number.isFinite(Number(usdRaw)) ? Number(usdRaw) : 0;
  const rmb = Number.isFinite(Number(rmbRaw)) ? Number(rmbRaw) : 0;
  const hasUsd = typeof totals?.hasUsd === "boolean" ? totals.hasUsd : usd !== 0;
  const hasRmb = typeof totals?.hasRmb === "boolean" ? totals.hasRmb : rmb !== 0;

  if (!hasUsd && !hasRmb) {
    return "$0";
  }

  if (hasUsd && hasRmb) {
    return `${formatBudgetUsdAmount(usd)} + ${formatBudgetRmbAmount(rmb)}`;
  }

  if (hasUsd) {
    return formatBudgetUsdAmount(usd);
  }

  return formatBudgetRmbAmount(rmb);
}

function itemAmountInUSD(item) {
  const currency = normalizeBudgetCurrency(item?.currency);
  return currency === "CNY" ? item.amount * CNY_TO_USD_RATE : item.amount;
}

function formatBudgetAmount(amount, currency) {
  const normalizedCurrency = normalizeBudgetCurrency(currency);

  if (normalizedCurrency === "CNY") {
    return formatBudgetRmbAmount(amount);
  }

  return formatBudgetUsdAmount(amount);
}

const viewRoot = document.getElementById("viewRoot");
const actionTemplate = document.getElementById("actionSectionTemplate");
const budgetItemTemplate = document.getElementById("budgetItemTemplate");
const viewNav = document.getElementById("viewNav");
const importJsonInput = document.getElementById("importJsonInput");
const viewDescription = document.getElementById("viewDescription");
const todayStamp = document.getElementById("todayStamp");
const appSidebar = document.querySelector(".app-sidebar");
const sidebarHoverZone = document.getElementById("sidebarHoverZone");
const SIDEBAR_SHOW_DELAY_MS = 24;
const SIDEBAR_HIDE_DELAY_MS = 230;
const sidebarAutoRevealMediaQuery = window.matchMedia("(min-width: 861px) and (hover: hover) and (pointer: fine)");

let sidebarShowTimer = null;
let sidebarHideTimer = null;
let isSidebarHovered = false;
let isSidebarZoneHovered = false;

runBudgetPlannerCleanupMigration();

let appState = loadState();
let uiState = {
  activeView: DEFAULT_VIEW,
  selectedBudgetCategory: appState.selectedBudgetCategory,
  budgetEditorId: null,
  showBudgetCategoryManager: false,
  calendarYear: new Date().getFullYear(),
  calendarMonth: new Date().getMonth(),
  calendarWeekStart: null,  // ISO date string for Monday of displayed week; null = use today's week
  calendarViewMode: "week",  // "week" | "day"
  calendarEventListTab: "current",  // "current" | "upcoming" in the right sidebar list
  calendarPickerOpen: false,     // mini month-picker panel open
  calendarPickerMonth: null,     // 0-11, month shown in picker; null = sync from view on open
  calendarPickerYear: null,      // year shown in picker
  justCompletedTaskId: null,  // task id for the fade-in animation in the completed panel
  expandedTaskIds: new Set(),  // task ids whose details panel is open
  selectedPlannerSection: "all",  // planner section filter
  selectedBudgetPlanningPeriod: DEFAULT_BUDGET_PLANNING_PERIOD,
  actionBoardDate: null,       // ISO date string; null = today
  actionBoardWeekStart: null   // ISO date string for Monday of the displayed ab week; null = this week
};
let backupUiState = {
  message: "Export a JSON backup or import one to restore your current data.",
  tone: "info",
  historyEntries: []
};
let _calendarDragAbort = null;
let _calendarPickerAbort = null;
let _calendarNowLineTimer = null;
let _abCopySelectAbort = null;

// Active Action Board daily sections — set when the action board is rendered,
// cleared when navigating away. All board mutations operate on this reference.
let _activeDailySections = null;
let _activeDailyDate = null;

function getTodayIso() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;
}

function getActiveSections() {
  return _activeDailySections || appState.actionSections;
}

function saveActiveDailyBoard() {
  if (_activeDailySections && _activeDailyDate) {
    setDailyBoard(_activeDailyDate, _activeDailySections);
  }
}

function setActiveDailyBoard(dateStr) {
  _activeDailyDate = dateStr;
  _activeDailySections = getDailyBoard(dateStr);
}

function clearActiveDailyBoard() {
  _activeDailySections = null;
  _activeDailyDate = null;
}

function clearSidebarRevealTimers() {
  if (sidebarShowTimer !== null) {
    window.clearTimeout(sidebarShowTimer);
    sidebarShowTimer = null;
  }

  if (sidebarHideTimer !== null) {
    window.clearTimeout(sidebarHideTimer);
    sidebarHideTimer = null;
  }
}

function setSidebarVisible(isVisible) {
  if (!appSidebar) {
    return;
  }

  const visible = Boolean(isVisible);

  document.body.classList.toggle("sidebar-visible", visible);
  appSidebar.setAttribute("aria-hidden", visible ? "false" : "true");

  if (visible) {
    appSidebar.removeAttribute("inert");
  } else {
    appSidebar.setAttribute("inert", "");
  }
}

function revealSidebarWithDelay(delay = SIDEBAR_SHOW_DELAY_MS) {
  clearSidebarRevealTimers();
  sidebarShowTimer = window.setTimeout(() => {
    setSidebarVisible(true);
    sidebarShowTimer = null;
  }, delay);
}

function concealSidebarWithDelay(delay = SIDEBAR_HIDE_DELAY_MS) {
  if (!document.body.classList.contains("sidebar-auto")) {
    return;
  }

  if (sidebarShowTimer !== null) {
    window.clearTimeout(sidebarShowTimer);
    sidebarShowTimer = null;
  }

  if (sidebarHideTimer !== null) {
    window.clearTimeout(sidebarHideTimer);
  }

  sidebarHideTimer = window.setTimeout(() => {
    if (isSidebarHovered || isSidebarZoneHovered) {
      sidebarHideTimer = null;
      return;
    }

    setSidebarVisible(false);
    sidebarHideTimer = null;
  }, delay);
}

function applySidebarAutoRevealMode() {
  if (!appSidebar || !sidebarHoverZone) {
    return;
  }

  const shouldAutoReveal = sidebarAutoRevealMediaQuery.matches;

  document.body.classList.toggle("sidebar-auto", shouldAutoReveal);

  clearSidebarRevealTimers();
  isSidebarHovered = false;
  isSidebarZoneHovered = false;

  if (shouldAutoReveal) {
    setSidebarVisible(false);
  } else {
    setSidebarVisible(true);
  }
}

function initializeSidebarAutoReveal() {
  if (!appSidebar || !sidebarHoverZone) {
    return;
  }

  sidebarHoverZone.addEventListener("mouseenter", () => {
    if (!document.body.classList.contains("sidebar-auto")) {
      return;
    }

    isSidebarZoneHovered = true;
    revealSidebarWithDelay();
  });

  sidebarHoverZone.addEventListener("mouseleave", () => {
    if (!document.body.classList.contains("sidebar-auto")) {
      return;
    }

    isSidebarZoneHovered = false;
    concealSidebarWithDelay();
  });

  appSidebar.addEventListener("mouseenter", () => {
    if (!document.body.classList.contains("sidebar-auto")) {
      return;
    }

    isSidebarHovered = true;
    revealSidebarWithDelay(0);
  });

  appSidebar.addEventListener("mouseleave", () => {
    if (!document.body.classList.contains("sidebar-auto")) {
      return;
    }

    isSidebarHovered = false;
    concealSidebarWithDelay();
  });

  appSidebar.addEventListener("focusin", () => {
    if (!document.body.classList.contains("sidebar-auto")) {
      return;
    }

    isSidebarHovered = true;
    revealSidebarWithDelay(0);
  });

  appSidebar.addEventListener("focusout", event => {
    if (!document.body.classList.contains("sidebar-auto")) {
      return;
    }

    if (event.relatedTarget instanceof Node && appSidebar.contains(event.relatedTarget)) {
      return;
    }

    isSidebarHovered = false;
    concealSidebarWithDelay();
  });

  if (typeof sidebarAutoRevealMediaQuery.addEventListener === "function") {
    sidebarAutoRevealMediaQuery.addEventListener("change", applySidebarAutoRevealMode);
  } else if (typeof sidebarAutoRevealMediaQuery.addListener === "function") {
    sidebarAutoRevealMediaQuery.addListener(applySidebarAutoRevealMode);
  }

  applySidebarAutoRevealMode();
}

function createId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeTaskContext(context) {
  return typeof context === "string" ? context.trim() : "";
}

function createTask(title, done = false, options = {}) {
  return {
    id: createId(),
    title,
    done,
    context: normalizeTaskContext(options.context),
    projectId: typeof options.projectId === "string" ? options.projectId : "",
    note: "",
    subtasks: []
  };
}

function normalizeTaskRecord(task) {
  if (typeof task === "string") {
    return createTask(task);
  }

  const title = typeof task?.title === "string" ? task.title.trim() : "";

  if (!title) {
    return null;
  }

  return {
    id: task.id || createId(),
    title,
    done: Boolean(task.done),
    context: normalizeTaskContext(task.context),
    projectId: typeof task?.projectId === "string" ? task.projectId : "",
    note: typeof task?.note === "string" ? task.note : "",
    subtasks: Array.isArray(task?.subtasks)
      ? task.subtasks.map(s => {
          if (!s || typeof s?.title !== "string" || !s.title.trim()) return null;
          return { id: s.id || createId(), title: s.title.trim(), done: Boolean(s.done) };
        }).filter(Boolean)
      : []
  };
}

function createBudgetItem(title, amount, checked = false, currency = "USD") {
  return {
    id: createId(),
    title,
    amount: Number(amount) || 0,
    currency: normalizeBudgetCurrency(currency),
    checked,
    sortOrder: null,
    itemNote: "",
    reminders: [],
    checklist: []
  };
}

function createBudgetCategory(title, note = "", todos = []) {
  return {
    id: createBudgetCategoryId(title),
    title,
    items: [],
    note: typeof note === "string" ? note.trim() : "",
    todos: Array.isArray(todos)
      ? todos.map(t => ({
          id: t.id || createId(),
          title: (typeof t.title === "string" ? t.title : String(t)).trim(),
          done: Boolean(t.done)
        })).filter(t => t.title)
      : []
  };
}

function normalizeBudgetPlanningPeriodId(periodId) {
  return BUDGET_PLANNING_PERIODS.includes(periodId) ? periodId : DEFAULT_BUDGET_PLANNING_PERIOD;
}

function createBudgetPlanningEntry({ title, amount, currency = "USD", type = "planned", createdAt = new Date().toISOString() }) {
  return {
    id: createId(),
    title,
    amount: Number(amount) || 0,
    currency: normalizeBudgetCurrency(currency),
    type: type === "tracked" ? "tracked" : "planned",
    createdAt
  };
}

function normalizeBudgetPlannerTarget(rawTarget) {
  if (rawTarget === null || rawTarget === undefined) {
    return null;
  }

  if (typeof rawTarget === "string" && !rawTarget.trim()) {
    return null;
  }

  if (typeof rawTarget === "object" && !Array.isArray(rawTarget)) {
    const parsedAmount = Number(rawTarget.amount);

    if (!Number.isFinite(parsedAmount) || parsedAmount < 0) {
      return null;
    }

    return {
      amount: parsedAmount,
      currency: normalizeBudgetCurrency(rawTarget.currency)
    };
  }

  const parsedAmount = Number(rawTarget);

  if (!Number.isFinite(parsedAmount) || parsedAmount < 0) {
    return null;
  }

  return {
    amount: parsedAmount,
    currency: "USD"
  };
}

function convertBudgetPlanningAmount(amount, fromCurrency, toCurrency) {
  const safeAmount = Number(amount);

  if (!Number.isFinite(safeAmount)) {
    return 0;
  }

  const sourceCurrency = normalizeBudgetCurrency(fromCurrency);
  const targetCurrency = normalizeBudgetCurrency(toCurrency);

  if (sourceCurrency === targetCurrency) {
    return safeAmount;
  }

  return 0;
}

function buildDefaultBudgetPlannerState() {
  return BUDGET_PLANNING_PERIODS.reduce((state, periodId) => {
    state[periodId] = {
      target: null,
      entries: []
    };
    return state;
  }, {});
}

function normalizeBudgetPlannerEntry(entry) {
  const title = typeof entry?.title === "string" ? entry.title.trim() : "";
  const amount = Number(entry?.amount);

  if (!title || Number.isNaN(amount) || amount < 0) {
    return null;
  }

  return {
    id: entry?.id || createId(),
    title,
    amount,
    currency: normalizeBudgetCurrency(entry?.currency),
    type: entry?.type === "tracked" ? "tracked" : "planned",
    createdAt: normalizeTimestamp(entry?.createdAt) || new Date().toISOString()
  };
}

function normalizeBudgetPlannerPeriodState(periodState) {
  if (!periodState || typeof periodState !== "object" || Array.isArray(periodState)) {
    return {
      target: null,
      entries: []
    };
  }

  return {
    target: normalizeBudgetPlannerTarget(periodState.target),
    entries: Array.isArray(periodState.entries)
      ? periodState.entries.map(entry => normalizeBudgetPlannerEntry(entry)).filter(Boolean)
      : []
  };
}

function normalizeBudgetPlannerState(rawState) {
  if (!rawState || typeof rawState !== "object" || Array.isArray(rawState)) {
    return buildDefaultBudgetPlannerState();
  }

  return BUDGET_PLANNING_PERIODS.reduce((state, periodId) => {
    state[periodId] = normalizeBudgetPlannerPeriodState(rawState[periodId]);
    return state;
  }, {});
}

function createNote(text, createdAt = new Date().toISOString()) {
  return {
    id: createId(),
    text,
    createdAt
  };
}

function createWaitingItem({ title, person, status = "Waiting", dueDate = "", note = "" }) {
  return {
    id: createId(),
    title,
    person,
    status,
    dueDate,
    note
  };
}

function createInboxItem(title, createdAt = new Date().toISOString()) {
  return {
    id: createId(),
    title,
    createdAt
  };
}

function createProject({ title, note = "", createdAt = new Date().toISOString() }) {
  return {
    id: createId(),
    title,
    note,
    createdAt
  };
}

function createSomedayItem({ title, note = "", createdAt = new Date().toISOString() }) {
  return {
    id: createId(),
    title,
    note,
    createdAt
  };
}

function createReferenceItem({ title, link = "", note = "", createdAt = new Date().toISOString() }) {
  return {
    id: createId(),
    title,
    link,
    note,
    createdAt
  };
}

function createPromise({ text, to = "", promiseDate = "", dueDate = "" }) {
  return { id: createId(), text, to, promiseDate, dueDate, done: false, createdAt: new Date().toISOString() };
}

const CALENDAR_BLOCK_REMINDER_OFFSETS = [0, 5, 10];
const CALENDAR_TIME_PATTERN = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;

function normalizeCalendarBlockItemType(value) {
  if (typeof value !== "string") return "";
  return value.trim().toLowerCase().slice(0, 24);
}

function normalizeCalendarBlockItemTimeValue(value) {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  return CALENDAR_TIME_PATTERN.test(trimmed) ? trimmed : "";
}

function normalizeCalendarBlockReminderOffsetMinutes(value) {
  if (typeof value === "number" && CALENDAR_BLOCK_REMINDER_OFFSETS.includes(value)) {
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();

    if (!normalized || normalized === "none" || normalized === "off" || normalized === "no reminder") {
      return 0;
    }

    if (
      normalized === "5"
      || normalized === "5m"
      || normalized === "5min"
      || normalized === "5 minutes"
      || normalized === "5 minutes before"
    ) {
      return 5;
    }

    if (
      normalized === "10"
      || normalized === "10m"
      || normalized === "10min"
      || normalized === "10 minutes"
      || normalized === "10 minutes before"
    ) {
      return 10;
    }

    const parsed = Number(normalized);
    if (CALENDAR_BLOCK_REMINDER_OFFSETS.includes(parsed)) {
      return parsed;
    }
  }

  return 0;
}

function normalizeCalendarBlockItems(items) {
  if (!Array.isArray(items)) return [];

  return items.map(item => {
    const title = typeof item === "string"
      ? item.trim()
      : (typeof item?.title === "string" ? item.title.trim() : "");

    if (!title) return null;

    const startTime = normalizeCalendarBlockItemTimeValue(item?.startTime || item?.start || "");

    return {
      id: typeof item?.id === "string" && item.id ? item.id : createId(),
      title,
      startTime,
      endTime: normalizeCalendarBlockItemTimeValue(item?.endTime || item?.end || ""),
      type: normalizeCalendarBlockItemType(item?.type),
      reminderOffsetMinutes: startTime
        ? normalizeCalendarBlockReminderOffsetMinutes(item?.reminderOffsetMinutes ?? item?.reminderMinutes ?? item?.reminder)
        : 0,
      done: Boolean(item?.done || item?.completed || item?.checked)
    };
  }).filter(Boolean);
}

function getCalendarBlockItemSortMinutes(blockItem) {
  const startTime = normalizeCalendarBlockItemTimeValue(blockItem?.startTime || "");
  if (!startTime) return Number.POSITIVE_INFINITY;
  const [hour, minute] = startTime.split(":").map(Number);
  return hour * 60 + minute;
}

function sortCalendarBlockItemsForDisplay(items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item, index) => ({ item, index, sortMinutes: getCalendarBlockItemSortMinutes(item) }))
    .sort((left, right) => {
      const leftTimed = Number.isFinite(left.sortMinutes);
      const rightTimed = Number.isFinite(right.sortMinutes);

      if (leftTimed && rightTimed) {
        return left.sortMinutes - right.sortMinutes || left.index - right.index;
      }

      if (leftTimed) return -1;
      if (rightTimed) return 1;
      return left.index - right.index;
    })
    .map(entry => entry.item);
}

function createCalendarEvent({ title, date, time = "", endTime = "", color = "green", note = "", location = "", recurrence = "", blockItems = [] }) {
  return {
    id: createId(),
    title,
    date,
    time,
    endTime,
    color,
    note,
    location,
    recurrence,
    blockItems: normalizeCalendarBlockItems(blockItems),
    createdAt: new Date().toISOString()
  };
}

function normalizeCalendarEvents(events) {
  if (!Array.isArray(events)) return [];
  return events.map(e => {
    const title = typeof e?.title === "string" ? e.title.trim() : "";
    if (!title) return null;
    const date = typeof e?.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(e.date) ? e.date : "";
    if (!date) return null;
    return {
      id: e.id || createId(),
      title,
      date,
      time: typeof e?.time === "string" ? e.time : "",
      endTime: typeof e?.endTime === "string" ? e.endTime : "",
      color: typeof e?.color === "string" ? e.color : "pink",
      note: typeof e?.note === "string" ? e.note.trim() : "",
      location: typeof e?.location === "string" ? e.location.trim() : "",
      recurrence: ["weekly", "monthly"].includes(e?.recurrence) ? e.recurrence : "",
      blockItems: normalizeCalendarBlockItems(e?.blockItems),
      createdAt: normalizeTimestamp(e.createdAt) || new Date().toISOString()
    };
  }).filter(Boolean);
}

function normalizePromises(promises) {
  if (!Array.isArray(promises)) return [];
  return promises.map(p => {
    const text = typeof p?.text === "string" ? p.text.trim() : "";
    if (!text) return null;
    // Migration: if promiseDate field doesn't exist yet, treat the old dueDate as promiseDate
    const hasPromiseDate = typeof p?.promiseDate === "string" && p.promiseDate !== "";
    const promiseDate = hasPromiseDate ? p.promiseDate : (typeof p?.dueDate === "string" ? p.dueDate : "");
    const dueDate     = hasPromiseDate ? (typeof p?.dueDate === "string" ? p.dueDate : "") : "";
    return {
      id: p.id || createId(),
      text,
      to: typeof p?.to === "string" ? p.to.trim() : "",
      promiseDate,
      dueDate,
      done: Boolean(p.done),
      createdAt: normalizeTimestamp(p.createdAt) || new Date().toISOString()
    };
  }).filter(Boolean);
}

function createTrashItem({ title, kind, detail = "", payload = null, discardedAt = new Date().toISOString() }) {
  return {
    id: createId(),
    title,
    kind,
    detail,
    payload,
    discardedAt
  };
}

function buildDefaultState() {
  return {
    activeView: DEFAULT_VIEW,
    selectedBudgetCategory: "all",
    lastSavedAt: null,
    actionSections: ACTION_SECTION_DEFINITIONS.map(section => ({
      id: section.id,
      title: section.title,
      emoji: section.emoji,
      accent: section.accent,
      size: section.size,
      tasks: section.sampleTasks.map(task => createTask(task))
    })),
    budgetCategories: BUDGET_CATEGORY_DEFINITIONS.map(category => ({
      id: category.id,
      title: category.title,
      items: category.sampleItems.map(item => createBudgetItem(item.title, item.amount, item.checked))
    })),
    budgetPlanner: buildDefaultBudgetPlannerState(),
    plannerSections: PLANNER_SECTION_DEFINITIONS.map(def => ({
      id: def.id,
      title: def.title,
      items: [],
      trackPlanCost: false,
      planCostAmount: "",
      planCostCurrency: "USD",
      isMoneyRelated: false,
      amount: "",
      currency: "USD"
    })),
    notes: DEFAULT_NOTES.map(note => createNote(note)),
    waitingItems: DEFAULT_WAITING_ITEMS.map(item => createWaitingItem(item)),
    inboxItems: DEFAULT_INBOX_ITEMS.map(item => createInboxItem(item)),
    projects: DEFAULT_PROJECTS.map(project => createProject(project)),
    somedayItems: DEFAULT_SOMEDAY_ITEMS.map(item => createSomedayItem(item)),
    referenceItems: DEFAULT_REFERENCE_ITEMS.map(item => createReferenceItem(item)),
    trashItems: [],
    promises: [],
    calendarEvents: []
  };
}

function clearPersistedPlannerArrayField(section, fieldName) {
  if (!Object.prototype.hasOwnProperty.call(section, fieldName)) {
    return false;
  }

  if (Array.isArray(section[fieldName])) {
    if (section[fieldName].length === 0) {
      return false;
    }

    section[fieldName] = [];
    return true;
  }

  section[fieldName] = [];
  return true;
}

function applyBudgetPlannerCleanupToPersistedState(rawState) {
  if (!rawState || typeof rawState !== "object" || Array.isArray(rawState)) {
    return false;
  }

  let changed = false;

  if (Array.isArray(rawState.budgetCategories)) {
    rawState.budgetCategories.forEach(category => {
      if (!category || typeof category !== "object" || Array.isArray(category)) {
        return;
      }

      if (Array.isArray(category.items)) {
        if (category.items.length > 0) {
          category.items = [];
          changed = true;
        }

        return;
      }

      if (Object.prototype.hasOwnProperty.call(category, "items")) {
        category.items = [];
        changed = true;
      }
    });
  }

  if (Array.isArray(rawState.plannerSections)) {
    rawState.plannerSections.forEach(section => {
      if (!section || typeof section !== "object" || Array.isArray(section)) {
        return;
      }

      if (clearPersistedPlannerArrayField(section, "items")) {
        changed = true;
      }

      // Support older/newer planner shapes that may store user-entered content in alternate arrays.
      if (clearPersistedPlannerArrayField(section, "entries")) {
        changed = true;
      }

      if (clearPersistedPlannerArrayField(section, "content")) {
        changed = true;
      }
    });
  }

  return changed;
}

function runBudgetPlannerCleanupMigration() {
  if (localStorage.getItem(BUDGET_PLANNER_CLEANUP_MIGRATION_KEY) === "1") {
    return;
  }

  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    localStorage.setItem(BUDGET_PLANNER_CLEANUP_MIGRATION_KEY, "1");
    return;
  }

  try {
    const parsed = JSON.parse(saved);
    const changed = applyBudgetPlannerCleanupToPersistedState(parsed);

    if (changed) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }

    localStorage.setItem(BUDGET_PLANNER_CLEANUP_MIGRATION_KEY, "1");
  } catch {
    // Keep the flag unset when storage payload is invalid so loadState() can handle cleanup.
  }
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      return normalizeState(JSON.parse(saved));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const legacy = localStorage.getItem(LEGACY_ACTION_STORAGE_KEY);

  if (legacy) {
    try {
      return buildStateFromLegacy(JSON.parse(legacy));
    } catch {
      localStorage.removeItem(LEGACY_ACTION_STORAGE_KEY);
    }
  }

  return buildDefaultState();
}

function buildStateFromLegacy(legacySections) {
  const defaultState = buildDefaultState();

  if (!Array.isArray(legacySections)) {
    return defaultState;
  }

  return {
    ...defaultState,
    actionSections: mergeActionSections(legacySections)
  };
}

function normalizeState(rawState) {
  const defaultState = buildDefaultState();
  const budgetCategories = mergeBudgetCategories(rawState?.budgetCategories);
  const budgetCategoryIds = getBudgetCategoryIds(budgetCategories);
  const activeView = VIEW_DETAILS[rawState?.activeView] ? rawState.activeView : defaultState.activeView;
  const selectedBudgetCategory = budgetCategoryIds.includes(rawState?.selectedBudgetCategory)
    ? rawState.selectedBudgetCategory
    : defaultState.selectedBudgetCategory;

  return {
    activeView,
    selectedBudgetCategory,
    lastSavedAt: normalizeTimestamp(rawState?.lastSavedAt),
    actionSections: mergeActionSections(rawState?.actionSections),
    budgetCategories,
    budgetPlanner: normalizeBudgetPlannerState(rawState?.budgetPlanner),
    plannerSections: normalizePlannerSections(rawState?.plannerSections),
    notes: normalizeNotes(rawState?.notes),
    waitingItems: normalizeWaitingItems(rawState?.waitingItems),
    inboxItems: normalizeInboxItems(rawState?.inboxItems),
    projects: normalizeProjects(rawState?.projects),
    somedayItems: normalizeSomedayItems(rawState?.somedayItems),
    referenceItems: normalizeReferenceItems(rawState?.referenceItems),
    trashItems: normalizeTrashItems(rawState?.trashItems),
    promises: normalizePromises(rawState?.promises),
    calendarEvents: normalizeCalendarEvents(rawState?.calendarEvents)
  };
}

function mergeActionSections(storedSections) {
  const shouldStripLegacySeedData =
    Array.isArray(storedSections) && !storedSections.some(section => section?.id === "top3PrioritiesToday");
  const sectionMap = new Map(
    Array.isArray(storedSections)
      ? storedSections.filter(section => section && typeof section.id === "string").map(section => [section.id, section])
      : []
  );

  return ACTION_SECTION_DEFINITIONS.map(definition => {
    const existingSection = sectionMap.get(definition.id);
    const useStoredTasks = Array.isArray(existingSection?.tasks) && !shouldClearLegacySampleTasks(existingSection, shouldStripLegacySeedData);
    const tasks = useStoredTasks
      ? existingSection.tasks
          .map(task => normalizeTaskRecord(task))
          .filter(Boolean)
      : definition.sampleTasks.map(task => createTask(task));

    return {
      id: definition.id,
      title: definition.title,
      emoji: definition.emoji,
      accent: definition.accent,
      size: definition.size,
      tasks
    };
  });
}

// ── Action Board daily storage ─────────────────────────────────────────────

function loadDailyBoards() {
  try {
    const raw = localStorage.getItem(ACTION_DAILY_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed;
  } catch {
    return {};
  }
}

function saveDailyBoards(boards) {
  localStorage.setItem(ACTION_DAILY_STORAGE_KEY, JSON.stringify(boards));
}

// Returns a fully normalised copy of sections for the given date.
// If no board exists yet for that date and it's today, seeds from appState.actionSections.
// For any other date, returns empty sections.
function getDailyBoard(dateStr) {
  const boards = loadDailyBoards();
  if (boards[dateStr]) {
    return mergeActionSections(boards[dateStr]);
  }
  // Seed today's board from the global actionSections (migration / first use)
  if (dateStr === getTodayIso()) {
    return mergeActionSections(appState.actionSections);
  }
  return mergeActionSections([]);
}

function setDailyBoard(dateStr, sections) {
  const boards = loadDailyBoards();
  boards[dateStr] = sections;
  saveDailyBoards(boards);
}

function clearAuxiliaryStorageKeys() {
  [
    LEGACY_ACTION_STORAGE_KEY,
    ACTION_DAILY_STORAGE_KEY,
    DIARY_STORAGE_KEY,
    DATES_BOARD_STORAGE_KEY,
    BITS_STORAGE_KEY,
    LESSONS_LEARNED_STORAGE_KEY,
    EXPENSE_TRACKER_STORAGE_KEY
  ].forEach(key => {
    localStorage.removeItem(key);
  });
}

function getScopedCleanupUnrelatedDataSnapshot() {
  return JSON.stringify({
    activeView: uiState.activeView,
    selectedBudgetCategory: uiState.selectedBudgetCategory,
    actionSections: appState.actionSections,
    budgetPlanner: appState.budgetPlanner,
    notes: appState.notes,
    waitingItems: appState.waitingItems,
    inboxItems: appState.inboxItems,
    projects: appState.projects,
    somedayItems: appState.somedayItems,
    referenceItems: appState.referenceItems,
    trashItems: appState.trashItems,
    promises: appState.promises,
    calendarEvents: appState.calendarEvents
  });
}

function getScopedCleanupStructureSnapshot() {
  return JSON.stringify({
    budgetCategories: appState.budgetCategories.map(category => ({
      id: typeof category?.id === "string" ? category.id : null,
      title: typeof category?.title === "string" ? category.title : null
    })),
    plannerSections: appState.plannerSections.map(section => ({
      id: typeof section?.id === "string" ? section.id : null,
      title: typeof section?.title === "string" ? section.title : null
    }))
  });
}

function clearBudgetAndPlannerContentOnly() {
  const unrelatedBefore = getScopedCleanupUnrelatedDataSnapshot();
  const structureBefore = getScopedCleanupStructureSnapshot();
  const budgetItemsBackup = appState.budgetCategories.map(category =>
    Array.isArray(category?.items) ? [...category.items] : []
  );
  const plannerItemsBackup = appState.plannerSections.map(section =>
    Array.isArray(section?.items) ? [...section.items] : []
  );

  appState.budgetCategories.forEach(category => {
    if (Array.isArray(category?.items)) {
      category.items.length = 0;
      return;
    }
    category.items = [];
  });

  appState.plannerSections.forEach(section => {
    if (Array.isArray(section?.items)) {
      section.items.length = 0;
      return;
    }
    section.items = [];
  });

  const unrelatedAfter = getScopedCleanupUnrelatedDataSnapshot();
  const structureAfter = getScopedCleanupStructureSnapshot();

  if (unrelatedBefore !== unrelatedAfter || structureBefore !== structureAfter) {
    appState.budgetCategories.forEach((category, index) => {
      category.items = budgetItemsBackup[index];
    });
    appState.plannerSections.forEach((section, index) => {
      section.items = plannerItemsBackup[index];
    });

    throw new Error("Scoped cleanup safety check failed.");
  }
}

// Copies all section tasks (deep) from source date to target date, merging with existing structure.
function copyDailyBoard(srcDateStr, destDateStr) {
  const src  = getDailyBoard(srcDateStr);
  const dest = getDailyBoard(destDateStr);
  dest.forEach(destSection => {
    const srcSection = src.find(s => s.id === destSection.id);
    if (!srcSection) return;
    destSection.tasks = srcSection.tasks.map(t => ({
      ...t,
      id: createId(),
      subtasks: (t.subtasks || []).map(s => ({ ...s, id: createId() }))
    }));
  });
  setDailyBoard(destDateStr, dest);
}

function normalizeBudgetCategoryRecord(category) {
  if (!category || typeof category.id !== "string") {
    return null;
  }

  const fallbackDefinition = BUDGET_CATEGORY_DEFINITIONS.find(definition => definition.id === category.id);
  const items = Array.isArray(category.items)
    ? category.items
        .map(item => {
          const title = typeof item?.title === "string" ? item.title.trim() : "";
          const amount = Number(item?.amount);

          if (!title || Number.isNaN(amount)) {
            return null;
          }

          return {
            id: item.id || createId(),
            title,
            amount,
            currency: normalizeBudgetCurrency(item?.currency),
            checked: Boolean(item.checked),
            sortOrder: Number.isFinite(Number(item?.sortOrder)) ? Number(item.sortOrder) : null,
            itemNote: typeof item?.itemNote === "string" ? item.itemNote : "",
            reminders: Array.isArray(item?.reminders)
              ? item.reminders
                  .map(r => {
                    const text = typeof r?.text === "string" ? r.text.trim() : "";
                    if (!text) return null;
                    return { id: r.id || createId(), text };
                  })
                  .filter(Boolean)
              : [],
            checklist: Array.isArray(item?.checklist)
              ? item.checklist
                  .map(c => {
                    const ctitle = typeof c?.title === "string" ? c.title.trim() : "";
                    if (!ctitle) return null;
                    return { id: c.id || createId(), title: ctitle, done: Boolean(c.done) };
                  })
                  .filter(Boolean)
              : []
          };
        })
        .filter(Boolean)
    : fallbackDefinition
      ? fallbackDefinition.sampleItems.map(item => createBudgetItem(item.title, item.amount, item.checked))
      : [];

  return {
    id: category.id,
    title: typeof category.title === "string" && category.title.trim()
      ? category.title.trim()
      : fallbackDefinition?.title || category.id,
    items,
    note: typeof category?.note === "string" ? category.note.trim() : "",
    todos: Array.isArray(category?.todos)
      ? category.todos
          .map(t => {
            const title = typeof t?.title === "string" ? t.title.trim() : "";
            if (!title) return null;
            return { id: t.id || createId(), title, done: Boolean(t.done) };
          })
          .filter(Boolean)
      : []
  };
}

function mergeBudgetCategories(storedCategories) {
  if (!Array.isArray(storedCategories)) {
    return BUDGET_CATEGORY_DEFINITIONS.map(category => ({
      id: category.id,
      title: category.title,
      items: category.sampleItems.map(item => createBudgetItem(item.title, item.amount, item.checked))
    }));
  }

  return storedCategories.map(category => normalizeBudgetCategoryRecord(category)).filter(Boolean);
}

function shouldClearLegacySampleTasks(section, shouldStripLegacySeedData) {
  if (!shouldStripLegacySeedData) {
    return false;
  }

  const legacyTasks = LEGACY_ACTION_SAMPLE_TASKS[section?.id];

  if (!legacyTasks || !Array.isArray(section?.tasks)) {
    return false;
  }

  const normalizedTitles = section.tasks
    .map(task => {
      if (typeof task === "string") {
        return task.trim();
      }

      return typeof task?.title === "string" ? task.title.trim() : "";
    })
    .filter(Boolean);

  if (normalizedTitles.length !== legacyTasks.length) {
    return false;
  }

  const hasCompletedTasks = section.tasks.some(task => typeof task === "object" && Boolean(task?.done));

  return !hasCompletedTasks && normalizedTitles.every((title, index) => title === legacyTasks[index]);
}

function getTaskLimit(sectionId) {
  return TASK_LIMITS[sectionId] ?? Infinity;
}

function getTaskLimitMessage(sectionId) {
  return TASK_LIMIT_MESSAGES[sectionId] || "";
}

function normalizeTimestamp(value) {
  if (typeof value !== "string") {
    return null;
  }

  const parsedTime = Date.parse(value);

  return Number.isNaN(parsedTime) ? null : new Date(parsedTime).toISOString();
}

function normalizeNotes(notes) {
  if (!Array.isArray(notes)) {
    return DEFAULT_NOTES.map(note => createNote(note));
  }

  const normalized = notes
    .map(note => {
      const text = typeof note?.text === "string" ? note.text.trim() : "";

      if (!text) {
        return null;
      }

      return {
        id: note.id || createId(),
        text,
        createdAt: note.createdAt || new Date().toISOString()
      };
    })
    .filter(Boolean);

  return normalized.length > 0 ? normalized : DEFAULT_NOTES.map(note => createNote(note));
}

function normalizeWaitingItems(waitingItems) {
  if (!Array.isArray(waitingItems)) {
    return DEFAULT_WAITING_ITEMS.map(item => createWaitingItem(item));
  }

  const normalized = waitingItems
    .map(item => {
      const title = typeof item?.title === "string" ? item.title.trim() : "";
      const person = typeof item?.person === "string" ? item.person.trim() : "";
      const note = typeof item?.note === "string" ? item.note.trim() : "";
      const dueDate = typeof item?.dueDate === "string" ? item.dueDate : "";
      const status = WAITING_STATUSES.includes(item?.status) ? item.status : "Waiting";

      if (!title || !person) {
        return null;
      }

      return {
        id: item.id || createId(),
        title,
        person,
        status,
        dueDate,
        note
      };
    })
    .filter(Boolean);

  return normalized.length > 0 ? normalized : DEFAULT_WAITING_ITEMS.map(item => createWaitingItem(item));
}

function normalizeInboxItems(inboxItems) {
  if (!Array.isArray(inboxItems)) {
    return DEFAULT_INBOX_ITEMS.map(item => createInboxItem(item));
  }

  const normalized = inboxItems
    .map(item => {
      const title = typeof item?.title === "string" ? item.title.trim() : "";

      if (!title) {
        return null;
      }

      return {
        id: item.id || createId(),
        title,
        createdAt: normalizeTimestamp(item.createdAt) || new Date().toISOString()
      };
    })
    .filter(Boolean);

  return normalized;
}

function normalizeProjects(projects) {
  if (!Array.isArray(projects)) {
    return DEFAULT_PROJECTS.map(project => createProject(project));
  }

  return projects
    .map(project => {
      const title = typeof project?.title === "string" ? project.title.trim() : "";

      if (!title) {
        return null;
      }

      return {
        id: project.id || createId(),
        title,
        note: typeof project?.note === "string" ? project.note.trim() : "",
        createdAt: normalizeTimestamp(project.createdAt) || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function normalizeSomedayItems(items) {
  if (!Array.isArray(items)) {
    return DEFAULT_SOMEDAY_ITEMS.map(item => createSomedayItem(item));
  }

  return items
    .map(item => {
      const title = typeof item?.title === "string" ? item.title.trim() : "";

      if (!title) {
        return null;
      }

      return {
        id: item.id || createId(),
        title,
        note: typeof item?.note === "string" ? item.note.trim() : "",
        createdAt: normalizeTimestamp(item.createdAt) || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function normalizeReferenceItems(items) {
  if (!Array.isArray(items)) {
    return DEFAULT_REFERENCE_ITEMS.map(item => createReferenceItem(item));
  }

  return items
    .map(item => {
      const title = typeof item?.title === "string" ? item.title.trim() : "";

      if (!title) {
        return null;
      }

      return {
        id: item.id || createId(),
        title,
        link: typeof item?.link === "string" ? item.link.trim() : "",
        note: typeof item?.note === "string" ? item.note.trim() : "",
        createdAt: normalizeTimestamp(item.createdAt) || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function normalizeTrashItems(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .map(item => {
      const title = typeof item?.title === "string" ? item.title.trim() : "";
      const kind = typeof item?.kind === "string" ? item.kind.trim() : "";

      if (!title || !kind) {
        return null;
      }

      return {
        id: item.id || createId(),
        title,
        kind,
        detail: typeof item?.detail === "string" ? item.detail.trim() : "",
        payload: item?.payload ?? null,
        discardedAt: normalizeTimestamp(item.discardedAt) || new Date().toISOString()
      };
    })
    .filter(Boolean);
}

function createPlannerItem(title, note = "") {
  return {
    id: createId(),
    title,
    done: false,
    note,
    checklist: [],
    createdAt: new Date().toISOString()
  };
}

function normalizePlannerItems(items) {
  if (!Array.isArray(items)) return [];
  return items.map(item => {
    const title = typeof item?.title === "string" ? item.title.trim() : "";
    if (!title) return null;
    const checklist = Array.isArray(item?.checklist)
      ? item.checklist.map(c => ({
          id: (typeof c?.id === "string" && c.id) ? c.id : createId(),
          text: typeof c?.text === "string" ? c.text.trim() : "",
          done: Boolean(c?.done)
        })).filter(c => c.text)
      : [];
    const itemCostAmount = getPlannerItemCostAmount(item);
    const hasItemCostAmountField = item?.itemCostAmount !== undefined && item?.itemCostAmount !== null;
    const hasItemCostCurrencyField = item?.itemCostCurrency !== undefined && item?.itemCostCurrency !== null;
    const hasLegacyCostAmountField = item?.costAmount !== undefined && item?.costAmount !== null;
    const hasLegacyCostCurrencyField = item?.costCurrency !== undefined && item?.costCurrency !== null;
    const hasAnyCostField = hasItemCostAmountField
      || hasItemCostCurrencyField
      || hasLegacyCostAmountField
      || hasLegacyCostCurrencyField;

    const normalizedItem = {
      id: item.id || createId(),
      title,
      done: Boolean(item.done),
      note: typeof item?.note === "string" ? item.note : "",
      checklist,
      createdAt: normalizeTimestamp(item.createdAt) || new Date().toISOString()
    };

    if (itemCostAmount !== "" || hasAnyCostField) {
      normalizedItem.itemCostAmount = itemCostAmount;
      normalizedItem.itemCostCurrency = getPlannerItemCostCurrency(item);
    }

    return normalizedItem;
  }).filter(Boolean);
}

function normalizePlannerMoneyCurrency(value) {
  if (typeof value !== "string") {
    return "USD";
  }

  const normalized = value.trim().toUpperCase();
  return normalized === "RMB" || normalized === "CNY" || normalized === "R" || normalized === "\u00a5" || normalized === "\uffe5"
    ? "RMB"
    : "USD";
}

function normalizePlannerPlanCostAmount(value) {
  if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
    return String(value);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (!trimmed) {
      return "";
    }

    const parsed = Number(trimmed);
    return Number.isFinite(parsed) && parsed >= 0 ? String(parsed) : "";
  }

  return "";
}

function getPlannerItemCostAmount(item) {
  if (item?.itemCostAmount !== undefined && item?.itemCostAmount !== null) {
    return normalizePlannerPlanCostAmount(item.itemCostAmount);
  }

  if (item?.costAmount !== undefined && item?.costAmount !== null) {
    return normalizePlannerPlanCostAmount(item.costAmount);
  }

  return "";
}

function getPlannerItemCostCurrency(item) {
  if (item?.itemCostCurrency !== undefined && item?.itemCostCurrency !== null) {
    return normalizePlannerMoneyCurrency(item.itemCostCurrency);
  }

  if (item?.costCurrency !== undefined && item?.costCurrency !== null) {
    return normalizePlannerMoneyCurrency(item.costCurrency);
  }

  return "USD";
}

function formatPlannerItemCostDisplay(item) {
  const amountValue = getPlannerItemCostAmount(item);

  if (!amountValue) {
    return "";
  }

  return formatPlannerPlanCostDisplay(amountValue, getPlannerItemCostCurrency(item));
}

function getPlannerVisibleItemCostTotals(visibleItems) {
  if (!Array.isArray(visibleItems)) {
    return { USD: 0, RMB: 0 };
  }

  return visibleItems.reduce((totals, entry) => {
    const amountValue = getPlannerItemCostAmount(entry?.item);

    if (!amountValue) {
      return totals;
    }

    const parsedAmount = Number(amountValue);

    if (!Number.isFinite(parsedAmount) || parsedAmount < 0) {
      return totals;
    }

    const currency = getPlannerItemCostCurrency(entry?.item);
    totals[currency] = (totals[currency] || 0) + parsedAmount;
    return totals;
  }, { USD: 0, RMB: 0 });
}

function formatPlannerVisibleItemCostSummary(visibleItems) {
  const totals = getPlannerVisibleItemCostTotals(visibleItems);
  const includedCurrencies = new Set();

  if (Array.isArray(visibleItems)) {
    visibleItems.forEach(entry => {
      const amountValue = getPlannerItemCostAmount(entry?.item);

      if (!amountValue) {
        return;
      }

      const parsedAmount = Number(amountValue);

      if (!Number.isFinite(parsedAmount) || parsedAmount < 0) {
        return;
      }

      includedCurrencies.add(getPlannerItemCostCurrency(entry?.item));
    });
  }

  const currencyOrder = ["RMB", "USD"];
  const parts = currencyOrder
    .filter(currency => includedCurrencies.has(currency))
    .map(currency => formatPlannerPlanCostDisplay(totals[currency], currency));

  if (parts.length === 0) {
    return "";
  }

  return parts.join(" / ");
}

function getPlannerSectionTrackPlanCost(section) {
  if (typeof section?.trackPlanCost === "boolean") {
    return section.trackPlanCost;
  }

  if (typeof section?.isMoneyRelated === "boolean") {
    return section.isMoneyRelated;
  }

  return false;
}

function getPlannerSectionPlanCostAmount(section) {
  if (section?.planCostAmount !== undefined && section?.planCostAmount !== null) {
    return normalizePlannerPlanCostAmount(section.planCostAmount);
  }

  return normalizePlannerPlanCostAmount(section?.amount);
}

function getPlannerSectionPlanCostCurrency(section) {
  if (section?.planCostCurrency !== undefined && section?.planCostCurrency !== null) {
    return normalizePlannerMoneyCurrency(section.planCostCurrency);
  }

  return normalizePlannerMoneyCurrency(section?.currency);
}

function syncPlannerSectionPlanCostFields(section) {
  if (!section || typeof section !== "object") {
    return section;
  }

  const trackPlanCost = getPlannerSectionTrackPlanCost(section);
  const planCostAmount = getPlannerSectionPlanCostAmount(section);
  const planCostCurrency = getPlannerSectionPlanCostCurrency(section);

  section.trackPlanCost = trackPlanCost;
  section.planCostAmount = planCostAmount;
  section.planCostCurrency = planCostCurrency;

  // Legacy mirrors for backward compatibility with older saved snapshots.
  section.isMoneyRelated = trackPlanCost;
  section.amount = planCostAmount;
  section.currency = planCostCurrency;

  return section;
}

function formatPlannerPlanCostDisplay(amountValue, currency) {
  const parsedAmount = Number(amountValue);
  const safeAmount = Number.isFinite(parsedAmount) && parsedAmount >= 0 ? parsedAmount : 0;
  const compact = safeAmount.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
  return normalizePlannerMoneyCurrency(currency) === "RMB" ? `R${compact}` : `$${compact}`;
}

function normalizePlannerSections(sections) {
  if (!Array.isArray(sections)) {
    return PLANNER_SECTION_DEFINITIONS.map(def => ({
      id: def.id,
      title: def.title,
      items: [],
      trackPlanCost: false,
      planCostAmount: "",
      planCostCurrency: "USD",
      isMoneyRelated: false,
      amount: "",
      currency: "USD"
    }));
  }
  return sections.map(section => {
    const id = typeof section?.id === "string" && section.id ? section.id : null;
    const title = typeof section?.title === "string" && section.title.trim() ? section.title.trim() : null;
    if (!id || !title) return null;
    return syncPlannerSectionPlanCostFields({
      id,
      title,
      items: normalizePlannerItems(section?.items),
      trackPlanCost: getPlannerSectionTrackPlanCost(section),
      planCostAmount: getPlannerSectionPlanCostAmount(section),
      planCostCurrency: getPlannerSectionPlanCostCurrency(section)
    });
  }).filter(Boolean);
}

function createPlannerSection(title) {
  const base = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "planner-section";
  let id = base;
  let suffix = 2;
  while (appState.plannerSections.some(s => s.id === id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  return {
    id,
    title,
    items: [],
    trackPlanCost: false,
    planCostAmount: "",
    planCostCurrency: "USD",
    isMoneyRelated: false,
    amount: "",
    currency: "USD"
  };
}

function getPlannerSectionById(sectionId) {
  return appState.plannerSections.find(s => s.id === sectionId);
}

function getPlannerItems(selectedSection) {
  if (selectedSection === "all") {
    return appState.plannerSections.flatMap(section =>
      section.items.map(item => ({ section, item }))
    );
  }
  const section = getPlannerSectionById(selectedSection);
  if (!section) return [];
  return section.items.map(item => ({ section, item }));
}

function getStateSnapshot(lastSavedAt = appState.lastSavedAt ?? null) {
  return {
    activeView: uiState.activeView,
    selectedBudgetCategory: uiState.selectedBudgetCategory,
    lastSavedAt,
    actionSections: appState.actionSections,
    budgetCategories: appState.budgetCategories,
    budgetPlanner: appState.budgetPlanner,
    plannerSections: appState.plannerSections,
    notes: appState.notes,
    waitingItems: appState.waitingItems,
    inboxItems: appState.inboxItems,
    projects: appState.projects,
    somedayItems: appState.somedayItems,
    referenceItems: appState.referenceItems,
    trashItems: appState.trashItems,
    promises: appState.promises,
    calendarEvents: appState.calendarEvents
  };
}

function slugifyBudgetCategoryId(title) {
  const normalized = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "custom-budget";
}

function createBudgetCategoryId(title) {
  const baseId = slugifyBudgetCategoryId(title);
  let nextId = baseId;
  let suffix = 2;

  while (appState.budgetCategories.some(category => category.id === nextId)) {
    nextId = `${baseId}-${suffix}`;
    suffix += 1;
  }

  return nextId;
}

function hasBudgetCategoryTitle(title) {
  const normalizedTitle = title.trim().toLowerCase();

  return appState.budgetCategories.some(category => category.title.trim().toLowerCase() === normalizedTitle);
}

function saveState(options = {}) {
  const lastSavedAt = options.touch === false
    ? normalizeTimestamp(options.lastSavedAt) || appState.lastSavedAt || null
    : new Date().toISOString();

  appState.lastSavedAt = lastSavedAt;

  const snapshot = getStateSnapshot(lastSavedAt);

  // Always keep localStorage in sync so the app also works in a plain browser.
  localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));

  // When running as a desktop app, also persist to disk via the Python API.
  // Data is saved to ~/Library/Application Support/dock/data.json
  if (window.pywebview) {
    window.pywebview.api.save_data(snapshot);
  }

  updateStorageBackupPanel();
}

function getWaitingStats() {
  return WAITING_STATUSES.reduce(
    (stats, status) => {
      stats[status] = appState.waitingItems.filter(item => item.status === status).length;
      return stats;
    },
    {
      Waiting: 0,
      "Follow Up": 0,
      Received: 0,
      Done: 0
    }
  );
}

function getStatusLabel(status) {
  const labels = {
    Waiting: "Waiting",
    "Follow Up": "Follow Up",
    Received: "Received",
    Done: "Done"
  };

  return labels[status] || status;
}

function formatWaitingDate(value) {
  if (!value) {
    return "No date set";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric"
  }).format(new Date(`${value}T00:00:00`));
}

function getBudgetCategoryIds(categories = null) {
  const sourceCategories = Array.isArray(categories)
    ? categories
    : Array.isArray(appState?.budgetCategories)
      ? appState.budgetCategories
      : BUDGET_CATEGORY_DEFINITIONS;

  return ["all", ...sourceCategories.filter(category => typeof category?.id === "string").map(category => category.id)];
}

function getSectionById(sectionId) {
  return getActiveSections().find(section => section.id === sectionId);
}

function getProjectById(projectId) {
  return appState.projects.find(project => project.id === projectId);
}

function getTaskContextLabel(context) {
  return context || GTD_EMPTY_CONTEXT_LABEL;
}

function getAvailableContexts() {
  const contextSet = new Set(GTD_CONTEXT_OPTIONS);

  getActiveSections().forEach(section => {
    section.tasks.forEach(task => {
      if (task.context) {
        contextSet.add(task.context);
      }
    });
  });

  const orderedBase = GTD_CONTEXT_OPTIONS.filter(context => contextSet.has(context));
  const customContexts = [...contextSet]
    .filter(context => !GTD_CONTEXT_OPTIONS.includes(context) && context)
    .sort((left, right) => left.localeCompare(right));

  return [...orderedBase, ...customContexts];
}

function getAllActionTaskEntries() {
  return getActiveSections().flatMap(section =>
    section.tasks.map(task => ({
      section,
      task
    }))
  );
}

function getOpenActionTaskEntries() {
  return getAllActionTaskEntries().filter(entry => !entry.task.done);
}

function findActionTask(taskId) {
  for (const section of getActiveSections()) {
    const task = section.tasks.find(entry => entry.id === taskId);

    if (task) {
      return { section, task };
    }
  }

  return null;
}

function addTrashItem(trashItem) {
  appState.trashItems.unshift(trashItem);
  appState.trashItems = appState.trashItems.slice(0, 60);
}

function addActionTask({ title, sectionId, context = "", projectId = "" }) {
  const section = getSectionById(sectionId);

  if (!section) {
    return { error: "Choose a valid Action Board section." };
  }

  if (section.tasks.length >= getTaskLimit(sectionId)) {
    return { error: getTaskLimitMessage(sectionId) || "That section is already full." };
  }

  const task = createTask(title, false, {
    context,
    projectId
  });

  section.tasks.push(task);
  saveActiveDailyBoard();

  return { section, task };
}

function moveActionTaskToSection(taskId, nextSectionId) {
  const taskEntry = findActionTask(taskId);
  const nextSection = getSectionById(nextSectionId);

  if (!taskEntry || !nextSection) {
    return { error: "The task could not be moved." };
  }

  if (taskEntry.section.id === nextSection.id) {
    return { section: nextSection, task: taskEntry.task };
  }

  if (nextSection.tasks.length >= getTaskLimit(nextSectionId)) {
    return { error: getTaskLimitMessage(nextSectionId) || "That section is already full." };
  }

  taskEntry.section.tasks = taskEntry.section.tasks.filter(task => task.id !== taskId);
  nextSection.tasks.unshift(taskEntry.task);
  saveActiveDailyBoard();

  return { section: nextSection, task: taskEntry.task };
}

function discardActionTask(taskId) {
  const taskEntry = findActionTask(taskId);

  if (!taskEntry) {
    return null;
  }

  taskEntry.section.tasks = taskEntry.section.tasks.filter(task => task.id !== taskId);
  saveActiveDailyBoard();
  addTrashItem(
    createTrashItem({
      title: taskEntry.task.title,
      kind: "actionTask",
      detail: `${taskEntry.section.title} · ${getTaskContextLabel(taskEntry.task.context)}`,
      payload: {
        sectionId: taskEntry.section.id,
        task: taskEntry.task
      }
    })
  );

  return taskEntry.task;
}

function discardInboxItem(inboxItemId) {
  const inboxItem = appState.inboxItems.find(item => item.id === inboxItemId);

  if (!inboxItem) {
    return null;
  }

  appState.inboxItems = appState.inboxItems.filter(item => item.id !== inboxItemId);
  addTrashItem(
    createTrashItem({
      title: inboxItem.title,
      kind: "inbox",
      detail: "Captured from Inbox",
      payload: { inboxItem }
    })
  );

  return inboxItem;
}

function discardWaitingItem(waitingItemId) {
  const waitingItem = appState.waitingItems.find(item => item.id === waitingItemId);

  if (!waitingItem) {
    return null;
  }

  appState.waitingItems = appState.waitingItems.filter(item => item.id !== waitingItemId);
  addTrashItem(
    createTrashItem({
      title: waitingItem.title,
      kind: "waiting",
      detail: waitingItem.person,
      payload: { waitingItem }
    })
  );

  return waitingItem;
}

function discardProject(projectId) {
  const project = getProjectById(projectId);

  if (!project) {
    return null;
  }

  const linkedTaskIds = [];

  appState.actionSections.forEach(section => {
    section.tasks.forEach(task => {
      if (task.projectId === projectId) {
        linkedTaskIds.push(task.id);
        task.projectId = "";
      }
    });
  });

  appState.projects = appState.projects.filter(item => item.id !== projectId);
  addTrashItem(
    createTrashItem({
      title: project.title,
      kind: "project",
      detail: linkedTaskIds.length === 1 ? "1 related next action" : `${linkedTaskIds.length} related next actions`,
      payload: {
        project,
        linkedTaskIds
      }
    })
  );

  return project;
}

function discardSomedayItem(itemId) {
  const somedayItem = appState.somedayItems.find(item => item.id === itemId);

  if (!somedayItem) {
    return null;
  }

  appState.somedayItems = appState.somedayItems.filter(item => item.id !== itemId);
  addTrashItem(
    createTrashItem({
      title: somedayItem.title,
      kind: "someday",
      detail: "Someday / Maybe",
      payload: { somedayItem }
    })
  );

  return somedayItem;
}

function discardReferenceItem(itemId) {
  const referenceItem = appState.referenceItems.find(item => item.id === itemId);

  if (!referenceItem) {
    return null;
  }

  appState.referenceItems = appState.referenceItems.filter(item => item.id !== itemId);
  addTrashItem(
    createTrashItem({
      title: referenceItem.title,
      kind: "reference",
      detail: "Reference",
      payload: { referenceItem }
    })
  );

  return referenceItem;
}

function restoreTrashItem(trashItemId) {
  const trashItem = appState.trashItems.find(item => item.id === trashItemId);

  if (!trashItem) {
    return false;
  }

  if (trashItem.kind === "actionTask") {
    const sectionId = trashItem.payload?.sectionId;
    const targetSection = getSectionById(sectionId) || getSectionById("memo");
    const task = normalizeTaskRecord(trashItem.payload?.task);

    if (!targetSection || !task) {
      return false;
    }

    if (!targetSection.tasks.some(entry => entry.id === task.id)) {
      targetSection.tasks.unshift(task);
    }
  }

  if (trashItem.kind === "inbox") {
    const inboxItem = trashItem.payload?.inboxItem;

    if (inboxItem && !appState.inboxItems.some(item => item.id === inboxItem.id)) {
      appState.inboxItems.unshift({
        id: inboxItem.id || createId(),
        title: inboxItem.title,
        createdAt: normalizeTimestamp(inboxItem.createdAt) || new Date().toISOString()
      });
    }
  }

  if (trashItem.kind === "waiting") {
    const waitingItem = trashItem.payload?.waitingItem;

    if (waitingItem && !appState.waitingItems.some(item => item.id === waitingItem.id)) {
      appState.waitingItems.unshift({
        id: waitingItem.id || createId(),
        title: waitingItem.title,
        person: waitingItem.person,
        status: WAITING_STATUSES.includes(waitingItem.status) ? waitingItem.status : "Waiting",
        dueDate: typeof waitingItem.dueDate === "string" ? waitingItem.dueDate : "",
        note: typeof waitingItem.note === "string" ? waitingItem.note : ""
      });
    }
  }

  if (trashItem.kind === "project") {
    const project = trashItem.payload?.project;
    const linkedTaskIds = Array.isArray(trashItem.payload?.linkedTaskIds) ? trashItem.payload.linkedTaskIds : [];

    if (project && !appState.projects.some(item => item.id === project.id)) {
      appState.projects.unshift({
        id: project.id || createId(),
        title: project.title,
        note: typeof project.note === "string" ? project.note : "",
        createdAt: normalizeTimestamp(project.createdAt) || new Date().toISOString()
      });
    }

    linkedTaskIds.forEach(taskId => {
      const taskEntry = findActionTask(taskId);

      if (taskEntry && !taskEntry.task.projectId) {
        taskEntry.task.projectId = project.id;
      }
    });
  }

  if (trashItem.kind === "someday") {
    const somedayItem = trashItem.payload?.somedayItem;

    if (somedayItem && !appState.somedayItems.some(item => item.id === somedayItem.id)) {
      appState.somedayItems.unshift({
        id: somedayItem.id || createId(),
        title: somedayItem.title,
        note: typeof somedayItem.note === "string" ? somedayItem.note : "",
        createdAt: normalizeTimestamp(somedayItem.createdAt) || new Date().toISOString()
      });
    }
  }

  if (trashItem.kind === "reference") {
    const referenceItem = trashItem.payload?.referenceItem;

    if (referenceItem && !appState.referenceItems.some(item => item.id === referenceItem.id)) {
      appState.referenceItems.unshift({
        id: referenceItem.id || createId(),
        title: referenceItem.title,
        link: typeof referenceItem.link === "string" ? referenceItem.link : "",
        note: typeof referenceItem.note === "string" ? referenceItem.note : "",
        createdAt: normalizeTimestamp(referenceItem.createdAt) || new Date().toISOString()
      });
    }
  }

  appState.trashItems = appState.trashItems.filter(item => item.id !== trashItemId);
  return true;
}

function getTrashKindLabel(kind) {
  const labels = {
    actionTask: "Action task",
    inbox: "Inbox",
    waiting: "Waiting For",
    project: "Project",
    someday: "Someday / Maybe",
    reference: "Reference"
  };

  return labels[kind] || kind;
}

function getGtdStats() {
  const openActionTasks = getOpenActionTaskEntries().length;

  return {
    inbox: appState.inboxItems.length,
    nextActions: openActionTasks,
    waiting: appState.waitingItems.filter(item => item.status !== "Done").length,
    projects: appState.projects.length,
    someday: appState.somedayItems.length,
    reference: appState.referenceItems.length,
    trash: appState.trashItems.length
  };
}

function getBudgetCategoryById(categoryId) {
  return appState.budgetCategories.find(category => category.id === categoryId);
}

function getBudgetCategoryDeletionCopy(category) {
  if (category.items.length === 0) {
    return {
      detail: "This category is empty.",
      confirmMessage: `Delete \"${category.title}\"?`
    };
  }

  const itemLabel = category.items.length === 1 ? "1 item" : `${category.items.length} items`;

  return {
    detail: `${itemLabel} in this section will be permanently deleted.`,
    confirmMessage: `Delete \"${category.title}\"? ${itemLabel} in this section will be permanently deleted.`
  };
}

function deleteBudgetCategory(categoryId) {
  const category = getBudgetCategoryById(categoryId);

  if (!category) {
    return null;
  }

  const deletedItemCount = category.items.length;

  if (category.items.some(item => item.id === uiState.budgetEditorId)) {
    uiState.budgetEditorId = null;
  }

  appState.budgetCategories = appState.budgetCategories.filter(entry => entry.id !== categoryId);

  if (uiState.selectedBudgetCategory === categoryId) {
    uiState.selectedBudgetCategory = "all";
  }

  return {
    deletedCategoryTitle: category.title,
    movedItemCount: 0,
    deletedItemCount,
    moveTargetTitle: ""
  };
}

function findBudgetItem(itemId) {
  for (const category of appState.budgetCategories) {
    const item = category.items.find(entry => entry.id === itemId);

    if (item) {
      return { category, item };
    }
  }

  return null;
}

function getBudgetItemSortOrderValue(item) {
  const parsedOrder = Number(item?.sortOrder);
  return Number.isFinite(parsedOrder) ? parsedOrder : null;
}

function getBudgetEntries(selectedCategory = uiState.selectedBudgetCategory) {
  if (selectedCategory === "all") {
    const entries = appState.budgetCategories.flatMap(category =>
      category.items.map(item => ({
        category,
        item
      }))
    );

    const hasAnyPersistedOrder = entries.some(entry => getBudgetItemSortOrderValue(entry.item) !== null);

    if (!hasAnyPersistedOrder) {
      return entries;
    }

    const maxPersistedOrder = entries.reduce((maxOrder, entry) => {
      const orderValue = getBudgetItemSortOrderValue(entry.item);
      return orderValue !== null && orderValue > maxOrder ? orderValue : maxOrder;
    }, -1);
    const fallbackOrderBase = maxPersistedOrder + 1;

    return entries
      .map((entry, index) => ({ entry, index }))
      .sort((left, right) => {
        const leftOrder = getBudgetItemSortOrderValue(left.entry.item);
        const rightOrder = getBudgetItemSortOrderValue(right.entry.item);
        const leftValue = leftOrder !== null ? leftOrder : fallbackOrderBase + left.index;
        const rightValue = rightOrder !== null ? rightOrder : fallbackOrderBase + right.index;
        return leftValue - rightValue;
      })
      .map(wrapper => wrapper.entry);
  }

  const category = getBudgetCategoryById(selectedCategory);

  if (!category) {
    return [];
  }

  return category.items.map(item => ({ category, item }));
}

function getActionStats() {
  const tasks = getActiveSections().flatMap(section => section.tasks);
  const completed = tasks.filter(task => task.done).length;
  const open = tasks.length - completed;
  const urgent = getSectionById("importantUrgent")?.tasks.filter(task => !task.done).length || 0;

  return {
    total: tasks.length,
    completed,
    open,
    urgent
  };
}

function getBudgetStats() {
  let income = 0;
  let planned = 0;
  let settled = 0;
  let savings = 0;
  let openItems = 0;

  appState.budgetCategories.forEach(category => {
    category.items.forEach(item => {
      const usdAmount = itemAmountInUSD(item);
      if (category.id === "payroll") {
        income += usdAmount;
      } else {
        planned += usdAmount;
      }

      if (category.id === "savings") {
        savings += usdAmount;
      }

      if (item.checked) {
        settled += usdAmount;
      } else {
        openItems += 1;
      }
    });
  });

  return {
    income,
    planned,
    settled,
    savings,
    openItems,
    remaining: income - planned
  };
}

function getTodaysPriorities(limit = 5) {
  const priorities = [];

  PRIORITY_ORDER.forEach(sectionId => {
    const section = getSectionById(sectionId);

    if (!section) {
      return;
    }

    section.tasks.forEach(task => {
      if (!task.done && priorities.length < limit) {
        priorities.push({
          sectionTitle: section.title,
          title: task.title
        });
      }
    });
  });

  return priorities;
}

function getRecentNotes(limit = 4) {
  return [...appState.notes]
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
    .slice(0, limit);
}

function formatCurrency(value) {
  return currencyFormatter.format(value || 0);
}

function formatDateLabel(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(new Date(dateValue));
}

function formatShortDate(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(dateValue));
}

function formatBackupFileDate(dateValue = new Date()) {
  const year = dateValue.getFullYear();
  const month = String(dateValue.getMonth() + 1).padStart(2, "0");
  const day = String(dateValue.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatBackupFileDateTime(dateValue = new Date()) {
  const year = dateValue.getFullYear();
  const month = String(dateValue.getMonth() + 1).padStart(2, "0");
  const day = String(dateValue.getDate()).padStart(2, "0");
  const hour = String(dateValue.getHours()).padStart(2, "0");
  const minute = String(dateValue.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day}_${hour}-${minute}`;
}

function getAuxiliaryBackupStorageKeys() {
  return [
    LEGACY_ACTION_STORAGE_KEY,
    ACTION_DAILY_STORAGE_KEY,
    DIARY_STORAGE_KEY,
    DATES_BOARD_STORAGE_KEY,
    BITS_STORAGE_KEY,
    LESSONS_LEARNED_STORAGE_KEY,
    EXPENSE_TRACKER_STORAGE_KEY
  ];
}

function collectAuxiliaryStorageSnapshot() {
  const snapshot = {};

  getAuxiliaryBackupStorageKeys().forEach(storageKey => {
    const raw = localStorage.getItem(storageKey);

    if (typeof raw === "string") {
      snapshot[storageKey] = raw;
    }
  });

  return snapshot;
}

function restoreAuxiliaryStorageSnapshot(auxiliaryStorage) {
  if (!auxiliaryStorage || typeof auxiliaryStorage !== "object" || Array.isArray(auxiliaryStorage)) {
    return;
  }

  const allowedKeys = new Set(getAuxiliaryBackupStorageKeys());

  Object.entries(auxiliaryStorage).forEach(([storageKey, rawValue]) => {
    if (!allowedKeys.has(storageKey) || typeof rawValue !== "string") {
      return;
    }

    localStorage.setItem(storageKey, rawValue);
  });
}

function setBackupStatus(message, tone = "info") {
  backupUiState = {
    ...backupUiState,
    message,
    tone
  };
  updateStorageBackupPanel();
}

function getBackupHistoryTypeLabel(type) {
  switch (type) {
    case "pre-restore":
      return "Pre-restore";
    case "hourly":
      return "Hourly";
    case "daily":
      return "Daily";
    case "restore":
      return "Restore";
    case "export":
      return "Export";
    default:
      return "Manual";
  }
}

function recordBackupHistoryEntry({ type = "manual", fileName, createdAt, note = "" }) {
  const entry = {
    id: createId(),
    type,
    fileName: fileName || "",
    createdAt: createdAt || new Date().toISOString(),
    note
  };

  backupUiState = {
    ...backupUiState,
    historyEntries: [entry, ...backupUiState.historyEntries].slice(0, 40)
  };

  updateStorageBackupPanel();
}

function updateStorageBackupPanel() {
  const backupStatus = document.getElementById("backupStatus");
  const lastSavedStamp = document.getElementById("lastSavedStamp");
  const backupHistoryList = document.getElementById("backupHistoryList");
  const backupHistoryEmpty = document.getElementById("backupHistoryEmpty");

  if (lastSavedStamp) {
    lastSavedStamp.textContent = appState.lastSavedAt
      ? `Last saved ${formatShortDate(appState.lastSavedAt)}`
      : "No local save timestamp yet";
  }

  if (backupStatus) {
    backupStatus.textContent = backupUiState.message;
    backupStatus.dataset.tone = backupUiState.tone;
  }

  if (backupHistoryList && backupHistoryEmpty) {
    const historyEntries = Array.isArray(backupUiState.historyEntries)
      ? backupUiState.historyEntries
      : [];

    backupHistoryList.textContent = "";

    if (historyEntries.length === 0) {
      backupHistoryList.hidden = true;
      backupHistoryEmpty.hidden = false;
      return;
    }

    backupHistoryList.hidden = false;
    backupHistoryEmpty.hidden = true;

    historyEntries.forEach(entry => {
      const item = document.createElement("li");
      item.className = "settings-history-item";

      const row = document.createElement("div");
      row.className = "settings-history-item__row";

      const typeBadge = document.createElement("span");
      typeBadge.className = "settings-history-item__type";
      typeBadge.textContent = getBackupHistoryTypeLabel(entry.type);

      const timeValue = new Date(entry.createdAt);
      const timeStamp = document.createElement("span");
      timeStamp.className = "settings-history-item__time";
      timeStamp.textContent = Number.isNaN(timeValue.getTime())
        ? "Unknown time"
        : formatShortDate(timeValue);

      row.append(typeBadge, timeStamp);

      const fileLabel = document.createElement("p");
      fileLabel.className = "settings-history-item__file";
      fileLabel.textContent = entry.fileName || "Backup file";

      item.append(row, fileLabel);

      if (entry.note) {
        const note = document.createElement("p");
        note.className = "settings-history-item__note";
        note.textContent = entry.note;
        item.append(note);
      }

      backupHistoryList.append(item);
    });
  }
}

function buildBackupPayload(exportedAt = new Date()) {
  const exportedIso = exportedAt.toISOString();

  return {
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    exportedAt: exportedIso,
    lastSavedAt: appState.lastSavedAt || null,
    data: getStateSnapshot(appState.lastSavedAt || null),
    auxiliaryStorage: collectAuxiliaryStorageSnapshot()
  };
}

function buildBackupFileName(backupType = "manual", dateValue = new Date()) {
  if (backupType === "daily") {
    return `personal_dock_daily_${formatBackupFileDate(dateValue)}.json`;
  }

  if (backupType === "hourly") {
    return `personal_dock_hourly_${formatBackupFileDateTime(dateValue)}.json`;
  }

  if (backupType === "pre-restore") {
    return `personal_dock_pre_restore_${formatBackupFileDateTime(dateValue)}.json`;
  }

  if (backupType === "export") {
    return `personal_dock_export_${formatBackupFileDateTime(dateValue)}.json`;
  }

  return `personal_dock_manual_${formatBackupFileDateTime(dateValue)}.json`;
}

function downloadJsonBackup(options = {}) {
  const {
    backupType = "manual",
    historyType = backupType,
    createdAt = new Date(),
    statusMessage,
    statusTone = "success",
    recordHistory = true
  } = options;

  const payload = JSON.stringify(buildBackupPayload(createdAt), null, 2);
  const fileName = buildBackupFileName(backupType, createdAt);
  const blob = new Blob([payload], { type: "application/json" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);

  if (recordHistory) {
    recordBackupHistoryEntry({
      type: historyType,
      fileName,
      createdAt: createdAt.toISOString()
    });
  }

  if (statusMessage !== null) {
    const defaultStatusMessage = backupType === "export"
      ? `Exported ${fileName}.`
      : backupType === "pre-restore"
        ? `Created pre-restore backup ${fileName}.`
        : "Backup created.";

    setBackupStatus(typeof statusMessage === "string" ? statusMessage : defaultStatusMessage, statusTone);
  }

  return fileName;
}

function validateBackupShape(candidateState) {
  if (!candidateState || typeof candidateState !== "object" || Array.isArray(candidateState)) {
    throw new Error("The selected file does not contain a valid PersonalDock backup.");
  }

  if (candidateState.activeView && !VIEW_DETAILS[candidateState.activeView]) {
    throw new Error("The backup file includes an invalid active view.");
  }

  if (candidateState.selectedBudgetCategory && typeof candidateState.selectedBudgetCategory !== "string") {
    throw new Error("The backup file includes an invalid selected budget category.");
  }

  if (!Array.isArray(candidateState.actionSections) || candidateState.actionSections.some(section => typeof section?.id !== "string")) {
    throw new Error("The backup file is missing valid action board sections.");
  }

  if (!Array.isArray(candidateState.budgetCategories) || candidateState.budgetCategories.some(category => typeof category?.id !== "string")) {
    throw new Error("The backup file is missing valid budget categories.");
  }

  if (candidateState.budgetPlanner && (typeof candidateState.budgetPlanner !== "object" || Array.isArray(candidateState.budgetPlanner))) {
    throw new Error("The backup file includes invalid budget planner data.");
  }

  if (!Array.isArray(candidateState.notes) || candidateState.notes.some(note => typeof note !== "object" || note === null)) {
    throw new Error("The backup file is missing valid notes.");
  }

  if (!Array.isArray(candidateState.waitingItems) || candidateState.waitingItems.some(item => typeof item !== "object" || item === null)) {
    throw new Error("The backup file is missing valid waiting items.");
  }

  if (candidateState.inboxItems && !Array.isArray(candidateState.inboxItems)) {
    throw new Error("The backup file includes invalid inbox items.");
  }

  if (candidateState.projects && !Array.isArray(candidateState.projects)) {
    throw new Error("The backup file includes invalid projects.");
  }

  if (candidateState.somedayItems && !Array.isArray(candidateState.somedayItems)) {
    throw new Error("The backup file includes invalid someday items.");
  }

  if (candidateState.referenceItems && !Array.isArray(candidateState.referenceItems)) {
    throw new Error("The backup file includes invalid reference items.");
  }

  if (candidateState.trashItems && !Array.isArray(candidateState.trashItems)) {
    throw new Error("The backup file includes invalid trash items.");
  }

  if (candidateState.promises && !Array.isArray(candidateState.promises)) {
    throw new Error("The backup file includes invalid promise items.");
  }

  if (candidateState.calendarEvents && !Array.isArray(candidateState.calendarEvents)) {
    throw new Error("The backup file includes invalid calendar events.");
  }

  return candidateState;
}

function extractBackupState(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    throw new Error("The selected file does not contain a valid PersonalDock backup.");
  }

  const candidateState = payload.format === BACKUP_FORMAT ? payload.data : payload;
  const validatedState = validateBackupShape(candidateState);

  const state = {
    ...validatedState,
    lastSavedAt: validatedState.lastSavedAt || payload.lastSavedAt || null
  };

  const auxiliaryStorage = payload.auxiliaryStorage;

  return {
    state,
    auxiliaryStorage: auxiliaryStorage && typeof auxiliaryStorage === "object" && !Array.isArray(auxiliaryStorage)
      ? auxiliaryStorage
      : null
  };
}

async function importJsonBackup(file) {
  if (!file) {
    return;
  }

  if (!file.name.toLowerCase().endsWith(".json")) {
    throw new Error("Please choose a .json backup file.");
  }

  const fileText = await file.text();
  const parsed = JSON.parse(fileText);
  const extractedBackup = extractBackupState(parsed);
  const importedState = normalizeState(extractedBackup.state);

  appState = importedState;
  uiState = {
    activeView: importedState.activeView,
    selectedBudgetCategory: importedState.selectedBudgetCategory,
    budgetEditorId: null,
    showBudgetCategoryManager: false,
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth(),
    selectedPlannerSection: "all",
    selectedBudgetPlanningPeriod: DEFAULT_BUDGET_PLANNING_PERIOD
  };
  restoreAuxiliaryStorageSnapshot(extractedBackup.auxiliaryStorage);
  saveState({ touch: false, lastSavedAt: importedState.lastSavedAt });
  renderApp();

  return {
    fileName: file.name
  };
}

let _activeEditorAutosave = null;

function clearActiveEditorAutosave() {
  if (_activeEditorAutosave && typeof _activeEditorAutosave.dispose === "function") {
    _activeEditorAutosave.dispose();
  }

  _activeEditorAutosave = null;
}

function registerActiveEditorAutosave(autosaveController) {
  clearActiveEditorAutosave();
  _activeEditorAutosave = autosaveController || null;
}

function flushActiveEditorAutosave() {
  if (!_activeEditorAutosave || typeof _activeEditorAutosave.flush !== "function") {
    return false;
  }

  return Boolean(_activeEditorAutosave.flush());
}

function createEditorAutosaveController({ delayMs = 700, getDraft, saveDraft, updateStatus }) {
  let timerId = null;
  let isDisposed = false;
  let lastSavedKey = getDraft().key;

  function setStatus(state, text) {
    if (typeof updateStatus === "function") {
      updateStatus(state, text);
    }
  }

  function clearTimer() {
    if (timerId !== null) {
      window.clearTimeout(timerId);
      timerId = null;
    }
  }

  function queueSave() {
    if (isDisposed) {
      return;
    }

    const snapshot = getDraft();

    if (snapshot.key === lastSavedKey) {
      setStatus("saved", "Saved");
      clearTimer();
      return;
    }

    setStatus("unsaved", "Unsaved changes");
    clearTimer();
    timerId = window.setTimeout(() => {
      flush();
    }, delayMs);
  }

  function flush() {
    if (isDisposed) {
      return false;
    }

    clearTimer();
    const snapshot = getDraft();

    if (snapshot.key === lastSavedKey) {
      setStatus("saved", "Saved");
      return false;
    }

    setStatus("saving", "Saving...");
    const result = saveDraft(snapshot);

    if (!result || result.saved !== true) {
      lastSavedKey = getDraft().key;
      setStatus("idle", "");
      return false;
    }

    lastSavedKey = typeof result.savedKey === "string" ? result.savedKey : getDraft().key;
    setStatus("saved", "Saved");
    return true;
  }

  function syncSavedKey(savedKey, statusState = "saved", statusText = "Saved") {
    clearTimer();
    lastSavedKey = typeof savedKey === "string" ? savedKey : getDraft().key;
    setStatus(statusState, statusText);
  }

  function dispose() {
    isDisposed = true;
    clearTimer();
  }

  return {
    queueSave,
    flush,
    syncSavedKey,
    dispose
  };
}

function setActiveView(view) {
  if (!VIEW_DETAILS[view]) {
    return;
  }

  flushActiveEditorAutosave();

  uiState.activeView = view;
  uiState.budgetEditorId = null;
  saveState();
  renderApp();
}

function setBudgetCategory(categoryId) {
  uiState.selectedBudgetCategory = getBudgetCategoryIds().includes(categoryId) ? categoryId : "all";
  uiState.budgetEditorId = null;
  saveState();
  renderApp();
}

// Central registry for view -> render function mapping.
// Keeping this in one place makes it easier to add new views without
// growing conditional chains inside renderApp().
const VIEW_RENDERERS = {
  dashboard: renderDashboard,
  actionBoard: renderActionBoard,
  waitingFor: renderWaitingFor,
  budgetPlanner: renderBudgetPlanner,
  expenseTracker: renderExpenseTracker,
  budgetPlanning: renderBudgetPlanning,
  promise: renderPromise,
  calendar: renderCalendar,
  settings: renderSettings,
  planner: renderPlanner,
  diary: renderDiary,
  bits: renderBits,
  datesBoard: renderDatesBoard,
  lessonsLearned: renderLessonsLearned
};

function renderActiveView(view) {
  const renderer = VIEW_RENDERERS[view] || renderBudgetPlanner;
  renderer();
}

function renderApp() {
  clearActiveEditorAutosave();

  if (uiState.activeView !== "calendar" && _calendarDragAbort) {
    _calendarDragAbort.abort();
    _calendarDragAbort = null;
  }
  if (uiState.activeView !== "calendar") {
    if (_calendarPickerAbort) { _calendarPickerAbort.abort(); _calendarPickerAbort = null; }
    if (_calendarNowLineTimer) { window.clearInterval(_calendarNowLineTimer); _calendarNowLineTimer = null; }
    uiState.calendarPickerOpen = false;
  }
  if (_abCopySelectAbort) { _abCopySelectAbort.abort(); _abCopySelectAbort = null; }
  if (uiState.activeView !== "actionBoard" && _activeDailySections) {
    clearActiveDailyBoard();
  }
  todayStamp.textContent = formatDateLabel(new Date());
  viewDescription.textContent = VIEW_DETAILS[uiState.activeView];
  updateStorageBackupPanel();

  Array.from(viewNav.querySelectorAll(".nav-btn")).forEach(button => {
    button.classList.toggle("is-active", button.dataset.view === uiState.activeView);
  });

  viewRoot.innerHTML = "";
  renderActiveView(uiState.activeView);
}

function renderDashboard() {
  const actionStats = getActionStats();
  const priorities = getTodaysPriorities();
  const notes = getRecentNotes();

  viewRoot.innerHTML = `
    <section class="dashboard-grid">
      <article class="hero-panel">
        <div class="section-kicker">Today's home page</div>
        <h2 class="hero-title">Keep today calm, visible, and small enough that you can actually finish it well.</h2>
        <p class="hero-copy">
          Dinosaur's La La Land brings task areas and recent notes into one simple front-end workspace for long-term personal use.
        </p>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-label">Open tasks</span>
            <strong class="stat-value">${actionStats.open}</strong>
          </div>
          <div class="stat-card">
            <span class="stat-label">Urgent today</span>
            <strong class="stat-value">${actionStats.urgent}</strong>
          </div>
        </div>

        <div class="shortcut-row">
          <button type="button" class="shortcut-btn" data-target-view="actionBoard">Open Action Board</button>
        </div>
      </article>

      <article class="panel">
        <h2 class="panel-title">Today's priorities</h2>
        <p class="panel-subtitle">Surface the first unfinished items from your most important sections.</p>
        <ul class="priority-list" id="priorityList"></ul>
      </article>

      <article class="panel">
        <h2 class="panel-title">Recent notes</h2>
        <p class="panel-subtitle">Keep a few short reminders visible here.</p>
        <ul class="notes-list" id="recentNotesList"></ul>

        <form class="note-form" id="noteForm">
          <textarea id="noteInput" rows="3" maxlength="240" placeholder="Write down a thought, reminder, or decision"></textarea>
          <button type="submit" class="primary-btn">Save note</button>
        </form>
      </article>
    </section>
  `;

  const priorityList = document.getElementById("priorityList");

  if (priorities.length === 0) {
    priorityList.appendChild(createEmptyState("There are no priority tasks right now. Add one if today still needs direction."));
  } else {
    priorities.forEach(priority => {
      const item = document.createElement("li");
      item.className = "priority-item";
      item.innerHTML = `
        <div>
          <strong>${priority.title}</strong>
          <p>${priority.sectionTitle}</p>
        </div>
        <span class="pill">Next</span>
      `;
      priorityList.appendChild(item);
    });
  }

  const recentNotesList = document.getElementById("recentNotesList");

  if (notes.length === 0) {
    recentNotesList.appendChild(createEmptyState("There are no notes yet. Add a small reminder to make this space useful."));
  } else {
    notes.forEach(note => {
      const item = document.createElement("li");
      item.className = "note-item";
      item.innerHTML = `
        <div>
          <strong>${note.text}</strong>
          <span class="note-meta">${formatShortDate(note.createdAt)}</span>
        </div>
      `;

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "tiny-btn note-delete";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        appState.notes = appState.notes.filter(entry => entry.id !== note.id);
        saveState();
        renderApp();
      });

      item.appendChild(deleteButton);
      recentNotesList.appendChild(item);
    });
  }

  document.querySelectorAll("[data-target-view]").forEach(button => {
    button.addEventListener("click", () => {
      setActiveView(button.dataset.targetView);
    });
  });

  document.getElementById("noteForm").addEventListener("submit", event => {
    event.preventDefault();
    const noteInput = document.getElementById("noteInput");
    const text = noteInput.value.trim();

    if (!text) {
      return;
    }

    appState.notes.unshift(createNote(text));
    appState.notes = appState.notes.slice(0, 24);
    noteInput.value = "";
    saveState();
    renderApp();
  });
}

function renderActionBoard() {
  // ── resolve active date + week ──────────────────────────────────────────
  const todayIso = getTodayIso();
  const activeDate = uiState.actionBoardDate || todayIso;
  uiState.actionBoardDate = activeDate;

  function isoMonday(dateStr) {
    const d = new Date(dateStr + "T00:00:00");
    const dow = d.getDay();
    const diff = (dow === 0 ? -6 : 1 - dow);
    const mon = new Date(d);
    mon.setDate(d.getDate() + diff);
    return mon.toISOString().slice(0, 10);
  }

  if (!uiState.actionBoardWeekStart) {
    uiState.actionBoardWeekStart = isoMonday(activeDate);
  }
  const weekStart = uiState.actionBoardWeekStart;

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart + "T00:00:00");
    d.setDate(d.getDate() + i);
    return d.toISOString().slice(0, 10);
  });

  // Load the active day's board into _activeDailySections
  setActiveDailyBoard(activeDate);

  const actionStats = getActionStats();
  const activeSections = getActiveSections();
  const leftColumnSections = activeSections.filter(section => LEFT_COLUMN_SECTION_IDS.includes(section.id));
  const quadrantSections = activeSections.filter(section => QUADRANT_SECTION_IDS.includes(section.id));
  const secondarySections = activeSections.filter(section =>
    ![...LEFT_COLUMN_SECTION_IDS, ...QUADRANT_SECTION_IDS].includes(section.id)
  );

  // ── build week-nav day tabs HTML ──────────────────────────────────────────
  const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayTabsHtml = weekDays.map((dateStr, i) => {
    const dayNum = parseInt(dateStr.slice(8), 10);
    const monthNum = parseInt(dateStr.slice(5, 7), 10);
    const isToday = dateStr === todayIso;
    const isActive = dateStr === activeDate;
    const cls = ["ab-day-tab",
      isToday  ? "is-today"  : "",
      isActive ? "is-active" : ""
    ].filter(Boolean).join(" ");
    return `<button type="button" class="${cls}" data-date="${dateStr}">
      <span class="ab-day-tab__label">${DAY_LABELS[i]}</span>
      <span class="ab-day-tab__num">${monthNum}/${dayNum}</span>
    </button>`;
  }).join("");

  // ── build copy-source options ─────────────────────────────────────────────
  function isIsoDateString(value) {
    return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value);
  }

  function getBoardTaskCount(rawSections) {
    if (!Array.isArray(rawSections)) return 0;
    return rawSections.reduce((total, section) => {
      if (!section || !Array.isArray(section.tasks)) return total;
      return total + section.tasks.filter(task =>
        task && typeof task.title === "string" && task.title.trim()
      ).length;
    }, 0);
  }

  function getDayDiffFromToday(dateStr) {
    if (!isIsoDateString(dateStr)) return null;
    const base = new Date(todayIso + "T00:00:00");
    const target = new Date(dateStr + "T00:00:00");
    if (Number.isNaN(base.getTime()) || Number.isNaN(target.getTime())) return null;
    return Math.round((target - base) / 86400000);
  }

  function formatCopySourceLabel(dateStr, taskCount) {
    const relative = getDayDiffFromToday(dateStr);
    const taskLabel = `${taskCount} task${taskCount === 1 ? "" : "s"}`;

    if (relative === 0) {
      return `Today — ${dateStr} — ${taskLabel}`;
    }
    if (relative === -1) {
      return `Yesterday — ${dateStr} — ${taskLabel}`;
    }
    if (relative === 1) {
      return `Tomorrow — ${dateStr} — ${taskLabel}`;
    }

    return `${dateStr} — ${taskLabel}`;
  }

  const boards = loadDailyBoards();
  const boardTaskCounts = new Map();
  const seenBoardDates = new Set();

  Object.keys(boards).forEach(dateStr => {
    if (!isIsoDateString(dateStr) || seenBoardDates.has(dateStr)) return;
    seenBoardDates.add(dateStr);

    const taskCount = getBoardTaskCount(boards[dateStr]);
    if (taskCount > 0) {
      boardTaskCounts.set(dateStr, taskCount);
    }
  });

  const boardDates = Array.from(boardTaskCounts.keys())
    .filter(d => d !== activeDate)
    .sort((a, b) => b.localeCompare(a));

  // Sync selected copy-source with available dates
  if (!("abCopySourceDate" in uiState)) uiState.abCopySourceDate = null;
  if (!("abCopySourceCustomDate" in uiState)) uiState.abCopySourceCustomDate = "";
  if (!("abCopySourceIsCustom" in uiState)) uiState.abCopySourceIsCustom = false;

  if (boardDates.length && !uiState.abCopySourceIsCustom && !boardDates.includes(uiState.abCopySourceDate)) {
    uiState.abCopySourceDate = boardDates[0];
  }
  if (!boardDates.length && !uiState.abCopySourceIsCustom) uiState.abCopySourceDate = null;

  const copySrcLabel = uiState.abCopySourceDate
    ? (boardTaskCounts.has(uiState.abCopySourceDate)
        ? formatCopySourceLabel(uiState.abCopySourceDate, boardTaskCounts.get(uiState.abCopySourceDate))
        : `${uiState.abCopySourceDate} — no saved tasks`)
    : "No task dates";

  const copySelectHtml = boardDates.length
    ? `<div class="gtd-cselect ab-copy-cselect" id="abCopySourceWidget">
        <button type="button" class="gtd-cselect__trigger" id="abCopySourceTrigger">
          <span class="gtd-cselect__label" id="abCopySourceLabel">${copySrcLabel}</span>
          <span class="gtd-cselect__arrow">&#9660;</span>
        </button>
        <div class="gtd-cselect__dropdown" id="abCopySourceDropdown" hidden>
          ${boardDates.map(d => {
            const optionLabel = formatCopySourceLabel(d, boardTaskCounts.get(d));
            return `<button type="button" class="gtd-cselect__option${d === uiState.abCopySourceDate ? " is-selected" : ""}" data-value="${d}" data-label="${optionLabel}">${optionLabel}</button>`;
          }).join("")}
        </div>
      </div>`
    : `<span class="ab-copy-row__label ab-copy-row__empty">No saved task dates yet</span>`;

  const customCopyDateValue = isIsoDateString(uiState.abCopySourceCustomDate) ? uiState.abCopySourceCustomDate : "";

  viewRoot.innerHTML = `
    <section class="view-panel">
      <div class="view-panel__top">
        <div>
          <h2 class="panel-title">Action Board</h2>
          <p class="panel-subtitle">Organize tasks by energy, urgency, and life context.</p>
        </div>

        <div class="view-actions">
          <div class="inline-stats">
            <span class="inline-stat">${actionStats.open} open</span>
            <span class="inline-stat">${actionStats.completed} completed</span>
            <span class="inline-stat">${actionStats.urgent} urgent</span>
          </div>
          <button type="button" class="secondary-btn" id="clearCompletedTasksBtn">Clear completed tasks</button>
        </div>
      </div>

      <div class="ab-week-nav">
        <button type="button" class="ab-week-nav__arrow" id="abPrevWeek" aria-label="Previous week">&#8249;</button>
        <div class="ab-day-tabs" id="abDayTabs">${dayTabsHtml}</div>
        <button type="button" class="ab-week-nav__arrow" id="abNextWeek" aria-label="Next week">&#8250;</button>
      </div>

      <div class="ab-copy-row">
        <span class="ab-copy-row__label">Copy tasks from:</span>
        ${copySelectHtml}
        <div class="ab-copy-custom" aria-label="Custom copy source date">
          <input type="date" class="ab-copy-custom__input" id="abCopyCustomDateInput" value="${customCopyDateValue}" />
          <button type="button" class="tiny-btn ab-copy-custom__btn" id="abCopyCustomDateBtn">Use date</button>
        </div>
        <button type="button" class="secondary-btn ab-copy-row__btn" id="abCopyBtn">Copy</button>
        <button type="button" class="ghost-btn ab-copy-row__btn" id="abCopyYesterdayBtn">Yesterday</button>
      </div>

      <div class="action-board-layout">
        <div class="action-board-layout__left" id="actionLeftColumn"></div>

        <div class="action-board-layout__main">
          <section class="quadrant-panel">
            <div class="quadrant-panel__header">
              <div>
                <h3 class="panel-title">Eisenhower Matrix</h3>
                <p class="panel-subtitle">Keep priority and urgency together in one clear 2 x 2 block.</p>
              </div>
            </div>

            <div class="quadrant-grid" id="quadrantGrid"></div>
          </section>

          <div class="action-secondary-grid" id="actionSecondaryGrid"></div>
        </div>
      </div>

      <div class="action-completed-panel" id="actionCompletedPanel" hidden></div>
    </section>
  `;

  const actionLeftColumn = document.getElementById("actionLeftColumn");
  const quadrantGrid = document.getElementById("quadrantGrid");
  const actionSecondaryGrid = document.getElementById("actionSecondaryGrid");

  [...leftColumnSections, ...quadrantSections, ...secondarySections].forEach(section => {
    const sectionFragment = actionTemplate.content.cloneNode(true);
    const card = sectionFragment.querySelector(".section-card");
    const emoji = sectionFragment.querySelector(".section-card__emoji");
    const title = sectionFragment.querySelector(".section-card__title");
    const meta = sectionFragment.querySelector(".section-card__meta");
    const count = sectionFragment.querySelector(".section-card__count");
    const taskList = sectionFragment.querySelector(".task-list");
    const form = sectionFragment.querySelector(".section-form");
    const input = sectionFragment.querySelector("input");
    const taskLimit = getTaskLimit(section.id);
    const limitMessage = document.createElement("p");

    limitMessage.className = "section-form__message";
    limitMessage.hidden = true;
    form.insertAdjacentElement("afterend", limitMessage);

    card.style.setProperty("--section-accent", section.accent);

    if (quadrantSections.some(item => item.id === section.id)) {
      card.classList.add("is-quadrant-card");
    } else if (leftColumnSections.some(item => item.id === section.id)) {
      card.classList.add("is-column-card");
    } else if (section.size === "tall") {
      card.classList.add("is-tall");
    }

    emoji.textContent = section.emoji;
    title.textContent = section.title;

    const openCount = section.tasks.filter(task => !task.done).length;
    meta.textContent = openCount === 1 ? "1 item still open" : `${openCount} items still open`;
    count.textContent = `${section.tasks.length} total`;
    input.setAttribute("aria-label", `Add a task to ${section.title}`);

    if (openCount === 0) {
      taskList.appendChild(createEmptyState(""));
    } else {
      section.tasks.filter(task => !task.done).forEach(task => {
        const isExpanded = uiState.expandedTaskIds.has(task.id);

        const item = document.createElement("li");
        item.className = "task-item";

        // ── checkbox ──────────────────────────────────────────────────────
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = false;
        checkbox.addEventListener("change", () => {
          uiState.justCompletedTaskId = task.id;
          item.classList.add("is-completing");
          setTimeout(() => {
            task.done = true;
            saveActiveDailyBoard();
            saveState();
            renderApp();
          }, 270);
        });

        // ── title ─────────────────────────────────────────────────────────
        const titleNode = document.createElement("span");
        titleNode.className = "task-title";
        titleNode.innerHTML = renderInlineMarkdown(task.title);

        // ── action buttons ────────────────────────────────────────────────
        const hasDetails = Boolean(task.note) || (Array.isArray(task.subtasks) && task.subtasks.length > 0);

        const expandBtn = document.createElement("button");
        expandBtn.type = "button";
        expandBtn.className = "icon-btn task-expand-btn" +
          (isExpanded  ? " is-open"      : "") +
          (hasDetails  ? " has-details"  : "");
        expandBtn.textContent = "▾";
        expandBtn.setAttribute("title", "Notes & checklist");
        expandBtn.setAttribute("aria-label", "Toggle task details");

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "icon-btn";
        deleteButton.textContent = "x";
        deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
        deleteButton.addEventListener("click", () => {
          discardActionTask(task.id);
          saveState();
          renderApp();
        });

        const btnRow = document.createElement("div");
        btnRow.className = "task-item__btns";
        btnRow.appendChild(expandBtn);
        btnRow.appendChild(deleteButton);

        // ── details panel ─────────────────────────────────────────────────
        const detailsPanel = document.createElement("div");
        detailsPanel.className = "task-details" + (isExpanded ? " is-visible" : "");

        // Note
        const noteGroup = document.createElement("div");
        noteGroup.className = "task-details__group";

        const noteLabel = document.createElement("label");
        noteLabel.className = "task-details__label";
        noteLabel.textContent = "Note";

        const noteInput = document.createElement("textarea");
        noteInput.className = "task-note-input";
        noteInput.placeholder = "Add a note…";
        noteInput.maxLength = 500;
        noteInput.rows = 2;
        noteInput.value = task.note || "";
        noteInput.addEventListener("blur", () => {
          task.note = noteInput.value.trim();
          const hd = Boolean(task.note) || task.subtasks.length > 0;
          expandBtn.classList.toggle("has-details", hd);
          saveActiveDailyBoard();
          saveState();
        });

        noteGroup.appendChild(noteLabel);
        noteGroup.appendChild(noteInput);

        // Checklist
        const checklistGroup = document.createElement("div");
        checklistGroup.className = "task-details__group";

        const checklistLabel = document.createElement("label");
        checklistLabel.className = "task-details__label";
        checklistLabel.textContent = "Checklist";

        const subtaskListEl = document.createElement("ul");
        subtaskListEl.className = "subtask-list";

        const refreshSubtasks = () => {
          subtaskListEl.innerHTML = "";
          (task.subtasks || []).forEach(sub => {
            const li = document.createElement("li");
            li.className = "subtask-item";

            const subCheck = document.createElement("input");
            subCheck.type = "checkbox";
            subCheck.checked = sub.done;

            const subTitle = document.createElement("span");
            subTitle.className = "subtask-title" + (sub.done ? " is-done" : "");
            subTitle.textContent = sub.title;

            subCheck.addEventListener("change", () => {
              sub.done = subCheck.checked;
              subTitle.className = "subtask-title" + (sub.done ? " is-done" : "");
              saveActiveDailyBoard();
              saveState();
            });

            const subDel = document.createElement("button");
            subDel.type = "button";
            subDel.className = "icon-btn";
            subDel.textContent = "x";
            subDel.setAttribute("aria-label", `Delete ${sub.title}`);
            subDel.addEventListener("click", () => {
              task.subtasks = task.subtasks.filter(s => s.id !== sub.id);
              saveActiveDailyBoard();
              saveState();
              refreshSubtasks();
              const hd = Boolean(task.note) || task.subtasks.length > 0;
              expandBtn.classList.toggle("has-details", hd);
            });

            li.appendChild(subCheck);
            li.appendChild(subTitle);
            li.appendChild(subDel);
            subtaskListEl.appendChild(li);
          });
        };
        refreshSubtasks();

        const subtaskForm = document.createElement("form");
        subtaskForm.className = "subtask-add-form";

        const subtaskInput = document.createElement("input");
        subtaskInput.type = "text";
        subtaskInput.placeholder = "Add checklist item…";
        subtaskInput.maxLength = 120;

        const subtaskAddBtn = document.createElement("button");
        subtaskAddBtn.type = "submit";
        subtaskAddBtn.textContent = "Add";

        subtaskForm.appendChild(subtaskInput);
        subtaskForm.appendChild(subtaskAddBtn);
        subtaskForm.addEventListener("submit", ev => {
          ev.preventDefault();
          const val = subtaskInput.value.trim();
          if (!val) return;
          if (!Array.isArray(task.subtasks)) task.subtasks = [];
          task.subtasks.push({ id: createId(), title: val, done: false });
          saveActiveDailyBoard();
          saveState();
          subtaskInput.value = "";
          refreshSubtasks();
          expandBtn.classList.add("has-details");
        });

        checklistGroup.appendChild(checklistLabel);
        checklistGroup.appendChild(subtaskListEl);
        checklistGroup.appendChild(subtaskForm);

        detailsPanel.appendChild(noteGroup);
        detailsPanel.appendChild(checklistGroup);

        // ── expand / collapse ─────────────────────────────────────────────
        expandBtn.addEventListener("click", () => {
          const opening = !detailsPanel.classList.contains("is-visible");
          detailsPanel.classList.toggle("is-visible", opening);
          expandBtn.classList.toggle("is-open", opening);
          if (opening) {
            uiState.expandedTaskIds.add(task.id);
            noteInput.focus();
          } else {
            uiState.expandedTaskIds.delete(task.id);
            task.note = noteInput.value.trim();
            saveActiveDailyBoard();
            saveState();
          }
        });

        item.appendChild(checkbox);
        item.appendChild(titleNode);
        item.appendChild(btnRow);
        item.appendChild(detailsPanel);
        taskList.appendChild(item);
      });
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      const titleValue = input.value.trim();

      if (!titleValue) {
        return;
      }

      if (section.tasks.length >= taskLimit) {
        limitMessage.textContent = getTaskLimitMessage(section.id);
        limitMessage.hidden = false;
        input.focus();
        return;
      }

      const result = addActionTask({
        title: titleValue,
        sectionId: section.id
      });

      if (result.error) {
        limitMessage.textContent = result.error;
        limitMessage.hidden = false;
        input.focus();
        return;
      }

      input.value = "";
      limitMessage.hidden = true;
      saveState();
      renderApp();
    });

    input.addEventListener("input", () => {
      if (!limitMessage.hidden) {
        limitMessage.hidden = true;
      }
    });

    if (leftColumnSections.some(item => item.id === section.id)) {
      actionLeftColumn.appendChild(sectionFragment);
      return;
    }

    if (quadrantSections.some(item => item.id === section.id)) {
      quadrantGrid.appendChild(sectionFragment);
      return;
    }

    actionSecondaryGrid.appendChild(sectionFragment);
  });

  // ── completed panel ─────────────────────────────────────────────────────────────────
  const allCompleted = getAllActionTaskEntries().filter(e => e.task.done);
  const completedPanel = document.getElementById("actionCompletedPanel");
  const justCompletedId = uiState.justCompletedTaskId;
  uiState.justCompletedTaskId = null;   // clear so next render doesn't re-animate

  if (allCompleted.length > 0) {
    completedPanel.hidden = false;

    const box = document.createElement("div");
    box.className = "completed-panel";

    const panelHeader = document.createElement("div");
    panelHeader.className = "completed-panel__header";
    panelHeader.innerHTML = `
      <div class="completed-panel__title-row">
        <span class="completed-panel__title">Completed</span>
        <span class="completed-panel__count">${allCompleted.length} task${allCompleted.length !== 1 ? "s" : ""}</span>
      </div>
      <button type="button" class="ghost-btn" id="clearAllCompletedBtn">Clear all</button>
    `;

    const list = document.createElement("ul");
    list.className = "completed-task-list";

    allCompleted.forEach(({ section, task }) => {
      const li = document.createElement("li");
      li.className = "completed-task-item" + (task.id === justCompletedId ? " is-fading-in" : "");

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.checked = true;
      cb.addEventListener("change", () => {
        task.done = false;
        saveActiveDailyBoard();
        saveState();
        renderApp();
      });

      const titleNode = document.createElement("span");
      titleNode.className = "task-title";
      titleNode.innerHTML = renderInlineMarkdown(task.title);

      const sectionLabel = document.createElement("span");
      sectionLabel.className = "completed-task-item__section";
      sectionLabel.textContent = section.title;

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "icon-btn";
      deleteBtn.textContent = "x";
      deleteBtn.setAttribute("aria-label", `Delete ${task.title}`);
      deleteBtn.addEventListener("click", () => {
        discardActionTask(task.id);
        saveState();
        renderApp();
      });

      li.appendChild(cb);
      li.appendChild(titleNode);
      li.appendChild(sectionLabel);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });

    box.appendChild(panelHeader);
    box.appendChild(list);
    completedPanel.appendChild(box);

    document.getElementById("clearAllCompletedBtn").addEventListener("click", () => {
      const count = getAllActionTaskEntries().filter(entry => entry.task.done).length;
      if (!confirm(`Move ${count} completed task${count !== 1 ? "s" : ""} to Trash?`)) return;
      getAllActionTaskEntries()
        .filter(entry => entry.task.done)
        .map(entry => entry.task.id)
        .forEach(id => discardActionTask(id));
      saveState();
      renderApp();
    });
  }

  document.getElementById("clearCompletedTasksBtn").addEventListener("click", () => {
    const completedTaskIds = getAllActionTaskEntries()
      .filter(entry => entry.task.done)
      .map(entry => entry.task.id);

    if (!completedTaskIds.length) return;
    if (!confirm(`Move ${completedTaskIds.length} completed task${completedTaskIds.length !== 1 ? "s" : ""} to Trash?`)) return;

    completedTaskIds.forEach(taskId => {
      discardActionTask(taskId);
    });

    saveState();
    renderApp();
  });

  // ── week nav ────────────────────────────────────────────────────────────
  document.getElementById("abPrevWeek").addEventListener("click", () => {
    const d = new Date(weekStart + "T00:00:00");
    d.setDate(d.getDate() - 7);
    uiState.actionBoardWeekStart = d.toISOString().slice(0, 10);
    // If active date is outside the new week, snap to Monday of new week
    const newWeekEnd = new Date(d);
    newWeekEnd.setDate(newWeekEnd.getDate() + 6);
    if (activeDate < uiState.actionBoardWeekStart || activeDate > newWeekEnd.toISOString().slice(0, 10)) {
      uiState.actionBoardDate = uiState.actionBoardWeekStart;
    }
    renderApp();
  });

  document.getElementById("abNextWeek").addEventListener("click", () => {
    const d = new Date(weekStart + "T00:00:00");
    d.setDate(d.getDate() + 7);
    uiState.actionBoardWeekStart = d.toISOString().slice(0, 10);
    const newWeekEnd = new Date(d);
    newWeekEnd.setDate(newWeekEnd.getDate() + 6);
    if (activeDate < uiState.actionBoardWeekStart || activeDate > newWeekEnd.toISOString().slice(0, 10)) {
      uiState.actionBoardDate = uiState.actionBoardWeekStart;
    }
    renderApp();
  });

  document.getElementById("abDayTabs").addEventListener("click", ev => {
    const tab = ev.target.closest(".ab-day-tab");
    if (!tab) return;
    uiState.actionBoardDate = tab.dataset.date;
    renderApp();
  });

  // ── copy controls ────────────────────────────────────────────────────────
  function getTaskCountForSourceDate(dateStr) {
    if (!isIsoDateString(dateStr)) return 0;
    if (boardTaskCounts.has(dateStr)) return boardTaskCounts.get(dateStr);
    return getBoardTaskCount(boards[dateStr]);
  }

  function confirmCopyIfNeeded(srcDate, destDate) {
    if (!isIsoDateString(srcDate)) {
      alert("Select a source date first.");
      return false;
    }

    if (srcDate === destDate) {
      alert("Source and destination dates are the same. Choose a different source date.");
      return false;
    }

    const sourceTaskCount = getTaskCountForSourceDate(srcDate);
    if (sourceTaskCount <= 0) {
      alert(`No saved tasks found on ${srcDate}. Choose a date with tasks or use another custom date.`);
      return false;
    }

    const currentBoard = getDailyBoard(destDate);
    const destTaskCount = currentBoard.reduce((total, section) => total + section.tasks.length, 0);

    if (destTaskCount > 0) {
      return confirm(
        `Copy ${sourceTaskCount} task${sourceTaskCount === 1 ? "" : "s"} from ${srcDate} to ${destDate}?\n\n` +
        `This will replace the current ${destTaskCount} task${destTaskCount === 1 ? "" : "s"} on ${destDate} to avoid duplicates.`
      );
    }

    return true;
  }

  // ── custom copy-source select ────────────────────────────────────────────
  const copyWidget   = document.getElementById("abCopySourceWidget");
  const copyTrigger  = document.getElementById("abCopySourceTrigger");
  const copyDropdown = document.getElementById("abCopySourceDropdown");
  if (copyTrigger && copyDropdown && copyWidget) {
    copyTrigger.addEventListener("click", evt => {
      evt.stopPropagation();
      const isOpen = !copyDropdown.hidden;
      copyDropdown.hidden = isOpen;
      copyTrigger.classList.toggle("is-open", !isOpen);
    });
    copyDropdown.addEventListener("click", e => {
      const btn = e.target.closest(".gtd-cselect__option");
      if (!btn) return;
      uiState.abCopySourceDate = btn.dataset.value;
      uiState.abCopySourceIsCustom = false;
      const lbl = document.getElementById("abCopySourceLabel");
      if (lbl) lbl.textContent = btn.dataset.label || btn.textContent;
      copyDropdown.querySelectorAll(".gtd-cselect__option").forEach(b => b.classList.toggle("is-selected", b === btn));
      copyDropdown.hidden = true;
      copyTrigger.classList.remove("is-open");
    });
    _abCopySelectAbort = new AbortController();
    document.addEventListener("click", e => {
      if (!copyWidget.contains(e.target)) {
        copyDropdown.hidden = true;
        copyTrigger.classList.remove("is-open");
      }
    }, { signal: _abCopySelectAbort.signal });
  }

  document.getElementById("abCopyCustomDateBtn")?.addEventListener("click", () => {
    const customDateInput = document.getElementById("abCopyCustomDateInput");
    const customDate = (customDateInput?.value || "").trim();

    if (!isIsoDateString(customDate)) {
      alert("Pick a valid custom date first.");
      return;
    }

    uiState.abCopySourceDate = customDate;
    uiState.abCopySourceCustomDate = customDate;
    uiState.abCopySourceIsCustom = true;
    renderApp();
  });

  document.getElementById("abCopyBtn").addEventListener("click", () => {
    const srcDate = uiState.abCopySourceDate;
    if (!srcDate) return;
    if (!confirmCopyIfNeeded(srcDate, activeDate)) return;
    copyDailyBoard(srcDate, activeDate);
    setActiveDailyBoard(activeDate);
    renderApp();
  });

  document.getElementById("abCopyYesterdayBtn").addEventListener("click", () => {
    const yesterday = new Date(activeDate + "T00:00:00");
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayIso = yesterday.toISOString().slice(0, 10);

    uiState.abCopySourceDate = yesterdayIso;
    uiState.abCopySourceCustomDate = yesterdayIso;
    uiState.abCopySourceIsCustom = !boardTaskCounts.has(yesterdayIso);

    if (!confirmCopyIfNeeded(yesterdayIso, activeDate)) return;
    copyDailyBoard(yesterdayIso, activeDate);
    setActiveDailyBoard(activeDate);
    renderApp();
  });
}

function renderPromise() {
  const promises = appState.promises;
  const openCount = promises.filter(p => !p.done).length;
  const now = new Date();
  const todayIso = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
  viewRoot.innerHTML = `
    <section class="view-panel promise-view">
      <div class="view-panel__top">
        <div>
          <h2 class="panel-title">Promise</h2>
          <p class="panel-subtitle">Commitments and promises you have made to other people.</p>
        </div>
        <div class="inline-stats">
          <span class="inline-stat">${openCount} open</span>
          <span class="inline-stat">${promises.length} total</span>
        </div>
      </div>
      <form class="gtd-form" id="promiseForm">
        <div class="field gtd-form__field--wide">
          <label for="promiseTextInput">Promise</label>
          <input id="promiseTextInput" type="text" maxlength="200" placeholder="What did you promise?" required />
        </div>
        <div class="field">
          <label for="promiseToInput">To whom</label>
          <input id="promiseToInput" type="text" maxlength="80" placeholder="Person's name" />
        </div>
        <div class="field">
          <label for="promiseDateInput">Promise Date</label>
          <input id="promiseDateInput" type="date" value="${todayIso}" />
        </div>
        <div class="field">
          <label for="promiseDueDateInput">Due Date <span style="font-weight:400;color:var(--muted);">(optional)</span></label>
          <input id="promiseDueDateInput" type="date" />
        </div>
        <button type="submit" class="primary-btn" style="align-self:end">Add promise</button>
      </form>
      <ul class="promise-list" id="promiseList"></ul>
    </section>
  `;

  const promiseList = document.getElementById("promiseList");

  function renderPromiseList() {
    promiseList.innerHTML = "";

    if (promises.length === 0) {
      promiseList.appendChild(createEmptyState("No promises recorded yet. Add something you have committed to doing for someone."));
      return;
    }

    const sortedPromises = [...promises].sort((a, b) => {
      if (a.done !== b.done) return Number(a.done) - Number(b.done);
      // Sort open items by due date (deadline) first, then by promise date
      const aSort = a.dueDate || a.promiseDate || "";
      const bSort = b.dueDate || b.promiseDate || "";
      if (!aSort && !bSort) return 0;
      if (!aSort) return 1;
      if (!bSort) return -1;
      return aSort.localeCompare(bSort);
    });

    sortedPromises.forEach(promise => {
      const item = document.createElement("li");
      item.className = `promise-item ${promise.done ? "is-done" : ""}`;

      const main = document.createElement("label");
      main.className = "promise-item__main";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "promise-item__check";
      checkbox.checked = promise.done;
      checkbox.addEventListener("change", () => {
        promise.done = checkbox.checked;
        saveState();
        renderApp();
      });

      const copy = document.createElement("div");
      copy.className = "promise-item__copy";

      const text = document.createElement("strong");
      text.className = "promise-item__text";
      text.textContent = promise.text;

      const meta = document.createElement("span");
      meta.className = "promise-item__meta";
      const parts = [];
      if (promise.to) parts.push(`To: ${promise.to}`);
      if (promise.promiseDate) parts.push(`Promised: ${formatWaitingDate(promise.promiseDate)}`);
      if (promise.dueDate) parts.push(`Due: ${formatWaitingDate(promise.dueDate)}`);
      parts.push(`Added ${formatShortDate(promise.createdAt)}`);
      meta.textContent = parts.join(" · ");

      copy.appendChild(text);
      copy.appendChild(meta);
      main.appendChild(checkbox);
      main.appendChild(copy);

      const actions = document.createElement("div");
      actions.className = "promise-item__actions";

      const deleteButton = document.createElement("button");
      deleteButton.type = "button";
      deleteButton.className = "tiny-btn is-danger";
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        if (!confirm(`Delete this promise?`)) return;
        appState.promises = appState.promises.filter(p => p.id !== promise.id);
        saveState();
        renderApp();
      });

      actions.appendChild(deleteButton);
      item.appendChild(main);
      item.appendChild(actions);
      promiseList.appendChild(item);
    });
  }

  renderPromiseList();

  document.getElementById("promiseForm").addEventListener("submit", event => {
    event.preventDefault();
    const textInput = document.getElementById("promiseTextInput");
    const toInput = document.getElementById("promiseToInput");
    const dateInput = document.getElementById("promiseDateInput");
    const dueDateInput = document.getElementById("promiseDueDateInput");
    const text = textInput.value.trim();
    if (!text) return;
    appState.promises.unshift(createPromise({
      text,
      to: toInput.value.trim(),
      promiseDate: dateInput.value,
      dueDate: dueDateInput.value
    }));
    event.target.reset();
    saveState();
    renderApp();
  });

  upgradeCustomDatePickers(viewRoot);
}

function renderCalendar() {
  const now = new Date();
  if (_calendarDragAbort) { _calendarDragAbort.abort(); _calendarDragAbort = null; }
  if (_calendarNowLineTimer) { window.clearInterval(_calendarNowLineTimer); _calendarNowLineTimer = null; }
  // Abort picker outside-click listener when picker is being closed
  if (!uiState.calendarPickerOpen && _calendarPickerAbort) {
    _calendarPickerAbort.abort();
    _calendarPickerAbort = null;
  }

  // ── helpers ────────────────────────────────────────────────────────────────
  function toISODateString(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }

  function mondayOfWeek(d) {
    const copy = new Date(d);
    copy.setDate(copy.getDate() - (copy.getDay() + 6) % 7);
    return toISODateString(copy);
  }

  // ── initialise uiState ────────────────────────────────────────────────────
  if (!uiState.calendarWeekStart) uiState.calendarWeekStart = mondayOfWeek(now);
  if (typeof uiState.calendarYear  !== "number") uiState.calendarYear  = now.getFullYear();
  if (typeof uiState.calendarMonth !== "number") uiState.calendarMonth = now.getMonth();
  if (!uiState.calendarViewMode) uiState.calendarViewMode = "week";
  if (!Object.prototype.hasOwnProperty.call(uiState, "calendarSelectedEventId")) uiState.calendarSelectedEventId = null;
  if (typeof uiState.calendarSelectedEventDate !== "string") uiState.calendarSelectedEventDate = "";
  if (!Object.prototype.hasOwnProperty.call(uiState, "calendarEditingEventId")) uiState.calendarEditingEventId = null;
  if (typeof uiState.calendarCopyTargetDate !== "string") uiState.calendarCopyTargetDate = "";
  if (!Object.prototype.hasOwnProperty.call(uiState, "calendarDraftRange")) uiState.calendarDraftRange = null;
  if (typeof uiState.calendarFocusTitleOnce !== "boolean") uiState.calendarFocusTitleOnce = false;
  if (uiState.calendarEventListTab !== "current" && uiState.calendarEventListTab !== "upcoming") {
    uiState.calendarEventListTab = "current";
  }

  const viewMode = uiState.calendarViewMode;  // "week" | "day"
  const todayStr = toISODateString(now);
  const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

  // ── constants ─────────────────────────────────────────────────────────────
  const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAY_FULL    = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const DAY_SHORT   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const COLOR_OPTIONS = [
    "cloud", "mocha", "latte", "lime", "cream", "teal",
    "slate-neutral", "green", "rose", "purple", "blue", "teal-blue", "brown", "gray"
  ];

  const COLOR_TYPE_LABELS = (() => {
    const labels = Object.fromEntries(
      COLOR_OPTIONS.map(color => [
        color,
        color.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(" ")
      ])
    );

    labels.cloud = "Schlafen";
    labels.mocha = "Full-Time";
    labels.latte = "Part-Time";
    labels.lime = "Nikutaikaizō";
    labels.cream = "Hitorimeshi";
    labels.teal = "Verabredung";
    labels["slate-neutral"] = "Slate";
    labels["teal-blue"] = "Besprechung";
    labels.gray = "Schlafen";

    // Backward compatibility for older events stored with "pink".
    labels.pink = labels.green || "Green";
    // Backward compatibility for older event color keys.
    labels.mist = labels.cloud;
    labels.apricot = labels.mocha;
    labels.slate = labels.latte;
    labels.vanilla = labels.cream;
    labels.cocoa = labels.cream;
    labels.sand = labels.cream;

    return labels;
  })();

  function normalizeCalendarColorKey(color) {
    if (color === "pink") return "green";
    if (color === "mist") return "cloud";
    if (color === "apricot") return "mocha";
    if (color === "slate") return "latte";
    if (color === "vanilla" || color === "cocoa" || color === "sand") return "cream";
    return color;
  }

  function getCalendarColorNameLabel(color) {
    const normalizedColor = normalizeCalendarColorKey(color);

    if (typeof normalizedColor !== "string" || !normalizedColor) {
      return "";
    }

    if (normalizedColor === "slate-neutral") {
      return "Slate";
    }

    return normalizedColor
      .split("-")
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  function getCalendarColorTypeLabel(color) {
    const normalizedColor = normalizeCalendarColorKey(color);
    const colorName = getCalendarColorNameLabel(normalizedColor);
    const typeLabel = COLOR_TYPE_LABELS[normalizedColor] || colorName || "General";

    if (!colorName) {
      return typeLabel;
    }

    return `${colorName} / ${typeLabel}`;
  }

  // ── compute displayed days ────────────────────────────────────────────────
  function getDisplayDays() {
    const start = new Date(uiState.calendarWeekStart + "T12:00:00");
    if (viewMode === "day") {
      return [uiState.calendarWeekStart]; // reuse weekStart as "selectedDay" in day mode
    }
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      return toISODateString(d);
    });
  }

  function isoWeekNumber(d) {
    // Returns { week, year } per ISO 8601 (week starts Monday, week 1 contains Jan 4).
    const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const week = Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    return { week, year: date.getUTCFullYear() };
  }

  function isoWeeksInYear(y) {
    // A year has 53 ISO weeks if Dec 31 or Jan 1 of that year is a Thursday.
    const dec31 = new Date(Date.UTC(y, 11, 31));
    const dec31Day = dec31.getUTCDay() || 7;
    if (dec31Day === 4) return 53;
    const jan1 = new Date(Date.UTC(y, 0, 1));
    if ((jan1.getUTCDay() || 7) === 4) return 53;
    return 52;
  }

  function formatRangeTitle(days) {
    if (viewMode === "day") {
      const d = new Date(days[0] + "T12:00:00");
      const { week, year: isoYear } = isoWeekNumber(d);
      const totalWeeks = isoWeeksInYear(isoYear);
      const weekBadge = ` <span class="cal-week-badge">(Week ${week} / ${totalWeeks})</span>`;
      return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}${weekBadge}`;
    }
    const s = new Date(days[0] + "T12:00:00");
    const e = new Date(days[6] + "T12:00:00");
    const { week, year: isoYear } = isoWeekNumber(s);
    const totalWeeks = isoWeeksInYear(isoYear);
    const weekSuffix = ` <span class="cal-week-badge">(Week ${week} / ${totalWeeks})</span>`;
    let dateRange;
    if (s.getFullYear() !== e.getFullYear())
      dateRange = `${MONTH_NAMES[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} \u2013 ${MONTH_NAMES[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
    else if (s.getMonth() !== e.getMonth())
      dateRange = `${MONTH_NAMES[s.getMonth()]} ${s.getDate()} \u2013 ${MONTH_NAMES[e.getMonth()]} ${e.getDate()}, ${s.getFullYear()}`;
    else
      dateRange = `${MONTH_NAMES[s.getMonth()]} ${s.getDate()} \u2013 ${e.getDate()}, ${s.getFullYear()}`;
    return dateRange + weekSuffix;
  }

  function eventsForDate(dateStr) {
    const target = new Date(dateStr + "T12:00:00");
    const targetWeekday    = target.getDay();
    const targetDayOfMonth = target.getDate();
    return appState.calendarEvents
      .filter(e => {
        if (e.date === dateStr) return true;
        if (dateStr <= e.date) return false;
        if (e.recurrence === "weekly") {
          return new Date(e.date + "T12:00:00").getDay() === targetWeekday;
        }
        if (e.recurrence === "monthly") {
          return new Date(e.date + "T12:00:00").getDate() === targetDayOfMonth;
        }
        return false;
      })
      .map(e => e.date === dateStr ? e : { ...e, _virtual: dateStr })
      .sort((a, b) => (a.time || "99:99") < (b.time || "99:99") ? -1 : 1);
  }

  function dotColor(color) {
    const normalizedColor = normalizeCalendarColorKey(color);

     return normalizedColor === "green"     ? "var(--green)"
         : normalizedColor === "rose"      ? "var(--danger)"
         : normalizedColor === "purple"    ? "#7840b4"
         : normalizedColor === "blue"      ? "#1e64dc"
         : normalizedColor === "teal"      ? "#009898"
         : normalizedColor === "lime"      ? "#7abf20"
         : normalizedColor === "teal-blue" ? "#1b8fa8"
         : normalizedColor === "brown"     ? "#8b5e3c"
       : normalizedColor === "latte"     ? "#a6816a"
       : normalizedColor === "slate-neutral" ? "#4a6eaa"
         : normalizedColor === "cloud"     ? "#9fb2c6"
         : normalizedColor === "mocha"     ? "#8f705a"
       : normalizedColor === "cream"     ? "#b89366"
         : normalizedColor === "gray"      ? "#7a8a9a"
         : "var(--green)";
  }

  function getCalendarSummaryBadgeColor(color) {
    if (!color) return "#7a8a9a";
    const normalizedColor = normalizeCalendarColorKey(color);
    if (COLOR_OPTIONS.includes(normalizedColor)) return dotColor(normalizedColor);
    return "#7a8a9a";
  }

  function formatTime(t) {
    if (!t) return "";
    // t is already HH:MM — strip seconds if present, return as-is
    return t.slice(0, 5);
  }

  function formatTimeRange(startTime, endTime) {
    if (!startTime) return "";
    return endTime ? `${formatTime(startTime)} – ${formatTime(endTime)}` : formatTime(startTime);
  }

  function formatCalendarBlockItemLine(blockItem) {
    const start = formatTime(blockItem?.startTime || "");
    const end = formatTime(blockItem?.endTime || "");
    const timeText = start ? (end ? `${start}-${end}` : start) : (end || "");
    const typePrefix = blockItem?.type ? `${blockItem.type}: ` : "";
    const text = `${typePrefix}${blockItem?.title || ""}`.trim();

    if (text && timeText) {
      return `${text} (${timeText})`;
    }

    return text || timeText;
  }

  function renderCalendarBlockItemsHtml(eventItem, blockHeight, hasNote) {
    const blockItems = sortCalendarBlockItemsForDisplay(
      Array.isArray(eventItem?.blockItems) ? eventItem.blockItems : []
    );

    if (!blockItems.length) return "";

    let maxVisible = blockHeight >= 118 ? 3 : blockHeight >= 86 ? 2 : blockHeight >= 64 ? 1 : 0;
    if (hasNote && maxVisible > 0) {
      maxVisible -= 1;
    }

    const visibleItems = maxVisible > 0 ? blockItems.slice(0, maxVisible) : [];
    const hiddenCount = Math.max(0, blockItems.length - visibleItems.length);

    const linesHtml = visibleItems
      .map(item => {
        const lineText = formatCalendarBlockItemLine(item);
        if (!lineText) return "";

        const eventId = typeof eventItem?.id === "string" ? eventItem.id : "";
        const blockId = typeof item?.id === "string" ? item.id : "";

        return `<li class="cal-tg-event__block${item?.done ? " is-done" : ""}">
          <label class="cal-tg-event__block-row">
            <input type="checkbox" class="cal-block-check" data-event-id="${eventId}" data-block-id="${blockId}"${item?.done ? " checked" : ""}>
            <span class="cal-tg-event__block-line">${lineText}</span>
          </label>
        </li>`;
      })
      .filter(Boolean)
      .join("");

    const moreHtml = hiddenCount > 0
      ? `<span class="cal-tg-event__blocks-more">+${hiddenCount} more</span>`
      : "";

    if (!linesHtml && !moreHtml) return "";

    return `${linesHtml ? `<ul class="cal-tg-event__blocks">${linesHtml}</ul>` : ""}${moreHtml}`;
  }

  function occurrenceDateTime(eventItem, occurrenceDate) {
    const [year, month, day] = occurrenceDate.split("-").map(Number);
    const timeMatch = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.exec(formatTime(eventItem.time || ""));
    const hour = timeMatch ? Number(timeMatch[1]) : 0;
    const minute = timeMatch ? Number(timeMatch[2]) : 0;
    return new Date(year, month - 1, day, hour, minute, 0, 0);
  }

  function shiftIsoDate(dateStr, dayDelta) {
    const next = new Date(dateStr + "T12:00:00");
    next.setDate(next.getDate() + dayDelta);
    return toISODateString(next);
  }

  function parseTimeParts(rawTime) {
    const match = /^([01][0-9]|2[0-3]):([0-5][0-9])$/.exec(formatTime(rawTime || ""));
    if (!match) return null;
    return { hour: Number(match[1]), minute: Number(match[2]) };
  }

  function occurrenceEndDateTime(eventItem, occurrenceDate, startsAt) {
    if (!eventItem.time) {
      const end = new Date(startsAt);
      end.setDate(end.getDate() + 1);
      return end;
    }

    const endParts = parseTimeParts(eventItem.endTime || "");
    if (!endParts) {
      const fallbackEnd = new Date(startsAt);
      fallbackEnd.setHours(fallbackEnd.getHours() + 1);
      return fallbackEnd;
    }

    const [year, month, day] = occurrenceDate.split("-").map(Number);
    const endsAt = new Date(year, month - 1, day, endParts.hour, endParts.minute, 0, 0);
    if (endsAt <= startsAt) endsAt.setDate(endsAt.getDate() + 1);
    return endsAt;
  }

  function getCurrentOccurrences() {
    const results = [];
    const candidateDates = [shiftIsoDate(todayStr, -1), todayStr];

    candidateDates.forEach(dateStr => {
      eventsForDate(dateStr).forEach(eventItem => {
        const startsAt = eventItem.time
          ? occurrenceDateTime(eventItem, dateStr)
          : new Date(`${dateStr}T00:00:00`);
        const endsAt = occurrenceEndDateTime(eventItem, dateStr, startsAt);
        if (startsAt <= now && now < endsAt) {
          results.push({ eventItem, displayDate: dateStr, startsAt });
        }
      });
    });

    return results.sort((a, b) => a.startsAt - b.startsAt || a.eventItem.title.localeCompare(b.eventItem.title));
  }

  function getNextUpcomingOccurrence() {
    const LOOKAHEAD_DAYS = 548;
    const searchAnchor = new Date(now);
    searchAnchor.setHours(12, 0, 0, 0);

    for (let offset = 0; offset <= LOOKAHEAD_DAYS; offset += 1) {
      const cursor = new Date(searchAnchor);
      cursor.setDate(searchAnchor.getDate() + offset);
      const dateStr = toISODateString(cursor);

      const dayCandidates = eventsForDate(dateStr)
        .map(eventItem => {
          const startsAt = occurrenceDateTime(eventItem, dateStr);
          if (startsAt <= now) return null;
          return { eventItem, displayDate: dateStr, startsAt };
        })
        .filter(Boolean)
        .sort((a, b) => a.startsAt - b.startsAt || a.eventItem.title.localeCompare(b.eventItem.title));

      if (dayCandidates.length) {
        return dayCandidates[0];
      }
    }

    return null;
  }

  function getActiveCalendarBlockReminders() {
    const reminders = [];
    const candidateDates = [todayStr, shiftIsoDate(todayStr, 1)];

    candidateDates.forEach(dateStr => {
      eventsForDate(dateStr).forEach(eventItem => {
        const blockItems = sortCalendarBlockItemsForDisplay(
          Array.isArray(eventItem?.blockItems) ? eventItem.blockItems : []
        );

        blockItems.forEach(blockItem => {
          const startTime = formatTime(blockItem?.startTime || "");
          const reminderOffsetMinutes = normalizeCalendarBlockReminderOffsetMinutes(blockItem?.reminderOffsetMinutes);

          if (!startTime || !CALENDAR_TIME_PATTERN.test(startTime)) return;
          if (!reminderOffsetMinutes) return;
          if (Boolean(blockItem?.done)) return;

          const startsAt = occurrenceDateTime({ time: startTime }, dateStr);
          const reminderStartsAt = new Date(startsAt.getTime() - reminderOffsetMinutes * 60 * 1000);

          if (now < reminderStartsAt || now > startsAt) {
            return;
          }

          reminders.push({
            id: `${eventItem.id}:${blockItem.id}:${dateStr}`,
            eventId: eventItem.id,
            blockId: blockItem.id,
            eventTitle: eventItem.title,
            blockTitle: blockItem.title,
            displayDate: dateStr,
            startTime,
            startsAt,
            minutesUntil: Math.max(0, Math.ceil((startsAt.getTime() - now.getTime()) / (60 * 1000)))
          });
        });
      });
    });

    return reminders.sort((left, right) => {
      return left.startsAt - right.startsAt || left.eventTitle.localeCompare(right.eventTitle);
    });
  }

  function formatCalendarBlockReminderStatus(reminderItem) {
    if (reminderItem.minutesUntil <= 0) {
      return `${reminderItem.blockTitle} is starting now`;
    }

    return `${reminderItem.blockTitle} starts in ${reminderItem.minutesUntil} minute${reminderItem.minutesUntil === 1 ? "" : "s"}`;
  }

  function formatCalendarWeeklySummaryHours(minutes) {
    const hours = minutes / 60;
    const hourText = Number.isInteger(hours)
      ? String(hours)
      : hours.toFixed(2).replace(/\.?0+$/, "");
    return `${hourText}h`;
  }

  function buildCalendarWeeklySummaryData() {
    const weekStartIso = mondayOfWeek(new Date(uiState.calendarWeekStart + "T12:00:00"));
    const weekStart = new Date(`${weekStartIso}T00:00:00`);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    const weekDates = Array.from({ length: 7 }, (_, index) => shiftIsoDate(weekStartIso, index));
    const occurrenceDates = [shiftIsoDate(weekStartIso, -1), ...weekDates];
    const minutesByActivity = new Map();
    const activityColorByLabel = new Map();

    COLOR_OPTIONS.forEach(color => {
      const activityLabel = COLOR_TYPE_LABELS[color] || getCalendarColorNameLabel(color) || "General";
      if (!activityColorByLabel.has(activityLabel)) {
        activityColorByLabel.set(activityLabel, color);
      }
    });

    occurrenceDates.forEach(dateStr => {
      eventsForDate(dateStr).forEach(eventItem => {
        if (!parseTimeParts(eventItem.time || "")) return;

        const startsAt = occurrenceDateTime(eventItem, dateStr);
        const endsAt = occurrenceEndDateTime(eventItem, dateStr, startsAt);
        const overlapStart = startsAt > weekStart ? startsAt : weekStart;
        const overlapEnd = endsAt < weekEnd ? endsAt : weekEnd;
        const overlapMinutes = Math.max(0, Math.round((overlapEnd - overlapStart) / 60000));

        if (!overlapMinutes) return;

        const activityLabel = COLOR_TYPE_LABELS[eventItem.color] || getCalendarColorNameLabel(eventItem.color) || "General";
        if (!activityColorByLabel.has(activityLabel) && typeof eventItem.color === "string" && eventItem.color) {
          activityColorByLabel.set(activityLabel, eventItem.color);
        }
        minutesByActivity.set(activityLabel, (minutesByActivity.get(activityLabel) || 0) + overlapMinutes);
      });
    });

    if (!minutesByActivity.size) {
      return {
        rowHtml: "",
        totalMinutes: 0
      };
    }

    const preferredActivityOrder = new Map();
    COLOR_OPTIONS.forEach((color, index) => {
      const activityLabel = COLOR_TYPE_LABELS[color] || getCalendarColorNameLabel(color) || "General";
      if (!preferredActivityOrder.has(activityLabel)) {
        preferredActivityOrder.set(activityLabel, index);
      }
    });

    const orderedActivityLabels = Array.from(minutesByActivity.keys())
      .sort((left, right) => {
        const minuteDelta = (minutesByActivity.get(right) || 0) - (minutesByActivity.get(left) || 0);
        if (minuteDelta !== 0) return minuteDelta;

        const leftOrder = preferredActivityOrder.has(left)
          ? preferredActivityOrder.get(left)
          : Number.MAX_SAFE_INTEGER;
        const rightOrder = preferredActivityOrder.has(right)
          ? preferredActivityOrder.get(right)
          : Number.MAX_SAFE_INTEGER;

        if (leftOrder !== rightOrder) return leftOrder - rightOrder;
        return left.localeCompare(right);
      });

    const rowHtml = orderedActivityLabels
      .map(activityLabel => {
        const badgeColor = getCalendarSummaryBadgeColor(activityColorByLabel.get(activityLabel));
        return `<li class="calendar-weekly-summary__row">
          <span class="calendar-weekly-summary__label-wrap">
            <span class="calendar-weekly-summary__badge" style="background:${badgeColor}">${activityLabel}</span>
          </span>
          <span class="calendar-weekly-summary__value">${formatCalendarWeeklySummaryHours(minutesByActivity.get(activityLabel) || 0)}</span>
        </li>`;
      })
      .join("");

    const totalMinutes = Array.from(minutesByActivity.values())
      .reduce((sum, minutes) => sum + minutes, 0);

    return {
      rowHtml,
      totalMinutes
    };
  }

  // ── time-grid constants & helpers ─────────────────────────────────────────
  const HOUR_PX  = 56;
  const TG_HOURS = [23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  function timeToOffset(t) {
    // Returns hours elapsed since 22:30 (the grid top).
    if (!t) return null;
    const parts = t.split(":");
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1] || "0", 10);
    if (isNaN(h) || isNaN(m)) return null;
    const timeInHours = h + m / 60;
    return timeInHours >= 22.5 ? (timeInHours - 22.5) : (timeInHours + 24 - 22.5);
  }

  function eventTopHeight(ev) {
    const range = getCalendarEventOffsetRange(ev);
    if (!range) return null;

    const startOff = range.startOff;
    const endOff = range.endOff;

    return {
      top:    Math.round(startOff * HOUR_PX),
      height: Math.max(22, Math.round((endOff - startOff) * HOUR_PX))
    };
  }

  function getCalendarEventOffsetRange(ev) {
    const startOff = timeToOffset(ev.time);
    if (startOff === null) return null;

    let endOff;
    if (!ev.endTime) {
      endOff = startOff + 1;
    } else {
      endOff = timeToOffset(ev.endTime);
      if (endOff === null) {
        endOff = startOff + 1;
      } else if (endOff <= startOff && ev.endTime > ev.time) {
        // Same-day event whose end time crosses the 22:30 grid boundary
        endOff += 24;
      } else if (endOff <= startOff) {
        // Identical or otherwise indeterminate times — default to 1-hour block
        endOff = startOff + 1;
      }
      // Overnight events (endTime < startTime string-wise) are already correct:
      // timeToOffset wraps them so endOff > startOff naturally.
    }

    return { startOff, endOff };
  }

  function getCalendarTimedEventLayoutByIndex(timedEvents) {
    const ranges = timedEvents
      .map((eventItem, originalIndex) => {
        const range = getCalendarEventOffsetRange(eventItem);
        if (!range) return null;

        return {
          originalIndex,
          startOff: range.startOff,
          endOff: range.endOff,
          col: 0,
          span: 1
        };
      })
      .filter(Boolean)
      .sort((left, right) => {
        if (left.startOff !== right.startOff) return left.startOff - right.startOff;
        if (left.endOff !== right.endOff) return left.endOff - right.endOff;
        return left.originalIndex - right.originalIndex;
      });

    const layoutByIndex = new Map();
    if (!ranges.length) return layoutByIndex;

    function overlaps(left, right) {
      return left.startOff < right.endOff && right.startOff < left.endOff;
    }

    function assignCluster(clusterEntries) {
      const columnEndOffsets = [];
      const entriesByColumn = [];

      clusterEntries.forEach(entry => {
        let columnIndex = -1;

        for (let index = 0; index < columnEndOffsets.length; index += 1) {
          if (columnEndOffsets[index] <= entry.startOff) {
            columnIndex = index;
            break;
          }
        }

        if (columnIndex === -1) {
          columnIndex = columnEndOffsets.length;
          columnEndOffsets.push(entry.endOff);
          entriesByColumn.push([]);
        } else {
          columnEndOffsets[columnIndex] = entry.endOff;
        }

        entry.col = columnIndex;
        entriesByColumn[columnIndex].push(entry);
      });

      const totalColumns = columnEndOffsets.length;

      clusterEntries.forEach(entry => {
        let span = 1;

        for (let columnIndex = entry.col + 1; columnIndex < totalColumns; columnIndex += 1) {
          const hasConflict = entriesByColumn[columnIndex].some(otherEntry => overlaps(entry, otherEntry));
          if (hasConflict) break;
          span += 1;
        }

        layoutByIndex.set(entry.originalIndex, {
          column: entry.col,
          span,
          totalColumns
        });
      });
    }

    let cluster = [];
    let clusterMaxEnd = -Infinity;

    ranges.forEach(rangeEntry => {
      if (!cluster.length) {
        cluster = [rangeEntry];
        clusterMaxEnd = rangeEntry.endOff;
        return;
      }

      if (rangeEntry.startOff < clusterMaxEnd) {
        cluster.push(rangeEntry);
        clusterMaxEnd = Math.max(clusterMaxEnd, rangeEntry.endOff);
        return;
      }

      assignCluster(cluster);
      cluster = [rangeEntry];
      clusterMaxEnd = rangeEntry.endOff;
    });

    if (cluster.length) {
      assignCluster(cluster);
    }

    return layoutByIndex;
  }

  function getCalendarTimedEventHorizontalStyle(layout) {
    if (!layout || layout.totalColumns <= 1) {
      return "";
    }

    const OUTER_PADDING_PX = 2;
    const COLUMN_GAP_PX = 2;
    const totalColumns = Math.max(1, layout.totalColumns);
    const column = Math.max(0, Math.min(totalColumns - 1, layout.column || 0));
    const span = Math.max(1, Math.min(totalColumns - column, layout.span || 1));
    const usableWidthExpr = `(100% - ${OUTER_PADDING_PX * 2}px - ${(totalColumns - 1) * COLUMN_GAP_PX}px)`;
    const leftExpr = `calc(${OUTER_PADDING_PX}px + ${column} * ((${usableWidthExpr}) / ${totalColumns} + ${COLUMN_GAP_PX}px))`;
    const widthExpr = `calc(${span} * ((${usableWidthExpr}) / ${totalColumns}) + ${(span - 1) * COLUMN_GAP_PX}px)`;

    return {
      leftExpr,
      widthExpr
    };
  }

  // ── build time-grid HTML ──────────────────────────────────────────────────
  const displayDays = getDisplayDays();
  const rangeTitle  = formatRangeTitle(displayDays);
  const numCols     = displayDays.length;

  let selectedEvent = null;
  if (uiState.calendarSelectedEventId) {
    selectedEvent = appState.calendarEvents.find(eventItem => eventItem.id === uiState.calendarSelectedEventId) || null;
  }
  if (!selectedEvent) {
    uiState.calendarSelectedEventId = null;
    uiState.calendarSelectedEventDate = "";
    uiState.calendarCopyTargetDate = "";
  }

  const selectedEventDate = selectedEvent && ISO_DATE_PATTERN.test(uiState.calendarSelectedEventDate)
    ? uiState.calendarSelectedEventDate
    : (selectedEvent ? selectedEvent.date : "");

  if (selectedEvent && uiState.calendarSelectedEventDate !== selectedEventDate) {
    uiState.calendarSelectedEventDate = selectedEventDate;
  }

  let editingEvent = null;
  if (uiState.calendarEditingEventId) {
    editingEvent = appState.calendarEvents.find(eventItem => eventItem.id === uiState.calendarEditingEventId) || null;
    if (!editingEvent) {
      uiState.calendarEditingEventId = null;
    }
  }

  if (selectedEvent && !ISO_DATE_PATTERN.test(uiState.calendarCopyTargetDate)) {
    uiState.calendarCopyTargetDate = selectedEventDate || selectedEvent.date;
  }

  const isRecurringOccurrenceSelection = Boolean(
    selectedEvent &&
    selectedEvent.recurrence &&
    selectedEventDate &&
    selectedEventDate !== selectedEvent.date
  );

  const headDaysHtml = displayDays.map(dateStr => {
    const d       = new Date(dateStr + "T12:00:00");
    const isToday = dateStr === todayStr;
    return `<div class="cal-tg-head__day${isToday ? " is-today" : ""}">
      <span class="cal-tg-day-name">${viewMode === "day" ? DAY_FULL[d.getDay()] : DAY_SHORT[d.getDay()]}</span>
      <span class="cal-tg-day-num${isToday ? " is-today-num" : ""}">${d.getDate()}</span>
    </div>`;
  }).join("");

  const hasAnyAllDay = displayDays.some(dateStr => eventsForDate(dateStr).some(e => !e.time));
  const allDayRowHtml = hasAnyAllDay ? `
    <div class="cal-tg-allday">
      <div class="cal-tg-allday__gutter"><span>All&#8209;day</span></div>
      <div class="cal-tg-allday__cols" style="grid-template-columns:repeat(${numCols},minmax(0,1fr))">
        ${displayDays.map(dateStr => {
          const evts = eventsForDate(dateStr).filter(e => !e.time);
          return `<div class="cal-tg-allday__cell">
            ${evts.map(e => {
              const recurBadge = e.recurrence ? `<span class="cal-recur-badge">↻</span>` : "";
              const typeLabel = getCalendarColorTypeLabel(e.color);
              const displayDate = e._virtual || e.date;
              const isSelected = selectedEvent && selectedEvent.id === e.id && selectedEventDate === displayDate;
              return `<div class="cal-week-event cal-week-event--${e.color}${isSelected ? " is-selected" : ""}" data-id="${e.id}" data-display-date="${displayDate}" title="${typeLabel}"${e._virtual ? ' data-virtual="1"' : ""}>
                <div class="cal-week-event__top">
                  <span class="cal-week-event__title">${e.title}${recurBadge}</span>
                  <button class="icon-btn cal-del-btn" data-id="${e.id}" title="Delete">✕</button>
                </div>
              </div>`;
            }).join("")}
          </div>`;
        }).join("")}
      </div>
    </div>` : "";

  // Gutter: half-hour spacer so grid top = 22:30, first label = 23:00
  const gutterHtml =
    `<div class="cal-tg-hour-spacer"></div>` +
    TG_HOURS.map(h =>
      `<div class="cal-tg-hour-label"><span>${String(h).padStart(2, "0")}:00</span></div>`
    ).join("");

  // 49 slots per column (22:30 buffer slot + 24 hours × 2 half-hour slots).
  // The grid top is 22:30; even-indexed slots end on the hour (solid line).
  const slotRowsHtml = Array.from({ length: 49 }, (_, i) =>
    `<div class="cal-tg-slot${i % 2 === 0 ? " cal-tg-slot--hour" : ""}"></div>`
  ).join("");

  const colsHtml = displayDays.map(dateStr => {
    const isToday   = dateStr === todayStr;
    const timedEvts = eventsForDate(dateStr).filter(e => e.time);
    const timedEventLayout = getCalendarTimedEventLayoutByIndex(timedEvts);
    const nowLineHtml = `<div class="cal-tg-now-line" data-date="${dateStr}" aria-hidden="true"><span class="cal-tg-now-line__dot"></span></div>`;

    const eventsHtml = timedEvts.map((e, index) => {
      const pos = eventTopHeight(e);
      if (!pos) return "";

      const horizontalLayout = getCalendarTimedEventHorizontalStyle(timedEventLayout.get(index));
      const layoutStyle = horizontalLayout
        ? `;left:${horizontalLayout.leftExpr};width:${horizontalLayout.widthExpr};right:auto`
        : "";

      const timeRange  = formatTimeRange(e.time, e.endTime);
      const recurBadge = e.recurrence ? `<span class="cal-recur-badge">↻</span>` : "";
      const notePart   = e.note ? `<span class="cal-tg-event__note">${e.note}</span>` : "";
      const blockItemsPart = renderCalendarBlockItemsHtml(e, pos.height, Boolean(e.note));
      const isDraggable = !e._virtual;
      const typeLabel = getCalendarColorTypeLabel(e.color);
      const displayDate = e._virtual || e.date;
      const isSelected = selectedEvent && selectedEvent.id === e.id && selectedEventDate === displayDate;
      return `<div class="cal-tg-event cal-tg-event--${e.color}${isSelected ? " is-selected" : ""}" style="top:${pos.top}px;height:${pos.height}px${layoutStyle}" data-id="${e.id}" data-display-date="${displayDate}" title="${typeLabel}"${isDraggable ? "" : ' data-virtual="1"'}>
        ${isDraggable ? '<div class="cal-tg-event__resize-top"></div>' : ""}
        <div class="cal-tg-event__inner">
          <span class="cal-tg-event__title">${e.title}${recurBadge}</span>
          ${timeRange ? `<span class="cal-tg-event__time">${timeRange}</span>` : ""}
          ${notePart}
          ${blockItemsPart}
        </div>
        <button class="icon-btn cal-del-btn" data-id="${e.id}" title="Delete">✕</button>
        ${isDraggable ? '<div class="cal-tg-event__resize-bottom"></div>' : ""}
      </div>`;
    }).join("");
    return `<div class="cal-tg-col${isToday ? " is-today" : ""}" data-date="${dateStr}">
      ${slotRowsHtml}${nowLineHtml}${eventsHtml}
    </div>`;
  }).join("");

  // ── sidebar events list tabs ─────────────────────────────────────────────
  const eventListTab = uiState.calendarEventListTab === "upcoming" ? "upcoming" : "current";
  const currentOccurrences = getCurrentOccurrences();
  const nextUpcoming = getNextUpcomingOccurrence();
  const activeBlockReminders = getActiveCalendarBlockReminders();
  const weeklySummaryData = buildCalendarWeeklySummaryData();

  const currentHtml = !currentOccurrences.length
    ? `<li><div class="empty-state">No current events.</div></li>`
    : currentOccurrences
      .map(currentOccurrence => {
        const e = currentOccurrence.eventItem;
        const displayDate = currentOccurrence.displayDate;
        const typeLabel = getCalendarColorTypeLabel(e.color);
        const timeRange = e.time ? formatTimeRange(e.time, e.endTime) : "All day";
        const locationMeta = e.location ? `📍 ${e.location}` : "";
        const isSelected = selectedEvent && selectedEvent.id === e.id && selectedEventDate === displayDate;
        const meta = [typeLabel, displayDate, timeRange, locationMeta].filter(Boolean).join(" · ");
        return `<li class="calendar-event-item${isSelected ? " is-selected" : ""}" data-id="${e.id}" data-display-date="${displayDate}">
          <span class="calendar-event-item__dot" style="background:${dotColor(e.color)}" title="${typeLabel}" aria-label="${typeLabel}"></span>
          <div class="calendar-event-item__copy">
            <span class="calendar-event-item__title">${e.title}</span>
            ${meta ? `<span class="calendar-event-item__meta">${meta}</span>` : ""}
          </div>
          <div class="calendar-event-item__actions">
            <button class="icon-btn cal-del-btn" data-id="${e.id}" title="Delete">✕</button>
          </div>
        </li>`;
      })
      .join("");

  const upcomingHtml = !nextUpcoming
    ? `<li><div class="empty-state">No upcoming events.</div></li>`
    : (() => {
        const e = nextUpcoming.eventItem;
        const displayDate = nextUpcoming.displayDate;
        const typeLabel = getCalendarColorTypeLabel(e.color);
        const timeRange = formatTimeRange(e.time, e.endTime);
        const locationMeta = e.location ? `📍 ${e.location}` : "";
        const isSelected = selectedEvent && selectedEvent.id === e.id && selectedEventDate === displayDate;
        const originDate = new Date(e.date + "T12:00:00");
        const recurLabel = e.recurrence === "weekly"  ? ` · Weekly on ${DAY_FULL[originDate.getDay()]}`
                         : e.recurrence === "monthly" ? ` · Monthly on the ${originDate.getDate()}${[,"st","nd","rd"][((originDate.getDate()%100-20)%10)||originDate.getDate()%100] || "th"}`
                         : "";
        const meta = [typeLabel, displayDate, timeRange, locationMeta].filter(Boolean).join(" · ") + recurLabel;
        return `<li class="calendar-event-item${isSelected ? " is-selected" : ""}" data-id="${e.id}" data-display-date="${displayDate}">
          <span class="calendar-event-item__dot" style="background:${dotColor(e.color)}" title="${typeLabel}" aria-label="${typeLabel}"></span>
          <div class="calendar-event-item__copy">
            <span class="calendar-event-item__title">${e.title}</span>
            ${meta ? `<span class="calendar-event-item__meta">${meta}</span>` : ""}
          </div>
          <div class="calendar-event-item__actions">
            <button class="icon-btn cal-del-btn" data-id="${e.id}" title="Delete">✕</button>
          </div>
        </li>`;
      })();

  const eventListHtml = eventListTab === "current" ? currentHtml : upcomingHtml;

  const weeklySummaryHtml = weeklySummaryData.totalMinutes <= 0
    ? `<div class="empty-state">No time tracked this week.</div>`
    : `<ul class="calendar-weekly-summary__list">
        ${weeklySummaryData.rowHtml}
        <li class="calendar-weekly-summary__row calendar-weekly-summary__row--total">
          <span class="calendar-weekly-summary__label">Total scheduled</span>
          <span class="calendar-weekly-summary__value">${formatCalendarWeeklySummaryHours(weeklySummaryData.totalMinutes)}</span>
        </li>
      </ul>`;

  const blockReminderListHtml = !activeBlockReminders.length
    ? `<li><div class="empty-state">No active block reminders right now.</div></li>`
    : activeBlockReminders.map(reminderItem => {
        const metaParts = [
          reminderItem.eventTitle,
          reminderItem.displayDate,
          reminderItem.startTime ? formatTime(reminderItem.startTime) : ""
        ].filter(Boolean);

        return `<li class="calendar-block-reminder-item" data-event-id="${reminderItem.eventId}" data-display-date="${reminderItem.displayDate}">
          <div class="calendar-block-reminder-item__title">${formatCalendarBlockReminderStatus(reminderItem)}</div>
          <div class="calendar-block-reminder-item__meta">${metaParts.join(" · ")}</div>
        </li>`;
      }).join("");

  const colorSwatches = COLOR_OPTIONS.map(c => {
    const typeLabel = getCalendarColorTypeLabel(c);
    return `<button type="button" class="color-swatch color-swatch--${c}" data-color="${c}" data-type-label="${typeLabel}" title="${typeLabel}" aria-label="${typeLabel}"></button>`;
  }
  ).join("");

  const viewToggleHtml = `
    <div class="cal-view-toggle">
      <button type="button" class="cal-toggle-btn${viewMode === "week" ? " is-active" : ""}" data-mode="week">Week</button>
      <button type="button" class="cal-toggle-btn${viewMode === "day"  ? " is-active" : ""}" data-mode="day">Day</button>
    </div>`;

  const calendarFormTitle = editingEvent ? "Edit Event" : "Add Event";
  const calendarSubmitLabel = editingEvent ? "Save Changes" : "Add Event";
  const calendarCopyTargetDateValue = selectedEvent
    ? (ISO_DATE_PATTERN.test(uiState.calendarCopyTargetDate) ? uiState.calendarCopyTargetDate : selectedEventDate)
    : "";

  const calendarEventActionsHtml = selectedEvent
    ? `<section class="calendar-event-actions" id="cal-event-actions">
        <div class="calendar-event-actions__header">
          <div>
            <div class="calendar-event-actions__eyebrow">Selected Event</div>
            <div class="calendar-event-actions__title">${selectedEvent.title}</div>
            <div class="calendar-event-actions__meta">${[getCalendarColorTypeLabel(selectedEvent.color), selectedEventDate, formatTimeRange(selectedEvent.time, selectedEvent.endTime)].filter(Boolean).join(" · ")}</div>
          </div>
          <button type="button" class="icon-btn calendar-event-actions__close" id="cal-action-close" title="Clear selection">✕</button>
        </div>
        ${selectedEvent.location ? `<p class="calendar-event-actions__location">Location: ${selectedEvent.location}</p>` : ""}
        ${selectedEvent.note ? `<p class="calendar-event-actions__note">${selectedEvent.note}</p>` : ""}
        ${isRecurringOccurrenceSelection ? `<p class="calendar-event-actions__hint">This is a recurring occurrence from ${selectedEvent.date}. Edit and delete will affect the original event.</p>` : ""}
        <div class="calendar-event-actions__buttons">
          <button type="button" class="tiny-btn" id="cal-action-edit">Edit</button>
          <button type="button" class="tiny-btn" id="cal-action-duplicate">Duplicate</button>
          <button type="button" class="tiny-btn is-danger" id="cal-action-delete">Delete</button>
        </div>
        <form class="calendar-event-actions__copy" id="cal-copy-form" novalidate>
          <label for="cal-copy-date">Copy to another date</label>
          <div class="calendar-event-actions__copy-row">
            <input id="cal-copy-date" name="copyDate" type="date" value="${calendarCopyTargetDateValue}">
            <button type="submit" class="tiny-btn">Copy</button>
          </div>
          <p class="calendar-event-actions__msg" id="cal-action-msg" style="display:none"></p>
        </form>
      </section>`
    : `<section class="calendar-event-actions calendar-event-actions--empty" id="cal-event-actions">
        <div class="calendar-event-actions__empty">Click any event to edit, duplicate, copy to another date, or delete it.</div>
      </section>`;

  // ── render ────────────────────────────────────────────────────────────────
  viewRoot.innerHTML = `
    <div class="calendar-layout">
      <div class="calendar-panel">
        <div class="calendar-nav">
          <div class="calendar-nav__left">
            <button class="calendar-nav__btn" id="cal-prev">&#8249;</button>
            <button class="calendar-nav__btn cal-today-btn${uiState.calendarPickerOpen ? " is-active" : ""}" id="cal-today">Today</button>
            <button class="calendar-nav__btn" id="cal-next">&#8250;</button>
          </div>
          <span class="calendar-nav__title">${rangeTitle}</span>
          ${viewToggleHtml}
        </div>
        <div class="cal-tg" id="cal-week-grid">
          <div class="cal-tg-head">
            <div class="cal-tg-head__gutter"></div>
            <div class="cal-tg-head__days" style="grid-template-columns:repeat(${numCols},minmax(0,1fr))">${headDaysHtml}</div>
          </div>
          ${allDayRowHtml}
          <div class="cal-tg-scroll" id="cal-tg-scroll">
            <div class="cal-tg-body">
              <div class="cal-tg-gutter">${gutterHtml}</div>
              <div class="cal-tg-cols" style="grid-template-columns:repeat(${numCols},minmax(0,1fr))">${colsHtml}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="calendar-sidebar-panel">
        ${calendarEventActionsHtml}

        <form class="calendar-add-form" id="cal-add-form" novalidate>
          <div class="calendar-add-form__title">${calendarFormTitle}</div>
          <div class="field">
            <label for="cal-title">Title</label>
            <input id="cal-title" name="title" type="text" placeholder="Event title" required maxlength="120">
          </div>
          <div class="field">
            <label for="cal-date">Date</label>
            <input id="cal-date" name="date" type="date" required value="${todayStr}">
          </div>
          <div class="cal-time-range">
            <div class="field">
              <label for="cal-start-time">Start Time (optional)</label>
              <input id="cal-start-time" name="startTime" type="text" placeholder="e.g. 09:00 or 930" maxlength="5" autocomplete="off">
            </div>
            <div class="field">
              <label for="cal-end-time">End Time (optional)</label>
              <input id="cal-end-time" name="endTime" type="text" placeholder="e.g. 17:30 or 1730" maxlength="5" autocomplete="off">
            </div>
          </div>
          <div class="field">
            <label for="cal-location">Location (optional)</label>
            <input id="cal-location" name="location" type="text" placeholder="Place, address, or link..." maxlength="180">
          </div>
          <div class="field">
            <label for="cal-note">Note (optional)</label>
            <input id="cal-note" name="note" type="text" placeholder="Details…" maxlength="300">
          </div>
          <div class="field">
            <label>Block Items (optional)</label>
            <div class="cal-block-items-editor" id="cal-block-items-editor"></div>
            <div class="cal-block-items-actions">
              <button type="button" class="tiny-btn" id="cal-block-item-add">+ Add block item</button>
            </div>
            <div class="cal-block-items-hint">Each block item supports a title, optional times, optional reminder, and completion state.</div>
          </div>
          <div class="field">
            <label for="cal-recurrence">Repeat</label>
            <select id="cal-recurrence" name="recurrence" class="cal-select">
              <option value="">Does not repeat</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div class="calendar-color-row">
            <label>Color</label>
            ${colorSwatches}
            <input type="hidden" name="color" id="cal-color" value="green">
            <div class="calendar-color-row__type" id="cal-color-type-label">Type: ${getCalendarColorTypeLabel("green")}</div>
          </div>
          <div class="section-form__message" id="cal-form-msg" style="display:none"></div>
          <div class="calendar-add-form__actions">
            <button type="submit" class="primary-btn">${calendarSubmitLabel}</button>
            ${editingEvent ? '<button type="button" class="tiny-btn" id="cal-edit-cancel">Cancel</button>' : ""}
          </div>
        </form>

        <div class="calendar-event-list-section">
          <div class="calendar-event-list-section__heading">Block Item Reminders</div>
          <ul class="calendar-block-reminder-list" id="cal-block-reminder-list">
            ${blockReminderListHtml}
          </ul>
          <div class="calendar-event-list-section__heading calendar-event-list-section__heading--secondary">Events</div>
          <div class="cal-view-toggle calendar-event-tabs" role="tablist" aria-label="Event list filter">
            <button type="button" class="cal-toggle-btn${eventListTab === "current" ? " is-active" : ""}" data-event-tab="current" role="tab" aria-selected="${eventListTab === "current"}">Current Events</button>
            <button type="button" class="cal-toggle-btn${eventListTab === "upcoming" ? " is-active" : ""}" data-event-tab="upcoming" role="tab" aria-selected="${eventListTab === "upcoming"}">Upcoming Events</button>
          </div>
          <ul class="calendar-event-list" id="cal-event-list">
            ${eventListHtml}
          </ul>
          <div class="calendar-event-list-section__heading calendar-event-list-section__heading--secondary">Weekly Time Summary</div>
          <div class="calendar-weekly-summary" id="cal-weekly-summary">
            ${weeklySummaryHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  // ── auto-scroll to current time ──────────────────────────────────────────
  (function () {
    const scrollEl = document.getElementById("cal-tg-scroll");
    if (!scrollEl) return;
    const h = now.getHours(), m = now.getMinutes();
    const timeInHours = h + m / 60;
    const nowOff = timeInHours >= 22.5 ? (timeInHours - 22.5) : (timeInHours + 24 - 22.5);
    scrollEl.scrollTop = Math.max(0, Math.round(nowOff * HOUR_PX) - 120);
  })();

  // ── live current-time line ───────────────────────────────────────────────
  (function () {
    const nowLineEls = Array.from(document.querySelectorAll(".cal-tg-now-line"));
    if (!nowLineEls.length) return;

    function updateCalendarNowLine() {
      const liveNow = new Date();
      const liveToday = toISODateString(liveNow);
      const timeInHours = liveNow.getHours() + liveNow.getMinutes() / 60 + liveNow.getSeconds() / 3600;
      const nowOff = timeInHours >= 22.5 ? (timeInHours - 22.5) : (timeInHours + 24 - 22.5);
      const isInRange = Number.isFinite(nowOff) && nowOff >= 0 && nowOff <= 24;

      nowLineEls.forEach(lineEl => {
        const lineDate = lineEl.dataset.date || "";
        const shouldShow = lineDate === liveToday && isInRange;

        lineEl.classList.toggle("is-visible", shouldShow);

        if (shouldShow) {
          lineEl.style.top = `${Math.round(nowOff * HOUR_PX)}px`;
        }
      });
    }

    updateCalendarNowLine();
    _calendarNowLineTimer = window.setInterval(updateCalendarNowLine, 30000);
  })();

  // ── navigation ────────────────────────────────────────────────────────────
  const step = viewMode === "day" ? 1 : 7;

  document.getElementById("cal-prev").addEventListener("click", () => {
    const d = new Date(uiState.calendarWeekStart + "T12:00:00");
    d.setDate(d.getDate() - step);
    uiState.calendarWeekStart = toISODateString(d);
    renderApp();
  });

  document.getElementById("cal-next").addEventListener("click", () => {
    const d = new Date(uiState.calendarWeekStart + "T12:00:00");
    d.setDate(d.getDate() + step);
    uiState.calendarWeekStart = toISODateString(d);
    renderApp();
  });

  document.getElementById("cal-today").addEventListener("click", () => {
    if (uiState.calendarPickerOpen) {
      // Close picker — abort handled at top of next renderCalendar()
      uiState.calendarPickerOpen = false;
      renderApp();
      return;
    }
    // Open picker at the month of the currently visible date
    const anchorDate = new Date(uiState.calendarWeekStart + "T12:00:00");
    uiState.calendarPickerYear  = anchorDate.getFullYear();
    uiState.calendarPickerMonth = anchorDate.getMonth();
    uiState.calendarPickerOpen  = true;
    renderApp();
  });

  // ── view mode toggle ──────────────────────────────────────────────────────
  document.querySelectorAll(".cal-toggle-btn[data-mode]").forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === uiState.calendarViewMode) return;
      if (mode === "day") {
        // switch to day: show today, or first day of current week if today not in week
        uiState.calendarWeekStart = todayStr;
      } else {
        // switch to week: jump to week containing current day
        uiState.calendarWeekStart = mondayOfWeek(new Date(uiState.calendarWeekStart + "T12:00:00"));
      }
      uiState.calendarViewMode = mode;
      renderApp();
    });
  });

  // ── color swatches ────────────────────────────────────────────────────────
  const calColorInput = document.getElementById("cal-color");
  const calColorTypeLabel = document.getElementById("cal-color-type-label");

  function updateSelectedColorTypeLabel(color) {
    if (!calColorTypeLabel) return;
    calColorTypeLabel.textContent = `Type: ${getCalendarColorTypeLabel(color)}`;
  }

  // ── time input: auto-normalize on blur ───────────────────────────────────
  function normalizeTime(raw) {
    const s = raw.trim().replace(":", "");
    if (!s) return "";
    let h, m;
    if (/^\d{3}$/.test(s)) {
      h = parseInt(s.slice(0, 1), 10);
      m = parseInt(s.slice(1), 10);
    } else if (/^\d{4}$/.test(s)) {
      h = parseInt(s.slice(0, 2), 10);
      m = parseInt(s.slice(2), 10);
    } else if (/^\d{1,2}$/.test(s)) {
      h = parseInt(s, 10);
      m = 0;
    } else {
      return raw.trim(); // already has colon or unrecognised — leave as-is
    }
    if (h > 23 || m > 59) return raw.trim();
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  let calendarBlockItemDrafts = normalizeCalendarBlockItems(editingEvent?.blockItems || []).map(item => ({ ...item }));
  const calBlockItemsEditor = document.getElementById("cal-block-items-editor");
  const calBlockItemAddButton = document.getElementById("cal-block-item-add");

  function createCalendarBlockItemDraft(seed = {}) {
    return {
      id: typeof seed?.id === "string" && seed.id ? seed.id : createId(),
      title: typeof seed?.title === "string" ? seed.title : "",
      startTime: typeof seed?.startTime === "string" ? seed.startTime : "",
      endTime: typeof seed?.endTime === "string" ? seed.endTime : "",
      type: normalizeCalendarBlockItemType(seed?.type),
      reminderOffsetMinutes: normalizeCalendarBlockReminderOffsetMinutes(seed?.reminderOffsetMinutes),
      done: Boolean(seed?.done)
    };
  }

  calendarBlockItemDrafts = calendarBlockItemDrafts.map(item => createCalendarBlockItemDraft(item));

  function syncCalendarBlockItemReminderState(blockItem, reminderSelect) {
    const normalizedStartTime = normalizeTime(blockItem.startTime || "");
    const hasStartTime = Boolean(normalizedStartTime && CALENDAR_TIME_PATTERN.test(normalizedStartTime));

    if (!hasStartTime) {
      blockItem.reminderOffsetMinutes = 0;
      reminderSelect.value = "0";
      reminderSelect.disabled = true;
      return;
    }

    blockItem.startTime = normalizedStartTime;
    blockItem.reminderOffsetMinutes = normalizeCalendarBlockReminderOffsetMinutes(blockItem.reminderOffsetMinutes);
    reminderSelect.value = String(blockItem.reminderOffsetMinutes);
    reminderSelect.disabled = false;
  }

  function renderCalendarBlockItemsEditor() {
    if (!calBlockItemsEditor) return;

    calBlockItemsEditor.innerHTML = "";

    if (!calendarBlockItemDrafts.length) {
      const empty = document.createElement("p");
      empty.className = "cal-block-items-empty";
      empty.textContent = "No block items yet.";
      calBlockItemsEditor.appendChild(empty);
      return;
    }

    calendarBlockItemDrafts.forEach(blockItem => {
      const row = document.createElement("div");
      row.className = "cal-block-item-row";
      row.dataset.blockId = blockItem.id;

      const doneLabel = document.createElement("label");
      doneLabel.className = "cal-block-item-row__done";
      const doneInput = document.createElement("input");
      doneInput.type = "checkbox";
      doneInput.checked = Boolean(blockItem.done);
      doneInput.setAttribute("aria-label", "Mark block item as completed");
      const doneText = document.createElement("span");
      doneText.textContent = "Done";
      doneLabel.append(doneInput, doneText);

      const fields = document.createElement("div");
      fields.className = "cal-block-item-row__fields";

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.maxLength = 140;
      titleInput.placeholder = "Block item title";
      titleInput.className = "cal-block-item-row__title";
      titleInput.setAttribute("aria-label", "Block item title");
      titleInput.value = blockItem.title || "";

      const startInput = document.createElement("input");
      startInput.type = "text";
      startInput.maxLength = 5;
      startInput.placeholder = "Start (09:50)";
      startInput.className = "cal-block-item-row__time";
      startInput.setAttribute("aria-label", "Block item start time");
      startInput.value = blockItem.startTime || "";

      const endInput = document.createElement("input");
      endInput.type = "text";
      endInput.maxLength = 5;
      endInput.placeholder = "End (10:30)";
      endInput.className = "cal-block-item-row__time";
      endInput.setAttribute("aria-label", "Block item end time");
      endInput.value = blockItem.endTime || "";

      const reminderSelect = document.createElement("select");
      reminderSelect.className = "cal-select cal-block-item-row__reminder";
      reminderSelect.setAttribute("aria-label", "Block item reminder");
      [
        { value: "0", label: "No reminder" },
        { value: "5", label: "5 minutes before" },
        { value: "10", label: "10 minutes before" }
      ].forEach(optionConfig => {
        const option = document.createElement("option");
        option.value = optionConfig.value;
        option.textContent = optionConfig.label;
        reminderSelect.appendChild(option);
      });

      syncCalendarBlockItemReminderState(blockItem, reminderSelect);

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "icon-btn";
      removeButton.textContent = "✕";
      removeButton.title = "Remove block item";
      removeButton.setAttribute("aria-label", "Remove block item");

      doneInput.addEventListener("change", () => {
        blockItem.done = doneInput.checked;
      });

      titleInput.addEventListener("input", () => {
        blockItem.title = titleInput.value;
      });

      startInput.addEventListener("input", () => {
        blockItem.startTime = startInput.value;
        if (!startInput.value.trim()) {
          syncCalendarBlockItemReminderState(blockItem, reminderSelect);
        }
      });

      startInput.addEventListener("blur", () => {
        const normalizedStartTime = normalizeTime(startInput.value || "");
        startInput.value = normalizedStartTime;
        blockItem.startTime = normalizedStartTime;
        syncCalendarBlockItemReminderState(blockItem, reminderSelect);
      });

      endInput.addEventListener("input", () => {
        blockItem.endTime = endInput.value;
      });

      endInput.addEventListener("blur", () => {
        const normalizedEndTime = normalizeTime(endInput.value || "");
        endInput.value = normalizedEndTime;
        blockItem.endTime = normalizedEndTime;
      });

      reminderSelect.addEventListener("change", () => {
        if (reminderSelect.disabled) {
          blockItem.reminderOffsetMinutes = 0;
          reminderSelect.value = "0";
          return;
        }

        blockItem.reminderOffsetMinutes = normalizeCalendarBlockReminderOffsetMinutes(reminderSelect.value);
        reminderSelect.value = String(blockItem.reminderOffsetMinutes);
      });

      removeButton.addEventListener("click", () => {
        calendarBlockItemDrafts = calendarBlockItemDrafts.filter(entry => entry.id !== blockItem.id);
        renderCalendarBlockItemsEditor();
      });

      fields.append(titleInput, startInput, endInput, reminderSelect);
      row.append(doneLabel, fields, removeButton);
      calBlockItemsEditor.appendChild(row);
    });
  }

  function getCalendarBlockItemsFromEditor() {
    const items = [];

    for (let index = 0; index < calendarBlockItemDrafts.length; index += 1) {
      const draftItem = calendarBlockItemDrafts[index];
      const title = typeof draftItem?.title === "string" ? draftItem.title.trim() : "";
      const startTime = normalizeTime(typeof draftItem?.startTime === "string" ? draftItem.startTime : "");
      const endTime = normalizeTime(typeof draftItem?.endTime === "string" ? draftItem.endTime : "");
      const reminderOffsetMinutes = normalizeCalendarBlockReminderOffsetMinutes(draftItem?.reminderOffsetMinutes);
      const done = Boolean(draftItem?.done);

      const hasAnyValue = Boolean(title || startTime || endTime || reminderOffsetMinutes || done);
      if (!hasAnyValue) {
        continue;
      }

      if (!title) {
        return { error: `Block item ${index + 1}: title is required.` };
      }

      if (startTime && !CALENDAR_TIME_PATTERN.test(startTime)) {
        return { error: `Block item ${index + 1}: start time must be HH:MM.` };
      }

      if (endTime && !CALENDAR_TIME_PATTERN.test(endTime)) {
        return { error: `Block item ${index + 1}: end time must be HH:MM.` };
      }

      items.push({
        id: typeof draftItem?.id === "string" && draftItem.id ? draftItem.id : createId(),
        title,
        startTime,
        endTime,
        type: normalizeCalendarBlockItemType(draftItem?.type),
        reminderOffsetMinutes: startTime ? reminderOffsetMinutes : 0,
        done
      });
    }

    return { items: normalizeCalendarBlockItems(items) };
  }

  if (calBlockItemAddButton) {
    calBlockItemAddButton.addEventListener("click", () => {
      calendarBlockItemDrafts.push(createCalendarBlockItemDraft());
      renderCalendarBlockItemsEditor();
      const titleInputs = calBlockItemsEditor?.querySelectorAll(".cal-block-item-row__title");
      const newestTitleInput = titleInputs && titleInputs.length ? titleInputs[titleInputs.length - 1] : null;
      if (newestTitleInput) {
        newestTitleInput.focus();
      }
    });
  }

  renderCalendarBlockItemsEditor();

  ["cal-start-time", "cal-end-time"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => {
      if (el.value.trim()) el.value = normalizeTime(el.value);
    });
  });

  const normalizedEditingColor = editingEvent ? normalizeCalendarColorKey(editingEvent.color) : "";
  const initialFormColor = editingEvent && COLOR_OPTIONS.includes(normalizedEditingColor)
    ? normalizedEditingColor
    : "green";
  calColorInput.value = initialFormColor;

  document.querySelectorAll(".color-swatch").forEach(btn => {
    if (btn.dataset.color === initialFormColor) btn.classList.add("is-selected");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".color-swatch").forEach(b => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      calColorInput.value = btn.dataset.color;
      updateSelectedColorTypeLabel(btn.dataset.color);
    });
  });
  updateSelectedColorTypeLabel(calColorInput.value || initialFormColor);

  if (editingEvent) {
    const calAddForm = document.getElementById("cal-add-form");
    if (calAddForm) {
      calAddForm.title.value = editingEvent.title;
      calAddForm.date.value = editingEvent.date;
      calAddForm.startTime.value = editingEvent.time || "";
      calAddForm.endTime.value = editingEvent.endTime || "";
      calAddForm.location.value = editingEvent.location || "";
      calAddForm.note.value = editingEvent.note || "";
      calAddForm.recurrence.value = editingEvent.recurrence || "";
    }
  } else if (
    uiState.calendarDraftRange &&
    ISO_DATE_PATTERN.test(uiState.calendarDraftRange.date || "")
  ) {
    const calAddForm = document.getElementById("cal-add-form");
    if (calAddForm) {
      calAddForm.date.value = uiState.calendarDraftRange.date;
      calAddForm.startTime.value = uiState.calendarDraftRange.startTime || "";
      calAddForm.endTime.value = uiState.calendarDraftRange.endTime || "";
    }
  }

  if (uiState.calendarFocusTitleOnce) {
    const titleInput = document.getElementById("cal-title");
    if (titleInput) {
      titleInput.focus();
      titleInput.select();
    }
    uiState.calendarFocusTitleOnce = false;
  }

  function navigateCalendarToDate(dateStr) {
    if (!ISO_DATE_PATTERN.test(dateStr)) return;
    if (viewMode === "day") {
      uiState.calendarWeekStart = dateStr;
    } else {
      uiState.calendarWeekStart = mondayOfWeek(new Date(dateStr + "T12:00:00"));
    }
  }

  function setCalendarSelection(eventId, displayDate = "") {
    const eventRecord = appState.calendarEvents.find(entry => entry.id === eventId);
    if (!eventRecord) return;
    uiState.calendarSelectedEventId = eventRecord.id;
    const normalizedDate = ISO_DATE_PATTERN.test(displayDate) ? displayDate : eventRecord.date;
    uiState.calendarSelectedEventDate = normalizedDate;
    uiState.calendarCopyTargetDate = normalizedDate;
  }

  function clearCalendarSelection() {
    uiState.calendarSelectedEventId = null;
    uiState.calendarSelectedEventDate = "";
    uiState.calendarCopyTargetDate = "";
  }

  function cloneCalendarEvent(sourceEvent, targetDate) {
    return createCalendarEvent({
      title: sourceEvent.title,
      date: targetDate,
      time: sourceEvent.time || "",
      endTime: sourceEvent.endTime || "",
      note: sourceEvent.note || "",
      location: sourceEvent.location || "",
      color: sourceEvent.color || "green",
      blockItems: normalizeCalendarBlockItems(sourceEvent.blockItems).map(item => ({
        ...item,
        id: createId()
      })),
      // Duplicate/copy should create a standalone event copy by default.
      recurrence: ""
    });
  }

  function deleteCalendarEventById(eventId, displayDate = "") {
    const eventRecord = appState.calendarEvents.find(entry => entry.id === eventId);
    if (!eventRecord) return;
    const recurringOccurrence = eventRecord.recurrence && ISO_DATE_PATTERN.test(displayDate) && displayDate !== eventRecord.date;
    const message = recurringOccurrence
      ? `Delete "${eventRecord.title}"?\n\nThis is a recurring occurrence. Deleting will remove the original event from ${eventRecord.date}.`
      : `Delete "${eventRecord.title}"?`;
    if (!confirm(message)) return;
    appState.calendarEvents = appState.calendarEvents.filter(entry => entry.id !== eventId);
    if (uiState.calendarSelectedEventId === eventId) {
      clearCalendarSelection();
    }
    if (uiState.calendarEditingEventId === eventId) {
      uiState.calendarEditingEventId = null;
    }
    saveState();
    renderApp();
  }

  // ── add/edit event form ───────────────────────────────────────────────────
  const calAddForm = document.getElementById("cal-add-form");
  const calEditCancelBtn = document.getElementById("cal-edit-cancel");

  if (calEditCancelBtn) {
    calEditCancelBtn.addEventListener("click", () => {
      uiState.calendarEditingEventId = null;
      renderApp();
    });
  }

  calAddForm.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value.trim();
    const date = form.date.value;
    const startTime = normalizeTime(form.startTime.value || "");
    const endTime = normalizeTime(form.endTime.value || "");
    const location = form.location.value.trim();
    const note = form.note.value.trim();
    const color = form.color.value || "green";
    const recurrence = form.recurrence.value || "";
    const msg = document.getElementById("cal-form-msg");

    if (!title) { msg.textContent = "Please enter a title."; msg.style.display = ""; return; }
    if (!date)  { msg.textContent = "Please pick a date.";   msg.style.display = ""; return; }

    if (startTime && !CALENDAR_TIME_PATTERN.test(startTime)) {
      msg.textContent = "Start time must be in HH:MM format (e.g. 09:00 or 14:30).";
      msg.style.display = "";
      return;
    }
    if (endTime && !CALENDAR_TIME_PATTERN.test(endTime)) {
      msg.textContent = "End time must be in HH:MM format (e.g. 09:00 or 14:30).";
      msg.style.display = "";
      return;
    }

    const parsedBlockItems = getCalendarBlockItemsFromEditor();
    if (parsedBlockItems.error) {
      msg.textContent = parsedBlockItems.error;
      msg.style.display = "";
      return;
    }

    const blockItems = parsedBlockItems.items;

    msg.style.display = "none";

    const editingId = uiState.calendarEditingEventId;
    if (editingId) {
      const eventRecord = appState.calendarEvents.find(entry => entry.id === editingId);
      if (!eventRecord) {
        uiState.calendarEditingEventId = null;
        msg.textContent = "This event no longer exists.";
        msg.style.display = "";
        renderApp();
        return;
      }
      eventRecord.title = title;
      eventRecord.date = date;
      eventRecord.time = startTime;
      eventRecord.endTime = endTime;
      eventRecord.location = location;
      eventRecord.note = note;
      eventRecord.color = color;
      eventRecord.recurrence = recurrence;
      eventRecord.blockItems = blockItems;
      uiState.calendarDraftRange = null;
      uiState.calendarEditingEventId = null;
      setCalendarSelection(eventRecord.id, date);
      navigateCalendarToDate(date);
      saveState();
      renderApp();
      return;
    }

    const newEvent = createCalendarEvent({ title, date, time: startTime, endTime, note, location, color, recurrence, blockItems });
    appState.calendarEvents.push(newEvent);
    uiState.calendarDraftRange = null;
    setCalendarSelection(newEvent.id, date);
    navigateCalendarToDate(date);
    saveState();
    renderApp();
  });

  // ── selected event actions panel ──────────────────────────────────────────
  function setCalendarActionMessage(text, tone = "error") {
    const msg = document.getElementById("cal-action-msg");
    if (!msg) return;
    msg.textContent = text;
    msg.dataset.tone = tone;
    msg.style.display = text ? "" : "none";
  }

  if (selectedEvent) {
    const selectedDate = selectedEventDate || selectedEvent.date;
    const closeBtn = document.getElementById("cal-action-close");
    const editBtn = document.getElementById("cal-action-edit");
    const duplicateBtn = document.getElementById("cal-action-duplicate");
    const deleteBtn = document.getElementById("cal-action-delete");
    const copyForm = document.getElementById("cal-copy-form");
    const copyDateInput = document.getElementById("cal-copy-date");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        uiState.calendarEditingEventId = null;
        clearCalendarSelection();
        renderApp();
      });
    }

    if (editBtn) {
      editBtn.addEventListener("click", () => {
        uiState.calendarDraftRange = null;
        uiState.calendarEditingEventId = selectedEvent.id;
        setCalendarSelection(selectedEvent.id, selectedDate);
        renderApp();
      });
    }

    if (duplicateBtn) {
      duplicateBtn.addEventListener("click", () => {
        const duplicatedEvent = cloneCalendarEvent(selectedEvent, selectedDate);
        appState.calendarEvents.push(duplicatedEvent);
        uiState.calendarDraftRange = null;
        uiState.calendarEditingEventId = null;
        setCalendarSelection(duplicatedEvent.id, duplicatedEvent.date);
        navigateCalendarToDate(duplicatedEvent.date);
        saveState();
        renderApp();
      });
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        deleteCalendarEventById(selectedEvent.id, selectedDate);
      });
    }

    if (copyDateInput) {
      copyDateInput.addEventListener("change", () => {
        uiState.calendarCopyTargetDate = copyDateInput.value || "";
        setCalendarActionMessage("");
      });
    }

    if (copyForm) {
      copyForm.addEventListener("submit", event => {
        event.preventDefault();
        const copyDate = copyDateInput ? copyDateInput.value : "";
        if (!ISO_DATE_PATTERN.test(copyDate)) {
          setCalendarActionMessage("Please choose a valid date.");
          return;
        }
        const copiedEvent = cloneCalendarEvent(selectedEvent, copyDate);
        appState.calendarEvents.push(copiedEvent);
        uiState.calendarDraftRange = null;
        uiState.calendarEditingEventId = null;
        setCalendarSelection(copiedEvent.id, copiedEvent.date);
        navigateCalendarToDate(copiedEvent.date);
        saveState();
        renderApp();
      });
    }
  }

  // ── event click actions + delete shortcuts ───────────────────────────────
  let suppressCalendarEventSelectionUntil = 0;
  const calWeekGrid = document.getElementById("cal-week-grid");

  calWeekGrid.addEventListener("change", e => {
    const blockCheckbox = e.target.closest(".cal-block-check");
    if (!blockCheckbox) return;

    const eventId = blockCheckbox.dataset.eventId;
    const blockId = blockCheckbox.dataset.blockId;

    if (!eventId || !blockId) return;

    const eventRecord = appState.calendarEvents.find(entry => entry.id === eventId);
    if (!eventRecord) return;

    if (!Array.isArray(eventRecord.blockItems)) {
      eventRecord.blockItems = [];
    }

    const blockItem = eventRecord.blockItems.find(entry => entry && entry.id === blockId);
    if (!blockItem) return;

    blockItem.done = Boolean(blockCheckbox.checked);
    saveState();
    renderApp();
  });

  calWeekGrid.addEventListener("click", e => {
    if (e.target.closest(".cal-tg-event__block-row")) {
      return;
    }

    const deleteButton = e.target.closest(".cal-del-btn");
    if (deleteButton) {
      const eventEl = deleteButton.closest("[data-display-date]");
      const displayDate = eventEl?.dataset.displayDate || "";
      deleteCalendarEventById(deleteButton.dataset.id, displayDate);
      return;
    }

    if (Date.now() < suppressCalendarEventSelectionUntil) return;

    const eventEl = e.target.closest(".cal-tg-event, .cal-week-event");
    if (!eventEl || !eventEl.dataset.id) return;
    const displayDate = eventEl.dataset.displayDate || eventEl.closest(".cal-tg-col")?.dataset.date || "";
    setCalendarSelection(eventEl.dataset.id, displayDate);
    uiState.calendarEditingEventId = null;
    renderApp();
  });

  document.querySelectorAll(".calendar-event-tabs [data-event-tab]").forEach(tabButton => {
    tabButton.addEventListener("click", () => {
      const nextTab = tabButton.dataset.eventTab;
      if (nextTab !== "current" && nextTab !== "upcoming") return;
      if (uiState.calendarEventListTab === nextTab) return;
      uiState.calendarEventListTab = nextTab;
      renderApp();
    });
  });

  document.getElementById("cal-event-list").addEventListener("click", e => {
    const deleteButton = e.target.closest(".cal-del-btn");
    if (deleteButton) {
      const row = deleteButton.closest(".calendar-event-item");
      const displayDate = row?.dataset.displayDate || "";
      deleteCalendarEventById(deleteButton.dataset.id, displayDate);
      return;
    }

    const row = e.target.closest(".calendar-event-item");
    if (!row || !row.dataset.id) return;
    setCalendarSelection(row.dataset.id, row.dataset.displayDate || "");
    uiState.calendarEditingEventId = null;
    renderApp();
  });

  const blockReminderList = document.getElementById("cal-block-reminder-list");
  if (blockReminderList) {
    blockReminderList.addEventListener("click", e => {
      const row = e.target.closest(".calendar-block-reminder-item");
      if (!row || !row.dataset.eventId) return;

      const displayDate = row.dataset.displayDate || "";
      setCalendarSelection(row.dataset.eventId, displayDate);
      uiState.calendarEditingEventId = null;

      if (displayDate) {
        navigateCalendarToDate(displayDate);
      }

      renderApp();
    });
  }

  // ── Mini month-picker (date locator) ─────────────────────────────────────
  if (uiState.calendarPickerOpen) {
    const py = uiState.calendarPickerYear;
    const pm = uiState.calendarPickerMonth;
    const firstOfMonth = new Date(py, pm, 1);
    const lastOfMonth  = new Date(py, pm + 1, 0);
    const startDow = (firstOfMonth.getDay() + 6) % 7; // 0=Mon…6=Sun

    const cells = [];
    for (let i = 0; i < startDow; i++) {
      const d = new Date(py, pm, 1 - (startDow - i));
      cells.push({ dateStr: toISODateString(d), otherMonth: true });
    }
    for (let d = 1; d <= lastOfMonth.getDate(); d++) {
      cells.push({ dateStr: toISODateString(new Date(py, pm, d)), otherMonth: false });
    }
    let nd = 1;
    while (cells.length < 42) {
      cells.push({ dateStr: toISODateString(new Date(py, pm + 1, nd++)), otherMonth: true });
    }

    // Compute the range of currently displayed days (for in-range highlight)
    const rangeStart = uiState.calendarWeekStart;
    let rangeEnd;
    if (viewMode === "day") {
      rangeEnd = rangeStart;
    } else {
      const re = new Date(rangeStart + "T12:00:00");
      re.setDate(re.getDate() + 6);
      rangeEnd = toISODateString(re);
    }

    const picker = document.createElement("div");
    picker.className = "cal-mini-picker";
    picker.id = "cal-mini-picker";

    // Header row: «prev-yr  ‹prev-mo  Month Year  next-mo›  next-yr»
    const header = document.createElement("div");
    header.className = "cal-mini-picker__header";
    header.innerHTML = `
      <button type="button" class="cal-mini-picker__nav" id="pmPrevYear"  title="Previous year">&laquo;</button>
      <button type="button" class="cal-mini-picker__nav" id="pmPrevMonth" title="Previous month">&lsaquo;</button>
      <span class="cal-mini-picker__label">${MONTH_NAMES[pm]} ${py}</span>
      <button type="button" class="cal-mini-picker__nav" id="pmNextMonth" title="Next month">&rsaquo;</button>
      <button type="button" class="cal-mini-picker__nav" id="pmNextYear"  title="Next year">&raquo;</button>
    `;
    picker.appendChild(header);

    // Day-of-week header
    const dowRow = document.createElement("div");
    dowRow.className = "cal-mini-picker__dow-row";
    ["Mo","Tu","We","Th","Fr","Sa","Su"].forEach(label => {
      const span = document.createElement("span");
      span.textContent = label;
      dowRow.appendChild(span);
    });
    picker.appendChild(dowRow);

    // Day grid
    const grid = document.createElement("div");
    grid.className = "cal-mini-picker__grid";
    cells.forEach(({ dateStr, otherMonth }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isToday      = dateStr === todayStr;
      const isRangeStart = dateStr === rangeStart;
      const isInRange    = !isRangeStart && dateStr > rangeStart && dateStr <= rangeEnd;
      btn.className = [
        "cal-mini-picker__day",
        otherMonth    ? "is-other-month" : "",
        isToday       ? "is-today"       : "",
        isRangeStart  ? "is-selected"    : (isInRange ? "is-in-range" : "")
      ].filter(Boolean).join(" ");
      btn.textContent = parseInt(dateStr.slice(8), 10);
      btn.dataset.date = dateStr;
      grid.appendChild(btn);
    });
    picker.appendChild(grid);

    // Footer with "Jump to Today" shortcut
    const footer = document.createElement("div");
    footer.className = "cal-mini-picker__footer";
    const jumpBtn = document.createElement("button");
    jumpBtn.type = "button";
    jumpBtn.className = "cal-mini-picker__today-btn";
    jumpBtn.id = "pmJumpToday";
    jumpBtn.textContent = "Jump to Today";
    footer.appendChild(jumpBtn);
    picker.appendChild(footer);

    // Inject into calendar-nav__left so it positions relative to it
    document.querySelector(".calendar-nav__left").appendChild(picker);

    // ── Picker navigation ──────────────────────────────────────────────────
    header.querySelector("#pmPrevYear").addEventListener("click", () => {
      uiState.calendarPickerYear--;
      renderApp();
    });
    header.querySelector("#pmPrevMonth").addEventListener("click", () => {
      let m = uiState.calendarPickerMonth - 1, y = uiState.calendarPickerYear;
      if (m < 0) { m = 11; y--; }
      uiState.calendarPickerMonth = m;
      uiState.calendarPickerYear  = y;
      renderApp();
    });
    header.querySelector("#pmNextMonth").addEventListener("click", () => {
      let m = uiState.calendarPickerMonth + 1, y = uiState.calendarPickerYear;
      if (m > 11) { m = 0; y++; }
      uiState.calendarPickerMonth = m;
      uiState.calendarPickerYear  = y;
      renderApp();
    });
    header.querySelector("#pmNextYear").addEventListener("click", () => {
      uiState.calendarPickerYear++;
      renderApp();
    });

    // ── Day selection ──────────────────────────────────────────────────────
    grid.addEventListener("click", ev => {
      const btn = ev.target.closest(".cal-mini-picker__day");
      if (!btn) return;
      const date = btn.dataset.date;
      if (viewMode === "day") {
        uiState.calendarWeekStart = date;
      } else {
        uiState.calendarWeekStart = mondayOfWeek(new Date(date + "T12:00:00"));
      }
      uiState.calendarPickerOpen = false;
      if (_calendarPickerAbort) { _calendarPickerAbort.abort(); _calendarPickerAbort = null; }
      renderApp();
    });

    // ── Jump to today ──────────────────────────────────────────────────────
    jumpBtn.addEventListener("click", () => {
      uiState.calendarWeekStart  = viewMode === "day" ? todayStr : mondayOfWeek(now);
      uiState.calendarPickerOpen = false;
      if (_calendarPickerAbort) { _calendarPickerAbort.abort(); _calendarPickerAbort = null; }
      renderApp();
    });

    // ── Outside-click closes picker ────────────────────────────────────────
    if (_calendarPickerAbort) { _calendarPickerAbort.abort(); _calendarPickerAbort = null; }
    _calendarPickerAbort = new AbortController();
    document.addEventListener("click", ev => {
      if (ev.target.closest && ev.target.closest("#cal-mini-picker")) return;
      if (ev.target.closest && ev.target.closest("#cal-today"))       return;
      uiState.calendarPickerOpen = false;
      if (_calendarPickerAbort) { _calendarPickerAbort.abort(); _calendarPickerAbort = null; }
      renderApp();
    }, { signal: _calendarPickerAbort.signal });
  }

  // ── Drag & resize for timed event blocks ──────────────────────────────────
  {
    const SNAP_MINS = 15;
    const snapOff = off => Math.round(off * 60 / SNAP_MINS) * SNAP_MINS / 60;
    const offToTimeStr = off => {
      const totalMins = Math.round(off * 60);
      let absMin = (22 * 60 + 30 + totalMins) % (24 * 60);
      if (absMin < 0) absMin += 24 * 60;
      return `${String(Math.floor(absMin / 60)).padStart(2, "0")}:${String(absMin % 60).padStart(2, "0")}`;
    };
    const getColAt = clientX => {
      for (const col of document.querySelectorAll(".cal-tg-col")) {
        const r = col.getBoundingClientRect();
        if (clientX >= r.left && clientX <= r.right) return col;
      }
      return null;
    };
    const pointerToOffset = (clientY, colEl) => {
      const rect = colEl.getBoundingClientRect();
      return Math.max(0, Math.min(24, (clientY - rect.top) / HOUR_PX));
    };
    const normalizeCreateRange = (aOff, bOff) => {
      let start = Math.min(aOff, bOff);
      let end = Math.max(aOff, bOff);

      if (end - start < 0.25) {
        if (end >= 24) {
          end = 24;
          start = Math.max(0, end - 0.25);
        } else {
          end = start + 0.25;
        }
      }

      start = Math.max(0, Math.min(23.75, start));
      end = Math.max(start + 0.25, Math.min(24, end));

      if (end > 24) {
        end = 24;
        start = Math.max(0, end - 0.25);
      }

      return { start, end };
    };
    const renderCreateSelection = (dragState, startOff, endOff) => {
      if (!dragState?.selectionEl) return;
      dragState.selectionEl.style.top = Math.round(startOff * HOUR_PX) + "px";
      dragState.selectionEl.style.height = Math.max(22, Math.round((endOff - startOff) * HOUR_PX)) + "px";
    };
    const clearCreateSelection = dragState => {
      if (dragState?.selectionEl && dragState.selectionEl.parentElement) {
        dragState.selectionEl.parentElement.removeChild(dragState.selectionEl);
      }
    };

    _calendarDragAbort = new AbortController();
    const { signal } = _calendarDragAbort;
    let drag = null;
    const colsEl = document.querySelector(".cal-tg-cols");
    if (!colsEl) return;

    colsEl.addEventListener("mousedown", ev => {
      if (ev.button !== 0) return;
      if (ev.target.closest(".cal-del-btn")) return;
      if (ev.target.closest(".cal-tg-event__block-row") || ev.target.closest(".cal-block-check")) return;
      const evEl = ev.target.closest(".cal-tg-event");
      if (evEl) {
        if (evEl.dataset.virtual) return;
        const id = evEl.dataset.id;
        const calEv = appState.calendarEvents.find(e => e.id === id);
        if (!calEv || !calEv.time) return;
        ev.preventDefault();
        const isResTop = ev.target.classList.contains("cal-tg-event__resize-top");
        const isResBot = ev.target.classList.contains("cal-tg-event__resize-bottom");
        const rawStart = timeToOffset(calEv.time);
        let rawEnd = calEv.endTime ? timeToOffset(calEv.endTime) : rawStart + 1;
        if (rawEnd <= rawStart) rawEnd += 24;
        drag = {
          type: isResTop ? "resize-top" : isResBot ? "resize-bot" : "move",
          id, evEl,
          startY: ev.clientY,
          startX: ev.clientX,
          startOff: rawStart,
          endOff: rawEnd,
          displayDate: evEl.dataset.displayDate || calEv.date,
          didMove: false,
        };
        evEl.classList.add("cal-tg-event--dragging");
        document.body.style.cursor = (isResTop || isResBot) ? "ns-resize" : "grabbing";
        document.body.style.userSelect = "none";
        return;
      }

      const colEl = ev.target.closest(".cal-tg-col");
      if (!colEl || !colEl.dataset.date) return;

      ev.preventDefault();
      const startOff = snapOff(pointerToOffset(ev.clientY, colEl));
      const selectionEl = document.createElement("div");
      selectionEl.className = "cal-tg-selection";
      colEl.appendChild(selectionEl);

      drag = {
        type: "create",
        colEl,
        date: colEl.dataset.date,
        startY: ev.clientY,
        startX: ev.clientX,
        startOff,
        currentOff: startOff,
        didMove: false,
        selectionEl
      };

      const initialRange = normalizeCreateRange(startOff, startOff);
      renderCreateSelection(drag, initialRange.start, initialRange.end);
      document.body.style.cursor = "crosshair";
      document.body.style.userSelect = "none";
    }, { signal });

    document.addEventListener("mousemove", ev => {
      if (!drag) return;
      if (Math.abs(ev.clientY - drag.startY) > 3 || Math.abs(ev.clientX - drag.startX) > 3) {
        drag.didMove = true;
      }
      if (drag.type === "create") {
        drag.currentOff = snapOff(pointerToOffset(ev.clientY, drag.colEl));
        const createRange = normalizeCreateRange(drag.startOff, drag.currentOff);
        renderCreateSelection(drag, createRange.start, createRange.end);
        return;
      }
      const dOff = (ev.clientY - drag.startY) / HOUR_PX;
      const { type, startOff, endOff, evEl } = drag;
      if (type === "move") {
        const dur = endOff - startOff;
        const newStart = Math.max(0, Math.min(23.75, snapOff(startOff + dOff)));
        evEl.style.top    = Math.round(newStart * HOUR_PX) + "px";
        evEl.style.height = Math.max(22, Math.round(dur * HOUR_PX)) + "px";
        const timeEl = evEl.querySelector(".cal-tg-event__time");
        if (timeEl) timeEl.textContent = `${offToTimeStr(newStart)} \u2013 ${offToTimeStr(newStart + dur)}`;
        document.querySelectorAll(".cal-tg-col--drop-target").forEach(c => c.classList.remove("cal-tg-col--drop-target"));
        const targetCol = getColAt(ev.clientX);
        if (targetCol) targetCol.classList.add("cal-tg-col--drop-target");
      } else if (type === "resize-bot") {
        const newEnd = Math.max(startOff + 0.25, snapOff(startOff + (endOff - startOff) + dOff));
        evEl.style.height = Math.max(22, Math.round((newEnd - startOff) * HOUR_PX)) + "px";
        const timeEl = evEl.querySelector(".cal-tg-event__time");
        if (timeEl) timeEl.textContent = `${offToTimeStr(startOff)} \u2013 ${offToTimeStr(newEnd)}`;
      } else if (type === "resize-top") {
        let newStart = Math.max(0, snapOff(startOff + dOff));
        newStart = Math.min(newStart, endOff - 0.25);
        evEl.style.top    = Math.round(newStart * HOUR_PX) + "px";
        evEl.style.height = Math.max(22, Math.round((endOff - newStart) * HOUR_PX)) + "px";
        const timeEl = evEl.querySelector(".cal-tg-event__time");
        if (timeEl) timeEl.textContent = `${offToTimeStr(newStart)} \u2013 ${offToTimeStr(endOff)}`;
      }
    }, { signal });

    document.addEventListener("mouseup", ev => {
      if (!drag) return;
      document.querySelectorAll(".cal-tg-col--drop-target").forEach(c => c.classList.remove("cal-tg-col--drop-target"));
      document.body.style.cursor = "";
      document.body.style.userSelect = "";

      if (drag.type === "create") {
        const createDrag = drag;
        clearCreateSelection(createDrag);
        drag = null;

        if (!createDrag.didMove || !createDrag.date) {
          return;
        }

        const createRange = normalizeCreateRange(createDrag.startOff, createDrag.currentOff);
        uiState.calendarDraftRange = {
          date: createDrag.date,
          startTime: offToTimeStr(createRange.start),
          endTime: offToTimeStr(createRange.end)
        };
        uiState.calendarEditingEventId = null;
        clearCalendarSelection();
        uiState.calendarFocusTitleOnce = true;
        suppressCalendarEventSelectionUntil = Date.now() + 220;
        navigateCalendarToDate(createDrag.date);
        renderApp();
        return;
      }

      const dOff = (ev.clientY - drag.startY) / HOUR_PX;
      const { type, id, startOff, endOff, evEl, displayDate, didMove } = drag;
      const calEv = appState.calendarEvents.find(e => e.id === id);
      let didChange = false;
      if (calEv) {
        if (type === "move" && !didMove) {
          setCalendarSelection(id, displayDate || calEv.date);
          uiState.calendarEditingEventId = null;
          suppressCalendarEventSelectionUntil = Date.now() + 220;
        } else if (type === "move") {
          const dur = endOff - startOff;
          const newStart = Math.max(0, Math.min(23.75, snapOff(startOff + dOff)));
          const nextStart = offToTimeStr(newStart);
          const nextEnd = offToTimeStr(newStart + dur);
          const targetCol = getColAt(ev.clientX);
          const nextDate = (targetCol && targetCol.dataset.date) ? targetCol.dataset.date : calEv.date;
          if (calEv.time !== nextStart || calEv.endTime !== nextEnd || calEv.date !== nextDate) {
            calEv.time = nextStart;
            calEv.endTime = nextEnd;
            calEv.date = nextDate;
            didChange = true;
          }
        } else if (type === "resize-bot") {
          const newEnd = Math.max(startOff + 0.25, snapOff(startOff + (endOff - startOff) + dOff));
          const nextEnd = offToTimeStr(newEnd);
          if (calEv.endTime !== nextEnd) {
            calEv.endTime = nextEnd;
            didChange = true;
          }
        } else if (type === "resize-top") {
          let newStart = Math.max(0, snapOff(startOff + dOff));
          newStart = Math.min(newStart, endOff - 0.25);
          const nextStart = offToTimeStr(newStart);
          if (calEv.time !== nextStart) {
            calEv.time = nextStart;
            didChange = true;
          }
        }
        if (didChange) {
          saveState();
        }
      }
      evEl.classList.remove("cal-tg-event--dragging");
      drag = null;
      renderApp();
    }, { signal });
  }

  upgradeCustomDatePickers(viewRoot);
}

function renderPlanner() {
  const selectedSection = uiState.selectedPlannerSection || "all";
  const visibleItems = getPlannerItems(selectedSection);
  const visibleItemCostSummary = formatPlannerVisibleItemCostSummary(visibleItems);
  const selectedSectionData = selectedSection === "all" ? null : getPlannerSectionById(selectedSection);
  const hasNoSections = appState.plannerSections.length === 0;
  if (selectedSectionData) {
    syncPlannerSectionPlanCostFields(selectedSectionData);
  }

  viewRoot.innerHTML = `
    <section class="budget-layout">
      <aside class="budget-sidebar">
        <div class="budget-sidebar__header">
          <span class="budget-sidebar__heading">Sections</span>
        </div>

        <form class="budget-category-form" id="plannerSectionForm">
          <div class="budget-category-form__row">
            <input
              id="plannerSectionNameInput"
              type="text"
              maxlength="60"
              placeholder="New section name\u2026"
              required
            />
            <button type="submit" class="budget-cat-create-btn">Add</button>
          </div>
          <p class="budget-category-form__message" id="plannerSectionFormMsg"></p>
        </form>

        <ul class="sidebar-list" id="plannerSectionList"></ul>
      </aside>

      <div class="budget-main">
        <div class="budget-main__top">
          <div>
            <h2 class="panel-title">${selectedSection === "all" ? "All Plans" : selectedSectionData.title}</h2>
            <p class="panel-subtitle">
              ${selectedSection === "all"
                ? "Review everything across all planner sections."
                : `Manage items inside ${selectedSectionData.title}.`}
            </p>
          </div>
          <div class="planner-main-metrics">
            <div class="budget-total">
              <span>Items</span>
              <strong>${visibleItems.length}</strong>
            </div>
            <div class="budget-total planner-total${visibleItemCostSummary ? "" : " is-empty"}" id="plannerVisibleCostTotalCard">
              <span>Total cost</span>
              <strong id="plannerVisibleCostTotalValue">${visibleItemCostSummary || "No costs"}</strong>
            </div>
          </div>
        </div>

        <form class="planner-form" id="plannerItemForm">
          <div class="field">
            <label for="plannerItemTitleInput">Title</label>
            <input
              id="plannerItemTitleInput"
              type="text"
              maxlength="200"
              placeholder="Add a task, note, or goal\u2026"
              ${hasNoSections ? "disabled" : ""}
              required
            />
          </div>
          ${selectedSection === "all" ? `
          <div class="field">
            <label for="plannerItemSectionSelect">Section</label>
            <select id="plannerItemSectionSelect" ${hasNoSections ? "disabled" : ""}></select>
          </div>
          ` : ""}
          <div class="budget-form__actions">
            <button type="submit" class="primary-btn" ${hasNoSections ? "disabled" : ""}>Add</button>
          </div>
        </form>

        <ul class="promise-list" id="plannerItemList"></ul>
      </div>
    </section>
  `;

  // ── Sidebar ───────────────────────────────────────────────────────────────
  const sidebarList = document.getElementById("plannerSectionList");
  const plannerVisibleCostTotalCard = document.getElementById("plannerVisibleCostTotalCard");
  const plannerVisibleCostTotalValue = document.getElementById("plannerVisibleCostTotalValue");

  function refreshPlannerVisibleCostSummary() {
    if (!plannerVisibleCostTotalCard || !plannerVisibleCostTotalValue) {
      return;
    }

    const summary = formatPlannerVisibleItemCostSummary(visibleItems);
    plannerVisibleCostTotalValue.textContent = summary || "No costs";
    plannerVisibleCostTotalCard.classList.toggle("is-empty", !summary);
  }

  refreshPlannerVisibleCostSummary();

  const allLi = document.createElement("li");
  allLi.className = "sidebar-list__item";
  const allBtn = document.createElement("button");
  allBtn.type = "button";
  allBtn.className = `sidebar-btn ${selectedSection === "all" ? "is-active" : ""}`;
  const totalCount = appState.plannerSections.reduce((sum, s) => sum + s.items.length, 0);
  allBtn.innerHTML = `<strong>All Plans</strong><span>${totalCount} items</span>`;
  allBtn.addEventListener("click", () => {
    uiState.selectedPlannerSection = "all";
    renderApp();
  });
  allLi.appendChild(allBtn);
  sidebarList.appendChild(allLi);

  appState.plannerSections.forEach(section => {
    const li = document.createElement("li");
    li.className = "sidebar-list__item planner-section-item";
    li.dataset.sectionId = section.id;
    li.draggable = true;

    const row = document.createElement("div");
    row.className = "planner-sidebar-row";

    const dragHandle = document.createElement("span");
    dragHandle.className = "planner-section__drag-handle";
    dragHandle.setAttribute("aria-hidden", "true");
    dragHandle.setAttribute("title", "Drag to reorder section");
    dragHandle.textContent = "\u2807";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `sidebar-btn ${section.id === selectedSection ? "is-active" : ""}`;
    btn.innerHTML = `<strong>${section.title}</strong><span>${section.items.length} items</span>`;
    btn.addEventListener("click", () => {
      uiState.selectedPlannerSection = section.id;
      renderApp();
    });

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "icon-btn";
    delBtn.textContent = "\u00d7";
    delBtn.setAttribute("title", `Delete \u201c${section.title}\u201d`);
    delBtn.setAttribute("aria-label", `Delete section ${section.title}`);
    delBtn.addEventListener("click", () => {
      const itemCount = section.items.length;
      const msg = itemCount > 0
        ? `Delete "${section.title}" and its ${itemCount} item${itemCount !== 1 ? "s" : ""}?`
        : `Delete "${section.title}"?`;
      if (!confirm(msg)) return;
      appState.plannerSections = appState.plannerSections.filter(s => s.id !== section.id);
      if (uiState.selectedPlannerSection === section.id) {
        uiState.selectedPlannerSection = "all";
      }
      saveState();
      renderApp();
    });

    row.appendChild(dragHandle);
    row.appendChild(btn);
    row.appendChild(delBtn);
    li.appendChild(row);
    sidebarList.appendChild(li);
  });

  {
    let dragSectionId = null;

    function getPlannerSectionLi(el) {
      while (el && (!el.classList || !el.classList.contains("planner-section-item"))) el = el.parentElement;
      return el;
    }

    sidebarList.addEventListener("dragstart", event => {
      const li = getPlannerSectionLi(event.target);
      if (!li) return;
      dragSectionId = li.dataset.sectionId;
      li.classList.add("planner-section-item--dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", dragSectionId);
    });

    sidebarList.addEventListener("dragend", event => {
      const li = getPlannerSectionLi(event.target);
      if (li) li.classList.remove("planner-section-item--dragging");
      sidebarList.querySelectorAll(".planner-section-item--drag-over").forEach(el =>
        el.classList.remove("planner-section-item--drag-over")
      );
      dragSectionId = null;
    });

    sidebarList.addEventListener("dragover", event => {
      const li = getPlannerSectionLi(event.target);
      if (!li || li.dataset.sectionId === dragSectionId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      sidebarList.querySelectorAll(".planner-section-item--drag-over").forEach(el =>
        el.classList.remove("planner-section-item--drag-over")
      );
      li.classList.add("planner-section-item--drag-over");
    });

    sidebarList.addEventListener("dragleave", event => {
      const li = getPlannerSectionLi(event.target);
      if (li) li.classList.remove("planner-section-item--drag-over");
    });

    sidebarList.addEventListener("drop", event => {
      event.preventDefault();
      const targetLi = getPlannerSectionLi(event.target);
      if (!targetLi || !dragSectionId) return;

      const targetSectionId = targetLi.dataset.sectionId;
      if (targetSectionId === dragSectionId) return;

      const reordered = [...appState.plannerSections];
      const fromIndex = reordered.findIndex(section => section.id === dragSectionId);
      const toIndex = reordered.findIndex(section => section.id === targetSectionId);
      if (fromIndex === -1 || toIndex === -1) return;

      reordered.splice(toIndex, 0, reordered.splice(fromIndex, 1)[0]);
      appState.plannerSections = reordered;

      saveState();
      renderApp();
    });
  }

  // ── Section select when "all" is active ───────────────────────────────────
  if (selectedSection === "all" && !hasNoSections) {
    const sectionSelect = document.getElementById("plannerItemSectionSelect");
    appState.plannerSections.forEach(section => {
      const opt = document.createElement("option");
      opt.value = section.id;
      opt.textContent = section.title;
      sectionSelect.appendChild(opt);
    });
    buildGtdCustomSelect(sectionSelect);
  }

  // ── Item list ─────────────────────────────────────────────────────────────
  const plannerItemList = document.getElementById("plannerItemList");

  if (visibleItems.length === 0) {
    plannerItemList.appendChild(createEmptyState(
      hasNoSections
        ? "Create a section first, then add tasks, notes, or goals to it."
        : "This section is empty. Add an item above to get started."
    ));
  } else {
    visibleItems.forEach(({ section, item }) => {
      const checklist = Array.isArray(item.checklist) ? item.checklist : [];
      const itemCostAmount = getPlannerItemCostAmount(item);
      const itemCostCurrency = getPlannerItemCostCurrency(item);

      const li = document.createElement("li");
      li.className = `promise-item planner-item${item.done ? " is-done" : ""}`;
      li.dataset.itemId = item.id;
      li.draggable = true;

      // ── Row ──────────────────────────────────────────────────────────────
      const row = document.createElement("div");
      row.className = "planner-item__row";

      // Drag handle
      const dragHandle = document.createElement("span");
      dragHandle.className = "planner-item__drag-handle";
      dragHandle.setAttribute("aria-hidden", "true");
      dragHandle.setAttribute("title", "Drag to reorder");
      dragHandle.textContent = "\u2807";

      // Checkbox + title label
      const main = document.createElement("label");
      main.className = "promise-item__main";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "promise-item__check";
      checkbox.checked = item.done;
      checkbox.addEventListener("change", () => {
        item.done = checkbox.checked;
        saveState();
        renderApp();
      });

      const copy = document.createElement("div");
      copy.className = "promise-item__copy";

      const titleRow = document.createElement("div");
      titleRow.className = "planner-item__title-row";

      const titleEl = document.createElement("strong");
      titleEl.className = "promise-item__text";
      titleEl.textContent = item.title;

      titleRow.appendChild(titleEl);

      const itemCostDisplay = formatPlannerItemCostDisplay(item);
      if (itemCostDisplay) {
        const itemCostChip = document.createElement("span");
        itemCostChip.className = "planner-item__cost-chip";
        itemCostChip.textContent = itemCostDisplay;
        itemCostChip.setAttribute("aria-label", `Item cost ${itemCostDisplay}`);
        titleRow.appendChild(itemCostChip);
      }

      copy.appendChild(titleRow);

      const notePreview = document.createElement("span");
      notePreview.className = "planner-item__note";
      copy.appendChild(notePreview);

      const meta = document.createElement("span");
      meta.className = "promise-item__meta";
      copy.appendChild(meta);

      function refreshPlannerItemSecondaryText() {
        const noteText = typeof item.note === "string" ? item.note.trim() : "";
        notePreview.textContent = noteText;
        notePreview.hidden = !noteText;

        const metaParts = [];
        if (selectedSection === "all") {
          metaParts.push(section.title);
        }
        if (checklist.length > 0) {
          const done = checklist.filter(c => c.done).length;
          metaParts.push(`${done}/${checklist.length} done`);
        }

        meta.textContent = metaParts.join(" \u00b7 ");
        meta.hidden = metaParts.length === 0;
      }

      refreshPlannerItemSecondaryText();

      main.appendChild(checkbox);
      main.appendChild(copy);

      // Actions
      const actions = document.createElement("div");
      actions.className = "planner-item__actions";

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "tiny-btn";
      editBtn.textContent = "Edit";

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "tiny-btn is-danger";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        if (!confirm(`Delete \u201c${item.title}\u201d?`)) return;
        section.items = section.items.filter(i => i.id !== item.id);
        saveState();
        renderApp();
      });

      const expandBtn = document.createElement("button");
      expandBtn.type = "button";
      expandBtn.className = "planner-item__expand-btn";
      expandBtn.setAttribute("aria-label", "Show details");
      expandBtn.setAttribute("aria-expanded", "false");
      expandBtn.textContent = "\u25be";

      actions.appendChild(editBtn);
      actions.appendChild(deleteBtn);
      actions.appendChild(expandBtn);

      row.appendChild(dragHandle);
      row.appendChild(main);
      row.appendChild(actions);

      // ── Details panel ────────────────────────────────────────────────────
      const details = document.createElement("div");
      details.className = "planner-item__details";

      // Edit title section
      const editSection = document.createElement("div");
      editSection.className = "planner-item__edit-section";

      const editTitleLabel = document.createElement("label");
      editTitleLabel.className = "planner-item__field-label";
      editTitleLabel.textContent = "Title";

      const editTitleRow = document.createElement("div");
      editTitleRow.className = "planner-item__edit-row";

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.className = "planner-item__title-input";
      titleInput.maxLength = 200;
      titleInput.value = item.title;

      const saveTitleBtn = document.createElement("button");
      saveTitleBtn.type = "button";
      saveTitleBtn.className = "tiny-btn";
      saveTitleBtn.textContent = "Save";
      saveTitleBtn.addEventListener("click", () => {
        const newTitle = titleInput.value.trim();
        if (!newTitle) return;
        item.title = newTitle;
        titleEl.textContent = newTitle;
        saveState();
      });

      editTitleRow.appendChild(titleInput);
      editTitleRow.appendChild(saveTitleBtn);
      editSection.appendChild(editTitleLabel);
      editSection.appendChild(editTitleRow);

      // Item cost section
      const costSection = document.createElement("div");
      costSection.className = "planner-item__cost-section";

      const costLabel = document.createElement("div");
      costLabel.className = "planner-item__field-label";
      costLabel.textContent = "Item cost";

      const costRow = document.createElement("div");
      costRow.className = "planner-item__cost-row";

      const amountField = document.createElement("div");
      amountField.className = "field planner-item__cost-field planner-item__cost-field--amount";

      const amountInputId = `plannerItemCostAmount-${item.id}`;
      const amountLabel = document.createElement("label");
      amountLabel.setAttribute("for", amountInputId);
      amountLabel.textContent = "Amount";

      const amountInput = document.createElement("input");
      amountInput.id = amountInputId;
      amountInput.type = "number";
      amountInput.className = "planner-item__cost-input";
      amountInput.min = "0";
      amountInput.step = "0.01";
      amountInput.placeholder = "0";
      amountInput.value = itemCostAmount;

      amountField.appendChild(amountLabel);
      amountField.appendChild(amountInput);

      const currencyField = document.createElement("div");
      currencyField.className = "field planner-item__cost-field planner-item__cost-field--currency";

      const currencySelectId = `plannerItemCostCurrency-${item.id}`;
      const currencyLabel = document.createElement("label");
      currencyLabel.setAttribute("for", currencySelectId);
      currencyLabel.textContent = "Currency";

      const currencySelect = document.createElement("select");
      currencySelect.id = currencySelectId;

      const usdOption = document.createElement("option");
      usdOption.value = "USD";
      usdOption.textContent = "$";

      const rmbOption = document.createElement("option");
      rmbOption.value = "RMB";
      rmbOption.textContent = "R";

      currencySelect.appendChild(usdOption);
      currencySelect.appendChild(rmbOption);
      currencySelect.value = itemCostCurrency;

      currencyField.appendChild(currencyLabel);
      currencyField.appendChild(currencySelect);

      const costActions = document.createElement("div");
      costActions.className = "planner-item__cost-actions";

      const saveCostBtn = document.createElement("button");
      saveCostBtn.type = "button";
      saveCostBtn.className = "tiny-btn";
      saveCostBtn.textContent = "Save cost";
      saveCostBtn.addEventListener("click", () => {
        const rawAmount = amountInput.value.trim();
        const parsedAmount = Number(rawAmount);

        if (rawAmount && (Number.isNaN(parsedAmount) || parsedAmount < 0)) {
          return;
        }

        if (rawAmount) {
          item.itemCostAmount = String(parsedAmount);
          item.itemCostCurrency = normalizePlannerMoneyCurrency(currencySelect.value);
        } else {
          delete item.itemCostAmount;
          delete item.itemCostCurrency;
        }

        delete item.costAmount;
        delete item.costCurrency;

        const latestCostDisplay = formatPlannerItemCostDisplay(item);
        const existingCostChip = titleRow.querySelector(".planner-item__cost-chip");

        if (latestCostDisplay) {
          if (existingCostChip) {
            existingCostChip.textContent = latestCostDisplay;
            existingCostChip.setAttribute("aria-label", `Item cost ${latestCostDisplay}`);
          } else {
            const newCostChip = document.createElement("span");
            newCostChip.className = "planner-item__cost-chip";
            newCostChip.textContent = latestCostDisplay;
            newCostChip.setAttribute("aria-label", `Item cost ${latestCostDisplay}`);
            titleRow.appendChild(newCostChip);
          }
        } else if (existingCostChip) {
          existingCostChip.remove();
        }

        saveState();
        refreshPlannerVisibleCostSummary();
      });

      costActions.appendChild(saveCostBtn);

      costRow.appendChild(amountField);
      costRow.appendChild(currencyField);
      costRow.appendChild(costActions);

      costSection.appendChild(costLabel);
      costSection.appendChild(costRow);

      buildGtdCustomSelect(currencySelect);

      // Note section
      const noteSection = document.createElement("div");
      noteSection.className = "planner-item__note-section";

      const noteLabelRow = document.createElement("label");
      noteLabelRow.className = "planner-item__field-label";
      noteLabelRow.textContent = "Note";

      const noteArea = document.createElement("textarea");
      noteArea.className = "planner-item__note-textarea";
      noteArea.rows = 3;
      noteArea.maxLength = 2000;
      noteArea.placeholder = "Add a note\u2026";
      noteArea.value = item.note || "";

      const saveNoteBtn = document.createElement("button");
      saveNoteBtn.type = "button";
      saveNoteBtn.className = "tiny-btn";
      saveNoteBtn.textContent = "Save note";
      saveNoteBtn.addEventListener("click", () => {
        item.note = noteArea.value;
        refreshPlannerItemSecondaryText();
        saveState();
      });

      noteSection.appendChild(noteLabelRow);
      noteSection.appendChild(noteArea);
      noteSection.appendChild(saveNoteBtn);

      // Checklist section
      const clSection = document.createElement("div");
      clSection.className = "planner-item__checklist-section";

      const clHeader = document.createElement("div");
      clHeader.className = "planner-item__field-label";
      clHeader.textContent = "Checklist";

      const clList = document.createElement("ul");
      clList.className = "planner-item__checklist-list";

      function renderChecklistItems() {
        clList.innerHTML = "";
        checklist.forEach((ci, idx) => {
          const clLi = document.createElement("li");
          clLi.className = `planner-item__cl-item${ci.done ? " is-done" : ""}`;

          const clCheck = document.createElement("input");
          clCheck.type = "checkbox";
          clCheck.className = "planner-item__cl-check";
          clCheck.checked = ci.done;
          clCheck.addEventListener("change", () => {
            ci.done = clCheck.checked;
            clLi.classList.toggle("is-done", ci.done);
            refreshPlannerItemSecondaryText();
            saveState();
          });

          const clTextWrap = document.createElement("div");
          clTextWrap.className = "planner-item__cl-text-wrap";

          const clSpan = document.createElement("span");
          clSpan.className = "planner-item__cl-text";
          clSpan.textContent = ci.text;
          clTextWrap.appendChild(clSpan);

          const clActions = document.createElement("div");
          clActions.className = "planner-item__cl-actions";

          const clEditBtn = document.createElement("button");
          clEditBtn.type = "button";
          clEditBtn.className = "tiny-btn";
          clEditBtn.textContent = "Edit";
          clEditBtn.addEventListener("click", () => {
            const currentText = clSpan.textContent;
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.className = "planner-item__cl-edit-input";
            editInput.value = currentText;
            editInput.maxLength = 200;

            const saveBtn = document.createElement("button");
            saveBtn.type = "button";
            saveBtn.className = "tiny-btn";
            saveBtn.textContent = "Save";

            const cancelBtn = document.createElement("button");
            cancelBtn.type = "button";
            cancelBtn.className = "tiny-btn";
            cancelBtn.textContent = "Cancel";

            const editRow = document.createElement("div");
            editRow.className = "planner-item__cl-edit-row";
            editRow.appendChild(editInput);
            editRow.appendChild(saveBtn);
            editRow.appendChild(cancelBtn);

            clTextWrap.replaceChild(editRow, clSpan);
            clEditBtn.disabled = true;

            cancelBtn.addEventListener("click", () => {
              clTextWrap.replaceChild(clSpan, editRow);
              clEditBtn.disabled = false;
            });
            saveBtn.addEventListener("click", () => {
              const newText = editInput.value.trim();
              if (!newText) return;
              ci.text = newText;
              clSpan.textContent = newText;
              clTextWrap.replaceChild(clSpan, editRow);
              clEditBtn.disabled = false;
              saveState();
            });
            editInput.addEventListener("keydown", e => {
              if (e.key === "Enter") saveBtn.click();
              if (e.key === "Escape") cancelBtn.click();
            });
            editInput.focus();
          });

          const clDelBtn = document.createElement("button");
          clDelBtn.type = "button";
          clDelBtn.className = "tiny-btn is-danger";
          clDelBtn.textContent = "\u00d7";
          clDelBtn.setAttribute("aria-label", "Delete checklist item");
          clDelBtn.addEventListener("click", () => {
            checklist.splice(idx, 1);
            item.checklist = checklist;
            refreshPlannerItemSecondaryText();
            saveState();
            renderChecklistItems();
          });

          clActions.appendChild(clEditBtn);
          clActions.appendChild(clDelBtn);
          clLi.appendChild(clCheck);
          clLi.appendChild(clTextWrap);
          clLi.appendChild(clActions);
          clList.appendChild(clLi);
        });
      }
      renderChecklistItems();

      const clForm = document.createElement("form");
      clForm.className = "planner-item__cl-form";

      const clInput = document.createElement("input");
      clInput.type = "text";
      clInput.className = "planner-item__cl-input";
      clInput.maxLength = 200;
      clInput.placeholder = "Add checklist item\u2026";

      const clAddBtn = document.createElement("button");
      clAddBtn.type = "submit";
      clAddBtn.className = "tiny-btn";
      clAddBtn.textContent = "Add";

      clForm.appendChild(clInput);
      clForm.appendChild(clAddBtn);
      clForm.addEventListener("submit", e => {
        e.preventDefault();
        const text = clInput.value.trim();
        if (!text) return;
        const newCi = { id: createId(), text, done: false };
        checklist.push(newCi);
        item.checklist = checklist;
        clInput.value = "";
        refreshPlannerItemSecondaryText();
        saveState();
        renderChecklistItems();
      });

      clSection.appendChild(clHeader);
      clSection.appendChild(clList);
      clSection.appendChild(clForm);

      details.appendChild(editSection);
      details.appendChild(costSection);
      details.appendChild(noteSection);
      details.appendChild(clSection);

      // Toggle expand
      expandBtn.addEventListener("click", () => {
        const isOpen = details.classList.toggle("is-open");
        expandBtn.setAttribute("aria-expanded", String(isOpen));
        expandBtn.textContent = isOpen ? "\u25b4" : "\u25be";
      });

      editBtn.addEventListener("click", () => {
        if (!details.classList.contains("is-open")) {
          details.classList.add("is-open");
          expandBtn.setAttribute("aria-expanded", "true");
          expandBtn.textContent = "\u25b4";
        }
        titleInput.focus();
        titleInput.select();
      });

      li.appendChild(row);
      li.appendChild(details);
      plannerItemList.appendChild(li);
    });
  }

  // ── Drag-and-drop reordering ───────────────────────────────────────────────
  {
    let dragSrcItemId = null;
    let dragSrcSectionId = null;

    function getPlannerDragLi(el) {
      while (el && !el.classList.contains("planner-item")) el = el.parentElement;
      return el;
    }

    plannerItemList.addEventListener("dragstart", e => {
      const li = getPlannerDragLi(e.target);
      if (!li) return;
      dragSrcItemId = li.dataset.itemId;
      // Find which section this item belongs to
      const entry = visibleItems.find(v => v.item.id === dragSrcItemId);
      dragSrcSectionId = entry ? entry.section.id : null;
      li.classList.add("planner-item--dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", dragSrcItemId);
    });

    plannerItemList.addEventListener("dragend", e => {
      const li = getPlannerDragLi(e.target);
      if (li) li.classList.remove("planner-item--dragging");
      plannerItemList.querySelectorAll(".planner-item--drag-over").forEach(el =>
        el.classList.remove("planner-item--drag-over")
      );
      dragSrcItemId = null;
      dragSrcSectionId = null;
    });

    plannerItemList.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      const li = getPlannerDragLi(e.target);
      if (!li || li.dataset.itemId === dragSrcItemId) return;
      plannerItemList.querySelectorAll(".planner-item--drag-over").forEach(el =>
        el.classList.remove("planner-item--drag-over")
      );
      li.classList.add("planner-item--drag-over");
    });

    plannerItemList.addEventListener("dragleave", e => {
      const li = getPlannerDragLi(e.target);
      if (li) li.classList.remove("planner-item--drag-over");
    });

    plannerItemList.addEventListener("drop", e => {
      e.preventDefault();
      const targetLi = getPlannerDragLi(e.target);
      if (!targetLi || !dragSrcItemId) return;
      const targetItemId = targetLi.dataset.itemId;
      if (targetItemId === dragSrcItemId) return;

      const srcEntry  = visibleItems.find(v => v.item.id === dragSrcItemId);
      const destEntry = visibleItems.find(v => v.item.id === targetItemId);
      if (!srcEntry || !destEntry) return;

      const srcSection  = srcEntry.section;
      const destSection = destEntry.section;

      if (srcSection.id === destSection.id) {
        // Same section — reorder in place
        const items = srcSection.items;
        const fromIdx = items.findIndex(it => it.id === dragSrcItemId);
        const toIdx   = items.findIndex(it => it.id === targetItemId);
        if (fromIdx === -1 || toIdx === -1) return;
        items.splice(toIdx, 0, items.splice(fromIdx, 1)[0]);
      } else {
        // Different sections — move item to target section at target position
        const fromItems = srcSection.items;
        const toItems   = destSection.items;
        const fromIdx   = fromItems.findIndex(it => it.id === dragSrcItemId);
        const toIdx     = toItems.findIndex(it => it.id === targetItemId);
        if (fromIdx === -1 || toIdx === -1) return;
        const [moved] = fromItems.splice(fromIdx, 1);
        toItems.splice(toIdx, 0, moved);
      }

      saveState();
      renderApp();
    });
  }

  // ── Section form ──────────────────────────────────────────────────────────
  const plannerSectionForm = document.getElementById("plannerSectionForm");
  const plannerSectionNameInput = document.getElementById("plannerSectionNameInput");
  const plannerSectionFormMsg = document.getElementById("plannerSectionFormMsg");

  plannerSectionNameInput.addEventListener("input", () => {
    plannerSectionFormMsg.textContent = "";
  });

  plannerSectionForm.addEventListener("submit", event => {
    event.preventDefault();
    const title = plannerSectionNameInput.value.trim();
    if (!title) return;
    const isDuplicate = appState.plannerSections.some(
      s => s.title.trim().toLowerCase() === title.toLowerCase()
    );
    if (isDuplicate) {
      plannerSectionFormMsg.textContent = "That section already exists.";
      plannerSectionFormMsg.dataset.tone = "error";
      return;
    }
    const newSection = createPlannerSection(title);
    appState.plannerSections.push(newSection);
    uiState.selectedPlannerSection = newSection.id;
    plannerSectionNameInput.value = "";
    saveState();
    renderApp();
  });

  // ── Add item form ─────────────────────────────────────────────────────────
  const plannerItemForm = document.getElementById("plannerItemForm");

  plannerItemForm.addEventListener("submit", event => {
    event.preventDefault();
    const titleInput = document.getElementById("plannerItemTitleInput");
    const title = titleInput.value.trim();
    if (!title) return;

    let targetSectionId = selectedSection;
    if (selectedSection === "all") {
      const select = document.getElementById("plannerItemSectionSelect");
      targetSectionId = select ? select.value : null;
    }

    const targetSection = getPlannerSectionById(targetSectionId);
    if (!targetSection) return;

    targetSection.items.push(createPlannerItem(title));
    titleInput.value = "";
    saveState();
    renderApp();
  });
}

// ── Diary ─────────────────────────────────────────────────────────────────────

const DIARY_STORAGE_KEY = "dockDiaryEntries";

function loadDiaryEntries() {
  try {
    const raw = localStorage.getItem(DIARY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(e => {
      if (!e || typeof e.id !== "string" || typeof e.date !== "string") return null;
      return {
        id: e.id,
        date: e.date,
        dayOfWeek: typeof e.dayOfWeek === "string" ? e.dayOfWeek : "",
        title: typeof e.title === "string" ? e.title : "",
        location: typeof e.location === "string" ? e.location : "",
        text: typeof e.text === "string" ? e.text : "",
        createdAt: typeof e.createdAt === "string" ? e.createdAt : new Date().toISOString()
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

function saveDiaryEntries(entries) {
  localStorage.setItem(DIARY_STORAGE_KEY, JSON.stringify(entries));
}

function createDiaryEntry({ date, dayOfWeek, title = "", location, text }) {
  return {
    id: createId(),
    date,
    dayOfWeek,
    title: title.trim(),
    location: (location || "").trim(),
    text: (text || "").trim(),
    createdAt: new Date().toISOString()
  };
}

// ── Dates Board ───────────────────────────────────────────────────────────────

const DATES_BOARD_STORAGE_KEY = "dockDatesBoardItems";

function loadDatesBoardItems() {
  try {
    const raw = localStorage.getItem(DATES_BOARD_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(item => normalizeDatesBoardItem(item)).filter(Boolean);
  } catch {
    return [];
  }
}

function saveDatesBoardItems(items) {
  localStorage.setItem(DATES_BOARD_STORAGE_KEY, JSON.stringify(items));
}

function normalizeDatesBoardItem(item) {
  if (!item || typeof item !== "object") return null;
  const id = typeof item.id === "string" && item.id ? item.id : createId();
  const type = ["countdown", "reminder", "special"].includes(item.type) ? item.type : null;
  if (!type) return null;
  const title = typeof item.title === "string" ? item.title.trim() : "";
  if (!title) return null;
  const base = {
    id,
    type,
    title,
    note: typeof item.note === "string" ? item.note.trim() : "",
    createdAt: normalizeTimestamp(item.createdAt) || new Date().toISOString()
  };
  if (type === "countdown") {
    const targetDate = typeof item.targetDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(item.targetDate)
      ? item.targetDate : "";
    if (!targetDate) return null;
    return { ...base, targetDate };
  }
  if (type === "reminder") {
    return {
      ...base,
      datetime: typeof item.datetime === "string" ? item.datetime : "",
      done: Boolean(item.done)
    };
  }
  if (type === "special") {
    const originalDate = typeof item.originalDate === "string" && /^\d{4}-\d{2}-\d{2}$/.test(item.originalDate)
      ? item.originalDate : "";
    if (!originalDate) return null;
    return { ...base, originalDate };
  }
  return null;
}

function createCountdown({ title, targetDate, note = "" }) {
  return { id: createId(), type: "countdown", title: title.trim(), targetDate, note: note.trim(), createdAt: new Date().toISOString() };
}

function createReminderItem({ title, datetime = "", note = "" }) {
  return { id: createId(), type: "reminder", title: title.trim(), datetime: datetime.trim(), note: note.trim(), done: false, createdAt: new Date().toISOString() };
}

function createSpecialDate({ title, originalDate, note = "" }) {
  return { id: createId(), type: "special", title: title.trim(), originalDate, note: note.trim(), createdAt: new Date().toISOString() };
}

function getDaysUntil(targetDateIso) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(targetDateIso + "T00:00:00");
  return Math.round((target - today) / (1000 * 60 * 60 * 24));
}

function formatElapsedSince(originalDateIso) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const origin = new Date(originalDateIso + "T00:00:00");
  if (isNaN(origin.getTime())) return "";
  const diffMs = today - origin;
  if (diffMs < 0) return "upcoming";
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years = today.getFullYear() - origin.getFullYear();
  const monthsTotal = (today.getFullYear() - origin.getFullYear()) * 12 + (today.getMonth() - origin.getMonth());
  if (years >= 1) {
    const rem = monthsTotal - years * 12;
    return rem === 0
      ? `${years} year${years !== 1 ? "s" : ""}`
      : `${years} year${years !== 1 ? "s" : ""}, ${rem} month${rem !== 1 ? "s" : ""}`;
  }
  if (monthsTotal >= 1) return `${monthsTotal} month${monthsTotal !== 1 ? "s" : ""}`;
  return `${totalDays} day${totalDays !== 1 ? "s" : ""}`;
}

function formatDateDisplay(isoDate) {
  if (!isoDate) return "";
  const d = new Date(isoDate + "T00:00:00");
  if (isNaN(d.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(d);
}

function formatDateTimeDisplay(dt) {
  if (!dt) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(dt)) return formatDateDisplay(dt);
  const d = new Date(dt);
  if (isNaN(d.getTime())) return dt;
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).format(d);
}

function renderDatesBoard() {
  const items = loadDatesBoardItems();
  if (!("dbAddingType" in uiState)) uiState.dbAddingType = null;
  if (!("dbEditingId" in uiState)) uiState.dbEditingId = null;

  const countdowns = items.filter(i => i.type === "countdown");
  const reminders  = items.filter(i => i.type === "reminder");
  const specials   = items.filter(i => i.type === "special");
  const adding     = uiState.dbAddingType !== null;
  const editingId  = uiState.dbEditingId;

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;")
      .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function buildTypeFields(type) {
    if (type === "countdown") return `
      <div class="db-form__row">
        <div class="field">
          <label for="dbAddTitle">Title</label>
          <input id="dbAddTitle" name="title" type="text" maxlength="120" placeholder="What are you counting down to?" autocomplete="off" required />
        </div>
        <div class="field">
          <label for="dbAddTargetDate">Target Date</label>
          <input id="dbAddTargetDate" name="targetDate" type="date" required />
        </div>
      </div>
      <div class="field">
        <label for="dbAddNote">Note (optional)</label>
        <input id="dbAddNote" name="note" type="text" maxlength="200" placeholder="Short note\u2026" autocomplete="off" />
      </div>`;
    if (type === "reminder") return `
      <div class="db-form__row">
        <div class="field">
          <label for="dbAddTitle">Title</label>
          <input id="dbAddTitle" name="title" type="text" maxlength="120" placeholder="What do you need to remember?" autocomplete="off" required />
        </div>
        <div class="field">
          <label for="dbAddDatetime">Date / Time (optional)</label>
          <input id="dbAddDatetime" name="datetime" type="datetime-local" />
        </div>
      </div>
      <div class="field">
        <label for="dbAddNote">Note (optional)</label>
        <input id="dbAddNote" name="note" type="text" maxlength="200" placeholder="Short note\u2026" autocomplete="off" />
      </div>`;
    if (type === "special") return `
      <div class="db-form__row">
        <div class="field">
          <label for="dbAddTitle">Event Name</label>
          <input id="dbAddTitle" name="title" type="text" maxlength="120" placeholder="e.g. First meeting, Birthday\u2026" autocomplete="off" required />
        </div>
        <div class="field">
          <label for="dbAddOriginalDate">Original Date</label>
          <input id="dbAddOriginalDate" name="originalDate" type="date" required />
        </div>
      </div>
      <div class="field">
        <label for="dbAddNote">Note (optional)</label>
        <input id="dbAddNote" name="note" type="text" maxlength="200" placeholder="Short note\u2026" autocomplete="off" />
      </div>`;
    return "";
  }

  if (!("dbActiveTab" in uiState)) uiState.dbActiveTab = "countdown";
  const t   = uiState.dbAddingType;
  const tab = uiState.dbActiveTab;
  viewRoot.innerHTML = `
    <div class="db-view">
      <div class="db-header">
        <div>
          <h2 class="panel-title">Dates Board</h2>
          <p class="panel-subtitle">Track countdowns, reminders, and special dates in one place.</p>
        </div>
        ${!adding ? `<button type="button" class="ghost-btn" id="dbAddBtn">+ Add Item</button>` : ""}
      </div>

      ${!adding ? `
        <div class="db-tab-bar" id="dbTabBar">
          <button type="button" class="db-tab-btn${tab === "countdown" ? " is-active" : ""}" data-tab="countdown">Countdowns <span class="db-tab-count">${countdowns.length}</span></button>
          <button type="button" class="db-tab-btn${tab === "reminder" ? " is-active" : ""}" data-tab="reminder">Reminders <span class="db-tab-count">${reminders.length}</span></button>
          <button type="button" class="db-tab-btn${tab === "special" ? " is-active" : ""}" data-tab="special">Special Dates <span class="db-tab-count">${specials.length}</span></button>
        </div>
      ` : ""}

      ${adding ? `
        <div class="db-add-panel">
          <p class="eyebrow" style="margin-bottom:14px;">Add new item — choose a type</p>
          <div class="db-type-picker" id="dbTypePicker">
            <button type="button" class="db-type-btn${t === "countdown" ? " is-active" : ""}" data-type="countdown">Countdown</button>
            <button type="button" class="db-type-btn${t === "reminder" ? " is-active" : ""}" data-type="reminder">Reminder</button>
            <button type="button" class="db-type-btn${t === "special" ? " is-active" : ""}" data-type="special">Special Date</button>
          </div>
          ${t ? `
            <form class="db-form" id="dbAddForm" novalidate>
              ${buildTypeFields(t)}
              <div class="db-form__actions">
                <span class="db-form__msg" id="dbAddMsg"></span>
                <button type="button" class="tiny-btn" id="dbCancelAddBtn">Cancel</button>
                <button type="submit" class="primary-btn">Save</button>
              </div>
            </form>
          ` : `<p class="db-type-hint">Select a type above to see the form.</p>`}
        </div>
      ` : ""}

      ${!adding && tab === "countdown" ? `
        <section class="db-section">
          <div class="db-section__header">
            <h3 class="db-section__title">Countdowns <span class="db-section__badge">${countdowns.length}</span></h3>
          </div>
          ${countdowns.length === 0 ? `<p class="db-empty">No countdowns yet. Add one to start tracking a date.</p>` : `<div class="db-countdown-grid" id="dbCountdownGrid"></div>`}
        </section>
      ` : ""}

      ${!adding && tab === "reminder" ? `
        <section class="db-section">
          <div class="db-section__header">
            <h3 class="db-section__title">Reminders <span class="db-section__badge">${reminders.length}</span></h3>
          </div>
          ${reminders.length === 0 ? `<p class="db-empty">No reminders yet. Add one to keep track of things you need to remember.</p>` : `<ul class="db-reminder-list" id="dbReminderList"></ul>`}
        </section>
      ` : ""}

      ${!adding && tab === "special" ? `
        <section class="db-section">
          <div class="db-section__header">
            <h3 class="db-section__title">Special Dates <span class="db-section__badge">${specials.length}</span></h3>
          </div>
          ${specials.length === 0 ? `<p class="db-empty">No special dates yet. Add a birthday, anniversary, or any date worth remembering.</p>` : `<div class="db-special-list" id="dbSpecialList"></div>`}
        </section>
      ` : ""}
    </div>
  `;

  // ── + Add button ────────────────────────────────────────────────────────────
  const addBtn = document.getElementById("dbAddBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      uiState.dbAddingType = "countdown";
      uiState.dbEditingId = null;
      renderApp();
    });
  }

  // ── Type picker ─────────────────────────────────────────────────────────────
  const typePicker = document.getElementById("dbTypePicker");
  if (typePicker) {
    typePicker.addEventListener("click", e => {
      const btn = e.target.closest(".db-type-btn");
      if (!btn) return;
      uiState.dbAddingType = btn.dataset.type;
      renderApp();
    });
  }

  // ── Cancel add ──────────────────────────────────────────────────────────────
  const cancelAddBtn = document.getElementById("dbCancelAddBtn");
  if (cancelAddBtn) {
    cancelAddBtn.addEventListener("click", () => {
      uiState.dbAddingType = null;
      renderApp();
    });
  }

  // ── Tab bar ─────────────────────────────────────────────────────────────────
  const tabBar = document.getElementById("dbTabBar");
  if (tabBar) {
    tabBar.addEventListener("click", e => {
      const btn = e.target.closest(".db-tab-btn");
      if (!btn) return;
      uiState.dbActiveTab = btn.dataset.tab;
      uiState.dbEditingId = null;
      renderApp();
    });
  }

  // ── Add form submit ─────────────────────────────────────────────────────────
  const addForm = document.getElementById("dbAddForm");
  if (addForm) {
    addForm.addEventListener("submit", evt => {
      evt.preventDefault();
      const msg = document.getElementById("dbAddMsg");
      const type = uiState.dbAddingType;
      const title = (document.getElementById("dbAddTitle")?.value || "").trim();
      const note  = (document.getElementById("dbAddNote")?.value || "").trim();
      if (!title) { msg.textContent = "Please enter a title."; return; }
      let newItem;
      if (type === "countdown") {
        const targetDate = document.getElementById("dbAddTargetDate")?.value || "";
        if (!targetDate) { msg.textContent = "Please pick a target date."; return; }
        newItem = createCountdown({ title, targetDate, note });
      } else if (type === "reminder") {
        const datetime = document.getElementById("dbAddDatetime")?.value || "";
        newItem = createReminderItem({ title, datetime, note });
      } else if (type === "special") {
        const originalDate = document.getElementById("dbAddOriginalDate")?.value || "";
        if (!originalDate) { msg.textContent = "Please pick the original date."; return; }
        newItem = createSpecialDate({ title, originalDate, note });
      }
      if (!newItem) return;
      saveDatesBoardItems([...items, newItem]);
      uiState.dbAddingType = null;
      uiState.dbActiveTab = type;
      renderApp();
    });
  }

  // ── Countdown cards ─────────────────────────────────────────────────────────
  const countdownGrid = document.getElementById("dbCountdownGrid");
  if (countdownGrid) {
    countdowns.forEach(item => {
      if (editingId === item.id) {
        const wrap = document.createElement("div");
        wrap.className = "db-inline-edit";
        wrap.style.gridColumn = "1 / -1";
        wrap.innerHTML = `
          <form novalidate style="display:grid;gap:10px;">
            <div class="db-inline-edit__row">
              <div class="field">
                <label>Title</label>
                <input type="text" id="dbETitle_${esc(item.id)}" maxlength="120" value="${esc(item.title)}" />
              </div>
              <div class="field">
                <label>Target Date</label>
                <input type="date" id="dbEDate_${esc(item.id)}" value="${esc(item.targetDate)}" />
              </div>
            </div>
            <div class="field">
              <label>Note (optional)</label>
              <input type="text" id="dbENote_${esc(item.id)}" maxlength="200" value="${esc(item.note)}" />
            </div>
            <div class="db-inline-edit__actions">
              <span class="db-inline-edit__msg" id="dbEMsg_${esc(item.id)}"></span>
              <button type="button" class="tiny-btn" data-cancel>Cancel</button>
              <button type="submit" class="primary-btn">Save</button>
            </div>
          </form>`;
        wrap.querySelector("[data-cancel]").addEventListener("click", () => { uiState.dbEditingId = null; renderApp(); });
        wrap.querySelector("form").addEventListener("submit", evt => {
          evt.preventDefault();
          const eMsg   = document.getElementById(`dbEMsg_${item.id}`);
          const eTitle = (document.getElementById(`dbETitle_${item.id}`)?.value || "").trim();
          const eDate  = document.getElementById(`dbEDate_${item.id}`)?.value || "";
          const eNote  = (document.getElementById(`dbENote_${item.id}`)?.value || "").trim();
          if (!eTitle) { eMsg.textContent = "Please enter a title."; return; }
          if (!eDate)  { eMsg.textContent = "Please pick a target date."; return; }
          saveDatesBoardItems(items.map(i => i.id === item.id ? { ...i, title: eTitle, targetDate: eDate, note: eNote } : i));
          uiState.dbEditingId = null;
          renderApp();
        });
        countdownGrid.appendChild(wrap);
        return;
      }

      const daysLeft = getDaysUntil(item.targetDate);
      const isPast   = daysLeft < 0;
      const isToday  = daysLeft === 0;
      const numDisplay = isPast ? Math.abs(daysLeft) : daysLeft;
      const label    = isPast ? "days ago" : isToday ? "" : "days to go";

      const card = document.createElement("div");
      card.className = `db-countdown-card${isPast ? " is-past" : isToday ? " is-today" : ""}`;
      card.innerHTML = `
        <div class="db-countdown-card__days">${isToday ? "🎉" : numDisplay}</div>
        <div class="db-countdown-card__days-label">${isToday ? "Today!" : label}</div>
        <div class="db-countdown-card__title">${esc(item.title)}</div>
        <div class="db-countdown-card__date">${formatDateDisplay(item.targetDate)}</div>
        ${item.note ? `<div class="db-countdown-card__note">${esc(item.note)}</div>` : ""}
        <div class="db-countdown-card__btns">
          <button type="button" class="tiny-btn" data-edit>Edit</button>
          <button type="button" class="tiny-btn is-danger" data-del>Del</button>
        </div>`;
      card.querySelector("[data-edit]").addEventListener("click", () => { uiState.dbEditingId = item.id; uiState.dbAddingType = null; renderApp(); });
      card.querySelector("[data-del]").addEventListener("click", () => {
        if (!confirm(`Delete "${item.title}"?`)) return;
        saveDatesBoardItems(items.filter(i => i.id !== item.id));
        renderApp();
      });
      countdownGrid.appendChild(card);
    });
  }

  // ── Reminder rows ───────────────────────────────────────────────────────────
  const reminderList = document.getElementById("dbReminderList");
  if (reminderList) {
    reminders.forEach(item => {
      const li = document.createElement("li");
      if (editingId === item.id) {
        li.innerHTML = `
          <div class="db-inline-edit">
            <form novalidate style="display:grid;gap:10px;">
              <div class="db-inline-edit__row">
                <div class="field">
                  <label>Title</label>
                  <input type="text" id="dbETitle_${esc(item.id)}" maxlength="120" value="${esc(item.title)}" />
                </div>
                <div class="field">
                  <label>Date / Time (optional)</label>
                  <input type="datetime-local" id="dbEDatetime_${esc(item.id)}" value="${esc(item.datetime || "")}" />
                </div>
              </div>
              <div class="field">
                <label>Note (optional)</label>
                <input type="text" id="dbENote_${esc(item.id)}" maxlength="200" value="${esc(item.note)}" />
              </div>
              <div class="db-inline-edit__actions">
                <span class="db-inline-edit__msg" id="dbEMsg_${esc(item.id)}"></span>
                <button type="button" class="tiny-btn" data-cancel>Cancel</button>
                <button type="submit" class="primary-btn">Save</button>
              </div>
            </form>
          </div>`;
        li.querySelector("[data-cancel]").addEventListener("click", () => { uiState.dbEditingId = null; renderApp(); });
        li.querySelector("form").addEventListener("submit", evt => {
          evt.preventDefault();
          const eMsg      = document.getElementById(`dbEMsg_${item.id}`);
          const eTitle    = (document.getElementById(`dbETitle_${item.id}`)?.value || "").trim();
          const eDatetime = document.getElementById(`dbEDatetime_${item.id}`)?.value || "";
          const eNote     = (document.getElementById(`dbENote_${item.id}`)?.value || "").trim();
          if (!eTitle) { eMsg.textContent = "Please enter a title."; return; }
          saveDatesBoardItems(items.map(i => i.id === item.id ? { ...i, title: eTitle, datetime: eDatetime, note: eNote } : i));
          uiState.dbEditingId = null;
          renderApp();
        });
        reminderList.appendChild(li);
        return;
      }

      li.className = `db-reminder-row${item.done ? " is-done" : ""}`;
      li.innerHTML = `
        <input type="checkbox" class="db-reminder-row__check" ${item.done ? "checked" : ""} aria-label="Mark as done" />
        <div class="db-reminder-row__copy">
          <div class="db-reminder-row__title">${esc(item.title)}</div>
          ${item.datetime ? `<div class="db-reminder-row__meta">${esc(formatDateTimeDisplay(item.datetime))}</div>` : ""}
          ${item.note ? `<div class="db-reminder-row__note">${esc(item.note)}</div>` : ""}
        </div>
        <div class="db-reminder-row__actions">
          <button type="button" class="tiny-btn" data-edit>Edit</button>
          <button type="button" class="tiny-btn is-danger" data-del>Del</button>
        </div>`;
      li.querySelector(".db-reminder-row__check").addEventListener("change", evt => {
        saveDatesBoardItems(items.map(i => i.id === item.id ? { ...i, done: evt.target.checked } : i));
        renderApp();
      });
      li.querySelector("[data-edit]").addEventListener("click", () => { uiState.dbEditingId = item.id; uiState.dbAddingType = null; renderApp(); });
      li.querySelector("[data-del]").addEventListener("click", () => {
        if (!confirm(`Delete "${item.title}"?`)) return;
        saveDatesBoardItems(items.filter(i => i.id !== item.id));
        renderApp();
      });
      reminderList.appendChild(li);
    });
  }

  // ── Special date cards ──────────────────────────────────────────────────────
  const specialList = document.getElementById("dbSpecialList");
  if (specialList) {
    specials.forEach(item => {
      if (editingId === item.id) {
        const wrap = document.createElement("div");
        wrap.className = "db-inline-edit";
        wrap.innerHTML = `
          <form novalidate style="display:grid;gap:10px;">
            <div class="db-inline-edit__row">
              <div class="field">
                <label>Event Name</label>
                <input type="text" id="dbETitle_${esc(item.id)}" maxlength="120" value="${esc(item.title)}" />
              </div>
              <div class="field">
                <label>Original Date</label>
                <input type="date" id="dbEDate_${esc(item.id)}" value="${esc(item.originalDate)}" />
              </div>
            </div>
            <div class="field">
              <label>Note (optional)</label>
              <input type="text" id="dbENote_${esc(item.id)}" maxlength="200" value="${esc(item.note)}" />
            </div>
            <div class="db-inline-edit__actions">
              <span class="db-inline-edit__msg" id="dbEMsg_${esc(item.id)}"></span>
              <button type="button" class="tiny-btn" data-cancel>Cancel</button>
              <button type="submit" class="primary-btn">Save</button>
            </div>
          </form>`;
        wrap.querySelector("[data-cancel]").addEventListener("click", () => { uiState.dbEditingId = null; renderApp(); });
        wrap.querySelector("form").addEventListener("submit", evt => {
          evt.preventDefault();
          const eMsg   = document.getElementById(`dbEMsg_${item.id}`);
          const eTitle = (document.getElementById(`dbETitle_${item.id}`)?.value || "").trim();
          const eDate  = document.getElementById(`dbEDate_${item.id}`)?.value || "";
          const eNote  = (document.getElementById(`dbENote_${item.id}`)?.value || "").trim();
          if (!eTitle) { eMsg.textContent = "Please enter a name."; return; }
          if (!eDate)  { eMsg.textContent = "Please pick the original date."; return; }
          saveDatesBoardItems(items.map(i => i.id === item.id ? { ...i, title: eTitle, originalDate: eDate, note: eNote } : i));
          uiState.dbEditingId = null;
          renderApp();
        });
        specialList.appendChild(wrap);
        return;
      }

      const elapsed = formatElapsedSince(item.originalDate);
      const elapsedLabel = elapsed === "upcoming" ? "Upcoming" : elapsed ? `${elapsed} ago` : "";

      const card = document.createElement("div");
      card.className = "db-special-card";
      card.innerHTML = `
        <div class="db-special-card__icon" aria-hidden="true">★</div>
        <div class="db-special-card__copy">
          <div class="db-special-card__title">${esc(item.title)}</div>
          ${elapsedLabel ? `<div class="db-special-card__elapsed">${esc(elapsedLabel)}</div>` : ""}
          <div class="db-special-card__date">${esc(formatDateDisplay(item.originalDate))}</div>
          ${item.note ? `<div class="db-special-card__note">${esc(item.note)}</div>` : ""}
        </div>
        <div class="db-special-card__actions">
          <button type="button" class="tiny-btn" data-edit>Edit</button>
          <button type="button" class="tiny-btn is-danger" data-del>Del</button>
        </div>`;
      card.querySelector("[data-edit]").addEventListener("click", () => { uiState.dbEditingId = item.id; uiState.dbAddingType = null; renderApp(); });
      card.querySelector("[data-del]").addEventListener("click", () => {
        if (!confirm(`Delete "${item.title}"?`)) return;
        saveDatesBoardItems(items.filter(i => i.id !== item.id));
        renderApp();
      });
      specialList.appendChild(card);
    });
  }

  upgradeCustomDatePickers(viewRoot);
}

function renderDiary() {
  const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let entries = loadDiaryEntries();

  // Track which entry is being viewed/edited in uiState (session-only, not persisted)
  if (!("diaryActiveId" in uiState)) uiState.diaryActiveId = null;

  // Resolve the active entry (may have been deleted)
  let active = uiState.diaryActiveId
    ? entries.find(entry => entry.id === uiState.diaryActiveId) || null
    : null;

  // Default the date field to today
  const todayIso = (function() {
    const n = new Date();
    return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;
  })();

  function dayOfWeekFromDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T12:00:00");
    return isNaN(d) ? "" : DAY_NAMES[d.getDay()];
  }

  function previewText(text, len = 80) {
    const clean = text.replace(/\s+/g, " ").trim();
    return clean.length <= len ? clean : clean.slice(0, len) + "…";
  }

  function escAttr(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  viewRoot.innerHTML = `
    <div class="diary-layout">
      <div class="diary-main">
        <div class="budget-main__top">
          <div>
            <h2 class="panel-title">${active ? "Edit Entry" : "New Entry"}</h2>
            <p class="panel-subtitle">${active ? `${active.dayOfWeek ? active.dayOfWeek + ", " : ""}${active.date}` : "Write today\u2019s diary entry."}</p>
          </div>
          ${active ? `<button type="button" class="ghost-btn" id="diaryNewBtn">+ New entry</button>` : ""}
        </div>

        <form class="diary-form" id="diaryForm" novalidate>
          <div class="diary-form__meta-row">
            <div class="field">
              <label for="diaryDate">Date</label>
              <input id="diaryDate" name="date" type="date" required value="${active ? active.date : todayIso}" />
            </div>
            <div class="field">
              <label for="diaryDay">Day</label>
              <input id="diaryDay" name="dayOfWeek" type="text" readonly placeholder="Auto-filled" value="${active ? active.dayOfWeek : dayOfWeekFromDate(todayIso)}" />
            </div>
            <div class="field diary-form__location">
              <label for="diaryLocation">Location</label>
              <input id="diaryLocation" name="location" type="text" maxlength="100" placeholder="e.g. Home, Caf\u00e9\u2026" value="${active ? escAttr(active.location) : ""}" />
            </div>
          </div>
          <div class="field">
            <label for="diaryTitle">Title</label>
            <input id="diaryTitle" name="title" type="text" maxlength="140" placeholder="Optional title\u2026" value="${active ? escAttr(active.title) : ""}" />
          </div>
          <div class="field">
            <label for="diaryText">Entry</label>
            <textarea id="diaryText" name="text" class="diary-textarea" rows="14" maxlength="20000" placeholder="Write freely\u2026" required>${active ? active.text.replace(/</g, "&lt;") : ""}</textarea>
          </div>
          <div class="diary-form__actions">
            <span class="editor-autosave-status" id="diaryAutosaveStatus" data-state="idle"></span>
            <span class="diary-form__msg" id="diaryMsg"></span>
            <button type="submit" class="primary-btn">${active ? "Save changes" : "Save entry"}</button>
            ${active ? `<button type="button" class="tiny-btn is-danger" id="diaryDeleteBtn">Delete</button>` : ""}
          </div>
        </form>
      </div>

      <div class="diary-sidebar">
        <div class="diary-sidebar__header">
          <span class="budget-sidebar__heading">Previous Entries</span>
          <span class="inline-stat">${entries.length}</span>
        </div>
        <ul class="diary-entry-list" id="diaryEntryList"></ul>
      </div>
    </div>
  `;

  const diaryForm = document.getElementById("diaryForm");
  const diaryMsg = document.getElementById("diaryMsg");
  const autosaveStatus = document.getElementById("diaryAutosaveStatus");
  const dateInput = document.getElementById("diaryDate");
  const dayInput = document.getElementById("diaryDay");
  const titleInput = document.getElementById("diaryTitle");
  const locationInput = document.getElementById("diaryLocation");
  const textInput = document.getElementById("diaryText");

  function setDiaryAutosaveStatus(state, text) {
    if (!autosaveStatus) {
      return;
    }

    autosaveStatus.dataset.state = state;
    autosaveStatus.textContent = text;
  }

  function buildDiarySavedKey(entry) {
    return JSON.stringify([
      entry.id,
      entry.date,
      entry.dayOfWeek || "",
      entry.title || "",
      entry.location || "",
      entry.text || ""
    ]);
  }

  function buildDiaryDraft() {
    const date = (diaryForm.date.value || todayIso).trim();
    const dayOfWeek = (diaryForm.dayOfWeek.value || dayOfWeekFromDate(date)).trim();
    const title = (diaryForm.title.value || "").trim();
    const location = (diaryForm.location.value || "").trim();
    const text = (diaryForm.text.value || "").trim();
    const activeId = active ? active.id : "new";

    return {
      date,
      dayOfWeek,
      title,
      location,
      text,
      activeId,
      key: JSON.stringify([activeId, date, dayOfWeek, title, location, text])
    };
  }

  function saveDiaryDraft(snapshot) {
    const hasAnyContent = Boolean(snapshot.title || snapshot.text || snapshot.location);
    const freshEntries = loadDiaryEntries();

    if (active) {
      const targetIndex = freshEntries.findIndex(entry => entry.id === active.id);

      if (targetIndex === -1) {
        if (!hasAnyContent) {
          return { saved: false };
        }

        const recoveredEntry = createDiaryEntry({
          date: snapshot.date,
          dayOfWeek: snapshot.dayOfWeek,
          title: snapshot.title,
          location: snapshot.location,
          text: snapshot.text
        });

        saveDiaryEntries([recoveredEntry, ...freshEntries]);
        entries = [recoveredEntry, ...freshEntries];
        active = recoveredEntry;
        uiState.diaryActiveId = recoveredEntry.id;

        return {
          saved: true,
          savedKey: buildDiarySavedKey(recoveredEntry)
        };
      }

      const updatedEntry = {
        ...freshEntries[targetIndex],
        date: snapshot.date,
        dayOfWeek: snapshot.dayOfWeek,
        title: snapshot.title,
        location: snapshot.location,
        text: snapshot.text
      };

      freshEntries[targetIndex] = updatedEntry;
      saveDiaryEntries(freshEntries);
      entries = freshEntries;
      active = updatedEntry;
      uiState.diaryActiveId = updatedEntry.id;

      return {
        saved: true,
        savedKey: buildDiarySavedKey(updatedEntry)
      };
    }

    if (!hasAnyContent) {
      return { saved: false };
    }

    const newEntry = createDiaryEntry({
      date: snapshot.date,
      dayOfWeek: snapshot.dayOfWeek,
      title: snapshot.title,
      location: snapshot.location,
      text: snapshot.text
    });

    saveDiaryEntries([newEntry, ...freshEntries]);
    entries = [newEntry, ...freshEntries];
    active = newEntry;
    uiState.diaryActiveId = newEntry.id;

    return {
      saved: true,
      savedKey: buildDiarySavedKey(newEntry)
    };
  }

  const diaryAutosave = createEditorAutosaveController({
    delayMs: 700,
    getDraft: buildDiaryDraft,
    saveDraft: saveDiaryDraft,
    updateStatus: setDiaryAutosaveStatus
  });

  registerActiveEditorAutosave({
    flush: () => diaryAutosave.flush(),
    dispose: () => diaryAutosave.dispose()
  });

  const hasInitialContent = Boolean(
    (titleInput.value || "").trim() ||
    (locationInput.value || "").trim() ||
    (textInput.value || "").trim()
  );

  if (active || hasInitialContent) {
    setDiaryAutosaveStatus("saved", "Saved");
  } else {
    setDiaryAutosaveStatus("idle", "");
  }

  // ── Populate sidebar list ─────────────────────────────────────────────────
  const entryList = document.getElementById("diaryEntryList");
  if (entries.length === 0) {
    const empty = document.createElement("li");
    empty.className = "diary-entry-list__empty";
    empty.textContent = "No entries yet. Write your first one.";
    entryList.appendChild(empty);
  } else {
    const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));
    sorted.forEach(entry => {
      const li = document.createElement("li");
      li.className = "diary-entry-item" + (active && entry.id === active.id ? " is-active" : "");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "diary-entry-item__btn";

      const dateRow = document.createElement("span");
      dateRow.className = "diary-entry-item__date";
      dateRow.textContent = [entry.dayOfWeek, entry.date].filter(Boolean).join(", ");

      btn.appendChild(dateRow);

      const title = typeof entry.title === "string" ? entry.title.trim() : "";

      if (title) {
        const titleRow = document.createElement("span");
        titleRow.className = "diary-entry-item__title";
        titleRow.textContent = title;
        btn.appendChild(titleRow);
      } else {
        const preview = document.createElement("span");
        preview.className = "diary-entry-item__preview";
        preview.textContent = entry.location
          ? `📍 ${entry.location}  ${previewText(entry.text, 60)}`
          : previewText(entry.text, 72);
        btn.appendChild(preview);
      }

      btn.addEventListener("click", () => {
        diaryAutosave.flush();
        uiState.diaryActiveId = entry.id;
        renderApp();
      });

      li.appendChild(btn);
      entryList.appendChild(li);
    });
  }

  // ── Date → day-of-week auto-fill ──────────────────────────────────────────
  dateInput.addEventListener("change", () => {
    dayInput.value = dayOfWeekFromDate(dateInput.value);
    diaryMsg.textContent = "";
    diaryAutosave.queueSave();
  });

  function queueDiaryAutosave() {
    diaryMsg.textContent = "";
    diaryAutosave.queueSave();
  }

  titleInput.addEventListener("input", queueDiaryAutosave);
  textInput.addEventListener("input", queueDiaryAutosave);
  locationInput.addEventListener("input", queueDiaryAutosave);

  // ── New entry button ──────────────────────────────────────────────────────
  const newBtn = document.getElementById("diaryNewBtn");
  if (newBtn) {
    newBtn.addEventListener("click", () => {
      diaryAutosave.flush();
      uiState.diaryActiveId = null;
      renderApp();
    });
  }

  // ── Delete button ─────────────────────────────────────────────────────────
  const deleteBtn = document.getElementById("diaryDeleteBtn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (!active) return;
      if (!confirm("Delete this diary entry? This cannot be undone.")) return;
      const updated = loadDiaryEntries().filter(entry => entry.id !== active.id);
      saveDiaryEntries(updated);
      uiState.diaryActiveId = null;
      renderApp();
    });
  }

  // ── Form submit ───────────────────────────────────────────────────────────
  diaryForm.addEventListener("submit", evt => {
    evt.preventDefault();
    const snapshot = buildDiaryDraft();

    if (!snapshot.date) {
      diaryMsg.textContent = "Please pick a date.";
      return;
    }

    if (!snapshot.text) {
      diaryMsg.textContent = "Please write something before saving.";
      return;
    }

    diaryMsg.textContent = "";

    const result = saveDiaryDraft(snapshot);

    if (!result.saved) {
      diaryMsg.textContent = "Please write something before saving.";
      return;
    }

    diaryAutosave.syncSavedKey(result.savedKey);
    renderApp();
  });

  upgradeCustomDatePickers(viewRoot);
}

// ── Bits ──────────────────────────────────────────────────────────────────────

const BITS_STORAGE_KEY = "dockBitsEntries";

const LESSONS_LEARNED_STORAGE_KEY = "dockLessonsLearnedEntries";

function loadBitsEntries() {
  try {
    const raw = localStorage.getItem(BITS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(e => {
      if (!e || typeof e.id !== "string") return null;
      return {
        id: e.id,
        title: typeof e.title === "string" ? e.title : "",
        content: typeof e.content === "string" ? e.content : ""
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

function saveBitsEntries(entries) {
  localStorage.setItem(BITS_STORAGE_KEY, JSON.stringify(entries));
}

function createBitsEntry({ title, content }) {
  return {
    id: createId(),
    title: title.trim(),
    content: content.trim()
  };
}

function loadLessonsLearnedEntries() {
  try {
    const raw = localStorage.getItem(LESSONS_LEARNED_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(entry => {
      if (!entry || typeof entry.id !== "string") return null;
      return {
        id: entry.id,
        title: typeof entry.title === "string" ? entry.title : "",
        content: typeof entry.content === "string" ? entry.content : "",
        createdAt: typeof entry.createdAt === "string" ? entry.createdAt : new Date().toISOString()
      };
    }).filter(Boolean);
  } catch {
    return [];
  }
}

function saveLessonsLearnedEntries(entries) {
  localStorage.setItem(LESSONS_LEARNED_STORAGE_KEY, JSON.stringify(entries));
}

function createLessonsLearnedEntry({ title, content }) {
  return {
    id: createId(),
    title: title.trim(),
    content: content.trim(),
    createdAt: new Date().toISOString()
  };
}

function renderLessonsLearned() {
  const entries = loadLessonsLearnedEntries();

  if (!("lessonsActiveId" in uiState)) uiState.lessonsActiveId = null;
  if (!("lessonsIsCreating" in uiState)) uiState.lessonsIsCreating = false;

  if (entries.length === 0) {
    uiState.lessonsActiveId = null;
    uiState.lessonsIsCreating = true;
  } else if (!uiState.lessonsIsCreating && !entries.some(entry => entry.id === uiState.lessonsActiveId)) {
    uiState.lessonsActiveId = entries[0].id;
  }

  const activeEntry = entries.find(entry => entry.id === uiState.lessonsActiveId) || null;
  const isCreating = uiState.lessonsIsCreating || !activeEntry;

  function previewText(text, maxLength = 88) {
    const cleaned = (text || "").replace(/\s+/g, " ").trim();

    if (!cleaned) {
      return "No reflection yet.";
    }

    return cleaned.length <= maxLength ? cleaned : `${cleaned.slice(0, maxLength)}...`;
  }

  viewRoot.innerHTML = `
    <div class="bits-layout">
      <aside class="bits-sidebar">
        <div class="bits-sidebar__header">
          <span class="budget-sidebar__heading">Saved Lessons</span>
          <button type="button" class="tiny-btn" id="lessonsNewBtn">+ New</button>
        </div>
        <ol class="bits-list bits-list--sidebar" id="lessonsList"></ol>
      </aside>

      <section class="bits-main">
        <div class="budget-main__top">
          <div>
            <h2 class="panel-title">${isCreating ? "New Lesson" : "Edit Lesson"}</h2>
            <p class="panel-subtitle">${isCreating
              ? "Capture a new reflection, insight, or lesson learned."
              : "Edit the selected lesson from the left list."}</p>
          </div>
          ${!isCreating ? '<button type="button" class="ghost-btn" id="lessonsNewFromEditorBtn">+ New Lesson</button>' : ""}
        </div>

        <form class="bits-form bits-form--editor" id="lessonsEditorForm" novalidate>
          <div class="field">
            <label for="lessonsEditorTitleInput">Title</label>
            <input id="lessonsEditorTitleInput" name="title" type="text" maxlength="140" placeholder="Give this lesson a title..." autocomplete="off" />
          </div>
          <div class="field bits-form__note-field">
            <label for="lessonsEditorContentInput">Lesson Note</label>
            <textarea id="lessonsEditorContentInput" name="content" class="bits-textarea bits-textarea--editor" rows="14" maxlength="20000" placeholder="Write your reflection, insight, or lesson...\n\nWhat happened?\nWhat did you learn?\nWhat will you do differently next time?"></textarea>
          </div>
          <div class="bits-form__actions bits-form__actions--editor">
            <span class="bits-form__msg" id="lessonsEditorMsg"></span>
            <button type="button" class="tiny-btn" id="lessonsEditorCancelBtn">Cancel</button>
            <button type="submit" class="primary-btn" id="lessonsEditorSaveBtn">${isCreating ? "Save Lesson" : "Save Changes"}</button>
            ${!isCreating ? '<button type="button" class="tiny-btn is-danger" id="lessonsEditorDeleteBtn">Delete</button>' : ""}
          </div>
        </form>
      </section>
    </div>
  `;

  const lessonsList = document.getElementById("lessonsList");
  const titleInput = document.getElementById("lessonsEditorTitleInput");
  const contentInput = document.getElementById("lessonsEditorContentInput");
  const editorMsg = document.getElementById("lessonsEditorMsg");

  titleInput.value = isCreating ? "" : (activeEntry ? activeEntry.title : "");
  contentInput.value = isCreating ? "" : (activeEntry ? activeEntry.content : "");

  if (entries.length === 0) {
    const empty = document.createElement("li");
    empty.className = "bits-empty bits-empty--sidebar";
    empty.textContent = "No lessons yet. Save your first lesson from the editor.";
    lessonsList.appendChild(empty);
  } else {
    entries.forEach(entry => {
      const li = document.createElement("li");
      li.className = `bits-card${!isCreating && entry.id === uiState.lessonsActiveId ? " is-active" : ""}`;
      li.draggable = true;
      li.dataset.id = entry.id;

      const handle = document.createElement("div");
      handle.className = "bits-card__handle";
      handle.setAttribute("aria-hidden", "true");
      handle.setAttribute("title", "Drag to reorder");
      handle.textContent = "\u2807";

      const selectButton = document.createElement("button");
      selectButton.type = "button";
      selectButton.className = "bits-card__select-btn";

      const titleEl = document.createElement("span");
      titleEl.className = "bits-card__title";
      titleEl.textContent = entry.title || "Untitled lesson";

      const previewEl = document.createElement("span");
      previewEl.className = "bits-card__preview";
      previewEl.textContent = previewText(entry.content, 74);

      selectButton.append(titleEl, previewEl);
      selectButton.addEventListener("click", () => {
        uiState.lessonsActiveId = entry.id;
        uiState.lessonsIsCreating = false;
        renderApp();
      });

      li.append(handle, selectButton);
      lessonsList.appendChild(li);
    });
  }

  function startCreateMode() {
    uiState.lessonsIsCreating = true;
    renderApp();
  }

  document.getElementById("lessonsNewBtn")?.addEventListener("click", startCreateMode);
  document.getElementById("lessonsNewFromEditorBtn")?.addEventListener("click", startCreateMode);

  document.getElementById("lessonsEditorCancelBtn")?.addEventListener("click", () => {
    if (uiState.lessonsIsCreating) {
      if (entries.length === 0) {
        titleInput.value = "";
        contentInput.value = "";
        editorMsg.textContent = "";
        return;
      }

      uiState.lessonsIsCreating = false;
      if (!entries.some(entry => entry.id === uiState.lessonsActiveId)) {
        uiState.lessonsActiveId = entries[0].id;
      }
      renderApp();
      return;
    }

    renderApp();
  });

  document.getElementById("lessonsEditorDeleteBtn")?.addEventListener("click", () => {
    if (!activeEntry) return;
    if (!confirm("Delete this lesson? This cannot be undone.")) return;

    const updated = entries.filter(entry => entry.id !== activeEntry.id);
    saveLessonsLearnedEntries(updated);

    if (updated.length === 0) {
      uiState.lessonsActiveId = null;
      uiState.lessonsIsCreating = true;
    } else {
      uiState.lessonsActiveId = updated[0].id;
      uiState.lessonsIsCreating = false;
    }

    renderApp();
  });

  document.getElementById("lessonsEditorForm").addEventListener("submit", event => {
    event.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!content) {
      editorMsg.textContent = "Please write something.";
      return;
    }

    editorMsg.textContent = "";

    if (isCreating || !activeEntry) {
      const newEntry = createLessonsLearnedEntry({ title, content });
      saveLessonsLearnedEntries([newEntry, ...entries]);
      uiState.lessonsActiveId = newEntry.id;
      uiState.lessonsIsCreating = false;
    } else {
      const updated = entries.map(entry =>
        entry.id === activeEntry.id
          ? { ...entry, title, content }
          : entry
      );
      saveLessonsLearnedEntries(updated);
      uiState.lessonsActiveId = activeEntry.id;
      uiState.lessonsIsCreating = false;
    }

    renderApp();
  });

  {
    let dragSrcId = null;

    function getLessonsDragLi(el) {
      while (el && (!el.classList || !el.classList.contains("bits-card"))) el = el.parentElement;
      return el;
    }

    lessonsList.addEventListener("dragstart", event => {
      const li = getLessonsDragLi(event.target);
      if (!li) return;
      dragSrcId = li.dataset.id;
      li.classList.add("bits-card--dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", dragSrcId);
    });

    lessonsList.addEventListener("dragend", event => {
      const li = getLessonsDragLi(event.target);
      if (li) li.classList.remove("bits-card--dragging");
      lessonsList.querySelectorAll(".bits-card--drag-over").forEach(el =>
        el.classList.remove("bits-card--drag-over")
      );
      dragSrcId = null;
    });

    lessonsList.addEventListener("dragover", event => {
      const li = getLessonsDragLi(event.target);
      if (!li || li.dataset.id === dragSrcId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      lessonsList.querySelectorAll(".bits-card--drag-over").forEach(el =>
        el.classList.remove("bits-card--drag-over")
      );
      li.classList.add("bits-card--drag-over");
    });

    lessonsList.addEventListener("dragleave", event => {
      const li = getLessonsDragLi(event.target);
      if (li) li.classList.remove("bits-card--drag-over");
    });

    lessonsList.addEventListener("drop", event => {
      event.preventDefault();
      const targetLi = getLessonsDragLi(event.target);
      if (!targetLi || !dragSrcId) return;

      const targetId = targetLi.dataset.id;
      if (targetId === dragSrcId) return;

      const freshEntries = loadLessonsLearnedEntries();
      const fromIndex = freshEntries.findIndex(entry => entry.id === dragSrcId);
      const toIndex = freshEntries.findIndex(entry => entry.id === targetId);
      if (fromIndex === -1 || toIndex === -1) return;

      freshEntries.splice(toIndex, 0, freshEntries.splice(fromIndex, 1)[0]);
      saveLessonsLearnedEntries(freshEntries);
      renderApp();
    });
  }
}

function renderBits() {
  let entries = loadBitsEntries();

  if (!("bitsActiveId" in uiState)) uiState.bitsActiveId = null;
  if (!("bitsIsCreating" in uiState)) uiState.bitsIsCreating = false;

  // Backward compatibility with previous Bits editor session flags.
  if (uiState.bitsEditingId && !uiState.bitsActiveId) {
    uiState.bitsActiveId = uiState.bitsEditingId;
  }
  if (uiState.bitsAdding) {
    uiState.bitsIsCreating = true;
  }
  uiState.bitsEditingId = null;
  uiState.bitsAdding = false;

  if (entries.length === 0) {
    uiState.bitsActiveId = null;
    uiState.bitsIsCreating = true;
  } else if (!uiState.bitsIsCreating && !entries.some(entry => entry.id === uiState.bitsActiveId)) {
    uiState.bitsActiveId = entries[0].id;
  }

  let activeEntry = entries.find(entry => entry.id === uiState.bitsActiveId) || null;
  const isCreating = uiState.bitsIsCreating || !activeEntry;

  function previewText(text, maxLength = 88) {
    const cleaned = (text || "").replace(/\s+/g, " ").trim();

    if (!cleaned) {
      return "No note yet.";
    }

    return cleaned.length <= maxLength ? cleaned : `${cleaned.slice(0, maxLength)}...`;
  }

  viewRoot.innerHTML = `
    <div class="bits-layout">
      <aside class="bits-sidebar">
        <div class="bits-sidebar__header">
          <span class="budget-sidebar__heading">Saved Bits</span>
          <button type="button" class="tiny-btn" id="bitsNewBtn">+ New</button>
        </div>
        <ol class="bits-list bits-list--sidebar" id="bitsList"></ol>
      </aside>

      <section class="bits-main">
        <div class="budget-main__top">
          <div>
            <h2 class="panel-title">${isCreating ? "New Bit" : "Edit Bit"}</h2>
            <p class="panel-subtitle">${isCreating
              ? "Capture a new idea, fragment, or quick note."
              : "Edit the selected Bit from the left list."}</p>
          </div>
          ${!isCreating ? '<button type="button" class="ghost-btn" id="bitsNewFromEditorBtn">+ New Bit</button>' : ""}
        </div>

        <form class="bits-form bits-form--editor" id="bitsEditorForm" novalidate>
          <div class="field">
            <label for="bitsEditorTitleInput">Title</label>
            <input id="bitsEditorTitleInput" name="title" type="text" maxlength="120" placeholder="Give it a short title..." autocomplete="off" />
          </div>
          <div class="field bits-form__note-field">
            <label for="bitsEditorContentInput">Note</label>
            <textarea id="bitsEditorContentInput" name="content" class="bits-textarea bits-textarea--editor" rows="14" maxlength="10000" placeholder="Write whatever..."></textarea>
          </div>
          <div class="bits-form__actions bits-form__actions--editor">
            <span class="editor-autosave-status" id="bitsAutosaveStatus" data-state="idle"></span>
            <span class="bits-form__msg" id="bitsEditorMsg"></span>
            <button type="button" class="tiny-btn" id="bitsEditorCancelBtn">Cancel</button>
            <button type="submit" class="primary-btn" id="bitsEditorSaveBtn">${isCreating ? "Save Bit" : "Save Changes"}</button>
            ${!isCreating ? '<button type="button" class="tiny-btn is-danger" id="bitsEditorDeleteBtn">Delete</button>' : ""}
          </div>
        </form>
      </section>
    </div>
  `;

  const bitsList = document.getElementById("bitsList");
  const titleInput = document.getElementById("bitsEditorTitleInput");
  const contentInput = document.getElementById("bitsEditorContentInput");
  const editorMsg = document.getElementById("bitsEditorMsg");
  const autosaveStatus = document.getElementById("bitsAutosaveStatus");

  titleInput.value = isCreating ? "" : (activeEntry ? activeEntry.title : "");
  contentInput.value = isCreating ? "" : (activeEntry ? activeEntry.content : "");

  function setBitsAutosaveStatus(state, text) {
    if (!autosaveStatus) {
      return;
    }

    autosaveStatus.dataset.state = state;
    autosaveStatus.textContent = text;
  }

  function buildBitsSavedKey(entry) {
    return JSON.stringify([entry.id, entry.title || "", entry.content || ""]);
  }

  function buildBitsDraft() {
    const title = (titleInput.value || "").trim();
    const content = (contentInput.value || "").trim();
    const activeId = activeEntry ? activeEntry.id : "new";

    return {
      title,
      content,
      activeId,
      key: JSON.stringify([activeId, title, content])
    };
  }

  function saveBitsDraft(snapshot) {
    const hasAnyContent = Boolean(snapshot.title || snapshot.content);
    const freshEntries = loadBitsEntries();

    if (activeEntry) {
      const targetIndex = freshEntries.findIndex(entry => entry.id === activeEntry.id);

      if (targetIndex === -1) {
        if (!hasAnyContent) {
          return { saved: false };
        }

        const recoveredEntry = createBitsEntry({
          title: snapshot.title,
          content: snapshot.content
        });

        saveBitsEntries([recoveredEntry, ...freshEntries]);
        entries = [recoveredEntry, ...freshEntries];
        activeEntry = recoveredEntry;
        uiState.bitsActiveId = recoveredEntry.id;
        uiState.bitsIsCreating = false;

        return {
          saved: true,
          savedKey: buildBitsSavedKey(recoveredEntry)
        };
      }

      const updatedEntry = {
        ...freshEntries[targetIndex],
        title: snapshot.title,
        content: snapshot.content
      };

      freshEntries[targetIndex] = updatedEntry;
      saveBitsEntries(freshEntries);
      entries = freshEntries;
      activeEntry = updatedEntry;
      uiState.bitsActiveId = updatedEntry.id;
      uiState.bitsIsCreating = false;

      return {
        saved: true,
        savedKey: buildBitsSavedKey(updatedEntry)
      };
    }

    if (!hasAnyContent) {
      return { saved: false };
    }

    const newEntry = createBitsEntry({
      title: snapshot.title,
      content: snapshot.content
    });

    saveBitsEntries([newEntry, ...freshEntries]);
    entries = [newEntry, ...freshEntries];
    activeEntry = newEntry;
    uiState.bitsActiveId = newEntry.id;
    uiState.bitsIsCreating = false;

    return {
      saved: true,
      savedKey: buildBitsSavedKey(newEntry)
    };
  }

  const bitsAutosave = createEditorAutosaveController({
    delayMs: 700,
    getDraft: buildBitsDraft,
    saveDraft: saveBitsDraft,
    updateStatus: setBitsAutosaveStatus
  });

  registerActiveEditorAutosave({
    flush: () => bitsAutosave.flush(),
    dispose: () => bitsAutosave.dispose()
  });

  const hasInitialContent = Boolean((titleInput.value || "").trim() || (contentInput.value || "").trim());

  if (activeEntry || hasInitialContent) {
    setBitsAutosaveStatus("saved", "Saved");
  } else {
    setBitsAutosaveStatus("idle", "");
  }

  function queueBitsAutosave() {
    editorMsg.textContent = "";
    bitsAutosave.queueSave();
  }

  titleInput.addEventListener("input", queueBitsAutosave);
  contentInput.addEventListener("input", queueBitsAutosave);

  if (entries.length === 0) {
    const empty = document.createElement("li");
    empty.className = "bits-empty bits-empty--sidebar";
    empty.textContent = "No bits yet. Save your first bit from the editor.";
    bitsList.appendChild(empty);
  } else {
    entries.forEach(entry => {
      const li = document.createElement("li");
      li.className = `bits-card${!isCreating && entry.id === uiState.bitsActiveId ? " is-active" : ""}`;
      li.draggable = true;
      li.dataset.id = entry.id;

      const handle = document.createElement("div");
      handle.className = "bits-card__handle";
      handle.setAttribute("aria-hidden", "true");
      handle.setAttribute("title", "Drag to reorder");
      handle.textContent = "\u2807";

      const selectButton = document.createElement("button");
      selectButton.type = "button";
      selectButton.className = "bits-card__select-btn";

      const titleEl = document.createElement("span");
      titleEl.className = "bits-card__title";
      titleEl.textContent = entry.title || "Untitled";

      const previewEl = document.createElement("span");
      previewEl.className = "bits-card__preview";
      previewEl.textContent = previewText(entry.content, 74);

      selectButton.append(titleEl, previewEl);
      selectButton.addEventListener("click", () => {
        bitsAutosave.flush();
        uiState.bitsActiveId = entry.id;
        uiState.bitsIsCreating = false;
        renderApp();
      });

      li.append(handle, selectButton);
      bitsList.appendChild(li);
    });
  }

  function startCreateMode() {
    bitsAutosave.flush();
    uiState.bitsIsCreating = true;
    renderApp();
  }

  document.getElementById("bitsNewBtn")?.addEventListener("click", startCreateMode);
  document.getElementById("bitsNewFromEditorBtn")?.addEventListener("click", startCreateMode);

  document.getElementById("bitsEditorCancelBtn")?.addEventListener("click", () => {
    if (uiState.bitsIsCreating) {
      if (entries.length === 0) {
        titleInput.value = "";
        contentInput.value = "";
        editorMsg.textContent = "";
        bitsAutosave.syncSavedKey(null, "idle", "");
        return;
      }

      uiState.bitsIsCreating = false;
      if (!entries.some(entry => entry.id === uiState.bitsActiveId)) {
        uiState.bitsActiveId = entries[0].id;
      }
      renderApp();
      return;
    }

    renderApp();
  });

  document.getElementById("bitsEditorDeleteBtn")?.addEventListener("click", () => {
    if (!activeEntry) return;
    if (!confirm("Delete this bit? This cannot be undone.")) return;

    const updated = loadBitsEntries().filter(entry => entry.id !== activeEntry.id);
    saveBitsEntries(updated);

    if (updated.length === 0) {
      uiState.bitsActiveId = null;
      uiState.bitsIsCreating = true;
    } else {
      uiState.bitsActiveId = updated[0].id;
      uiState.bitsIsCreating = false;
    }

    renderApp();
  });

  document.getElementById("bitsEditorForm").addEventListener("submit", event => {
    event.preventDefault();

    const snapshot = buildBitsDraft();

    if (!snapshot.content) {
      editorMsg.textContent = "Please write something.";
      return;
    }

    editorMsg.textContent = "";

    const result = saveBitsDraft(snapshot);

    if (!result.saved) {
      editorMsg.textContent = "Please write something.";
      return;
    }

    bitsAutosave.syncSavedKey(result.savedKey);
    renderApp();
  });

  // Drag-and-drop reordering.
  {
    let dragSrcId = null;

    function getBitsDragLi(el) {
      while (el && (!el.classList || !el.classList.contains("bits-card"))) el = el.parentElement;
      return el;
    }

    bitsList.addEventListener("dragstart", event => {
      const li = getBitsDragLi(event.target);
      if (!li) return;
      dragSrcId = li.dataset.id;
      li.classList.add("bits-card--dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", dragSrcId);
    });

    bitsList.addEventListener("dragend", event => {
      const li = getBitsDragLi(event.target);
      if (li) li.classList.remove("bits-card--dragging");
      bitsList.querySelectorAll(".bits-card--drag-over").forEach(el =>
        el.classList.remove("bits-card--drag-over")
      );
      dragSrcId = null;
    });

    bitsList.addEventListener("dragover", event => {
      const li = getBitsDragLi(event.target);
      if (!li || li.dataset.id === dragSrcId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      bitsList.querySelectorAll(".bits-card--drag-over").forEach(el =>
        el.classList.remove("bits-card--drag-over")
      );
      li.classList.add("bits-card--drag-over");
    });

    bitsList.addEventListener("dragleave", event => {
      const li = getBitsDragLi(event.target);
      if (li) li.classList.remove("bits-card--drag-over");
    });

    bitsList.addEventListener("drop", event => {
      event.preventDefault();

      bitsAutosave.flush();

      const targetLi = getBitsDragLi(event.target);
      if (!targetLi || !dragSrcId) return;

      const targetId = targetLi.dataset.id;
      if (targetId === dragSrcId) return;

      const freshEntries = loadBitsEntries();
      const fromIndex = freshEntries.findIndex(entry => entry.id === dragSrcId);
      const toIndex = freshEntries.findIndex(entry => entry.id === targetId);
      if (fromIndex === -1 || toIndex === -1) return;

      freshEntries.splice(toIndex, 0, freshEntries.splice(fromIndex, 1)[0]);
      saveBitsEntries(freshEntries);
      renderApp();
    });
  }
}

function renderBudgetCategoryInfo(category, container) {
  container.className = "budget-cat-info";

  if (category.note) {
    const noteEl = document.createElement("p");
    noteEl.className = "budget-cat-info__note";
    noteEl.textContent = category.note;
    container.appendChild(noteEl);
  }

  if (Array.isArray(category.todos) && category.todos.length > 0) {
    const label = document.createElement("span");
    label.className = "budget-cat-details__label";
    label.textContent = "Checklist";
    container.appendChild(label);

    const todoList = document.createElement("ul");
    todoList.className = "budget-cat-info__todos subtask-list";

    category.todos.forEach(todo => {
      const li = document.createElement("li");
      li.className = "subtask-item";

      const titleSpan = document.createElement("span");
      titleSpan.className = "subtask-title" + (todo.done ? " is-done" : "");
      titleSpan.textContent = todo.title;

      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = todo.done;
      check.addEventListener("change", () => {
        todo.done = check.checked;
        titleSpan.className = "subtask-title" + (todo.done ? " is-done" : "");
        saveState();
      });

      li.appendChild(check);
      li.appendChild(titleSpan);
      todoList.appendChild(li);
    });

    container.appendChild(todoList);
  }
}

function renderBudgetPlanner() {
  const selectedCategory = uiState.selectedBudgetCategory;
  const visibleEntries = getBudgetEntries(selectedCategory);
  const selectedCategoryData = selectedCategory === "all"
    ? null
    : getBudgetCategoryById(selectedCategory);
  const editorTarget = uiState.budgetEditorId ? findBudgetItem(uiState.budgetEditorId) : null;
  const totalInView = getSplitCurrencyTotalsFromBudgetItems(visibleEntries.map(entry => entry.item));

  viewRoot.innerHTML = `
    <section class="budget-layout">
      <aside class="budget-sidebar">
        <div class="budget-sidebar__header">
          <span class="budget-sidebar__heading">Sections</span>
        </div>

        <form class="budget-category-form" id="budgetCategoryForm">
          <div class="budget-category-form__row">
            <input
              id="budgetCategoryNameInput"
              type="text"
              maxlength="60"
              placeholder="New section name\u2026"
              required
            />
            <button type="submit" class="budget-cat-create-btn">Add</button>
          </div>
          <p class="budget-category-form__message" id="budgetCategoryFormMessage"></p>
        </form>

        <ul class="sidebar-list" id="budgetCategoryList"></ul>
      </aside>

      <div class="budget-main">
        <div class="budget-main__top">
          <div>
            <h2 class="panel-title">${selectedCategory === "all" ? "All Spending" : selectedCategoryData.title}</h2>
            <p class="panel-subtitle">
              ${selectedCategory === "all"
                ? "Review every spending item in one list."
                : `Manage the items inside ${selectedCategoryData.title}.`}
            </p>
          </div>

          <div class="budget-total">
            <span>Total in view</span>
            <strong>${formatBudgetSplitTotalDisplay(totalInView)}</strong>
          </div>
        </div>

        <div id="budgetCatInfoBlock"></div>

        <form class="budget-form budget-form--spending-entry" id="budgetForm">
          <div class="field">
            <label for="budgetTitleInput">Title</label>
            <input id="budgetTitleInput" type="text" maxlength="120" placeholder="For example: rent, groceries, transportation" required />
          </div>

          <div class="field">
            <label for="budgetAmountInput">Amount</label>
            <input id="budgetAmountInput" type="number" step="0.01" min="0" placeholder="0" required />
          </div>

          <div class="field">
            <label for="budgetCurrencySelect">Currency</label>
            <select id="budgetCurrencySelect">
              <option value="USD">$</option>
              <option value="CNY">R</option>
            </select>
          </div>

          <div class="field">
            <label for="budgetCategorySelect">Category</label>
            <select id="budgetCategorySelect"></select>
          </div>

          <div class="budget-form__actions">
            <button type="submit" class="primary-btn">${editorTarget ? "Save" : "Add"}</button>
            ${editorTarget ? '<button type="button" class="secondary-btn" id="cancelBudgetEditBtn">Cancel</button>' : ""}
          </div>
        </form>

        <ul class="budget-list" id="budgetList"></ul>
      </div>
    </section>
  `;

  renderBudgetSidebar();
  populateBudgetForm(editorTarget);
  renderBudgetList(visibleEntries);

  // ── Category details info block (main area) ─────────────────────────────
  if (selectedCategory !== "all" && selectedCategoryData) {
    const infoBlock = document.getElementById("budgetCatInfoBlock");
    const hasNote = Boolean(selectedCategoryData.note);
    const hasTodos = Array.isArray(selectedCategoryData.todos) && selectedCategoryData.todos.length > 0;
    if ((hasNote || hasTodos) && infoBlock) {
      renderBudgetCategoryInfo(selectedCategoryData, infoBlock);
    }
  }

  const budgetForm = document.getElementById("budgetForm");
  const categorySelect = document.getElementById("budgetCategorySelect");
  const budgetCategoryForm = document.getElementById("budgetCategoryForm");
  const budgetCategoryNameInput = document.getElementById("budgetCategoryNameInput");
  const budgetCategoryFormMessage = document.getElementById("budgetCategoryFormMessage");

  budgetCategoryForm.addEventListener("submit", event => {
    event.preventDefault();

    const categoryTitle = budgetCategoryNameInput.value.trim();

    if (!categoryTitle) {
      budgetCategoryFormMessage.textContent = "Enter a category name to create it.";
      budgetCategoryFormMessage.dataset.tone = "error";
      return;
    }

    if (hasBudgetCategoryTitle(categoryTitle)) {
      budgetCategoryFormMessage.textContent = "That budget category already exists.";
      budgetCategoryFormMessage.dataset.tone = "error";
      return;
    }

    const newCategory = createBudgetCategory(categoryTitle);

    appState.budgetCategories.push(newCategory);
    uiState.selectedBudgetCategory = newCategory.id;
    uiState.budgetEditorId = null;
    budgetCategoryNameInput.value = "";
    budgetCategoryFormMessage.textContent = `${newCategory.title} created.`;
    budgetCategoryFormMessage.dataset.tone = "success";
    saveState();
    renderApp();
  });

  budgetCategoryNameInput.addEventListener("input", () => {
    budgetCategoryFormMessage.textContent = "Sections are saved with your backup. Deleting a section removes only that section and its items.";
    budgetCategoryFormMessage.dataset.tone = "info";
  });

  budgetForm.addEventListener("submit", event => {
    event.preventDefault();

    const titleInput = document.getElementById("budgetTitleInput");
    const amountInput = document.getElementById("budgetAmountInput");
    const currencySelect = document.getElementById("budgetCurrencySelect");
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const currency = normalizeBudgetCurrency(currencySelect?.value);
    const categoryId = categorySelect.value;

    if (!title || Number.isNaN(amount) || amount < 0) {
      return;
    }

    const targetCategory = getBudgetCategoryById(categoryId);

    if (!targetCategory) {
      return;
    }

    if (editorTarget) {
      editorTarget.item.title = title;
      editorTarget.item.amount = amount;
      editorTarget.item.currency = currency;

      if (editorTarget.category.id !== targetCategory.id) {
        editorTarget.category.items = editorTarget.category.items.filter(item => item.id !== editorTarget.item.id);
        targetCategory.items.push(editorTarget.item);
      }

      uiState.budgetEditorId = null;
    } else {
      const newItem = createBudgetItem(title, amount, false, currency);
      targetCategory.items.push(newItem);

      if (uiState.selectedBudgetCategory === "all") {
        const orderedItems = getBudgetEntries("all")
          .map(entry => entry.item)
          .filter(existingItem => existingItem.id !== newItem.id);

        orderedItems.push(newItem);
        orderedItems.forEach((existingItem, index) => {
          existingItem.sortOrder = index;
        });
      }
    }

    saveState();
    renderApp();
  });

  if (editorTarget) {
    document.getElementById("cancelBudgetEditBtn").addEventListener("click", () => {
      uiState.budgetEditorId = null;
      renderApp();
    });
  }
}

function renderExpenseTracker() {
  const EXPENSE_PERIODS = [
    { id: "week", label: "This Week" },
    { id: "month", label: "This Month" },
    { id: "year", label: "This Year" }
  ];

  const EXPENSE_CATEGORY_DETAILS = {
    Groceries: {
      description: "Food and grocery shopping, including daily essentials.",
      examples: EXPENSE_TRACKER_STARTER_MERCHANTS.Groceries
    },
    Household: {
      description: "Household supplies, Walmart-style purchases, and misc daily items.",
      examples: EXPENSE_TRACKER_STARTER_MERCHANTS.Household
    }
  };

  function normalizeExpenseCategory(value) {
    return EXPENSE_TRACKER_CATEGORIES.includes(value) ? value : EXPENSE_TRACKER_DEFAULT_CATEGORY;
  }

  function buildDefaultExpenseTrackerState() {
    return {
      entries: []
    };
  }

  function createExpenseEntry({ merchant, amount, currency, date, note = "", category = EXPENSE_TRACKER_DEFAULT_CATEGORY }) {
    return {
      id: createId(),
      merchant,
      amount,
      currency,
      date,
      note,
      category: normalizeExpenseCategory(category),
      createdAt: new Date().toISOString()
    };
  }

  function normalizeExpenseEntry(entry) {
    const merchant = typeof entry?.merchant === "string" ? entry.merchant.trim() : "";
    const amount = Number(entry?.amount);
    const currency = entry?.currency === "RMB" ? "RMB" : "USD";
    const date = typeof entry?.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) ? entry.date : getTodayIso();
    const note = typeof entry?.note === "string" ? entry.note.trim() : "";
    const category = typeof entry?.category === "string" && entry.category.trim()
      ? entry.category.trim()
      : EXPENSE_TRACKER_DEFAULT_CATEGORY;

    if (!merchant || Number.isNaN(amount) || amount < 0) {
      return null;
    }

    return {
      id: entry?.id || createId(),
      merchant,
      amount,
      currency,
      date,
      note,
      category,
      createdAt: normalizeTimestamp(entry?.createdAt) || new Date().toISOString()
    };
  }

  function normalizeExpenseTrackerState(rawState) {
    if (!rawState || typeof rawState !== "object" || Array.isArray(rawState)) {
      return buildDefaultExpenseTrackerState();
    }

    return {
      entries: Array.isArray(rawState.entries)
        ? rawState.entries.map(entry => normalizeExpenseEntry(entry)).filter(Boolean)
        : []
    };
  }

  function loadExpenseTrackerState() {
    try {
      const raw = localStorage.getItem(EXPENSE_TRACKER_STORAGE_KEY);

      if (!raw) {
        return buildDefaultExpenseTrackerState();
      }

      return normalizeExpenseTrackerState(JSON.parse(raw));
    } catch {
      return buildDefaultExpenseTrackerState();
    }
  }

  function saveExpenseTrackerState(state) {
    localStorage.setItem(EXPENSE_TRACKER_STORAGE_KEY, JSON.stringify(state));
  }

  function parseExpenseDate(dateValue) {
    if (typeof dateValue !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      return null;
    }

    const [year, month, day] = dateValue.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function formatExpenseDate(dateValue) {
    const parsed = parseExpenseDate(dateValue);

    if (!parsed) {
      return dateValue || "No date";
    }

    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric"
    }).format(parsed);
  }

  function formatExpenseAmount(amount, currency) {
    const safeAmount = Number.isFinite(amount) ? amount : 0;

    if (currency === "USD") {
      return `$${safeAmount.toFixed(2)}`;
    }

    const fixed = safeAmount.toFixed(2).replace(/\.00$/, "").replace(/(\.\d)0$/, "$1");
    return `R${fixed}`;
  }

  function formatSummaryTotals(totals) {
    return formatBudgetSplitTotalDisplay(totals);
  }

  function getWeekStart(dateObj) {
    const weekStart = new Date(dateObj);
    weekStart.setHours(0, 0, 0, 0);
    const day = weekStart.getDay();
    const offset = day === 0 ? -6 : 1 - day;
    weekStart.setDate(weekStart.getDate() + offset);
    return weekStart;
  }

  function getPeriodRange(periodId) {
    const now = new Date();

    if (periodId === "month") {
      const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      return { startDate, endDate };
    }

    if (periodId === "year") {
      const startDate = new Date(now.getFullYear(), 0, 1);
      const endDate = new Date(now.getFullYear() + 1, 0, 1);
      return { startDate, endDate };
    }

    const startDate = getWeekStart(now);
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 7);
    return { startDate, endDate };
  }

  function getTotalsForEntries(entries) {
    return entries.reduce(
      (totals, entry) => {
        const amount = Number(entry.amount);
        const safeAmount = Number.isFinite(amount) ? amount : 0;
        const currency = normalizeBudgetCurrency(entry.currency);

        if (currency === "CNY") {
          totals.hasRmb = true;
          totals.rmb += safeAmount;
        } else {
          totals.hasUsd = true;
          totals.usd += safeAmount;
        }

        return totals;
      },
      createSplitCurrencyTotals()
    );
  }

  function isStarterPlaceholderEntry(entry) {
    const starterMerchants = EXPENSE_TRACKER_STARTER_MERCHANTS[entry.category] || [];
    const note = typeof entry.note === "string" ? entry.note.trim().toLowerCase() : "";
    const isStarterNote = note === "starter merchant" || note === "starter";
    return entry.amount === 0 && isStarterNote && starterMerchants.includes(entry.merchant);
  }

  function sortExpenseEntries(entries) {
    return [...entries].sort((left, right) => {
      if (left.date !== right.date) {
        return right.date.localeCompare(left.date);
      }

      return new Date(right.createdAt) - new Date(left.createdAt);
    });
  }

  function renderRecentExpenseEntries(listElement, entries) {
    listElement.innerHTML = "";

    if (entries.length === 0) {
      listElement.appendChild(createEmptyState("No expenses logged yet. Add your first expense above."));
      return;
    }

    entries.forEach(entry => {
      const item = document.createElement("li");
      item.className = "note-item";

      const copy = document.createElement("div");
      const title = document.createElement("strong");
      const meta = document.createElement("span");
      title.textContent = entry.merchant;
      meta.className = "note-meta";
      meta.textContent = `${entry.category || EXPENSE_TRACKER_DEFAULT_CATEGORY} \u00b7 ${formatExpenseDate(entry.date)}`;
      copy.append(title, meta);

      if (entry.note) {
        const note = document.createElement("p");
        note.className = "expense-history-note";
        note.textContent = entry.note;
        copy.appendChild(note);
      }

      const amountWrap = document.createElement("div");
      amountWrap.style.textAlign = "right";
      const amountValue = document.createElement("strong");
      amountValue.textContent = formatExpenseAmount(entry.amount, entry.currency);
      amountWrap.appendChild(amountValue);

      item.append(copy, amountWrap);
      listElement.appendChild(item);
    });
  }

  function getEntriesForPeriod(entries, periodId) {
    const { startDate, endDate } = getPeriodRange(periodId);
    return entries.filter(entry => {
      const date = parseExpenseDate(entry.date);
      return Boolean(date) && date >= startDate && date < endDate;
    });
  }

  const expenseState = loadExpenseTrackerState();
  const cleanedEntries = expenseState.entries.filter(entry => !isStarterPlaceholderEntry(entry));

  const periodButtonsHtml = EXPENSE_PERIODS
    .map(period => `<button type="button" class="nav-btn expense-period-btn${period.id === "week" ? " is-active" : ""}" data-period="${period.id}">${period.label}</button>`)
    .join("");
  const categoryOptionsHtml = EXPENSE_TRACKER_CATEGORIES
    .map(category => `<option value="${category}">${category}</option>`)
    .join("");
  const categoryCardsHtml = EXPENSE_TRACKER_CATEGORIES
    .map(category => {
      const details = EXPENSE_CATEGORY_DETAILS[category] || { description: "", examples: [] };
      const exampleChips = details.examples
        .map(merchant => `<span class="expense-chip">${merchant}</span>`)
        .join("");

      return `
        <article class="panel expense-category-card">
          <div>
            <h3 class="panel-title">${category}</h3>
            <p class="panel-subtitle">${details.description}</p>
          </div>

          <div class="expense-category-metrics">
            <div class="expense-category-metric">
              <span>Selected period total</span>
              <strong data-category-total="${category}">$0</strong>
            </div>
            <div class="expense-category-metric">
              <span>Entries</span>
              <strong data-category-count="${category}">0</strong>
            </div>
          </div>

          <div class="expense-chip-row" aria-label="${category} example merchants">
            ${exampleChips}
          </div>
        </article>
      `;
    })
    .join("");

  viewRoot.innerHTML = `
    <section class="view-panel">
      <div class="view-panel__top">
        <div>
          <h2 class="panel-title">Expense Tracker</h2>
          <p class="panel-subtitle">A lightweight spending log with flexible period views.</p>
        </div>
      </div>

      <div class="header-controls expense-period-header">
        <nav class="view-nav expense-period-selector" id="expensePeriodSelector" aria-label="Expense period selector">
          ${periodButtonsHtml}
        </nav>
        <div class="budget-total expense-period-total">
          <span id="expensePeriodSummaryLabel">This Week</span>
          <strong id="expensePeriodSummaryTotal">$0</strong>
          <small class="expense-period-summary-note" id="expensePeriodSummaryHint">No expenses logged yet</small>
        </div>
      </div>

      <article class="panel expense-quick-add-panel">
        <h3 class="panel-title">Quick Add Expense</h3>
        <p class="panel-subtitle">Capture daily spending in seconds: merchant, amount, currency, date, category, and optional note.</p>

        <form class="gtd-form" id="expenseQuickAddForm">
          <div class="field">
            <label for="expenseMerchantInput">Merchant / Place</label>
            <input id="expenseMerchantInput" type="text" maxlength="120" placeholder="Whole Foods, Trader Joe's, Walmart" required />
          </div>

          <div class="field">
            <label for="expenseAmountInput">Amount</label>
            <input id="expenseAmountInput" type="number" min="0" step="0.01" placeholder="0" required />
          </div>

          <div class="field">
            <label for="expenseCurrencySelect">Currency</label>
            <select id="expenseCurrencySelect">
              <option value="USD">$</option>
              <option value="RMB">R</option>
            </select>
          </div>

          <div class="field">
            <label for="expenseDateInput">Date</label>
            <input id="expenseDateInput" type="date" value="${getTodayIso()}" required />
          </div>

          <div class="field">
            <label for="expenseCategorySelect">Category</label>
            <select id="expenseCategorySelect">
              ${categoryOptionsHtml}
            </select>
          </div>

          <div class="field">
            <label for="expenseNoteInput">Note (optional)</label>
            <input id="expenseNoteInput" type="text" maxlength="220" placeholder="Optional note" />
          </div>

          <button type="submit" class="primary-btn" style="justify-self: start;">Add expense</button>
          <p class="section-form__message" id="expenseQuickAddMessage" hidden style="grid-column: 1 / -1;"></p>
        </form>
      </article>

      <section class="gtd-grid expense-category-grid">
        ${categoryCardsHtml}
      </section>

      <article class="panel expense-history-panel">
        <h3 class="panel-title">Recent Expenses</h3>
        <p class="panel-subtitle">Spending history for the selected period.</p>
        <ul class="notes-list expense-history-list" id="expenseRecentList"></ul>
      </article>
    </section>
  `;

  upgradeGtdSelects(viewRoot);

  const periodSelector = document.getElementById("expensePeriodSelector");
  const periodSummaryLabel = document.getElementById("expensePeriodSummaryLabel");
  const periodSummaryTotal = document.getElementById("expensePeriodSummaryTotal");
  const periodSummaryHint = document.getElementById("expensePeriodSummaryHint");
  const recentList = document.getElementById("expenseRecentList");
  let activePeriod = "week";

  function updateCategoryOverview(entries) {
    EXPENSE_TRACKER_CATEGORIES.forEach(category => {
      const categoryEntries = entries.filter(entry => entry.category === category);
      const totals = getTotalsForEntries(categoryEntries);
      const totalElement = viewRoot.querySelector(`[data-category-total="${category}"]`);
      const countElement = viewRoot.querySelector(`[data-category-count="${category}"]`);

      if (totalElement) {
        totalElement.textContent = formatSummaryTotals(totals);
      }

      if (countElement) {
        countElement.textContent = String(categoryEntries.length);
      }
    });
  }

  function updatePeriodSummary(nextPeriod) {
    activePeriod = EXPENSE_PERIODS.some(period => period.id === nextPeriod) ? nextPeriod : "week";
    const activeOption = EXPENSE_PERIODS.find(period => period.id === activePeriod) || EXPENSE_PERIODS[0];
    const periodEntries = sortExpenseEntries(getEntriesForPeriod(cleanedEntries, activePeriod));
    const summaryTotals = getTotalsForEntries(periodEntries);

    periodSelector.querySelectorAll(".expense-period-btn").forEach(button => {
      button.classList.toggle("is-active", button.dataset.period === activePeriod);
      button.setAttribute("aria-pressed", button.dataset.period === activePeriod ? "true" : "false");
    });

    periodSummaryLabel.textContent = activeOption.label;
    periodSummaryTotal.textContent = formatSummaryTotals(summaryTotals);
    periodSummaryHint.textContent = periodEntries.length > 0
      ? "Total spending for selected period"
      : "No expenses logged yet";

    updateCategoryOverview(periodEntries);
    renderRecentExpenseEntries(recentList, periodEntries);
  }

  periodSelector.addEventListener("click", event => {
    const button = event.target.closest(".expense-period-btn");
    if (!button) return;
    updatePeriodSummary(button.dataset.period);
  });

  updatePeriodSummary("week");

  document.getElementById("expenseQuickAddForm").addEventListener("submit", event => {
    event.preventDefault();

    const merchantInput = document.getElementById("expenseMerchantInput");
    const amountInput = document.getElementById("expenseAmountInput");
    const currencySelect = document.getElementById("expenseCurrencySelect");
    const dateInput = document.getElementById("expenseDateInput");
    const noteInput = document.getElementById("expenseNoteInput");
    const categorySelect = document.getElementById("expenseCategorySelect");
    const message = document.getElementById("expenseQuickAddMessage");

    const merchant = merchantInput.value.trim();
    const amount = Number(amountInput.value);
    const currency = currencySelect.value === "RMB" ? "RMB" : "USD";
    const date = dateInput.value;
    const note = noteInput.value.trim();
    const category = normalizeExpenseCategory(categorySelect.value);

    if (!merchant || Number.isNaN(amount) || amount < 0 || !date) {
      message.textContent = "Please fill merchant, amount, and date with valid values.";
      message.hidden = false;
      return;
    }

    expenseState.entries.unshift(
      createExpenseEntry({
        merchant,
        amount,
        currency,
        date,
        note,
        category
      })
    );

    saveExpenseTrackerState(expenseState);
    renderApp();
  });
}

function populateSelectOptions(select, options, selectedValue = "") {
  select.innerHTML = "";

  options.forEach(optionData => {
    const option = document.createElement("option");
    option.value = optionData.value;
    option.textContent = optionData.label;
    select.appendChild(option);
  });

  const hasSelectedValue = options.some(optionData => optionData.value === selectedValue);
  select.value = hasSelectedValue ? selectedValue : options[0]?.value || "";
}

function getReferenceHref(link) {
  if (!link) {
    return "";
  }

  return /^[a-z][a-z\d+\-.]*:/i.test(link) ? link : `https://${link}`;
}

function buildGtdCustomSelect(nativeSelect) {
  if (nativeSelect.dataset.cselect === "1") return;
  nativeSelect.dataset.cselect = "1";

  // Keep the native select functional but invisible — value reads and change events still work.
  nativeSelect.style.cssText = "position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden;";

  const wrapper = document.createElement("div");
  wrapper.className = "gtd-cselect";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "gtd-cselect__trigger";

  const labelEl = document.createElement("span");
  labelEl.className = "gtd-cselect__label";

  const arrowEl = document.createElement("span");
  arrowEl.className = "gtd-cselect__arrow";
  arrowEl.textContent = "\u25be";

  trigger.appendChild(labelEl);
  trigger.appendChild(arrowEl);

  const dropdown = document.createElement("div");
  dropdown.className = "gtd-cselect__dropdown";
  dropdown.hidden = true;

  function currentLabel() {
    const opt = Array.from(nativeSelect.options).find(o => o.value === nativeSelect.value);
    return opt ? opt.text : (nativeSelect.options[0]?.text || "\u2014");
  }

  function buildOptions() {
    dropdown.innerHTML = "";
    Array.from(nativeSelect.options).forEach(opt => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gtd-cselect__option" + (opt.value === nativeSelect.value ? " is-selected" : "");
      btn.textContent = opt.text;
      btn.addEventListener("click", e => {
        e.stopPropagation();
        nativeSelect.value = opt.value;
        nativeSelect.dispatchEvent(new Event("change", { bubbles: true }));
        labelEl.textContent = currentLabel();
        buildOptions();
        close();
      });
      dropdown.appendChild(btn);
    });
  }

  let outsideHandler = null;

  function open() {
    buildOptions();
    dropdown.hidden = false;
    trigger.classList.add("is-open");
    outsideHandler = e => { if (!wrapper.contains(e.target)) close(); };
    requestAnimationFrame(() => document.addEventListener("click", outsideHandler));
  }

  function close() {
    dropdown.hidden = true;
    trigger.classList.remove("is-open");
    if (outsideHandler) {
      document.removeEventListener("click", outsideHandler);
      outsideHandler = null;
    }
  }

  trigger.addEventListener("click", e => {
    e.stopPropagation();
    dropdown.hidden ? open() : close();
  });

  // Keep label in sync when value is changed externally (e.g. form reset, direct assignment).
  nativeSelect.addEventListener("change", () => { labelEl.textContent = currentLabel(); });

  labelEl.textContent = currentLabel();
  wrapper.appendChild(trigger);
  wrapper.appendChild(dropdown);
  nativeSelect.parentNode.insertBefore(wrapper, nativeSelect.nextSibling);
}

function upgradeGtdSelects(container) {
  container.querySelectorAll("select").forEach(sel => {
    if (!sel.dataset.cselect) buildGtdCustomSelect(sel);
  });
}

// ── Custom date / datetime-local picker ─────────────────────────────────────
const _MONTHS_LONG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const _WEEKDAYS_SHORT = ["S","M","T","W","T","F","S"];

function buildCustomDatePicker(nativeInput) {
  if (nativeInput.dataset.cdatepicker === "1") return;
  nativeInput.dataset.cdatepicker = "1";

  const isDatetime = nativeInput.type === "datetime-local";

  // Hide the native input but keep it in the form so value/required still work.
  nativeInput.style.cssText = "position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden;";

  const wrapper = document.createElement("div");
  wrapper.className = "gtd-datepicker";

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "gtd-cselect__trigger gtd-datepicker__trigger";

  const labelEl = document.createElement("span");
  labelEl.className = "gtd-cselect__label";

  const iconEl = document.createElement("span");
  iconEl.className = "gtd-cselect__arrow gtd-datepicker__icon";
  iconEl.innerHTML = "&#128197;";

  trigger.appendChild(labelEl);
  trigger.appendChild(iconEl);

  const popup = document.createElement("div");
  popup.className = "gtd-datepicker__popup";
  popup.hidden = true;

  let viewYear = 0, viewMonth = 0;
  let selectedDate = null;
  let selectedTime = "00:00";

  function parseNativeValue() {
    const v = nativeInput.value;
    if (!v) return null;
    if (isDatetime) {
      const [datePart, timePart] = v.split("T");
      if (timePart) selectedTime = timePart.slice(0, 5);
      const [y, m, d] = datePart.split("-").map(Number);
      return new Date(y, m - 1, d);
    }
    const [y, m, d] = v.split("-").map(Number);
    return new Date(y, m - 1, d);
  }

  function toIsoDate(d) {
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }

  function formatDisplay(d) {
    if (!d) return isDatetime ? "Pick date & time…" : "Pick a date…";
    const wd = d.toLocaleString("en-US", { weekday: "short" });
    const mo = d.toLocaleString("en-US", { month: "short" });
    const str = `${wd}, ${mo} ${d.getDate()}, ${d.getFullYear()}`;
    return isDatetime ? `${str}  ${selectedTime}` : str;
  }

  function updateNative() {
    if (!selectedDate) { nativeInput.value = ""; }
    else if (isDatetime) { nativeInput.value = `${toIsoDate(selectedDate)}T${selectedTime}`; }
    else { nativeInput.value = toIsoDate(selectedDate); }
    nativeInput.dispatchEvent(new Event("change", { bubbles: true }));
    labelEl.textContent = formatDisplay(selectedDate);
  }

  function buildPopup() {
    popup.innerHTML = "";

    // Header row
    const header = document.createElement("div");
    header.className = "gtd-datepicker__header";

    const prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "gtd-datepicker__nav";
    prevBtn.textContent = "‹";
    prevBtn.addEventListener("click", e => {
      e.stopPropagation();
      viewMonth--; if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      buildPopup();
    });

    const monthLabel = document.createElement("span");
    monthLabel.className = "gtd-datepicker__month-label";
    monthLabel.textContent = `${_MONTHS_LONG[viewMonth]} ${viewYear}`;

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "gtd-datepicker__nav";
    nextBtn.textContent = "›";
    nextBtn.addEventListener("click", e => {
      e.stopPropagation();
      viewMonth++; if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      buildPopup();
    });

    header.appendChild(prevBtn);
    header.appendChild(monthLabel);
    header.appendChild(nextBtn);
    popup.appendChild(header);

    // Weekday row
    const wdRow = document.createElement("div");
    wdRow.className = "gtd-datepicker__weekdays";
    _WEEKDAYS_SHORT.forEach(d => {
      const el = document.createElement("span");
      el.textContent = d;
      wdRow.appendChild(el);
    });
    popup.appendChild(wdRow);

    // Date grid
    const grid = document.createElement("div");
    grid.className = "gtd-datepicker__grid";

    const today = new Date();
    const firstDow = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    function makeDayBtn(date, otherMonth) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "gtd-datepicker__day";
      btn.textContent = date.getDate();
      if (otherMonth) btn.classList.add("is-other-month");
      if (date.getFullYear() === today.getFullYear() && date.getMonth() === today.getMonth() && date.getDate() === today.getDate())
        btn.classList.add("is-today");
      if (selectedDate && date.getFullYear() === selectedDate.getFullYear() && date.getMonth() === selectedDate.getMonth() && date.getDate() === selectedDate.getDate())
        btn.classList.add("is-selected");
      btn.addEventListener("click", e => {
        e.stopPropagation();
        selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        updateNative();
        if (isDatetime) { buildPopup(); } else { close(); }
      });
      return btn;
    }

    for (let i = 0; i < firstDow; i++) {
      grid.appendChild(makeDayBtn(new Date(viewYear, viewMonth, i - firstDow + 1), true));
    }
    for (let d = 1; d <= daysInMonth; d++) {
      grid.appendChild(makeDayBtn(new Date(viewYear, viewMonth, d), false));
    }
    const totalCells = firstDow + daysInMonth;
    const trailing = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= trailing; i++) {
      grid.appendChild(makeDayBtn(new Date(viewYear, viewMonth + 1, i), true));
    }

    popup.appendChild(grid);

    // Time row (datetime-local only)
    if (isDatetime) {
      const timeRow = document.createElement("div");
      timeRow.className = "gtd-datepicker__time-row";
      const timeLbl = document.createElement("label");
      timeLbl.textContent = "Time";
      timeLbl.className = "gtd-datepicker__time-label";
      const timeInput = document.createElement("input");
      timeInput.type = "time";
      timeInput.className = "gtd-datepicker__time-input";
      timeInput.value = selectedTime;
      timeInput.addEventListener("click", e => e.stopPropagation());
      timeInput.addEventListener("change", e => {
        selectedTime = e.target.value || "00:00";
        if (selectedDate) updateNative();
      });
      timeRow.appendChild(timeLbl);
      timeRow.appendChild(timeInput);
      popup.appendChild(timeRow);
    }
  }

  let _outsideHandler = null;

  function open() {
    selectedDate = parseNativeValue();
    const ref = selectedDate || new Date();
    viewYear = ref.getFullYear();
    viewMonth = ref.getMonth();
    buildPopup();
    popup.hidden = false;
    trigger.classList.add("is-open");
    _outsideHandler = e => { if (!wrapper.contains(e.target)) close(); };
    requestAnimationFrame(() => document.addEventListener("click", _outsideHandler));
  }

  function close() {
    popup.hidden = true;
    trigger.classList.remove("is-open");
    if (_outsideHandler) {
      document.removeEventListener("click", _outsideHandler);
      _outsideHandler = null;
    }
  }

  trigger.addEventListener("click", e => {
    e.stopPropagation();
    popup.hidden ? open() : close();
  });

  nativeInput.addEventListener("change", () => {
    selectedDate = parseNativeValue();
    labelEl.textContent = formatDisplay(selectedDate);
  });

  selectedDate = parseNativeValue();
  labelEl.textContent = formatDisplay(selectedDate);

  wrapper.appendChild(trigger);
  wrapper.appendChild(popup);
  nativeInput.parentNode.insertBefore(wrapper, nativeInput.nextSibling);
}

function upgradeCustomDatePickers(container) {
  container.querySelectorAll("input[type='date'], input[type='datetime-local']").forEach(inp => {
    if (!inp.dataset.cdatepicker) buildCustomDatePicker(inp);
  });
}

function renderBudgetPlanning() {
  if (!appState.budgetPlanner || typeof appState.budgetPlanner !== "object" || Array.isArray(appState.budgetPlanner)) {
    appState.budgetPlanner = buildDefaultBudgetPlannerState();
  }

  BUDGET_PLANNING_PERIODS.forEach(periodId => {
    if (!appState.budgetPlanner[periodId] || typeof appState.budgetPlanner[periodId] !== "object") {
      appState.budgetPlanner[periodId] = { target: null, entries: [] };
    }
    if (!Array.isArray(appState.budgetPlanner[periodId].entries)) {
      appState.budgetPlanner[periodId].entries = [];
    }
  });

  uiState.selectedBudgetPlanningPeriod = normalizeBudgetPlanningPeriodId(uiState.selectedBudgetPlanningPeriod);

  const activePeriodId = uiState.selectedBudgetPlanningPeriod;
  const activePeriod = appState.budgetPlanner[activePeriodId];
  const entries = [...activePeriod.entries]
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));

  const createSplitTotals = () => ({
    usd: 0,
    rmb: 0,
    hasUsd: false,
    hasRmb: false
  });

  const totals = activePeriod.entries.reduce(
    (accumulator, entry) => {
      const safeAmount = Number(entry.amount) || 0;
      const currency = normalizeBudgetCurrency(entry.currency);
      const bucket = entry.type === "tracked" ? accumulator.tracked : accumulator.planned;

      if (currency === "CNY") {
        bucket.rmb += safeAmount;
        bucket.hasRmb = true;
      } else {
        bucket.usd += safeAmount;
        bucket.hasUsd = true;
      }

      return accumulator;
    },
    {
      planned: createSplitTotals(),
      tracked: createSplitTotals()
    }
  );

  const target = normalizeBudgetPlannerTarget(activePeriod.target);
  const targetCurrency = target ? target.currency : "USD";
  const trackedInTargetCurrency = target
    ? activePeriod.entries.reduce((sum, entry) => {
        if (entry.type !== "tracked") {
          return sum;
        }

        return sum + convertBudgetPlanningAmount(entry.amount, entry.currency, target.currency);
      }, 0)
    : 0;
  const remaining = target ? target.amount - trackedInTargetCurrency : null;
  const usagePercent = target && target.amount > 0 ? (trackedInTargetCurrency / target.amount) * 100 : null;
  const remainingSummary = target
    ? `${formatBudgetAmount(remaining, target.currency)}${usagePercent === null ? "" : ` · ${usagePercent.toFixed(1)}% used`}`
    : "No target";

  viewRoot.innerHTML = `
    <section class="view-panel budget-planning-view">
      <div class="view-panel__top expense-period-header">
        <div>
          <h2 class="panel-title">Budget Planner</h2>
          <p class="panel-subtitle">Plan and track weekly, monthly, and yearly budget targets separately from Budget Spending items.</p>
        </div>

        <div class="view-nav expense-period-selector" id="budgetPlanningPeriodSelector" aria-label="Budget planning period selector">
          ${BUDGET_PLANNING_PERIODS
            .map(periodId => `<button type="button" class="nav-btn expense-period-btn${periodId === activePeriodId ? " is-active" : ""}" data-period="${periodId}">${BUDGET_PLANNING_PERIOD_LABELS[periodId]}</button>`)
            .join("")}
        </div>
      </div>

      <div class="budget-summary-cards">
        <div class="budget-summary-card">
          <p>Target budget</p>
          <strong>${target === null ? "No target" : formatBudgetAmount(target.amount, target.currency)}</strong>
        </div>
        <div class="budget-summary-card">
          <p>Planned total</p>
          <strong>${formatBudgetSplitTotalDisplay(totals.planned)}</strong>
        </div>
        <div class="budget-summary-card">
          <p>Tracked total</p>
          <strong>${formatBudgetSplitTotalDisplay(totals.tracked)}</strong>
        </div>
        <div class="budget-summary-card">
          <p>Remaining</p>
          <strong>${remainingSummary}</strong>
        </div>
      </div>

      <form class="budget-form budget-plan-target-form" id="budgetPlanningTargetForm">
        <div class="field">
          <label for="budgetPlanningTargetInput">${BUDGET_PLANNING_PERIOD_LABELS[activePeriodId]} target amount</label>
          <input id="budgetPlanningTargetInput" type="number" step="0.01" min="0" placeholder="0" value="${target?.amount ?? ""}" required />
        </div>
        <div class="field">
          <label for="budgetPlanningTargetCurrencySelect">Currency</label>
          <select id="budgetPlanningTargetCurrencySelect" class="budget-plan-currency-select">
            <option value="USD"${targetCurrency === "USD" ? " selected" : ""}>$</option>
            <option value="CNY"${targetCurrency === "CNY" ? " selected" : ""}>R</option>
          </select>
        </div>
        <div class="budget-form__actions">
          <button type="submit" class="primary-btn">Save target</button>
          ${target === null ? "" : '<button type="button" class="secondary-btn" id="budgetPlanningClearTargetBtn">Clear</button>'}
        </div>
      </form>

      <form class="budget-form budget-plan-entry-form" id="budgetPlanningEntryForm">
        <div class="field">
          <label for="budgetPlanningTitleInput">Entry</label>
          <input id="budgetPlanningTitleInput" type="text" maxlength="120" placeholder="For example: groceries, subscriptions, travel" required />
        </div>

        <div class="field">
          <label for="budgetPlanningAmountInput">Amount</label>
          <input id="budgetPlanningAmountInput" type="number" step="0.01" min="0" placeholder="0" required />
        </div>

        <div class="field">
          <label for="budgetPlanningCurrencySelect">Currency</label>
          <select id="budgetPlanningCurrencySelect" class="budget-plan-currency-select">
            <option value="USD">$</option>
            <option value="CNY">R</option>
          </select>
        </div>

        <div class="field">
          <label for="budgetPlanningTypeSelect">Type</label>
          <select id="budgetPlanningTypeSelect">
            <option value="planned">Planned</option>
            <option value="tracked">Tracked</option>
          </select>
        </div>

        <div class="budget-form__actions">
          <button type="submit" class="primary-btn">Add entry</button>
        </div>
      </form>

      <ul class="notes-list budget-plan-list" id="budgetPlanningEntryList"></ul>
    </section>
  `;

  const periodSelector = document.getElementById("budgetPlanningPeriodSelector");
  const targetForm = document.getElementById("budgetPlanningTargetForm");
  const entryForm = document.getElementById("budgetPlanningEntryForm");
  const entryList = document.getElementById("budgetPlanningEntryList");

  viewRoot
    .querySelectorAll(".budget-plan-currency-select")
    .forEach(selectElement => buildGtdCustomSelect(selectElement));

  periodSelector.addEventListener("click", event => {
    const button = event.target.closest("[data-period]");

    if (!button) {
      return;
    }

    const nextPeriod = normalizeBudgetPlanningPeriodId(button.dataset.period);

    if (nextPeriod === uiState.selectedBudgetPlanningPeriod) {
      return;
    }

    uiState.selectedBudgetPlanningPeriod = nextPeriod;
    renderApp();
  });

  targetForm.addEventListener("submit", event => {
    event.preventDefault();

    const targetInput = document.getElementById("budgetPlanningTargetInput");
    const targetCurrencySelect = document.getElementById("budgetPlanningTargetCurrencySelect");
    const parsedTarget = Number(targetInput.value);

    if (Number.isNaN(parsedTarget) || parsedTarget < 0) {
      return;
    }

    activePeriod.target = {
      amount: parsedTarget,
      currency: normalizeBudgetCurrency(targetCurrencySelect?.value)
    };
    saveState();
    renderApp();
  });

  document.getElementById("budgetPlanningClearTargetBtn")?.addEventListener("click", () => {
    activePeriod.target = null;
    saveState();
    renderApp();
  });

  entryForm.addEventListener("submit", event => {
    event.preventDefault();

    const titleInput = document.getElementById("budgetPlanningTitleInput");
    const amountInput = document.getElementById("budgetPlanningAmountInput");
    const currencySelect = document.getElementById("budgetPlanningCurrencySelect");
    const typeSelect = document.getElementById("budgetPlanningTypeSelect");
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const currency = normalizeBudgetCurrency(currencySelect?.value);
    const type = typeSelect.value === "tracked" ? "tracked" : "planned";

    if (!title || Number.isNaN(amount) || amount < 0) {
      return;
    }

    activePeriod.entries.unshift(createBudgetPlanningEntry({ title, amount, currency, type }));
    saveState();
    renderApp();
  });

  if (entries.length === 0) {
    entryList.appendChild(createEmptyState("No planning entries yet. Add planned and tracked entries to compare against your target."));
    return;
  }

  entries.forEach(entry => {
    const item = document.createElement("li");
    item.className = "note-item budget-plan-item";

    const copy = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    title.textContent = entry.title;
    meta.className = "note-meta budget-plan-item__meta";
    meta.textContent = `${entry.type === "tracked" ? "Tracked" : "Planned"} · ${formatBudgetAmount(entry.amount, entry.currency || "USD")}`;
    copy.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "budget-plan-item__actions";

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "tiny-btn";
    toggleButton.textContent = entry.type === "tracked" ? "Mark planned" : "Mark tracked";
    toggleButton.addEventListener("click", () => {
      entry.type = entry.type === "tracked" ? "planned" : "tracked";
      saveState();
      renderApp();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "tiny-btn is-danger";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      activePeriod.entries = activePeriod.entries.filter(itemEntry => itemEntry.id !== entry.id);
      saveState();
      renderApp();
    });

    actions.append(toggleButton, deleteButton);
    item.append(copy, actions);
    entryList.appendChild(item);
  });
}

function renderWaitingFor() {
  const waitingStats = getWaitingStats();
  const gtdStats = getGtdStats();
  const actionSectionOptions = ACTION_SECTION_DEFINITIONS.map(section => ({
    value: section.id,
    label: section.title
  }));
  const projectOptions = [
    { value: "", label: "No project" },
    ...appState.projects.map(project => ({
      value: project.id,
      label: project.title
    }))
  ];
  const contextOptions = getAvailableContexts().map(context => ({
    value: context,
    label: getTaskContextLabel(context)
  }));

  viewRoot.innerHTML = `
    <section class="view-panel gtd-view">
      <div class="view-panel__top">
        <div>
          <h2 class="panel-title">GTD Organizer</h2>
          <p class="panel-subtitle">Capture first, clarify next, and keep next actions synced with the Action Board.</p>
        </div>

        <div class="view-actions">
          <div class="inline-stats">
            <span class="inline-stat">Inbox ${gtdStats.inbox}</span>
            <span class="inline-stat">Next actions ${gtdStats.nextActions}</span>
            <span class="inline-stat">Waiting ${waitingStats.Waiting}</span>
            <span class="inline-stat">Projects ${gtdStats.projects}</span>
            <span class="inline-stat">Someday ${gtdStats.someday}</span>
            <span class="inline-stat">Trash ${gtdStats.trash}</span>
          </div>
        </div>
      </div>

      <div class="gtd-grid">
        <article class="gtd-section gtd-section--inbox">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">Inbox</h3>
              <p class="panel-subtitle">Capture loose thoughts quickly, then clarify them into the right GTD place.</p>
            </div>
            <span class="pill">${appState.inboxItems.length}</span>
          </div>

          <form class="gtd-form" id="gtdInboxForm">
            <div class="field gtd-form__field--wide">
              <label for="gtdInboxInput">Quick capture</label>
              <input id="gtdInboxInput" type="text" maxlength="140" placeholder="Write the thought down before it drifts away" required />
            </div>
            <button type="submit" class="primary-btn">Capture</button>
          </form>

          <ul class="gtd-list" id="gtdInboxList"></ul>
        </article>

        <article class="gtd-section gtd-section--contexts">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">@Context Tasks</h3>
              <p class="panel-subtitle">These are your actionable next steps. They use the same task data as the Action Board.</p>
            </div>
            <span class="pill">${getAllActionTaskEntries().length}</span>
          </div>

          <form class="gtd-form gtd-form--task" id="contextTaskForm">
            <div class="field gtd-form__field--wide">
              <label for="contextTaskTitleInput">Next action</label>
              <input id="contextTaskTitleInput" type="text" maxlength="120" placeholder="For example: call the supplier, draft the outline, pick up detergent" required />
            </div>
            <div class="field">
              <label for="contextTaskSectionSelect">Action Board section</label>
              <select id="contextTaskSectionSelect"></select>
            </div>
            <div class="field">
              <label for="contextTaskContextSelect">Context</label>
              <select id="contextTaskContextSelect"></select>
            </div>
            <div class="field">
              <label for="contextTaskProjectSelect">Project</label>
              <select id="contextTaskProjectSelect"></select>
            </div>
            <button type="submit" class="primary-btn">Add next action</button>
          </form>

          <div class="gtd-context-groups" id="gtdContextGroups"></div>
        </article>

        <article class="gtd-section">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">Waiting For</h3>
              <p class="panel-subtitle">Track anything that depends on someone else replying, sending, finishing, or confirming.</p>
            </div>
            <span class="pill">${appState.waitingItems.length}</span>
          </div>

          <form class="gtd-form" id="waitingForm">
            <div class="field gtd-form__field--wide">
              <label for="waitingTitleInput">Title</label>
              <input id="waitingTitleInput" type="text" maxlength="120" placeholder="For example: signed contract, missing file, shipment update" required />
            </div>
            <div class="field">
              <label for="waitingPersonInput">Person / organization</label>
              <input id="waitingPersonInput" type="text" maxlength="120" placeholder="Who owns the next move?" required />
            </div>
            <div class="field">
              <label for="waitingStatusSelect">Status</label>
              <select id="waitingStatusSelect"></select>
            </div>
            <div class="field">
              <label for="waitingDateInput">Follow-up date</label>
              <input id="waitingDateInput" type="date" />
            </div>
            <div class="field gtd-form__field--wide">
              <label for="waitingNoteInput">Note</label>
              <textarea id="waitingNoteInput" rows="3" maxlength="240" placeholder="Add a promise, a reminder, or extra context"></textarea>
            </div>
            <button type="submit" class="primary-btn">Add waiting item</button>
          </form>

          <ul class="waiting-list" id="waitingList"></ul>
        </article>

        <article class="gtd-section">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">Projects</h3>
              <p class="panel-subtitle">Keep outcomes that need more than one action together with notes and linked next actions.</p>
            </div>
            <span class="pill">${appState.projects.length}</span>
          </div>

          <form class="gtd-form" id="gtdProjectForm">
            <div class="field">
              <label for="gtdProjectTitleInput">Project title</label>
              <input id="gtdProjectTitleInput" type="text" maxlength="120" placeholder="For example: refresh portfolio homepage" required />
            </div>
            <div class="field gtd-form__field--wide">
              <label for="gtdProjectNoteInput">Project note</label>
              <textarea id="gtdProjectNoteInput" rows="3" maxlength="280" placeholder="Keep a short outcome note or planning detail here"></textarea>
            </div>
            <button type="submit" class="primary-btn">Add project</button>
          </form>

          <ul class="gtd-list" id="gtdProjectList"></ul>
        </article>

        <article class="gtd-section">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">Someday / Maybe</h3>
              <p class="panel-subtitle">Keep future ideas here without turning them into current commitments.</p>
            </div>
            <span class="pill">${appState.somedayItems.length}</span>
          </div>

          <form class="gtd-form" id="gtdSomedayForm">
            <div class="field">
              <label for="gtdSomedayTitleInput">Idea</label>
              <input id="gtdSomedayTitleInput" type="text" maxlength="120" placeholder="For example: start a balcony herb box" required />
            </div>
            <div class="field gtd-form__field--wide">
              <label for="gtdSomedayNoteInput">Note</label>
              <textarea id="gtdSomedayNoteInput" rows="3" maxlength="280" placeholder="Add a reason to keep it around for later"></textarea>
            </div>
            <button type="submit" class="primary-btn">Add someday item</button>
          </form>

          <ul class="gtd-list" id="gtdSomedayList"></ul>
        </article>

        <article class="gtd-section">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">Reference</h3>
              <p class="panel-subtitle">Store non-actionable notes, links, and information that should not clutter task lists.</p>
            </div>
            <span class="pill">${appState.referenceItems.length}</span>
          </div>

          <form class="gtd-form" id="gtdReferenceForm">
            <div class="field">
              <label for="gtdReferenceTitleInput">Title</label>
              <input id="gtdReferenceTitleInput" type="text" maxlength="120" placeholder="For example: vendor portal, Wi-Fi instructions" required />
            </div>
            <div class="field">
              <label for="gtdReferenceLinkInput">Link</label>
              <input id="gtdReferenceLinkInput" type="text" maxlength="240" placeholder="Optional URL or plain text link" />
            </div>
            <div class="field gtd-form__field--wide">
              <label for="gtdReferenceNoteInput">Reference note</label>
              <textarea id="gtdReferenceNoteInput" rows="3" maxlength="280" placeholder="Store reference-only details here"></textarea>
            </div>
            <button type="submit" class="primary-btn">Add reference</button>
          </form>

          <ul class="gtd-list" id="gtdReferenceList"></ul>
        </article>

        <article class="gtd-section gtd-section--trash">
          <div class="gtd-section__header">
            <div>
              <h3 class="panel-title">Trash</h3>
              <p class="panel-subtitle">Keep discarded items here temporarily so they can be restored before permanent deletion.</p>
            </div>
            <button type="button" class="secondary-btn" id="emptyTrashBtn">Empty trash</button>
          </div>

          <ul class="gtd-list" id="gtdTrashList"></ul>
        </article>
      </div>
    </section>
  `;

  populateSelectOptions(document.getElementById("contextTaskSectionSelect"), actionSectionOptions, "memo");
  populateSelectOptions(document.getElementById("contextTaskContextSelect"), contextOptions, "");
  populateSelectOptions(document.getElementById("contextTaskProjectSelect"), projectOptions, "");
  populateSelectOptions(
    document.getElementById("waitingStatusSelect"),
    WAITING_STATUSES.map(status => ({
      value: status,
      label: getStatusLabel(status)
    })),
    "Waiting"
  );

  const inboxList = document.getElementById("gtdInboxList");
  const contextGroups = document.getElementById("gtdContextGroups");
  const waitingList = document.getElementById("waitingList");
  const projectList = document.getElementById("gtdProjectList");
  const somedayList = document.getElementById("gtdSomedayList");
  const referenceList = document.getElementById("gtdReferenceList");
  const trashList = document.getElementById("gtdTrashList");

  const renderInboxList = () => {
    inboxList.innerHTML = "";

    if (appState.inboxItems.length === 0) {
      inboxList.appendChild(createEmptyState("Inbox is clear. Capture something here when it lands in your head."));
      return;
    }

    [...appState.inboxItems]
      .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
      .forEach(item => {
        const row = document.createElement("li");
        row.className = "gtd-item";

        const top = document.createElement("div");
        top.className = "gtd-item__top";

        const title = document.createElement("strong");
        title.textContent = item.title;

        const meta = document.createElement("span");
        meta.className = "gtd-item__meta";
        meta.textContent = `Captured ${formatShortDate(item.createdAt)}`;

        top.appendChild(title);
        top.appendChild(meta);

        const controls = document.createElement("div");
        controls.className = "gtd-item__controls";

        const sectionSelect = document.createElement("select");
        populateSelectOptions(sectionSelect, actionSectionOptions, "memo");

        const contextSelect = document.createElement("select");
        populateSelectOptions(contextSelect, contextOptions, "");

        const clarifyButton = document.createElement("button");
        clarifyButton.type = "button";
        clarifyButton.className = "tiny-btn";
        clarifyButton.textContent = "To task";
        clarifyButton.addEventListener("click", () => {
          const result = addActionTask({
            title: item.title,
            sectionId: sectionSelect.value,
            context: contextSelect.value
          });

          if (result.error) {
            alert(result.error);
            return;
          }

          appState.inboxItems = appState.inboxItems.filter(entry => entry.id !== item.id);
          saveState();
          renderApp();
        });

        const projectButton = document.createElement("button");
        projectButton.type = "button";
        projectButton.className = "tiny-btn";
        projectButton.textContent = "Project";
        projectButton.addEventListener("click", () => {
          appState.projects.unshift(createProject({ title: item.title }));
          appState.inboxItems = appState.inboxItems.filter(entry => entry.id !== item.id);
          saveState();
          renderApp();
        });

        const somedayButton = document.createElement("button");
        somedayButton.type = "button";
        somedayButton.className = "tiny-btn";
        somedayButton.textContent = "Someday";
        somedayButton.addEventListener("click", () => {
          appState.somedayItems.unshift(createSomedayItem({ title: item.title }));
          appState.inboxItems = appState.inboxItems.filter(entry => entry.id !== item.id);
          saveState();
          renderApp();
        });

        const referenceButton = document.createElement("button");
        referenceButton.type = "button";
        referenceButton.className = "tiny-btn";
        referenceButton.textContent = "Reference";
        referenceButton.addEventListener("click", () => {
          appState.referenceItems.unshift(createReferenceItem({ title: item.title }));
          appState.inboxItems = appState.inboxItems.filter(entry => entry.id !== item.id);
          saveState();
          renderApp();
        });

        const trashButton = document.createElement("button");
        trashButton.type = "button";
        trashButton.className = "tiny-btn is-danger";
        trashButton.textContent = "Trash";
        trashButton.addEventListener("click", () => {
          discardInboxItem(item.id);
          saveState();
          renderApp();
        });

        controls.appendChild(sectionSelect);
        controls.appendChild(contextSelect);
        controls.appendChild(clarifyButton);
        controls.appendChild(projectButton);
        controls.appendChild(somedayButton);
        controls.appendChild(referenceButton);
        controls.appendChild(trashButton);

        row.appendChild(top);
        row.appendChild(controls);
        inboxList.appendChild(row);
      });
  };

  const renderContextGroups = () => {
    contextGroups.innerHTML = "";

    const entries = getAllActionTaskEntries().sort((left, right) => {
      if (left.task.done !== right.task.done) {
        return Number(left.task.done) - Number(right.task.done);
      }

      return left.task.title.localeCompare(right.task.title);
    });

    if (entries.length === 0) {
      contextGroups.appendChild(createEmptyState("There are no actionable tasks yet. Add one here or clarify an inbox item into a task."));
      return;
    }

    getAvailableContexts().forEach(contextValue => {
      const groupEntries = entries.filter(entry => entry.task.context === contextValue);

      if (groupEntries.length === 0) {
        return;
      }

      const group = document.createElement("section");
      group.className = "gtd-context-group";

      const groupHeader = document.createElement("div");
      groupHeader.className = "gtd-context-group__header";

      const groupTitle = document.createElement("h4");
      groupTitle.className = "gtd-context-group__title";
      groupTitle.textContent = getTaskContextLabel(contextValue);

      const groupMeta = document.createElement("span");
      groupMeta.className = "gtd-item__meta";
      groupMeta.textContent = groupEntries.length === 1 ? "1 task" : `${groupEntries.length} tasks`;

      groupHeader.appendChild(groupTitle);
      groupHeader.appendChild(groupMeta);

      const list = document.createElement("ul");
      list.className = "gtd-list";

      groupEntries.forEach(({ section, task }) => {
        const row = document.createElement("li");
        row.className = `gtd-item gtd-task-row ${task.done ? "is-done" : ""}`;

        const main = document.createElement("label");
        main.className = "gtd-task-row__main";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => {
          task.done = checkbox.checked;
          saveState();
          renderApp();
        });

        const copy = document.createElement("span");
        copy.className = "gtd-task-row__copy";

        const title = document.createElement("strong");
        title.className = "gtd-task-row__title";
        title.textContent = task.title;

        const meta = document.createElement("span");
        meta.className = "gtd-item__meta";
        const project = getProjectById(task.projectId);
        meta.textContent = project ? `${section.title} · ${project.title}` : section.title;

        copy.appendChild(title);
        copy.appendChild(meta);
        main.appendChild(checkbox);
        main.appendChild(copy);

        const controls = document.createElement("div");
        controls.className = "gtd-item__controls";

        const sectionSelect = document.createElement("select");
        populateSelectOptions(sectionSelect, actionSectionOptions, section.id);
        sectionSelect.addEventListener("change", () => {
          const result = moveActionTaskToSection(task.id, sectionSelect.value);

          if (result.error) {
            alert(result.error);
          }

          saveState();
          renderApp();
        });

        const contextSelect = document.createElement("select");
        populateSelectOptions(contextSelect, contextOptions, task.context);
        contextSelect.addEventListener("change", () => {
          task.context = contextSelect.value;
          saveState();
          renderApp();
        });

        const projectSelect = document.createElement("select");
        populateSelectOptions(projectSelect, projectOptions, getProjectById(task.projectId) ? task.projectId : "");
        projectSelect.addEventListener("change", () => {
          task.projectId = projectSelect.value;
          saveState();
          renderApp();
        });

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "tiny-btn";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
          const nextTitle = prompt("Edit task title", task.title);

          if (typeof nextTitle !== "string") {
            return;
          }

          const trimmed = nextTitle.trim();

          if (!trimmed) {
            return;
          }

          task.title = trimmed;
          saveState();
          renderApp();
        });

        const trashButton = document.createElement("button");
        trashButton.type = "button";
        trashButton.className = "tiny-btn is-danger";
        trashButton.textContent = "Trash";
        trashButton.addEventListener("click", () => {
          discardActionTask(task.id);
          saveState();
          renderApp();
        });

        controls.appendChild(sectionSelect);
        controls.appendChild(contextSelect);
        controls.appendChild(projectSelect);
        controls.appendChild(editButton);
        controls.appendChild(trashButton);

        row.appendChild(main);
        row.appendChild(controls);
        list.appendChild(row);
      });

      group.appendChild(groupHeader);
      group.appendChild(list);
      contextGroups.appendChild(group);
    });
  };

  const renderWaitingList = () => {
    waitingList.innerHTML = "";

    const sortedItems = [...appState.waitingItems].sort((left, right) => {
      if (!left.dueDate && !right.dueDate) {
        return 0;
      }

      if (!left.dueDate) {
        return 1;
      }

      if (!right.dueDate) {
        return -1;
      }

      return left.dueDate.localeCompare(right.dueDate);
    });

    if (sortedItems.length === 0) {
      waitingList.appendChild(createEmptyState("There are no waiting items right now. Add something that depends on someone else."));
      return;
    }

    sortedItems.forEach(item => {
      const row = document.createElement("li");
      row.className = `waiting-item waiting-item--${item.status.replace(/\s+/g, "-").toLowerCase()}`;

      const main = document.createElement("div");
      main.className = "waiting-item__main";

      const top = document.createElement("div");
      top.className = "waiting-item__top";

      const title = document.createElement("strong");
      title.textContent = item.title;

      const pill = document.createElement("span");
      pill.className = "waiting-status-pill";
      pill.textContent = getStatusLabel(item.status);

      top.appendChild(title);
      top.appendChild(pill);

      const person = document.createElement("p");
      person.className = "waiting-item__person";
      person.textContent = item.person;

      const meta = document.createElement("p");
      meta.className = "waiting-item__meta";
      meta.textContent = `Follow-up date: ${formatWaitingDate(item.dueDate)}`;

      const note = document.createElement("p");
      note.className = "waiting-item__note";
      note.textContent = item.note || "No note yet";

      main.appendChild(top);
      main.appendChild(person);
      main.appendChild(meta);
      main.appendChild(note);

      const side = document.createElement("div");
      side.className = "waiting-item__side";

      const statusField = document.createElement("label");
      statusField.className = "field waiting-status-field";

      const statusLabel = document.createElement("span");
      statusLabel.textContent = "Status";

      const statusControl = document.createElement("select");
      populateSelectOptions(
        statusControl,
        WAITING_STATUSES.map(status => ({
          value: status,
          label: getStatusLabel(status)
        })),
        item.status
      );
      statusControl.addEventListener("change", () => {
        item.status = statusControl.value;
        saveState();
        renderApp();
      });

      statusField.appendChild(statusLabel);
      statusField.appendChild(statusControl);

      const trashButton = document.createElement("button");
      trashButton.type = "button";
      trashButton.className = "tiny-btn is-danger";
      trashButton.textContent = "Trash";
      trashButton.addEventListener("click", () => {
        discardWaitingItem(item.id);
        saveState();
        renderApp();
      });

      side.appendChild(statusField);
      side.appendChild(trashButton);

      row.appendChild(main);
      row.appendChild(side);
      waitingList.appendChild(row);
    });
  };

  const renderProjectList = () => {
    projectList.innerHTML = "";

    if (appState.projects.length === 0) {
      projectList.appendChild(createEmptyState("Projects will appear here when you want to track an outcome that needs more than one step."));
      return;
    }

    appState.projects.forEach(project => {
      const relatedTasks = getAllActionTaskEntries().filter(entry => entry.task.projectId === project.id);
      const row = document.createElement("li");
      row.className = "gtd-item";

      const top = document.createElement("div");
      top.className = "gtd-item__top";

      const title = document.createElement("strong");
      title.textContent = project.title;

      const meta = document.createElement("span");
      meta.className = "gtd-item__meta";
      meta.textContent = relatedTasks.length === 1 ? "1 linked next action" : `${relatedTasks.length} linked next actions`;

      top.appendChild(title);
      top.appendChild(meta);

      row.appendChild(top);

      if (project.note) {
        const note = document.createElement("p");
        note.className = "gtd-item__note";
        note.textContent = project.note;
        row.appendChild(note);
      }

      if (relatedTasks.length > 0) {
        const relatedList = document.createElement("ul");
        relatedList.className = "gtd-linked-list";

        relatedTasks.forEach(({ section, task }) => {
          const item = document.createElement("li");
          item.textContent = `${task.title} · ${section.title} · ${getTaskContextLabel(task.context)}`;
          relatedList.appendChild(item);
        });

        row.appendChild(relatedList);
      }

      const controls = document.createElement("div");
      controls.className = "gtd-item__controls";

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "tiny-btn";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        const nextTitle = prompt("Edit project title", project.title);

        if (typeof nextTitle !== "string") {
          return;
        }

        const trimmedTitle = nextTitle.trim();

        if (!trimmedTitle) {
          return;
        }

        const nextNote = prompt("Edit project note", project.note || "");

        project.title = trimmedTitle;
        project.note = typeof nextNote === "string" ? nextNote.trim() : project.note;
        saveState();
        renderApp();
      });

      const trashButton = document.createElement("button");
      trashButton.type = "button";
      trashButton.className = "tiny-btn is-danger";
      trashButton.textContent = "Trash";
      trashButton.addEventListener("click", () => {
        discardProject(project.id);
        saveState();
        renderApp();
      });

      controls.appendChild(editButton);
      controls.appendChild(trashButton);
      row.appendChild(controls);
      projectList.appendChild(row);
    });
  };

  const renderSomedayList = () => {
    somedayList.innerHTML = "";

    if (appState.somedayItems.length === 0) {
      somedayList.appendChild(createEmptyState("Keep low-commitment ideas here so they stay visible without becoming current work."));
      return;
    }

    appState.somedayItems.forEach(item => {
      const row = document.createElement("li");
      row.className = "gtd-item";

      const top = document.createElement("div");
      top.className = "gtd-item__top";

      const title = document.createElement("strong");
      title.textContent = item.title;

      const meta = document.createElement("span");
      meta.className = "gtd-item__meta";
      meta.textContent = `Saved ${formatShortDate(item.createdAt)}`;

      top.appendChild(title);
      top.appendChild(meta);
      row.appendChild(top);

      if (item.note) {
        const note = document.createElement("p");
        note.className = "gtd-item__note";
        note.textContent = item.note;
        row.appendChild(note);
      }

      const controls = document.createElement("div");
      controls.className = "gtd-item__controls";

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "tiny-btn";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        const nextTitle = prompt("Edit someday / maybe title", item.title);

        if (typeof nextTitle !== "string") {
          return;
        }

        const trimmedTitle = nextTitle.trim();

        if (!trimmedTitle) {
          return;
        }

        const nextNote = prompt("Edit someday / maybe note", item.note || "");

        item.title = trimmedTitle;
        item.note = typeof nextNote === "string" ? nextNote.trim() : item.note;
        saveState();
        renderApp();
      });

      const trashButton = document.createElement("button");
      trashButton.type = "button";
      trashButton.className = "tiny-btn is-danger";
      trashButton.textContent = "Trash";
      trashButton.addEventListener("click", () => {
        discardSomedayItem(item.id);
        saveState();
        renderApp();
      });

      controls.appendChild(editButton);
      controls.appendChild(trashButton);
      row.appendChild(controls);
      somedayList.appendChild(row);
    });
  };

  const renderReferenceList = () => {
    referenceList.innerHTML = "";

    if (appState.referenceItems.length === 0) {
      referenceList.appendChild(createEmptyState("Reference is for information only. Add notes or links that should stay out of your task system."));
      return;
    }

    appState.referenceItems.forEach(item => {
      const row = document.createElement("li");
      row.className = "gtd-item";

      const top = document.createElement("div");
      top.className = "gtd-item__top";

      const title = document.createElement("strong");
      title.textContent = item.title;

      const meta = document.createElement("span");
      meta.className = "gtd-item__meta";
      meta.textContent = item.link || "Reference note";

      top.appendChild(title);
      top.appendChild(meta);
      row.appendChild(top);

      if (item.note) {
        const note = document.createElement("p");
        note.className = "gtd-item__note";
        note.textContent = item.note;
        row.appendChild(note);
      }

      if (item.link) {
        const link = document.createElement("a");
        link.className = "gtd-reference-link";
        link.href = getReferenceHref(item.link);
        link.target = "_blank";
        link.rel = "noreferrer noopener";
        link.textContent = item.link;
        row.appendChild(link);
      }

      const controls = document.createElement("div");
      controls.className = "gtd-item__controls";

      const editButton = document.createElement("button");
      editButton.type = "button";
      editButton.className = "tiny-btn";
      editButton.textContent = "Edit";
      editButton.addEventListener("click", () => {
        const nextTitle = prompt("Edit reference title", item.title);

        if (typeof nextTitle !== "string") {
          return;
        }

        const trimmedTitle = nextTitle.trim();

        if (!trimmedTitle) {
          return;
        }

        const nextLink = prompt("Edit reference link", item.link || "");
        const nextNote = prompt("Edit reference note", item.note || "");

        item.title = trimmedTitle;
        item.link = typeof nextLink === "string" ? nextLink.trim() : item.link;
        item.note = typeof nextNote === "string" ? nextNote.trim() : item.note;
        saveState();
        renderApp();
      });

      const trashButton = document.createElement("button");
      trashButton.type = "button";
      trashButton.className = "tiny-btn is-danger";
      trashButton.textContent = "Trash";
      trashButton.addEventListener("click", () => {
        discardReferenceItem(item.id);
        saveState();
        renderApp();
      });

      controls.appendChild(editButton);
      controls.appendChild(trashButton);
      row.appendChild(controls);
      referenceList.appendChild(row);
    });
  };

  const renderTrashList = () => {
    trashList.innerHTML = "";

    if (appState.trashItems.length === 0) {
      trashList.appendChild(createEmptyState("Trash is empty. Discarded GTD items and deleted action tasks can sit here temporarily before final cleanup."));
      return;
    }

    [...appState.trashItems]
      .sort((left, right) => new Date(right.discardedAt) - new Date(left.discardedAt))
      .forEach(item => {
        const row = document.createElement("li");
        row.className = "gtd-item";

        const top = document.createElement("div");
        top.className = "gtd-item__top";

        const title = document.createElement("strong");
        title.textContent = item.title;

        const meta = document.createElement("span");
        meta.className = "gtd-item__meta";
        meta.textContent = `${getTrashKindLabel(item.kind)}${item.detail ? ` · ${item.detail}` : ""}`;

        top.appendChild(title);
        top.appendChild(meta);
        row.appendChild(top);

        const note = document.createElement("p");
        note.className = "gtd-item__note";
        note.textContent = `Discarded ${formatShortDate(item.discardedAt)}`;
        row.appendChild(note);

        const controls = document.createElement("div");
        controls.className = "gtd-item__controls";

        const restoreButton = document.createElement("button");
        restoreButton.type = "button";
        restoreButton.className = "tiny-btn";
        restoreButton.textContent = "Restore";
        restoreButton.addEventListener("click", () => {
          restoreTrashItem(item.id);
          saveState();
          renderApp();
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "tiny-btn is-danger";
        deleteButton.textContent = "Delete forever";
        deleteButton.addEventListener("click", () => {
          appState.trashItems = appState.trashItems.filter(entry => entry.id !== item.id);
          saveState();
          renderApp();
        });

        controls.appendChild(restoreButton);
        controls.appendChild(deleteButton);
        row.appendChild(controls);
        trashList.appendChild(row);
      });
  };

  renderInboxList();
  renderContextGroups();
  renderWaitingList();
  renderProjectList();
  renderSomedayList();
  renderReferenceList();
  renderTrashList();

  document.getElementById("gtdInboxForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("gtdInboxInput");
    const title = input.value.trim();

    if (!title) {
      return;
    }

    appState.inboxItems.unshift(createInboxItem(title));
    input.value = "";
    saveState();
    renderApp();
  });

  document.getElementById("contextTaskForm").addEventListener("submit", event => {
    event.preventDefault();

    const titleInput = document.getElementById("contextTaskTitleInput");
    const title = titleInput.value.trim();

    if (!title) {
      return;
    }

    const result = addActionTask({
      title,
      sectionId: document.getElementById("contextTaskSectionSelect").value,
      context: document.getElementById("contextTaskContextSelect").value,
      projectId: document.getElementById("contextTaskProjectSelect").value
    });

    if (result.error) {
      alert(result.error);
      return;
    }

    event.target.reset();
    saveState();
    renderApp();
  });

  document.getElementById("waitingForm").addEventListener("submit", event => {
    event.preventDefault();

    const titleInput = document.getElementById("waitingTitleInput");
    const personInput = document.getElementById("waitingPersonInput");
    const noteInput = document.getElementById("waitingNoteInput");
    const dateInput = document.getElementById("waitingDateInput");
    const selectedStatus = document.getElementById("waitingStatusSelect").value;
    const title = titleInput.value.trim();
    const person = personInput.value.trim();

    if (!title || !person) {
      return;
    }

    appState.waitingItems.unshift(
      createWaitingItem({
        title,
        person,
        status: selectedStatus,
        dueDate: dateInput.value,
        note: noteInput.value.trim()
      })
    );

    event.target.reset();
    document.getElementById("waitingStatusSelect").value = "Waiting";
    saveState();
    renderApp();
  });

  document.getElementById("gtdProjectForm").addEventListener("submit", event => {
    event.preventDefault();
    const titleInput = document.getElementById("gtdProjectTitleInput");
    const noteInput = document.getElementById("gtdProjectNoteInput");
    const title = titleInput.value.trim();

    if (!title) {
      return;
    }

    appState.projects.unshift(
      createProject({
        title,
        note: noteInput.value.trim()
      })
    );

    event.target.reset();
    saveState();
    renderApp();
  });

  document.getElementById("gtdSomedayForm").addEventListener("submit", event => {
    event.preventDefault();
    const titleInput = document.getElementById("gtdSomedayTitleInput");
    const noteInput = document.getElementById("gtdSomedayNoteInput");
    const title = titleInput.value.trim();

    if (!title) {
      return;
    }

    appState.somedayItems.unshift(
      createSomedayItem({
        title,
        note: noteInput.value.trim()
      })
    );

    event.target.reset();
    saveState();
    renderApp();
  });

  document.getElementById("gtdReferenceForm").addEventListener("submit", event => {
    event.preventDefault();
    const titleInput = document.getElementById("gtdReferenceTitleInput");
    const linkInput = document.getElementById("gtdReferenceLinkInput");
    const noteInput = document.getElementById("gtdReferenceNoteInput");
    const title = titleInput.value.trim();

    if (!title) {
      return;
    }

    appState.referenceItems.unshift(
      createReferenceItem({
        title,
        link: linkInput.value.trim(),
        note: noteInput.value.trim()
      })
    );

    event.target.reset();
    saveState();
    renderApp();
  });

  document.getElementById("emptyTrashBtn").addEventListener("click", () => {
    if (appState.trashItems.length === 0) {
      return;
    }

    const confirmed = confirm("Delete every item in Trash permanently?");

    if (!confirmed) {
      return;
    }

    appState.trashItems = [];
    saveState();
    renderApp();
  });

  upgradeGtdSelects(viewRoot);
  upgradeCustomDatePickers(viewRoot);
}

function renderSettings() {
  viewRoot.innerHTML = `
    <section class="settings-view">
      <div class="settings-section">
        <div class="settings-section__header">
          <p class="eyebrow">Storage</p>
          <h2 class="panel-title">Data Backup</h2>
          <p class="panel-subtitle">Create timestamped JSON backups before major changes, then restore from a previous backup when needed.</p>
        </div>
        <p class="settings-backup-help">For safer recovery, keep downloaded backup files in a dedicated backup folder on your device.</p>
        <div class="settings-meta-row">
          <p class="storage-panel__last-saved" id="lastSavedStamp">No local save timestamp yet</p>
          <p class="storage-panel__status" id="backupStatus" data-tone="info">Export a JSON backup or import one to restore your current data.</p>
        </div>
        <div class="settings-actions">
          <button type="button" id="settingsBackupNowBtn" class="primary-btn">Backup now</button>
          <button type="button" id="settingsExportBtn" class="secondary-btn">Export JSON backup</button>
          <button type="button" id="settingsImportBtn" class="secondary-btn">Import JSON backup</button>
        </div>
        <div class="settings-backup-mode-note">
          <p class="settings-backup-mode-note__title">Automatic backups</p>
          <p class="settings-backup-mode-note__copy">Hourly and daily local-folder backups are not available in this browser-style runtime. Use <strong>Backup now</strong> before risky changes and keep those downloaded files in your backup folder.</p>
        </div>
        <div class="settings-history-panel">
          <div class="settings-history-panel__header">
            <h3 class="settings-history-panel__title">Backup History</h3>
            <p class="settings-history-panel__subtitle">Session-only history of backups created from this Settings panel.</p>
          </div>
          <ul class="settings-history-list" id="backupHistoryList" hidden></ul>
          <p class="settings-history-empty" id="backupHistoryEmpty">No backups created in this session yet.</p>
        </div>
      </div>
      <div class="settings-section settings-section--danger">
        <div class="settings-section__header">
          <p class="eyebrow">Danger Zone</p>
          <h2 class="panel-title">Clear Budget + Planner Content</h2>
          <p class="panel-subtitle">Remove user-entered items from Budget Categories and Planner while keeping category/section structure and all other PersonalDock data unchanged.</p>
        </div>
        <div class="settings-actions">
          <button type="button" id="settingsResetBtn" class="ghost-btn">Clear budget + planner content</button>
        </div>
      </div>
    </section>
  `;

  updateStorageBackupPanel();

  document.getElementById("settingsBackupNowBtn").addEventListener("click", () => {
    downloadJsonBackup({
      backupType: "manual",
      statusMessage: "Backup created."
    });
  });

  document.getElementById("settingsExportBtn").addEventListener("click", () => {
    downloadJsonBackup({
      backupType: "export"
    });
  });

  document.getElementById("settingsImportBtn").addEventListener("click", () => {
    importJsonInput.click();
  });

  document.getElementById("settingsResetBtn").addEventListener("click", () => {
    const confirmed = confirm("Clear all Budget Category items and Planner entries?\n\nThis keeps your categories, planner sections, and all other PersonalDock data unchanged.\n\nAre you sure?");

    if (!confirmed) {
      return;
    }

    try {
      clearBudgetAndPlannerContentOnly();
    } catch (error) {
      console.error(error);
      alert("Unable to clear budget and planner content safely. No changes were saved.");
      return;
    }

    saveState();
    renderApp();
  });
}

function renderBudgetSidebar() {
  const list = document.getElementById("budgetCategoryList");
  const allEntries = getBudgetEntries("all");

  const allItem = document.createElement("li");
  allItem.className = "sidebar-list__item";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = `sidebar-btn ${uiState.selectedBudgetCategory === "all" ? "is-active" : ""}`;
  allButton.innerHTML = `<strong>All Spending</strong><span>${allEntries.length} items</span>`;
  allButton.addEventListener("click", () => {
    setBudgetCategory("all");
  });

  allItem.appendChild(allButton);
  list.appendChild(allItem);

  appState.budgetCategories.forEach(category => {
    const item = document.createElement("li");
    item.className = "sidebar-list__item planner-section-item budget-sidebar-section-item";
    item.dataset.categoryId = category.id;
    item.draggable = true;

    const row = document.createElement("div");
    row.className = "planner-sidebar-row";

    const dragHandle = document.createElement("span");
    dragHandle.className = "planner-section__drag-handle";
    dragHandle.setAttribute("aria-hidden", "true");
    dragHandle.setAttribute("title", "Drag to reorder section");
    dragHandle.textContent = "\u2807";

    const button = document.createElement("button");
    button.type = "button";
    button.className = `sidebar-btn ${category.id === uiState.selectedBudgetCategory ? "is-active" : ""}`;
    button.innerHTML = `<strong>${category.title}</strong><span>${category.items.length} items · ${formatBudgetSplitTotalDisplay(getSplitCurrencyTotalsFromBudgetItems(category.items))}</span>`;
    button.addEventListener("click", () => {
      setBudgetCategory(category.id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "icon-btn";
    deleteButton.textContent = "\u00d7";
    deleteButton.setAttribute("title", `Delete \"${category.title}\"`);
    deleteButton.setAttribute("aria-label", `Delete section ${category.title}`);
    deleteButton.addEventListener("click", () => {
      const itemCount = category.items.length;
      const itemLabel = itemCount === 1 ? "1 item" : `${itemCount} items`;
      const confirmation = itemCount > 0
        ? `Delete "${category.title}" and permanently delete its ${itemLabel}?`
        : `Delete "${category.title}"?`;

      if (!confirm(confirmation)) {
        return;
      }

      const deletionResult = deleteBudgetCategory(category.id);

      if (!deletionResult) {
        return;
      }

      saveState();
      renderApp();
    });

    row.appendChild(dragHandle);
    row.appendChild(button);
    row.appendChild(deleteButton);
    item.appendChild(row);
    list.appendChild(item);
  });

  {
    let dragCategoryId = null;

    function getBudgetCategoryLi(el) {
      while (el && (!el.classList || !el.classList.contains("budget-sidebar-section-item"))) el = el.parentElement;
      return el;
    }

    list.addEventListener("dragstart", event => {
      const li = getBudgetCategoryLi(event.target);
      if (!li) return;
      dragCategoryId = li.dataset.categoryId;
      li.classList.add("planner-section-item--dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", dragCategoryId);
    });

    list.addEventListener("dragend", event => {
      const li = getBudgetCategoryLi(event.target);
      if (li) li.classList.remove("planner-section-item--dragging");
      list.querySelectorAll(".planner-section-item--drag-over").forEach(el =>
        el.classList.remove("planner-section-item--drag-over")
      );
      dragCategoryId = null;
    });

    list.addEventListener("dragover", event => {
      const li = getBudgetCategoryLi(event.target);
      if (!li || li.dataset.categoryId === dragCategoryId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      list.querySelectorAll(".planner-section-item--drag-over").forEach(el =>
        el.classList.remove("planner-section-item--drag-over")
      );
      li.classList.add("planner-section-item--drag-over");
    });

    list.addEventListener("dragleave", event => {
      const li = getBudgetCategoryLi(event.target);
      if (li) li.classList.remove("planner-section-item--drag-over");
    });

    list.addEventListener("drop", event => {
      event.preventDefault();
      const targetLi = getBudgetCategoryLi(event.target);
      if (!targetLi || !dragCategoryId) return;

      const targetCategoryId = targetLi.dataset.categoryId;
      if (targetCategoryId === dragCategoryId) return;

      const reordered = [...appState.budgetCategories];
      const fromIndex = reordered.findIndex(category => category.id === dragCategoryId);
      const toIndex = reordered.findIndex(category => category.id === targetCategoryId);
      if (fromIndex === -1 || toIndex === -1) return;

      reordered.splice(toIndex, 0, reordered.splice(fromIndex, 1)[0]);
      appState.budgetCategories = reordered;

      saveState();
      renderApp();
    });
  }
}

function renderBudgetCategoryManager() {
  const list = document.getElementById("budgetCategoryManagerList");

  if (!list) {
    return;
  }

  if (appState.budgetCategories.length === 0) {
    list.appendChild(createEmptyState("No categories yet. Create one above to start organizing your budget."));
    return;
  }

  appState.budgetCategories.forEach(category => {
    const item = document.createElement("li");
    const copy = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("p");
    const actions = document.createElement("div");
    const deleteButton = document.createElement("button");
    const deletionCopy = getBudgetCategoryDeletionCopy(category);
    const total = getSplitCurrencyTotalsFromBudgetItems(category.items);
    const itemLabel = category.items.length === 1 ? "1 item" : `${category.items.length} items`;

    item.className = "budget-category-manager__item";
    copy.className = "budget-category-manager__copy";
    title.textContent = category.title;
    meta.className = "budget-category-manager__meta";
    meta.textContent = `${itemLabel} · ${formatBudgetSplitTotalDisplay(total)} · ${deletionCopy.detail}`;

    actions.className = "budget-category-manager__actions";
    deleteButton.type = "button";
    deleteButton.className = "tiny-btn is-danger";
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("aria-label", `Delete ${category.title}`);
    deleteButton.addEventListener("click", () => {
      const confirmed = confirm(deletionCopy.confirmMessage);

      if (!confirmed) {
        return;
      }

      const deletionResult = deleteBudgetCategory(category.id);

      if (!deletionResult) {
        return;
      }

      saveState();
      renderApp();
    });

    copy.append(title, meta);
    actions.appendChild(deleteButton);
    item.append(copy, actions);
    list.appendChild(item);
  });
}

function populateBudgetForm(editorTarget) {
  const categorySelect = document.getElementById("budgetCategorySelect");
  const titleInput = document.getElementById("budgetTitleInput");
  const amountInput = document.getElementById("budgetAmountInput");
  const submitButton = document.querySelector("#budgetForm button[type='submit']");

  // Always upgrade the currency selector regardless of category state
  const currencySelectEl = document.getElementById("budgetCurrencySelect");
  if (currencySelectEl) buildGtdCustomSelect(currencySelectEl);

  if (appState.budgetCategories.length === 0) {
    const option = document.createElement("option");

    option.value = "";
    option.textContent = "Create a category first";
    categorySelect.appendChild(option);
    categorySelect.disabled = true;
    titleInput.disabled = true;
    amountInput.disabled = true;
    submitButton.disabled = true;
    return;
  }

  titleInput.disabled = false;
  amountInput.disabled = false;
  submitButton.disabled = false;
  categorySelect.disabled = false;

  appState.budgetCategories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.title;
    categorySelect.appendChild(option);
  });

  const fallbackCategoryId = getBudgetCategoryById(DEFAULT_BUDGET_CATEGORY_ID)?.id || appState.budgetCategories[0]?.id || "";
  const preferredCategory = editorTarget?.category.id || (uiState.selectedBudgetCategory === "all" ? fallbackCategoryId : uiState.selectedBudgetCategory);
  categorySelect.value = preferredCategory;

  if (uiState.selectedBudgetCategory !== "all") {
    categorySelect.disabled = true;
  }

  if (editorTarget) {
    document.getElementById("budgetTitleInput").value = editorTarget.item.title;
    document.getElementById("budgetAmountInput").value = editorTarget.item.amount;
    const currSel = document.getElementById("budgetCurrencySelect");
    if (currSel) {
      currSel.value = normalizeBudgetCurrency(editorTarget.item.currency || "USD");
      // Fire change so the custom-select widget label updates
      currSel.dispatchEvent(new Event("change", { bubbles: true }));
    }
    categorySelect.value = editorTarget.category.id;
  }
}

function renderBudgetList(entries) {
  const budgetList = document.getElementById("budgetList");

  if (entries.length === 0) {
    budgetList.appendChild(createEmptyState(
      appState.budgetCategories.length === 0
        ? "Create a budget category to start adding items."
        : "This category is empty. Add a budget item to get started."
    ));
    return;
  }

  // ── Drag-and-drop state ──────────────────────────────────────────────────
  let dragSrcId = null;

  function getDragLi(el) {
    // Walk up to find the .budget-item li
    while (el && (!el.classList || !el.classList.contains("budget-item"))) el = el.parentElement;
    return el;
  }

  budgetList.addEventListener("dragstart", e => {
    const li = getDragLi(e.target);
    if (!li) return;
    dragSrcId = li.dataset.itemId;
    li.classList.add("budget-item--dragging");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", dragSrcId);
  });

  budgetList.addEventListener("dragend", e => {
    const li = getDragLi(e.target);
    if (li) li.classList.remove("budget-item--dragging");
    budgetList.querySelectorAll(".budget-item--drag-over").forEach(el =>
      el.classList.remove("budget-item--drag-over")
    );
    dragSrcId = null;
  });

  budgetList.addEventListener("dragover", e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    const li = getDragLi(e.target);
    if (!li || li.dataset.itemId === dragSrcId) return;
    budgetList.querySelectorAll(".budget-item--drag-over").forEach(el =>
      el.classList.remove("budget-item--drag-over")
    );
    li.classList.add("budget-item--drag-over");
  });

  budgetList.addEventListener("dragleave", e => {
    const li = getDragLi(e.target);
    if (li) li.classList.remove("budget-item--drag-over");
  });

  budgetList.addEventListener("drop", e => {
    e.preventDefault();
    const targetLi = getDragLi(e.target);
    if (!targetLi || !dragSrcId) return;
    const targetId = targetLi.dataset.itemId;
    if (targetId === dragSrcId) return;

    if (uiState.selectedBudgetCategory === "all") {
      const orderedIds = entries.map(entry => entry.item.id);
      const fromIndex = orderedIds.indexOf(dragSrcId);
      const toIndex = orderedIds.indexOf(targetId);

      if (fromIndex === -1 || toIndex === -1) {
        return;
      }

      const [movedId] = orderedIds.splice(fromIndex, 1);
      orderedIds.splice(toIndex, 0, movedId);

      const itemMap = new Map();
      appState.budgetCategories.forEach(category => {
        category.items.forEach(item => {
          itemMap.set(item.id, item);
        });
      });

      orderedIds.forEach((itemId, index) => {
        const item = itemMap.get(itemId);
        if (item) {
          item.sortOrder = index;
        }
      });

      saveState();
      renderApp();
      return;
    }

    // Locate both items in their categories
    const srcEntry  = entries.find(en => en.item.id === dragSrcId);
    const destEntry = entries.find(en => en.item.id === targetId);
    if (!srcEntry || !destEntry) return;

    const srcCat  = srcEntry.category;
    const destCat = destEntry.category;

    if (srcCat.id !== destCat.id) return;

    // Same category — simple in-place reorder
    const items = srcCat.items;
    const fromIdx = items.findIndex(it => it.id === dragSrcId);
    const toIdx   = items.findIndex(it => it.id === targetId);
    if (fromIdx === -1 || toIdx === -1) return;
    items.splice(toIdx, 0, items.splice(fromIdx, 1)[0]);

    saveState();
    renderApp();
  });
  // ── End drag-and-drop ────────────────────────────────────────────────────

  entries.forEach(({ category, item }) => {
    const row = budgetItemTemplate.content.cloneNode(true);
    const budgetItem = row.querySelector(".budget-item");
    const checkbox = row.querySelector(".budget-item__check");
    const title = row.querySelector(".budget-item__title");
    const meta = row.querySelector(".budget-item__meta");
    const copy = row.querySelector(".budget-item__copy");
    const amount = row.querySelector(".budget-item__amount");
    const editButton = row.querySelector(".edit-item-btn");
    const deleteButton = row.querySelector(".delete-item-btn");
    const expandButton = row.querySelector(".budget-item__expand-btn");
    const detailsPanel = row.querySelector(".budget-item__details-panel");

    const notePreview = document.createElement("span");
    notePreview.className = "budget-item__note";
    copy.insertBefore(notePreview, meta);

    budgetItem.draggable = true;
    budgetItem.dataset.itemId = item.id;
    budgetItem.classList.toggle("is-checked", item.checked);
    checkbox.checked = item.checked;
    title.textContent = item.title;
    meta.textContent = uiState.selectedBudgetCategory === "all" ? category.title : "";
    meta.hidden = !meta.textContent;
    amount.textContent = formatBudgetAmount(item.amount, item.currency || "USD");

    function refreshNotePreview() {
      const noteText = typeof item.itemNote === "string" ? item.itemNote.trim() : "";
      notePreview.textContent = noteText;
      notePreview.hidden = !noteText;
    }

    function itemHasDetails() {
      return Boolean(item.itemNote) || (item.reminders || []).length > 0 || (item.checklist || []).length > 0;
    }

    function refreshExpandIndicator() {
      expandButton.classList.toggle("has-details", itemHasDetails());
    }

    function refreshBudgetItemRowState() {
      refreshExpandIndicator();
      refreshNotePreview();
    }

    refreshBudgetItemRowState();

    checkbox.addEventListener("change", () => {
      item.checked = checkbox.checked;
      saveState();
      renderApp();
    });

    editButton.addEventListener("click", () => {
      uiState.budgetEditorId = item.id;
      renderApp();
    });

    deleteButton.addEventListener("click", () => {
      if (!confirm(`Delete "${item.title}"?`)) return;
      category.items = category.items.filter(entry => entry.id !== item.id);

      if (uiState.budgetEditorId === item.id) {
        uiState.budgetEditorId = null;
      }

      saveState();
      renderApp();
    });

    expandButton.addEventListener("click", () => {
      const opening = !detailsPanel.classList.contains("is-visible");
      if (opening && !detailsPanel.dataset.built) {
        buildBudgetItemDetails(detailsPanel, item, refreshBudgetItemRowState);
        detailsPanel.dataset.built = "1";
      }
      detailsPanel.classList.toggle("is-visible", opening);
      expandButton.setAttribute("aria-expanded", String(opening));
      expandButton.classList.toggle("is-open", opening);
    });

    budgetList.appendChild(row);
  });
}

function buildBudgetItemDetails(panel, item, onChanged) {
  panel.innerHTML = "";

  // ── Note ─────────────────────────────────────────────
  const noteGroup = document.createElement("div");
  noteGroup.className = "bid-group";

  const noteLabel = document.createElement("label");
  noteLabel.className = "bid-label";
  noteLabel.textContent = "Note";
  noteLabel.htmlFor = `bid-note-${item.id}`;

  const noteTextarea = document.createElement("textarea");
  noteTextarea.id = `bid-note-${item.id}`;
  noteTextarea.className = "bid-note";
  noteTextarea.rows = 2;
  noteTextarea.placeholder = "Add notes, extra context, or details\u2026";
  noteTextarea.maxLength = 500;
  noteTextarea.value = item.itemNote || "";

  noteTextarea.addEventListener("input", () => {
    item.itemNote = noteTextarea.value;
    saveState();
    onChanged();
  });

  noteGroup.appendChild(noteLabel);
  noteGroup.appendChild(noteTextarea);
  panel.appendChild(noteGroup);

  // ── Reminders ─────────────────────────────────────────
  const remGroup = document.createElement("div");
  remGroup.className = "bid-group";

  const remLabel = document.createElement("span");
  remLabel.className = "bid-label";
  remLabel.textContent = "Reminders";

  const remList = document.createElement("ul");
  remList.className = "bid-sublist";

  function renderReminders() {
    remList.innerHTML = "";
    if (!Array.isArray(item.reminders)) item.reminders = [];
    item.reminders.forEach((reminder, idx) => {
      const li = document.createElement("li");
      li.className = "bid-sublist__item";

      const span = document.createElement("span");
      span.className = "bid-sublist__text";
      span.textContent = reminder.text;

      const del = document.createElement("button");
      del.type = "button";
      del.className = "bid-sublist__del";
      del.textContent = "\u00d7";
      del.setAttribute("aria-label", `Remove "${reminder.text}"`);
      del.addEventListener("click", () => {
        item.reminders = item.reminders.filter((_, i) => i !== idx);
        saveState();
        renderReminders();
        onChanged();
      });

      li.appendChild(span);
      li.appendChild(del);
      remList.appendChild(li);
    });
  }

  renderReminders();

  const remAddRow = document.createElement("div");
  remAddRow.className = "bid-addrow";

  const remInput = document.createElement("input");
  remInput.type = "text";
  remInput.className = "bid-addrow__input";
  remInput.placeholder = "Add reminder\u2026";
  remInput.maxLength = 200;

  const remAddBtn = document.createElement("button");
  remAddBtn.type = "button";
  remAddBtn.className = "bid-addrow__btn";
  remAddBtn.textContent = "Add";

  function addReminder() {
    const val = remInput.value.trim();
    if (!val) return;
    if (!Array.isArray(item.reminders)) item.reminders = [];
    item.reminders.push({ id: createId(), text: val });
    remInput.value = "";
    saveState();
    renderReminders();
    onChanged();
    remInput.focus();
  }

  remAddBtn.addEventListener("click", addReminder);
  remInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); addReminder(); }
  });

  remAddRow.appendChild(remInput);
  remAddRow.appendChild(remAddBtn);
  remGroup.appendChild(remLabel);
  remGroup.appendChild(remList);
  remGroup.appendChild(remAddRow);
  panel.appendChild(remGroup);

  // ── Checklist ─────────────────────────────────────────
  const clGroup = document.createElement("div");
  clGroup.className = "bid-group";

  const clLabel = document.createElement("span");
  clLabel.className = "bid-label";
  clLabel.textContent = "Checklist";

  const clList = document.createElement("ul");
  clList.className = "bid-sublist";

  function renderChecklist() {
    clList.innerHTML = "";
    if (!Array.isArray(item.checklist)) item.checklist = [];
    item.checklist.forEach((todo, idx) => {
      const li = document.createElement("li");
      li.className = "bid-sublist__item";
      li.classList.toggle("is-done", todo.done);

      const check = document.createElement("input");
      check.type = "checkbox";
      check.checked = todo.done;
      check.className = "bid-check";
      check.addEventListener("change", () => {
        todo.done = check.checked;
        li.classList.toggle("is-done", todo.done);
        saveState();
      });

      const span = document.createElement("span");
      span.className = "bid-sublist__text";
      span.textContent = todo.title;

      const del = document.createElement("button");
      del.type = "button";
      del.className = "bid-sublist__del";
      del.textContent = "\u00d7";
      del.setAttribute("aria-label", `Remove "${todo.title}"`);
      del.addEventListener("click", () => {
        item.checklist = item.checklist.filter((_, i) => i !== idx);
        saveState();
        renderChecklist();
        onChanged();
      });

      li.appendChild(check);
      li.appendChild(span);
      li.appendChild(del);
      clList.appendChild(li);
    });
  }

  renderChecklist();

  const clAddRow = document.createElement("div");
  clAddRow.className = "bid-addrow";

  const clInput = document.createElement("input");
  clInput.type = "text";
  clInput.className = "bid-addrow__input";
  clInput.placeholder = "Add checklist item\u2026";
  clInput.maxLength = 200;

  const clAddBtn = document.createElement("button");
  clAddBtn.type = "button";
  clAddBtn.className = "bid-addrow__btn";
  clAddBtn.textContent = "Add";

  function addChecklistItem() {
    const val = clInput.value.trim();
    if (!val) return;
    if (!Array.isArray(item.checklist)) item.checklist = [];
    item.checklist.push({ id: createId(), title: val, done: false });
    clInput.value = "";
    saveState();
    renderChecklist();
    onChanged();
    clInput.focus();
  }

  clAddBtn.addEventListener("click", addChecklistItem);
  clInput.addEventListener("keydown", e => {
    if (e.key === "Enter") { e.preventDefault(); addChecklistItem(); }
  });

  clAddRow.appendChild(clInput);
  clAddRow.appendChild(clAddBtn);
  clGroup.appendChild(clLabel);
  clGroup.appendChild(clList);
  clGroup.appendChild(clAddRow);
  panel.appendChild(clGroup);
}

function createEmptyState(message) {
  const item = document.createElement("li");
  item.className = "empty-state";
  item.textContent = message;
  return item;
}

/**
 * Converts a limited subset of Markdown inline syntax to safe HTML.
 * Supported: **bold**, *italic*  (no nested tags, no raw HTML pass-through).
 * All other text is HTML-escaped to prevent XSS.
 */
function renderInlineMarkdown(text) {
  // Escape HTML special chars first so user input can never inject markup.
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  // Bold: **text** (must come before italic so ** isn't mis-parsed as *)
  const withBold = escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Italic: *text*  (single asterisk, not already consumed by bold)
  const withItalic = withBold.replace(/\*([^*\n]+?)\*/g, "<em>$1</em>");

  return withItalic;
}

viewNav.addEventListener("click", event => {
  const button = event.target.closest(".nav-btn");

  if (!button) {
    return;
  }

  setActiveView(button.dataset.view);
});

importJsonInput.addEventListener("change", async event => {
  const [file] = event.target.files || [];

  if (!file) {
    return;
  }

  const confirmed = confirm("Restore this backup? A pre-restore backup of your current data should be created first.");

  if (!confirmed) {
    event.target.value = "";
    return;
  }

  let preRestoreFileName = "";

  try {
    preRestoreFileName = downloadJsonBackup({
      backupType: "pre-restore",
      statusMessage: null
    });
  } catch (error) {
    setBackupStatus("Could not create a pre-restore backup. Restore was cancelled.", "error");
    event.target.value = "";
    return;
  }

  try {
    await importJsonBackup(file);
    recordBackupHistoryEntry({
      type: "restore",
      fileName: file.name,
      note: preRestoreFileName
        ? `Pre-restore backup: ${preRestoreFileName}`
        : ""
    });
    setBackupStatus("Backup restored.", "success");
  } catch (error) {
    setBackupStatus(error instanceof Error ? error.message : "The backup could not be imported.", "error");
  } finally {
    event.target.value = "";
  }
});

initializeSidebarAutoReveal();

renderApp();

// ── Desktop app integration (pywebview) ──────────────────────────────────────
// When running via app.py, pywebview fires 'pywebviewready' once its JS bridge
// is ready. We then load the saved data from disk and re-render the app.
// This overrides the localStorage snapshot with the persistent file-based one.
// Data file location: ~/Library/Application Support/dock/data.json
window.addEventListener("pywebviewready", () => {
  window.pywebview.api.load_data().then(data => {
    if (data && typeof data === "object") {
      appState = normalizeState(data);
      uiState = {
        activeView: data.activeView || DEFAULT_VIEW,
        selectedBudgetCategory: data.selectedBudgetCategory || null,
        budgetEditorId: null,
        showBudgetCategoryManager: false,
        selectedBudgetPlanningPeriod: DEFAULT_BUDGET_PLANNING_PERIOD
      };
      renderApp();
    }
  });
});
