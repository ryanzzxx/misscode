const APP_CONFIG = {
  proxyUrl: 'https://misscode-api.vercel.app/api/missia',
  firebaseConfig: {
    apiKey: 'AIzaSyB5GnlKjwNGZJC1SsTjZJtkMvwBpTMHYBo',
    authDomain: 'missia2.firebaseapp.com',
    projectId: 'missia2',
    storageBucket: 'missia2.firebasestorage.app',
    messagingSenderId: '452629978625',
    appId: '1:452629978625:web:4c2f4325da1999ba9742b8'
  }
};

const CATALOG = window.MISSCODE_CATALOG || [];
const DICT = window.TOKEN_DICTIONARY || {};

const state = {
  langId: 'html5',
  projIdx: 0,
  locale: 'PT',
  xp: 0,
  streak: 1,
  lastActiveDate: null,
  completed: {},
  savedCode: {},
  user: null,
  isMobile: false
};

let fbAuth = null;
let confirmationResult = null;
let recaptchaVerifier = null;

function detectEnvironment() {
  const isCapacitorNative = Boolean(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
  const isSmallViewport = window.innerWidth <= 900;
  const isTouchUA = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  state.isMobile = isCapacitorNative || isSmallViewport || (isTouchUA && window.innerWidth <= 1024);
  document.body.classList.toggle('is-mobile-device', state.isMobile);
}

function storageKey() {
  return state.user ? `misscode_v3_${state.user.uid}` : 'misscode_v3_guest';
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (raw) {
      const parsed = JSON.parse(raw);
      state.xp = parsed.xp || 0;
      state.streak = parsed.streak || 1;
      state.lastActiveDate = parsed.lastActiveDate || null;
      state.completed = parsed.completed || {};
      state.savedCode = parsed.savedCode || {};
      if (parsed.langId) state.langId = parsed.langId;
      if (typeof parsed.projIdx === 'number') state.projIdx = parsed.projIdx;
    }
  } catch (_) {}
  updateStreakOnVisit();
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey(), JSON.stringify({
      xp: state.xp,
      streak: state.streak,
      lastActiveDate: state.lastActiveDate,
      completed: state.completed,
      savedCode: state.savedCode,
      langId: state.langId,
      projIdx: state.projIdx
    }));
  } catch (_) {}
}

function updateStreakOnVisit() {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.lastActiveDate) {
    state.lastActiveDate = today;
    state.streak = 1;
    return;
  }
  if (state.lastActiveDate !== today) {
    const diffDays = Math.round((new Date(today) - new Date(state.lastActiveDate)) / 86400000);
    state.streak = diffDays === 1 ? state.streak + 1 : 1;
    state.lastActiveDate = today;
  }
}

function getActiveLang() {
  return CATALOG.find(l => l.id === state.langId) || CATALOG[0] || {
    id: 'html5',
    name: 'HTML5',
    ext: 'html',
    color: '#ea580c',
    badge: 'H5',
    projects: [{ t: '1. Projeto Inicial', d: 'Iniciante', x: 80, p: 'Edite o código.', s: '<h1>Olá</h1>', r: ['<h1'] }]
  };
}

function getActiveProject() {
  const lang = getActiveLang();
  return lang.projects[state.projIdx] || lang.projects[0];
}

function projectKey(langId = state.langId, idx = state.projIdx) {
  return `${langId}:${idx}`;
}

function getActiveEditor() {
  return state.isMobile
    ? document.getElementById('mbCodeEditor')
    : document.getElementById('dtCodeEditor');
}

function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.hidden = false;
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.hidden = true; }, 3400);
}

function triggerHaptic(type = 'light') {
  try {
    if (window.Capacitor?.Plugins?.Haptics) {
      window.Capacitor.Plugins.Haptics.impact({ style: type === 'heavy' ? 'HEAVY' : 'LIGHT' });
    } else if (navigator.vibrate) {
      navigator.vibrate(type === 'heavy' ? [40, 30, 60] : 18);
    }
  } catch (_) {}
}

