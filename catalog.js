window.TOKEN_DICTIONARY = {
  html: "Define a raiz de um documento HTML5.",
  head: "Contém metadados, título e folhas de estilo da página.",
  body: "Agrupa todo o conteúdo visível renderizado na tela.",
  main: "Representa o conteúdo principal e exclusivo da aplicação.",
  section: "Agrupa um bloco temático de conteúdo semântico.",
  article: "Define um conteúdo independente, como um card ou post.",
  nav: "Cria uma barra ou bloco de links de navegação.",
  header: "Define o cabeçalho superior de uma página ou seção.",
  footer: "Define o rodapé inferior com informações complementares.",
  button: "Cria um botão interativo clicável pelo usuário.",
  input: "Cria um campo de entrada de dados (texto, número, range).",
  form: "Agrupa campos de formulário para envio e validação.",
  canvas: "Área de desenho gráfico 2D/3D controlada via JavaScript.",
  svg: "Define gráficos vetoriais escaláveis diretamente no HTML.",
  dialog: "Cria uma janela modal nativa com suporte a abertura/fechamento.",
  details: "Cria um componente expansível tipo acordeão sem JavaScript.",
  display: "Define o modelo de exibição de layout (flex, grid, block).",
  grid: "Ativa o sistema bidimensional CSS Grid para linhas e colunas.",
  flex: "Ativa o Flexbox para alinhamento dinâmico em eixo único.",
  keyframes: "Define os quadros-chave de uma animação CSS contínua.",
  transform: "Aplica rotação, escala, inclinação ou translação visual.",
  backdrop: "Aplica filtros como desfoque (blur) no fundo atrás do elemento.",
  const: "Declara uma variável de referência constante no escopo.",
  let: "Declara uma variável mutável restrita ao bloco atual.",
  function: "Define um bloco de código reutilizável que recebe parâmetros.",
  async: "Declara uma função assíncrona que retorna uma Promise.",
  await: "Pausa a execução assíncrona até a Promise ser resolvida.",
  fetch: "Realiza requisições HTTP assíncronas para APIs externas.",
  querySelector: "Seleciona o primeiro elemento DOM compatível com o seletor CSS.",
  addEventListener: "Registra um ouvinte de eventos (click, input, keydown).",
  map: "Transforma cada item de um array retornando um novo array.",
  filter: "Filtra elementos de um array com base em uma condição booleana.",
  interface: "Define o contrato de tipos de um objeto no TypeScript.",
  type: "Cria um alias de tipo personalizado ou união de tipos.",
  def: "Define uma função ou método em Python ou Ruby.",
  class: "Declara um molde orientado a objetos com atributos e métodos.",
  import: "Importa módulos, bibliotecas ou pacotes externos.",
  return: "Encerra a função e devolve o valor processado.",
  SELECT: "Consulta e projeta colunas de uma tabela no banco de dados.",
  WHERE: "Filtra registros SQL que atendem em uma condição lógica.",
  JOIN: "Combina linhas de duas ou mais tabelas relacionadas.",
  GROUP: "Agrupa registros para funções de agregação (COUNT, SUM, AVG).",
  func: "Declara uma função em Go ou Swift.",
  fn: "Declara uma função em Rust.",
  match: "Executa correspondência exaustiva de padrões (Pattern Matching).",
  struct: "Define uma estrutura de dados tipada em C, C++, Rust, Go ou Swift.",
  suspend: "Marca uma função Kotlin para execução assíncrona via Coroutines.",
  Widget: "Componente visual imutável base da interface no Flutter/Dart.",
  grep: "Filtra linhas de texto ou logs usando expressões regulares no Linux."
};

