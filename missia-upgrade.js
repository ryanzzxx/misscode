const MISSIA_FIREBASE_CONFIG = typeof FIREBASE_CONFIG !== "undefined" ? FIREBASE_CONFIG : {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const LANG_PALETTES = {
  php: { accent: "rgb(79, 70, 229)", secondary: "rgb(3, 105, 161)", label: "PHP" },
  python: { accent: "rgb(37, 99, 235)", secondary: "rgb(2, 132, 199)", label: "Python" },
  swift: { accent: "rgb(234, 88, 12)", secondary: "rgb(3, 105, 161)", label: "Swift" },
  javascript: { accent: "rgb(202, 138, 4)", secondary: "rgb(3, 105, 161)", label: "JavaScript" },
  typescript: { accent: "rgb(2, 132, 199)", secondary: "rgb(29, 78, 216)", label: "TypeScript" },
  java: { accent: "rgb(220, 38, 38)", secondary: "rgb(3, 105, 161)", label: "Java" },
  csharp: { accent: "rgb(124, 58, 237)", secondary: "rgb(3, 105, 161)", label: "C#" },
  dart: { accent: "rgb(13, 148, 136)", secondary: "rgb(2, 132, 199)", label: "Dart" },
  html: { accent: "rgb(234, 88, 12)", secondary: "rgb(2, 132, 199)", label: "HTML5" },
  css3: { accent: "rgb(37, 99, 235)", secondary: "rgb(14, 165, 233)", label: "CSS3" },
  kotlin: { accent: "rgb(147, 51, 234)", secondary: "rgb(2, 132, 199)", label: "Kotlin" }
};

const CHALLENGES_BANK = {
  php: [
    {
      level: "Prático • PHP",
      title: "Formatação de cabeçalho de documento",
      prompt: "Crie uma função formatarCabecalho($titulo, $total) que retorne o título com a quantidade de itens.",
      starter: "<?php\nfunction formatarCabecalho(string $titulo, int $total): string {\n    return $titulo . \" (\" . $total . \" itens)\";\n}\n\necho formatarCabecalho(\"LegalDesk\", 12);\n",
      requiredToken: "formatarCabecalho"
    },
    {
      level: "Intermediário • PHP",
      title: "Filtro de registros ativos",
      prompt: "Filtre um array associativo de documentos mantendo apenas os que possuem status 'ativo'.",
      starter: "<?php\n$docs = [\n    [\"nome\" => \"Contrato.pdf\", \"status\" => \"ativo\"],\n    [\"nome\" => \"Rascunho.doc\", \"status\" => \"pendente\"]\n];\n$ativos = array_filter($docs, fn($d) => $d[\"status\"] === \"ativo\");\necho count($ativos);\n",
      requiredToken: "array_filter"
    }
  ],
  python: [
    {
      level: "Intermediário → Avançado",
      title: "Filtro e agregação de métricas de pipeline",
      prompt: "Crie uma função resumir_latencias(valores) que remova valores inválidos (menores que 0) e devolva média e máximo.",
      starter: "def resumir_latencias(valores):\n    validos = [v for v in valores if v >= 0]\n    media = sum(validos) / len(validos) if validos else 0\n    return {\"media\": round(media, 2), \"max\": max(validos, default=0)}\n\nprint(resumir_latencias([120, -1, 85, 210, 95]))\n",
      requiredToken: "resumir_latencias"
    },
    {
      level: "Avançado",
      title: "Cache simples por chave",
      prompt: "Implemente uma classe CacheSimples com set(chave, valor) e get(chave).",
      starter: "class CacheSimples:\n    def __init__(self):\n        self._store = {}\n\n    def set(self, chave, valor):\n        self._store[chave] = valor\n\n    def get(self, chave):\n        return self._store.get(chave)\n\ncache = CacheSimples()\ncache.set(\"modelo\", \"gemini-flash\")\nprint(cache.get(\"modelo\"))\n",
      requiredToken: "CacheSimples"
    }
  ],
  swift: [
    {
      level: "Iniciante (Do Zero)",
      title: "Estrutura de módulo de estudo em Swift",
      prompt: "Defina uma struct TrilhaModulo com titulo e minutos e imprima a duração formatada.",
      starter: "struct TrilhaModulo {\n    let titulo: String\n    let minutos: Int\n}\n\nlet modulo = TrilhaModulo(titulo: \"Fundamentos de SwiftUI\", minutos: 45)\nprint(\"\\(modulo.titulo) - \\(modulo.minutos) min\")\n",
      requiredToken: "TrilhaModulo"
    },
    {
      level: "Intermediário",
      title: "Filtragem de sessões concluídas",
      prompt: "Crie um array de durações em minutos e filtre apenas as sessões com 30 minutos ou mais.",
      starter: "let sessoes = [15, 30, 45, 20, 60]\nlet focadas = sessoes.filter { $0 >= 30 }\nprint(\"Sessões focadas: \\(focadas.count)\")\n",
      requiredToken: "focadas"
    }
  ],
  default: [
    {
      level: "Prático",
      title: "Validador de estado de tarefa",
      prompt: "Escreva uma lógica que valide se uma tarefa está concluída e exiba o status.",
      starter: "const tarefa = { nome: \"Configurar MissIA\", concluida: true };\nconsole.log(tarefa.concluida ? \"Concluída: \" + tarefa.nome : \"Pendente\");\n",
      requiredToken: "concluida"
    }
  ]
};

const WEEK_DAYS = [
  { id: "seg", label: "Seg" },
  { id: "ter", label: "Ter" },
  { id: "qua", label: "Qua" },
  { id: "qui", label: "Qui" },
  { id: "sex", label: "Sex" },
  { id: "sab", label: "Sáb" },
  { id: "dom", label: "Dom" }
];

document.addEventListener("DOMContentLoaded", async () => {
  const defaultPlan = {
    knownLanguages: "Python",
    currentLevel: "Intermediário",
    targetLanguage: "PHP",
    targetMode: "Aprimorar",
    hoursPerDay: 1.5,
    days: ["seg", "ter", "qua", "qui", "sex", "sab"],
    challengeIndex: 0
  };

  function loadStudyPlan() {
    try {
      return { ...defaultPlan, ...(JSON.parse(localStorage.getItem("missia_study_plan") || "null") || {}) };
    } catch (e) {
      return { ...defaultPlan };
    }
  }

  let studyPlan = loadStudyPlan();
  let lastDetectedKey = null;
  let fbAuth = null;
  let fbDb = null;
  let fbMods = null;

  if (MISSIA_FIREBASE_CONFIG.apiKey && MISSIA_FIREBASE_CONFIG.projectId) {
    try {
      const appMod = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js");
      const authMod = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js");
      const dbMod = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js");
      const fbApp = appMod.initializeApp(MISSIA_FIREBASE_CONFIG);
      fbAuth = authMod.getAuth(fbApp);
      fbDb = dbMod.getFirestore(fbApp);
      fbMods = { authMod, dbMod };

      authMod.onAuthStateChanged(fbAuth, async (user) => {
        if (!user) return;
        const snap = await dbMod.getDoc(dbMod.doc(fbDb, "users", user.uid));
        if (snap.exists() && snap.data().studyPlan) {
          studyPlan = { ...defaultPlan, ...snap.data().studyPlan };
          localStorage.setItem("missia_study_plan", JSON.stringify(studyPlan));
          renderScheduleList();
          syncLanguageContext(true);
        }
      });
    } catch (e) {}
  }

  async function saveStudyPlan(nextPlan) {
    studyPlan = { ...defaultPlan, ...nextPlan };
    localStorage.setItem("missia_study_plan", JSON.stringify(studyPlan));
    if (fbDb && fbAuth && fbAuth.currentUser && fbMods) {
      const { doc, setDoc } = fbMods.dbMod;
      await setDoc(doc(fbDb, "users", fbAuth.currentUser.uid), {
        studyPlan,
        updatedAt: new Date().toISOString()
      }, { merge: true });
    }
  }

  function parseLangFromText(rawText) {
    const lower = (rawText || "").toLowerCase();
    if (lower.includes("typescript")) return "typescript";
    if (lower.includes("javascript") || /\.js\b/.test(lower)) return "javascript";
    if (lower.includes("python") || /\.py\b/.test(lower)) return "python";
    if (lower.includes("php") || /\.php\b/.test(lower)) return "php";
    if (lower.includes("swift") || /\.swift\b/.test(lower)) return "swift";
    if (lower.includes("dart") || /\.dart\b/.test(lower)) return "dart";
    if (lower.includes("c#") || lower.includes("csharp") || /\.cs\b/.test(lower)) return "csharp";
    if (lower.includes("kotlin") || /\.kt\b/.test(lower)) return "kotlin";
    if (lower.includes("css") || /\.css\b/.test(lower)) return "css3";
    if (lower.includes("html") || /\.html\b/.test(lower)) return "html";
    if (lower.includes("java") || /\.java\b/.test(lower)) return "java";
    return null;
  }

  function detectActiveLangKey() {
    const filenameEl = document.getElementById("editor-filename");
    if (filenameEl && filenameEl.textContent) {
      const byFile = parseLangFromText(filenameEl.textContent);
      if (byFile) return byFile;
    }

    const badgeEl = document.getElementById("meaning-lang-badge");
    if (badgeEl && badgeEl.textContent) {
      const byBadge = parseLangFromText(badgeEl.textContent);
      if (byBadge) return byBadge;
    }

    const activeItem = document.querySelector(".is-selected-lang, .language-item.active, .lang-item.active, [data-lang].active");
    if (activeItem) {
      const byItem = parseLangFromText(activeItem.dataset.lang || activeItem.textContent);
      if (byItem) return byItem;
    }

    return parseLangFromText(studyPlan.targetLanguage) || "php";
  }

  const topbar = document.querySelector(".topbar");
  const langBadgeEl = document.createElement("span");
  langBadgeEl.className = "missia-lang-pill";
  langBadgeEl.innerHTML = "<span class=\"missia-lang-dot\"></span><span id=\"missia-lang-name\">PHP</span>";

  const actionsWrap = document.createElement("div");
  actionsWrap.className = "missia-top-actions";
  actionsWrap.innerHTML =
    "<button type=\"button\" id=\"missia-btn-plan\" class=\"missia-chip-btn\">Cronograma e Nível</button>" +
    "<button type=\"button\" id=\"missia-btn-challenge\" class=\"missia-chip-btn is-active\">Modo Desafio</button>";

  if (topbar) {
    topbar.appendChild(langBadgeEl);
    topbar.appendChild(actionsWrap);
  }

const challengeBox = document.createElement("div");
challengeBox.className = "missia-challenge-bar";
challengeBox.innerHTML =
  "<div class=\"missia-challenge-head\">" +
  "  <span id=\"missia-ch-title\" class=\"missia-challenge-title\">Desafio</span>" +
  "  <span id=\"missia-ch-meta\" class=\"missia-challenge-meta\">Nível</span>" +
  "</div>" +
  "<p id=\"missia-ch-desc\" class=\"missia-challenge-desc\"></p>" +
  "<div class=\"missia-challenge-actions\">" +
  "  <button type=\"button\" id=\"missia-ch-load\" class=\"missia-chip-btn\">Carregar no Editor</button>" +
  "  <button type=\"button\" id=\"missia-ch-check\" class=\"missia-chip-btn is-active\">Verificar Solução</button>" +
  "  <button type=\"button\" id=\"missia-ch-next\" class=\"missia-chip-btn\">Próximo Desafio</button>" +
  "  <span id=\"missia-ch-feedback\" class=\"missia-feedback\"></span>" +
  "</div>";

const previewAside = document.querySelector(".workspace-grid > aside:last-child, .preview-panel");
if (previewAside) {
  previewAside.appendChild(challengeBox);
}
  const modalBackdrop = document.createElement("div");
  modalBackdrop.className = "missia-drawer-backdrop";
  modalBackdrop.innerHTML =
    "<div class=\"missia-drawer-modal\">" +
    "  <div class=\"missia-modal-header\">" +
    "    <div>" +
    "      <h3 style=\"margin:0;font-size:1.05rem;\">Trilha Inteligente e Cronograma Semanal</h3>" +
    "      <p style=\"margin:4px 0 0;font-size:0.78rem;color:rgb(71,85,105);\">Defina seu ponto de partida, o foco atual e sua disponibilidade real.</p>" +
    "    </div>" +
    "    <button type=\"button\" id=\"missia-close-modal\" class=\"missia-chip-btn\">Fechar</button>" +
    "  </div>" +
    "  <div class=\"missia-grid-2\">" +
    "    <div class=\"missia-field\">" +
    "      <label>Linguagens que você já domina</label>" +
    "      <input id=\"missia-known-lang\" type=\"text\" />" +
    "    </div>" +
    "    <div class=\"missia-field\">" +
    "      <label>Seu nível atual</label>" +
    "      <select id=\"missia-current-level\">" +
    "        <option value=\"Iniciante\">Iniciante</option>" +
    "        <option value=\"Intermediário\">Intermediário</option>" +
    "        <option value=\"Avançado\">Avançado</option>" +
    "      </select>" +
    "    </div>" +
    "    <div class=\"missia-field\">" +
    "      <label>Linguagem alvo agora</label>" +
    "      <select id=\"missia-target-lang\">" +
    "        <option value=\"PHP\">PHP</option>" +
    "        <option value=\"Swift\">Swift</option>" +
    "        <option value=\"Python\">Python</option>" +
    "        <option value=\"TypeScript\">TypeScript</option>" +
    "        <option value=\"JavaScript\">JavaScript</option>" +
    "        <option value=\"Java\">Java</option>" +
    "        <option value=\"C#\">C#</option>" +
    "        <option value=\"Dart\">Dart</option>" +
    "      </select>" +
    "    </div>" +
    "    <div class=\"missia-field\">" +
    "      <label>Objetivo na linguagem alvo</label>" +
    "      <select id=\"missia-target-mode\">" +
    "        <option value=\"Do zero\">Aprender do zero</option>" +
    "        <option value=\"Aprimorar\">Aprimorar o que já sei</option>" +
    "        <option value=\"Ambos\">Aprimorar base + nova stack</option>" +
    "      </select>" +
    "    </div>" +
    "    <div class=\"missia-field\">" +
    "      <label>Horas disponíveis por dia de estudo</label>" +
    "      <input id=\"missia-hours-day\" type=\"number\" min=\"0.5\" max=\"8\" step=\"0.5\" />" +
    "    </div>" +
    "  </div>" +
    "  <div class=\"missia-field\">" +
    "    <label>Dias disponíveis na semana</label>" +
    "    <div id=\"missia-days-container\" class=\"missia-days-row\"></div>" +
    "  </div>" +
    "  <div style=\"display:flex;gap:10px;flex-wrap:wrap;\">" +
    "    <button type=\"button\" id=\"missia-save-plan\" class=\"missia-chip-btn is-active\">Gerar e Salvar Cronograma</button>" +
    "  </div>" +
    "  <div id=\"missia-schedule-output\" class=\"missia-schedule-list\"></div>" +
    "</div>";

  document.body.appendChild(modalBackdrop);

  function getCurrentChallenge(langKey) {
    const list = CHALLENGES_BANK[langKey] || CHALLENGES_BANK.default;
    const idx = studyPlan.challengeIndex % list.length;
    return { list, idx, item: list[idx] };
  }

  function renderChallengeBox(langKey) {
    const { item } = getCurrentChallenge(langKey);
    const titleEl = document.getElementById("missia-ch-title");
    const metaEl = document.getElementById("missia-ch-meta");
    const descEl = document.getElementById("missia-ch-desc");
    if (titleEl) titleEl.textContent = item.title;
    if (metaEl) metaEl.textContent = item.level + " • " + studyPlan.targetMode;
    if (descEl) descEl.textContent = item.prompt;
  }

  function syncLanguageContext(forceRender = false) {
    const key = detectActiveLangKey();
    if (!forceRender && key === lastDetectedKey) return;
    lastDetectedKey = key;

    const pal = LANG_PALETTES[key] || {
      accent: "rgb(2, 132, 199)",
      secondary: "rgb(3, 105, 161)",
      label: key.toUpperCase()
    };

    document.documentElement.style.setProperty("--missia-lang-accent", pal.accent);
    document.documentElement.style.setProperty("--missia-lang-secondary", pal.secondary);

    const nameEl = document.getElementById("missia-lang-name");
    if (nameEl && nameEl.textContent !== pal.label) {
      nameEl.textContent = pal.label;
    }

    renderChallengeBox(key);
  }

  function buildWeeklySchedule(plan) {
    const selectedDays = plan.days && plan.days.length ? plan.days : ["seg", "qua", "sex"];
    const hours = Number(plan.hoursPerDay) || 1;
    const dayNames = {
      seg: "Segunda-feira",
      ter: "Terça-feira",
      qua: "Quarta-feira",
      qui: "Quinta-feira",
      sex: "Sexta-feira",
      sab: "Sábado",
      dom: "Domingo"
    };

    return selectedDays.map((dayId, index) => {
      const foco = index % 2 === 0
        ? plan.targetLanguage + " (" + plan.targetMode + ")"
        : plan.knownLanguages + " (" + plan.currentLevel + " → prática)";
      return {
        dayLabel: dayNames[dayId] || dayId,
        foco,
        duration: hours + "h"
      };
    });
  }

  function renderScheduleList() {
    const out = document.getElementById("missia-schedule-output");
    if (!out) return;
    const rows = buildWeeklySchedule(studyPlan);
    out.innerHTML = rows.map((r) =>
      "<div class=\"missia-schedule-item\">" +
      "  <div><strong>" + r.dayLabel + "</strong> — <span>" + r.foco + "</span></div>" +
      "  <span style=\"color:rgb(2,132,199);font-weight:800;\">" + r.duration + "</span>" +
      "</div>"
    ).join("");
  }

  function fillModalInputs() {
    const currentKey = detectActiveLangKey();
    const labelMap = { php: "PHP", swift: "Swift", python: "Python", javascript: "JavaScript", typescript: "TypeScript", java: "Java", csharp: "C#", dart: "Dart" };
    document.getElementById("missia-known-lang").value = studyPlan.knownLanguages || "";
    document.getElementById("missia-current-level").value = studyPlan.currentLevel || "Intermediário";
    document.getElementById("missia-target-lang").value = labelMap[currentKey] || studyPlan.targetLanguage || "PHP";
    document.getElementById("missia-target-mode").value = studyPlan.targetMode || "Aprimorar";
    document.getElementById("missia-hours-day").value = studyPlan.hoursPerDay || 1.5;

    const daysContainer = document.getElementById("missia-days-container");
    daysContainer.innerHTML = WEEK_DAYS.map((d) => {
      const selected = (studyPlan.days || []).includes(d.id);
      return "<button type=\"button\" data-day=\"" + d.id + "\" class=\"missia-day-btn" + (selected ? " is-selected" : "") + "\">" + d.label + "</button>";
    }).join("");

    daysContainer.querySelectorAll(".missia-day-btn").forEach((btn) => {
      btn.addEventListener("click", () => btn.classList.toggle("is-selected"));
    });

    renderScheduleList();
  }

  document.getElementById("missia-btn-plan")?.addEventListener("click", () => {
    fillModalInputs();
    modalBackdrop.classList.add("is-open");
  });

  document.getElementById("missia-close-modal")?.addEventListener("click", () => {
    modalBackdrop.classList.remove("is-open");
  });

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) modalBackdrop.classList.remove("is-open");
  });

  document.getElementById("missia-save-plan")?.addEventListener("click", async () => {
    const selectedDays = Array.from(document.querySelectorAll("#missia-days-container .missia-day-btn.is-selected"))
      .map((b) => b.dataset.day);

    await saveStudyPlan({
      ...studyPlan,
      knownLanguages: document.getElementById("missia-known-lang").value.trim() || "Python",
      currentLevel: document.getElementById("missia-current-level").value,
      targetLanguage: document.getElementById("missia-target-lang").value,
      targetMode: document.getElementById("missia-target-mode").value,
      hoursPerDay: Number(document.getElementById("missia-hours-day").value) || 1,
      days: selectedDays.length ? selectedDays : ["seg", "qua", "sex"]
    });

    renderScheduleList();
    syncLanguageContext(true);
  });

  document.getElementById("missia-btn-challenge")?.addEventListener("click", (e) => {
    const isHidden = challengeBox.style.display === "none";
    challengeBox.style.display = isHidden ? "grid" : "none";
    e.currentTarget.classList.toggle("is-active", isHidden);
  });

  document.getElementById("missia-ch-load")?.addEventListener("click", () => {
    const editor = document.getElementById("code-editor");
    const { item } = getCurrentChallenge(detectActiveLangKey());
    if (editor) {
      editor.value = item.starter;
      editor.dispatchEvent(new Event("input", { bubbles: true }));
    }
    const fb = document.getElementById("missia-ch-feedback");
    if (fb) fb.textContent = "Base carregada no editor.";
  });

  document.getElementById("missia-ch-check")?.addEventListener("click", () => {
    const editor = document.getElementById("code-editor");
    const fb = document.getElementById("missia-ch-feedback");
    const { item } = getCurrentChallenge(detectActiveLangKey());
    const code = (editor && editor.value) || "";
    const ok = code.includes(item.requiredToken);
    if (fb) {
      fb.textContent = ok
        ? "Estrutura validada com sucesso — você pode avançar para o próximo desafio."
        : "Ainda falta incluir \"" + item.requiredToken + "\" no código.";
    }
  });

  document.getElementById("missia-ch-next")?.addEventListener("click", async () => {
    const key = detectActiveLangKey();
    const { list } = getCurrentChallenge(key);
    await saveStudyPlan({ ...studyPlan, challengeIndex: (studyPlan.challengeIndex + 1) % list.length });
    renderChallengeBox(key);
    const fb = document.getElementById("missia-ch-feedback");
    if (fb) fb.textContent = "";
  });

  document.addEventListener("click", () => setTimeout(() => syncLanguageContext(false), 60));
  setInterval(() => syncLanguageContext(false), 600);

  syncLanguageContext(true);
});
document.body.setAttribute("data-mobile-tab", "editor");

  const mobileNav = document.createElement("nav");
  mobileNav.className = "missia-mobile-nav";
  mobileNav.innerHTML =
    "<button type=\"button\" data-tab=\"langs\" class=\"missia-mob-tab\">Linguagens</button>" +
    "<button type=\"button\" data-tab=\"editor\" class=\"missia-mob-tab is-active\">Editor</button>" +
    "<button type=\"button\" data-tab=\"preview\" class=\"missia-mob-tab\">Preview & Desafio</button>";
  document.body.appendChild(mobileNav);

  mobileNav.querySelectorAll(".missia-mob-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      document.body.setAttribute("data-mobile-tab", tab);
      mobileNav.querySelectorAll(".missia-mob-tab").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      if (tab === "preview") {
        const mobileBtn = document.querySelector("#btn-mobile-view, [data-view='mobile']");
        if (mobileBtn) mobileBtn.click();
      }
    });
  });

  if (window.innerWidth <= 900) {
    const mobileBtn = document.querySelector("#btn-mobile-view, [data-view='mobile']");
    if (mobileBtn) mobileBtn.click();
  }

  const accDropdown = document.querySelector(".account-dropdown, .acc-actions");
  if (accDropdown && !document.getElementById("missia-delete-account-btn")) {
    const legalWrap = document.createElement("div");
    legalWrap.className = "missia-legal-links";
    legalWrap.innerHTML =
      "<button type=\"button\" id=\"missia-privacy-btn\" class=\"missia-chip-btn\" style=\"width:100%;\">Política de Privacidade</button>" +
      "<button type=\"button\" id=\"missia-delete-account-btn\" class=\"missia-delete-acc-btn\">Excluir Minha Conta e Dados</button>";
    accDropdown.appendChild(legalWrap);

    document.getElementById("missia-privacy-btn")?.addEventListener("click", () => {
      alert("Política de Privacidade MissIA: Seus dados de e-mail, foto de perfil e cronograma são usados exclusivamente para sincronizar seu progresso de estudos e podem ser excluídos a qualquer momento.");
    });

    document.getElementById("missia-delete-account-btn")?.addEventListener("click", async () => {
      const confirmed = confirm("Tem certeza? Isso apagará permanentemente sua conta e seu progresso de estudos.");
      if (!confirmed) return;
      try {
        if (fbAuth && fbAuth.currentUser && fbMods) {
          const uid = fbAuth.currentUser.uid;
          if (fbDb && fbMods.dbMod.deleteDoc) {
            await fbMods.dbMod.deleteDoc(fbMods.dbMod.doc(fbDb, "users", uid));
          }
          await fbMods.authMod.deleteUser(fbAuth.currentUser);
        }
        localStorage.removeItem("missia_study_plan");
        alert("Conta e dados excluídos com sucesso.");
        location.reload();
      } catch (err) {
        alert("Para excluir sua conta por segurança, faça login novamente e tente de novo.");
      }
    });
  }