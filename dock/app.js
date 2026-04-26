const STORAGE_KEY = "northstar-planner-v1";
const LEGACY_ACTION_STORAGE_KEY = "actionboard-v1";
const DEFAULT_VIEW = "actionBoard";
const BACKUP_FORMAT = "personaldock-backup";
const BACKUP_VERSION = 1;

const VIEW_DETAILS = {
  dashboard: "Quickly review today's priorities, budget snapshot, and recent notes.",
  actionBoard: "Organize tasks by energy, urgency, and life context.",
  waitingFor: "Track the things you are waiting for other people to reply to, send, finish, or confirm.",
  budgetPlanner: "Track personal budget items so income, spending, and progress stay visible."
};

const WAITING_STATUSES = ["Waiting", "Follow Up", "Received", "Done"];

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
    accent: "#dce8fa",
    size: "featured",
    sampleTasks: []
  },
  {
    id: "easyWork",
    title: "Easy Tasks",
    emoji: "EZ",
    accent: "#e3f0d7",
    size: "featured",
    sampleTasks: []
  },
  {
    id: "top3PrioritiesToday",
    title: "Top 3 Priorities Today",
    emoji: "T3",
    accent: "#f3e3c8",
    size: "",
    sampleTasks: []
  },
  {
    id: "importantUrgent",
    title: "Important & Urgent",
    emoji: "!!",
    accent: "#f6ddd0",
    size: "",
    sampleTasks: []
  },
  {
    id: "importantNotUrgent",
    title: "Important but Not Urgent",
    emoji: "++",
    accent: "#dfedd4",
    size: "",
    sampleTasks: []
  },
  {
    id: "notImportantUrgent",
    title: "Not Important but Urgent",
    emoji: "->",
    accent: "#f8edc2",
    size: "",
    sampleTasks: []
  },
  {
    id: "notImportantNotUrgent",
    title: "Not Important and Not Urgent",
    emoji: "--",
    accent: "#efdce7",
    size: "",
    sampleTasks: []
  },
  {
    id: "mealPlan",
    title: "Meal Plan",
    emoji: "MP",
    accent: "#f5dec7",
    size: "tall",
    sampleTasks: []
  },
  {
    id: "life",
    title: "Life",
    emoji: "LF",
    accent: "#ddeaf4",
    size: "",
    sampleTasks: []
  },
  {
    id: "exercise",
    title: "Exercise",
    emoji: "EX",
    accent: "#dfe9fb",
    size: "",
    sampleTasks: []
  },
  {
    id: "eveningNight",
    title: "Evening / Night",
    emoji: "PM",
    accent: "#f4e6a8",
    size: "tall",
    sampleTasks: []
  },
  {
    id: "extraLearning",
    title: "Extra Learning",
    emoji: "XL",
    accent: "#f7ecc6",
    size: "",
    sampleTasks: []
  },
  {
    id: "weirdIdeas",
    title: "Weird Ideas",
    emoji: "WI",
    accent: "#f2d9de",
    size: "",
    sampleTasks: []
  },
  {
    id: "memo",
    title: "Memo",
    emoji: "MM",
    accent: "#dfedd7",
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

const viewRoot = document.getElementById("viewRoot");
const actionTemplate = document.getElementById("actionSectionTemplate");
const budgetItemTemplate = document.getElementById("budgetItemTemplate");
const viewNav = document.getElementById("viewNav");
const resetDataButton = document.getElementById("resetDataBtn");
const exportJsonButton = document.getElementById("exportJsonBtn");
const importJsonButton = document.getElementById("importJsonBtn");
const importJsonInput = document.getElementById("importJsonInput");
const backupStatus = document.getElementById("backupStatus");
const lastSavedStamp = document.getElementById("lastSavedStamp");
const viewDescription = document.getElementById("viewDescription");
const todayStamp = document.getElementById("todayStamp");

let appState = loadState();
let uiState = {
  activeView: DEFAULT_VIEW,
  selectedBudgetCategory: appState.selectedBudgetCategory,
  budgetEditorId: null
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

function createTask(title, done = false) {
  return {
    id: createId(),
    title,
    done
  };
}

function createBudgetItem(title, amount, checked = false) {
  return {
    id: createId(),
    title,
    amount: Number(amount) || 0,
    checked
  };
}

function createBudgetCategory(title) {
  return {
    id: createBudgetCategoryId(title),
    title,
    items: []
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
    notes: DEFAULT_NOTES.map(note => createNote(note)),
    waitingItems: DEFAULT_WAITING_ITEMS.map(item => createWaitingItem(item))
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
    notes: normalizeNotes(rawState?.notes),
    waitingItems: normalizeWaitingItems(rawState?.waitingItems)
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
          .map(task => {
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
              done: Boolean(task.done)
            };
          })
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

function mergeBudgetCategories(storedCategories) {
  const categoryMap = new Map(
    Array.isArray(storedCategories)
      ? storedCategories.filter(category => category && typeof category.id === "string").map(category => [category.id, category])
      : []
  );
  const extraDefinitions = Array.isArray(storedCategories)
    ? storedCategories
        .filter(category => {
          if (!category || typeof category.id !== "string") {
            return false;
          }

          return !BUDGET_CATEGORY_DEFINITIONS.some(definition => definition.id === category.id);
        })
        .map(category => ({
          id: category.id,
          title: typeof category.title === "string" && category.title.trim() ? category.title.trim() : category.id,
          sampleItems: []
        }))
    : [];

  return [...BUDGET_CATEGORY_DEFINITIONS, ...extraDefinitions].map(definition => {
    const existingCategory = categoryMap.get(definition.id);
    const items = Array.isArray(existingCategory?.items)
      ? existingCategory.items
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
              checked: Boolean(item.checked)
            };
          })
          .filter(Boolean)
      : definition.sampleItems.map(item => createBudgetItem(item.title, item.amount, item.checked));

    return {
      id: definition.id,
      title: typeof existingCategory?.title === "string" && existingCategory.title.trim()
        ? existingCategory.title.trim()
        : definition.title,
      items
    };
  });
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

function getStateSnapshot(lastSavedAt = appState.lastSavedAt ?? null) {
  return {
    activeView: uiState.activeView,
    selectedBudgetCategory: uiState.selectedBudgetCategory,
    lastSavedAt,
    actionSections: appState.actionSections,
    budgetCategories: appState.budgetCategories,
    notes: appState.notes,
    waitingItems: appState.waitingItems
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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getStateSnapshot(lastSavedAt)));
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

function getBudgetCategoryById(categoryId) {
  return appState.budgetCategories.find(category => category.id === categoryId);
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
      if (category.id === "payroll") {
        income += item.amount;
      } else {
        planned += item.amount;
      }

      if (category.id === "savings") {
        savings += item.amount;
      }

      if (item.checked) {
        settled += item.amount;
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
    budgetEditorId: null
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

    if (section.tasks.length === 0) {
      taskList.appendChild(createEmptyState("There is nothing here yet. Add one item to start using this section."));
    } else {
      section.tasks.forEach(task => {
        const item = document.createElement("li");
        item.className = `task-item ${task.done ? "is-done" : ""}`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;
        checkbox.addEventListener("change", () => {
          task.done = checkbox.checked;
          saveState();
          renderApp();
        });

        const titleNode = document.createElement("span");
        titleNode.className = "task-title";
        titleNode.textContent = task.title;

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "icon-btn";
        deleteButton.textContent = "x";
        deleteButton.setAttribute("aria-label", `Delete ${task.title}`);
        deleteButton.addEventListener("click", () => {
          section.tasks = section.tasks.filter(entry => entry.id !== task.id);
          saveState();
          renderApp();
        });

        item.appendChild(checkbox);
        item.appendChild(titleNode);
        item.appendChild(deleteButton);
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

      section.tasks.push(createTask(titleValue));
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

  document.getElementById("clearCompletedTasksBtn").addEventListener("click", () => {
    appState.actionSections = appState.actionSections.map(section => ({
      ...section,
      tasks: section.tasks.filter(task => !task.done)
    }));
    saveState();
    renderApp();
  });
}

function renderBudgetPlanner() {
  const selectedCategory = uiState.selectedBudgetCategory;
  const visibleEntries = getBudgetEntries(selectedCategory);
  const selectedCategoryData = selectedCategory === "all"
    ? null
    : getBudgetCategoryById(selectedCategory);
  const editorTarget = uiState.budgetEditorId ? findBudgetItem(uiState.budgetEditorId) : null;
  const currentTotal = visibleEntries.reduce((sum, entry) => sum + entry.item.amount, 0);

  viewRoot.innerHTML = `
    <section class="budget-layout">
      <aside class="budget-sidebar">
        <div>
          <h2 class="panel-title">Budget categories</h2>
          <p class="panel-subtitle">Choose a category on the left and manage its items on the right.</p>
        </div>

        <form class="budget-category-form" id="budgetCategoryForm">
          <div class="field">
            <label for="budgetCategoryNameInput">Create custom category</label>
            <input
              id="budgetCategoryNameInput"
              type="text"
              maxlength="60"
              placeholder="For example: Gifts, Home Studio, Side Project"
              required
            />
          </div>
          <button type="submit" class="secondary-btn">Create category</button>
          <p class="budget-category-form__message" id="budgetCategoryFormMessage">
            Custom categories are saved, exported, and restored with your backup.
          </p>
        </form>

        <ul class="sidebar-list" id="budgetCategoryList"></ul>
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
          </div>
        </div>

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
    budgetCategoryFormMessage.textContent = "Custom categories are saved, exported, and restored with your backup.";
    budgetCategoryFormMessage.dataset.tone = "info";
  });

  budgetForm.addEventListener("submit", event => {
    event.preventDefault();

    const titleInput = document.getElementById("budgetTitleInput");
    const amountInput = document.getElementById("budgetAmountInput");
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
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

      if (editorTarget.category.id !== targetCategory.id) {
        editorTarget.category.items = editorTarget.category.items.filter(item => item.id !== editorTarget.item.id);
        targetCategory.items.unshift(editorTarget.item);
      }

      uiState.budgetEditorId = null;
    } else {
      targetCategory.items.unshift(createBudgetItem(title, amount));
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

function renderWaitingFor() {
  const waitingStats = getWaitingStats();

  viewRoot.innerHTML = `
    <section class="view-panel">
      <div class="view-panel__top">
        <div>
          <h2 class="panel-title">Waiting For</h2>
          <p class="panel-subtitle">Track the things you are waiting for other people to reply to, send, finish, or confirm.</p>
        </div>

        <div class="view-actions">
          <div class="inline-stats">
            <span class="inline-stat">Waiting ${waitingStats.Waiting}</span>
            <span class="inline-stat">Follow Up ${waitingStats["Follow Up"]}</span>
            <span class="inline-stat">Received ${waitingStats.Received}</span>
            <span class="inline-stat">Done ${waitingStats.Done}</span>
          </div>
        </div>
      </div>

      <div class="waiting-layout">
        <aside class="waiting-form-panel">
          <h3 class="panel-title">Add waiting item</h3>
          <p class="panel-subtitle">Keep dependent-on-others items separate so they do not get mixed into your own action list.</p>

          <form class="waiting-form" id="waitingForm">
            <div class="field">
              <label for="waitingTitleInput">Title</label>
              <input id="waitingTitleInput" type="text" maxlength="120" placeholder="For example: signed contract, missing file, shipment update" required />
            </div>

            <div class="field">
              <label for="waitingPersonInput">Person / organization</label>
              <input id="waitingPersonInput" type="text" maxlength="120" placeholder="For example: client, coworker, school, store" required />
            </div>

            <div class="field">
              <label for="waitingStatusSelect">Status</label>
              <select id="waitingStatusSelect"></select>
            </div>

            <div class="field">
              <label for="waitingDateInput">Due date / follow-up date</label>
              <input id="waitingDateInput" type="date" />
            </div>

            <div class="field">
              <label for="waitingNoteInput">Note</label>
              <textarea id="waitingNoteInput" rows="4" maxlength="240" placeholder="Add context, a promised date, or the next reminder"></textarea>
            </div>

            <button type="submit" class="primary-btn">Add waiting item</button>
          </form>
        </aside>

        <div class="waiting-list-panel">
          <h3 class="panel-title">Waiting list</h3>
          <p class="panel-subtitle">Review all current dependent-on-others items by status and date.</p>
          <ul class="waiting-list" id="waitingList"></ul>
        </div>
      </div>
    </section>
  `;

  const statusSelect = document.getElementById("waitingStatusSelect");
  WAITING_STATUSES.forEach(status => {
    const option = document.createElement("option");
    option.value = status;
    option.textContent = getStatusLabel(status);
    statusSelect.appendChild(option);
  });

  const waitingList = document.getElementById("waitingList");
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
  } else {
    sortedItems.forEach(item => {
      const row = document.createElement("li");
      row.className = `waiting-item waiting-item--${item.status.replace(/\s+/g, "-").toLowerCase()}`;
      row.innerHTML = `
        <div class="waiting-item__main">
          <div class="waiting-item__top">
            <strong>${item.title}</strong>
            <span class="waiting-status-pill">${getStatusLabel(item.status)}</span>
          </div>
          <p class="waiting-item__person">${item.person}</p>
          <p class="waiting-item__meta">Follow-up date: ${formatWaitingDate(item.dueDate)}</p>
          <p class="waiting-item__note">${item.note || "No note yet"}</p>
        </div>

        <div class="waiting-item__side">
          <label class="field waiting-status-field">
            <span>Status</span>
            <select data-waiting-status="${item.id}"></select>
          </label>
          <button type="button" class="tiny-btn is-danger" data-delete-waiting="${item.id}">Delete</button>
        </div>
      `;

      waitingList.appendChild(row);

      const statusControl = row.querySelector(`[data-waiting-status="${item.id}"]`);
      WAITING_STATUSES.forEach(status => {
        const option = document.createElement("option");
        option.value = status;
        option.textContent = getStatusLabel(status);
        statusControl.appendChild(option);
      });
      statusControl.value = item.status;
      statusControl.addEventListener("change", () => {
        item.status = statusControl.value;
        saveState();
        renderApp();
      });

      row.querySelector(`[data-delete-waiting="${item.id}"]`).addEventListener("click", () => {
        appState.waitingItems = appState.waitingItems.filter(entry => entry.id !== item.id);
        saveState();
        renderApp();
      });
    });
  }

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

function populateBudgetForm(editorTarget) {
  const categorySelect = document.getElementById("budgetCategorySelect");

  appState.budgetCategories.forEach(category => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.title;
    categorySelect.appendChild(option);
  });

  const preferredCategory = editorTarget?.category.id || (uiState.selectedBudgetCategory === "all" ? DEFAULT_BUDGET_CATEGORY_ID : uiState.selectedBudgetCategory);
  categorySelect.value = preferredCategory;

  if (uiState.selectedBudgetCategory !== "all") {
    categorySelect.disabled = true;
  }

  if (editorTarget) {
    document.getElementById("budgetTitleInput").value = editorTarget.item.title;
    document.getElementById("budgetAmountInput").value = editorTarget.item.amount;
    categorySelect.value = editorTarget.category.id;
  }
}

function renderBudgetList(entries) {
  const budgetList = document.getElementById("budgetList");

  if (entries.length === 0) {
    budgetList.appendChild(createEmptyState("This category is empty. Add a budget item to get started."));
    return;
  }

  entries.forEach(({ category, item }) => {
    const row = budgetItemTemplate.content.cloneNode(true);
    const budgetItem = row.querySelector(".budget-item");
    const checkbox = row.querySelector(".budget-item__check");
    const title = row.querySelector(".budget-item__title");
    const meta = row.querySelector(".budget-item__meta");
    const amount = row.querySelector(".budget-item__amount");
    const editButton = row.querySelector(".edit-item-btn");
    const deleteButton = row.querySelector(".delete-item-btn");

    budgetItem.classList.toggle("is-checked", item.checked);
    checkbox.checked = item.checked;
    title.textContent = item.title;
    meta.textContent = uiState.selectedBudgetCategory === "all"
      ? `${category.title} · ${item.checked ? "Completed" : "In Progress"}`
      : item.checked
        ? "Completed"
        : "In Progress";
    amount.textContent = formatCurrency(item.amount);

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
      category.items = category.items.filter(entry => entry.id !== item.id);

      if (uiState.budgetEditorId === item.id) {
        uiState.budgetEditorId = null;
      }

      saveState();
      renderApp();
    });

    budgetList.appendChild(row);
  });
}

function createEmptyState(message) {
  return document.createDocumentFragment();
}

viewNav.addEventListener("click", event => {
  const button = event.target.closest(".nav-btn");

  if (!button) {
    return;
  }

  setActiveView(button.dataset.view);
});

resetDataButton.addEventListener("click", () => {
  const confirmed = confirm("Reset to the sample data? Your current saved tasks, notes, and budget items will be replaced.");

  if (!confirmed) {
    return;
  }

  appState = buildDefaultState();
  uiState = {
    activeView: appState.activeView,
    selectedBudgetCategory: appState.selectedBudgetCategory,
    budgetEditorId: null
  };
  saveState();
  renderApp();
});

exportJsonButton.addEventListener("click", () => {
  downloadJsonBackup();
});

importJsonButton.addEventListener("click", () => {
  importJsonInput.click();
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