window.MISSCODE_CATALOG = [
  {
    id: "html5", name: "HTML5", ext: "html", color: "#ea580c", badge: "H5",
    projects: [
      { t: "1. Ocean Depths — Explorador Visual", d: "Iniciante", x: 80, p: "Adicione um título <h1> e um botão <button id='pulseBtn'> dentro da tag <main>.", s: "<main>\n  \n</main>", r: ["<h1", "<button", "pulseBtn"] },
      { t: "2. Cabeçalho de Navegação Semântico", d: "Iniciante", x: 80, p: "Crie uma barra <nav> contendo três links <a> para Início, Cursos e Perfil.", s: "<header>\n  <strong>MissCode</strong>\n</header>", r: ["<nav", "<a"] },
      { t: "3. Card de Produto com Imagem e Preço", d: "Iniciante", x: 90, p: "Dentro de <article>, insira uma imagem <img> com atributo alt e um parágrafo <p> com o preço.", s: "<article class='card'>\n  <h2>Teclado Mecânico</h2>\n</article>", r: ["<img", "alt=", "<p"] },
      { t: "4. Formulário de Check-in com Validação", d: "Prático", x: 100, p: "Adicione um <input type='email' required> e um <button type='submit'> dentro do <form>.", s: "<form id='checkin'>\n  <label>E-mail Corporativo</label>\n</form>", r: ["type='email'", "required", "type='submit'"] },
      { t: "5. Tabela de Telemetria de Servidores", d: "Prático", x: 100, p: "Complete a <table> criando cabeçalho <thead> com <th> e corpo <tbody> com <tr> e <td>.", s: "<table border='1'>\n  \n</table>", r: ["<thead", "<th", "<tbody", "<td"] },
      { t: "6. FAQ Interativo com Acordeão Nativo", d: "Prático", x: 110, p: "Use as tags nativas <details> e <summary> para criar uma pergunta expansível sem JavaScript.", s: "<section class='faq'>\n  <h3>Perguntas Frequentes</h3>\n</section>", r: ["<details", "<summary"] },
      { t: "7. Player de Áudio com Controles", d: "Intermediário", x: 120, p: "Insira a tag <audio controls> com um elemento <source src='trilha.mp3' type='audio/mpeg'>.", s: "<div class='player'>\n  <p>Podcast Dev BR #42</p>\n</div>", r: ["<audio", "controls", "<source"] },
      { t: "8. Painel de Métricas com Barra de Progresso", d: "Intermediário", x: 120, p: "Adicione um elemento <progress value='75' max='100'> e um <meter value='0.8'> para CPU.", s: "<section class='metrics'>\n  <h3>Uso do Cluster</h3>\n</section>", r: ["<progress", "max=", "<meter"] },
      { t: "9. Modal Nativo com Tag Dialog", d: "Avançado", x: 140, p: "Crie uma janela <dialog id='alertModal' open> contendo um título <h3> e um botão de fechar.", s: "<main>\n  <p>Painel de Controle</p>\n</main>", r: ["<dialog", "alertModal", "<button"] },
      { t: "10. Palco Vetorial SVG Interativo", d: "Avançado", x: 150, p: "Desenhe um <svg width='200' height='120'> contendo um círculo <circle> e um retângulo <rect>.", s: "<div class='canvas-box'>\n  \n</div>", r: ["<svg", "<circle", "<rect"] }
    ]
  },
  {
    id: "css3", name: "CSS3", ext: "css", color: "#2563eb", badge: "CS",
    projects: [
      { t: "1. Centralização Perfeita com Flexbox", d: "Iniciante", x: 80, p: "Configure .hero com display: flex, justify-content: center e align-items: center.", s: "<style>\n.hero {\n  height: 180px;\n  background: #1e293b;\n}\n</style>\n<div class='hero'><button>Iniciar</button></div>", r: ["display:", "flex", "justify-content:", "align-items:"] },
      { t: "2. Grade Responsiva de 3 Colunas", d: "Iniciante", x: 90, p: "Aplique display: grid e grid-template-columns: repeat(3, 1fr) com gap: 12px na classe .grid.", s: "<style>\n.grid {\n  padding: 12px;\n}\n.box { background: #3b82f6; padding: 16px; border-radius: 8px; }\n</style>\n<div class='grid'><div class='box'>1</div><div class='box'>2</div><div class='box'>3</div></div>", r: ["grid", "grid-template-columns:", "gap:"] },
      { t: "3. Cartão Glassmorphism Translúcido", d: "Prático", x: 100, p: "Adicione backdrop-filter: blur(12px) e border-radius: 16px na classe .glass.", s: "<style>\nbody { background: linear-gradient(135deg, #0f172a, #1d4ed8); padding: 20px; }\n.glass {\n  background: rgba(255,255,255,0.12);\n  padding: 20px;\n}\n</style>\n<div class='glass'>Cartão Vidro</div>", r: ["backdrop-filter:", "blur", "border-radius:"] },
      { t: "4. Botão Neon com Transição Hover", d: "Prático", x: 100, p: "Crie a regra .neon:hover aplicando transform: scale(1.06) e box-shadow luminoso.", s: "<style>\n.neon {\n  background: #10b981;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 8px;\n  transition: 0.2s;\n}\n</style>\n<button class='neon'>Ativar Turbo</button>", r: [":hover", "transform:", "box-shadow:"] },
      { t: "5. Pulso Radar com @keyframes", d: "Intermediário", x: 120, p: "Defina uma animação @keyframes pulse e aplique-a com animation na classe .radar.", s: "<style>\n.radar {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #ef4444;\n  margin: 40px auto;\n}\n</style>\n<div class='radar'></div>", r: ["@keyframes", "animation:"] },
      { t: "6. Variáveis Dinâmicas de Tema (:root)", d: "Intermediário", x: 120, p: "Declare --primary: #8b5cf6 dentro de :root e use var(--primary) como background do .badge.", s: "<style>\n:root {\n}\n.badge {\n  padding: 10px 16px;\n  border-radius: 8px;\n}\n</style>\n<span class='badge'>Tema Customizado</span>", r: ["--primary:", "var(--primary)"] },
      { t: "7. Texto Gradiente Metálico", d: "Intermediário", x: 130, p: "Aplique background: linear-gradient(...) e -webkit-background-clip: text no título h1.", s: "<style>\nh1 {\n  font-size: 2rem;\n  font-family: sans-serif;\n}\n</style>\n<h1>MissCode Studio</h1>", r: ["linear-gradient", "background-clip"] },
      { t: "8. Barra Superior Fixa com Sticky", d: "Prático", x: 110, p: "Configure .navbar com position: sticky, top: 0 e z-index: 50.", s: "<style>\n.navbar {\n  background: #020617;\n  padding: 12px;\n}\n</style>\n<header class='navbar'>Menu Fixo</header><div style='height:300px'>Role a página</div>", r: ["position:", "sticky", "top:", "z-index:"] },
      { t: "9. Media Query Mobile-First", d: "Avançado", x: 140, p: "Crie uma regra @media (max-width: 600px) alterando flex-direction: column na classe .stack.", s: "<style>\n.stack { display: flex; gap: 10px; }\n</style>\n<div class='stack'><div>Bloco A</div><div>Bloco B</div></div>", r: ["@media", "max-width", "flex-direction:", "column"] },
      { t: "10. Cubo 3D com Perspective", d: "Avançado", x: 150, p: "Adicione perspective: 600px no .stage e transform: rotateY(25deg) no .card3d.", s: "<style>\n.stage { padding: 30px; }\n.card3d { width: 120px; height: 120px; background: #06b6d4; border-radius: 12px; }\n</style>\n<div class='stage'><div class='card3d'></div></div>", r: ["perspective:", "rotateY"] }
    ]
  },
  {
    id: "javascript", name: "JavaScript", ext: "js", color: "#eab308", badge: "JS",
    projects: [
      { t: "1. Contador Reativo de Cliques", d: "Iniciante", x: 80, p: "Adicione um addEventListener('click') no botão #btnAdd para incrementar o número no #visor.", s: "<button id='btnAdd'>+1 Clique</button>\n<h2 id='visor'>0</h2>\n<script>\nlet total = 0;\nconst btn = document.getElementById('btnAdd');\n</script>", r: ["addEventListener", "total", "textContent"] },
      { t: "2. Filtro Instantâneo de Lista", d: "Iniciante", x: 90, p: "Use .filter() para exibir apenas os itens do array acima de 50 e renderize com .map().", s: "<div id='out'></div>\n<script>\nconst pings = [18, 95, 42, 130, 27];\n</script>", r: [".filter(", ".map(", "innerHTML"] },
      { t: "3. Validador de Senha Forte", d: "Prático", x: 100, p: "Crie a função validarSenha(s) retornando true se s.length >= 8 e false caso contrário.", s: "<div id='res'></div>\n<script>\ndocument.getElementById('res').textContent = typeof validarSenha;\n</script>", r: ["function validarSenha", "length", "return"] },
      { t: "4. Gerador de Cores Hexadecimais", d: "Prático", x: 110, p: "Use Math.random() e Math.floor() para gerar uma cor aleatória e aplicar em document.body.style.background.", s: "<button id='corBtn'>Trocar Cor</button>\n<script>\ndocument.getElementById('corBtn').onclick = () => {\n};\n</script>", r: ["Math.random", "Math.floor", "style.background"] },
      { t: "5. Temporizador Regressivo (Countdown)", d: "Intermediário", x: 120, p: "Use setInterval para diminuir o contador a cada 1000ms e clearInterval quando chegar a zero.", s: "<h1 id='timer'>10</h1>\n<script>\nlet sec = 10;\n</script>", r: ["setInterval", "clearInterval", "1000"] },
      { t: "6. Persistência com LocalStorage", d: "Intermediário", x: 120, p: "Salve o texto digitado usando localStorage.setItem('nota', valor) e recupere com getItem.", s: "<input id='campo' placeholder='Digite algo' />\n<script>\nconst campo = document.getElementById('campo');\n</script>", r: ["localStorage.setItem", "localStorage.getItem"] },
      { t: "7. Cliente Assíncrono com Async/Await", d: "Intermediário", x: 130, p: "Crie uma função async function carregarStatus() que aguarda uma Promise com await e exibe o resultado.", s: "<pre id='log'>Aguardando...</pre>\n<script>\nconst simularApi = () => Promise.resolve({ status: 'ONLINE', latencia: '14ms' });\n</script>", r: ["async", "await", "simularApi"] },
      { t: "8. Carrinho de Compras com Reduce", d: "Avançado", x: 140, p: "Calcule a soma total dos preços usando .reduce((acc, item) => acc + item.preco, 0).", s: "<div id='totalBox'></div>\n<script>\nconst itens = [{ nome: 'SSD', preco: 320 }, { nome: 'RAM', preco: 210 }];\n</script>", r: [".reduce(", "preco", "totalBox"] },
      { t: "9. Partículas Orbitais em Canvas 2D", d: "Avançado", x: 150, p: "Obtenha o contexto getContext('2d') e desenhe um círculo com ctx.arc() e ctx.fill().", s: "<canvas id='cv' width='260' height='160'></canvas>\n<script>\nconst cv = document.getElementById('cv');\n</script>", r: ["getContext('2d')", ".arc(", ".fill("] },
      { t: "10. Debounce para Busca Otimizada", d: "Avançado", x: 160, p: "Implemente uma função debounce(fn, delay) usando clearTimeout e setTimeout.", s: "<script>\nfunction debounce(fn, delay) {\n  let timer;\n}\n</script>", r: ["clearTimeout", "setTimeout", "return"] }
    ]
  },
  {
    id: "typescript", name: "TypeScript", ext: "ts", color: "#0284c7", badge: "TS",
    projects: [
      { t: "1. Contrato de Usuário com Interface", d: "Iniciante", x: 80, p: "Crie uma interface Usuario com id: number, nome: string e ativo: boolean.", s: "const dev = { id: 1, nome: 'Ryan', ativo: true };", r: ["interface Usuario", "number", "string", "boolean"] },
      { t: "2. União de Estados de Conexão", d: "Iniciante", x: 90, p: "Defina type StatusRede = 'online' | 'offline' | 'reconectando' e tipifique a variável atual.", s: "let estadoAtual = 'online';", r: ["type StatusRede", "'offline'", ": StatusRede"] },
      { t: "3. Função Tipada com Parâmetros Opcionais", d: "Prático", x: 100, p: "Crie function formatarLog(msg: string, nivel?: string): string retornando o texto formatado.", s: "console.log(formatarLog('Servidor iniciado'));", r: ["function formatarLog", ": string", "nivel?:"] },
      { t: "4. Genéricos em Resposta de API", d: "Prático", x: 110, p: "Defina interface ApiResponse<T> contendo data: T e status: number.", s: "const res = { data: ['item1'], status: 200 };", r: ["ApiResponse<T>", "data: T", "status: number"] },
      { t: "5. Type Guard para Validação de Payload", d: "Intermediário", x: 120, p: "Implemente a função isErro(obj: unknown): obj is { erro: string } verificando typeof.", s: "function isErro(obj: unknown) {\n}", r: ["is {", "typeof", "return"] },
      { t: "6. Utility Types: Partial e Readonly", d: "Intermediário", x: 130, p: "Use Partial<Config> no parâmetro da função atualizarConfig e Readonly<Config> no retorno.", s: "interface Config { host: string; porta: number; }\nfunction atualizarConfig(patch: any) {\n  return { host: 'localhost', porta: 8000, ...patch };\n}", r: ["Partial<Config>", "Readonly<Config>"] },
      { t: "7. Enum de Níveis de Severidade", d: "Prático", x: 110, p: "Crie enum Severidade { Baixa = 1, Media = 2, Alta = 3, Critica = 4 }.", s: "const alerta = 4;", r: ["enum Severidade", "Critica"] },
      { t: "8. Classe com Modificadores Private e Public", d: "Intermediário", x: 130, p: "Crie class CofreToken com atributo private chave: string e método public lerChave(): string.", s: "class CofreToken {\n}", r: ["private", "public", "lerChave"] },
      { t: "9. Mapeamento com Record<K, V>", d: "Avançado", x: 140, p: "Tipifique o dicionário portas usando Record<string, number> para HTTP, SSH e HTTPS.", s: "const portas = {\n  HTTP: 80,\n  HTTPS: 443,\n  SSH: 22\n};", r: ["Record<string, number>"] },
      { t: "10. Discriminated Union de Eventos", d: "Avançado", x: 160, p: "Crie type Evento = { tipo: 'login'; uid: string } | { tipo: 'logout' } e trate com switch.", s: "function processar(ev: any) {}", r: ["tipo: 'login'", "switch", "case 'logout'"] }
    ]
  },
  {
    id: "python", name: "Python", ext: "py", color: "#3b82f6", badge: "PY",
    projects: [
      { t: "1. Analisador de Latência de Hosts", d: "Iniciante", x: 80, p: "Use list comprehension para filtrar valores menores que 50ms na lista latencias.", s: "latencias = [12, 85, 34, 120, 41, 99]\nrapidas = []\nprint(rapidas)", r: ["for ", "if ", "50"] },
      { t: "2. Dicionário de Inventário de Rede", d: "Iniciante", x: 90, p: "Crie a função contar_ativos(dispositivos) que retorna quantos itens têm status == 'online'.", s: "devices = [{'ip': '10.0.0.1', 'status': 'online'}, {'ip': '10.0.0.2', 'status': 'offline'}]\ndef contar_ativos(dispositivos):\n    pass", r: ["return", "online", "for "] },
      { t: "3. Validador de Endereço IPv4", d: "Prático", x: 100, p: "Importe o módulo ipaddress e use ipaddress.ip_address(ip) dentro de um bloco try/except.", s: "def validar_ip(ip: str) -> bool:\n    return False", r: ["import ipaddress", "try:", "except"] },
      { t: "4. Parser de Logs JSON Estruturados", d: "Prático", x: 110, p: "Importe json, converta a string raw_json com json.loads() e retorne o campo 'severity'.", s: "raw_json = '{\"host\": \"fw-01\", \"severity\": \"CRITICA\"}'\ndef extrair_severidade(texto):\n    pass", r: ["import json", "json.loads", "severity"] },
      { t: "5. Gerador de Senhas Criptográficas", d: "Intermediário", x: 120, p: "Use o módulo secrets e secrets.choice() para montar uma senha segura de 16 caracteres.", s: "import string\ndef gerar_senha(tamanho=16):\n    chars = string.ascii_letters + string.digits\n    return ''", r: ["import secrets", "secrets.choice", "join"] },
      { t: "6. Decorador de Tempo de Execução", d: "Intermediário", x: 130, p: "Importe time e crie o decorator @medir_tempo usando time.perf_counter().", s: "def medir_tempo(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper", r: ["import time", "perf_counter"] },
      { t: "7. Pipeline Assíncrono com Asyncio", d: "Intermediário", x: 130, p: "Importe asyncio, defina async def checar_porta(porta) com await asyncio.sleep(0.1).", s: "import asyncio\n", r: ["async def", "await asyncio.sleep"] },
      { t: "8. Modelo de Dados com Pydantic", d: "Avançado", x: 140, p: "Crie class Alerta(BaseModel) com campos origem: str e codigo: int.", s: "from pydantic import BaseModel\n", r: ["class Alerta(BaseModel)", ": str", ": int"] },
      { t: "9. Endpoint FastAPI com Rota Dinâmica", d: "Avançado", x: 150, p: "Crie uma rota @app.get('/status/{servidor}') retornando um dicionário com o nome do servidor.", s: "from fastapi import FastAPI\napp = FastAPI()\n", r: ["@app.get", "def ", "return"] },
      { t: "10. Agregador de Métricas com Counter", d: "Avançado", x: 160, p: "Importe Counter de collections e retorne os 2 erros mais frequentes com .most_common(2).", s: "eventos = ['timeout', 'auth_fail', 'timeout', 'dns_err', 'timeout', 'auth_fail']\ndef top_erros(lista):\n    pass", r: ["Counter", "most_common"] }
    ]
  },
  {
    id: "php", name: "PHP", ext: "php", color: "#6366f1", badge: "PHP",
    projects: [
      { t: "1. Formatador Seguro de Cabeçalho HTML", d: "Iniciante", x: 80, p: "Use htmlspecialchars($titulo, ENT_QUOTES, 'UTF-8') para prevenir XSS antes de retornar.", s: "<?php\nfunction exibirTitulo(string $titulo): string {\n  return '<h1>' . $titulo . '</h1>';\n}", r: ["htmlspecialchars", "ENT_QUOTES"] },
      { t: "2. Filtro de Usuários Ativos com array_filter", d: "Iniciante", x: 90, p: "Use array_filter() para manter apenas registros onde $u['ativo'] === true.", s: "<?php\n$users = [['nome' => 'Ana', 'ativo' => true], ['nome' => 'Leo', 'ativo' => false]];\n$ativos = [];", r: ["array_filter", "ativo"] },
      { t: "3. Resposta JSON Padronizada de API", d: "Prático", x: 100, p: "Defina header('Content-Type: application/json') e retorne json_encode(['ok' => true]).", s: "<?php\nfunction responderJson(array $dados): string {\n  return '';\n}", r: ["header(", "application/json", "json_encode"] },
      { t: "4. Validador de Token Bearer", d: "Prático", x: 110, p: "Use str_starts_with($auth, 'Bearer ') e substr($auth, 7) para extrair o token.", s: "<?php\nfunction extrairToken(string $auth): ?string {\n  return null;\n}", r: ["str_starts_with", "Bearer", "substr"] },
      { t: "5. Consulta Preparada PDO Anti-SQL Injection", d: "Intermediário", x: 120, p: "Use $pdo->prepare('SELECT * FROM users WHERE email = :email') e $stmt->execute().", s: "<?php\nfunction buscarPorEmail(PDO $pdo, string $email) {\n}", r: ["->prepare(", ":email", "->execute("] },
      { t: "6. Hash Seguro de Senhas com password_hash", d: "Intermediário", x: 120, p: "Implemente criarHash($senha) usando password_hash($senha, PASSWORD_BCRYPT).", s: "<?php\nfunction criarHash(string $senha): string {\n  return $senha;\n}", r: ["password_hash", "PASSWORD_BCRYPT"] },
      { t: "7. Roteador Simples por Método HTTP", d: "Intermediário", x: 130, p: "Use match($metodo) para tratar 'GET', 'POST' e default => '405 Method Not Allowed'.", s: "<?php\nfunction rotear(string $metodo): string {\n  return '';\n}", r: ["match", "'GET'", "'POST'"] },
      { t: "8. Classe Readonly DTO (PHP 8.2+)", d: "Avançado", x: 140, p: "Crie readonly class PedidoDTO com public int $id e public float $valor no construtor.", s: "<?php\n", r: ["readonly class", "PedidoDTO", "float"] },
      { t: "9. Paginação de Resultados em Array", d: "Avançado", x: 140, p: "Calcule o offset ($pagina - 1) * $limite e use array_slice($itens, $offset, $limite).", s: "<?php\nfunction paginar(array $itens, int $pagina, int $limite): array {\n  return $itens;\n}", r: ["array_slice", "$offset"] },
      { t: "10. Upload Seguro com Verificação MIME", d: "Avançado", x: 160, p: "Valide se in_array($mime, ['image/png', 'image/jpeg'], true) antes de mover o arquivo.", s: "<?php\nfunction validarImagem(string $mime): bool {\n  return false;\n}", r: ["in_array", "image/png", "true"] }
    ]
  },
  {
    id: "java", name: "Java", ext: "java", color: "#dc2626", badge: "JV",
    projects: [
      { t: "1. Conta Bancária com Encapsulamento", d: "Iniciante", x: 80, p: "Implemente depositar(double valor) validando if (valor > 0) antes de somar ao saldo.", s: "public class Conta {\n  private double saldo = 0;\n  public void depositar(double valor) {\n  }\n}", r: ["if", "valor > 0", "saldo"] },
      { t: "2. Filtragem Moderna com Java Streams", d: "Iniciante", x: 90, p: "Use .stream().filter(n -> n % 2 == 0).toList() para retornar apenas números pares.", s: "import java.util.List;\npublic class Filtro {\n  public static List<Integer> pares(List<Integer> nums) {\n    return nums;\n  }\n}", r: [".stream()", ".filter(", ".toList()"] },
      { t: "3. Modelo Imutável com Java Record", d: "Prático", x: 100, p: "Declare public record Servidor(String host, int porta, boolean ativo) {}.", s: "public class Modelo {\n}\n", r: ["record Servidor", "String host", "int porta"] },
      { t: "4. Tratamento Seguro com Optional", d: "Prático", x: 110, p: "Use Optional.ofNullable(nome).orElse(\"Convidado\") para evitar NullPointerException.", s: "import java.util.Optional;\npublic class Perfil {\n  public static String obterNome(String nome) {\n    return nome;\n  }\n}", r: ["Optional.ofNullable", ".orElse("] },
      { t: "5. Cache Rápido com HashMap", d: "Intermediário", x: 120, p: "Use Map<String, Integer> cache = new HashMap<>() e cache.putIfAbsent(chave, valor).", s: "import java.util.*;\npublic class Cache {\n  public static void main(String[] args) {\n  }\n}", r: ["HashMap", "putIfAbsent"] },
      { t: "6. Exceção Customizada de Negócio", d: "Intermediário", x: 120, p: "Crie class SaldoInsuficienteException extends RuntimeException com construtor super(msg).", s: "public class Erros {\n}\n", r: ["extends RuntimeException", "super("] },
      { t: "7. Switch Expression com Pattern Matching", d: "Intermediário", x: 130, p: "Use switch (codigo) { case 200 -> \"OK\"; case 404 -> \"Não Encontrado\"; default -> \"Erro\"; }.", s: "public class HttpStatus {\n  public static String descrever(int codigo) {\n    return \"\";\n  }\n}", r: ["switch", "case 200 ->", "default ->"] },
      { t: "8. Agrupamento com Collectors.groupingBy", d: "Avançado", x: 140, p: "Agrupe a lista de strings pelo comprimento usando Collectors.groupingBy(String::length).", s: "import java.util.*;\nimport java.util.stream.*;\npublic class Agrupador {\n  public static Map<Integer, List<String>> porTamanho(List<String> palavras) {\n    return null;\n  }\n}", r: ["Collectors.groupingBy", "String::length"] },
      { t: "9. Execução Paralela com CompletableFuture", d: "Avançado", x: 150, p: "Use CompletableFuture.supplyAsync(() -> \"Concluído\") para rodar tarefa assíncrona.", s: "import java.util.concurrent.CompletableFuture;\npublic class Tarefa {\n  public static CompletableFuture<String> rodar() {\n    return null;\n  }\n}", r: ["CompletableFuture.supplyAsync"] },
      { t: "10. Singleton Thread-Safe", d: "Avançado", x: 160, p: "Implemente getInstance() com synchronized verificando if (instancia == null).", s: "public class Conexao {\n  private static Conexao instancia;\n  private Conexao() {}\n  public static Conexao getInstance() { return null; }\n}", r: ["synchronized", "instancia == null", "new Conexao()"] }
    ]
  },
  {
    id: "csharp", name: "C#", ext: "cs", color: "#7c3aed", badge: "C#",
    projects: [
      { t: "1. Consulta LINQ de Pedidos Aprovados", d: "Iniciante", x: 80, p: "Use .Where(p => p > 100).OrderByDescending(p => p).ToList() na lista de valores.", s: "using System.Linq;\nusing System.Collections.Generic;\nvar valores = new List<double> { 45, 210, 99, 540 };\n", r: [".Where(", ".OrderByDescending(", ".ToList()"] },
      { t: "2. Record Imutável com With-Expression", d: "Iniciante", x: 90, p: "Crie public record Produto(string Nome, decimal Preco); e clone alterando o preço com with.", s: "namespace Loja;\n", r: ["record Produto", "decimal Preco"] },
      { t: "3. Null-Coalescing e Safe Navigation", d: "Prático", x: 100, p: "Use os operadores ?. e ?? para retornar usuario?.Email ?? \"sem-email@dominio.com\".", s: "string ObterEmail(dynamic usuario) {\n  return \"\";\n}", r: ["?.", "??"] },
      { t: "4. Método Assíncrono com Task<T>", d: "Prático", x: 110, p: "Defina public async Task<string> BuscarDadosAsync() usando await Task.Delay(100).", s: "using System.Threading.Tasks;\npublic class Servico {\n}", r: ["async Task<string>", "await Task.Delay"] },
      { t: "5. Pattern Matching com Switch Expression", d: "Intermediário", x: 120, p: "Classifique a temperatura usando temp switch { < 15 => \"Frio\", <= 28 => \"Agradável\", _ => \"Quente\" }.", s: "string Clima(int temp) => \"\";\n", r: ["temp switch", "< 15 =>", "_ =>"] },
      { t: "6. Injeção de Dependência via Interface", d: "Intermediário", x: 130, p: "Crie interface INotificador com void Enviar(string msg) e implemente na classe EmailNotificador.", s: "namespace Notificacoes;\n", r: ["interface INotificador", "class EmailNotificador", "Enviar"] },
      { t: "7. Serialização JSON com System.Text.Json", d: "Prático", x: 110, p: "Importe System.Text.Json e serialize o objeto usando JsonSerializer.Serialize(dados).", s: "var dados = new { App = \"MissCode\", Versao = 2 };\n", r: ["System.Text.Json", "JsonSerializer.Serialize"] },
      { t: "8. Extension Method para Strings", d: "Avançado", x: 140, p: "Crie public static class StringExt com método this string texto para contar palavras.", s: "public static class StringExt {\n}", r: ["static class", "this string"] },
      { t: "9. Canal Assíncrono Producer/Consumer", d: "Avançado", x: 150, p: "Use Channel.CreateUnbounded<string>() para enfileirar mensagens entre tarefas.", s: "using System.Threading.Channels;\n", r: ["Channel.CreateUnbounded"] },
      { t: "10. Middleware Minimal API .NET", d: "Avançado", x: 160, p: "Mapeie um endpoint app.MapGet(\"/health\", () => Results.Ok(new { status = \"healthy\" })).", s: "void Configurar(dynamic app) {\n}", r: ["MapGet", "Results.Ok"] }
    ]
  },
  {
    id: "swift", name: "Swift (iOS)", ext: "swift", color: "#f97316", badge: "SW",
    projects: [
      { t: "1. Desembrulho Seguro com Guard Let", d: "Iniciante", x: 80, p: "Use guard let nome = entrada else { return \"Anônimo\" } para tratar opcionais com segurança.", s: "func saudar(entrada: String?) -> String {\n  return \"\"\n}", r: ["guard let", "else", "return"] },
      { t: "2. View Reativa com @State no SwiftUI", d: "Iniciante", x: 90, p: "Declare @State private var curtidas = 0 dentro da struct BotaoLike: View.", s: "import SwiftUI\nstruct BotaoLike: View {\n  var body: some View {\n    Text(\"Likes\")\n  }\n}", r: ["@State", "private var", "Button"] },
      { t: "3. Modelagem Codable para JSON de API", d: "Prático", x: 100, p: "Crie struct Usuario: Codable, Identifiable com let id: Int e let username: String.", s: "import Foundation\n", r: ["struct Usuario", "Codable", "Identifiable"] },
      { t: "4. Enum com Associated Values", d: "Prático", x: 110, p: "Crie enum EstadoCarga { case carregando, sucesso(String), falha(Error) }.", s: "import Foundation\n", r: ["enum EstadoCarga", "sucesso(String)", "falha(Error)"] },
      { t: "5. Requisição Assíncrona com Async/Await", d: "Intermediário", x: 120, p: "Implemente func baixarDados(url: URL) async throws -> Data usando URLSession.shared.data(from: url).", s: "import Foundation\nfunc baixarDados(url: URL) async throws -> Data {\n  fatalError()\n}", r: ["async throws", "try await", "URLSession.shared.data"] },
      { t: "6. Protocolo com Implementação Padrão", d: "Intermediário", x: 120, p: "Crie protocol Rastreavel com func logar() e adicione uma extension Rastreavel com print().", s: "import Foundation\n", r: ["protocol Rastreavel", "extension Rastreavel"] },
      { t: "7. Filtro e Ordenação com Closures", d: "Prático", x: 110, p: "Use notas.filter { $0 >= 7.0 }.sorted { $0 > $1 } para listar aprovados.", s: "let notas = [5.5, 8.0, 9.2, 6.4, 7.5]\nlet aprovados: [Double] = []", r: [".filter", ".sorted", "$0"] },
      { t: "8. ViewModel com @Observable / ObservableObject", d: "Avançado", x: 140, p: "Crie class PainelVM: ObservableObject com @Published var xp: Int = 0.", s: "import Combine\n", r: ["ObservableObject", "@Published"] },
      { t: "9. Modificador Customizado ViewModifier", d: "Avançado", x: 150, p: "Crie struct CardGlass: ViewModifier implementando func body(content: Content) -> some View.", s: "import SwiftUI\n", r: ["ViewModifier", "func body(content: Content)"] },
      { t: "10. Ator Concorrente (Swift Actor)", d: "Avançado", x: 160, p: "Declare actor ContadorSeguro com var valor = 0 e func incrementar() para isolar estado.", s: "import Foundation\n", r: ["actor ContadorSeguro", "func incrementar"] }
    ]
  },
  {
    id: "kotlin", name: "Kotlin (Android)", ext: "kt", color: "#9333ea", badge: "KT",
    projects: [
      { t: "1. Data Class com Cópia Imutável", d: "Iniciante", x: 80, p: "Crie data class Tarefa(val id: Int, val titulo: String, val feita: Boolean = false).", s: "package com.misscode.model\n", r: ["data class Tarefa", "val titulo: String", "Boolean"] },
      { t: "2. Tratamento de Nulos com Elvis Operator", d: "Iniciante", x: 90, p: "Use o operador ?.let e ?: para retornar token?.trim() ?: \"SEM_TOKEN\".", s: "fun limparToken(token: String?): String {\n  return \"\"\n}", r: ["?.", "?:"] },
      { t: "3. Sealed Class para Estados de Tela", d: "Prático", x: 100, p: "Crie sealed interface UiState com object Loading, data class Success(val dados: String) e data class Error(val msg: String).", s: "package com.misscode.ui\n", r: ["sealed", "UiState", "Loading", "Success"] },
      { t: "4. Coroutine Assíncrona com Dispatchers.IO", d: "Prático", x: 110, p: "Implemente suspend fun carregarPerfil(): String usando withContext(Dispatchers.IO).", s: "import kotlinx.coroutines.*\nsuspend fun carregarPerfil(): String {\n  return \"\"\n}", r: ["suspend fun", "withContext", "Dispatchers.IO"] },
      { t: "5. Componente Reativo Jetpack Compose", d: "Intermediário", x: 120, p: "Crie @Composable fun ContadorCard() usando var count by remember { mutableStateOf(0) }.", s: "import androidx.compose.runtime.*\n@Composable\nfun ContadorCard() {\n}\n", r: ["@Composable", "remember", "mutableStateOf"] },
      { t: "6. Fluxo Reativo com StateFlow", d: "Intermediário", x: 130, p: "Declare private val _xp = MutableStateFlow(0) e val xp: StateFlow<Int> = _xp.asStateFlow().", s: "import kotlinx.coroutines.flow.*\nclass GameViewModel {\n}\n", r: ["MutableStateFlow", "asStateFlow"] },
      { t: "7. Extension Function para Formatar Moeda", d: "Prático", x: 110, p: "Crie fun Double.paraReal(): String retornando \"R$ %.2f\".format(this).", s: "package com.misscode.ext\n", r: ["fun Double.paraReal", "format(this)"] },
      { t: "8. When Expression sem Else Redundante", d: "Intermediário", x: 120, p: "Use when (status) para mapear 200 -> \"OK\", 401 -> \"Não Autorizado\" e else -> \"Falha\".", s: "fun statusTexto(status: Int): String {\n  return \"\"\n}", r: ["when", "200 ->", "else ->"] },
      { t: "9. Scope Function Apply na WebView", d: "Avançado", x: 140, p: "Configure webView.settings.apply { javaScriptEnabled = true; domStorageEnabled = true }.", s: "fun configurarWebView(settings: dynamic) {\n}\n", r: [".apply", "javaScriptEnabled", "domStorageEnabled"] },
      { t: "10. Canal Flow com Filter e Map", d: "Avançado", x: 160, p: "Transforme o fluxo usando numeros.filter { it > 10 }.map { it * 2 }.", s: "import kotlinx.coroutines.flow.*\nfun transformar(numeros: Flow<Int>) = numeros\n", r: [".filter", ".map", "it"] }
    ]
  },
  {
    id: "dart", name: "Dart (Flutter)", ext: "dart", color: "#0ea5e9", badge: "DT",
    projects: [
      { t: "1. StatelessWidget de Cartão Perfil", d: "Iniciante", x: 80, p: "Crie class PerfilCard extends StatelessWidget sobrescrevendo Widget build(BuildContext context).", s: "import 'package:flutter/material.dart';\n", r: ["extends StatelessWidget", "Widget build", "BuildContext"] },
      { t: "2. Estado Local com StatefulWidget e setState", d: "Iniciante", x: 90, p: "Use setState(() { contador++; }) dentro do callback onPressed de um ElevatedButton.", s: "void incrementar(Function setState, int contador) {\n}", r: ["setState(", "contador++"] },
      { t: "3. FutureBuilder para Requisição Assíncrona", d: "Prático", x: 100, p: "Retorne FutureBuilder<String>(future: buscarApi(), builder: (context, snapshot) => Text(snapshot.data ?? '')).", s: "import 'package:flutter/material.dart';\nWidget painel(Future<String> Function() buscarApi) {\n  return Container();\n}", r: ["FutureBuilder", "snapshot.data"] },
      { t: "4. Factory Constructor fromJson", d: "Prático", x: 110, p: "Crie factory Curso.fromJson(Map<String, dynamic> json) retornando Curso(titulo: json['titulo']).", s: "class Curso {\n  final String titulo;\n  Curso({required this.titulo});\n}", r: ["factory Curso.fromJson", "Map<String, dynamic>"] },
      { t: "5. Lista Performática com ListView.builder", d: "Intermediário", x: 120, p: "Use ListView.builder(itemCount: itens.length, itemBuilder: (ctx, i) => ListTile(title: Text(itens[i]))).", s: "import 'package:flutter/material.dart';\nWidget lista(List<String> itens) {\n  return Container();\n}", r: ["ListView.builder", "itemCount:", "itemBuilder:"] },
      { t: "6. StreamController para Eventos em Tempo Real", d: "Intermediário", x: 130, p: "Crie final controller = StreamController<int>() e envie um valor com controller.sink.add(1).", s: "import 'dart:async';\nvoid iniciarFluxo() {\n}\n", r: ["StreamController", ".sink.add"] },
      { t: "7. Null Safety com Late e Required", d: "Prático", x: 100, p: "Crie class ConfigApp com atributos final String apiUrl e required this.apiUrl no construtor.", s: "class ConfigApp {\n}", r: ["final String", "required this."] },
      { t: "8. Animação Implícita com AnimatedContainer", d: "Avançado", x: 140, p: "Retorne AnimatedContainer(duration: const Duration(milliseconds: 300), width: ativo ? 200 : 80).", s: "import 'package:flutter/material.dart';\nWidget caixa(bool ativo) {\n  return Container();\n}", r: ["AnimatedContainer", "Duration("] },
      { t: "9. Desenho Customizado com CustomPainter", d: "Avançado", x: 150, p: "Crie class RadarPainter extends CustomPainter implementando void paint(Canvas canvas, Size size).", s: "import 'package:flutter/material.dart';\n", r: ["extends CustomPainter", "void paint(Canvas canvas"] },
      { t: "10. Isolates para Processamento Pesado", d: "Avançado", x: 160, p: "Use await Isolate.run(() => calcularHash()) para executar fora da UI thread.", s: "import 'dart:isolate';\nFuture<int> processar(int Function() calcularHash) async {\n  return 0;\n}", r: ["Isolate.run"] }
    ]
  },
  {
    id: "sql", name: "SQL", ext: "sql", color: "#059669", badge: "SQ",
    projects: [
      { t: "1. Consulta com Filtro e Ordenação", d: "Iniciante", x: 80, p: "Escreva uma query SELECT nome, email FROM usuarios WHERE ativo = 1 ORDER BY nome ASC.", s: "SELECT *\nFROM usuarios;\n", r: ["SELECT", "FROM usuarios", "WHERE", "ORDER BY"] },
      { t: "2. Agregação com GROUP BY e HAVING", d: "Iniciante", x: 90, p: "Conte pedidos por cliente usando SELECT cliente_id, COUNT(*) FROM pedidos GROUP BY cliente_id HAVING COUNT(*) > 3.", s: "SELECT cliente_id\nFROM pedidos;\n", r: ["COUNT(", "GROUP BY", "HAVING"] },
      { t: "3. Junção Relacional com INNER JOIN", d: "Prático", x: 100, p: "Una pedidos e clientes usando SELECT p.id, c.nome FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id.", s: "SELECT p.id\nFROM pedidos p;\n", r: ["INNER JOIN", "ON "] },
      { t: "4. Criação de Tabela com Chave Estrangeira", d: "Prático", x: 110, p: "Crie CREATE TABLE logs (id INT PRIMARY KEY, user_id INT REFERENCES usuarios(id), msg TEXT NOT NULL).", s: "CREATE TABLE logs (\n  id INT\n);\n", r: ["CREATE TABLE", "PRIMARY KEY", "REFERENCES"] },
      { t: "5. Atualização Condicional Segura (UPDATE)", d: "Prático", x: 100, p: "Atualize o status para 'expirado' com UPDATE sessoes SET status = 'expirado' WHERE expira_em < NOW().", s: "UPDATE sessoes\nSET status = 'ativo';\n", r: ["UPDATE sessoes", "SET", "WHERE"] },
      { t: "6. Subconsulta com IN e DISTINCT", d: "Intermediário", x: 120, p: "Busque produtos vendidos usando SELECT DISTINCT nome FROM produtos WHERE id IN (SELECT produto_id FROM itens_pedido).", s: "SELECT nome\nFROM produtos;\n", r: ["DISTINCT", "WHERE id IN", "SELECT produto_id"] },
      { t: "7. CTE (Common Table Expression) com WITH", d: "Intermediário", x: 130, p: "Defina WITH vendas_mes AS (SELECT * FROM vendas WHERE valor > 500) SELECT * FROM vendas_mes.", s: "SELECT * FROM vendas;\n", r: ["WITH vendas_mes AS", "SELECT"] },
      { t: "8. Window Function ROW_NUMBER() OVER", d: "Avançado", x: 140, p: "Ranqueie salários por departamento usando ROW_NUMBER() OVER (PARTITION BY dept_id ORDER BY salario DESC).", s: "SELECT nome, salario\nFROM funcionarios;\n", r: ["ROW_NUMBER()", "OVER", "PARTITION BY"] },
      { t: "9. Índice Composto para Alta Performance", d: "Avançado", x: 140, p: "Crie CREATE INDEX idx_logs_plat_data ON analysis_records (platform, created_at).", s: "CREATE INDEX idx_logs\nON analysis_records (platform);\n", r: ["CREATE INDEX", "ON analysis_records"] },
      { t: "10. Transação Atômica BEGIN / COMMIT", d: "Avançado", x: 160, p: "Envolva duas operações UPDATE entre BEGIN TRANSACTION; e COMMIT; para garantir atomicidade.", s: "UPDATE contas SET saldo = saldo - 100 WHERE id = 1;\n", r: ["BEGIN", "UPDATE", "COMMIT"] }
    ]
  },
  {
    id: "go", name: "Go", ext: "go", color: "#06b6d4", badge: "GO",
    projects: [
      { t: "1. Struct e Método Receptor em Go", d: "Iniciante", x: 80, p: "Crie type Servidor struct { Host string; Porta int } e o método func (s Servidor) Endereco() string.", s: "package main\n", r: ["type Servidor struct", "func (s Servidor)"] },
      { t: "2. Tratamento Explícito de Erros", d: "Iniciante", x: 90, p: "Retorne errors.New(\"porta inválida\") quando porta <= 0 na função validarPorta.", s: "package main\nimport \"errors\"\nfunc validarPorta(porta int) error {\n  return nil\n}", r: ["errors.New", "if porta <= 0"] },
      { t: "3. Goroutine e Channel Sincronizado", d: "Prático", x: 100, p: "Crie ch := make(chan string), dispare go func() { ch <- \"pronto\" }() e leia <-ch.", s: "package main\nfunc executar() string {\n  return \"\"\n}", r: ["make(chan", "go func", "<-ch"] },
      { t: "4. Handler HTTP Nativo net/http", d: "Prático", x: 110, p: "Implemente func healthHandler(w http.ResponseWriter, r *http.Request) escrevendo w.Write([]byte(\"OK\")).", s: "package main\nimport \"net/http\"\n", r: ["http.ResponseWriter", "*http.Request", "w.Write"] },
      { t: "5. Serialização JSON com Struct Tags", d: "Prático", x: 110, p: "Adicione tags json:\"user_id\" e json:\"active\" na struct Sessao.", s: "package main\ntype Sessao struct {\n  UserID int\n  Active bool\n}", r: ["`json:\"user_id\"`", "`json:\"active\"`"] },
      { t: "6. Multiplexação de Canais com Select", d: "Intermediário", x: 130, p: "Use select { case msg := <-c1: return msg; case <-time.After(time.Second): return \"timeout\" }.", s: "package main\nimport \"time\"\nfunc aguardar(c1 chan string) string {\n  return \"\"\n}", r: ["select {", "case", "time.After"] },
      { t: "7. Interface Polimórfica Implícita", d: "Intermediário", x: 120, p: "Crie type Almacenador interface { Salvar(dados []byte) error }.", s: "package main\n", r: ["type Almacenador interface", "Salvar("] },
      { t: "8. Sincronização com sync.WaitGroup", d: "Avançado", x: 140, p: "Use var wg sync.WaitGroup com wg.Add(1), defer wg.Done() e wg.Wait().", s: "package main\nimport \"sync\"\nfunc processarLote() {\n}\n", r: ["sync.WaitGroup", "wg.Add", "wg.Done", "wg.Wait"] },
      { t: "9. Contexto com Cancelamento (context.WithTimeout)", d: "Avançado", x: 150, p: "Crie ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second) e defer cancel().", s: "package main\nimport (\n  \"context\"\n  \"time\"\n)\nfunc consultar() {\n}\n", r: ["context.WithTimeout", "defer cancel()"] },
      { t: "10. Mapa Concorrente Seguro com sync.RWMutex", d: "Avançado", x: 160, p: "Proteja a leitura do mapa usando mu.RLock() e defer mu.RUnlock().", s: "package main\nimport \"sync\"\ntype Cache struct {\n  mu sync.RWMutex\n  itens map[string]string\n}\n", r: ["RLock()", "RUnlock()"] }
    ]
  },
  {
    id: "rust", name: "Rust", ext: "rs", color: "#b45309", badge: "RS",
    projects: [
      { t: "1. Pattern Matching com Option<T>", d: "Iniciante", x: 80, p: "Use match valor { Some(v) => v * 2, None => 0 } na função dobrar.", s: "fn dobrar(valor: Option<i32>) -> i32 {\n  0\n}", r: ["match valor", "Some(", "None =>"] },
      { t: "2. Tratamento de Erros com Result e ?", d: "Iniciante", x: 90, p: "Use texto.parse::<i32>()? para propagar erro de conversão na função somar_str.", s: "use std::num::ParseIntError;\nfn parsear(texto: &str) -> Result<i32, ParseIntError> {\n  Ok(0)\n}", r: [".parse::<i32>()?", "Ok("] },
      { t: "3. Borrowing Imutável de Slices", d: "Prático", x: 100, p: "Receba dados: &[i32] e retorne dados.iter().sum() sem tomar posse do vetor.", s: "fn somar_slice(dados: &[i32]) -> i32 {\n  0\n}", r: ["&[i32]", ".iter().sum()"] },
      { t: "4. Struct e Bloco Impl com Construtor", d: "Prático", x: 110, p: "Crie pub struct Pacote { pub bytes: usize } e impl Pacote { pub fn new(bytes: usize) -> Self }.", s: "pub fn init() {}\n", r: ["struct Pacote", "impl Pacote", "fn new"] },
      { t: "5. Iteradores Funcionais Filter e Collect", d: "Intermediário", x: 120, p: "Filtre números positivos usando nums.into_iter().filter(|&x| x > 0).collect().", s: "fn positivos(nums: Vec<i32>) -> Vec<i32> {\n  vec![]\n}", r: [".into_iter()", ".filter(", ".collect()"] },
      { t: "6. Enum de Comandos de Rede", d: "Prático", x: 110, p: "Crie enum Comando { Ping, Conectar(String), Desconectar } e trate no match.", s: "pub fn run() {}\n", r: ["enum Comando", "Conectar(String)"] },
      { t: "7. Trait Compartilhado Serializavel", d: "Intermediário", x: 130, p: "Declare pub trait Serializavel { fn para_json(&self) -> String; }.", s: "pub fn setup() {}\n", r: ["trait Serializavel", "fn para_json(&self)"] },
      { t: "8. Contagem de Frequência com HashMap", d: "Avançado", x: 140, p: "Use *mapa.entry(palavra).or_insert(0) += 1 para contar ocorrências.", s: "use std::collections::HashMap;\nfn contar(palavras: Vec<&str>) -> HashMap<&str, usize> {\n  let mut mapa = HashMap::new();\n  mapa\n}", r: [".entry(", ".or_insert(0)"] },
      { t: "9. Ponteiro Inteligente Arc<Mutex<T>>", d: "Avançado", x: 150, p: "Crie let contador = Arc::new(Mutex::new(0)) para compartilhamento seguro entre threads.", s: "use std::sync::{Arc, Mutex};\nfn criar_contador() {\n}\n", r: ["Arc::new", "Mutex::new"] },
      { t: "10. Lifetime Explícito em Referências", d: "Avançado", x: 160, p: "Implemente fn maior<'a>(x: &'a str, y: &'a str) -> &'a str retornando a maior string.", s: "pub fn check() {}\n", r: ["<'a>", "&'a str"] }
    ]
  },
  {
    id: "cpp", name: "C++", ext: "cpp", color: "#1d4ed8", badge: "C++",
    projects: [
      { t: "1. Ordenação Rápida com std::sort e Lambda", d: "Iniciante", x: 80, p: "Ordene o vetor v em ordem decrescente usando std::sort(v.begin(), v.end(), [](int a, int b){ return a > b; }).", s: "#include <vector>\n#include <algorithm>\nvoid ordenar(std::vector<int>& v) {\n}\n", r: ["std::sort", "v.begin()", "a > b"] },
      { t: "2. Ponteiro Único std::unique_ptr", d: "Iniciante", x: 90, p: "Crie auto ptr = std::make_unique<int>(42) evitando vazamento de memória manual.", s: "#include <memory>\nint main() {\n  return 0;\n}", r: ["std::make_unique"] },
      { t: "3. Busca O(1) com std::unordered_map", d: "Prático", x: 100, p: "Declare std::unordered_map<std::string, int> portas e insira portas[\"ssh\"] = 22.", s: "#include <unordered_map>\n#include <string>\nvoid init() {\n}\n", r: ["std::unordered_map", "[\"ssh\"]"] },
      { t: "4. Template Genérico de Máximo", d: "Prático", x: 110, p: "Crie template <typename T> T maximo(T a, T b) { return (a > b) ? a : b; }.", s: "int base() { return 0; }\n", r: ["template <typename T>", "maximo(T a, T b)"] },
      { t: "5. Regra RAII em Gerenciador de Arquivo", d: "Intermediário", x: 120, p: "Crie class Guard com destrutor ~Guard() que fecha o recurso automaticamente.", s: "class Guard {\npublic:\n  Guard() {}\n};\n", r: ["~Guard()"] },
      { t: "6. Move Semantics com std::move", d: "Intermediário", x: 130, p: "Transfira o buffer sem cópia usando std::vector<int> destino = std::move(origem).", s: "#include <vector>\n#include <utility>\nvoid transferir(std::vector<int>& origem) {\n}\n", r: ["std::move(origem)"] },
      { t: "7. Optional Moderno std::optional (C++17)", d: "Prático", x: 110, p: "Retorne std::nullopt quando não encontrar e use .value_or(-1).", s: "#include <optional>\nstd::optional<int> buscar(bool achou) {\n  return 10;\n}", r: ["std::nullopt"] },
      { t: "8. Thread Paralela com std::thread e Join", d: "Avançado", x: 140, p: "Crie std::thread t([](){}) e aguarde o término com t.join().", s: "#include <thread>\nvoid rodar() {\n}\n", r: ["std::thread", ".join()"] },
      { t: "9. Conceitos (Concepts C++20) Numerico", d: "Avançado", x: 150, p: "Defina template<typename T> concept Numerico = std::integral<T> || std::floating_point<T>.", s: "#include <concepts>\n", r: ["concept Numerico", "std::integral"] },
      { t: "10. Span Seguro sem Cópia std::span", d: "Avançado", x: 160, p: "Crie void processar(std::span<const int> janela) para ler fatias de array com segurança.", s: "#include <span>\n", r: ["std::span<const int>"] }
    ]
  },
  {
    id: "c", name: "C", ext: "c", color: "#475569", badge: "C",
    projects: [
      { t: "1. Troca de Valores via Ponteiros", d: "Iniciante", x: 80, p: "Implemente void trocar(int *a, int *b) usando uma variável temporária e desreferência *.", s: "void trocar(int *a, int *b) {\n}\n", r: ["int temp", "*a = *b", "*b = temp"] },
      { t: "2. Manipulação de Flags Bitwise", d: "Iniciante", x: 90, p: "Ative o bit usando flags |= (1 << pos) na função ativar_bit.", s: "unsigned int ativar_bit(unsigned int flags, int pos) {\n  return flags;\n}", r: ["|=", "1 << pos"] },
      { t: "3. Alocação Dinâmica com malloc e free", d: "Prático", x: 100, p: "Aloque int *buf = malloc(n * sizeof(int)), verifique if (!buf) e libere com free(buf).", s: "#include <stdlib.h>\nvoid criar_buffer(size_t n) {\n}\n", r: ["malloc(", "sizeof(int)", "free("] },
      { t: "4. Struct de Pacote de Rede", d: "Prático", x: 110, p: "Defina typedef struct { unsigned short porta; unsigned int ip; } Endpoint;.", s: "#include <stdint.h>\n", r: ["typedef struct", "Endpoint;"] },
      { t: "5. Cópia Segura de String com snprintf", d: "Prático", x: 110, p: "Evite buffer overflow usando snprintf(dest, sizeof(dest), \"%s\", src).", s: "#include <stdio.h>\nvoid copiar(const char *src) {\n  char dest[32];\n}", r: ["snprintf(", "sizeof(dest)"] },
      { t: "6. Cálculo de Tamanho de Array Estático", d: "Intermediário", x: 120, p: "Crie a macro #define ARRAY_LEN(arr) (sizeof(arr) / sizeof((arr)[0])).", s: "#include <stddef.h>\n", r: ["#define ARRAY_LEN", "sizeof(arr)"] },
      { t: "7. Ponteiro para Função (Callback)", d: "Intermediário", x: 130, p: "Receba int (*op)(int, int) como parâmetro na função executar_operacao.", s: "int executar_operacao(int a, int b) {\n  return 0;\n}", r: ["(*op)(int, int)", "op(a, b)"] },
      { t: "8. Buffer Circular (Ring Buffer)", d: "Avançado", x: 140, p: "Avance o índice circularmente usando head = (head + 1) % capacidade.", s: "int proximo_indice(int head, int capacidade) {\n  return 0;\n}", r: ["(head + 1) % capacidade"] },
      { t: "9. Leitura Binária com fread", d: "Avançado", x: 150, p: "Leia 1 bloco usando fread(&header, sizeof(header), 1, fp).", s: "#include <stdio.h>\nvoid ler(FILE *fp) {\n  int header = 0;\n}", r: ["fread(", "sizeof(header)"] },
      { t: "10. Lista Encadeada Simples (Nó)", d: "Avançado", x: 160, p: "Crie struct Node { int dado; struct Node *proximo; };.", s: "#include <stdlib.h>\n", r: ["struct Node", "struct Node *proximo"] }
    ]
  },
  {
    id: "ruby", name: "Ruby", ext: "rb", color: "#e11d48", badge: "RB",
    projects: [
      { t: "1. Transformação Elegante com Select e Map", d: "Iniciante", x: 80, p: "Use numeros.select(&:even?).map { |n| n * 10 } para multiplicar apenas os pares.", s: "numeros = [1, 2, 3, 4, 5, 6]\nresultado = []\n", r: [".select", ".map"] },
      { t: "2. Classe Ruby com attr_accessor", d: "Iniciante", x: 90, p: "Crie class Servidor com attr_accessor :host, :porta e def initialize(host, porta).", s: "class Base\nend\n", r: ["class Servidor", "attr_accessor", "def initialize"] },
      { t: "3. Safe Navigation e Hash Fetch", d: "Prático", x: 100, p: "Use config.fetch(:timeout, 30) para obter o valor com fallback seguro.", s: "def ler_timeout(config)\nend\n", r: [".fetch(:timeout, 30)"] },
      { t: "4. Bloco Customizado com Yield", d: "Prático", x: 110, p: "Implemente def executar_com_log verificando if block_given? antes de chamar yield.", s: "def executar_com_log\n  puts 'Iniciando'\nend", r: ["block_given?", "yield"] },
      { t: "5. Agrupamento com group_by", d: "Intermediário", x: 120, p: "Agrupe os logs por nível usando logs.group_by { |l| l[:nivel] }.", s: "logs = [{nivel: :info, msg: 'ok'}, {nivel: :erro, msg: 'falha'}]\n", r: [".group_by"] },
      { t: "6. Módulo Mixin com Include", d: "Intermediário", x: 120, p: "Crie module Auditavel com def registrar e inclua-o na class Pedido com include Auditavel.", s: "module BaseMod\nend\n", r: ["module Auditavel", "include Auditavel"] },
      { t: "7. Pattern Matching em Hashes (Ruby 3+)", d: "Avançado", x: 140, p: "Use case payload in { status: 200, dados: d } then d else nil end.", s: "def extrair(payload)\nend", r: ["case payload", "in {", "status: 200"] },
      { t: "8. Expressão Regular com Named Captures", d: "Intermediário", x: 130, p: "Extraia o IP usando regex /(?<ip>\\d+\\.\\d+\\.\\d+\\.\\d+)/ e match[:ip].", s: "def extrair_ip(linha)\nend", r: ["(?<ip>", ".match("] },
      { t: "9. Struct Imutável Data.define", d: "Avançado", x: 150, p: "Crie Ponto = Data.define(:x, :y) para modelar coordenadas imutáveis.", s: "COORD = nil\n", r: ["Data.define(:x, :y)"] },
      { t: "10. Pipeline Lazy para Grandes Arquivos", d: "Avançado", x: 160, p: "Use (1..Float::INFINITY).lazy.select { |x| x % 7 == 0 }.first(5).", s: "def primeiros_multiplos\nend", r: [".lazy", ".first(5)"] }
    ]
  },
  {
    id: "bash", name: "Bash / Linux", ext: "sh", color: "#16a34a", badge: "SH",
    projects: [
      { t: "1. Filtro de Erros em Syslog com Grep", d: "Iniciante", x: 80, p: "Use grep -i \"error\" /var/log/syslog | tail -n 20 para listar os últimos 20 erros.", s: "echo 'Syslog'\n", r: ["grep", "error", "tail -n 20"] },
      { t: "2. Backup Compactado com Tar e Data", d: "Iniciante", x: 90, p: "Crie tar -czf \"backup_$(date +%F).tar.gz\" /etc/nginx para arquivar configurações.", s: "mkdir -p /backups\n", r: ["tar -czf", "$(date"] },
      { t: "3. Verificação de Serviço Systemd", d: "Prático", x: 100, p: "Use systemctl is-active --quiet nginx || systemctl restart nginx.", s: "echo 'Checando Nginx'\n", r: ["systemctl is-active", "systemctl restart"] },
      { t: "4. Extração de IPs Atacantes com Awk e Sort", d: "Prático", x: 110, p: "Extraia a primeira coluna e conte ocorrências com awk '{print $1}' access.log | sort | uniq -c.", s: "touch access.log\n", r: ["awk", "sort", "uniq -c"] },
      { t: "5. Regra de Firewall UFW / IPTables", d: "Intermediário", x: 120, p: "Libere apenas SSH na porta 22 e bloqueie o resto com ufw default deny incoming e ufw allow 22/tcp.", s: "ufw status\n", r: ["ufw default deny", "ufw allow 22"] },
      { t: "6. Monitor de Disco com Alerta Acima de 85%", d: "Intermediário", x: 120, p: "Compare o uso de disco usando if [ \"$USO\" -gt 85 ]; then echo \"ALERTA\"; fi.", s: "USO=90\n", r: ["if [", "-gt 85", "fi"] },
      { t: "7. Túnel SSH Reverso Persistente", d: "Intermediário", x: 130, p: "Abra um túnel encaminhando porta local com ssh -N -L 8080:127.0.0.1:80 user@servidor.", s: "echo 'Iniciando tunel'\n", r: ["ssh", "-L 8080:"] },
      { t: "8. Modo Estrito Anti-Falhas em Scripts", d: "Prático", x: 100, p: "Adicione set -euo pipefail no topo do script para abortar em qualquer erro ou variável indefinida.", s: "echo \"Executando\"\n", r: ["set -euo pipefail"] },
      { t: "9. Rotação Automática de Logs Antigos", d: "Avançado", x: 140, p: "Remova arquivos .log com mais de 7 dias usando find /var/log/app -name \"*.log\" -mtime +7 -delete.", s: "mkdir -p /var/log/app\n", r: ["find ", "-mtime +7", "-delete"] },
      { t: "10. Healthcheck HTTP com Curl e Status Code", d: "Avançado", x: 150, p: "Capture o código HTTP usando curl -s -o /dev/null -w \"%{http_code}\" http://localhost:8000.", s: "URL=\"http://localhost:8000\"\n", r: ["curl", "%{http_code}"] }
    ]
  },
  {
    id: "lua", name: "Lua", ext: "lua", color: "#2563eb", badge: "LU",
    projects: [
      { t: "1. Tabela de Inventário e Iteração ipairs", d: "Iniciante", x: 80, p: "Percorra a tabela itens usando for i, v in ipairs(itens) do print(i, v) end.", s: "local itens = {'Espada', 'Escudo', 'Poção'}\n", r: ["ipairs(itens)", "do", "end"] },
      { t: "2. Dicionário de Atributos com pairs", d: "Iniciante", x: 90, p: "Itere sobre chaves e valores usando for k, v in pairs(stats) do print(k, v) end.", s: "local stats = { vida = 100, mana = 60, nivel = 5 }\n", r: ["pairs(stats)"] },
      { t: "3. Classe Orientada a Objetos via Metatables", d: "Prático", x: 110, p: "Configure Jogador.__index = Jogador e retorne setmetatable({ nome = nome }, Jogador).", s: "local Jogador = {}\nfunction Jogador.new(nome)\nend", r: ["__index", "setmetatable"] },
      { t: "4. Corrotina de Animação Assíncrona", d: "Prático", x: 110, p: "Crie local co = coroutine.create(function() coroutine.yield('passo 1') end) e execute coroutine.resume(co).", s: "local passo = 0\n", r: ["coroutine.create", "coroutine.yield", "coroutine.resume"] },
      { t: "5. Cooldown de Habilidade em Game Loop", d: "Intermediário", x: 120, p: "Verifique if (agora - ultimoUso) >= cooldown then ultimoUso = agora; return true end.", s: "local ultimoUso = 0\nlocal cooldown = 5\nfunction podeUsar(agora)\n  return false\nend", r: ["agora - ultimoUso", ">= cooldown"] },
      { t: "6. Validação Segura com pcall", d: "Intermediário", x: 120, p: "Execute a função arriscada usando local ok, resultado = pcall(fn) para capturar erros.", s: "function executarSeguro(fn)\n  return nil\nend", r: ["pcall(fn)"] },
      { t: "7. Parser de Comandos de Chat (/ban, /kick)", d: "Intermediário", x: 130, p: "Use string.match(msg, '^/(%w+)%s*(.*)') para separar o comando e o argumento.", s: "function parseComando(msg)\nend", r: ["string.match", "^/("] },
      { t: "8. Cálculo de Distância Vetorial 2D", d: "Prático", x: 100, p: "Calcule math.sqrt((x2 - x1)^2 + (y2 - y1)^2) na função distancia.", s: "function distancia(x1, y1, x2, y2)\n  return 0\nend", r: ["math.sqrt", "^2"] },
      { t: "9. Módulo Reutilizável com Return Table", d: "Avançado", x: 140, p: "Crie local M = {} com M.versao = '2.0' e termine o arquivo com return M.", s: "local versao = '2.0'\n", r: ["local M = {}", "return M"] },
      { t: "10. Tabela Somente Leitura (Proxy Metatable)", d: "Avançado", x: 160, p: "Bloqueie alterações definindo __newindex = function() error('Tabela somente leitura') end.", s: "function proteger(t)\n  return setmetatable({}, {\n    __index = t\n  })\nend", r: ["__newindex", "error("] }
    ]
  },
  {
    id: "r", name: "R", ext: "r", color: "#0284c7", badge: "R",
    projects: [
      { t: "1. Estatísticas Descritivas de Vetor", d: "Iniciante", x: 80, p: "Calcule a média com mean(tempos) e o desvio padrão com sd(tempos).", s: "tempos <- c(14.2, 18.5, 12.1, 25.0, 16.8)\n", r: ["mean(tempos)", "sd(tempos)"] },
      { t: "2. Filtragem de Data Frame com Subset", d: "Iniciante", x: 90, p: "Filtre linhas onde vendas > 1000 usando subset(df, vendas > 1000).", s: "df <- data.frame(mes = c('Jan', 'Fev', 'Mar'), vendas = c(800, 1500, 2200))\n", r: ["subset(", "vendas > 1000"] },
      { t: "3. Tratamento de Valores Ausentes (NA)", d: "Prático", x: 100, p: "Substitua valores NA pela média usando dados[is.na(dados)] <- mean(dados, na.rm = TRUE).", s: "dados <- c(10, NA, 20, NA, 30)\n", r: ["is.na(", "na.rm = TRUE"] },
      { t: "4. Criação de Coluna Calculada", d: "Prático", x: 100, p: "Adicione df$lucro <- df$receita - df$custo ao data frame.", s: "df <- data.frame(receita = c(500, 900), custo = c(300, 450))\n", r: ["df$lucro", "df$receita - df$custo"] },
      { t: "5. Agregação por Grupo com Aggregate", d: "Intermediário", x: 120, p: "Calcule a soma por categoria com aggregate(valor ~ categoria, data = df, FUN = sum).", s: "df <- data.frame(categoria = c('A', 'B', 'A'), valor = c(10, 20, 30))\n", r: ["aggregate(", "FUN = sum"] },
      { t: "6. Modelo de Regressão Linear (lm)", d: "Intermediário", x: 130, p: "Ajuste o modelo usando modelo <- lm(y ~ x, data = dados) e exiba summary(modelo).", s: "dados <- data.frame(x = 1:5, y = c(2, 4, 5, 8, 10))\n", r: ["lm(y ~ x", "summary(modelo)"] },
      { t: "7. Aplicação Vetorizada com sapply", d: "Prático", x: 110, p: "Aplique uma função anônima com sapply(lista, function(x) x^2).", s: "lista <- list(2, 4, 6, 8)\n", r: ["sapply(", "function(x)"] },
      { t: "8. Teste de Correlação de Pearson", d: "Intermediário", x: 120, p: "Calcule a correlação entre cpu e memoria com cor(cpu, memoria, method = 'pearson').", s: "cpu <- c(20, 45, 70, 90)\nmemoria <- c(30, 50, 75, 95)\n", r: ["cor(", "pearson"] },
      { t: "9. Classificação Condicional com ifelse", d: "Avançado", x: 140, p: "Classifique notas usando status <- ifelse(notas >= 7, 'Aprovado', 'Recuperacao').", s: "notas <- c(8.5, 5.0, 7.2, 6.8)\n", r: ["ifelse(", ">= 7"] },
      { t: "10. Pipeline Tidyverse com Filter e Mutate", d: "Avançado", x: 150, p: "Encadeie operações usando df |> filter(ativo == TRUE) |> mutate(dobro = valor * 2).", s: "library(dplyr)\n", r: ["filter(", "mutate("] }
    ]
  },
  {
    id: "scala", name: "Scala", ext: "scala", color: "#dc2626", badge: "SC",
    projects: [
      { t: "1. Case Class Imutável e Copy", d: "Iniciante", x: 80, p: "Declare case class Evento(id: Int, tipo: String) e clone com evento.copy(tipo = \"INFO\").", s: "object AppEventos\n", r: ["case class Evento", ".copy("] },
      { t: "2. Pattern Matching em Listas", d: "Iniciante", x: 90, p: "Use lista match { case Nil => \"Vazia\"; case head :: _ => s\"Primeiro: $head\" }.", s: "def descrever(lista: List[String]): String = {\n  \"\"\n}", r: ["match {", "case Nil =>", "case head ::"] },
      { t: "3. Transformação Segura com Option e Map", d: "Prático", x: 100, p: "Use env.get(\"PORT\").map(_.toInt).getOrElse(8080) para ler configurações.", s: "def lerPorta(env: Map[String, String]): Int = {\n  80\n}", r: [".map(_.toInt)", ".getOrElse(8080)"] },
      { t: "4. For-Comprehension com Futures", d: "Intermediário", x: 120, p: "Combine duas operações assíncronas usando for { a <- f1; b <- f2 } yield a + b.", s: "import scala.concurrent.{Future, ExecutionContext}\ndef somar(f1: Future[Int], f2: Future[Int])(implicit ec: ExecutionContext) = {\n}\n", r: ["for {", "<- f1", "yield"] },
      { t: "5. Sealed Trait para Álgebra de Dados (ADT)", d: "Prático", x: 110, p: "Crie sealed trait Resultado com case class Ok(v: Int) extends Resultado e case object Falha extends Resultado.", s: "object ModeloADT\n", r: ["sealed trait Resultado", "extends Resultado"] },
      { t: "6. Agrupamento com groupMapReduce", d: "Intermediário", x: 130, p: "Conte ocorrências usando itens.groupMapReduce(identity)(_ => 1)(_ + _).", s: "def contar(itens: List[String]): Map[String, Int] = {\n  Map.empty\n}", r: ["groupMapReduce"] },
      { t: "7. Tratamento Funcional com Try / Recover", d: "Prático", x: 110, p: "Envolva a conversão em Try(str.toInt).getOrElse(0) importando scala.util.Try.", s: "import scala.util.Try\ndef seguro(str: String): Int = 0\n", r: ["Try(", ".getOrElse(0)"] },
      { t: "8. Extension Method em Scala 3", d: "Avançado", x: 140, p: "Crie extension (s: String) def mascarar: String = s.take(3) + \"***\".", s: "object StringOps\n", r: ["extension (s: String)", "def mascarar"] },
      { t: "9. LazyList Infinita com Take", d: "Avançado", x: 150, p: "Gere números pares infinitos com LazyList.from(0, 2).take(5).toList.", s: "def cincoPares: List[Int] = Nil\n", r: ["LazyList.from", ".take(5)"] },
      { t: "10. Validação Acumulativa com Either", d: "Avançado", x: 160, p: "Retorne Right(idade) se idade >= 18 ou Left(\"Menor de idade\") usando Either[String, Int].", s: "def validarIdade(idade: Int): Either[String, Int] = {\n  Left(\"\")\n}", r: ["Right(idade)", "Left("] }
    ]
  },
  {
    id: "perl", name: "Perl", ext: "pl", color: "#0f766e", badge: "PL",
    projects: [
      { t: "1. Extração de Endereço MAC com Regex", d: "Iniciante", x: 80, p: "Use if ($linha =~ /([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}/) { print $&; } para capturar o MAC.", s: "use strict;\nuse warnings;\nmy $linha = 'DHCPACK on 192.168.1.50 to aa:bb:cc:11:22:33';\n", r: ["=~ /", "{5}"] },
      { t: "2. Contagem de Status HTTP em Hash", d: "Iniciante", x: 90, p: "Incremente $contagem{$code}++ enquanto percorre o array @codigos com foreach.", s: "use strict;\nuse warnings;\nmy @codigos = (200, 404, 200, 500, 200);\nmy %contagem;\n", r: ["foreach", "$contagem{", "++"] },
      { t: "3. Substituição Global de Dados Sensíveis", d: "Prático", x: 100, p: "Mascarar CPFs ou tokens usando $texto =~ s/token=\\w+/token=REDACTED/g.", s: "use strict;\nuse warnings;\nmy $texto = 'GET /api?token=abc12345&ok=1';\n", r: ["s/token=", "REDACTED/g"] },
      { t: "4. Filtro de Array com Grep Nativo", d: "Prático", x: 100, p: "Filtre portas privilegiadas (< 1024) usando my @priv = grep { $_ < 1024 } @portas.", s: "use strict;\nuse warnings;\nmy @portas = (22, 80, 443, 3000, 8080);\n", r: ["grep {", "$_ < 1024"] },
      { t: "5. Transformação de Lista com Map", d: "Prático", x: 110, p: "Converta todos os hostnames para minúsculo com my @lower = map { lc($_) } @hosts.", s: "use strict;\nuse warnings;\nmy @hosts = ('SRV-01', 'FW-CORE', 'DB-MAIN');\n", r: ["map {", "lc("] },
      { t: "6. Leitura Segura de Arquivo com Open Lexical", d: "Intermediário", x: 120, p: "Abra o arquivo usando open(my $fh, '<', 'hosts.txt') or die $!; e feche com close($fh).", s: "use strict;\nuse warnings;\n", r: ["open(my $fh", "or die", "close($fh)"] },
      { t: "7. Sub-rotina com Desempacotamento de @_", d: "Intermediário", x: 120, p: "Crie sub calcular_cidr { my ($ip, $mask) = @_; return \"$ip/$mask\"; }.", s: "use strict;\nuse warnings;\n", r: ["sub calcular_cidr", "@_"] },
      { t: "8. Referência de Hash Aninhado", d: "Intermediário", x: 130, p: "Acesse e altere o status usando $rede->{router}->{status} = 'UP';.", s: "use strict;\nuse warnings;\nmy $rede = { router => { status => 'DOWN' } };\n", r: ["$rede->{router}->{status}"] },
      { t: "9. Ordenação Numérica Customizada", d: "Avançado", x: 140, p: "Ordene números corretamente usando sort { $a <=> $b } @latencias (spaceship operator).", s: "use strict;\nuse warnings;\nmy @latencias = (120, 9, 45, 3, 88);\n", r: ["sort {", "<=>"] },
      { t: "10. Parser de Chave=Valor em Arquivo .env", d: "Avançado", x: 150, p: "Separe cada linha com my ($k, $v) = split(/=/, $linha, 2); armazenando em %env.", s: "use strict;\nuse warnings;\nmy $linha = 'API_URL=https://api.misscode.dev';\nmy %env;\n", r: ["split(/=/", ", 2)"] }
    ]
  }
];