function renderAll() {
  const lang = getActiveLang();
  const proj = getActiveProject();
  const key = projectKey();
  const isDone = Boolean(state.completed[key]);
  const code = state.savedCode[key] !== undefined ? state.savedCode[key] : proj.s;

  const level = Math.floor(state.xp / 300) + 1;
  document.getElementById('dtXpPill').textContent = `🔥 ${state.streak}d • ${state.xp} XP`;
  document.getElementById('mbXpBadge').textContent = `🔥${state.streak}d ⚡${state.xp}`;
  document.getElementById('statLevel').textContent = `Nível ${level}`;
  document.getElementById('statXp').textContent = `${state.xp} XP`;
  document.getElementById('statStreak').textContent = `${state.streak} dia(s)`;
  const doneCount = Object.keys(state.completed).length;
  document.getElementById('statCompleted').textContent = `${doneCount} / 220`;
  document.getElementById('statXpBar').style.width = `${Math.min(100, ((state.xp % 300) / 300) * 100)}%`;

  document.getElementById('dtActiveLangPill').textContent = lang.name;
  document.getElementById('dtActiveLangPill').style.borderColor = lang.color;
  document.getElementById('dtFileName').textContent = `projeto_${String(state.projIdx + 1).padStart(2, '0')}.${lang.ext}`;
  document.getElementById('dtDictLang').textContent = lang.name;

  renderLanguageLists();
  renderProjectSelect();

  document.getElementById('dtChallengeBadge').textContent = `${proj.d} • +${proj.x} XP`;
  document.getElementById('dtChallengeStatus').textContent = isDone ? '✓ Concluído' : 'Pendente';
  document.getElementById('dtChallengeStatus').className = `status-badge ${isDone ? 'done' : 'pending'}`;
  document.getElementById('dtChallengeTitle').textContent = proj.t;
  document.getElementById('dtChallengePrompt').textContent = proj.p;

  document.getElementById('mbActiveLangTitle').textContent = `${lang.name} • ${state.projIdx + 1}/10 ▾`;
  document.getElementById('mbActiveProjName').textContent = proj.t;
  document.getElementById('mbChallengeBadge').textContent = `${proj.d} • +${proj.x} XP`;
  document.getElementById('mbChallengeStatus').textContent = isDone ? '✓ Concluído' : 'Pendente';
  document.getElementById('mbChallengeStatus').className = `status-badge ${isDone ? 'done' : 'pending'}`;
  document.getElementById('mbChallengeTitle').textContent = proj.t;
  document.getElementById('mbChallengePrompt').textContent = proj.p;

  const dtEd = document.getElementById('dtCodeEditor');
  const mbEd = document.getElementById('mbCodeEditor');
  dtEd.value = code;
  mbEd.value = code;
  syncLineNumbers(dtEd, document.getElementById('dtLineNumbers'));
  syncLineNumbers(mbEd, document.getElementById('mbLineNumbers'));
  extractCodeTokens(code);
  updateLivePreview(code);
}

function renderLanguageLists() {
  const dtList = document.getElementById('dtLanguageList');
  const mbGrid = document.getElementById('mbLanguageGrid');
  dtList.innerHTML = '';
  mbGrid.innerHTML = '';

  CATALOG.forEach(lang => {
    const completedInLang = lang.projects.filter((_, i) => state.completed[`${lang.id}:${i}`]).length;
    const isActive = lang.id === state.langId;

    const createBtn = () => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `lang-item-btn ${isActive ? 'active' : ''}`;
      btn.innerHTML = `
        <span class="lang-icon-box" style="background:${lang.color}">${lang.badge}</span>
        <div class="lang-item-info">
          <strong>${lang.name}</strong>
          <small>10 projetos • .${lang.ext}</small>
        </div>
        <span class="lang-prog-pill">${completedInLang}/10</span>
      `;
      btn.onclick = () => {
        state.langId = lang.id;
        state.projIdx = 0;
        saveProgress();
        renderAll();
        if (state.isMobile) renderMobileProjectList();
      };
      return btn;
    };

    dtList.appendChild(createBtn());
    mbGrid.appendChild(createBtn());
  });
}

