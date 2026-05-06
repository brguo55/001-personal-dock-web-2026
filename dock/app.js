const STORAGE_KEY = "northstar-planner-v1";
const LEGACY_ACTION_STORAGE_KEY = "actionboard-v1";
const DEFAULT_VIEW = "actionBoard";
const BACKUP_FORMAT = "personaldock-backup";
const BACKUP_VERSION = 1;

const VIEW_DETAILS = {
  dashboard: "Quickly review today's priorities, budget snapshot, and recent notes.",
  actionBoard: "Organize tasks by energy, urgency, and life context.",
  waitingFor: "Run your GTD capture, context lists, waiting items, projects, reference, and someday lists from one place.",
  budgetPlanner: "Track personal budget items so income, spending, and progress stay visible.",
  planner: "Plan your day, set goals, capture notes, and track short-term plans in one place.",
  promise: "Record commitments and promises you have made to other people.",
  diary: "Write and revisit your daily journal entries.",
  bits: "Capture small fragments, quick thoughts, and scattered everyday life details.",
  calendar: "View and manage your schedule in a monthly calendar.",
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

function itemAmountInUSD(item) {
  const currency = item.currency || "USD";
  return currency === "CNY" ? item.amount * CNY_TO_USD_RATE : item.amount;
}

function formatBudgetAmount(amount, currency) {
  if (currency === "CNY") return cnyFormatter.format(amount || 0);
  return currencyFormatter.format(amount || 0);
}

const viewRoot = document.getElementById("viewRoot");
const actionTemplate = document.getElementById("actionSectionTemplate");
const budgetItemTemplate = document.getElementById("budgetItemTemplate");
const viewNav = document.getElementById("viewNav");
const importJsonInput = document.getElementById("importJsonInput");
const viewDescription = document.getElementById("viewDescription");
const todayStamp = document.getElementById("todayStamp");

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
  justCompletedTaskId: null,  // task id for the fade-in animation in the completed panel
  expandedTaskIds: new Set(),  // task ids whose details panel is open
  selectedPlannerSection: "all"  // planner section filter
};
let backupUiState = {
  message: "Export a JSON backup or import one to restore your current data.",
  tone: "info"
};

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
    currency: currency === "CNY" ? "CNY" : "USD",
    checked,
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

