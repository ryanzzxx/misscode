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

const LANGUAGES = [
  {
    id: 'html',
    label: 'HTML5',
    file: 'index.html',
    tokens: ['<div>', '<section>', '<button>', 'class=""', 'id=""', '<h1>', '<p>', '<a href="">'],
    starter: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }
    .card { background: #1e293b; padding: 20px; border-radius: 14px; }
    button { background: #3b82f6; color: #fff; border: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Olá, MissCode!</h1>
    <p>Edite este código e veja o resultado ao vivo.</p>
    <button onclick="alert('Funcionando!')">Testar Clique</button>
  </div>
</body>
</html>`
  },
  {
    id: 'css',
    label: 'CSS3',
    file: 'style.css',
    tokens: ['display: flex;', 'grid-template-columns:', 'gap: 12px;', 'border-radius:', '@media (max-width: 768px)', '100dvh', 'var(--)'],
    starter: `<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    padding: 16px;
    font-family: sans-serif;
  }
  .item {
    background: #1e293b;
    color: #38bdf8;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
  }
</style>
<div class="grid">
  <div class="item">Card 01</div>
  <div class="item">Card 02</div>
  <div class="item">Card 03</div>
</div>`
  },
  {
    id: 'js',
    label: 'JavaScript',
    file: 'app.js',
    tokens: ['const ', 'let ', 'function ', '() => {}', 'document.querySelector()', 'addEventListener', 'console.log()'],
    starter: `<div id="app" style="font-family:sans-serif;padding:20px;color:#0f172a"></div>
<script>
  const tarefas = ['Estudar HTML', 'Praticar JS', 'Subir APK'];
  const el = document.getElementById('app');
  el.innerHTML = '<h2>Minhas Tarefas (' + tarefas.length + ')</h2><ul>' +
    tarefas.map(t => '<li>' + t + '</li>').join('') + '</ul>';
</script>`
  },
  {
    id: 'python',
    label: 'Python',
    file: 'main.py',
    tokens: ['def ', 'return ', 'for item in ', 'if __name__ == "__main__":', 'print()', 'import ', '[x for x in ]'],
    starter: `def calcular_xp(desafios_concluidos, streak_dias):
    base = desafios_concluidos * 50
    bonus = streak_dias * 15
    return base + bonus

total = calcular_xp(4, 3)
print(f"XP Total acumulado: {total} XP")`
  },
  {
    id: 'sql',
    label: 'SQL',
    file: 'query.sql',
    tokens: ['SELECT ', 'FROM ', 'WHERE ', 'JOIN ', 'GROUP BY ', 'ORDER BY ', 'INSERT INTO '],
    starter: `SELECT nome, linguagem, xp_total
FROM alunos
WHERE xp_total >= 200
ORDER BY xp_total DESC;`
  }
];

const LESSONS_AND_CHALLENGES = [
  {
    id: 'html-1',
    lang: 'html',
    title: '1. Cartão Interativo HTML5',
    xp: 50,
    difficulty: 'Fácil',
    desc: 'Crie uma tag <button> dentro da página com um evento onclick ou texto de ação.',
    validate: (code) => /<button[\s>]/i.test(code) && /<\/button>/i.test(code),
    template: LANGUAGES[0].starter
  },
  {
    id: 'css-1',
    lang: 'css',
    title: '2. Layout Flex ou Grid Responsivo',
    xp: 75,
    difficulty: 'Fácil',
    desc: 'Aplique display: flex ou display: grid no estilo para organizar os elementos.',
    validate: (code) => /display\s*:\s*(flex|grid)/i.test(code),
    template: LANGUAGES[1].starter
  },
  {
    id: 'js-1',
    lang: 'js',
    title: '3. Validador de Estado de Tarefa',
    xp: 100,
    difficulty: 'Médio',
    desc: 'Escreva uma função ou arrow function que verifique uma condição com if ou operador ternário.',
    validate: (code) => /(function|=>)/.test(code) && /(\bif\b|\?)/.test(code),
    template: `<div id="status" style="font-family:sans-serif;padding:20px"></div>
<script>
  function validarTarefa(concluida) {
    return concluida ? 'Concluída com sucesso' : 'Pendente';
  }
  document.getElementById('status').textContent = validarTarefa(true);
</script>`
  },
  {
    id: 'python-1',
    lang: 'python',
    title: '4. Função de Cálculo de Bônus',
    xp: 120,
    difficulty: 'Médio',
    desc: 'Defina uma função com def que receba parâmetros e utilize return.',
    validate: (code) => /\bdef\s+\w+\s*\(/.test(code) && /\breturn\b/.test(code),
    template: LANGUAGES[3].starter
  },
  {
    id: 'sql-1',
    lang: 'sql',
    title: '5. Consulta com Filtro e Ordenação',
    xp: 150,
    difficulty: 'Difícil',
    desc: 'Escreva uma consulta usando SELECT, FROM e WHERE.',
    validate: (code) => /\bSELECT\b/i.test(code) && /\bFROM\b/i.test(code) && /\bWHERE\b/i.test(code),
    template: LANGUAGES[4].starter
  }
];

const KEYWORD_DICTIONARY = {
  div: {
    lang: 'HTML5',
    desc: 'Contêiner genérico em bloco usado para agrupar elementos e estruturar layouts.',
    example: '<div class="card">\n  <h2>Título</h2>\n</div>'
  },
  button: {
    lang: 'HTML5',
    desc: 'Cria um botão clicável acessível para disparar ações ou enviar formulários.',
    example: '<button type="button" onclick="salvar()">Salvar</button>'
  },
  section: {
    lang: 'HTML5',
    desc: 'Define uma seção temática semântica dentro do documento.',
    example: '<section id="perfil">\n  <h2>Meu Perfil</h2>\n</section>'
  },
  flex: {
    lang: 'CSS3',
    desc: 'Ativa o Flexbox, alinhando itens em linha ou coluna com distribuição dinâmica de espaço.',
    example: '.container {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}'
  },
  grid: {
    lang: 'CSS3',
    desc: 'Ativa o CSS Grid para criar grades bidimensionais de linhas e colunas responsivas.',
    example: '.grade {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}'
  },
  function: {
    lang: 'JavaScript',
    desc: 'Declara um bloco de código reutilizável que pode receber parâmetros e retornar valores.',
    example: 'function somar(a, b) {\n  return a + b;\n}'
  },
  const: {
    lang: 'JavaScript',
    desc: 'Declara uma referência constante cujo identificador não pode ser reatribuído.',
    example: 'const taxa = 0.15;'
  },
  queryselector: {
    lang: 'JavaScript',
    desc: 'Seleciona o primeiro elemento do DOM que corresponde ao seletor CSS informado.',
    example: 'const btn = document.querySelector(".btn-primary");'
  },
  def: {
    lang: 'Python',
    desc: 'Define uma função em Python seguida pelo nome, parâmetros e dois pontos.',
    example: 'def saudacao(nome):\n    return f"Olá, {nome}"'
  },
  select: {
    lang: 'SQL',
    desc: 'Especifica quais colunas devem ser retornadas de uma tabela no banco de dados.',
    example: 'SELECT id, nome FROM usuarios WHERE ativo = 1;'
  }
};

const STORAGE_KEY = 'misscode_state_v2';

const state = {
  activeLang: 'html',
  activeChallengeIdx: 0,
  trailFilter: 'all',
  locale: 'PT',
  xp: 0,
  streak: 1,
  lastActiveDate: '',
  completedIds: [],
  savedCodes: {},
  user: null,
  confirmationResult: null,
  currentSheetExample: ''
};

let firebaseAuth = null;
let recaptchaVerifier = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      Object.assign(state, parsed);
    }
  } catch {}
  updateDailyStreak();
}

function saveState() {
  const uidPrefix = state.user ? `_${state.user.uid}` : '';
  const payload = {
    activeLang: state.activeLang,
    activeChallengeIdx: state.activeChallengeIdx,
    locale: state.locale,
    xp: state.xp,
    streak: state.streak,
    lastActiveDate: state.lastActiveDate,
    completedIds: state.completedIds,
    savedCodes: state.savedCodes
  };
  localStorage.setItem(STORAGE_KEY + uidPrefix, JSON.stringify(payload));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function updateDailyStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.lastActiveDate) {
    state.lastActiveDate = today;
    state.streak = 1;
    return;
  }
  if (state.lastActiveDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  state.streak = state.lastActiveDate === yesterday ? state.streak + 1 : 1;
  state.lastActiveDate = today;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.hidden = true;
  }, 2600);
}

function isMobileScreen() {
  return window.matchMedia('(max-width: 768px)').matches;
}

function setupViewportAdaptation() {
  const syncViewport = () => {
    if (window.visualViewport) {
      const vvh = window.visualViewport.height;
      document.documentElement.style.setProperty('--vvh', `${vvh}px`);
      const keyboardOpen = isMobileScreen() && window.innerHeight - vvh > 140;
      document.body.classList.toggle('keyboard-open', keyboardOpen);
    }
  };

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', syncViewport);
    window.visualViewport.addEventListener('scroll', syncViewport);
  }
  window.addEventListener('resize', syncViewport);
  syncViewport();
}

function setActiveTab(tabName) {
  document.body.dataset.activeTab = tabName;
  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.tab === tabName);
  });
  if (tabName === 'preview') {
    renderPreview();
  }
}

function renderLanguageChips() {
  const container = document.getElementById('langChips');
  container.innerHTML = LANGUAGES.map(
    (lang) =>
      `<button type="button" class="lang-chip ${lang.id === state.activeLang ? 'is-active' : ''}" data-lang="${lang.id}">${lang.label}</button>`
  ).join('');

  container.querySelectorAll('.lang-chip').forEach((btn) => {
    btn.addEventListener('click', () => selectLanguage(btn.dataset.lang));
  });
}

function renderAutocompleteBar() {
  const langObj = LANGUAGES.find((l) => l.id === state.activeLang) || LANGUAGES[0];
  const bar = document.getElementById('autocompleteBar');
  bar.innerHTML = langObj.tokens
    .map((tok) => `<button type="button" class="ac-key">${tok.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</button>`)
    .join('');

  bar.querySelectorAll('.ac-key').forEach((btn, idx) => {
    btn.addEventListener('click', () => insertAtCursor(langObj.tokens[idx]));
  });
}

function insertAtCursor(text) {
  const editor = document.getElementById('codeEditor');
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const value = editor.value;
  editor.value = value.slice(0, start) + text + value.slice(end);
  editor.focus();
  const cursor = start + text.length;
  editor.setSelectionRange(cursor, cursor);
  state.savedCodes[state.activeLang] = editor.value;
  saveState();
}

function selectLanguage(langId) {
  state.activeLang = langId;
  const langObj = LANGUAGES.find((l) => l.id === langId) || LANGUAGES[0];
  document.getElementById('activeFileName').textContent = langObj.file;
  const editor = document.getElementById('codeEditor');
  editor.value = state.savedCodes[langId] || langObj.starter;
  renderLanguageChips();
  renderAutocompleteBar();
  saveState();
  if (!isMobileScreen()) {
    renderPreview();
  }
}

function renderPreview() {
  const code = document.getElementById('codeEditor').value;
  const frame = document.getElementById('previewFrame');
  if (state.activeLang === 'python' || state.activeLang === 'sql') {
    const escaped = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    frame.srcdoc = `<!DOCTYPE html><html><body style="margin:0;padding:16px;background:#090e1a;color:#34d399;font-family:monospace;font-size:15px;">
      <div style="color:#94a3b8;margin-bottom:8px;">Saída simulada (${state.activeLang.toUpperCase()}):</div>
      <pre style="white-space:pre-wrap;">${escaped}</pre>
      <div style="margin-top:12px;padding:10px;background:#111827;border-radius:8px;color:#e2e8f0;">Execução validada sem erros de sintaxe.</div>
    </body></html>`;
    return;
  }
  frame.srcdoc = code;
}

function renderGamification() {
  const level = Math.floor(state.xp / 200) + 1;
  const titles = ['Iniciante', 'Explorador', 'Construtor', 'Full-Stack', 'Arquiteto'];
  const role = titles[Math.min(level - 1, titles.length - 1)];
  const currentLevelXp = state.xp % 200;
  const pct = Math.min(100, Math.round((currentLevelXp / 200) * 100));

  document.getElementById('userLevelTitle').textContent = `Nível ${level} • ${role}`;
  document.getElementById('xpBarFill').style.width = `${Math.max(8, pct)}%`;
  document.getElementById('xpCounterText').textContent = `${currentLevelXp} / 200 XP (Total: ${state.xp} XP)`;
  document.getElementById('streakDays').textContent = `${state.streak} ${state.streak === 1 ? 'dia' : 'dias'}`;
  document.getElementById('desktopStreakPill').textContent = `🔥 ${state.streak}d`;
  document.getElementById('desktopXpPill').textContent = `${state.xp} XP`;

  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const todayIdx = new Date().getDay();
  document.getElementById('weekStreakRow').innerHTML = days
    .map((d, i) => {
      const active = i <= todayIdx && todayIdx - i < state.streak;
      return `<div class="day-pill ${active ? 'is-done' : ''}">${d}</div>`;
    })
    .join('');

  const filterContainer = document.getElementById('trailFilterChips');
  const filters = [{ id: 'all', label: 'Todas' }, ...LANGUAGES.map((l) => ({ id: l.id, label: l.label }))];
  filterContainer.innerHTML = filters
    .map(
      (f) =>
        `<button type="button" class="lang-chip ${state.trailFilter === f.id ? 'is-active' : ''}" data-filter="${f.id}">${f.label}</button>`
    )
    .join('');

  filterContainer.querySelectorAll('.lang-chip').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.trailFilter = btn.dataset.filter;
      renderGamification();
    });
  });

  const list = document.getElementById('trailList');
  const items = LESSONS_AND_CHALLENGES.filter(
    (item) => state.trailFilter === 'all' || item.lang === state.trailFilter
  );

  list.innerHTML = items
    .map((item) => {
      const done = state.completedIds.includes(item.id);
      const realIdx = LESSONS_AND_CHALLENGES.findIndex((x) => x.id === item.id);
      return `
        <article class="trail-card ${done ? 'is-completed' : ''}">
          <div class="trail-card-top">
            <span class="badge-xp">${item.lang.toUpperCase()} • +${item.xp} XP</span>
            <span class="status-pill ${done ? 'is-solved' : ''}">${done ? '✓ Concluído' : item.difficulty}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <button type="button" class="btn btn-primary" data-practice-idx="${realIdx}">Praticar no Editor</button>
        </article>
      `;
    })
    .join('');

  list.querySelectorAll('[data-practice-idx]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.practiceIdx);
      loadChallengeByIndex(idx, true);
      setActiveTab('editor');
    });
  });

  const select = document.getElementById('promptSelect');
  select.innerHTML = LESSONS_AND_CHALLENGES.map(
    (item, idx) =>
      `<option value="${idx}" ${idx === state.activeChallengeIdx ? 'selected' : ''}>${item.title} (+${item.xp} XP)</option>`
  ).join('');
}

function loadChallengeByIndex(idx, overwriteEditor) {
  state.activeChallengeIdx = idx % LESSONS_AND_CHALLENGES.length;
  const challenge = LESSONS_AND_CHALLENGES[state.activeChallengeIdx];
  const done = state.completedIds.includes(challenge.id);

  document.getElementById('challengeDifficulty').textContent = `${challenge.difficulty} • +${challenge.xp} XP`;
  document.getElementById('challengeTitle').textContent = challenge.title;
  document.getElementById('challengeDesc').textContent = challenge.desc;
  const badge = document.getElementById('challengeStatusBadge');
  badge.textContent = done ? '✓ Concluído' : 'Pendente';
  badge.classList.toggle('is-solved', done);

  if (overwriteEditor) {
    state.activeLang = challenge.lang;
    state.savedCodes[challenge.lang] = challenge.template;
    selectLanguage(challenge.lang);
  }
  renderGamification();
  saveState();
}

function verifyActiveChallenge() {
  const challenge = LESSONS_AND_CHALLENGES[state.activeChallengeIdx];
  const code = document.getElementById('codeEditor').value;
  if (!challenge.validate(code)) {
    showToast('Ainda falta cumprir o requisito do desafio. Tente novamente!');
    return;
  }

  if (!state.completedIds.includes(challenge.id)) {
    state.completedIds.push(challenge.id);
    state.xp += challenge.xp;
    if (navigator.vibrate) navigator.vibrate(30);
    showToast(`Parabéns! +${challenge.xp} XP conquistados!`);
  } else {
    showToast('Desafio validado com sucesso!');
  }

  saveState();
  renderGamification();
  loadChallengeByIndex(state.activeChallengeIdx, false);
}

function inspectWordAtCursor() {
  const editor = document.getElementById('codeEditor');
  const pos = editor.selectionStart || 0;
  const text = editor.value;
  const left = text.slice(0, pos).search(/[a-zA-Z0-9_-]+$/);
  const rightMatch = text.slice(pos).match(/^[a-zA-Z0-9_-]+/);
  const word = (left >= 0 ? text.slice(left, pos) : '') + (rightMatch ? rightMatch[0] : '');
  const key = word.toLowerCase();
  const entry = KEYWORD_DICTIONARY[key];

  if (!entry) {
    showToast(word ? `Sem definição rápida para "${word}". Pergunte à MissIA!` : 'Toque em uma palavra-chave no código primeiro.');
    return;
  }

  document.getElementById('sheetLangBadge').textContent = entry.lang;
  document.getElementById('sheetTermTitle').textContent = word;
  document.getElementById('sheetTermDesc').textContent = entry.desc;
  document.getElementById('sheetTermExample').textContent = entry.example;
  state.currentSheetExample = entry.example;

  document.getElementById('keywordBackdrop').hidden = false;
  const sheet = document.getElementById('keywordSheet');
  sheet.classList.add('is-open');
  sheet.setAttribute('aria-hidden', 'false');
}

function closeKeywordSheet() {
  document.getElementById('keywordBackdrop').hidden = true;
  const sheet = document.getElementById('keywordSheet');
  sheet.classList.remove('is-open');
  sheet.setAttribute('aria-hidden', 'true');
}

function appendChatMessage(text, isUser) {
  const box = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-bubble ${isUser ? 'is-user' : 'is-ai'}`;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

async function sendMissiaMessage(promptText) {
  const trimmed = promptText.trim();
  if (!trimmed) return;
  appendChatMessage(trimmed, true);

  const codeContext = document.getElementById('codeEditor').value;
  const challenge = LESSONS_AND_CHALLENGES[state.activeChallengeIdx];

  if (!APP_CONFIG.proxyUrl) {
    const localHint = `Analisei seu arquivo (${state.activeLang.toUpperCase()}):\n• Desafio atual: ${challenge.title}\n• Dica: ${challenge.desc}\n• Seu código tem ${codeContext.split('\n').length} linhas. Configure APP_CONFIG.proxyUrl para respostas completas em nuvem.`;
    setTimeout(() => appendChatMessage(localHint, false), 250);
    return;
  }

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (firebaseAuth && firebaseAuth.currentUser) {
      const token = await firebaseAuth.currentUser.getIdToken();
      headers.Authorization = `Bearer ${token}`;
    }
    const res = await fetch(APP_CONFIG.proxyUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify({ prompt: trimmed, context: codeContext })
    });
    const data = await res.json();
    appendChatMessage(data.reply || 'Sem resposta do servidor.', false);
  } catch {
    appendChatMessage('Erro de conexão com o proxy da MissIA.', false);
  }
}

function initFirebase() {
  if (!window.firebase || !APP_CONFIG.firebaseConfig.apiKey) {
    document.getElementById('authSyncInfo').textContent =
      'Modo Local ativo. Adicione firebaseConfig em app.js para sincronizar na nuvem.';
    return;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(APP_CONFIG.firebaseConfig);
  }
  firebaseAuth = firebase.auth();

  firebaseAuth.onAuthStateChanged((user) => {
    state.user = user
      ? {
          uid: user.uid,
          label: user.displayName || user.email || user.phoneNumber || 'Aluno'
        }
      : null;

    const btnAuth = document.getElementById('btnAuth');
    const loggedBox = document.getElementById('authLoggedBox');
    const guestBox = document.getElementById('authGuestBox');

    if (state.user) {
      btnAuth.textContent = state.user.label.slice(0, 12);
      loggedBox.hidden = false;
      guestBox.hidden = true;
      document.getElementById('authUserInfo').textContent = `Conectado como ${state.user.label}`;
      document.getElementById('authSyncInfo').textContent = `Progresso sincronizado (${state.xp} XP)`;
    } else {
      btnAuth.textContent = 'Entrar';
      loggedBox.hidden = true;
      guestBox.hidden = false;
    }
    saveState();
  });
}

function setAuthFeedback(msg) {
  document.getElementById('authFeedback').textContent = msg;
}

function setupAuthHandlers() {
  document.getElementById('tabAuthEmail').addEventListener('click', () => {
    document.getElementById('tabAuthEmail').classList.add('active');
    document.getElementById('tabAuthPhone').classList.remove('active');
    document.getElementById('emailAuthForm').hidden = false;
    document.getElementById('phoneAuthForm').hidden = true;
  });

  document.getElementById('tabAuthPhone').addEventListener('click', () => {
    document.getElementById('tabAuthPhone').classList.add('active');
    document.getElementById('tabAuthEmail').classList.remove('active');
    document.getElementById('phoneAuthForm').hidden = false;
    document.getElementById('emailAuthForm').hidden = true;
  });

  document.getElementById('emailAuthForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    if (!firebaseAuth) {
      state.user = { uid: 'local_user', label: email.split('@')[0] };
      document.getElementById('btnAuth').textContent = state.user.label;
      document.getElementById('authModal').hidden = true;
      showToast('Sessão local iniciada!');
      return;
    }
    try {
      await firebaseAuth.signInWithEmailAndPassword(email, password);
      document.getElementById('authModal').hidden = true;
      showToast('Login realizado!');
    } catch (err) {
      setAuthFeedback(err.message);
    }
  });

  document.getElementById('btnEmailSignUp').addEventListener('click', async () => {
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    if (!firebaseAuth) {
      showToast('Configure o firebaseConfig em app.js para cadastro em nuvem.');
      return;
    }
    try {
      await firebaseAuth.createUserWithEmailAndPassword(email, password);
      document.getElementById('authModal').hidden = true;
      showToast('Conta criada com sucesso!');
    } catch (err) {
      setAuthFeedback(err.message);
    }
  });

  document.getElementById('btnSendSms').addEventListener('click', async () => {
    const phone = document.getElementById('authPhone').value.trim();
    if (!firebaseAuth) {
      setAuthFeedback('Configure o firebaseConfig em app.js para ativar SMS.');
      return;
    }
    try {
      if (!recaptchaVerifier) {
        recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
          size: 'invisible'
        });
      }
      state.confirmationResult = await firebaseAuth.signInWithPhoneNumber(phone, recaptchaVerifier);
      document.getElementById('otpVerifyBox').hidden = false;
      setAuthFeedback('Código SMS enviado!');
    } catch (err) {
      setAuthFeedback(err.message);
    }
  });

  document.getElementById('btnVerifyOtp').addEventListener('click', async () => {
    const code = document.getElementById('authOtp').value.trim();
    if (!state.confirmationResult) return;
    try {
      await state.confirmationResult.confirm(code);
      document.getElementById('authModal').hidden = true;
      showToast('Telefone verificado!');
    } catch (err) {
      setAuthFeedback(err.message);
    }
  });

  document.getElementById('btnAppleLogin').addEventListener('click', async () => {
    if (!firebaseAuth) {
      setAuthFeedback('Configure o firebaseConfig e Apple Service ID para entrar com Apple.');
      return;
    }
    try {
      const provider = new firebase.auth.OAuthProvider('apple.com');
      provider.addScope('email');
      provider.addScope('name');
      if (isMobileScreen()) {
        await firebaseAuth.signInWithRedirect(provider);
      } else {
        await firebaseAuth.signInWithPopup(provider);
        document.getElementById('authModal').hidden = true;
        showToast('Conectado com Apple ID!');
      }
    } catch (err) {
      setAuthFeedback(err.message);
    }
  });

  document.getElementById('btnLogout').addEventListener('click', async () => {
    if (firebaseAuth) {
      await firebaseAuth.signOut();
    }
    state.user = null;
    document.getElementById('btnAuth').textContent = 'Entrar';
    document.getElementById('authModal').hidden = true;
    showToast('Você saiu da conta.');
  });
}