function renderProjectSelect() {
  const lang = getActiveLang();
  const sel = document.getElementById('dtProjectSelect');
  sel.innerHTML = '';
  lang.projects.forEach((p, idx) => {
    const done = state.completed[`${lang.id}:${idx}`] ? '✓ ' : '';
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${done}${p.t} (+${p.x} XP)`;
    if (idx === state.projIdx) opt.selected = true;
    sel.appendChild(opt);
  });
}

function renderMobileProjectList() {
  const lang = getActiveLang();
  document.getElementById('mbSelectedLangHeading').textContent = `Projetos de ${lang.name} (Toque para abrir)`;
  const list = document.getElementById('mbProjectList');
  list.innerHTML = '';

  lang.projects.forEach((p, idx) => {
    const done = state.completed[`${lang.id}:${idx}`];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `mb-proj-item ${idx === state.projIdx ? 'active' : ''}`;
    btn.innerHTML = `<span>${done ? '✅' : '▫️'} ${p.t}</span><strong>+${p.x} XP</strong>`;
    btn.onclick = () => {
      state.projIdx = idx;
      saveProgress();
      renderAll();
      document.getElementById('catalogModal').hidden = true;
    };
    list.appendChild(btn);
  });
}

function syncLineNumbers(textarea, preEl) {
  const lines = textarea.value.split('\n').length;
  let nums = '';
  for (let i = 1; i <= lines; i++) nums += i + '\n';
  preEl.textContent = nums;
  preEl.scrollTop = textarea.scrollTop;
}

function lookupWordAtCursor(textarea) {
  const pos = textarea.selectionStart || 0;
  const text = textarea.value;
  const left = text.slice(0, pos).match(/[a-zA-Z0-9_]+$/);
  const right = text.slice(pos).match(/^[a-zA-Z0-9_]+/);
  const word = (left ? left[0] : '') + (right ? right[0] : '');
  if (!word) return;

  const meaning = DICT[word] || DICT[word.toUpperCase()] || DICT[word.toLowerCase()];
  if (meaning) {
    document.getElementById('dtDictToken').textContent = word;
    document.getElementById('dtDictDesc').textContent = meaning;
    document.getElementById('mbDictText').textContent = `${word}: ${meaning}`;
  }
}

function extractCodeTokens(code) {
  const bar = document.getElementById('dtTokenChips');
  bar.innerHTML = '';
  const words = Array.from(new Set(code.match(/[a-zA-Z_]{2,18}/g) || [])).slice(0, 14);
  words.forEach(w => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'token-chip';
    chip.textContent = w;
    chip.onclick = () => {
      const meaning = DICT[w] || DICT[w.toUpperCase()] || `Identificador/comando "${w}" utilizado neste bloco de código.`;
      document.getElementById('dtDictToken').textContent = w;
      document.getElementById('dtDictDesc').textContent = meaning;
    };
    bar.appendChild(chip);
  });
}

function updateLivePreview(code) {
  const lang = getActiveLang();
  const proj = getActiveProject();
  const isWebRenderable = ['html5', 'css3', 'javascript'].includes(lang.id);

  let htmlDoc = '';
  if (isWebRenderable) {
    htmlDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 14px; margin: 0; }
      button { cursor: pointer; }
    </style></head><body>${code}</body></html>`;
  } else {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const linesCount = code.trim().split('\n').length;
    htmlDoc = `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
      body { font-family: system-ui, sans-serif; background: #090e1a; color: #e2e8f0; padding: 14px; margin: 0; }
      .sim-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
      .sim-badge { background:#10b981; color:#052e16; font-weight:800; font-size:11px; padding:3px 8px; border-radius:6px; }
      .sim-card { background:#11192c; border:1px solid #1e2d4a; border-radius:10px; padding:12px; }
      pre { font-family: monospace; font-size: 12px; color: #7dd3fc; white-space: pre-wrap; margin: 8px 0 0; }
    </style></head><body>
      <div class="sim-head">
        <strong style="font-size:13px">${proj.t}</strong>
        <span class="sim-badge">SIMULADOR ${lang.name.toUpperCase()}</span>
      </div>
      <div class="sim-card">
        <div style="font-size:12px;color:#94a3b8">Ambiente isolado pronto • ${linesCount} linha(s) analisada(s)</div>
        <pre>${escaped}</pre>
      </div>
    </body></html>`;
  }

  document.getElementById('dtPreviewFrame').srcdoc = htmlDoc;
  document.getElementById('mbPreviewFrame').srcdoc = htmlDoc;
}

function stripComments(code) {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .replace(/#.*$/gm, '');
}

function verifyChallengeSolution() {
  const proj = getActiveProject();
  const key = projectKey();
  const userRaw = getActiveEditor().value;

  const normUser = userRaw.replace(/\s+/g, ' ').trim();
  const normStarter = proj.s.replace(/\s+/g, ' ').trim();

  if (normUser === normStarter || normUser.length < 10) {
    triggerHaptic('light');
    showToast('⚠️ Você ainda não alterou o código inicial. Implemente a solução primeiro!');
    if (state.isMobile) switchMobileTab('challenge');
    return;
  }

  const cleanUser = stripComments(userRaw);
  const cleanStarter = stripComments(proj.s);

  const missing = [];
  for (const token of proj.r) {
    const countInStarter = cleanStarter.split(token).length - 1;
    const countInUser = cleanUser.split(token).length - 1;
    if (countInUser === 0 || (countInStarter > 0 && countInUser <= countInStarter)) {
      missing.push(token);
    }
  }

  if (missing.length > 0) {
    triggerHaptic('light');
    showToast(`❌ Faltou implementar: ${missing.join(', ')}`);
    if (state.isMobile) switchMobileTab('challenge');
    return;
  }

  const openBraces = (cleanUser.match(/\{/g) || []).length;
  const closeBraces = (cleanUser.match(/\}/g) || []).length;
  if (openBraces !== closeBraces) {
    showToast('⚠️ Erro de sintaxe: verifique as chaves { } abertas e fechadas.');
    return;
  }

  state.savedCode[key] = userRaw;
  if (!state.completed[key]) {
    state.completed[key] = true;
    state.xp += proj.x;
    triggerHaptic('heavy');
    showToast(`🎉 Desafio aprovado! +${proj.x} XP conquistados!`);
  } else {
    triggerHaptic('light');
    showToast('✅ Solução validada novamente (XP já contabilizado neste projeto).');
  }

  saveProgress();
  renderAll();
}

async function askMissIA(question, feedEl, inputEl) {
  const lang = getActiveLang();
  const proj = getActiveProject();
  const code = getActiveEditor().value;

  const userBubble = document.createElement('div');
  userBubble.className = 'ai-msg user';
  userBubble.textContent = question;
  feedEl.appendChild(userBubble);
  inputEl.value = '';
  feedEl.scrollTop = feedEl.scrollHeight;

  const botBubble = document.createElement('div');
  botBubble.className = 'ai-msg bot';
  botBubble.textContent = 'Analisando seu código...';
  feedEl.appendChild(botBubble);

  try {
    const prompt = `Você é a MissIA, tutora de programação do app MissCode. Responda em português de forma direta, didática e sem entregar a resposta inteira pronta.\nLinguagem: ${lang.name}\nDesafio: ${proj.t} - ${proj.p}\nCódigo atual do aluno:\n${code}\n\nPergunta do aluno: ${question}`;
    const res = await fetch(APP_CONFIG.proxyUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    botBubble.textContent = data.reply || data.text || data.response || 'Não consegui analisar agora. Tente novamente.';
  } catch (err) {
    botBubble.textContent = 'Sem conexão com a MissIA no momento. Verifique sua internet.';
  }
  feedEl.scrollTop = feedEl.scrollHeight;
}

function initFirebase() {
  try {
    if (!window.firebase || !APP_CONFIG.firebaseConfig.apiKey) return;
    if (!firebase.apps.length) firebase.initializeApp(APP_CONFIG.firebaseConfig);
    fbAuth = firebase.auth();

    fbAuth.onAuthStateChanged(user => {
      state.user = user || null;
      loadProgress();
      renderAll();
      const loggedBox = document.getElementById('authLoggedBox');
      const guestBox = document.getElementById('authGuestBox');
      if (user) {
        loggedBox.hidden = false;
        guestBox.hidden = true;
        document.getElementById('authUserInfo').textContent = `Conectado como: ${user.email || user.phoneNumber || user.uid}`;
        document.getElementById('dtBtnAuth').textContent = 'Conta ✓';
      } else {
        loggedBox.hidden = true;
        guestBox.hidden = false;
        document.getElementById('dtBtnAuth').textContent = 'Entrar';
      }
    });
  } catch (_) {}
}

function switchMobileTab(tabName) {
  document.querySelectorAll('.mb-tab').forEach(b => b.classList.toggle('active', b.dataset.mbtab === tabName));
  document.querySelectorAll('.mb-pane').forEach(p => p.classList.remove('active'));
  const map = { preview: 'mbPanePreview', challenge: 'mbPaneChallenge', ai: 'mbPaneAi', tools: 'mbPaneTools' };
  const target = document.getElementById(map[tabName]);
  if (target) target.classList.add('active');
}

function setupMobileKeyboardDetection() {
  const shell = document.getElementById('mobileApp');
  const mbEditor = document.getElementById('mbCodeEditor');
  const baseHeight = window.innerHeight;

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      const isKbOpen = window.visualViewport.height < baseHeight * 0.78;
      shell.classList.toggle('keyboard-open', isKbOpen);
    });
  }

  mbEditor.addEventListener('focus', () => shell.classList.add('keyboard-open'));
  mbEditor.addEventListener('blur', () => setTimeout(() => shell.classList.remove('keyboard-open'), 150));
}

