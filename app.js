const LANGUAGES = [
  { id: "html", name: "HTML5", ext: "html", color: "rgb(228, 77, 38)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { id: "javascript", name: "JavaScript", ext: "js", color: "rgb(247, 223, 30)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { id: "python", name: "Python", ext: "py", color: "rgb(55, 118, 171)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { id: "php", name: "PHP", ext: "php", color: "rgb(119, 123, 180)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { id: "java", name: "Java", ext: "java", color: "rgb(231, 111, 0)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { id: "swift", name: "Swift (iOS)", ext: "swift", color: "rgb(240, 81, 56)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
  { id: "dart", name: "Dart (Flutter)", ext: "dart", color: "rgb(2, 125, 253)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { id: "typescript", name: "TypeScript", ext: "ts", color: "rgb(49, 120, 198)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { id: "css", name: "CSS3", ext: "css", color: "rgb(21, 114, 182)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { id: "csharp", name: "CSharp (C\x23)", ext: "cs", color: "rgb(155, 79, 150)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { id: "kotlin", name: "Kotlin", ext: "kt", color: "rgb(127, 82, 255)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { id: "sql", name: "SQL", ext: "sql", color: "rgb(0, 120, 212)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { id: "go", name: "Go", ext: "go", color: "rgb(0, 173, 216)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" },
  { id: "rust", name: "Rust", ext: "rs", color: "rgb(222, 165, 132)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
  { id: "cpp", name: "C++", ext: "cpp", color: "rgb(0, 89, 156)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { id: "c", name: "C", ext: "c", color: "rgb(168, 185, 204)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { id: "ruby", name: "Ruby", ext: "rb", color: "rgb(204, 52, 45)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg" },
  { id: "bash", name: "Bash Linux", ext: "sh", color: "rgb(78, 170, 37)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" },
  { id: "lua", name: "Lua", ext: "lua", color: "rgb(59, 130, 246)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg" },
  { id: "r", name: "R Data", ext: "r", color: "rgb(39, 109, 195)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" },
  { id: "scala", name: "Scala", ext: "scala", color: "rgb(220, 50, 47)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scala/scala-original.svg" },
  { id: "elixir", name: "Elixir", ext: "ex", color: "rgb(168, 85, 247)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elixir/elixir-original.svg" }
];

const CATALOG = {
  html: [
    ["Atlas Arquitetônico", "Galeria interativa de obras arquitetônicas famosas.", 0],
    ["Chronos Museum", "Museu virtual com exposições de civilizações antigas.", 1],
    ["Ocean Depths", "Explorador visual das profundezas oceânicas.", 2],
    ["CineVault", "Catálogo de filmes clássicos com fichas cinematográficas.", 3],
    ["World Flags", "Enciclopédia interativa de bandeiras e países.", 0],
    ["Pixel Playground", "Galeria de arte digital e pixel art.", 5],
    ["Auto Legends", "Museu virtual de automóveis históricos.", 3],
    ["Botanical Garden", "Enciclopédia visual de espécies vegetais.", 7],
    ["Typography Lab", "Exposição interativa de tipografias e fontes.", 4],
    ["Aviation Archive", "Acervo histórico de aeronaves e aviação.", 6]
  ],
  javascript: [
    ["MindMaze", "Plataforma de enigmas e desafios de raciocínio.", 8],
    ["EventSphere", "Sistema de organização de festivais e eventos.", 7],
    ["DreamTrip", "Planejador de viagens com roteiros personalizados.", 1],
    ["Recipe Roulette", "Gerador de receitas aleatórias com ingredientes disponíveis.", 8],
    ["Auction House", "Plataforma de leilões online em tempo real.", 7],
    ["SoundWave", "Estúdio virtual para criação de músicas e batidas.", 5],
    ["PetConnect", "Plataforma de adoção e conexão entre animais e tutores.", 0],
    ["Escape Room Online", "Jogo de investigação com salas e desafios interativos.", 4],
    ["Streetwear Hub", "Marketplace de roupas urbanas e coleções exclusivas.", 3],
    ["Talent Arena", "Plataforma de competições de talentos e apresentações.", 9]
  ],
  python: [
    ["Orbital Explorer", "Simulador educacional de órbitas e mecânica espacial.", 2],
    ["EcoWatch", "Monitoramento de desmatamento e mudanças ambientais.", 6],
    ["MedArchive", "Biblioteca científica de pesquisas médicas.", 1],
    ["TradeSim", "Simulador de operações no mercado financeiro.", 9],
    ["Genealogy Tree", "Plataforma de construção de árvores genealógicas.", 1],
    ["Archaeology DB", "Catálogo digital de descobertas arqueológicas.", 0],
    ["Weather Intelligence", "Painel de análise e visualização meteorológica.", 2],
    ["Language Forge", "Plataforma de aprendizado de idiomas com exercícios adaptativos.", 8],
    ["Food Waste Tracker", "Sistema de acompanhamento do desperdício alimentar.", 9],
    ["Neural Canvas", "Laboratório de experimentação com modelos de inteligência artificial.", 5]
  ],
  php: [
    ["LegalDesk", "Portal de consulta e organização de documentos jurídicos.", 4],
    ["CondoManager", "Sistema administrativo para condomínios residenciais.", 6],
    ["Scholarship Finder", "Diretório de bolsas de estudo e oportunidades acadêmicas.", 8],
    ["CraftMarket", "Loja virtual especializada em artesanato independente.", 7],
    ["PressRoom", "Portal de publicação e gerenciamento de notícias jornalísticas.", 3],
    ["Funeral Planner", "Plataforma de organização de serviços funerários.", 1],
    ["Garage Control", "Sistema de gestão de oficinas mecânicas.", 6],
    ["BookExchange", "Rede de troca de livros entre leitores.", 0],
    ["Volunteer Network", "Portal de conexão entre voluntários e instituições sociais.", 7],
    ["Rental Office", "Plataforma de administração de contratos de aluguel de imóveis.", 9]
  ],
  java: [
    ["AirTraffic Control", "Painel de gerenciamento de tráfego aéreo.", 6],
    ["Port Logistics", "Sistema de controle de operações portuárias.", 4],
    ["Hospital Grid", "Gerenciamento de leitos, alas e ocupação hospitalar.", 5],
    ["Factory Monitor", "Painel de supervisão de linhas de produção industrial.", 9],
    ["Railway Central", "Sistema de administração de ferrovias e circulação de trens.", 1],
    ["Energy Distribution", "Monitoramento da distribuição de energia elétrica.", 2],
    ["Insurance Core", "Plataforma de gerenciamento de apólices e sinistros.", 7],
    ["University ERP", "Sistema de administração de matrículas, disciplinas e departamentos.", 8],
    ["Fleet Command", "Controle de frotas de veículos comerciais.", 6],
    ["Water Management", "Sistema de acompanhamento de reservatórios e distribuição hídrica.", 9]
  ],
  swift: [
    ["Stargazer", "Diário pessoal de observações astronômicas.", 2],
    ["Mood Garden", "Jardim digital que evolui conforme os registros emocionais.", 5],
    ["Pocket Sketch", "Caderno de desenhos e ilustrações para dispositivos móveis.", 5],
    ["Trail Journal", "Diário de expedições e trilhas com registros de percurso.", 1],
    ["Sleep Ritual", "Organizador de rotinas noturnas e hábitos de descanso.", 2],
    ["Closet Vision", "Organizador digital de roupas e combinações de vestuário.", 0],
    ["My Aquarium", "Gerenciador de aquários, espécies e manutenção.", 6],
    ["Coffee Passport", "Diário de degustação e avaliação de cafés especiais.", 3],
    ["Memory Lane", "Linha do tempo visual de lembranças e momentos pessoais.", 1],
    ["Plant Doctor", "Guia de identificação de problemas e cuidados com plantas.", 8]
  ],
  dart: [
    ["DriveSchool", "Plataforma de simulados e preparação para provas de habilitação.", 8],
    ["CourtVision", "Sistema de acompanhamento de partidas de tênis.", 9],
    ["BuildBudget", "Calculadora de custos e materiais para construções.", 7],
    ["Wedding Planner", "Gerenciador completo de cerimônias e casamentos.", 1],
    ["Pet Hotel", "Sistema de reservas e administração de hotéis para animais.", 7],
    ["Artisan Network", "Diretório de profissionais especializados em trabalhos manuais.", 0],
    ["Donation Bridge", "Plataforma de arrecadação para projetos comunitários.", 9],
    ["DiveLog", "Registro de mergulhos, profundidade e equipamentos utilizados.", 2],
    ["Music Academy", "Ambiente de aulas e acompanhamento de evolução musical.", 5],
    ["Farm Connect", "Plataforma de conexão entre produtores rurais e compradores.", 3]
  ],
  typescript: [
    ["DevPortfolio Cloud", "Construtor avançado de portfólios para desenvolvedores.", 3],
    ["CyberRange", "Laboratório virtual de treinamento em segurança cibernética.", 4],
    ["Workflow Matrix", "Editor visual de fluxos de trabalho empresariais.", 5],
    ["DataRoom", "Ambiente seguro para compartilhamento de documentos corporativos.", 4],
    ["API Observatory", "Painel de documentação e monitoramento de APIs.", 6],
    ["NFT Gallery", "Galeria de colecionáveis digitais com exposições temáticas.", 0],
    ["SupplyChain Vision", "Visualização da cadeia de suprimentos de produtos.", 1],
    ["Debate Arena", "Plataforma de debates com argumentos organizados por temas.", 8],
    ["Knowledge Graph", "Criador visual de mapas de conhecimento interconectados.", 2],
    ["Live Classroom", "Ambiente de aulas virtuais com quadro colaborativo.", 5]
  ],
  css: [
    ["Aurora Experience", "Experiência visual imersiva sobre fenômenos luminosos.", 2],
    ["Luxury Estates", "Vitrine cinematográfica de propriedades de luxo.", 3],
    ["Retro Arcade", "Portal visual inspirado em fliperamas dos anos 80.", 5],
    ["Minimal Atelier", "Portfólio minimalista de design de interiores.", 0],
    ["Fashion Editorial", "Revista digital de tendências e editoriais de moda.", 3],
    ["Cosmic Journey", "Experiência visual de exploração do universo.", 2],
    ["Zen Space", "Ambiente visual de meditação e relaxamento.", 2],
    ["Neon District", "Site conceitual de uma cidade futurista fictícia.", 4],
    ["Ink & Paper", "Portal editorial de literatura e poesia.", 1],
    ["Museum of Light", "Exposição digital de arte baseada em luz, sombras e cores.", 0]
  ],
  csharp: [
    ["Military Archive", "Enciclopédia histórica de equipamentos e veículos militares.", 1],
    ["Stock Exchange Pro", "Terminal de visualização de operações e indicadores financeiros.", 9],
    ["Construction BIM", "Plataforma de acompanhamento de modelos e projetos de engenharia.", 4],
    ["Legal Proceedings", "Sistema de acompanhamento de processos judiciais.", 1],
    ["Sports Facility Manager", "Gerenciamento de centros esportivos e instalações.", 7],
    ["Mining Operations", "Painel de acompanhamento de operações de mineração.", 6],
    ["Pharma Inventory", "Controle de estoque e rastreabilidade farmacêutica.", 7],
    ["Hotel Intelligence", "Central de análise de desempenho e ocupação hoteleira.", 9],
    ["Research Lab", "Plataforma de administração de experimentos científicos.", 4],
    ["Emergency Dispatch", "Painel de coordenação de ocorrências e equipes de emergência.", 6]
  ],
  kotlin: [
    ["Metro Navigator", "Mapa interativo de redes metropolitanas de transporte.", 1],
    ["Wildlife Tracker", "Catálogo de observações de animais selvagens.", 6],
    ["Campus Life", "Portal de atividades, clubes e acontecimentos universitários.", 3],
    ["Personal Finance Journal", "Diário de despesas e decisões financeiras.", 9],
    ["Space Weather", "Painel de acompanhamento de tempestades solares.", 2],
    ["Film Production Board", "Gerenciamento de cronogramas de produções audiovisuais.", 7],
    ["Language Exchange", "Comunidade para conversação entre pessoas de diferentes idiomas.", 8],
    ["Recipe Nutrition", "Analisador nutricional de preparações culinárias.", 9],
    ["Antique Valuator", "Catálogo de antiguidades com histórico e avaliação de peças.", 0],
    ["Smart Parking", "Sistema de visualização de vagas e ocupação de estacionamentos.", 5]
  ],
  sql: [
    ["Museum Collections DB", "Catálogo de acervos e peças museológicas.", 0],
    ["Library Intelligence", "Sistema de análise de circulação e empréstimos bibliotecários.", 9],
    ["E-commerce Analytics", "Central de análise de vendas e comportamento comercial.", 9],
    ["Crime Statistics", "Portal de visualização de estatísticas criminais públicas.", 6],
    ["Population Census", "Explorador de dados demográficos e censitários.", 9],
    ["Restaurant Operations", "Painel de controle de pedidos, mesas e operações gastronômicas.", 7],
    ["Logistics Warehouse", "Sistema de rastreamento de movimentação de mercadorias.", 4],
    ["Academic Performance", "Plataforma de análise de indicadores de desempenho escolar.", 8],
    ["Real Estate Analytics", "Explorador estatístico de preços e características imobiliárias.", 7],
    ["Telecommunications Monitor", "Painel de análise de infraestrutura e indicadores de telecom.", 6]
  ],
  go: [
    ["Uptime Sentinel", "Monitoramento de disponibilidade de servidores e serviços.", 6],
    ["Distributed Vault", "Gerenciador de armazenamento distribuído de arquivos.", 4],
    ["Network Observatory", "Visualização de topologia e tráfego de redes.", 2],
    ["Container Control", "Painel de gerenciamento de ambientes conteinerizados.", 5],
    ["LoadBalancer Studio", "Simulador visual de distribuição de requisições.", 2],
    ["LogStream", "Central de coleta e visualização de registros de sistemas.", 4],
    ["Cloud Cost Radar", "Painel de análise de custos de infraestrutura em nuvem.", 9],
    ["DNS Explorer", "Ferramenta visual de investigação e consulta de DNS.", 4],
    ["Queue Manager", "Painel de administração de filas de processamento.", 7],
    ["Backup Sentinel", "Central de acompanhamento de rotinas e integridade de backups.", 6]
  ],
  rust: [
    ["Binary Observatory", "Explorador visual de arquivos binários e estruturas de dados.", 4],
    ["Cryptographic Playground", "Laboratório educacional de algoritmos criptográficos.", 8],
    ["MemoryScope", "Visualizador didático de alocação e gerenciamento de memória.", 5],
    ["Compiler Explorer", "Ambiente de demonstração de etapas de compilação.", 4],
    ["Blockchain Explorer", "Explorador de blocos, transações e endereços públicos.", 1],
    ["Packet Inspector", "Analisador visual de pacotes de rede.", 6],
    ["File Integrity Lab", "Ferramenta de verificação de integridade por hashes.", 4],
    ["Database Benchmark", "Plataforma de comparação de desempenho de bancos de dados.", 9],
    ["Embedded Systems Lab", "Simulador educacional de componentes embarcados.", 5],
    ["Secure Code Audit", "Ambiente de análise estática de vulnerabilidades em código.", 8]
  ],
  cpp: [
    ["Physics Simulator", "Simulador interativo de fenômenos físicos.", 2],
    ["Robotics Control Center", "Interface de controle e simulação de robôs.", 6],
    ["3D Terrain Generator", "Gerador de terrenos tridimensionais.", 2],
    ["Automotive Diagnostics", "Painel de diagnóstico de sistemas automotivos.", 6],
    ["Flight Simulator Lab", "Simulador de parâmetros e instrumentos de voo.", 2],
    ["Molecular Explorer", "Visualizador tridimensional de estruturas moleculares.", 2],
    ["Industrial CNC Studio", "Interface de simulação de operações CNC.", 4],
    ["Game Engine Showcase", "Demonstração interativa de componentes de uma engine gráfica.", 3],
    ["Satellite Telemetry", "Visualização de dados simulados de telemetria de satélites.", 6],
    ["Acoustic Laboratory", "Laboratório de simulação e análise de ondas sonoras.", 2]
  ],
  c: [
    ["Operating System Lab", "Ambiente didático de visualização de processos e escalonamento.", 4],
    ["Microcontroller Studio", "Simulador de circuitos e microcontroladores.", 5],
    ["Memory Allocation Visualizer", "Demonstração de estratégias de alocação de memória.", 5],
    ["Digital Logic Simulator", "Laboratório de portas lógicas e circuitos digitais.", 8],
    ["Serial Communication Lab", "Interface de demonstração de comunicação serial.", 4],
    ["Embedded Diagnostics", "Painel de monitoramento de sistemas embarcados.", 6],
    ["Compiler Tokenizer", "Visualizador de análise léxica de código-fonte.", 4],
    ["Kernel Architecture", "Explorador educacional de componentes de um kernel.", 1],
    ["Signal Processing Lab", "Plataforma de demonstração de processamento de sinais.", 2],
    ["Hardware Register Explorer", "Visualizador didático de registradores e baixo nível.", 5]
  ],
  ruby: [
    ["Indie Publishing", "Plataforma de publicação independente de livros digitais.", 3],
    ["Tattoo Studio", "Portfólio e agendamento para estúdios de tatuagem.", 0],
    ["Farmers Market", "Feira digital de produtos artesanais e agrícolas locais.", 7],
    ["Interior Moodboard", "Criador de painéis de referências para decoração.", 5],
    ["Stand-up Central", "Diretório de comediantes e apresentações de stand-up.", 3],
    ["Escape Travel", "Catálogo de destinos turísticos pouco conhecidos.", 0],
    ["Vintage Collectors", "Comunidade de colecionadores de objetos vintage.", 7],
    ["Podcast Network", "Diretório de podcasts independentes e episódios.", 3],
    ["Wedding Photography", "Galeria profissional de fotografia de casamentos.", 0],
    ["Independent Cinema", "Portal dedicado a curtas-metragens e cineastas independentes.", 3]
  ],
  bash: [
    ["Linux Command Academy", "Plataforma interativa para aprendizado de comandos Linux.", 8],
    ["Server Health Dashboard", "Painel de saúde de servidores e recursos do sistema.", 6],
    ["Cron Job Manager", "Interface de documentação e organização de tarefas agendadas.", 1],
    ["Permission Explorer", "Laboratório visual de permissões e propriedade de arquivos.", 5],
    ["Shell Script Library", "Biblioteca de scripts administrativos reutilizáveis.", 4],
    ["Process Observatory", "Visualizador de processos, consumo e hierarquia de execução.", 9],
    ["Disk Space Intelligence", "Painel de análise de armazenamento e uso de disco.", 9],
    ["Linux Distro Atlas", "Enciclopédia comparativa de distribuições Linux.", 0],
    ["Firewall Rules Studio", "Interface de documentação e simulação de regras de firewall.", 4],
    ["Terminal Challenge", "Plataforma de desafios práticos de terminal e administração Linux.", 8]
  ],
  lua: [
    ["Pixel Kingdom", "Construtor de mundos e mapas para jogos 2D.", 5],
    ["Dungeon Architect", "Gerador de masmorras e cenários de RPG.", 5],
    ["NPC Workshop", "Criador de personagens não jogáveis e seus comportamentos.", 8],
    ["Quest Builder", "Editor de missões e narrativas interativas.", 1],
    ["Level Design Lab", "Plataforma de criação e organização de fases de jogos.", 5],
    ["Virtual Pet Universe", "Universo de animais virtuais personalizáveis.", 7],
    ["Game Asset Library", "Biblioteca de sprites, texturas e recursos para jogos.", 0],
    ["Interactive Fiction", "Plataforma de criação de histórias com escolhas.", 8],
    ["Combat Simulator", "Simulador de sistemas de combate e atributos de personagens.", 6],
    ["Procedural World", "Explorador de geração procedural de paisagens fictícias.", 2]
  ],
  r: [
    ["Global Inequality Atlas", "Visualização de desigualdade econômica entre países.", 9],
    ["Epidemiology Dashboard", "Análise de tendências epidemiológicas com dados públicos.", 9],
    ["Climate Research Hub", "Explorador de séries históricas climáticas.", 2],
    ["Election Data Lab", "Visualização estatística de resultados eleitorais históricos.", 9],
    ["Education Insights", "Análise de indicadores educacionais regionais.", 8],
    ["Agricultural Intelligence", "Painel estatístico de produtividade agrícola.", 9],
    ["Urban Mobility Research", "Análise de padrões de mobilidade urbana.", 6],
    ["Biodiversity Index", "Explorador de indicadores de biodiversidade.", 0],
    ["Demographic Forecast", "Simulador de projeções populacionais.", 9],
    ["Scientific Publication Metrics", "Painel de análise bibliométrica de publicações científicas.", 1]
  ],
  scala: [
    ["Big Data Observatory", "Plataforma de visualização de grandes volumes de dados.", 9],
    ["Recommendation Engine Lab", "Simulador de sistemas de recomendação de conteúdo.", 3],
    ["Fraud Detection Center", "Painel de identificação de padrões financeiros suspeitos.", 6],
    ["Real-Time Traffic Analytics", "Análise de congestionamentos e fluxo viário.", 6],
    ["Knowledge Mining", "Plataforma de descoberta de relações em bases de conhecimento.", 4],
    ["Retail Demand Forecast", "Previsão de demanda de produtos no varejo.", 9],
    ["Social Network Analytics", "Explorador de conexões e comunidades em redes sociais.", 2],
    ["Industrial IoT Analytics", "Central de análise de dados de sensores industriais.", 6],
    ["Customer Segmentation Lab", "Ferramenta de segmentação estatística de consumidores.", 9],
    ["Logistics Optimization", "Simulador de otimização de distribuição de cargas.", 7]
  ],
  elixir: [
    ["Live Auction Network", "Plataforma de leilões com atualizações instantâneas.", 7],
    ["Collaborative Whiteboard", "Quadro digital colaborativo em tempo real.", 5],
    ["Incident Command", "Central de coordenação simultânea de equipes em ocorrências.", 6],
    ["Community Radio Live", "Portal de transmissão e interação de rádios comunitárias.", 3],
    ["Multiplayer Chess Arena", "Ambiente de partidas de xadrez online simultâneas.", 5],
    ["Live Translation Room", "Sala de tradução colaborativa com atualizações em tempo real.", 4],
    ["Remote Support Desk", "Sistema de atendimento técnico com sessões compartilhadas.", 4],
    ["CrowdPulse", "Plataforma de enquetes ao vivo para grandes audiências.", 8],
    ["Distributed Chat Network", "Rede de salas de conversa com comunicação distribuída.", 1],
    ["Live Event Control", "Painel de gerenciamento de apresentações e eventos ao vivo.", 6]
  ]
};

const PALETTES = [
  { bg: "rgb(250, 246, 238)", surf: "rgb(255, 255, 255)", txt: "rgb(24, 24, 27)", acc: "rgb(234, 88, 12)", sec: "rgb(254, 215, 170)", fUrl: "https://fonts.googleapis.com/css2?family=Syne:wght@800&family=Space+Grotesk:wght@500;700&display=swap", fHead: "'Syne',sans-serif", fBody: "'Space Grotesk',sans-serif", rad: "4px", brd: "2.5px solid rgb(24,24,27)" },
  { bg: "rgb(7, 13, 24)", surf: "rgb(15, 26, 46)", txt: "rgb(226, 232, 240)", acc: "rgb(56, 189, 248)", sec: "rgb(30, 58, 138)", fUrl: "https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=IBM+Plex+Mono:wght@500;700&display=swap", fHead: "'Orbitron',sans-serif", fBody: "'IBM Plex Mono',monospace", rad: "8px", brd: "1px solid rgba(56,189,248,0.45)" },
  { bg: "rgb(14, 28, 22)", surf: "rgb(22, 46, 36)", txt: "rgb(236, 253, 245)", acc: "rgb(52, 211, 153)", sec: "rgb(6, 95, 70)", fUrl: "https://fonts.googleapis.com/css2?family=Fraunces:wght@700;900&family=DM+Sans:wght@500;700&display=swap", fHead: "'Fraunces',serif", fBody: "'DM Sans',sans-serif", rad: "22px", brd: "1px solid rgba(52,211,153,0.4)" },
  { bg: "rgb(22, 12, 18)", surf: "rgb(38, 20, 30)", txt: "rgb(253, 242, 248)", acc: "rgb(244, 63, 94)", sec: "rgb(136, 19, 55)", fUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@500;700&display=swap", fHead: "'Playfair Display',serif", fBody: "'Plus Jakarta Sans',sans-serif", rad: "14px", brd: "1px solid rgba(244,63,94,0.45)" },
  { bg: "rgb(241, 245, 249)", surf: "rgb(255, 255, 255)", txt: "rgb(15, 23, 42)", acc: "rgb(37, 99, 235)", sec: "rgb(219, 234, 254)", fUrl: "https://fonts.googleapis.com/css2?family=Outfit:wght@600;800&display=swap", fHead: "'Outfit',sans-serif", fBody: "'Outfit',sans-serif", rad: "18px", brd: "1px solid rgb(203,213,225)" },
  { bg: "rgb(18, 16, 14)", surf: "rgb(31, 27, 23)", txt: "rgb(254, 243, 199)", acc: "rgb(245, 158, 11)", sec: "rgb(120, 53, 15)", fUrl: "https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&display=swap", fHead: "'Chakra Petch',sans-serif", fBody: "'Chakra Petch',sans-serif", rad: "2px", brd: "1.5px solid rgba(245,158,11,0.55)" },
  { bg: "rgb(253, 244, 255)", surf: "rgb(255, 255, 255)", txt: "rgb(59, 7, 100)", acc: "rgb(147, 51, 234)", sec: "rgb(243, 232, 255)", fUrl: "https://fonts.googleapis.com/css2?family=Sora:wght@600;800&display=swap", fHead: "'Sora',sans-serif", fBody: "'Sora',sans-serif", rad: "26px", brd: "2px solid rgb(216,180,254)" },
  { bg: "rgb(5, 18, 20)", surf: "rgb(11, 36, 40)", txt: "rgb(204, 251, 241)", acc: "rgb(20, 184, 166)", sec: "rgb(17, 94, 89)", fUrl: "https://fonts.googleapis.com/css2?family=Righteous&family=Nunito:wght@600;800&display=swap", fHead: "'Righteous',cursive", fBody: "'Nunito',sans-serif", rad: "16px", brd: "1.5px dashed rgba(45,212,191,0.6)" }
];

const UI_TEXT = {
  pt: {
    saveProject: "Salvar",
    exportHtml: "Baixar .HTML",
    exportCode: "Exportar",
    loginBtn: "Login",
    accSettings: "Configurações da Conta",
    accName: "Nome de Exibição",
    accPhoto: "Foto de Perfil (URL)",
    accPhone: "Adicionar Número",
    accExtra: "Vincular Outra Conta",
    accSave: "Salvar Alterações",
    accSwitch: "Trocar / Outra Conta",
    accLogout: "Sair da Conta",
    livePreviewTitle: "Preview ao Vivo",
    pcView: "Tela PC",
    mobileView: "Tela Celular",
    refreshBtn: "Atualizar",
    aiSub: "Tutor de código em tempo real",
    sendBtn: "Enviar",
    langsTitle: "22 Linguagens",
    langsHint: "Clique na linguagem aqui e troque os 10 sites exclusivos lá no topo",
    savedTitle: "Salvos no App",
    chatPlaceholder: "Pergunte qualquer coisa pra MissIA...",
    welcomeAi: "Salve! Todos os 220 projetos exclusivos e os 22 logotipos reais estão ativos! Escolha a linguagem na esquerda e troque os projetos lá em cima."
  },
  en: {
    saveProject: "Save",
    exportHtml: "Download .HTML",
    exportCode: "Export",
    loginBtn: "Login",
    accSettings: "Account Settings",
    accName: "Display Name",
    accPhoto: "Profile Photo (URL)",
    accPhone: "Add Phone Number",
    accExtra: "Link Another Account",
    accSave: "Save Changes",
    accSwitch: "Switch Account",
    accLogout: "Sign Out",
    livePreviewTitle: "Live Preview",
    pcView: "PC Screen",
    mobileView: "Mobile Screen",
    refreshBtn: "Refresh",
    aiSub: "Real-time AI code tutor",
    sendBtn: "Send",
    langsTitle: "22 Languages",
    langsHint: "Pick a language here and choose its 10 unique projects in the top bar",
    savedTitle: "Saved Projects",
    chatPlaceholder: "Ask MissIA anything...",
    welcomeAi: "All 220 unique projects and official language logos are now live!"
  },
  es: {
    saveProject: "Guardar",
    exportHtml: "Descargar .HTML",
    exportCode: "Exportar",
    loginBtn: "Iniciar Sesión",
    accSettings: "Ajustes de Cuenta",
    accName: "Nombre Visible",
    accPhoto: "Foto de Perfil (URL)",
    accPhone: "Añadir Teléfono",
    accExtra: "Vincular Otra Cuenta",
    accSave: "Guardar Cambios",
    accSwitch: "Cambiar de Cuenta",
    accLogout: "Cerrar Sesión",
    livePreviewTitle: "Vista en Vivo",
    pcView: "Pantalla PC",
    mobileView: "Pantalla Móvil",
    refreshBtn: "Actualizar",
    aiSub: "Tutor de código en tiempo real",
    sendBtn: "Enviar",
    langsTitle: "22 Lenguajes",
    langsHint: "Elige un lenguaje aquí y cambia sus 10 sitios únicos arriba",
    savedTitle: "Guardados en la App",
    chatPlaceholder: "Pregúntale a MissIA...",
    welcomeAi: "¡Los 220 proyectos exclusivos con estruturas distintas y logotipos oficiales ya están listos!"
  }
};

const DICTIONARY = {
  print: "Escreve e mostra um texto, número ou variável diretamente na tela.",
  println: "Escreve a informação na tela e pula automaticamente para a próxima linha.",
  printf: "Escreve na tela formatando variáveis dentro do texto.",
  console: "Objeto que dá acesso ao painel de mensagens e depuração do navegador.",
  log: "Registra e escreve uma mensagem dentro do console.",
  echo: "Imprime textos ou valores na saída do terminal ou da página.",
  puts: "Exibe uma linha de texto na tela de forma limpa.",
  if: "Cria uma condição ('se'): só executa o bloco se a regra for verdadeira.",
  else: "Define o caminho alternativo ('senão') quando o 'if' não é atendido.",
  elif: "Testa uma nova condição caso o 'if' anterior seja falso.",
  for: "Laço de repetição: repete um bloco de código percorrendo itens.",
  while: "Repete o código continuamente enquanto a condição continuar verdadeira.",
  function: "Declara uma função reutilizável que agrupa vários comandos.",
  def: "Define uma nova função ou método para ser chamado depois.",
  func: "Palavra usada em Swift e Go para criar uma função.",
  fn: "Palavra usada em Rust para declarar uma função.",
  fun: "Palavra usada em Kotlin para criar uma função.",
  return: "Devolve o resultado final de uma função para quem chamou ela.",
  const: "Cria uma constante: valor salvo na memória que não pode ser trocado.",
  let: "Cria uma variável com escopo controlado.",
  var: "Declara uma variável cujo valor pode mudar ao longo do programa.",
  final: "Define que a variável só pode receber valor uma única vez.",
  class: "Cria um molde (classe) para construir objetos com dados e funções.",
  struct: "Cria uma estrutura leve de dados agrupados em Swift, Rust, Go e C.",
  import: "Traz bibliotecas ou arquivos externos para usar recursos prontos.",
  SELECT: "Comando SQL para buscar e ler colunas do banco de dados.",
  FROM: "Comando SQL que aponta de qual tabela os dados serão lidos.",
  WHERE: "Comando SQL que filtra apenas os registros que cumprem a regra.",
  ORDER: "Comando SQL usado para ordenar os resultados da consulta.",
  html: "Tag raiz que envolve toda a estrutura de uma página web.",
  body: "Corpo visível do site: tudo aqui dentro aparece na tela.",
  canvas: "Área gráfica para desenhar simuladores, partículas e jogos em tempo real.",
  nav: "Barra de navegação superior ou lateral de um site.",
  section: "Define uma seção estrutural distinta dentro da página.",
  button: "Cria um botão clicável interativo na tela.",
  grid: "Ativa o CSS Grid para organizar layouts complexos em linhas e colunas.",
  flex: "Ativa o Flexbox para alinhar elementos dinamicamente."
};

function buildUniqueArchitectureSite(langObj, slotIdx, title, desc, archType) {
  const sOpen = "<" + "script>";
  const sClose = "<" + "/script>";
  const seed = langObj.id.charCodeAt(0) + slotIdx * 5;
  const p = PALETTES[seed % PALETTES.length];
  const words = desc.replace(/[.,]/g, "").split(" ").filter((w) => w.length > 4);
  const tagA = (words[0] || "Modulo").toUpperCase();
  const tagB = (words[1] || "Ativo").toUpperCase();
  const tagC = (words[2] || "Sistema").toUpperCase();

  const headLines = [
    "<!DOCTYPE html>",
    "<html lang=\"pt-BR\">",
    "<head>",
    "  <meta charset=\"UTF-8\" />",
    "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
    "  <title>" + title + "</title>",
    "  <link rel=\"stylesheet\" href=\"" + p.fUrl + "\" />",
    "  <style>",
    "    * { box-sizing: border-box; margin: 0; padding: 0; }",
    "    body {",
    "      min-height: 100vh;",
    "      background: " + p.bg + ";",
    "      color: " + p.txt + ";",
    "      font-family: " + p.fBody + ";",
    "      overflow-x: hidden;",
    "    }",
    "    button {",
    "      cursor: pointer;",
    "      font-family: inherit;",
    "      font-weight: 700;",
    "      transition: all 0.2s ease;",
    "    }",
    "    button:hover { transform: translateY(-2px); filter: brightness(1.08); }",
    "    @keyframes fadeUp {",
    "      from { opacity: 0; transform: translateY(14px); }",
    "      to { opacity: 1; transform: translateY(0); }",
    "    }",
    "    @media (max-width: 430px) {",
    "      .ops, .layout, .bento, .split, .kpis { grid-template-columns: 1fr !important; }",
    "      .radar { margin: 0 auto; }",
    "    }"
  ];

  if (archType === 0) {
    return [
      ...headLines,
      "    .nav { display: flex; justify-content: space-between; align-items: center; padding: 14px 22px; border-bottom: " + p.brd + "; background: " + p.surf + "; }",
      "    .hero { padding: 22px 22px 12px; }",
      "    .filters { display: flex; gap: 8px; padding: 0 22px 14px; flex-wrap: wrap; }",
      "    .pill { padding: 7px 14px; border-radius: " + p.rad + "; border: " + p.brd + "; background: " + p.surf + "; color: " + p.txt + "; }",
      "    .pill.act { background: " + p.acc + "; color: white; }",
      "    .masonry { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px, 1fr)); gap: 12px; padding: 0 22px 24px; }",
      "    .tile { padding: 16px; border-radius: " + p.rad + "; border: " + p.brd + "; background: " + p.surf + "; animation: fadeUp 0.4s ease; display: flex; flex-direction: column; justify-content: space-between; min-height: 135px; }",
      "    .tile:nth-child(even) { background: " + p.sec + "; }",
      "  </style>",
      "</head>",
      "<body>",
      "  <nav class=\"nav\">",
      "    <strong style=\"font-family:" + p.fHead + ";font-size:1.1rem;\">" + title + "</strong>",
      "    <span style=\"font-size:0.72rem;padding:4px 10px;background:" + p.acc + ";color:white;border-radius:" + p.rad + ";\">" + langObj.name + "</span>",
      "  </nav>",
      "  <section class=\"hero\">",
      "    <h1 style=\"font-family:" + p.fHead + ";font-size:1.7rem;\">" + title + "</h1>",
      "    <p style=\"opacity:0.82;margin-top:4px;font-size:0.88rem;\">" + desc + "</p>",
      "  </section>",
      "  <div class=\"filters\">",
      "    <button class=\"pill act\" onclick=\"filtrar('TODOS', this)\">Todos</button>",
      "    <button class=\"pill\" onclick=\"filtrar('" + tagA + "', this)\">" + tagA + "</button>",
      "    <button class=\"pill\" onclick=\"filtrar('" + tagB + "', this)\">" + tagB + "</button>",
      "  </div>",
      "  <main id=\"grid\" class=\"masonry\"></main>",
      "  " + sOpen,
      "    const dados = [",
      "      { t: 'Acervo Principal 01', c: '" + tagA + "', v: 'Inspecionar' },",
      "      { t: 'Coleção Rara 02', c: '" + tagB + "', v: 'Ver Detalhes' },",
      "      { t: 'Exposição Visual 03', c: '" + tagA + "', v: 'Alta Resolução' },",
      "      { t: 'Arquivo Especial 04', c: '" + tagB + "', v: 'Abrir Ficha' }",
      "    ];",
      "    function filtrar(cat, btn) {",
      "      document.querySelectorAll('.pill').forEach(b => b.classList.remove('act'));",
      "      if (btn) btn.classList.add('act');",
      "      const g = document.getElementById('grid');",
      "      g.innerHTML = '';",
      "      dados.filter(d => cat === 'TODOS' || d.c === cat).forEach(d => {",
      "        const el = document.createElement('div');",
      "        el.className = 'tile';",
      "        el.innerHTML = '<span style=\"font-size:0.68rem;font-weight:800;opacity:0.7;\">' + d.c + '</span>' +",
      "          '<strong style=\"font-size:0.95rem;margin:8px 0;\">' + d.t + '</strong>' +",
      "          '<button onclick=\"this.textContent=\\'✓ Aberto\\'\" style=\"padding:7px 10px;background:" + p.acc + ";color:white;border:none;border-radius:" + p.rad + ";\">' + d.v + '</button>';",
      "        g.appendChild(el);",
      "      });",
      "    }",
      "    filtrar('TODOS');",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (archType === 1) {
    return [
      ...headLines,
      "    .layout { display: grid; grid-template-columns: 175px 1fr; min-height: 100vh; }",
      "    .rail { padding: 18px 14px; border-right: " + p.brd + "; background: " + p.surf + "; display: flex; flex-direction: column; gap: 9px; }",
      "    .era-btn { text-align: left; padding: 9px 11px; border-radius: " + p.rad + "; border: " + p.brd + "; background: transparent; color: " + p.txt + "; }",
      "    .era-btn.on { background: " + p.acc + "; color: white; }",
      "    .stage { padding: 22px; display: flex; flex-direction: column; gap: 14px; }",
      "    .tline { border-left: 3px solid " + p.acc + "; padding-left: 18px; display: flex; flex-direction: column; gap: 12px; }",
      "    .node { position: relative; padding: 14px; background: " + p.surf + "; border: " + p.brd + "; border-radius: " + p.rad + "; animation: fadeUp 0.35s ease; }",
      "    .node::before { content: ''; position: absolute; left: -26px; top: 18px; width: 12px; height: 12px; border-radius: 50%; background: " + p.acc + "; }",
      "  </style>",
      "</head>",
      "<body>",
      "  <div class=\"layout\">",
      "    <aside class=\"rail\">",
      "      <strong style=\"font-family:" + p.fHead + ";font-size:1rem;\">" + title + "</strong>",
      "      <button class=\"era-btn on\" onclick=\"carregarFase(0, this)\">Fase I • Origem</button>",
      "      <button class=\"era-btn\" onclick=\"carregarFase(1, this)\">Fase II • Expansão</button>",
      "      <button class=\"era-btn\" onclick=\"carregarFase(2, this)\">Fase III • Atual</button>",
      "    </aside>",
      "    <main class=\"stage\">",
      "      <div>",
      "        <h1 style=\"font-family:" + p.fHead + ";font-size:1.55rem;\">" + title + "</h1>",
      "        <p style=\"opacity:0.82;font-size:0.86rem;\">" + desc + "</p>",
      "      </div>",
      "      <div id=\"tl\" class=\"tline\"></div>",
      "    </main>",
      "  </div>",
      "  " + sOpen,
      "    const fases = [",
      "      [['Registro Inicial', 'Marco primário catalogado em " + tagA + ".'], ['Expedição Base', 'Documentação verificada.']],",
      "      [['Consolidação', 'Evolução estrutural de " + tagB + ".'], ['Rede Integrada', 'Conexão entre acervos.']],",
      "      [['Tempo Real', 'Monitoramento ativo de " + tagC + ".'], ['Projeção', 'Análise contínua habilitada.']]",
      "    ];",
      "    function carregarFase(i, b) {",
      "      document.querySelectorAll('.era-btn').forEach(x => x.classList.remove('on'));",
      "      if (b) b.classList.add('on');",
      "      const t = document.getElementById('tl');",
      "      t.innerHTML = '';",
      "      fases[i].forEach(n => {",
      "        t.innerHTML += '<div class=\"node\"><strong>' + n[0] + '</strong><p style=\"font-size:0.82rem;margin:5px 0 8px;\">' + n[1] + '</p>' +",
      "          '<button onclick=\"this.textContent=\\'★ Salvo\\'\" style=\"padding:6px 12px;border:none;border-radius:" + p.rad + ";background:" + p.acc + ";color:white;\">Explorar</button></div>';",
      "      });",
      "    }",
      "    carregarFase(0);",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (archType === 2) {
    return [
      ...headLines,
      "    body { background: rgb(5, 9, 20); color: white; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }",
      "    .hud-top { position: fixed; top: 12px; left: 14px; right: 14px; display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: rgba(15, 23, 42, 0.78); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.22); border-radius: 14px; z-index: 5; }",
      "    .hud-bot { position: fixed; bottom: 12px; left: 14px; right: 14px; display: flex; gap: 12px; align-items: center; flex-wrap: wrap; padding: 10px 15px; background: rgba(15, 23, 42, 0.82); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.22); border-radius: 14px; z-index: 5; }",
      "    canvas { width: 100vw; height: 100vh; display: block; cursor: crosshair; }",
      "  </style>",
      "</head>",
      "<body>",
      "  <div class=\"hud-top\">",
      "    <div>",
      "      <strong style=\"font-family:" + p.fHead + ";font-size:1.05rem;\">" + title + "</strong>",
      "      <div style=\"font-size:0.74rem;opacity:0.8;\">" + desc + "</div>",
      "    </div>",
      "    <span style=\"padding:4px 10px;border-radius:99px;background:" + p.acc + ";font-size:0.7rem;font-weight:800;\">SIMULADOR</span>",
      "  </div>",
      "  <canvas id=\"sim\"></canvas>",
      "  <div class=\"hud-bot\">",
      "    <label style=\"font-size:0.76rem;\">Velocidade <input id=\"spd\" type=\"range\" min=\"1\" max=\"12\" value=\"4\" /></label>",
      "    <label style=\"font-size:0.76rem;\">Partículas <input id=\"dns\" type=\"range\" min=\"20\" max=\"120\" value=\"65\" /></label>",
      "    <button onclick=\"pulso()\" style=\"padding:7px 14px;border:none;border-radius:10px;background:" + p.acc + ";color:white;\">Emitir Pulso</button>",
      "  </div>",
      "  " + sOpen,
      "    const c = document.getElementById('sim');",
      "    const x = c.getContext('2d');",
      "    let w = c.width = innerWidth, h = c.height = innerHeight, t = 0, bst = 1;",
      "    onresize = () => { w = c.width = innerWidth; h = c.height = innerHeight; };",
      "    function pulso() { bst = 3.2; }",
      "    c.onclick = () => { bst = 2.8; };",
      "    function animar() {",
      "      const sp = Number(document.getElementById('spd').value) * 0.012 * bst;",
      "      const n = Number(document.getElementById('dns').value);",
      "      bst = Math.max(1, bst * 0.96);",
      "      t += sp;",
      "      x.fillStyle = 'rgba(5, 9, 20, 0.22)';",
      "      x.fillRect(0, 0, w, h);",
      "      for (let i = 0; i < n; i++) {",
      "        const ang = i * 0.42 + t;",
      "        const rad = (i / n) * Math.min(w, h) * 0.4;",
      "        const px = w / 2 + Math.cos(ang) * rad;",
      "        const py = h / 2 + Math.sin(ang * 1.3) * rad * 0.75;",
      "        x.beginPath();",
      "        x.fillStyle = i % 2 === 0 ? '" + p.acc + "' : 'rgb(56, 189, 248)';",
      "        x.arc(px, py, 2.5 + (i % 3), 0, Math.PI * 2);",
      "        x.fill();",
      "      }",
      "      requestAnimationFrame(animar);",
      "    }",
      "    animar();",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (archType === 5) {
    return [
      ...headLines,
      "    .studio { max-width: 520px; margin: 18px auto; padding: 20px; background: " + p.surf + "; border: " + p.brd + "; border-radius: " + p.rad + "; }",
      "    .board { display: grid; grid-template-columns: repeat(6, 1fr); gap: 7px; margin: 14px 0; }",
      "    .pad { aspect-ratio: 1; border-radius: 8px; border: " + p.brd + "; background: " + p.bg + "; cursor: pointer; transition: transform 0.1s; }",
      "    .pad.lit { background: " + p.acc + "; transform: scale(0.92); }",
      "  </style>",
      "</head>",
      "<body>",
      "  <div class=\"studio\">",
      "    <div style=\"display:flex;justify-content:space-between;align-items:center;gap:10px;\">",
      "      <h1 style=\"font-family:" + p.fHead + ";font-size:1.4rem;\">" + title + "</h1>",
      "      <button onclick=\"gerarPadrao()\" style=\"padding:8px 14px;background:" + p.acc + ";color:white;border:none;border-radius:" + p.rad + ";\">Gerar Padrão</button>",
      "    </div>",
      "    <p style=\"font-size:0.84rem;opacity:0.82;margin-top:6px;\">" + desc + " (Clique nos blocos interativos)</p>",
      "    <div id=\"brd\" class=\"board\"></div>",
      "    <button onclick=\"limparGrade()\" style=\"padding:8px 14px;background:transparent;color:" + p.txt + ";border:" + p.brd + ";border-radius:" + p.rad + ";\">Limpar Grade</button>",
      "  </div>",
      "  " + sOpen,
      "    const b = document.getElementById('brd');",
      "    const ac = new (window.AudioContext || window.webkitAudioContext)();",
      "    function tocarNota(freq) {",
      "      try {",
      "        const osc = ac.createOscillator();",
      "        const gain = ac.createGain();",
      "        osc.frequency.value = freq;",
      "        gain.gain.value = 0.05;",
      "        osc.connect(gain);",
      "        gain.connect(ac.destination);",
      "        osc.start();",
      "        osc.stop(ac.currentTime + 0.1);",
      "      } catch (e) {}",
      "    }",
      "    for (let i = 0; i < 36; i++) {",
      "      const celula = document.createElement('div');",
      "      celula.className = 'pad';",
      "      celula.onclick = () => {",
      "        celula.classList.toggle('lit');",
      "        tocarNota(220 + i * 18);",
      "      };",
      "      b.appendChild(celula);",
      "    }",
      "    function gerarPadrao() {",
      "      document.querySelectorAll('.pad').forEach(el => el.classList.toggle('lit', Math.random() > 0.62));",
      "      tocarNota(440);",
      "    }",
      "    function limparGrade() {",
      "      document.querySelectorAll('.pad').forEach(el => el.classList.remove('lit'));",
      "    }",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (archType === 6) {
    return [
      ...headLines,
      "    body { background: rgb(7, 15, 26); color: rgb(224, 242, 254); padding: 18px; }",
      "    .ops { display: grid; grid-template-columns: 165px 1fr; gap: 18px; align-items: center; margin-top: 16px; }",
      "    .radar { width: 155px; height: 155px; border-radius: 50%; border: 2px solid rgb(56, 189, 248); background: conic-gradient(from 0deg, rgba(56, 189, 248, 0.45), transparent 45%); animation: spin 3.2s linear infinite; }",
      "    @keyframes spin { to { transform: rotate(360deg); } }",
      "    .bar-wrap { background: rgba(255, 255, 255, 0.1); height: 10px; border-radius: 99px; overflow: hidden; margin-top: 5px; }",
      "    .bar-fill { height: 100%; background: rgb(56, 189, 248); transition: width 0.4s; }",
      "  </style>",
      "</head>",
      "<body>",
      "  <div style=\"display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:rgba(56,189,248,0.12);border:1px solid rgba(56,189,248,0.4);border-radius:12px;\">",
      "    <strong style=\"font-family:" + p.fHead + ";\">" + title + "</strong>",
      "    <span id=\"st\" style=\"color:rgb(74,222,128);font-weight:800;font-size:0.78rem;\">● ONLINE</span>",
      "  </div>",
      "  <div class=\"ops\">",
      "    <div class=\"radar\"></div>",
      "    <div style=\"display:flex;flex-direction:column;gap:12px;\">",
      "      <p style=\"font-size:0.85rem;opacity:0.85;\">" + desc + "</p>",
      "      <div><small>Integridade da Malha</small><div class=\"bar-wrap\"><div id=\"b1\" class=\"bar-fill\" style=\"width:82%\"></div></div></div>",
      "      <div><small>Resposta Tempo Real</small><div class=\"bar-wrap\"><div id=\"b2\" class=\"bar-fill\" style=\"width:94%\"></div></div></div>",
      "      <button onclick=\"sincronizar()\" style=\"padding:10px 16px;border:none;border-radius:10px;background:rgb(56,189,248);color:rgb(7,15,26);font-weight:800;\">Sincronizar Radar</button>",
      "    </div>",
      "  </div>",
      "  " + sOpen,
      "    function sincronizar() {",
      "      document.getElementById('b1').style.width = (65 + Math.floor(Math.random() * 34)) + '%';",
      "      document.getElementById('b2').style.width = (72 + Math.floor(Math.random() * 27)) + '%';",
      "      document.getElementById('st').textContent = '● ATUALIZADO AGORA';",
      "    }",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (archType === 3 || archType === 7) {
    return [
      ...headLines,
      "    .top { display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; background: " + p.surf + "; border-bottom: " + p.brd + "; }",
      "    .bento { display: grid; grid-template-columns: 1.3fr 1fr; gap: 14px; padding: 18px 20px; }",
      "    .box { padding: 18px; border-radius: " + p.rad + "; background: " + p.surf + "; border: " + p.brd + "; display: flex; flex-direction: column; justify-content: space-between; gap: 10px; }",
      "  </style>",
      "</head>",
      "<body>",
      "  <div class=\"top\">",
      "    <strong style=\"font-family:" + p.fHead + ";font-size:1.1rem;\">" + title + "</strong>",
      "    <div style=\"padding:5px 12px;border-radius:99px;background:" + p.acc + ";color:white;font-size:0.76rem;font-weight:800;\">Selecionados: <span id=\"cnt\">0</span></div>",
      "  </div>",
      "  <div class=\"bento\">",
      "    <div class=\"box\" style=\"background:" + p.sec + ";\">",
      "      <span style=\"font-size:0.7rem;font-weight:800;\">AO VIVO • <span id=\"tmr\">04:59</span></span>",
      "      <h2 style=\"font-family:" + p.fHead + ";font-size:1.5rem;\">" + title + "</h2>",
      "      <p style=\"font-size:0.85rem;\">" + desc + "</p>",
      "      <button onclick=\"somar()\" style=\"padding:11px;border:none;border-radius:" + p.rad + ";background:" + p.acc + ";color:white;\">Confirmar Seleção Principal</button>",
      "    </div>",
      "    <div style=\"display:flex;flex-direction:column;gap:12px;\">",
      "      <div class=\"box\"><strong>Destaque Especial I</strong><button onclick=\"somar()\" style=\"padding:8px;border:" + p.brd + ";background:transparent;color:" + p.txt + ";border-radius:" + p.rad + ";\">+ Selecionar</button></div>",
      "      <div class=\"box\"><strong>Destaque Exclusivo II</strong><button onclick=\"somar()\" style=\"padding:8px;border:" + p.brd + ";background:transparent;color:" + p.txt + ";border-radius:" + p.rad + ";\">+ Selecionar</button></div>",
      "    </div>",
      "  </div>",
      "  " + sOpen,
      "    let n = 0, seg = 299;",
      "    function somar() { n++; document.getElementById('cnt').textContent = n; }",
      "    setInterval(() => {",
      "      if (seg > 0) seg--;",
      "      const m = String(Math.floor(seg / 60)).padStart(2, '0');",
      "      const s = String(seg % 60).padStart(2, '0');",
      "      document.getElementById('tmr').textContent = m + ':' + s;",
      "    }, 1000);",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (archType === 4 || archType === 8) {
    return [
      ...headLines,
      "    body { background: rgb(8, 12, 18); color: rgb(167, 243, 208); font-family: monospace; padding: 16px; }",
      "    .split { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px; min-height: 75vh; }",
      "    .pane { padding: 14px; background: rgb(13, 20, 30); border: 1px solid rgba(52, 211, 153, 0.4); border-radius: 8px; display: flex; flex-direction: column; gap: 10px; }",
      "    .cells { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; }",
      "    .cell { padding: 10px 5px; text-align: center; background: rgba(52, 211, 153, 0.08); border: 1px solid rgba(52, 211, 153, 0.3); cursor: pointer; font-size: 0.75rem; }",
      "    .cell.on { background: rgb(16, 185, 129); color: rgb(6, 20, 14); font-weight: bold; }",
      "  </style>",
      "</head>",
      "<body>",
      "  <header style=\"display:flex;justify-content:space-between;align-items:center;padding-bottom:10px;border-bottom:1px solid rgba(52,211,153,0.35);\">",
      "    <strong>[" + langObj.ext.toUpperCase() + "] " + title + "</strong>",
      "    <button onclick=\"auditar()\" style=\"padding:7px 13px;background:rgb(16,185,129);color:black;border:none;border-radius:4px;\">Executar Diagnóstico</button>",
      "  </header>",
      "  <div class=\"split\">",
      "    <div class=\"pane\">",
      "      <strong>CONSOLE INTERATIVO</strong>",
      "      <p style=\"font-size:0.78rem;opacity:0.82;\">" + desc + "</p>",
      "      <div id=\"logs\" style=\"flex:1;background:black;padding:10px;font-size:0.74rem;overflow-y:auto;\">> Sistema iniciado...<br>> Clique nos endereços ao lado...</div>",
      "    </div>",
      "    <div class=\"pane\">",
      "      <strong>MATRIZ DE BLOCOS</strong>",
      "      <div id=\"mat\" class=\"cells\"></div>",
      "    </div>",
      "  </div>",
      "  " + sOpen,
      "    const m = document.getElementById('mat'), lg = document.getElementById('logs');",
      "    for (let i = 0; i < 16; i++) {",
      "      const d = document.createElement('div');",
      "      d.className = 'cell';",
      "      d.textContent = '0x0' + (i + 10).toString(16).toUpperCase();",
      "      d.onclick = () => {",
      "        d.classList.toggle('on');",
      "        lg.innerHTML += '<br>> Endereço ' + d.textContent + ' verificado.';",
      "      };",
      "      m.appendChild(d);",
      "    }",
      "    function auditar() {",
      "      document.querySelectorAll('.cell').forEach((c, i) => setTimeout(() => c.classList.toggle('on', Math.random() > 0.4), i * 35));",
      "      lg.innerHTML += '<br>> Varredura completa executada.';",
      "    }",
      "  " + sClose,
      "</body>",
      "</html>"
    ].join("\n");
  }

  return [
    ...headLines,
    "    .wrap { padding: 20px; }",
    "    .kpis { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 14px 0; }",
    "    .kpi { padding: 14px; border-radius: " + p.rad + "; background: " + p.surf + "; border: " + p.brd + "; }",
    "    .chart-card { padding: 16px; border-radius: " + p.rad + "; background: " + p.surf + "; border: " + p.brd + "; }",
    "  </style>",
    "</head>",
    "<body>",
    "  <div class=\"wrap\">",
    "    <div style=\"display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;\">",
    "      <div>",
    "        <h1 style=\"font-family:" + p.fHead + ";font-size:1.5rem;\">" + title + "</h1>",
    "        <p style=\"font-size:0.84rem;opacity:0.8;\">" + desc + "</p>",
    "      </div>",
    "      <button onclick=\"atualizarGrafico()\" style=\"padding:9px 15px;border:none;border-radius:" + p.rad + ";background:" + p.acc + ";color:white;\">Atualizar Série</button>",
    "    </div>",
    "    <div class=\"kpis\">",
    "      <div class=\"kpi\"><small>ÍNDICE</small><h2 id=\"k1\">94.2%</h2></div>",
    "      <div class=\"kpi\"><small>REGISTROS</small><h2>18.4k</h2></div>",
    "      <div class=\"kpi\"><small>VARIAÇÃO</small><h2 style=\"color:" + p.acc + ";\">+14.8%</h2></div>",
    "    </div>",
    "    <div class=\"chart-card\"><svg id=\"svgc\" viewBox=\"0 0 400 130\" style=\"width:100%;height:140px;\"></svg></div>",
    "  </div>",
    "  " + sOpen,
    "    function atualizarGrafico() {",
    "      const svg = document.getElementById('svgc');",
    "      svg.innerHTML = '';",
    "      for (let i = 0; i < 8; i++) {",
    "        const h = 25 + Math.floor(Math.random() * 85);",
    "        const x = 20 + i * 48, y = 120 - h;",
    "        svg.innerHTML += '<rect x=\"' + (x - 12) + '\" y=\"' + y + '\" width=\"24\" height=\"' + h + '\" rx=\"4\" fill=\"" + p.acc + "\" opacity=\"0.88\"/>';",
    "      }",
    "      document.getElementById('k1').textContent = (85 + Math.random() * 14).toFixed(1) + '%';",
    "    }",
    "    atualizarGrafico();",
    "  " + sClose,
    "</body>",
    "</html>"
  ].join("\n");
}

function generateFaithfulNativeCode(langObj, slotIdx) {
  const list = CATALOG[langObj.id] || CATALOG.html;
  const [title, desc, archType] = list[slotIdx] || list[0];
  const webFull = buildUniqueArchitectureSite(langObj, slotIdx, title, desc, archType);

  if (langObj.id === "html") {
    return webFull;
  }

  if (langObj.id === "css") {
    const stylePart = webFull.split("<style>")[1].split("</style>")[0];
    return stylePart.replace(/^    /gm, "").trim();
  }

  if (langObj.id === "javascript") {
    return [
      "const appRoot = document.body;",
      "const configProjeto = {",
      "  titulo: \"" + title + "\",",
      "  descricao: \"" + desc + "\",",
      "  blocosInterativos: 36",
      "};",
      "",
      "function renderizarInterface(cfg) {",
      "  document.title = cfg.titulo;",
      "  const container = document.createElement(\"main\");",
      "  container.style.cssText = \"max-width:560px;margin:24px auto;padding:24px;font-family:sans-serif;background:rgb(24,24,32);color:white;border-radius:18px;\";",
      "",
      "  const cabecalho = document.createElement(\"div\");",
      "  cabecalho.style.cssText = \"display:flex;justify-content:space-between;align-items:center;\";",
      "  cabecalho.innerHTML = \"<h1>\" + cfg.titulo + \"</h1>\";",
      "",
      "  const btnPadrao = document.createElement(\"button\");",
      "  btnPadrao.textContent = \"Gerar Padrão / Atualizar\";",
      "  btnPadrao.style.cssText = \"padding:10px 16px;background:rgb(234,88,12);color:white;border:none;border-radius:10px;cursor:pointer;font-weight:bold;\";",
      "",
      "  const subtitulo = document.createElement(\"p\");",
      "  subtitulo.textContent = cfg.descricao;",
      "  subtitulo.style.cssText = \"opacity:0.82;margin:10px 0 18px;\";",
      "",
      "  const grade = document.createElement(\"div\");",
      "  grade.style.cssText = \"display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-bottom:16px;\";",
      "",
      "  const celulas = [];",
      "  for (let i = 0; i < cfg.blocosInterativos; i++) {",
      "    const celula = document.createElement(\"button\");",
      "    celula.style.cssText = \"aspect-ratio:1;border-radius:8px;border:1px solid rgba(255,255,255,0.25);background:rgb(15,15,20);cursor:pointer;\";",
      "    celula.addEventListener(\"click\", () => {",
      "      const ativo = celula.dataset.ativo === \"1\";",
      "      celula.dataset.ativo = ativo ? \"0\" : \"1\";",
      "      celula.style.background = ativo ? \"rgb(15,15,20)\" : \"rgb(234,88,12)\";",
      "    });",
      "    celulas.push(celula);",
      "    grade.appendChild(celula);",
      "  }",
      "",
      "  btnPadrao.addEventListener(\"click\", () => {",
      "    celulas.forEach((c) => {",
      "      const ligar = Math.random() > 0.6;",
      "      c.dataset.ativo = ligar ? \"1\" : \"0\";",
      "      c.style.background = ligar ? \"rgb(234,88,12)\" : \"rgb(15,15,20)\";",
      "    });",
      "  });",
      "",
      "  cabecalho.appendChild(btnPadrao);",
      "  container.appendChild(cabecalho);",
      "  container.appendChild(subtitulo);",
      "  container.appendChild(grade);",
      "  appRoot.innerHTML = \"\";",
      "  appRoot.appendChild(container);",
      "}",
      "",
      "renderizarInterface(configProjeto);"
    ].join("\n");
  }

  if (langObj.id === "swift") {
    return [
      "import SwiftUI",
      "",
      "struct ProjetoMissIAView: View {",
      "    let titulo: String = \"" + title + "\"",
      "    let descricao: String = \"" + desc + "\"",
      "    @State private var blocosAtivos: [Bool] = Array(repeating: false, count: 36)",
      "    @State private var contadorAcoes: Int = 0",
      "",
      "    let colunas = Array(repeating: GridItem(.flexible(), spacing: 8), count: 6)",
      "",
      "    var body: some View {",
      "        ZStack {",
      "            Color(red: 0.07, green: 0.06, blue: 0.08).ignoresSafeArea()",
      "            VStack(alignment: .leading, spacing: 16) {",
      "                HStack {",
      "                    Text(titulo)",
      "                        .font(.system(size: 26, weight: .black, design: .rounded))",
      "                        .foregroundColor(.white)",
      "                    Spacer()",
      "                    Button(action: gerarPadrao) {",
      "                        Text(\"Gerar Padrão\")",
      "                            .font(.system(size: 13, weight: .bold))",
      "                            .padding(.horizontal, 14)",
      "                            .padding(.vertical, 10)",
      "                            .background(Color.orange)",
      "                            .foregroundColor(.white)",
      "                            .cornerRadius(10)",
      "                    }",
      "                }",
      "                Text(descricao)",
      "                    .font(.subheadline)",
      "                    .foregroundColor(.white.opacity(0.8))",
      "",
      "                LazyVGrid(columns: colunas, spacing: 8) {",
      "                    ForEach(0..<36, id: \\.self) { index in",
      "                        RoundedRectangle(cornerRadius: 8)",
      "                            .fill(blocosAtivos[index] ? Color.orange : Color.white.opacity(0.08))",
      "                            .aspectRatio(1, contentMode: .fit)",
      "                            .overlay(",
      "                                RoundedRectangle(cornerRadius: 8)",
      "                                    .stroke(Color.white.opacity(0.25), lineWidth: 1)",
      "                            )",
      "                            .onTapGesture {",
      "                                blocosAtivos[index].toggle()",
      "                                contadorAcoes += 1",
      "                            }",
      "                    }",
      "                }",
      "",
      "                HStack {",
      "                    Button(\"Limpar Grade\") {",
      "                        blocosAtivos = Array(repeating: false, count: 36)",
      "                    }",
      "                    .padding(.horizontal, 14)",
      "                    .padding(.vertical, 8)",
      "                    .overlay(RoundedRectangle(cornerRadius: 8).stroke(Color.white.opacity(0.4)))",
      "                    .foregroundColor(.white)",
      "                    Spacer()",
      "                    Text(\"Interações: \\(contadorAcoes)\")",
      "                        .font(.caption)",
      "                        .foregroundColor(.orange)",
      "                }",
      "            }",
      "            .padding(24)",
      "        }",
      "    }",
      "",
      "    func gerarPadrao() {",
      "        blocosAtivos = (0..<36).map { _ in Bool.random() }",
      "        contadorAcoes += 1",
      "    }",
      "}",
      "",
      "@main",
      "struct MissIAApp: App {",
      "    var body: some Scene {",
      "        WindowGroup { ProjetoMissIAView() }",
      "    }",
      "}"
    ].join("\n");
  }

  if (langObj.id === "dart") {
    return [
      "import 'dart:math';",
      "import 'package:flutter/material.dart';",
      "",
      "void main() => runApp(const MissIAFlutterApp());",
      "",
      "class MissIAFlutterApp extends StatelessWidget {",
      "  const MissIAFlutterApp({super.key});",
      "  @override",
      "  Widget build(BuildContext context) {",
      "    return MaterialApp(",
      "      debugShowCheckedModeBanner: false,",
      "      theme: ThemeData.dark(),",
      "      home: const PainelInterativoPage(),",
      "    );",
      "  }",
      "}",
      "",
      "class PainelInterativoPage extends StatefulWidget {",
      "  const PainelInterativoPage({super.key});",
      "  @override",
      "  State<PainelInterativoPage> createState() => _PainelInterativoPageState();",
      "}",
      "",
      "class _PainelInterativoPageState extends State<PainelInterativoPage> {",
      "  final List<bool> blocos = List<bool>.filled(36, false);",
      "  final Random rng = Random();",
      "",
      "  void gerarPadrao() {",
      "    setState(() {",
      "      for (int i = 0; i < blocos.length; i++) {",
      "        blocos[i] = rng.nextBool();",
      "      }",
      "    });",
      "  }",
      "",
      "  void limparGrade() {",
      "    setState(() => blocos.fillRange(0, blocos.length, false));",
      "  }",
      "",
      "  @override",
      "  Widget build(BuildContext context) {",
      "    return Scaffold(",
      "      backgroundColor: const Color.fromRGBO(18, 16, 22, 1),",
      "      body: Padding(",
      "        padding: const EdgeInsets.all(24),",
      "        child: Column(",
      "          crossAxisAlignment: CrossAxisAlignment.start,",
      "          children: [",
      "            Row(",
      "              mainAxisAlignment: MainAxisAlignment.spaceBetween,",
      "              children: [",
      "                const Expanded(child: Text('" + title + "', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold))),",
      "                ElevatedButton(onPressed: gerarPadrao, child: const Text('Gerar Padrão')),",
      "              ],",
      "            ),",
      "            const SizedBox(height: 8),",
      "            const Text('" + desc + "'),",
      "            const SizedBox(height: 18),",
      "            Expanded(",
      "              child: GridView.builder(",
      "                itemCount: 36,",
      "                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(",
      "                  crossAxisCount: 6, crossAxisSpacing: 8, mainAxisSpacing: 8,",
      "                ),",
      "                itemBuilder: (context, i) => GestureDetector(",
      "                  onTap: () => setState(() => blocos[i] = !blocos[i]),",
      "                  child: AnimatedContainer(",
      "                    duration: const Duration(milliseconds: 160),",
      "                    decoration: BoxDecoration(",
      "                      color: blocos[i] ? Colors.deepOrange : Colors.white10,",
      "                      borderRadius: BorderRadius.circular(8),",
      "                    ),",
      "                  ),",
      "                ),",
      "              ),",
      "            ),",
      "            OutlinedButton(onPressed: limparGrade, child: const Text('Limpar Grade')),",
      "          ],",
      "        ),",
      "      ),",
      "    );",
      "  }",
      "}"
    ].join("\n");
  }

  if (langObj.id === "python") {
    return [
      "import tkinter as tk",
      "import random",
      "",
      "TITULO = \"" + title + "\"",
      "DESCRICAO = \"" + desc + "\"",
      "",
      "class AplicacaoMissIA:",
      "    def __init__(self, root):",
      "        self.root = root",
      "        self.root.title(TITULO)",
      "        self.root.configure(bg=\"rgb(18, 16, 20)\" if False else \"black\")",
      "        self.estado = [False] * 36",
      "        self.botoes = []",
      "",
      "        topo = tk.Frame(root, bg=\"black\", padx=20, pady=14)",
      "        topo.pack(fill=\"x\")",
      "        tk.Label(topo, text=TITULO, fg=\"white\", bg=\"black\", font=(\"Arial\", 18, \"bold\")).pack(side=\"left\")",
      "        tk.Button(topo, text=\"Gerar Padrão\", bg=\"orange\", fg=\"black\", command=self.gerar_padrao).pack(side=\"right\")",
      "",
      "        tk.Label(root, text=DESCRICAO, fg=\"lightgray\", bg=\"black\", wraplength=440).pack(padx=20, anchor=\"w\")",
      "",
      "        grade = tk.Frame(root, bg=\"black\", padx=20, pady=16)",
      "        grade.pack()",
      "        for i in range(36):",
      "            btn = tk.Button(grade, width=4, height=2, bg=\"gray15\", command=lambda idx=i: self.alternar(idx))",
      "            btn.grid(row=i // 6, column=i % 6, padx=4, pady=4)",
      "            self.botoes.append(btn)",
      "",
      "        tk.Button(root, text=\"Limpar Grade\", command=self.limpar).pack(padx=20, pady=10, anchor=\"w\")",
      "",
      "    def alternar(self, idx):",
      "        self.estado[idx] = not self.estado[idx]",
      "        self.botoes[idx].configure(bg=\"darkorange\" if self.estado[idx] else \"gray15\")",
      "",
      "    def gerar_padrao(self):",
      "        for i in range(36):",
      "            self.estado[i] = random.random() > 0.6",
      "            self.botoes[i].configure(bg=\"darkorange\" if self.estado[i] else \"gray15\")",
      "",
      "    def limpar(self):",
      "        for i in range(36):",
      "            self.estado[i] = False",
      "            self.botoes[i].configure(bg=\"gray15\")",
      "",
      "if __name__ == \"__main__\":",
      "    janela = tk.Tk()",
      "    app = AplicacaoMissIA(janela)",
      "    janela.mainloop()"
    ].join("\n");
  }

  if (langObj.id === "typescript") {
    return [
      "interface BlocoInterativo {",
      "  indice: number;",
      "  ativo: boolean;",
      "}",
      "",
      "class ControladorInterface {",
      "  private titulo: string = \"" + title + "\";",
      "  private descricao: string = \"" + desc + "\";",
      "  private blocos: BlocoInterativo[] = Array.from({ length: 36 }, (_, i) => ({ indice: i, ativo: false }));",
      "",
      "  public alternarBloco(id: number): void {",
      "    const alvo = this.blocos[id];",
      "    if (alvo) alvo.ativo = !alvo.ativo;",
      "    this.atualizarDOM();",
      "  }",
      "",
      "  public gerarPadraoAleatorio(): void {",
      "    this.blocos.forEach((b) => { b.ativo = Math.random() > 0.6; });",
      "    this.atualizarDOM();",
      "  }",
      "",
      "  public atualizarDOM(): void {",
      "    const ativos = this.blocos.filter((b) => b.ativo).length;",
      "    console.log(this.titulo + \" | Ativos: \" + ativos);",
      "  }",
      "}",
      "",
      "const app = new ControladorInterface();",
      "app.gerarPadraoAleatorio();"
    ].join("\n");
  }

  if (langObj.id === "php") {
    return [
      "<?php",
      "$titulo = \"" + title + "\";",
      "$descricao = \"" + desc + "\";",
      "$blocos = range(1, 36);",
      "?>",
      "<!DOCTYPE html>",
      "<html lang=\"pt-BR\">",
      "<body style=\"background:rgb(18,16,22);color:white;font-family:sans-serif;padding:28px;\">",
      "  <h1><?= htmlspecialchars($titulo) ?></h1>",
      "  <p><?= htmlspecialchars($descricao) ?></p>",
      "  <div style=\"display:grid;grid-template-columns:repeat(6,54px);gap:8px;margin:20px 0;\">",
      "    <?php foreach ($blocos as $b): ?>",
      "      <button onclick=\"this.style.background='rgb(234,88,12)'\" style=\"height:54px;background:rgb(35,32,42);color:white;border:1px solid gray;border-radius:8px;\">",
      "        <?= $b ?>",
      "      </button>",
      "    <?php endforeach; ?>",
      "  </div>",
      "</body>",
      "</html>"
    ].join("\n");
  }

  if (langObj.id === "sql") {
    return [
      "CREATE TABLE modulo_interativo (",
      "  id INT PRIMARY KEY,",
      "  projeto VARCHAR(120) NOT NULL,",
      "  descricao VARCHAR(255) NOT NULL,",
      "  posicao_grade INT NOT NULL,",
      "  estado_ativo BOOLEAN DEFAULT FALSE,",
      "  atualizado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      ");",
      "",
      "INSERT INTO modulo_interativo (id, projeto, descricao, posicao_grade, estado_ativo)",
      "VALUES",
      "  (1, '" + title.replace(/'/g, "") + "', '" + desc.replace(/'/g, "") + "', 1, TRUE),",
      "  (2, '" + title.replace(/'/g, "") + "', '" + desc.replace(/'/g, "") + "', 2, FALSE),",
      "  (3, '" + title.replace(/'/g, "") + "', '" + desc.replace(/'/g, "") + "', 3, TRUE);",
      "",
      "SELECT id, projeto, posicao_grade, estado_ativo",
      "FROM modulo_interativo",
      "WHERE estado_ativo = TRUE",
      "ORDER BY posicao_grade ASC;"
    ].join("\n");
  }

  return [
    "module " + title.replace(/[^A-Za-z0-9]/g, "") + " {",
    "  titulo = \"" + title + "\"",
    "  escopo = \"" + desc + "\"",
    "  grade = Array(36, false)",
    "",
    "  function gerarPadrao() {",
    "    for i in 0..35 {",
    "      grade[i] = randomBoolean()",
    "    }",
    "    renderizar(titulo, escopo, grade)",
    "  }",
    "",
    "  function limparGrade() {",
    "    for i in 0..35 {",
    "      grade[i] = false",
    "    }",
    "    renderizar(titulo, escopo, grade)",
    "  }",
    "}",
    "",
    "gerarPadrao()"
  ].join("\n");
}

function injectLogoStylesAndFixes() {
  const st = document.createElement("style");
  st.textContent = [
    ".lang-logo-box{width:38px;height:38px;border-radius:11px;background:rgba(255,255,255,0.94);border:1px solid white;display:flex;align-items:center;justify-content:center;padding:5px;flex-shrink:0;z-index:2;box-shadow:0 6px 14px rgba(0,0,0,0.32);}",
    ".lang-logo-img{width:100%;height:100%;object-fit:contain;display:block;}",
    ".lang-watermark-img{position:absolute;right:-8px;bottom:-10px;width:62px;height:62px;object-fit:contain;opacity:0.16;transform:rotate(-14deg);pointer-events:none;z-index:1;}"
  ].join("\n");
  document.head.appendChild(st);

  document.querySelectorAll(".auth-dot").forEach((dot) => {
    if (dot.textContent.trim() !== "G") {
      dot.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"15\" height=\"15\" fill=\"rgb(88,28,135)\"><path d=\"M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.32c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.78-.96 2.84 1.04.08 2.08-.52 2.72-1.3z\"/></svg>";
    }
  });
}

function setVisible(el, visible) {
  if (!el) return;
  el.hidden = !visible;
  if (visible) {
    el.classList.remove("is-hidden");
    el.style.display = "";
  } else {
    el.classList.add("is-hidden");
    el.style.display = "none";
  }
}

function on(id, eventName, handler) {
  const el = document.getElementById(id);
  if (el) el.addEventListener(eventName, handler);
  return el;
}

document.addEventListener("DOMContentLoaded", () => {
  injectLogoStylesAndFixes();

  let currentLang = LANGUAGES[0];
  let activeSlot = 0;
  let viewWebSourceMode = false;
  let currentBlobUrl = null;
  let currentSuggestions = [];
  let workspaceUnlocked = false;
  let currentLocale = localStorage.getItem("missia_locale") || "pt";
  let accountData = null;

  try {
    accountData = JSON.parse(localStorage.getItem("missia_account_obj") || "null");
  } catch (e) {
    accountData = null;
  }

  const workspaceGrid = document.querySelector(".workspace-grid");
  const editorToolbar = document.querySelector(".editor-toolbar");
  const promptSelect = document.getElementById("prompt-select");
  const topLangIndicator = document.getElementById("top-lang-indicator");
  const langButtonsList = document.getElementById("language-buttons-list");
  const localeSelect = document.getElementById("ui-locale-select");
  const codeEditor = document.getElementById("code-editor");
  const lineNumbers = document.getElementById("line-numbers");
  const autocompleteBox = document.getElementById("autocomplete-box");
  const meaningWord = document.getElementById("meaning-word");
  const meaningDesc = document.getElementById("meaning-description");
  const meaningLangBadge = document.getElementById("meaning-lang-badge");
  const editorFilename = document.getElementById("editor-filename");
  const clickableTokens = document.getElementById("clickable-tokens");
  const previewFrame = document.getElementById("live-preview-frame");
  const loginOverlay = document.getElementById("login-overlay");
  const pasteModal = document.getElementById("paste-modal");
  const quickBox = document.getElementById("quick-auth-box");
  const quickInput = document.getElementById("quick-auth-input");
  const appShell = document.getElementById("app-shell");

  const btnTopLogin = document.getElementById("btn-top-login");
  const accountMenuWrap = document.getElementById("account-menu-wrap");
  const accountDropdown = document.getElementById("account-dropdown");
  const userDisplayName = document.getElementById("user-display-name");
  const userAvatarImg = document.getElementById("user-avatar-img");
  const userAvatarFallback = document.getElementById("user-avatar-fallback");

  const floatingChatWindow = document.getElementById("floating-chat-window");
  const chatMessages = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");

 if (editorToolbar && !document.getElementById("code-mode-switch")) {
    const sw = document.createElement("div");
    sw.id = "code-mode-switch";
    sw.className = "code-mode-switch";
    sw.innerHTML =
      "<button type=\"button\" id=\"btn-mode-native\" class=\"code-mode-btn active-code-mode\">Código Nativo Fiel</button>" +
      "<button type=\"button\" id=\"btn-mode-web\" class=\"code-mode-btn\">HTML Exato do Preview</button>";
    editorToolbar.insertBefore(sw, editorToolbar.lastElementChild);

    sw.querySelector("#btn-mode-native").addEventListener("click", () => {
      if (!viewWebSourceMode) return;
      viewWebSourceMode = false;
      sw.querySelector("#btn-mode-native").classList.add("active-code-mode");
      sw.querySelector("#btn-mode-web").classList.remove("active-code-mode");
      selectLanguageAndPrompt(currentLang, activeSlot, true, false);
    });

    sw.querySelector("#btn-mode-web").addEventListener("click", () => {
      if (viewWebSourceMode) return;
      viewWebSourceMode = true;
      sw.querySelector("#btn-mode-web").classList.add("active-code-mode");
      sw.querySelector("#btn-mode-native").classList.remove("active-code-mode");
      selectLanguageAndPrompt(currentLang, activeSlot, true, false);
    });
  }

  setVisible(pasteModal, false);
  setVisible(quickBox, false);
  setVisible(autocompleteBox, false);
  setVisible(floatingChatWindow, false);
  setVisible(accountDropdown, false);

  const deviceFrame = document.getElementById("device-frame");
  const btnMobile = document.getElementById("btn-mobile-view");
  const btnDesktop = document.getElementById("btn-desktop-view");

  function setPreviewDeviceMode(mode) {
    if (mode === "pc") {
      if (workspaceGrid) workspaceGrid.classList.add("pc-expanded-layout");
      if (deviceFrame) deviceFrame.className = "device-frame desktop-mode";
      if (btnDesktop) btnDesktop.classList.add("active-tab");
      if (btnMobile) btnMobile.classList.remove("active-tab");
    } else {
      if (workspaceGrid) workspaceGrid.classList.remove("pc-expanded-layout");
      if (deviceFrame) deviceFrame.className = "device-frame mobile-mode";
      if (btnMobile) btnMobile.classList.add("active-tab");
      if (btnDesktop) btnDesktop.classList.remove("active-tab");
    }
  }

  setPreviewDeviceMode("mobile");
  on("btn-desktop-view", "click", () => setPreviewDeviceMode("pc"));
  on("btn-mobile-view", "click", () => setPreviewDeviceMode("mobile"));

  function syncTopbarAuthUI() {
    if (accountData && accountData.loggedIn) {
      setVisible(btnTopLogin, false);
      setVisible(accountMenuWrap, true);
      if (userDisplayName) userDisplayName.textContent = accountData.name || "Dev";

      const nIn = document.getElementById("acc-name-input");
      const phIn = document.getElementById("acc-photo-input");
      const telIn = document.getElementById("acc-phone-input");
      const exIn = document.getElementById("acc-extra-input");

      if (nIn) nIn.value = accountData.name || "";
      if (phIn) phIn.value = accountData.photo || "";
      if (telIn) telIn.value = accountData.phone || "";
      if (exIn) exIn.value = accountData.extra || "";

      if (accountData.photo && accountData.photo.trim().startsWith("http")) {
        if (userAvatarImg) userAvatarImg.src = accountData.photo.trim();
        setVisible(userAvatarImg, true);
        setVisible(userAvatarFallback, false);
      } else {
        setVisible(userAvatarImg, false);
        setVisible(userAvatarFallback, true);
        if (userAvatarFallback) {
          userAvatarFallback.textContent = (accountData.name || "M").charAt(0).toUpperCase();
        }
      }
    } else {
      setVisible(btnTopLogin, true);
      setVisible(accountMenuWrap, false);
      setVisible(accountDropdown, false);
    }
  }

  function finishAuth(loggedIn, nameLabel) {
    workspaceUnlocked = true;
    if (loggedIn) {
      accountData = {
        loggedIn: true,
        name: nameLabel,
        photo: accountData ? accountData.photo || "" : "",
        phone: accountData ? accountData.phone || "" : "",
        extra: accountData ? accountData.extra || "" : ""
      };
      localStorage.setItem("missia_account_obj", JSON.stringify(accountData));
    } else {
      accountData = null;
      localStorage.removeItem("missia_account_obj");
    }
    syncTopbarAuthUI();
    setVisible(loginOverlay, false);
    setVisible(pasteModal, false);
    if (appShell) appShell.classList.remove("is-blurred");
  }

  document.querySelectorAll("[data-auth]").forEach((btn) => {
    btn.addEventListener("click", () => finishAuth(true, btn.getAttribute("data-auth") || "Conta"));
  });
  on("btn-skip-login", "click", () => finishAuth(false, ""));
  on("btn-phone-toggle", "click", () => {
    setVisible(quickBox, true);
    if (quickInput) {
      quickInput.placeholder = "Digite seu número com DDD...";
      quickInput.focus();
    }
  });
  on("btn-email-toggle", "click", () => {
    setVisible(quickBox, true);
    if (quickInput) {
      quickInput.placeholder = "Digite seu melhor e-mail...";
      quickInput.focus();
    }
  });
  on("quick-auth-confirm", "click", () => {
    const val = quickInput ? quickInput.value.trim() : "";
    if (val) finishAuth(true, val);
  });

  function applyLocale(loc) {
    currentLocale = UI_TEXT[loc] ? loc : "pt";
    localStorage.setItem("missia_locale", currentLocale);
    if (localeSelect) localeSelect.value = currentLocale;
    const dict = UI_TEXT[currentLocale];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    const lTitle = document.getElementById("langs-section-title");
    const lHint = document.getElementById("langs-section-hint");
    const sTitle = document.getElementById("saved-section-title");
    if (lTitle) lTitle.textContent = dict.langsTitle;
    if (lHint) lHint.textContent = dict.langsHint;
    if (sTitle) sTitle.textContent = dict.savedTitle;
    if (chatInput) chatInput.placeholder = dict.chatPlaceholder;
  }

  function initCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const loadedLogos = LANGUAGES.map((l) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = l.icon;
      return img;
    });

    const colWidth = 68;
    let columns = Math.floor(width / colWidth);
    let drops = Array.from({ length: columns }, (_, idx) => ({
      y: Math.random() * 35,
      logoIdx: idx % loadedLogos.length,
      isBinary: idx % 2 === 0
    }));

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / colWidth);
      drops = Array.from({ length: columns }, (_, idx) => ({
        y: Math.random() * 35,
        logoIdx: idx % loadedLogos.length,
        isBinary: idx % 2 === 0
      }));
    });

    function draw() {
      ctx.fillStyle = "rgba(10, 4, 24, 0.16)";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        const xPos = i * colWidth + 14;
        const yPos = d.y * 28;

        if (d.isBinary) {
          ctx.font = "800 14px 'JetBrains Mono', monospace";
          ctx.fillStyle = i % 4 === 0 ? "rgba(255, 255, 255, 0.8)" : "rgba(216, 180, 254, 0.84)";
          ctx.fillText(Math.random() > 0.5 ? "01" : "10", xPos, yPos);
        } else {
          const img = loadedLogos[d.logoIdx];
          if (img && img.complete && img.naturalWidth > 0) {
            ctx.globalAlpha = 0.45;
            ctx.drawImage(img, xPos, yPos - 18, 22, 22);
            ctx.globalAlpha = 1;
          }
        }

        if (yPos > height && Math.random() > 0.965) {
          d.y = 0;
        }
        d.y += 0.3;
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  function initClickEffects() {
    const fxLayer = document.getElementById("fx-layer");
    if (!fxLayer) return;
    window.addEventListener("pointerdown", (e) => {
      const ring = document.createElement("div");
      ring.className = "click-ring";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
      fxLayer.appendChild(ring);
      setTimeout(() => ring.remove(), 620);

      for (let i = 0; i < 6; i++) {
        const spark = document.createElement("div");
        spark.className = "click-spark";
        const angle = (Math.PI * 2 * i) / 6;
        const dist = 24 + Math.random() * 20;
        spark.style.left = e.clientX + "px";
        spark.style.top = e.clientY + "px";
        spark.style.setProperty("--dx", Math.cos(angle) * dist + "px");
        spark.style.setProperty("--dy", Math.sin(angle) * dist + "px");
        fxLayer.appendChild(spark);
        setTimeout(() => spark.remove(), 560);
      }
    });
  }

  function explainWord(word) {
    if (!word || !meaningWord || !meaningDesc) return;
    const clean = word.trim();
    if (!clean) return;
    meaningWord.textContent = clean;
    if (DICTIONARY[clean]) {
      meaningDesc.textContent = DICTIONARY[clean];
    } else if (/^\d+$/.test(clean)) {
      meaningDesc.textContent = "Valor numérico literal utilizado em dimensões, índices ou contadores.";
    } else {
      meaningDesc.textContent = "Componente, função ou propriedade estrutural do projeto em " + currentLang.name + ".";
    }
  }

  function getWordAtCursor(text, pos) {
    const left = text.slice(0, pos).match(/[A-Za-z_À-ÿ0-9]+$/);
    const right = text.slice(pos).match(/^[A-Za-z_À-ÿ0-9]+/);
    return (left ? left[0] : "") + (right ? right[0] : "");
  }

  function getPrefixAtCursor(text, pos) {
    const match = text.slice(0, pos).match(/[A-Za-z_]+$/);
    return match ? match[0] : "";
  }

  function showAutocomplete(prefix) {
    if (!autocompleteBox) return;
    if (!prefix || prefix.length < 1) {
      setVisible(autocompleteBox, false);
      currentSuggestions = [];
      return;
    }
    const lower = prefix.toLowerCase();
    const matches = Object.keys(DICTIONARY)
      .filter((k) => k.toLowerCase().startsWith(lower) && k !== prefix)
      .slice(0, 5);

    if (matches.length === 0) {
      setVisible(autocompleteBox, false);
      currentSuggestions = [];
      return;
    }

    currentSuggestions = matches;
    autocompleteBox.innerHTML = "";

    matches.forEach((word, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ac-item" + (idx === 0 ? " selected" : "");
      btn.innerHTML = "<span class=\"ac-word\">" + word + "</span><span class=\"ac-desc\">" + DICTIONARY[word] + "</span>";
      btn.addEventListener("click", () => applySuggestion(word));
      autocompleteBox.appendChild(btn);
    });
    setVisible(autocompleteBox, true);
  }

  function applySuggestion(word) {
    if (!codeEditor) return;
    const pos = codeEditor.selectionStart;
    const text = codeEditor.value;
    const prefix = getPrefixAtCursor(text, pos);
    const before = text.slice(0, pos - prefix.length);
    const after = text.slice(pos);

    codeEditor.value = before + word + after;
    const newCursor = before.length + word.length;
    codeEditor.focus();
    codeEditor.setSelectionRange(newCursor, newCursor);
    setVisible(autocompleteBox, false);
    explainWord(word);
    refreshEditorUI();
    updatePreview();
  }

  function refreshEditorUI() {
    if (!codeEditor) return;
    const lines = codeEditor.value.split("\n").length;
    if (lineNumbers) {
      lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join("<br>");
    }
    const uniqueWords = Array.from(new Set(codeEditor.value.match(/[A-Za-z_]{2,}/g) || [])).slice(0, 18);
    if (clickableTokens) {
      clickableTokens.innerHTML = "";
      uniqueWords.forEach((token) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "token-chip";
        chip.textContent = token;
        chip.addEventListener("click", () => explainWord(token));
        clickableTokens.appendChild(chip);
      });
    }
  }

  function buildPreviewDocument() {
    const raw = codeEditor ? codeEditor.value : "";
    if (raw.trim().startsWith("<!DOCTYPE") || raw.trim().startsWith("<html")) {
      return raw;
    }
    const list = CATALOG[currentLang.id] || CATALOG.html;
    const [title, desc, archType] = list[activeSlot] || list[0];
    return buildUniqueArchitectureSite(currentLang, activeSlot, title, desc, archType);
  }

  function updatePreview() {
    if (!previewFrame) return;
    const htmlDoc = buildPreviewDocument();
    if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
    const blob = new Blob([htmlDoc], { type: "text/html;charset=utf-8" });
    currentBlobUrl = URL.createObjectURL(blob);
    previewFrame.src = currentBlobUrl;
  }

  function renderSidebarLanguages() {
    if (!langButtonsList) return;
    langButtonsList.innerHTML = "";

    LANGUAGES.forEach((lang) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isSelected = lang.id === currentLang.id;
      btn.className = "lang-custom-btn" + (isSelected ? " is-selected-lang" : "");
      btn.style.setProperty("--lang-color", lang.color);
      btn.innerHTML =
        "<div class=\"lang-logo-box\"><img class=\"lang-logo-img\" src=\"" + lang.icon + "\" alt=\"" + lang.name + "\" /></div>" +
        "<div class=\"lang-btn-info\">" +
        "  <span class=\"lang-btn-name\">" + lang.name + "</span>" +
        "  <span class=\"lang-btn-sub\">10 projetos únicos • ." + lang.ext + "</span>" +
        "</div>" +
        "<img class=\"lang-watermark-img\" src=\"" + lang.icon + "\" alt=\"\" />";

      btn.addEventListener("click", () => {
        selectLanguageAndPrompt(lang, 0, true);
      });

      langButtonsList.appendChild(btn);
    });
  }

  function populateTopPromptDropdown() {
    if (!promptSelect) return;
    promptSelect.innerHTML = "";
    const items = CATALOG[currentLang.id] || CATALOG.html;

    items.forEach((entry, idx) => {
      const opt = document.createElement("option");
      opt.value = String(idx);
      opt.textContent = (idx + 1) + ". " + entry[0] + " — " + entry[1];
      promptSelect.appendChild(opt);
    });

    promptSelect.value = String(activeSlot);
    if (topLangIndicator) {
      topLangIndicator.textContent = currentLang.name.split(" ")[0] + ":";
    }
  }

function selectLanguageAndPrompt(lang, slotIdx, replaceCode, reloadIframe = true) {
    currentLang = lang;
    activeSlot = slotIdx;

    const items = CATALOG[lang.id] || CATALOG.html;
    const chosen = items[slotIdx] || items[0];
    const slug = chosen[0].toLowerCase().replace(/[^a-z0-9]+/g, "_");

    const modeSwitch = document.getElementById("code-mode-switch");
    if (modeSwitch) {
      setVisible(modeSwitch, lang.id !== "html");
    }

    if (meaningLangBadge) meaningLangBadge.textContent = lang.name;
    if (editorFilename) {
      editorFilename.textContent = (viewWebSourceMode || lang.id === "html")
        ? slug + ".html"
        : slug + "." + lang.ext;
    }

    renderSidebarLanguages();
    populateTopPromptDropdown();

    if (replaceCode && codeEditor) {
      if (viewWebSourceMode || lang.id === "html") {
        codeEditor.value = buildUniqueArchitectureSite(lang, slotIdx, chosen[0], chosen[1], chosen[2]);
      } else {
        codeEditor.value = generateFaithfulNativeCode(lang, slotIdx);
      }
      codeEditor.scrollTop = 0;
      if (lineNumbers) lineNumbers.scrollTop = 0;
      refreshEditorUI();
      if (reloadIframe) {
        updatePreview();
      }
    }
  }

  function addChatBubble(text, sender) {
    if (!chatMessages) return;
    const div = document.createElement("div");
    div.className = "chat-bubble " + (sender === "ai" ? "ai-bubble" : "user-bubble");
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function openFloatingChat() {
    setVisible(floatingChatWindow, true);
    if (chatInput) chatInput.focus();
  }

  function explainEntireCodeInChat() {
    const raw = codeEditor ? codeEditor.value : "";
    const words = Array.from(new Set(raw.match(/[A-Za-z_]{2,}/g) || []));
    const known = words.filter((w) => DICTIONARY[w]);
    openFloatingChat();

    if (known.length === 0) {
      addChatBubble("Li seu código! Clique em qualquer palavra no editor para inspecionar na barra superior.", "ai");
      return;
    }
    const lines = known.map((w) => "• " + w + ": " + DICTIONARY[w]).join("\n");
    addChatBubble("Bora mano! Aqui está o que cada comando desse código faz:\n\n" + lines, "ai");
  }

  function renderSavedProjects() {
    const savedList = document.getElementById("saved-list");
    if (!savedList) return;
    let projects = [];
    try {
      projects = JSON.parse(localStorage.getItem("missia_projects") || "[]");
    } catch (e) {
      projects = [];
    }
    savedList.innerHTML = "";

    if (projects.length === 0) {
      const empty = document.createElement("span");
      empty.className = "section-hint";
      empty.textContent = "Nenhum projeto salvo ainda.";
      savedList.appendChild(empty);
      return;
    }

    projects.forEach((proj) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "glass-btn saved-item-btn";
      btn.innerHTML = "<strong>" + proj.name + "</strong><small>" + proj.langName + "</small>";
      btn.addEventListener("click", () => {
        const langObj = LANGUAGES.find((l) => l.id === proj.langId) || LANGUAGES[0];
        selectLanguageAndPrompt(langObj, proj.slot || 0, false);
        if (codeEditor) codeEditor.value = proj.code;
        refreshEditorUI();
        updatePreview();
      });
      savedList.appendChild(btn);
    });
  }

  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  on("prompt-select", "change", () => {
    const chosenSlot = Number(promptSelect.value) || 0;
    selectLanguageAndPrompt(currentLang, chosenSlot, true);
  });

  on("ui-locale-select", "change", () => {
    if (localeSelect) applyLocale(localeSelect.value);
  });

  on("btn-top-login", "click", () => {
    workspaceUnlocked = false;
    setVisible(loginOverlay, true);
    if (appShell) appShell.classList.add("is-blurred");
  });

  on("btn-account-trigger", "click", (e) => {
    e.stopPropagation();
    if (accountDropdown) setVisible(accountDropdown, accountDropdown.hidden);
  });

  on("btn-save-account", "click", () => {
    if (!accountData) accountData = { loggedIn: true };
    const nIn = document.getElementById("acc-name-input");
    const phIn = document.getElementById("acc-photo-input");
    const telIn = document.getElementById("acc-phone-input");
    const exIn = document.getElementById("acc-extra-input");

    accountData.name = (nIn && nIn.value.trim()) || "Dev";
    accountData.photo = (phIn && phIn.value.trim()) || "";
    accountData.phone = (telIn && telIn.value.trim()) || "";
    accountData.extra = (exIn && exIn.value.trim()) || "";
    localStorage.setItem("missia_account_obj", JSON.stringify(accountData));
    syncTopbarAuthUI();
    setVisible(accountDropdown, false);
  });

  on("btn-switch-account", "click", () => {
    setVisible(accountDropdown, false);
    workspaceUnlocked = false;
    setVisible(loginOverlay, true);
    if (appShell) appShell.classList.add("is-blurred");
  });

  on("btn-logout", "click", () => {
    accountData = null;
    localStorage.removeItem("missia_account_obj");
    syncTopbarAuthUI();
    setVisible(accountDropdown, false);
  });

  on("ai-orb-btn", "click", () => {
    if (!floatingChatWindow) return;
    const willOpen = floatingChatWindow.hidden;
    setVisible(floatingChatWindow, willOpen);
    if (willOpen && chatInput) chatInput.focus();
  });

  on("btn-close-chat", "click", () => setVisible(floatingChatWindow, false));

 on("code-editor", "scroll", () => {
    if (lineNumbers && codeEditor) {
      lineNumbers.scrollTop = codeEditor.scrollTop;
    }
  });

  on("code-editor", "input", () => {
    const pos = codeEditor.selectionStart;
    const prefix = getPrefixAtCursor(codeEditor.value, pos);
    showAutocomplete(prefix);
    const activeWord = getWordAtCursor(codeEditor.value, pos);
    if (activeWord) explainWord(activeWord);
    refreshEditorUI();
    updatePreview();
  });

  on("code-editor", "click", () => {
    const word = getWordAtCursor(codeEditor.value, codeEditor.selectionStart);
    explainWord(word);
  });

  on("code-editor", "keydown", (e) => {
    if (e.key === "Tab" && currentSuggestions.length > 0 && autocompleteBox && !autocompleteBox.hidden) {
      e.preventDefault();
      applySuggestion(currentSuggestions[0]);
    }
  });

  on("code-editor", "paste", (e) => {
    if (!workspaceUnlocked) return;
    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    if (pasted && (pasted.split("\n").length >= 3 || pasted.length >= 50)) {
      setTimeout(() => setVisible(pasteModal, true), 60);
    }
  });

  on("btn-explain-all", "click", () => {
    setVisible(pasteModal, false);
    explainEntireCodeInChat();
  });

  on("btn-dismiss-paste", "click", () => {
    setVisible(pasteModal, false);
    if (codeEditor) codeEditor.focus();
  });

  on("btn-save-project", "click", () => {
    let projects = [];
    try {
      projects = JSON.parse(localStorage.getItem("missia_projects") || "[]");
    } catch (e) {
      projects = [];
    }
    const items = CATALOG[currentLang.id] || CATALOG.html;
    const entry = items[activeSlot] || items[0];
    projects.unshift({
      name: entry[0] + " (" + currentLang.ext + ")",
      langId: currentLang.id,
      langName: currentLang.name,
      slot: activeSlot,
      code: codeEditor ? codeEditor.value : ""
    });
    localStorage.setItem("missia_projects", JSON.stringify(projects.slice(0, 12)));
    renderSavedProjects();
    openFloatingChat();
    addChatBubble("Projeto '" + entry[0] + "' salvo com sucesso!", "ai");
  });

  on("btn-export-html", "click", () => {
    const items = CATALOG[currentLang.id] || CATALOG.html;
    const slug = items[activeSlot][0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
    downloadFile(slug + ".html", buildPreviewDocument(), "text/html");
  });

  on("btn-export-code", "click", () => {
    const ext = viewWebSourceMode ? "html" : currentLang.ext;
    downloadFile("codigo-missia." + ext, codeEditor ? codeEditor.value : "", "text/plain");
  });

  on("btn-refresh-preview", "click", updatePreview);

  const sendChat = () => {
    if (!chatInput) return;
    const q = chatInput.value.trim();
    if (!q) return;
    addChatBubble(q, "user");
    chatInput.value = "";

    const tokenMatch = Object.keys(DICTIONARY).find((k) =>
      q.toLowerCase().includes(k.toLowerCase())
    );

    if (tokenMatch) {
      addChatBubble("Sobre '" + tokenMatch + "': " + DICTIONARY[tokenMatch], "ai");
    } else {
      const entry = (CATALOG[currentLang.id] || CATALOG.html)[activeSlot];
      const cleanQ = userMessage.trim();
if (/^[\d\s+\-*/().]+$/.test(cleanQ.replace(/quanto\s+[eé]\s*/i, ""))) {
  const expr = cleanQ.replace(/quanto\s+[eé]\s*/i, "").replace(/[^0-9+\-*/().]/g, "");
  try {
    const res = Function("\"use strict\"; return (" + expr + ")")();
    return "O resultado de " + expr + " é " + res + ".";
  } catch (e) {}
}
      addChatBubble("Você está explorando '" + entry[0] + "' em " + currentLang.name + "! Use os botões no topo do editor para alternar entre o Código Nativo Fiel e o HTML Exato do Preview.", "ai");
    }
  };

  on("btn-send-chat", "click", sendChat);
  on("chat-input", "keydown", (e) => {
    if (e.key === "Enter") sendChat();
  });

  initCanvas();
  initClickEffects();
  applyLocale(currentLocale);
  syncTopbarAuthUI();
  renderSavedProjects();
  selectLanguageAndPrompt(LANGUAGES[0], 0, true);
  addChatBubble(UI_TEXT[currentLocale].welcomeAi, "ai");
});
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyATs1qbWfvw1VHBri8EL5EQ_QQHUyf8Kcs",
  authDomain: "missia-e9059.firebaseapp.com",
  projectId: "missia-e9059",
  storageBucket: "missia-e9059.firebasestorage.app",
  messagingSenderId: "560083547507",
  appId: "1:560083547507:web:c60fc31695202780848106"
};

window.addEventListener("load", async () => {
  const oldDropdown = document.getElementById("account-dropdown");
  const triggerBtn = document.getElementById("btn-account-trigger");
  if (!oldDropdown || !triggerBtn) return;

  document.body.appendChild(oldDropdown);

  oldDropdown.style.cssText = [
    "position: fixed !important",
    "top: 74px !important",
    "right: 22px !important",
    "width: 345px !important",
    "padding: 20px !important",
    "z-index: 999999 !important",
    "background: rgb(18, 8, 38) !important",
    "background-image: linear-gradient(155deg, rgba(44, 18, 86, 0.98), rgba(14, 6, 30, 0.99)) !important",
    "border: 1.5px solid rgba(233, 213, 255, 0.65) !important",
    "border-radius: 24px !important",
    "box-shadow: 0 30px 80px rgba(0, 0, 0, 0.96), inset 0 1px 2px rgba(255, 255, 255, 0.5) !important",
    "display: none"
  ].join(";");

  oldDropdown.innerHTML = [
    "<div style=\"display:flex;justify-content:space-between;align-items:center;padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.18);\">",
    "  <strong style=\"font-size:0.98rem;color:white;\">Configurações da Conta</strong>",
    "  <span id=\"cloud-sync-badge\" style=\"font-size:0.68rem;font-weight:800;padding:3px 9px;border-radius:99px;background:rgba(16,185,129,0.45);border:1px solid rgba(167,243,208,0.7);color:white;\">Conectando...</span>",
    "</div>",
    "<div style=\"display:flex;align-items:center;gap:12px;padding:10px;border-radius:16px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.18);margin-bottom:10px;\">",
    "  <div style=\"width:54px;height:54px;border-radius:50%;overflow:hidden;flex-shrink:0;border:2px solid rgb(217,70,239);background:rgb(107,33,168);display:flex;align-items:center;justify-content:center;\">",
    "    <img id=\"acc-preview-img\" style=\"width:100%;height:100%;object-fit:cover;display:none;\" alt=\"Foto\" />",
    "    <span id=\"acc-preview-letter\" style=\"font-size:1.25rem;font-weight:800;color:white;\">M</span>",
    "  </div>",
    "  <div style=\"display:flex;flex-direction:column;gap:5px;flex:1;\">",
    "    <label for=\"acc-file-input\" class=\"glass-btn\" style=\"text-align:center;padding:8px 10px;font-size:0.76rem;border-radius:11px;display:block;\">Subir Foto (PC / Celular)</label>",
    "    <input id=\"acc-file-input\" type=\"file\" accept=\"image/*\" style=\"display:none;\" />",
    "    <span style=\"font-size:0.67rem;color:rgba(233,213,255,0.78);\">Salva na tua conta na nuvem</span>",
    "  </div>",
    "</div>",
    "<label style=\"font-size:0.74rem;font-weight:700;color:rgb(233,213,255);display:block;margin-bottom:4px;\">Nome de Exibição</label>",
    "<input id=\"acc-name-input\" type=\"text\" class=\"glass-input\" style=\"width:100%;margin-bottom:10px;background:rgb(11,4,24);\" placeholder=\"Teu nome...\" />",
    "<label style=\"font-size:0.74rem;font-weight:700;color:rgb(233,213,255);display:block;margin-bottom:4px;\">Telefone Vinculado</label>",
    "<input id=\"acc-phone-input\" type=\"tel\" class=\"glass-input\" style=\"width:100%;margin-bottom:10px;background:rgb(11,4,24);\" placeholder=\"+55 (11) 9...\" />",
    "<label style=\"font-size:0.74rem;font-weight:700;color:rgb(233,213,255);display:block;margin-bottom:6px;\">Vincular Contas Oficiais</label>",
    "<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px;\">",
    "  <button type=\"button\" id=\"btn-link-google\" class=\"glass-btn\" style=\"padding:9px 8px;font-size:0.74rem;border-radius:12px;\">G • Vincular Google</button>",
    "  <button type=\"button\" id=\"btn-link-apple\" class=\"glass-btn\" style=\"padding:9px 8px;font-size:0.74rem;border-radius:12px;\"> • Vincular Apple</button>",
    "</div>",
    "<div style=\"display:flex;flex-direction:column;gap:8px;\">",
    "  <button type=\"button\" id=\"btn-portal-save\" class=\"glass-btn primary-btn\" style=\"width:100%;\">Guardar na Nuvem</button>",
    "  <button type=\"button\" id=\"btn-portal-switch\" class=\"glass-btn\" style=\"width:100%;\">Trocar / Outra Conta</button>",
    "  <button type=\"button\" id=\"btn-portal-logout\" class=\"glass-btn danger-glass-btn\" style=\"width:100%;\">Sair da Conta</button>",
    "</div>"
  ].join("");

  let fbAuth = null;
  let fbDb = null;
  let fbMods = null;

  try {
    const appMod = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js");
    const authMod = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js");
    const dbMod = await import("https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js");
    const fbApp = appMod.initializeApp(FIREBASE_CONFIG);
    fbAuth = authMod.getAuth(fbApp);
    fbDb = dbMod.getFirestore(fbApp);
    fbMods = { authMod, dbMod };
    document.getElementById("cloud-sync-badge").textContent = "Firebase Ativo ✓";

    authMod.onAuthStateChanged(fbAuth, async (user) => {
      if (!user) return;
      const snap = await dbMod.getDoc(dbMod.doc(fbDb, "users", user.uid));
      const cloudData = snap.exists() ? snap.data() : {};
      const merged = {
        loggedIn: true,
        uid: user.uid,
        name: cloudData.name || user.displayName || user.email || "Dev",
        photo: cloudData.photo || user.photoURL || "",
        phone: cloudData.phone || user.phoneNumber || "",
        linkedGoogle: cloudData.linkedGoogle || user.providerData.some((p) => p.providerId === "google.com"),
        linkedApple: cloudData.linkedApple || user.providerData.some((p) => p.providerId === "apple.com")
      };
      localStorage.setItem("missia_account_obj", JSON.stringify(merged));
      unlockAndShowUser();
      renderProf();
    });
  } catch (e) {
    document.getElementById("cloud-sync-badge").textContent = "Modo Local";
  }

  function getProf() {
    try {
      return JSON.parse(localStorage.getItem("missia_account_obj") || "null") || {
        loggedIn: false,
        name: "Dev",
        photo: "",
        phone: "",
        linkedGoogle: false,
        linkedApple: false
      };
    } catch (e) {
      return { loggedIn: false, name: "Dev", photo: "", phone: "", linkedGoogle: false, linkedApple: false };
    }
  }

  async function saveProf(p) {
    localStorage.setItem("missia_account_obj", JSON.stringify(p));
    if (fbDb && fbAuth && fbAuth.currentUser && fbMods) {
      const { doc, setDoc } = fbMods.dbMod;
      await setDoc(doc(fbDb, "users", fbAuth.currentUser.uid), {
        name: p.name || "Dev",
        photo: p.photo || "",
        phone: p.phone || "",
        linkedGoogle: Boolean(p.linkedGoogle),
        linkedApple: Boolean(p.linkedApple),
        updatedAt: new Date().toISOString()
      }, { merge: true });
    }
  }

  function unlockAndShowUser() {
    const ov = document.getElementById("login-overlay");
    const sh = document.getElementById("app-shell");
    const bLogin = document.getElementById("btn-top-login");
    const wrap = document.getElementById("account-menu-wrap");
    if (ov) {
      ov.hidden = true;
      ov.classList.add("is-hidden");
      ov.style.display = "none";
    }
    if (sh) sh.classList.remove("is-blurred");
    if (bLogin) {
      bLogin.hidden = true;
      bLogin.classList.add("is-hidden");
      bLogin.style.display = "none";
    }
    if (wrap) {
      wrap.hidden = false;
      wrap.classList.remove("is-hidden");
      wrap.style.display = "";
    }
  }

  async function signInWithRealProvider(type) {
    if (!fbAuth || !fbMods) return;
    try {
      const { GoogleAuthProvider, OAuthProvider, signInWithPopup, linkWithPopup } = fbMods.authMod;
      const provider = type === "google" ? new GoogleAuthProvider() : new OAuthProvider("apple.com");
      const result = fbAuth.currentUser
        ? await linkWithPopup(fbAuth.currentUser, provider)
        : await signInWithPopup(fbAuth, provider);

      const current = getProf();
      current.loggedIn = true;
      current.uid = result.user.uid;
      current.name = current.name && current.name !== "Dev" && current.name !== "Conta Google"
        ? current.name
        : (result.user.displayName || result.user.email || "Dev");
      if (!current.photo && result.user.photoURL) current.photo = result.user.photoURL;
      if (type === "google") current.linkedGoogle = true;
      if (type === "apple") current.linkedApple = true;

      await saveProf(current);
      unlockAndShowUser();
      renderProf();
    } catch (err) {
      alert("Aviso Firebase Auth: " + err.message);
    }
  }

  document.querySelectorAll("[data-auth]").forEach((btn) => {
    const clone = btn.cloneNode(true);
    btn.parentNode.replaceChild(clone, btn);
    clone.addEventListener("click", () => {
      const attr = clone.getAttribute("data-auth") || "";
      if (attr.includes("Google")) {
        signInWithRealProvider("google");
      } else {
        signInWithRealProvider("apple");
      }
    });
  });

  function renderProf() {
    const p = getProf();
    const pImg = document.getElementById("acc-preview-img");
    const pLet = document.getElementById("acc-preview-letter");
    const topImg = document.getElementById("user-avatar-img");
    const topLet = document.getElementById("user-avatar-fallback");
    const topName = document.getElementById("user-display-name");
    const nIn = document.getElementById("acc-name-input");
    const tIn = document.getElementById("acc-phone-input");
    const bG = document.getElementById("btn-link-google");
    const bA = document.getElementById("btn-link-apple");

    if (nIn) nIn.value = p.name || "";
    if (tIn) tIn.value = p.phone || "";
    if (topName && p.loggedIn) topName.textContent = p.name || "Dev";

    const initChar = (p.name || "M").charAt(0).toUpperCase();
    const validPhoto = p.photo && (p.photo.startsWith("data:image") || p.photo.startsWith("http"));

    if (validPhoto) {
      pImg.src = p.photo;
      pImg.style.display = "block";
      pLet.style.display = "none";
      if (topImg && p.loggedIn) {
        topImg.src = p.photo;
        topImg.hidden = false;
        topImg.classList.remove("is-hidden");
        topImg.style.display = "block";
        if (topLet) topLet.style.display = "none";
      }
    } else {
      pImg.style.display = "none";
      pLet.style.display = "block";
      pLet.textContent = initChar;
      if (p.loggedIn && topLet) {
        if (topImg) topImg.style.display = "none";
        topLet.hidden = false;
        topLet.classList.remove("is-hidden");
        topLet.style.display = "inline-flex";
        topLet.textContent = initChar;
      }
    }

    if (bG) {
      bG.textContent = p.linkedGoogle ? "✓ Google Conectado" : "G • Vincular Google";
      bG.style.background = p.linkedGoogle ? "rgba(16, 185, 129, 0.55)" : "";
    }
    if (bA) {
      bA.textContent = p.linkedApple ? "✓ Apple Conectada" : " • Vincular Apple";
      bA.style.background = p.linkedApple ? "rgba(16, 185, 129, 0.55)" : "";
    }
  }

  function closeMenu() {
    oldDropdown.hidden = true;
    oldDropdown.classList.add("is-hidden");
    oldDropdown.style.display = "none";
  }

  function openMenu() {
    renderProf();
    oldDropdown.hidden = false;
    oldDropdown.classList.remove("is-hidden");
    oldDropdown.style.display = "block";
  }

  const newTrigger = triggerBtn.cloneNode(true);
  triggerBtn.parentNode.replaceChild(newTrigger, triggerBtn);

  newTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    if (oldDropdown.style.display === "block") closeMenu();
    else openMenu();
  });

  oldDropdown.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("click", closeMenu);

  document.getElementById("acc-file-input").addEventListener("change", (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = async () => {
        const cv = document.createElement("canvas");
        cv.width = 256;
        cv.height = 256;
        const cx = cv.getContext("2d");
        const side = Math.min(img.width, img.height);
        cx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, 256, 256);
        const p = getProf();
        p.loggedIn = true;
        p.photo = cv.toDataURL("image/webp", 0.88);
        await saveProf(p);
        renderProf();
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById("btn-link-google").addEventListener("click", () => signInWithRealProvider("google"));
  document.getElementById("btn-link-apple").addEventListener("click", () => signInWithRealProvider("apple"));

  document.getElementById("btn-portal-save").addEventListener("click", async () => {
    const p = getProf();
    p.loggedIn = true;
    p.name = document.getElementById("acc-name-input").value.trim() || "Dev";
    p.phone = document.getElementById("acc-phone-input").value.trim();
    await saveProf(p);
    renderProf();
    closeMenu();
  });

  document.getElementById("btn-portal-switch").addEventListener("click", () => {
    closeMenu();
    const ov = document.getElementById("login-overlay");
    const sh = document.getElementById("app-shell");
    if (ov) {
      ov.hidden = false;
      ov.classList.remove("is-hidden");
      ov.style.display = "flex";
    }
    if (sh) sh.classList.add("is-blurred");
  });

  document.getElementById("btn-portal-logout").addEventListener("click", async () => {
    if (fbAuth && fbMods) {
      await fbMods.authMod.signOut(fbAuth);
    }
    localStorage.removeItem("missia_account_obj");
    closeMenu();
    const bLogin = document.getElementById("btn-top-login");
    const wrap = document.getElementById("account-menu-wrap");
    if (bLogin) {
      bLogin.hidden = false;
      bLogin.classList.remove("is-hidden");
      bLogin.style.display = "";
    }
    if (wrap) {
      wrap.hidden = true;
      wrap.classList.add("is-hidden");
      wrap.style.display = "none";
    }
  });

  renderProf();
});