function downloadFile(filename, content, mime) {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  document.querySelectorAll('.nav-tab').forEach((btn) => {
    btn.addEventListener('click', () => setActiveTab(btn.dataset.tab));
  });

  document.getElementById('promptSelect').addEventListener('change', (e) => {
    loadChallengeByIndex(Number(e.target.value), true);
  });

  const editor = document.getElementById('codeEditor');
  editor.addEventListener('input', () => {
    state.savedCodes[state.activeLang] = editor.value;
    saveState();
    if (!isMobileScreen()) {
      clearTimeout(editor._previewTimer);
      editor._previewTimer = setTimeout(renderPreview, 350);
    }
  });

  editor.addEventListener('dblclick', inspectWordAtCursor);
  document.getElementById('btnInspectWord').addEventListener('click', inspectWordAtCursor);

  document.getElementById('btnCloseSheet').addEventListener('click', closeKeywordSheet);
  document.getElementById('keywordBackdrop').addEventListener('click', closeKeywordSheet);
  document.getElementById('btnInsertSnippet').addEventListener('click', () => {
    insertAtCursor(`\n${state.currentSheetExample}\n`);
    closeKeywordSheet();
  });

  document.getElementById('btnRunPreview').addEventListener('click', () => {
    renderPreview();
    if (isMobileScreen()) {
      setActiveTab('preview');
    }
  });

  document.getElementById('btnRefreshPreview').addEventListener('click', renderPreview);

  document.getElementById('btnResetCode').addEventListener('click', () => {
    const langObj = LANGUAGES.find((l) => l.id === state.activeLang) || LANGUAGES[0];
    editor.value = langObj.starter;
    state.savedCodes[state.activeLang] = editor.value;
    saveState();
    renderPreview();
    showToast('Código restaurado.');
  });

  document.getElementById('btnViewportDesktop').addEventListener('click', () => {
    document.getElementById('btnViewportDesktop').classList.add('active');
    document.getElementById('btnViewportMobile').classList.remove('active');
    document.getElementById('previewStage').classList.remove('is-phone-sim');
  });

  document.getElementById('btnViewportMobile').addEventListener('click', () => {
    document.getElementById('btnViewportMobile').classList.add('active');
    document.getElementById('btnViewportDesktop').classList.remove('active');
    document.getElementById('previewStage').classList.add('is-phone-sim');
  });

  document.getElementById('btnLoadChallenge').addEventListener('click', () => {
    loadChallengeByIndex(state.activeChallengeIdx, true);
    setActiveTab('editor');
    showToast('Desafio carregado no editor.');
  });

  document.getElementById('btnVerifyChallenge').addEventListener('click', verifyActiveChallenge);
  document.getElementById('btnNextChallenge').addEventListener('click', () => {
    loadChallengeByIndex(state.activeChallengeIdx + 1, true);
  });

  const handleSave = () => {
    state.savedCodes[state.activeLang] = editor.value;
    saveState();
    showToast('Progresso salvo!');
  };

  const handleDownloadHtml = () => {
    downloadFile('misscode-projeto.html', editor.value, 'text/html');
  };

  const handleExportJson = () => {
    downloadFile('misscode-backup.json', JSON.stringify(state, null, 2), 'application/json');
  };

  const handleToggleLocale = () => {
    state.locale = state.locale === 'PT' ? 'EN' : 'PT';
    document.getElementById('btnLocaleDesktop').textContent = state.locale;
    saveState();
    showToast(`Idioma alterado para ${state.locale}`);
  };

  document.getElementById('btnSaveDesktop').addEventListener('click', handleSave);
  document.getElementById('btnSaveMobile').addEventListener('click', () => {
    handleSave();
    document.getElementById('morePopover').hidden = true;
  });

  document.getElementById('btnDownloadDesktop').addEventListener('click', handleDownloadHtml);
  document.getElementById('btnDownloadMobile').addEventListener('click', () => {
    handleDownloadHtml();
    document.getElementById('morePopover').hidden = true;
  });

  document.getElementById('btnExportDesktop').addEventListener('click', handleExportJson);
  document.getElementById('btnExportMobile').addEventListener('click', () => {
    handleExportJson();
    document.getElementById('morePopover').hidden = true;
  });

  document.getElementById('btnLocaleDesktop').addEventListener('click', handleToggleLocale);
  document.getElementById('btnLocaleMobile').addEventListener('click', () => {
    handleToggleLocale();
    document.getElementById('morePopover').hidden = true;
  });

  const moreBtn = document.getElementById('btnMoreMenu');
  const morePopover = document.getElementById('morePopover');
  moreBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    morePopover.hidden = !morePopover.hidden;
  });
  document.addEventListener('click', (e) => {
    if (!morePopover.hidden && !morePopover.contains(e.target) && e.target !== moreBtn) {
      morePopover.hidden = true;
    }
  });

  const openMissia = () => {
    morePopover.hidden = true;
    document.getElementById('missiaModal').hidden = false;
    const box = document.getElementById('chatMessages');
    if (!box.children.length) {
      appendChatMessage('Olá! Sou a MissIA. Em que posso ajudar no seu código hoje?', false);
    }
  };

  document.getElementById('btnMissiaFab').addEventListener('click', openMissia);
  document.getElementById('btnMissiaMobileTop').addEventListener('click', openMissia);
  document.getElementById('btnCloseMissia').addEventListener('click', () => {
    document.getElementById('missiaModal').hidden = true;
  });

  document.querySelectorAll('[data-quick]').forEach((btn) => {
    btn.addEventListener('click', () => sendMissiaMessage(btn.dataset.quick));
  });

  document.getElementById('chatForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('chatInput');
    sendMissiaMessage(input.value);
    input.value = '';
  });

  document.getElementById('btnAuth').addEventListener('click', () => {
    document.getElementById('authModal').hidden = false;
  });
  document.getElementById('btnCloseAuth').addEventListener('click', () => {
    document.getElementById('authModal').hidden = true;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  setupViewportAdaptation();
  initFirebase();
  setupAuthHandlers();
  bindEvents();
  selectLanguage(state.activeLang);
  loadChallengeByIndex(state.activeChallengeIdx, false);
  setActiveTab('editor');
  renderPreview();
});