function bindEvents() {
  window.addEventListener('resize', detectEnvironment);

  const dtEd = document.getElementById('dtCodeEditor');
  const mbEd = document.getElementById('mbCodeEditor');

  const handleCodeInput = (source, target, lineEl) => {
    const val = source.value;
    target.value = val;
    state.savedCode[projectKey()] = val;
    syncLineNumbers(source, lineEl);
    extractCodeTokens(val);
    clearTimeout(source._prevTimer);
    source._prevTimer = setTimeout(() => updateLivePreview(val), 350);
  };

  dtEd.addEventListener('input', () => handleCodeInput(dtEd, mbEd, document.getElementById('dtLineNumbers')));
  mbEd.addEventListener('input', () => handleCodeInput(mbEd, dtEd, document.getElementById('mbLineNumbers')));

  dtEd.addEventListener('scroll', () => { document.getElementById('dtLineNumbers').scrollTop = dtEd.scrollTop; });
  mbEd.addEventListener('scroll', () => { document.getElementById('mbLineNumbers').scrollTop = mbEd.scrollTop; });

  dtEd.addEventListener('click', () => lookupWordAtCursor(dtEd));
  dtEd.addEventListener('keyup', () => lookupWordAtCursor(dtEd));
  mbEd.addEventListener('click', () => lookupWordAtCursor(mbEd));
  mbEd.addEventListener('keyup', () => lookupWordAtCursor(mbEd));

  dtEd.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = dtEd.selectionStart;
      dtEd.value = dtEd.value.substring(0, s) + '  ' + dtEd.value.substring(dtEd.selectionEnd);
      dtEd.selectionStart = dtEd.selectionEnd = s + 2;
      handleCodeInput(dtEd, mbEd, document.getElementById('dtLineNumbers'));
    }
  });

  document.querySelectorAll('#mbSymbolBar button[data-ins]').forEach(btn => {
    btn.addEventListener('mousedown', e => {
      e.preventDefault();
      const ins = btn.dataset.ins;
      const s = mbEd.selectionStart;
      mbEd.value = mbEd.value.substring(0, s) + ins + mbEd.value.substring(mbEd.selectionEnd);
      mbEd.selectionStart = mbEd.selectionEnd = s + ins.length;
      handleCodeInput(mbEd, dtEd, document.getElementById('mbLineNumbers'));
    });
  });

  document.getElementById('mbRunCodeBtn').addEventListener('mousedown', e => {
    e.preventDefault();
    mbEd.blur();
    updateLivePreview(mbEd.value);
    switchMobileTab('preview');
    showToast('▶️ Preview atualizado!');
  });

  document.getElementById('dtProjectSelect').addEventListener('change', e => {
    state.projIdx = Number(e.target.value);
    saveProgress();
    renderAll();
  });

  document.getElementById('dtFramePc').onclick = () => {
    document.getElementById('dtDeviceFrame').className = 'device-frame pc-mode';
    document.getElementById('dtFramePc').classList.add('active');
    document.getElementById('dtFrameMobile').classList.remove('active');
  };
  document.getElementById('dtFrameMobile').onclick = () => {
    document.getElementById('dtDeviceFrame').className = 'device-frame mobile-mode';
    document.getElementById('dtFrameMobile').classList.add('active');
    document.getElementById('dtFramePc').classList.remove('active');
  };
  document.getElementById('dtBtnRefresh').onclick = () => {
    updateLivePreview(dtEd.value);
    showToast('🔄 Preview atualizado');
  };

  const resetProject = () => {
    delete state.savedCode[projectKey()];
    saveProgress();
    renderAll();
    showToast('↩️ Código inicial restaurado.');
  };
  document.getElementById('dtBtnReset').onclick = resetProject;
  document.getElementById('mbBtnReset').onclick = resetProject;

  document.getElementById('dtBtnVerify').onclick = verifyChallengeSolution;
  document.getElementById('mbBtnVerify').onclick = verifyChallengeSolution;

  const nextProject = () => {
    const lang = getActiveLang();
    state.projIdx = (state.projIdx + 1) % lang.projects.length;
    saveProgress();
    renderAll();
  };
  document.getElementById('dtBtnNext').onclick = nextProject;
  document.getElementById('mbBtnNext').onclick = nextProject;

  const manualSave = () => {
    state.savedCode[projectKey()] = getActiveEditor().value;
    saveProgress();
    showToast('💾 Progresso salvo com sucesso!');
  };
  document.getElementById('dtBtnSave').onclick = manualSave;
  document.getElementById('mbBtnSave').onclick = manualSave;

  const downloadCode = () => {
    const lang = getActiveLang();
    const blob = new Blob([getActiveEditor().value], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `misscode_${lang.id}_p${state.projIdx + 1}.${lang.ext}`;
    a.click();
  };
  document.getElementById('dtBtnDownload').onclick = downloadCode;
  document.getElementById('mbBtnDownload').onclick = downloadCode;

  document.getElementById('dtBtnExport').onclick = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'misscode_backup.json';
    a.click();
  };

  document.getElementById('dtBtnLocale').onclick = () => {
    state.locale = state.locale === 'PT' ? 'EN' : 'PT';
    document.getElementById('dtBtnLocale').textContent = state.locale;
    showToast(`Idioma da interface: ${state.locale}`);
  };

  document.querySelectorAll('.mb-tab').forEach(btn => {
    btn.onclick = () => switchMobileTab(btn.dataset.mbtab);
  });

  document.getElementById('mbOpenCatalogBtn').onclick = () => {
    renderLanguageLists();
    renderMobileProjectList();
    document.getElementById('catalogModal').hidden = false;
  };
  document.getElementById('dtFabAi').onclick = () => { document.getElementById('aiModal').hidden = false; };
  document.getElementById('dtBtnSchedule').onclick = () => { document.getElementById('scheduleModal').hidden = false; };
  document.getElementById('mbBtnSchedule').onclick = () => { document.getElementById('scheduleModal').hidden = false; };
  document.getElementById('dtBtnAuth').onclick = () => { document.getElementById('authModal').hidden = false; };
  document.getElementById('mbAuthBtn').onclick = () => { document.getElementById('authModal').hidden = false; };

  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.onclick = () => { document.getElementById(btn.dataset.close).hidden = true; };
  });

  document.getElementById('dtAiForm').onsubmit = e => {
    e.preventDefault();
    const inp = document.getElementById('dtAiInput');
    if (inp.value.trim()) askMissIA(inp.value.trim(), document.getElementById('dtAiMessages'), inp);
  };
  document.getElementById('mbAiForm').onsubmit = e => {
    e.preventDefault();
    const inp = document.getElementById('mbAiInput');
    if (inp.value.trim()) askMissIA(inp.value.trim(), document.getElementById('mbAiMessages'), inp);
  };

  const feedback = document.getElementById('authFeedback');
  document.getElementById('emailAuthForm').onsubmit = async e => {
    e.preventDefault();
    if (!fbAuth) return;
    try {
      await fbAuth.signInWithEmailAndPassword(
        document.getElementById('authEmail').value,
        document.getElementById('authPassword').value
      );
      document.getElementById('authModal').hidden = true;
      showToast('✅ Login realizado!');
    } catch (err) { feedback.textContent = err.message; }
  };

  document.getElementById('btnRegisterEmail').onclick = async () => {
    if (!fbAuth) return;
    try {
      await fbAuth.createUserWithEmailAndPassword(
        document.getElementById('authEmail').value,
        document.getElementById('authPassword').value
      );
      document.getElementById('authModal').hidden = true;
      showToast('🎉 Conta criada!');
    } catch (err) { feedback.textContent = err.message; }
  };

  document.getElementById('btnSendSms').onclick = async () => {
    if (!fbAuth) return;
    try {
      if (!recaptchaVerifier) {
        recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { size: 'invisible' });
      }
      confirmationResult = await fbAuth.signInWithPhoneNumber(document.getElementById('authPhone').value, recaptchaVerifier);
      document.getElementById('otpVerifyBox').hidden = false;
      feedback.textContent = 'Código SMS enviado!';
    } catch (err) { feedback.textContent = err.message; }
  };

  document.getElementById('btnVerifyOtp').onclick = async () => {
    if (!confirmationResult) return;
    try {
      await confirmationResult.confirm(document.getElementById('authOtp').value);
      document.getElementById('authModal').hidden = true;
      showToast('✅ Telefone verificado!');
    } catch (err) { feedback.textContent = err.message; }
  };

  document.getElementById('btnGoogleLogin').onclick = async () => {
    if (!fbAuth) return;
    try {
      await fbAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      document.getElementById('authModal').hidden = true;
    } catch (err) { feedback.textContent = err.message; }
  };

  document.getElementById('btnAppleLogin').onclick = async () => {
    if (!fbAuth) return;
    try {
      await fbAuth.signInWithPopup(new firebase.auth.OAuthProvider('apple.com'));
      document.getElementById('authModal').hidden = true;
    } catch (err) { feedback.textContent = err.message; }
  };

  document.getElementById('btnLogout').onclick = async () => {
    if (fbAuth) await fbAuth.signOut();
    showToast('Sessão encerrada.');
  };
}

document.addEventListener('DOMContentLoaded', () => {
  detectEnvironment();
  loadProgress();
  bindEvents();
  setupMobileKeyboardDetection();
  renderAll();
  initFirebase();
});