function createCalendarEvent({ title, date, time = "", endTime = "", color = "green", note = "", recurrence = "" }) {
  return { id: createId(), title, date, time, endTime, color, note, recurrence, createdAt: new Date().toISOString() };
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
      recurrence: ["weekly", "monthly"].includes(e?.recurrence) ? e.recurrence : "",
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
    plannerSections: PLANNER_SECTION_DEFINITIONS.map(def => ({
      id: def.id,
      title: def.title,
      items: []
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
            currency: item?.currency === "CNY" ? "CNY" : "USD",
            checked: Boolean(item.checked),
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
    return {
      id: item.id || createId(),
      title,
      done: Boolean(item.done),
      note: typeof item?.note === "string" ? item.note : "",
      checklist,
      createdAt: normalizeTimestamp(item.createdAt) || new Date().toISOString()
    };
  }).filter(Boolean);
}

function normalizePlannerSections(sections) {
  if (!Array.isArray(sections)) {
    return PLANNER_SECTION_DEFINITIONS.map(def => ({
      id: def.id,
      title: def.title,
      items: []
    }));
  }
  return sections.map(section => {
    const id = typeof section?.id === "string" && section.id ? section.id : null;
    const title = typeof section?.title === "string" && section.title.trim() ? section.title.trim() : null;
    if (!id || !title) return null;
    return {
      id,
      title,
      items: normalizePlannerItems(section?.items)
    };
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
  return { id, title, items: [] };
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
  // Data is saved to ~/Library/Application Support/MyGTD/data.json
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
  return appState.actionSections.find(section => section.id === sectionId);
}

function getProjectById(projectId) {
  return appState.projects.find(project => project.id === projectId);
}

function getTaskContextLabel(context) {
  return context || GTD_EMPTY_CONTEXT_LABEL;
}

function getAvailableContexts() {
  const contextSet = new Set(GTD_CONTEXT_OPTIONS);

  appState.actionSections.forEach(section => {
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
  return appState.actionSections.flatMap(section =>
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
  for (const section of appState.actionSections) {
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

  return { section: nextSection, task: taskEntry.task };
}

function discardActionTask(taskId) {
  const taskEntry = findActionTask(taskId);

  if (!taskEntry) {
    return null;
  }

  taskEntry.section.tasks = taskEntry.section.tasks.filter(task => task.id !== taskId);
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

function getBudgetCategoryDeleteTarget(categoryId) {
  if (categoryId !== DEFAULT_BUDGET_CATEGORY_ID) {
    const defaultCategory = getBudgetCategoryById(DEFAULT_BUDGET_CATEGORY_ID);

    if (defaultCategory) {
      return defaultCategory;
    }
  }

  return appState.budgetCategories.find(category => category.id !== categoryId) || null;
}

function getBudgetCategoryDeletionCopy(category) {
  const deleteTarget = getBudgetCategoryDeleteTarget(category.id);

  if (category.items.length === 0) {
    return {
      detail: "This category is empty.",
      confirmMessage: `Delete \"${category.title}\"?`
    };
  }

  const itemLabel = category.items.length === 1 ? "1 item" : `${category.items.length} items`;

  if (deleteTarget) {
    return {
      detail: `${itemLabel} will move to ${deleteTarget.title}.`,
      confirmMessage: `Delete \"${category.title}\"? ${itemLabel} will move to ${deleteTarget.title}.`
    };
  }

  return {
    detail: `${itemLabel} will be permanently deleted because no other category remains.`,
    confirmMessage: `Delete \"${category.title}\"? ${itemLabel} will be permanently deleted because no other category remains.`
  };
}

function deleteBudgetCategory(categoryId) {
  const category = getBudgetCategoryById(categoryId);

  if (!category) {
    return null;
  }

  const moveTarget = getBudgetCategoryDeleteTarget(categoryId);
  const deletedItemCount = category.items.length;

  if (moveTarget && deletedItemCount > 0) {
    moveTarget.items = [...category.items, ...moveTarget.items];
  }

  if (category.items.some(item => item.id === uiState.budgetEditorId)) {
    uiState.budgetEditorId = null;
  }

  appState.budgetCategories = appState.budgetCategories.filter(entry => entry.id !== categoryId);

  if (uiState.selectedBudgetCategory === categoryId) {
    uiState.selectedBudgetCategory = moveTarget ? moveTarget.id : "all";
  }

  return {
    deletedCategoryTitle: category.title,
    movedItemCount: moveTarget ? deletedItemCount : 0,
    deletedItemCount: moveTarget ? 0 : deletedItemCount,
    moveTargetTitle: moveTarget?.title || ""
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

function getBudgetEntries(selectedCategory = uiState.selectedBudgetCategory) {
  if (selectedCategory === "all") {
    return appState.budgetCategories.flatMap(category =>
      category.items.map(item => ({
        category,
        item
      }))
    );
  }

  const category = getBudgetCategoryById(selectedCategory);

  if (!category) {
    return [];
  }

  return category.items.map(item => ({ category, item }));
}

function getActionStats() {
  const tasks = appState.actionSections.flatMap(section => section.tasks);
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

function setBackupStatus(message, tone = "info") {
  backupUiState = { message, tone };
  updateStorageBackupPanel();
}

function updateStorageBackupPanel() {
  const backupStatus = document.getElementById("backupStatus");
  const lastSavedStamp = document.getElementById("lastSavedStamp");

  if (!backupStatus || !lastSavedStamp) {
    return;
  }

  lastSavedStamp.textContent = appState.lastSavedAt
    ? `Last saved ${formatShortDate(appState.lastSavedAt)}`
    : "No local save timestamp yet";
  backupStatus.textContent = backupUiState.message;
  backupStatus.dataset.tone = backupUiState.tone;
}

function buildBackupPayload() {
  return {
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    lastSavedAt: appState.lastSavedAt || null,
    data: getStateSnapshot(appState.lastSavedAt || null)
  };
}

function downloadJsonBackup() {
  const payload = JSON.stringify(buildBackupPayload(), null, 2);
  const fileName = `personaldock-backup-${formatBackupFileDate()}.json`;
  const blob = new Blob([payload], { type: "application/json" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
  setBackupStatus(`Exported ${fileName}.`, "success");
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

  return {
    ...validatedState,
    lastSavedAt: validatedState.lastSavedAt || payload.lastSavedAt || null
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
  const importedState = normalizeState(extractBackupState(parsed));

  appState = importedState;
  uiState = {
    activeView: importedState.activeView,
    selectedBudgetCategory: importedState.selectedBudgetCategory,
    budgetEditorId: null,
    showBudgetCategoryManager: false,
    calendarYear: new Date().getFullYear(),
    calendarMonth: new Date().getMonth(),
    selectedPlannerSection: "all"
  };
  saveState({ touch: false, lastSavedAt: importedState.lastSavedAt });
  renderApp();
  setBackupStatus(`Imported ${file.name}. Current saved data was replaced.`, "success");
}

function setActiveView(view) {
  if (!VIEW_DETAILS[view]) {
    return;
  }

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

function renderApp() {
  todayStamp.textContent = formatDateLabel(new Date());
  viewDescription.textContent = VIEW_DETAILS[uiState.activeView];
  updateStorageBackupPanel();

  Array.from(viewNav.querySelectorAll(".nav-btn")).forEach(button => {
    button.classList.toggle("is-active", button.dataset.view === uiState.activeView);
  });

  viewRoot.innerHTML = "";

  if (uiState.activeView === "dashboard") {
    renderDashboard();
    return;
  }

  if (uiState.activeView === "actionBoard") {
    renderActionBoard();
    return;
  }

  if (uiState.activeView === "waitingFor") {
    renderWaitingFor();
    return;
  }

  if (uiState.activeView === "promise") {
    renderPromise();
    return;
  }

  if (uiState.activeView === "calendar") {
    renderCalendar();
    return;
  }

  if (uiState.activeView === "settings") {
    renderSettings();
    return;
  }

  if (uiState.activeView === "planner") {
    renderPlanner();
    return;
  }

  if (uiState.activeView === "diary") {
    renderDiary();
    return;
  }

  if (uiState.activeView === "bits") {
    renderBits();
    return;
  }

  renderBudgetPlanner();
}

function renderDashboard() {
  const actionStats = getActionStats();
  const budgetStats = getBudgetStats();
  const priorities = getTodaysPriorities();
  const notes = getRecentNotes();

  viewRoot.innerHTML = `
    <section class="dashboard-grid">
      <article class="hero-panel">
        <div class="section-kicker">Today's home page</div>
        <h2 class="hero-title">Keep today calm, visible, and small enough that you can actually finish it well.</h2>
        <p class="hero-copy">
          PersonalDock brings task areas, budget items, and recent notes into one simple front-end workspace for long-term personal use.
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
          <div class="stat-card">
            <span class="stat-label">Budget remaining</span>
            <strong class="stat-value">${formatCurrency(budgetStats.remaining)}</strong>
          </div>
          <div class="stat-card">
            <span class="stat-label">Unmarked items</span>
            <strong class="stat-value">${budgetStats.openItems}</strong>
          </div>
        </div>

        <div class="shortcut-row">
          <button type="button" class="shortcut-btn" data-target-view="actionBoard">Open Action Board</button>
          <button type="button" class="shortcut-btn" data-target-view="budgetPlanner">Open Budget Planner</button>
        </div>
      </article>

      <article class="panel">
        <h2 class="panel-title">Today's priorities</h2>
        <p class="panel-subtitle">Surface the first unfinished items from your most important sections.</p>
        <ul class="priority-list" id="priorityList"></ul>
      </article>

      <article class="panel">
        <h2 class="panel-title">Budget overview</h2>
        <p class="panel-subtitle">Quickly review income, spending, savings, and the current budget plan.</p>
        <div class="budget-summary-cards">
          <div class="budget-summary-card">
            <p>Tracked income</p>
            <strong>${formatCurrency(budgetStats.income)}</strong>
          </div>
          <div class="budget-summary-card">
            <p>Planned spending</p>
            <strong>${formatCurrency(budgetStats.planned)}</strong>
          </div>
          <div class="budget-summary-card">
            <p>Marked amount</p>
            <strong>${formatCurrency(budgetStats.settled)}</strong>
          </div>
          <div class="budget-summary-card">
            <p>Saved or set aside</p>
            <strong>${formatCurrency(budgetStats.savings)}</strong>
          </div>
        </div>
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
  const actionStats = getActionStats();
  const leftColumnSections = appState.actionSections.filter(section => LEFT_COLUMN_SECTION_IDS.includes(section.id));
  const quadrantSections = appState.actionSections.filter(section => QUADRANT_SECTION_IDS.includes(section.id));
  const secondarySections = appState.actionSections.filter(section =>
    ![...LEFT_COLUMN_SECTION_IDS, ...QUADRANT_SECTION_IDS].includes(section.id)
  );

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
              saveState();
            });

            const subDel = document.createElement("button");
            subDel.type = "button";
            subDel.className = "icon-btn";
            subDel.textContent = "x";
            subDel.setAttribute("aria-label", `Delete ${sub.title}`);
            subDel.addEventListener("click", () => {
              task.subtasks = task.subtasks.filter(s => s.id !== sub.id);
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
}

function renderPromise() {
  const promises = appState.promises;
  const openCount = promises.filter(p => !p.done).length;
  viewRoot.innerHTML = `
    <section class="view-panel">
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
          <input id="promiseDateInput" type="date" />
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
}

function renderCalendar() {
  const now = new Date();

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

  const viewMode = uiState.calendarViewMode;  // "week" | "day"
  const todayStr = toISODateString(now);

  // ── constants ─────────────────────────────────────────────────────────────
  const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const DAY_FULL    = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const DAY_SHORT   = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const COLOR_OPTIONS = [
    "green", "rose", "purple", "blue", "teal",
    "lime", "teal-blue", "brown", "slate", "gray"
  ];

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

  function formatRangeTitle(days) {
    if (viewMode === "day") {
      const d = new Date(days[0] + "T12:00:00");
      return `${DAY_FULL[d.getDay()]}, ${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    const s = new Date(days[0] + "T12:00:00");
    const e = new Date(days[6] + "T12:00:00");
    if (s.getFullYear() !== e.getFullYear())
      return `${MONTH_NAMES[s.getMonth()]} ${s.getDate()}, ${s.getFullYear()} – ${MONTH_NAMES[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`;
    if (s.getMonth() !== e.getMonth())
      return `${MONTH_NAMES[s.getMonth()]} ${s.getDate()} – ${MONTH_NAMES[e.getMonth()]} ${e.getDate()}, ${s.getFullYear()}`;
    return `${MONTH_NAMES[s.getMonth()]} ${s.getDate()} – ${e.getDate()}, ${s.getFullYear()}`;
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
    return color === "green" || color === "pink" ? "var(--green)"
         : color === "rose"      ? "var(--danger)"
         : color === "purple"    ? "#7840b4"
         : color === "blue"      ? "#1e64dc"
         : color === "teal"      ? "#009898"
         : color === "lime"      ? "#7abf20"
         : color === "teal-blue" ? "#1b8fa8"
         : color === "brown"     ? "#8b5e3c"
         : color === "slate"     ? "#4a6eaa"
         : color === "gray"      ? "#7a8a9a"
         : "var(--green)";
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

  // ── time-grid constants & helpers ─────────────────────────────────────────
  const HOUR_PX  = 38;
  const TG_HOURS = [23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  function timeToOffset(t) {
    // Returns hours elapsed since 23:00 (the grid top).
    if (!t) return null;
    const parts = t.split(":");
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1] || "0", 10);
    if (isNaN(h) || isNaN(m)) return null;
    return h >= 23 ? (h - 23 + m / 60) : (h + 1 + m / 60);
  }

  function eventTopHeight(ev) {
    const startOff = timeToOffset(ev.time);
    if (startOff === null) return null;
    let endOff = ev.endTime ? timeToOffset(ev.endTime) : startOff + 1;
    if (endOff === null || endOff <= startOff) endOff = startOff + 1;
    return {
      top:    Math.round(startOff * HOUR_PX),
      height: Math.max(22, Math.round((endOff - startOff) * HOUR_PX))
    };
  }

  // ── build time-grid HTML ──────────────────────────────────────────────────
  const displayDays = getDisplayDays();
  const rangeTitle  = formatRangeTitle(displayDays);
  const numCols     = displayDays.length;

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
              return `<div class="cal-week-event cal-week-event--${e.color}">
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

  const gutterHtml = TG_HOURS.map(h =>
    `<div class="cal-tg-hour-label"><span>${String(h).padStart(2, "0")}:00</span></div>`
  ).join("");

  // 48 slots per column (24 hours × 2 half-hour slots).
  // Odd-indexed slots mark the hour boundary (solid line).
  const slotRowsHtml = Array.from({ length: 48 }, (_, i) =>
    `<div class="cal-tg-slot${i % 2 === 1 ? " cal-tg-slot--hour" : ""}"></div>`
  ).join("");

  const colsHtml = displayDays.map(dateStr => {
    const isToday   = dateStr === todayStr;
    const timedEvts = eventsForDate(dateStr).filter(e => e.time);
    const eventsHtml = timedEvts.map(e => {
      const pos = eventTopHeight(e);
      if (!pos) return "";
      const timeRange  = formatTimeRange(e.time, e.endTime);
      const recurBadge = e.recurrence ? `<span class="cal-recur-badge">↻</span>` : "";
      const notePart   = e.note ? `<span class="cal-tg-event__note">${e.note}</span>` : "";
      return `<div class="cal-tg-event cal-tg-event--${e.color}" style="top:${pos.top}px;height:${pos.height}px" data-id="${e.id}">
        <div class="cal-tg-event__inner">
          <span class="cal-tg-event__title">${e.title}${recurBadge}</span>
          ${timeRange ? `<span class="cal-tg-event__time">${timeRange}</span>` : ""}
          ${notePart}
        </div>
        <button class="icon-btn cal-del-btn" data-id="${e.id}" title="Delete">✕</button>
      </div>`;
    }).join("");
    return `<div class="cal-tg-col${isToday ? " is-today" : ""}" data-date="${dateStr}">
      ${slotRowsHtml}${eventsHtml}
    </div>`;
  }).join("");

  // ── upcoming events sidebar ───────────────────────────────────────────────
  const upcomingEvents = appState.calendarEvents
    .filter(e => e.date >= todayStr)
    .sort((a, b) => a.date !== b.date ? (a.date < b.date ? -1 : 1) : (a.time || "99:99") < (b.time || "99:99") ? -1 : 1)
    .slice(0, 15);

  const upcomingHtml = upcomingEvents.length === 0
    ? `<li><div class="empty-state">No upcoming events.</div></li>`
    : upcomingEvents.map(e => {
        const timeRange = formatTimeRange(e.time, e.endTime);
        const displayDate = e._virtual || e.date;
        const originDate = new Date(e.date + "T12:00:00");
        const recurLabel = e.recurrence === "weekly"  ? ` · Weekly on ${DAY_FULL[originDate.getDay()]}`
                         : e.recurrence === "monthly" ? ` · Monthly on the ${originDate.getDate()}${[,"st","nd","rd"][((originDate.getDate()%100-20)%10)||originDate.getDate()%100] || "th"}`
                         : "";
        const meta = [displayDate, timeRange].filter(Boolean).join(" · ") + recurLabel;
        return `<li class="calendar-event-item">
          <span class="calendar-event-item__dot" style="background:${dotColor(e.color)}"></span>
          <div class="calendar-event-item__copy">
            <span class="calendar-event-item__title">${e.title}</span>
            ${meta ? `<span class="calendar-event-item__meta">${meta}</span>` : ""}
          </div>
          <div class="calendar-event-item__actions">
            <button class="icon-btn cal-del-btn" data-id="${e.id}" title="Delete">✕</button>
          </div>
        </li>`;
      }).join("");

  const colorSwatches = COLOR_OPTIONS.map(c =>
    `<button type="button" class="color-swatch color-swatch--${c}" data-color="${c}" title="${c}"></button>`
  ).join("");

  const viewToggleHtml = `
    <div class="cal-view-toggle">
      <button type="button" class="cal-toggle-btn${viewMode === "week" ? " is-active" : ""}" data-mode="week">Week</button>
      <button type="button" class="cal-toggle-btn${viewMode === "day"  ? " is-active" : ""}" data-mode="day">Day</button>
    </div>`;

  // ── render ────────────────────────────────────────────────────────────────
  viewRoot.innerHTML = `
    <div class="calendar-layout">
      <div class="calendar-panel">
        <div class="calendar-nav">
          <div class="calendar-nav__left">
            <button class="calendar-nav__btn" id="cal-prev">&#8249;</button>
            <button class="calendar-nav__btn cal-today-btn" id="cal-today">Today</button>
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
        <form class="calendar-add-form" id="cal-add-form" novalidate>
          <div class="calendar-add-form__title">Add Event</div>
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
            <label for="cal-note">Note (optional)</label>
            <input id="cal-note" name="note" type="text" placeholder="Details…" maxlength="300">
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
          </div>
          <div class="section-form__message" id="cal-form-msg" style="display:none"></div>
          <button type="submit" class="primary-btn">Add Event</button>
        </form>

        <div class="calendar-event-list-section">
          <div class="calendar-event-list-section__heading">Upcoming Events</div>
          <ul class="calendar-event-list" id="cal-upcoming">
            ${upcomingHtml}
          </ul>
        </div>
      </div>
    </div>
  `;

  // ── auto-scroll to current time ──────────────────────────────────────────
  (function () {
    const scrollEl = document.getElementById("cal-tg-scroll");
    if (!scrollEl) return;
    const h = now.getHours(), m = now.getMinutes();
    const nowOff = h >= 23 ? (h - 23 + m / 60) : (h + 1 + m / 60);
    scrollEl.scrollTop = Math.max(0, Math.round(nowOff * HOUR_PX) - 120);
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
    uiState.calendarWeekStart = viewMode === "day" ? todayStr : mondayOfWeek(now);
    renderApp();
  });

  // ── view mode toggle ──────────────────────────────────────────────────────
  document.querySelectorAll(".cal-toggle-btn").forEach(btn => {
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

  ["cal-start-time", "cal-end-time"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("blur", () => {
      if (el.value.trim()) el.value = normalizeTime(el.value);
    });
  });

  document.querySelectorAll(".color-swatch").forEach(btn => {
    if (btn.dataset.color === "green") btn.classList.add("is-selected");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".color-swatch").forEach(b => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      calColorInput.value = btn.dataset.color;
    });
  });

  // ── add event form ────────────────────────────────────────────────────────
  document.getElementById("cal-add-form").addEventListener("submit", e => {
    e.preventDefault();
    const form  = e.target;
    const title     = form.title.value.trim();
    const date      = form.date.value;
    const startTime = normalizeTime(form.startTime.value || "");
    const endTime   = normalizeTime(form.endTime.value || "");
    const note      = form.note.value.trim();
    const color     = form.color.value || "green";
    const recurrence = form.recurrence.value || "";
    const msg       = document.getElementById("cal-form-msg");

    if (!title) { msg.textContent = "Please enter a title."; msg.style.display = ""; return; }
    if (!date)  { msg.textContent = "Please pick a date.";   msg.style.display = ""; return; }

    const timePattern = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
    if (startTime && !timePattern.test(startTime)) {
      msg.textContent = "Start time must be in HH:MM format (e.g. 09:00 or 14:30)."; msg.style.display = ""; return;
    }
    if (endTime && !timePattern.test(endTime)) {
      msg.textContent = "End time must be in HH:MM format (e.g. 09:00 or 14:30)."; msg.style.display = ""; return;
    }
    if (endTime && startTime && endTime <= startTime) {
      msg.textContent = "End time must be after start time.";
      msg.style.display = "";
      return;
    }
    msg.style.display = "none";

    // navigate to the week/day containing the new event
    if (viewMode === "day") {
      uiState.calendarWeekStart = date;
    } else {
      uiState.calendarWeekStart = mondayOfWeek(new Date(date + "T12:00:00"));
    }

    appState.calendarEvents.push(createCalendarEvent({ title, date, time: startTime, endTime, note, color, recurrence }));
    saveState();
    renderApp();
  });

  // ── delete event (grid + upcoming list) ──────────────────────────────────
  document.getElementById("cal-week-grid").addEventListener("click", e => {
    const btn = e.target.closest(".cal-del-btn");
    if (!btn) return;
    const ev = appState.calendarEvents.find(ev => ev.id === btn.dataset.id);
    if (!ev) return;
    if (!confirm(`Delete "${ev.title}"?`)) return;
    appState.calendarEvents = appState.calendarEvents.filter(ev => ev.id !== btn.dataset.id);
    saveState();
    renderApp();
  });

  document.getElementById("cal-upcoming").addEventListener("click", e => {
    const btn = e.target.closest(".cal-del-btn");
    if (!btn) return;
    const ev = appState.calendarEvents.find(ev => ev.id === btn.dataset.id);
    if (!ev) return;
    if (!confirm(`Delete "${ev.title}"?`)) return;
    appState.calendarEvents = appState.calendarEvents.filter(ev => ev.id !== btn.dataset.id);
    saveState();
    renderApp();
  });
}

function renderPlanner() {
  const selectedSection = uiState.selectedPlannerSection || "all";
  const visibleItems = getPlannerItems(selectedSection);
  const selectedSectionData = selectedSection === "all" ? null : getPlannerSectionById(selectedSection);
  const hasNoSections = appState.plannerSections.length === 0;

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
          <div class="budget-total">
            <span>Items</span>
            <strong>${visibleItems.length}</strong>
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
    li.className = "sidebar-list__item";

    const row = document.createElement("div");
    row.className = "planner-sidebar-row";

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

    row.appendChild(btn);
    row.appendChild(delBtn);
    li.appendChild(row);
    sidebarList.appendChild(li);
  });

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

      const titleEl = document.createElement("strong");
      titleEl.className = "promise-item__text";
      titleEl.textContent = item.title;

      copy.appendChild(titleEl);

      // Meta line: section name (all-view) + note snippet — no timestamp
      const metaParts = [];
      if (selectedSection === "all") metaParts.push(section.title);
      if (item.note) metaParts.push(item.note.length > 60 ? item.note.slice(0, 60) + "\u2026" : item.note);
      if (checklist.length > 0) {
        const done = checklist.filter(c => c.done).length;
        metaParts.push(`${done}/${checklist.length} done`);
      }
      if (metaParts.length > 0) {
        const meta = document.createElement("span");
        meta.className = "promise-item__meta";
        meta.textContent = metaParts.join(" \u00b7 ");
        copy.appendChild(meta);
      }

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
        saveState();
        // Refresh the meta line without full re-render
        const metaEl = copy.querySelector(".promise-item__meta");
        const newParts = [];
        if (selectedSection === "all") newParts.push(section.title);
        if (item.note) newParts.push(item.note.length > 60 ? item.note.slice(0, 60) + "\u2026" : item.note);
        if (checklist.length > 0) {
          const done = checklist.filter(c => c.done).length;
          newParts.push(`${done}/${checklist.length} done`);
        }
        if (newParts.length > 0) {
          if (metaEl) {
            metaEl.textContent = newParts.join(" \u00b7 ");
          } else {
            const newMeta = document.createElement("span");
            newMeta.className = "promise-item__meta";
            newMeta.textContent = newParts.join(" \u00b7 ");
            copy.appendChild(newMeta);
          }
        } else if (metaEl) {
          metaEl.remove();
        }
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
            saveState();
            // Update meta line
            const metaEl2 = copy.querySelector(".promise-item__meta");
            const newParts2 = [];
            if (selectedSection === "all") newParts2.push(section.title);
            if (item.note) newParts2.push(item.note.length > 60 ? item.note.slice(0, 60) + "\u2026" : item.note);
            if (checklist.length > 0) {
              const done2 = checklist.filter(c => c.done).length;
              newParts2.push(`${done2}/${checklist.length} done`);
            }
            if (newParts2.length > 0) {
              if (metaEl2) metaEl2.textContent = newParts2.join(" \u00b7 ");
              else {
                const m = document.createElement("span");
                m.className = "promise-item__meta";
                m.textContent = newParts2.join(" \u00b7 ");
                copy.appendChild(m);
              }
            } else if (metaEl2) metaEl2.remove();
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
            saveState();
            renderChecklistItems();
            // Update meta
            const metaElD = copy.querySelector(".promise-item__meta");
            const pD = [];
            if (selectedSection === "all") pD.push(section.title);
            if (item.note) pD.push(item.note.length > 60 ? item.note.slice(0, 60) + "\u2026" : item.note);
            if (checklist.length > 0) pD.push(`${checklist.filter(c => c.done).length}/${checklist.length} done`);
            if (pD.length > 0) {
              if (metaElD) metaElD.textContent = pD.join(" \u00b7 ");
              else { const m = document.createElement("span"); m.className = "promise-item__meta"; m.textContent = pD.join(" \u00b7 "); copy.appendChild(m); }
            } else if (metaElD) metaElD.remove();
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
        saveState();
        renderChecklistItems();
        // Update meta
        const metaElA = copy.querySelector(".promise-item__meta");
        const pA = [];
        if (selectedSection === "all") pA.push(section.title);
        if (item.note) pA.push(item.note.length > 60 ? item.note.slice(0, 60) + "\u2026" : item.note);
        if (checklist.length > 0) pA.push(`${checklist.filter(c => c.done).length}/${checklist.length} done`);
        if (pA.length > 0) {
          if (metaElA) metaElA.textContent = pA.join(" \u00b7 ");
          else { const m = document.createElement("span"); m.className = "promise-item__meta"; m.textContent = pA.join(" \u00b7 "); copy.appendChild(m); }
        } else if (metaElA) metaElA.remove();
      });

      clSection.appendChild(clHeader);
      clSection.appendChild(clList);
      clSection.appendChild(clForm);

      details.appendChild(editSection);
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

    targetSection.items.unshift(createPlannerItem(title));
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

function createDiaryEntry({ date, dayOfWeek, location, text }) {
  return {
    id: createId(),
    date,
    dayOfWeek,
    location: location.trim(),
    text: text.trim(),
    createdAt: new Date().toISOString()
  };
}

function renderDiary() {
  const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const entries = loadDiaryEntries();

  // Track which entry is being viewed/edited in uiState (session-only, not persisted)
  if (!("diaryActiveId" in uiState)) uiState.diaryActiveId = null;

  // Resolve the active entry (may have been deleted)
  let active = uiState.diaryActiveId
    ? entries.find(e => e.id === uiState.diaryActiveId) || null
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
              <input id="diaryLocation" name="location" type="text" maxlength="100" placeholder="e.g. Home, Caf\u00e9\u2026" value="${active ? active.location.replace(/"/g, "&quot;") : ""}" />
            </div>
          </div>
          <div class="field">
            <label for="diaryText">Entry</label>
            <textarea id="diaryText" name="text" class="diary-textarea" rows="14" maxlength="20000" placeholder="Write freely\u2026" required>${active ? active.text.replace(/</g, "&lt;") : ""}</textarea>
          </div>
          <div class="diary-form__actions">
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

      const preview = document.createElement("span");
      preview.className = "diary-entry-item__preview";
      preview.textContent = entry.location
        ? `📍 ${entry.location}  ${previewText(entry.text, 60)}`
        : previewText(entry.text, 72);

      btn.appendChild(dateRow);
      btn.appendChild(preview);
      btn.addEventListener("click", () => {
        uiState.diaryActiveId = entry.id;
        renderApp();
      });

      li.appendChild(btn);
      entryList.appendChild(li);
    });
  }

  // ── Date → day-of-week auto-fill ──────────────────────────────────────────
  const dateInput = document.getElementById("diaryDate");
  const dayInput  = document.getElementById("diaryDay");
  dateInput.addEventListener("change", () => {
    dayInput.value = dayOfWeekFromDate(dateInput.value);
  });

  // ── New entry button ──────────────────────────────────────────────────────
  const newBtn = document.getElementById("diaryNewBtn");
  if (newBtn) {
    newBtn.addEventListener("click", () => {
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
      const updated = entries.filter(e => e.id !== active.id);
      saveDiaryEntries(updated);
      uiState.diaryActiveId = null;
      renderApp();
    });
  }

  // ── Form submit ───────────────────────────────────────────────────────────
  document.getElementById("diaryForm").addEventListener("submit", evt => {
    evt.preventDefault();
    const form = evt.target;
    const date      = form.date.value;
    const dayOfWeek = form.dayOfWeek.value.trim();
    const location  = form.location.value.trim();
    const text      = form.text.value.trim();
    const msg       = document.getElementById("diaryMsg");

    if (!date) { msg.textContent = "Please pick a date."; return; }
    if (!text) { msg.textContent = "Please write something before saving."; return; }
    msg.textContent = "";

    if (active) {
      // Update existing
      const updated = entries.map(e => e.id === active.id
        ? { ...e, date, dayOfWeek, location, text }
        : e);
      saveDiaryEntries(updated);
      uiState.diaryActiveId = active.id;
    } else {
      // Create new
      const newEntry = createDiaryEntry({ date, dayOfWeek, location, text });
      saveDiaryEntries([newEntry, ...entries]);
      uiState.diaryActiveId = newEntry.id;
    }
    renderApp();
  });
}

// ── Bits ──────────────────────────────────────────────────────────────────────

const BITS_STORAGE_KEY = "dockBitsEntries";

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

function renderBits() {
  const entries = loadBitsEntries();

  if (!("bitsEditingId" in uiState)) uiState.bitsEditingId = null;
  if (!("bitsAdding" in uiState)) uiState.bitsAdding = false;

  const editing = uiState.bitsEditingId;
  const adding  = uiState.bitsAdding;

  viewRoot.innerHTML = `
    <div class="bits-view">
      <div class="bits-header">
        <div>
          <h2 class="panel-title">Bits</h2>
          <p class="panel-subtitle">Small fragments, quick thoughts, scattered everyday notes.</p>
        </div>
        ${!adding && !editing ? `<button type="button" class="ghost-btn" id="bitsAddBtn">+ Add Bit</button>` : ""}
      </div>

      ${adding ? `
        <form class="bits-form" id="bitsAddForm" novalidate>
          <div class="field">
            <label for="bitsTitleInput">Title</label>
            <input id="bitsTitleInput" name="title" type="text" maxlength="120" placeholder="Give it a short title\u2026" autocomplete="off" />
          </div>
          <div class="field">
            <label for="bitsContentInput">Note</label>
            <textarea id="bitsContentInput" name="content" class="bits-textarea" rows="5" maxlength="10000" placeholder="Write whatever\u2026"></textarea>
          </div>
          <div class="bits-form__actions">
            <span class="bits-form__msg" id="bitsAddMsg"></span>
            <button type="button" class="tiny-btn" id="bitsCancelAddBtn">Cancel</button>
            <button type="submit" class="primary-btn">Save Bit</button>
          </div>
        </form>
      ` : ""}

      <ul class="bits-list" id="bitsList">
        ${entries.length === 0 && !adding ? `<li class="bits-empty">No bits yet. Add your first one above.</li>` : ""}
      </ul>
    </div>
  `;

  const bitsList = document.getElementById("bitsList");

  // ── Render each entry card ─────────────────────────────────────────────────
  entries.forEach(entry => {
    const li = document.createElement("li");
    li.className = "bits-card";
    li.draggable = true;
    li.dataset.id = entry.id;

    if (editing === entry.id) {
      // Inline edit form
      const handle = document.createElement("div");
      handle.className = "bits-card__handle";
      handle.setAttribute("aria-hidden", "true");
      handle.setAttribute("title", "Drag to reorder");
      handle.textContent = "\u2807";

      const body = document.createElement("div");
      body.className = "bits-card__body";

      const form = document.createElement("form");
      form.className = "bits-edit-form";
      form.setAttribute("novalidate", "");
      form.style.cssText = "display:grid;gap:10px;";

      const titleField = document.createElement("div");
      titleField.className = "field";
      titleField.innerHTML = `
        <label for="bitsEditTitle">Title</label>
        <input id="bitsEditTitle" type="text" maxlength="120" value="${entry.title.replace(/"/g, "&quot;")}" placeholder="Give it a short title\u2026" autocomplete="off" />
      `;

      const contentField = document.createElement("div");
      contentField.className = "field";
      const contentLabel = document.createElement("label");
      contentLabel.setAttribute("for", "bitsEditContent");
      contentLabel.textContent = "Note";
      const contentTextarea = document.createElement("textarea");
      contentTextarea.id = "bitsEditContent";
      contentTextarea.className = "bits-textarea";
      contentTextarea.rows = 5;
      contentTextarea.maxLength = 10000;
      contentTextarea.placeholder = "Write whatever\u2026";
      contentTextarea.textContent = entry.content;
      contentField.appendChild(contentLabel);
      contentField.appendChild(contentTextarea);

      const actions = document.createElement("div");
      actions.className = "bits-form__actions";
      const msg = document.createElement("span");
      msg.className = "bits-form__msg";
      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.className = "tiny-btn";
      cancelBtn.textContent = "Cancel";
      const saveBtn = document.createElement("button");
      saveBtn.type = "submit";
      saveBtn.className = "primary-btn";
      saveBtn.textContent = "Save";
      actions.appendChild(msg);
      actions.appendChild(cancelBtn);
      actions.appendChild(saveBtn);

      form.appendChild(titleField);
      form.appendChild(contentField);
      form.appendChild(actions);
      body.appendChild(form);
      li.appendChild(handle);
      li.appendChild(body);

      form.addEventListener("submit", evt => {
        evt.preventDefault();
        const title   = document.getElementById("bitsEditTitle").value;
        const content = contentTextarea.value.trim();
        if (!content) { msg.textContent = "Please write something."; return; }
        const updated = entries.map(e => e.id === entry.id
          ? { ...e, title: title.trim(), content }
          : e);
        saveBitsEntries(updated);
        uiState.bitsEditingId = null;
        renderApp();
      });

      cancelBtn.addEventListener("click", () => {
        uiState.bitsEditingId = null;
        renderApp();
      });

    } else {
      // Display mode
      const handle = document.createElement("div");
      handle.className = "bits-card__handle";
      handle.setAttribute("aria-hidden", "true");
      handle.setAttribute("title", "Drag to reorder");
      handle.textContent = "\u2807";

      const body = document.createElement("div");
      body.className = "bits-card__body";

      if (entry.title) {
        const titleEl = document.createElement("div");
        titleEl.className = "bits-card__title";
        titleEl.textContent = entry.title;
        body.appendChild(titleEl);
      }

      const contentEl = document.createElement("div");
      contentEl.className = "bits-card__content";
      contentEl.textContent = entry.content;
      body.appendChild(contentEl);

      const cardActions = document.createElement("div");
      cardActions.className = "bits-card__actions";

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "tiny-btn";
      editBtn.textContent = "Edit";
      editBtn.addEventListener("click", () => {
        uiState.bitsEditingId = entry.id;
        uiState.bitsAdding = false;
        renderApp();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "tiny-btn is-danger";
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        if (!confirm("Delete this bit? This cannot be undone.")) return;
        const updated = entries.filter(e => e.id !== entry.id);
        saveBitsEntries(updated);
        if (uiState.bitsEditingId === entry.id) uiState.bitsEditingId = null;
        renderApp();
      });

      cardActions.appendChild(editBtn);
      cardActions.appendChild(deleteBtn);
      body.appendChild(cardActions);

      li.appendChild(handle);
      li.appendChild(body);
    }

    bitsList.appendChild(li);
  });

  // ── Add Bit button ─────────────────────────────────────────────────────────
  const addBtn = document.getElementById("bitsAddBtn");
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      uiState.bitsAdding = true;
      uiState.bitsEditingId = null;
      renderApp();
    });
  }

  // ── Add form handlers ──────────────────────────────────────────────────────
  const addForm = document.getElementById("bitsAddForm");
  if (addForm) {
    document.getElementById("bitsCancelAddBtn").addEventListener("click", () => {
      uiState.bitsAdding = false;
      renderApp();
    });

    addForm.addEventListener("submit", evt => {
      evt.preventDefault();
      const title   = document.getElementById("bitsTitleInput").value;
      const content = document.getElementById("bitsContentInput").value.trim();
      if (!content) {
        document.getElementById("bitsAddMsg").textContent = "Please write something.";
        return;
      }
      const newEntry = createBitsEntry({ title, content });
      saveBitsEntries([newEntry, ...entries]);
      uiState.bitsAdding = false;
      renderApp();
    });
  }

  // ── Drag-and-drop reordering ───────────────────────────────────────────────
  {
    let dragSrcId = null;

    function getBitsDragLi(el) {
      while (el && !el.classList.contains("bits-card")) el = el.parentElement;
      return el;
    }

    bitsList.addEventListener("dragstart", e => {
      const li = getBitsDragLi(e.target);
      if (!li) return;
      dragSrcId = li.dataset.id;
      li.classList.add("bits-card--dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", dragSrcId);
    });

    bitsList.addEventListener("dragend", e => {
      const li = getBitsDragLi(e.target);
      if (li) li.classList.remove("bits-card--dragging");
      bitsList.querySelectorAll(".bits-card--drag-over").forEach(el =>
        el.classList.remove("bits-card--drag-over")
      );
      dragSrcId = null;
    });

    bitsList.addEventListener("dragover", e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
      const li = getBitsDragLi(e.target);
      if (!li || li.dataset.id === dragSrcId) return;
      bitsList.querySelectorAll(".bits-card--drag-over").forEach(el =>
        el.classList.remove("bits-card--drag-over")
      );
      li.classList.add("bits-card--drag-over");
    });

    bitsList.addEventListener("dragleave", e => {
      const li = getBitsDragLi(e.target);
      if (li) li.classList.remove("bits-card--drag-over");
    });

    bitsList.addEventListener("drop", e => {
      e.preventDefault();
      const targetLi = getBitsDragLi(e.target);
      if (!targetLi || !dragSrcId) return;
      const targetId = targetLi.dataset.id;
      if (targetId === dragSrcId) return;
      const fresh = loadBitsEntries();
      const fromIdx = fresh.findIndex(en => en.id === dragSrcId);
      const toIdx   = fresh.findIndex(en => en.id === targetId);
      if (fromIdx === -1 || toIdx === -1) return;
      fresh.splice(toIdx, 0, fresh.splice(fromIdx, 1)[0]);
      saveBitsEntries(fresh);
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
  const currentTotal = visibleEntries.reduce((sum, entry) => sum + itemAmountInUSD(entry.item), 0);
  // CNY-only subtotal for the secondary display
  const cnySub = visibleEntries.filter(e => (e.item.currency || "USD") === "CNY").reduce((s, e) => s + e.item.amount, 0);
  const hasCNY  = visibleEntries.some(e => (e.item.currency || "USD") === "CNY");

  viewRoot.innerHTML = `
    <section class="budget-layout">
      <aside class="budget-sidebar">
        <div class="budget-sidebar__header">
          <span class="budget-sidebar__heading">Categories</span>
          <button
            type="button"
            class="budget-manage-link"
            id="toggleBudgetCategoryManagerBtn"
            aria-expanded="${uiState.showBudgetCategoryManager ? "true" : "false"}"
            aria-controls="budgetCategoryManager"
          >
            ${uiState.showBudgetCategoryManager ? "Done" : "Manage"}
          </button>
        </div>

        <form class="budget-category-form" id="budgetCategoryForm">
          <div class="budget-category-form__row">
            <input
              id="budgetCategoryNameInput"
              type="text"
              maxlength="60"
              placeholder="New category name\u2026"
              required
            />
            <button type="submit" class="budget-cat-create-btn">Add</button>
          </div>
          <button type="button" class="budget-cat-more-btn" id="budgetCatMoreBtn">Details</button>
          <div class="budget-cat-details" id="budgetCatDetails" hidden>
            <div class="budget-cat-details__group">
              <label class="budget-cat-details__label" for="budgetCatNoteInput">Note</label>
              <textarea id="budgetCatNoteInput" class="task-note-input" rows="2" maxlength="400" placeholder="Optional note for this category\u2026"></textarea>
            </div>
            <div class="budget-cat-details__group">
              <span class="budget-cat-details__label">Checklist</span>
              <ul class="subtask-list" id="budgetCatTodoList"></ul>
              <div class="subtask-add-form">
                <input type="text" id="budgetCatTodoInput" placeholder="Add checklist item\u2026" maxlength="120" />
                <button type="button" id="budgetCatTodoAddBtn">Add</button>
              </div>
            </div>
          </div>
          <p class="budget-category-form__message" id="budgetCategoryFormMessage"></p>
        </form>

        <ul class="sidebar-list" id="budgetCategoryList"></ul>

        ${uiState.showBudgetCategoryManager ? `
          <section class="budget-category-manager" id="budgetCategoryManager" aria-labelledby="budgetCategoryManagerTitle">
            <div class="budget-category-manager__header">
              <div>
                <h3 class="budget-category-manager__title" id="budgetCategoryManagerTitle">Manage categories</h3>
                <p class="budget-category-manager__subtitle">Delete categories here without cluttering the main list. Budget totals, visible items, and saved data update immediately.</p>
              </div>
              <button type="button" class="tiny-btn" id="closeBudgetCategoryManagerBtn">Done</button>
            </div>

            <ul class="budget-category-manager__list" id="budgetCategoryManagerList"></ul>
          </section>
        ` : ""}
      </aside>

      <div class="budget-main">
        <div class="budget-main__top">
          <div>
            <h2 class="panel-title">${selectedCategory === "all" ? "All Budgets" : selectedCategoryData.title}</h2>
            <p class="panel-subtitle">
              ${selectedCategory === "all"
                ? "Review every budget item in one list."
                : `Manage the items inside ${selectedCategoryData.title}.`}
            </p>
          </div>

          <div class="budget-total">
            <span>Total in view</span>
            <strong>${formatCurrency(currentTotal)}</strong>
            ${hasCNY ? `<small style="font-size:.72rem;color:var(--muted);display:block;margin-top:2px;">incl. ${cnyFormatter.format(cnySub)} CNY @ ${CNY_TO_USD_RATE}</small>` : ""}
          </div>
        </div>

        <div id="budgetCatInfoBlock"></div>

        <form class="budget-form" id="budgetForm">
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
              <option value="USD">USD</option>
              <option value="CNY">CNY</option>
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
  renderBudgetCategoryManager();
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
  const toggleBudgetCategoryManagerButton = document.getElementById("toggleBudgetCategoryManagerBtn");

  // ── "Add details" for create-category form ──────────────────────────────
  let pendingCatTodos = [];
  const budgetCatMoreBtn = document.getElementById("budgetCatMoreBtn");
  const budgetCatDetails = document.getElementById("budgetCatDetails");

  function refreshPendingCatTodos() {
    const list = document.getElementById("budgetCatTodoList");
    if (!list) return;
    list.innerHTML = "";
    pendingCatTodos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.className = "subtask-item";

      const fakeCheck = document.createElement("input");
      fakeCheck.type = "checkbox";
      fakeCheck.disabled = true;

      const titleSpan = document.createElement("span");
      titleSpan.className = "subtask-title";
      titleSpan.textContent = todo.title;

      const delBtn = document.createElement("button");
      delBtn.type = "button";
      delBtn.className = "icon-btn";
      delBtn.textContent = "x";
      delBtn.setAttribute("aria-label", `Remove ${todo.title}`);
      delBtn.addEventListener("click", () => {
        pendingCatTodos.splice(index, 1);
        refreshPendingCatTodos();
      });

      li.appendChild(fakeCheck);
      li.appendChild(titleSpan);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }

  if (budgetCatMoreBtn) {
    budgetCatMoreBtn.addEventListener("click", () => {
      const opening = budgetCatDetails.hidden;
      budgetCatDetails.hidden = !opening;
      budgetCatMoreBtn.classList.toggle("is-open", opening);
      if (opening) document.getElementById("budgetCatNoteInput")?.focus();
    });

    const budgetCatTodoAddBtn = document.getElementById("budgetCatTodoAddBtn");
    const budgetCatTodoInput = document.getElementById("budgetCatTodoInput");

    budgetCatTodoAddBtn.addEventListener("click", () => {
      const val = budgetCatTodoInput.value.trim();
      if (!val) return;
      pendingCatTodos.push({ id: createId(), title: val, done: false });
      budgetCatTodoInput.value = "";
      refreshPendingCatTodos();
      budgetCatTodoInput.focus();
    });

    budgetCatTodoInput.addEventListener("keydown", e => {
      if (e.key === "Enter") { e.preventDefault(); budgetCatTodoAddBtn.click(); }
    });
  }

  toggleBudgetCategoryManagerButton.addEventListener("click", () => {
    uiState.showBudgetCategoryManager = !uiState.showBudgetCategoryManager;
    renderApp();
  });

  if (uiState.showBudgetCategoryManager) {
    document.getElementById("closeBudgetCategoryManagerBtn").addEventListener("click", () => {
      uiState.showBudgetCategoryManager = false;
      renderApp();
    });
  }

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

    const catNote = (document.getElementById("budgetCatNoteInput")?.value || "").trim();
    const newCategory = createBudgetCategory(categoryTitle, catNote, pendingCatTodos);
    pendingCatTodos = [];

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
    budgetCategoryFormMessage.textContent = "Categories are saved with your backup. If you delete one later, its items move to another remaining category when possible.";
    budgetCategoryFormMessage.dataset.tone = "info";
  });

  budgetForm.addEventListener("submit", event => {
    event.preventDefault();

    const titleInput = document.getElementById("budgetTitleInput");
    const amountInput = document.getElementById("budgetAmountInput");
    const currencySelect = document.getElementById("budgetCurrencySelect");
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const currency = currencySelect?.value === "CNY" ? "CNY" : "USD";
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
        targetCategory.items.unshift(editorTarget.item);
      }

      uiState.budgetEditorId = null;
    } else {
      targetCategory.items.unshift(createBudgetItem(title, amount, false, currency));
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
}

function renderSettings() {
  viewRoot.innerHTML = `
    <section class="settings-view">
      <div class="settings-section">
        <div class="settings-section__header">
          <p class="eyebrow">Storage</p>
          <h2 class="panel-title">Backup &amp; Restore</h2>
          <p class="panel-subtitle">Export all PersonalDock data to a dated JSON file, or import a previous backup to restore your saved state.</p>
        </div>
        <div class="settings-meta-row">
          <p class="storage-panel__last-saved" id="lastSavedStamp">No local save timestamp yet</p>
          <p class="storage-panel__status" id="backupStatus" data-tone="info">Export a JSON backup or import one to restore your current data.</p>
        </div>
        <div class="settings-actions">
          <button type="button" id="settingsExportBtn" class="primary-btn">Export JSON backup</button>
          <button type="button" id="settingsImportBtn" class="secondary-btn">Import JSON backup</button>
        </div>
      </div>
      <div class="settings-section settings-section--danger">
        <div class="settings-section__header">
          <p class="eyebrow">Danger Zone</p>
          <h2 class="panel-title">Clear All Data</h2>
          <p class="panel-subtitle">Permanently delete all PersonalDock data — tasks, budget items, categories, calendar events, promises, notes, and checklists. The app will return to a completely empty state. This cannot be undone unless you have exported a backup.</p>
        </div>
        <div class="settings-actions">
          <button type="button" id="settingsResetBtn" class="ghost-btn">Clear all data</button>
        </div>
      </div>
    </section>
  `;

  updateStorageBackupPanel();

  document.getElementById("settingsExportBtn").addEventListener("click", () => {
    downloadJsonBackup();
  });

  document.getElementById("settingsImportBtn").addEventListener("click", () => {
    importJsonInput.click();
  });

  document.getElementById("settingsResetBtn").addEventListener("click", () => {
    const confirmed = confirm("Clear all PersonalDock data?\n\nThis will permanently delete all tasks, budget items, categories, calendar events, promises, notes, and checklists. This cannot be undone unless you have exported a backup.\n\nAre you sure?");

    if (!confirmed) {
      return;
    }

    appState = {
      activeView: DEFAULT_VIEW,
      selectedBudgetCategory: "all",
      lastSavedAt: null,
      actionSections: ACTION_SECTION_DEFINITIONS.map(section => ({
        id: section.id,
        title: section.title,
        emoji: section.emoji,
        accent: section.accent,
        size: section.size,
        tasks: []
      })),
      budgetCategories: [],
      plannerSections: [],
      notes: [],
      waitingItems: [],
      inboxItems: [],
      projects: [],
      somedayItems: [],
      referenceItems: [],
      trashItems: [],
      promises: [],
      calendarEvents: []
    };
    uiState = {
      activeView: DEFAULT_VIEW,
      selectedBudgetCategory: "all",
      budgetEditorId: null,
      showBudgetCategoryManager: false,
      calendarYear: new Date().getFullYear(),
      calendarMonth: new Date().getMonth(),
      calendarWeekStart: null,
      calendarViewMode: "week",
      justCompletedTaskId: null,
      expandedTaskIds: new Set(),
      selectedPlannerSection: "all"
    };
    saveState();
    renderApp();
  });
}

function renderBudgetSidebar() {
  const list = document.getElementById("budgetCategoryList");
  const allEntries = getBudgetEntries("all");
  const items = [
    {
      id: "all",
      title: "All Budgets",
      count: allEntries.length,
      total: allEntries.reduce((sum, entry) => sum + entry.item.amount, 0)
    },
    ...appState.budgetCategories.map(category => ({
      id: category.id,
      title: category.title,
      count: category.items.length,
      total: category.items.reduce((sum, item) => sum + item.amount, 0)
    }))
  ];

  items.forEach(category => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    item.className = "sidebar-list__item";
    button.type = "button";
    button.className = `sidebar-btn ${category.id === uiState.selectedBudgetCategory ? "is-active" : ""}`;
    button.innerHTML = `
      <strong>${category.title}</strong>
      <span>${category.count} items · ${formatCurrency(category.total)}</span>
    `;
    button.addEventListener("click", () => {
      setBudgetCategory(category.id);
    });
    item.appendChild(button);

    list.appendChild(item);
  });
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
    const total = category.items.reduce((sum, entry) => sum + entry.amount, 0);
    const itemLabel = category.items.length === 1 ? "1 item" : `${category.items.length} items`;

    item.className = "budget-category-manager__item";
    copy.className = "budget-category-manager__copy";
    title.textContent = category.title;
    meta.className = "budget-category-manager__meta";
    meta.textContent = `${itemLabel} · ${formatCurrency(total)} · ${deletionCopy.detail}`;

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
    if (currSel) currSel.value = editorTarget.item.currency || "USD";
    categorySelect.value = editorTarget.category.id;
  }

  // Upgrade currency selector to match the GTD custom-select style
  const currencySelectEl = document.getElementById("budgetCurrencySelect");
  if (currencySelectEl) buildGtdCustomSelect(currencySelectEl);
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
    while (el && !el.classList.contains("budget-item")) el = el.parentElement;
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

    // Locate both items in their categories
    const srcEntry  = entries.find(en => en.item.id === dragSrcId);
    const destEntry = entries.find(en => en.item.id === targetId);
    if (!srcEntry || !destEntry) return;

    const srcCat  = srcEntry.category;
    const destCat = destEntry.category;

    if (srcCat.id === destCat.id) {
      // Same category — simple in-place reorder
      const items = srcCat.items;
      const fromIdx = items.findIndex(it => it.id === dragSrcId);
      const toIdx   = items.findIndex(it => it.id === targetId);
      if (fromIdx === -1 || toIdx === -1) return;
      items.splice(toIdx, 0, items.splice(fromIdx, 1)[0]);
    } else {
      // Different categories — move item from srcCat to destCat at target position
      const fromItems = srcCat.items;
      const toItems   = destCat.items;
      const fromIdx   = fromItems.findIndex(it => it.id === dragSrcId);
      const toIdx     = toItems.findIndex(it => it.id === targetId);
      if (fromIdx === -1 || toIdx === -1) return;
      const [movedItem] = fromItems.splice(fromIdx, 1);
      movedItem.currency = movedItem.currency || "USD"; // keep field intact
      toItems.splice(toIdx, 0, movedItem);
    }

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
    const amount = row.querySelector(".budget-item__amount");
    const editButton = row.querySelector(".edit-item-btn");
    const deleteButton = row.querySelector(".delete-item-btn");
    const expandButton = row.querySelector(".budget-item__expand-btn");
    const detailsPanel = row.querySelector(".budget-item__details-panel");

    budgetItem.draggable = true;
    budgetItem.dataset.itemId = item.id;
    budgetItem.classList.toggle("is-checked", item.checked);
    checkbox.checked = item.checked;
    title.textContent = item.title;
    meta.textContent = uiState.selectedBudgetCategory === "all"
      ? `${category.title} · ${item.checked ? "Completed" : "In Progress"}`
      : item.checked
        ? "Completed"
        : "In Progress";
    amount.textContent = formatBudgetAmount(item.amount, item.currency || "USD");

    function itemHasDetails() {
      return Boolean(item.itemNote) || (item.reminders || []).length > 0 || (item.checklist || []).length > 0;
    }

    function refreshExpandIndicator() {
      expandButton.classList.toggle("has-details", itemHasDetails());
    }

    refreshExpandIndicator();

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
        buildBudgetItemDetails(detailsPanel, item, refreshExpandIndicator);
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

  const confirmed = confirm("Importing a backup will replace your current saved data. Continue?");

  if (!confirmed) {
    event.target.value = "";
    return;
  }

  try {
    await importJsonBackup(file);
  } catch (error) {
    setBackupStatus(error instanceof Error ? error.message : "The backup could not be imported.", "error");
  } finally {
    event.target.value = "";
  }
});

renderApp();

// ── Desktop app integration (pywebview) ──────────────────────────────────────
// When running via app.py, pywebview fires 'pywebviewready' once its JS bridge
// is ready. We then load the saved data from disk and re-render the app.
// This overrides the localStorage snapshot with the persistent file-based one.
// Data file location: ~/Library/Application Support/MyGTD/data.json
window.addEventListener("pywebviewready", () => {
  window.pywebview.api.load_data().then(data => {
    if (data && typeof data === "object") {
      appState = normalizeState(data);
      uiState = {
        activeView: data.activeView || DEFAULT_VIEW,
        selectedBudgetCategory: data.selectedBudgetCategory || null,
        budgetEditorId: null,
        showBudgetCategoryManager: false
      };
      renderApp();
    }
  });
});