/* ========== EXPANDED REALISTIC DATA ========== */
const tipsData = [
  { 
    id: 1, 
    title: "Como Evoluir Mais Rápido", 
    desc: "Aprenda técnicas avançadas de farming e progressão para subir de nível rapidamente em qualquer RPG de Ação moderno.", 
    img: "img/games/tips1.jpg", 
    cat: "RPG",
    details: {
      intro: "Em jogos como Elden Ring, Diablo IV ou RPGs clássicos, otimizar sua rota de progressão nas primeiras horas faz toda a diferença para o end-game.",
      stats: { "Dificuldade": "Média", "Tempo Estimado": "15 min", "Recompensa": "XP Otimizado" },
      steps: [
        "Identifique inimigos de elite e complete masmorras opcionais próximas.",
        "Maximize bônus temporários de XP (poções, altares, comida) antes de lutas importantes.",
        "Evite lutas desnecessárias com lacaios comuns se o seu foco for evolução rápida.",
        "Otimize seus pontos de habilidade focando em dano em área (AoE) nos níveis iniciais."
      ]
    }
  },
  { 
    id: 2, 
    title: "Estratégias para Iniciantes em FPS", 
    desc: "Domine o posicionamento estratégico, controle de recuo e movimentação tática em jogos de tiro com essas dicas essenciais.", 
    img: "img/games/tips2.jpg", 
    cat: "FPS",
    details: {
      intro: "Seja no Valorant, Counter-Strike 2 ou Call of Duty, a mira mecânica representa apenas 30% do sucesso. O restante é pura decisão tática.",
      stats: { "Foco": "Mira & Posicionamento", "Nível": "Iniciante", "Plataforma": "PC / Consoles" },
      steps: [
        "Posicione a mira sempre na altura da cabeça (Crosshair Placement).",
        "Aprenda o padrão de recuo (spray pattern) das principais armas em servidores de treino.",
        "Use fones de ouvido estéreo e aprenda a ler as dicas sonoras (passos, recargas).",
        "Nunca corra ao passar por esquinas perigosas; utilize abertura de ângulo curta (slice the pie)."
      ]
    }
  },
  { 
    id: 3, 
    title: "Configurações Ideais de Performance", 
    desc: "Otimize as configurações gráficas do seu computador para obter o melhor equilíbrio entre fidelidade visual e alta taxa de quadros (FPS).", 
    img: "img/games/tips3.jpg", 
    cat: "Configurações",
    details: {
      intro: "Ganhe vantagem competitiva reduzindo a latência do sistema e aumentando a fluidez visual no seu setup gamer.",
      stats: { "Alvo": "Mais de 144 FPS", "Hardware": "Todos os PCs", "Complexidade": "Baixa" },
      steps: [
        "Desative o V-Sync no menu do jogo para eliminar o atraso de entrada (input lag).",
        "Configure sombras e efeitos de pós-processamento no nível 'Baixo' ou 'Médio'.",
        "Mantenha a resolução nativa do monitor e utilize tecnologias como DLSS ou FSR no modo Qualidade.",
        "Ative o Modo de Jogo do Windows 11 e atualize os drivers da sua placa de vídeo mensalmente."
      ]
    }
  },
  { 
    id: 4, 
    title: "Melhores Armas por Categoria", 
    desc: "Guia completo com as armas mais poderosas e versáteis do meta atual para cada situação de combate.", 
    img: "img/games/tips4.jpg", 
    cat: "FPS",
    details: {
      intro: "Fizemos uma análise detalhada das estatísticas de dano, velocidade de disparo e recuo das principais armas do meta competitivo global.",
      stats: { "Meta": "Julho 2026", "Armas Analisadas": "15+", "Equilíbrio": "Atualizado" },
      steps: [
        "Fuzis de Assalto: Versatilidade absoluta em média e longa distância.",
        "Submetralhadoras: Ideais para combates dinâmicos a curta distância (Close Quarters).",
        "Rifles de Precisão: Domine as linhas de visão longas, mas sempre tenha uma pistola confiável como secundária.",
        "Equipamentos Utilitários: Granadas de efeito visual e fumaça ganham rodadas mais do que balas puras."
      ]
    }
  },
  { 
    id: 5, 
    title: "Builds Recomendadas 2026", 
    desc: "As melhores árvores de talentos e equipamentos para as classes mais populares do cenário RPG, testadas e aprovadas por especialistas.", 
    img: null, 
    cat: "RPG", 
    ph: "p5",
    details: {
      intro: "Encontre a configuração perfeita para maximizar seu DPS ou durabilidade nas incursões mais difíceis da temporada.",
      stats: { "Classes": "Mago, Guerreiro, Assassino", "Versão": "Patch 1.4", "Foco": "Maximização de Dano" },
      steps: [
        "Mago de Fogo: Foco em acertos críticos colossais e velocidade de conjuração.",
        "Guerreiro Tanker: Árvore de defesa impenetrável com regeneração passiva de vida.",
        "Assassino de Veneno: Acúmulo de dano contínuo (DoT) e esquiva extrema.",
        "Equipamentos Essenciais: Priorize atributos secundários como Aceleração e Dano Crítico."
      ]
    }
  },
  { 
    id: 6, 
    title: "Como Conseguir Itens Raros", 
    desc: "Descubra as mecânicas ocultas e rotas secretas para encontrar itens lendários e equipamentos raros com taxas de drop aprimoradas.", 
    img: null, 
    cat: "RPG", 
    ph: "p6",
    details: {
      intro: "Entenda como o algoritmo de probabilidade de drop funciona e aumente suas chances de adquirir o conjunto de armadura dos seus sonhos.",
      stats: { "Drop Rate": "+350%", "Localização": "Rotas Opcionais", "Raridade": "Lendária" },
      steps: [
        "Participe de eventos globais periódicos com chefes mundiais garantidos.",
        "Aumente o nível de dificuldade do mundo de forma gradativa para multiplicar a taxa de drop.",
        "Equipe amuletos que adicionam o atributo passivo 'Sorte do Caçador'.",
        "Troque fragmentos coletados em masmorras com os mercadores misteriosos das capitais."
      ]
    }
  }
];

const releasesData = [
  { 
    id: 10, 
    title: "Elden Ring: Nightreign", 
    studio: "FromSoftware", 
    genre: "Action RPG", 
    platform: "PC, PS5, Xbox Series X/S", 
    date: "Final de 2025", 
    badge: "confirmed", 
    desc: "Novo título focado em desafios cooperativos intensos no universo fantástico de Elden Ring.",
    details: {
      synopsis: "Elden Ring: Nightreign é o próximo spin-off autônomo da aclamada franquia da FromSoftware. O jogo traz o mesmo combate primoroso e punitivo, mas estruturado em rodadas de sobrevivência cooperativa de até 4 jogadores contra hordas de abominações sombrias.",
      features: [
        "Combate cooperativo tático para até 4 jogadores em rede.",
        "Dificuldade progressiva com chefes dinâmicos gerados proceduralmente.",
        "Novos conjuntos de cinzas de guerra, armas exclusivas e magias celestiais.",
        "Integração de cross-play completa entre consoles e PC."
      ]
    }
  },
  { 
    id: 11, 
    title: "GTA VI", 
    studio: "Rockstar Games", 
    genre: "Mundo Aberto", 
    platform: "PS5, Xbox Series X/S", 
    date: "Outubro de 2026", 
    badge: "soon", 
    desc: "O aguardado retorno à vibrante Vice City com um nível de realismo gráfico e interatividade nunca antes visto na história.",
    details: {
      synopsis: "GTA VI promete redefinir a indústria dos jogos de mundo aberto. Acompanhe a história de Lucia e Jason no estado de Leonida, com um mapa colossal que reage dinamicamente às decisões dos jogadores e conta com uma simulação social inovadora.",
      features: [
        "Campanha principal com narrativa dupla e dinâmica de dupla cooperativa.",
        "O maior e mais detalhado mapa já construído pela Rockstar Games.",
        "Simulação de física, fluidos e inteligência artificial de última geração.",
        "Ecossistema online integrado e dinâmico desde o lançamento."
      ]
    }
  },
  { 
    id: 12, 
    title: "Hollow Knight: Silksong", 
    studio: "Team Cherry", 
    genre: "Metroidvania", 
    platform: "PC, Nintendo Switch, PS5, Xbox", 
    date: "Meados de 2025", 
    badge: "confirmed", 
    desc: "A sequência direta do lendário metroidvania, agora protagonizada pela ágil e mortal Hornet.",
    details: {
      synopsis: "Controle Hornet, a princesa protetora de Hallownest, em uma jornada de ascensão através de Pharloom, um reino governado pela seda e pela música. Explore mais de 150 novos inimigos, sidequests detalhadas e uma jogabilidade acrobática ultra-fluida.",
      features: [
        "Jogabilidade de ação rápida com acrobacias aéreas e ganchos de seda.",
        "Sistema completo de criação de ferramentas, armadilhas e armas secundárias.",
        "Trilha sonora orquestral monumental composta por Christopher Larkin.",
        "Modo Silk Soul habilitado após a primeira conclusão para testes de sobrevivência."
      ]
    }
  },
  { 
    id: 13, 
    title: "Fable", 
    studio: "Playground Games", 
    genre: "Action RPG", 
    platform: "PC, Xbox Series X/S", 
    date: "2026", 
    badge: "soon", 
    desc: "A clássica franquia de RPG britânica renasce com gráficos incríveis e seu humor satírico marcante.",
    details: {
      synopsis: "Fable é uma releitura completa desenvolvida pela Playground Games (de Forza Horizon). O jogo mantém o foco nas escolhas morais dos jogadores (ser um herói benevolente ou um tirano temido) enquanto introduz um combate de ação moderno e um mundo de conto de fadas impressionante.",
      features: [
        "Sistema de escolhas morais profundas com mudanças visuais no protagonista.",
        "Mundo aberto exuberante repleto de lendas, segredos e personagens excêntricos.",
        "Diálogos ricos e o clássico sarcasmo britânico que consagrou a franquia.",
        "Sistema avançado de economia, compra de propriedades e reputação social."
      ]
    }
  },
  { 
    id: 14, 
    title: "Death Stranding 2: On The Beach", 
    studio: "Kojima Productions", 
    genre: "Ação/Aventura", 
    platform: "PlayStation 5", 
    date: "2025", 
    badge: "presale", 
    desc: "Hideo Kojima convida os jogadores a mais uma jornada cinematográfica e única que conecta a humanidade.",
    details: {
      synopsis: "Sam Porter Bridges retorna para expandir a rede de conexões humanas além das fronteiras anteriores. Com a ajuda da tripulação do navio Magellan, Sam viaja por novos territórios enfrentando ameaças mecânicas, chuvas temporais devastadoras e dilemas filosóficos profundos.",
      features: [
        "Qualidade cinematográfica estonteante usando a tecnologia Decima Engine.",
        "Novos elementos de travessia terrestre, aquática e uso de veículos avançados.",
        "Elenco estelar incluindo Norman Reedus, Léa Seydoux e Elle Fanning.",
        "Mecânicas aprimoradas de construção de infraestruturas colaborativas."
      ]
    }
  },
  { 
    id: 15, 
    title: "Metroid Prime 4: Beyond", 
    studio: "Retro Studios", 
    genre: "FPS / Aventura", 
    platform: "Nintendo Switch / Switch 2", 
    date: "2025", 
    badge: "confirmed", 
    desc: "A caçadora de recompensas Samus Aran retorna em uma odisséia espacial em primeira pessoa de tirar o fôlego.",
    details: {
      synopsis: "Metroid Prime 4: Beyond traz de volta a jogabilidade imersiva de exploração, isolamento espacial e escaneamento de biomas da Retro Studios. Enfrente a ameaça de piratas espaciais e a corrupção de substâncias alienígenas em um novo setor inexplorado da galáxia.",
      features: [
        "Visão em primeira pessoa imersiva combinando combate rápido e resolução de puzzles.",
        "Sistema de escaneamento detalhado para desvendar a história e segredos de civilizações mortas.",
        "Habilidades icônicas clássicas (Morph Ball, visores especiais, raios congelantes).",
        "Performance otimizada rodando em 60 quadros por segundo constantes."
      ]
    }
  }
];

const recommendationsData = [
  { 
    id: 20, 
    title: "The Witcher 3: Wild Hunt", 
    genre: "RPG de Ação", 
    cat: "RPG", 
    rating: 9.8, 
    platforms: ["pc", "playstation", "xbox", "nintendo-switch"], 
    desc: "Uma obra-prima absoluta no mundo dos RPGs, com narrativa madura, personagens memoráveis e um mundo vivo.",
    details: {
      synopsis: "Controle Geralt de Rívia, um caçador de monstros profissional, em busca de Ciri, a criança da profecia. O game possui dois dos melhores pacotes de expansão da história (Hearts of Stone e Blood and Wine).",
      score: "98/100 (Crítica Geral)",
      pros: ["Roteiro e missões secundárias fantásticas", "Mundo aberto denso e cheio de histórias", "Trilha sonora memorável"],
      cons: ["Combate um pouco repetitivo", "Menu de inventário pode ser confuso no início"]
    }
  },
  { 
    id: 21, 
    title: "Valorant", 
    genre: "FPS Tático", 
    cat: "FPS", 
    rating: 8.7, 
    platforms: ["pc"], 
    desc: "Shooter tático competitivo em equipes que mistura precisão de tiro com agentes que possuem habilidades especiais.",
    details: {
      synopsis: "O shooter tático 5v5 da Riot Games coloca agentes com poderes sobrenaturais e de alta tecnologia em confronto direto. A precisão dos disparos e o trabalho coordenado da equipe definem os vencedores.",
      score: "87/100 (Cenário Competitivo)",
      pros: ["Ótimo suporte competitivo e servidores de 128-tick", "Grande variedade de estratégias com os agentes", "Leve e roda em computadores modestos"],
      cons: ["Comunidade tóxica em partidas ranqueadas", "Curva de aprendizado íngreme para iniciantes"]
    }
  },
  { 
    id: 22, 
    title: "Red Dead Redemption 2", 
    genre: "Ação / Faroeste", 
    cat: "Mundo Aberto", 
    rating: 9.7, 
    platforms: ["pc", "playstation", "xbox"], 
    desc: "Uma jornada inesquecível pelo fim da era do Velho Oeste americano, rica em realismo e detalhes de mundo aberto.",
    details: {
      synopsis: "Viva a história de Arthur Morgan e do bando Van der Linde enquanto fogem dos agentes federais. Explore um mundo natural vivo e interaja com os personagens de forma realista e orgânica.",
      score: "97/100 (Metacritic)",
      pros: ["Uma das melhores histórias já contadas em um jogo", "Nível de detalhamento e fidelidade visual absurdo", "Personagens extremamente humanos e cativantes"],
      cons: ["Mecânicas de jogo lentas e focadas no realismo extremo", "Controles às vezes travados ou pesados"]
    }
  },
  { 
    id: 23, 
    title: "Hades II", 
    genre: "Roguelike de Ação", 
    cat: "Indie", 
    rating: 9.2, 
    platforms: ["pc"], 
    desc: "A sequência do premiado roguelike da Supergiant Games traz Melinoë, a Princesa do Submundo, em batalhas mágicas.",
    details: {
      synopsis: "Batalhe contra Chronos, o Titã do Tempo, utilizando magias das sombras e bençãos do Olimpo. Hades II expande todas as mecânicas do primeiro título mantendo a incrível arte conceitual e dublagem de ponta.",
      score: "92/100 (Acesso Antecipado)",
      pros: ["Combate fluido misturando bruxaria e armas rápidas", "História intrigante e design artístico de babar", "Alta rejogabilidade com novos modificadores"],
      cons: ["Ainda em desenvolvimento ativo no acesso antecipado", "Algumas classes de armas precisam de balanceamento"]
    }
  },
  { 
    id: 24, 
    title: "Resident Evil 4 Remake", 
    genre: "Survival Horror / Ação", 
    cat: "Terror", 
    rating: 9.4, 
    platforms: ["pc", "playstation", "xbox"], 
    desc: "O clássico de sobrevivência renasce com visuais assustadores, jogabilidade modernizada e atmosfera tensa refinada.",
    details: {
      synopsis: "Seis anos após o desastre biológico em Raccoon City, Leon S. Kennedy é enviado para resgatar a filha do presidente dos EUA em uma isolada vila europeia controlada por um culto macabro.",
      score: "94/100 (Aprovação)",
      pros: ["Preserva a essência do clássico melhorando a jogabilidade", "Atmosfera muito mais aterrorizante e sombria", "Excelente fator de replay"],
      cons: ["Alguns trechos de puzzle foram bastante simplificados", "Falta a dublagem clássica original nostálgica"]
    }
  },
  { 
    id: 25, 
    title: "Forza Horizon 5", 
    genre: "Simulador de Corrida Arcade", 
    cat: "Corrida", 
    rating: 9.1, 
    platforms: ["pc", "xbox"], 
    desc: "Acelere por desertos, selvas e vulcões ativos em uma recriação deslumbrante e colorida do México.",
    details: {
      synopsis: "Forza Horizon 5 é o ápice das corridas de mundo aberto. Com centenas de carros licenciados, eventos sazonais dinâmicos e dezenas de biomas, o jogo diverte tanto pilotos casuais quanto veteranos.",
      score: "91/100 (Fidelidade Visual)",
      pros: ["Gráficos espetaculares com suporte a Ray Tracing", "Dirigibilidade prazerosa e acessível para todos", "Enorme variedade de carros e customizações"],
      cons: ["Progressão de campanha pode parecer repetitiva", "Modo online apresenta instabilidades de servidor pontuais"]
    }
  },
  { 
    id: 26, 
    title: "Civilization VI", 
    genre: "Estratégia 4X", 
    cat: "Estratégia", 
    rating: 8.9, 
    platforms: ["pc", "playstation", "xbox", "nintendo-switch"], 
    desc: "Lidere o seu império desde a idade da pedra até a era da informação e conquiste o domínio global.",
    details: {
      synopsis: "Construa caminhos para a vitória militar, científica, cultural ou religiosa. Civilization VI traz o inovador sistema de distritos urbanos expandindo o planejamento estratégico no mapa.",
      score: "89/100 (Estratégia Avançada)",
      pros: ["Profundidade tática e mecânica extremamente viciante", "Excelentes pacotes de expansão histórica", "Modo multiplayer local e online sólido"],
      cons: ["Partidas podem durar dezenas de horas (cansaço)", "Interface pode assustar jogadores novatos"]
    }
  },
  { 
    id: 27, 
    title: "Overwatch 2", 
    genre: "FPS Hero Shooter", 
    cat: "Multiplayer", 
    rating: 7.8, 
    platforms: ["pc", "playstation", "xbox", "nintendo-switch"], 
    desc: "Shooter em equipe com heróis carismáticos e combates 5v5 baseados em objetivos e trabalho coordenado.",
    details: {
      synopsis: "Alie-se a amigos ou desconhecidos e dispute partidas rápidas e intensas. O jogo é gratuito para jogar e conta com atualizações constantes de temporadas, novos mapas e novos personagens.",
      score: "78/100 (Avaliação Geral)",
      pros: ["Variedade rica de heróis com estilos de jogo únicos", "Gráficos carismáticos e movimentação excelente", "100% gratuito para jogar em todas as plataformas"],
      cons: ["Sistema de monetização de cosméticos agressivo", "Balanceamento constante muda o meta toda semana"]
    }
  }
];

const newsData = [
  { 
    id: 40, 
    title: "Nintendo Anuncia Switch 2 com Retrocompatibilidade Total", 
    cat: "Anúncios", 
    date: "09 Jul 2026", 
    desc: "A gigante japonesa confirmou que o sucessor do Switch rodará todos os cartuchos e jogos digitais da geração atual.",
    details: {
      content: "Em uma apresentação oficial realizada nesta manhã, o presidente da Nintendo confirmou o nome provisório do novo console e acalmou os fãs: a retrocompatibilidade completa com jogos físicos e digitais está garantida. Além disso, jogos anteriores receberão atualizações de desempenho automáticas (patches de FPS e resolução). Mais detalhes sobre o hardware e preço serão divulgados no final do trimestre.",
      author: "Kelton Alves",
      tags: ["Nintendo", "Switch 2", "Hardware"]
    }
  },
  { 
    id: 41, 
    title: "Atualização 2.1 de Elden Ring Adiciona Boss Secreto no Mapa", 
    cat: "Atualizações", 
    date: "07 Jul 2026", 
    desc: "A FromSoftware pegou a comunidade de surpresa ao lançar uma grande atualização contendo novos desafios e armas.",
    details: {
      content: "Uma atualização surpresa de 8GB foi lançada para Elden Ring em todas as plataformas. Jogadores explorando as ruínas subterrâneas descobriram uma nova área secreta que leva a uma luta contra um chefe inédito, o 'Cavaleiro das Cinzas Perdidas'. O patch também traz correções de balanceamento para magias de longo alcance e suporte oficial para monitores ultra-wide no PC.",
      author: "Guilherme Gamer",
      tags: ["Elden Ring", "Patch Note", "FromSoftware"]
    }
  },
  { 
    id: 42, 
    title: "Expansão de Cyberpunk 2077 Ultrapassa 12 Milhões de Cópias", 
    cat: "Indústria", 
    date: "05 Jul 2026", 
    desc: "A CD Projekt Red celebrou o recorde de vendas de Phantom Liberty e revelou novas artes conceituais do próximo projeto.",
    details: {
      content: "Em reunião de investidores, a CD Projekt Red anunciou que a expansão Phantom Liberty ultrapassou a marca de 12 milhões de cópias comercializadas mundialmente. O estúdio polonês aproveitou a ocasião para confirmar que o desenvolvimento da sequência de Cyberpunk, codinome 'Projeto Orion', entrou em fase de produção total com mais de 300 desenvolvedores realocados.",
      author: "Redação ManualGamer",
      tags: ["Cyberpunk 2077", "Vendas", "CDPR"]
    }
  },
  { 
    id: 43, 
    title: "The Game Awards 2026 Revela Localização e Novas Categorias", 
    cat: "Eventos", 
    date: "03 Jul 2026", 
    desc: "Geoff Keighley confirmou a data da premiação máxima do mundo dos games e anunciou a categoria de Melhor Adaptação de eSports.",
    details: {
      content: "O evento mais importante do ano dos videogames, o The Game Awards, já tem data e local definidos: dia 10 de dezembro no Peacock Theater em Los Angeles. Geoff Keighley revelou que a premiação deste ano contará com a nova categoria de 'Melhor Série/Filme Adaptado de Jogos', motivada pelo sucesso estrondoso de recentes produções cinematográficas baseadas em franquias famosas.",
      author: "Ana Carolina",
      tags: ["TGA 2026", "Geoff Keighley", "Premiação"]
    }
  },
  { 
    id: 44, 
    title: "Final do Mundial de Valorant Bate Recorde Histórico de Audiência", 
    cat: "eSports", 
    date: "01 Jul 2026", 
    desc: "A grande final presencial lotou a arena em Tóquio e registrou mais de 3.2 milhões de espectadores simultâneos nas plataformas.",
    details: {
      content: "O cenário competitivo de Valorant segue quebrando recordes. A final do Champions disputada em Tóquio, na qual a equipe Sentinels se sagrou campeã após uma série dramática de 5 mapas, registrou o maior pico de audiência da história do jogo, superando com facilidade os torneios de League of Legends e Counter-Strike deste ano nas transmissões oficiais e co-streams de influenciadores.",
      author: "Lucas Rodrigues",
      tags: ["Valorant", "eSports", "Riot Games"]
    }
  },
  { 
    id: 45, 
    title: "Misterioso Easter Egg Descoberto em Fallout 3 Após 18 Anos", 
    cat: "Curiosidades", 
    date: "28 Jun 2026", 
    desc: "Um fã obstinado decodificou um sinal de rádio oculto que revela uma mensagem secreta deixada pelos programadores.",
    details: {
      content: "Quase duas décadas após o lançamento oficial de Fallout 3, um jogador e programador descobriu um easter egg oculto nos arquivos de áudio do jogo. Ao converter um chiado de rádio específico emitido em uma torre isolada do mapa para código binário, ele encontrou uma mensagem de agradecimento dos desenvolvedores e uma piada interna sobre o curto prazo de desenvolvimento do jogo.",
      author: "Filipe Caçador",
      tags: ["Fallout 3", "Easter Egg", "Bethesda"]
    }
  }
];

const categories = ["Todos", "RPG", "FPS", "Mundo Aberto", "Indie", "Terror", "Corrida", "Estratégia", "Multiplayer"];
const platformIcons = { 
  pc: "bi-pc-display", 
  playstation: "bi-playstation", 
  xbox: "bi-xbox", 
  "nintendo-switch": "bi-nintendo-switch" 
};
const phClasses = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8"];
let allSearchable = [];

/* ========== RENDER IMAGES WITH PLACEHOLDERS ========== */
function renderImg(item, idx) {
  if (item.img) {
    return `<img src="${item.img}" alt="${item.title}" loading="lazy">`;
  }
  const p = item.ph || phClasses[idx % phClasses.length];
  return `
    <div class="placeholder-img ${p}">
      <i class="bi bi-controller"></i>
    </div>`;
}

/* ========== CARD BUILDERS & EVENT BINDERS ========== */
function renderTips() {
  const grid = document.getElementById("tipsGrid");
  if (!grid) return;
  
  grid.innerHTML = tipsData.map((t, i) => `
    <div class="col-md-6 col-lg-4 fade-up">
      <div class="game-card" data-type="tip" data-id="${t.id}">
        <div class="card-img-wrapper">${renderImg(t, i)}</div>
        <div class="card-body">
          <span class="news-category">${t.cat}</span>
          <h5 class="card-title mt-2">${t.title}</h5>
          <p class="card-text">${t.desc}</p>
          <button class="btn-card">Ler guia completo <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>`).join("");
    
  bindCardEvents("#tipsGrid .game-card");
}

function badgeClass(b) {
  return b === "soon" ? "badge-soon" : b === "confirmed" ? "badge-confirmed" : "badge-presale";
}

function badgeText(b) {
  return b === "soon" ? "Em Breve" : b === "confirmed" ? "Confirmado" : "Pré-venda";
}

function renderReleases() {
  const grid = document.getElementById("releasesGrid");
  if (!grid) return;
  
  grid.innerHTML = releasesData.map((r, i) => `
    <div class="col-md-6 col-lg-4 fade-up">
      <div class="game-card" data-type="release" data-id="${r.id}">
        <div class="card-img-wrapper">
          <div class="placeholder-img ${phClasses[i % phClasses.length]}"><i class="bi bi-calendar-event"></i></div>
          <span class="card-badge ${badgeClass(r.badge)}">${badgeText(r.badge)}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${r.title}</h5>
          <div class="card-meta">
            <span><i class="bi bi-building"></i> ${r.studio}</span>
            <span><i class="bi bi-tag"></i> ${r.genre}</span>
            <span><i class="bi bi-calendar3"></i> ${r.date}</span>
          </div>
          <div class="card-meta">
            <span><i class="bi bi-display"></i> ${r.platform}</span>
          </div>
          <p class="card-text">${r.desc}</p>
          <button class="btn-card">Ver detalhes <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>`).join("");
    
  bindCardEvents("#releasesGrid .game-card");
}

function renderStars(r) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<i class="bi bi-star${i <= Math.round(r/2) ? "-fill" : ""}"></i>`;
  }
  return s;
}

function renderRecommendations(filter) {
  const grid = document.getElementById("recommendationsGrid");
  if (!grid) return;
  
  const filtered = filter === "Todos" ? recommendationsData : recommendationsData.filter(g => g.cat === filter);
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-12 text-center py-5 fade-up">
        <i class="bi bi-emoji-frown fs-1 text-muted"></i>
        <h5 class="mt-3 text-muted">Nenhum jogo nesta categoria no momento</h5>
      </div>`;
    return;
  }
  
  grid.innerHTML = filtered.map((g, i) => `
    <div class="col-md-6 col-lg-4 col-xl-3 fade-up">
      <div class="game-card" data-type="recommendation" data-id="${g.id}">
        <div class="card-img-wrapper">
          <div class="placeholder-img ${phClasses[i % phClasses.length]}"><i class="bi bi-joystick"></i></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">${g.title}</h5>
          <span class="news-category">${g.genre}</span>
          <div class="card-rating mt-2">
            ${renderStars(g.rating)} 
            <span class="ms-1">${g.rating}</span>
          </div>
          <p class="card-text mt-2">${g.desc}</p>
          <div class="card-platforms">
            ${g.platforms.map(p => `<i class="bi ${platformIcons[p] || "bi-display"}" title="${p}"></i>`).join("")}
          </div>
        </div>
      </div>
    </div>`).join("");
    
  bindCardEvents("#recommendationsGrid .game-card");
  initScrollAnimations();
}

function renderFilterTabs() {
  const tabs = document.getElementById("filterTabs");
  if (!tabs) return;
  
  tabs.innerHTML = categories.map(c => `
    <button class="filter-tab${c === "Todos" ? " active" : ""}" data-cat="${c}">
      ${c}
    </button>`).join("");
    
  tabs.addEventListener("click", e => {
    if (!e.target.classList.contains("filter-tab")) return;
    tabs.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
    e.target.classList.add("active");
    renderRecommendations(e.target.dataset.cat);
  });
}

function renderNews() {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;
  
  grid.innerHTML = newsData.map((n, i) => `
    <div class="col-md-6 col-lg-4 fade-up">
      <div class="news-card" data-type="news" data-id="${n.id}">
        <div class="news-img">
          <div class="placeholder-img ${phClasses[i % phClasses.length]}"><i class="bi bi-newspaper"></i></div>
        </div>
        <div class="news-body">
          <div class="news-date"><i class="bi bi-calendar3 me-1"></i> ${n.date}</div>
          <span class="news-category">${n.cat}</span>
          <h5>${n.title}</h5>
          <p>${n.desc}</p>
          <button class="btn-card">Continuar lendo <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>`).join("");
    
  bindCardEvents("#newsGrid .news-card");
}

/* ========== CARD INTERACTION (MODAL POPULATION) ========== */
function bindCardEvents(selector) {
  const cards = document.querySelectorAll(selector);
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const type = card.dataset.type;
      const id = parseInt(card.dataset.id);
      openDetailsModal(type, id);
    });
  });
}

function openDetailsModal(type, id) {
  const modalLabel = document.getElementById("gamerModalLabel");
  const modalBody = document.getElementById("gamerModalBody");
  if (!modalLabel || !modalBody) return;
  
  let html = "";
  
  if (type === "tip") {
    const item = tipsData.find(t => t.id === id);
    if (!item) return;
    modalLabel.textContent = `Guia Completo: ${item.title}`;
    
    let statsHtml = Object.entries(item.details.stats).map(([k, v]) => `
      <div class="modal-stat-card">
        <span>${k}</span>
        <strong>${v}</strong>
      </div>`).join("");
      
    let stepsHtml = item.details.steps.map(s => `<li>${s}</li>`).join("");
    
    html = `
      <p class="modal-body-desc">${item.details.intro}</p>
      <h6>Estatísticas do Guia</h6>
      <div class="modal-grid-stats">${statsHtml}</div>
      <h6>Passo a Passo & Estratégia</h6>
      <ul class="modal-bullet-list">${stepsHtml}</ul>`;
  } 
  else if (type === "release") {
    const item = releasesData.find(r => r.id === id);
    if (!item) return;
    modalLabel.textContent = `Lançamento: ${item.title}`;
    
    let featuresHtml = item.details.features.map(f => `<li>${f}</li>`).join("");
    
    html = `
      <div class="modal-badge-list">
        <span class="badge-tag">${item.genre}</span>
        <span class="badge-tag">${item.studio}</span>
        <span class="badge-tag">${item.date}</span>
      </div>
      <p class="modal-body-desc">${item.details.synopsis}</p>
      <h6>Recursos Destacados</h6>
      <ul class="modal-bullet-list">${featuresHtml}</ul>
      <div class="mt-4 p-3 rounded" style="background: rgba(37,99,235,0.06); border: 1px dashed rgba(37,99,235,0.3)">
        <p class="mb-0 text-center text-primary-light" style="font-size:0.9rem">
          <i class="bi bi-bell-fill"></i> Quer ser notificado quando ${item.title} lançar? Inscreva-se em nossa newsletter abaixo!
        </p>
      </div>`;
  } 
  else if (type === "recommendation") {
    const item = recommendationsData.find(g => g.id === id);
    if (!item) return;
    modalLabel.textContent = `Análise e Recomendações: ${item.title}`;
    
    let prosHtml = item.details.pros.map(p => `<li>${p}</li>`).join("");
    let consHtml = item.details.cons.map(c => `<li style="color:rgba(255,255,255,0.7)"><i class="bi bi-x-circle-fill text-danger me-2"></i> ${c}</li>`).join("");
    
    html = `
      <div class="modal-grid-stats">
        <div class="modal-stat-card">
          <span>Gênero</span>
          <strong>${item.genre}</strong>
        </div>
        <div class="modal-stat-card">
          <span>Nota Redação</span>
          <strong style="color:#f59e0b"><i class="bi bi-star-fill"></i> ${item.rating}/10</strong>
        </div>
        <div class="modal-stat-card">
          <span>Metacritic / Nota</span>
          <strong>${item.details.score}</strong>
        </div>
      </div>
      <p class="modal-body-desc">${item.details.synopsis}</p>
      <div class="row">
        <div class="col-md-6 mb-3">
          <h6 class="text-success"><i class="bi bi-plus-circle-fill me-1"></i> Pontos Positivos</h6>
          <ul class="modal-bullet-list" style="padding-left:0">${prosHtml}</ul>
        </div>
        <div class="col-md-6 mb-3">
          <h6 class="text-danger"><i class="bi bi-dash-circle-fill me-1"></i> Pontos Negativos</h6>
          <ul class="" style="list-style:none; padding-left:0">${consHtml}</ul>
        </div>
      </div>`;
  } 
  else if (type === "news") {
    const item = newsData.find(n => n.id === id);
    if (!item) return;
    modalLabel.textContent = `Notícia: ${item.title}`;
    
    let tagsHtml = item.details.tags.map(t => `<span class="badge-tag">#${t}</span>`).join(" ");
    
    html = `
      <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2 pb-2" style="border-bottom: 1px solid var(--border)">
        <span class="news-category">${item.cat}</span>
        <span style="font-size:0.8rem; color:var(--text-muted)">
          <i class="bi bi-person-fill"></i> Escrito por <strong>${item.details.author}</strong> em ${item.date}
        </span>
      </div>
      <p class="modal-body-desc" style="font-size:1.02rem; line-height:1.75; color: rgba(255,255,255,0.9)">${item.details.content}</p>
      <div class="mt-4">
        <h6>Tags Relacionadas</h6>
        <div class="d-flex gap-2 flex-wrap">${tagsHtml}</div>
      </div>`;
  }
  
  modalBody.innerHTML = html;
  
  // Show Bootstrap modal
  const myModal = new bootstrap.Modal(document.getElementById('gamerModal'));
  myModal.show();
}

/* ========== COMPREHENSIVE SEARCH ========== */
function buildSearchIndex() {
  allSearchable = [
    ...tipsData.map(t => ({ id: t.id, title: t.title, cat: t.cat, type: "tip", subtitle: "Dica de Jogo" })),
    ...releasesData.map(r => ({ id: r.id, title: r.title, cat: r.genre, type: "release", subtitle: "Lançamento Mais Aguardado" })),
    ...recommendationsData.map(g => ({ id: g.id, title: g.title, cat: g.genre, type: "recommendation", subtitle: "Recomendação da Redação" })),
    ...newsData.map(n => ({ id: n.id, title: n.title, cat: n.cat, type: "news", subtitle: "Notícia Quente" }))
  ];
}

function initSearch() {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  if (!input || !results) return;
  
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase().trim();
    if (q.length < 2) { 
      results.classList.remove("show"); 
      return; 
    }
    
    const matches = allSearchable.filter(i => 
      i.title.toLowerCase().includes(q) || 
      i.cat.toLowerCase().includes(q) || 
      i.subtitle.toLowerCase().includes(q)
    );
    
    if (!matches.length) { 
      results.innerHTML = `
        <div class="search-result-item py-3 text-center text-muted">
          <i class="bi bi-emoji-neutral me-1"></i> Nenhum resultado encontrado
        </div>`; 
      results.classList.add("show"); 
      return; 
    }
    
    results.innerHTML = matches.slice(0, 7).map(m => `
      <div class="search-result-item" data-type="${m.type}" data-id="${m.id}">
        <span class="result-title">${m.title}</span><br>
        <span class="result-cat"><i class="bi bi-bookmark-fill me-1"></i>${m.subtitle} - ${m.cat}</span>
      </div>`).join("");
      
    results.classList.add("show");
  });
  
  results.addEventListener("click", e => {
    const item = e.target.closest(".search-result-item");
    if (item && item.dataset.type) {
      const type = item.dataset.type;
      const id = parseInt(item.dataset.id);
      openDetailsModal(type, id);
      results.classList.remove("show");
      input.value = "";
    }
  });
  
  document.addEventListener("click", e => { 
    if (!e.target.closest(".search-box")) {
      results.classList.remove("show"); 
    }
  });
}

/* ========== NAVBAR SCROLL & ACTIVE TRACKING ========== */
function initNavbar() {
  const nav = document.getElementById("mainNav");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");
  if (!nav) return;
  
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
    
    let current = "";
    sections.forEach(s => { 
      if (window.scrollY >= s.offsetTop - 150) {
        current = s.id; 
      }
    });
    
    links.forEach(l => {
      l.classList.remove("active");
      if (l.getAttribute("href") === "#" + current) {
        l.classList.add("active");
      }
    });
  });
}

/* ========== BACK TO TOP ========== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  
  window.addEventListener("scroll", () => { 
    btn.classList.toggle("show", window.scrollY > 400); 
  });
  
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ========== SCROLL FADE-UP ANIMATIONS ========== */
function initScrollAnimations() {
  const els = document.querySelectorAll(".fade-up, .fade-left");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.classList.add("visible"); 
        observer.unobserve(e.target); 
      } 
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  
  els.forEach(el => { 
    if (!el.classList.contains("visible")) {
      observer.observe(el); 
    }
  });
}

/* ========== STATS COUNTERS ANIMATION ========== */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      let current = 0;
      const duration = 1200; // ms
      const steps = 50;
      const increment = target / steps;
      const interval = duration / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) { 
          el.textContent = target; 
          clearInterval(timer); 
        } else {
          el.textContent = Math.floor(current); 
        }
      }, interval);
      
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });
  
  counters.forEach(c => observer.observe(c));
}

/* ========== FORM VALIDATION ========== */
function initForms() {
  const contactForm = document.getElementById("contactForm");
  const newsForm = document.getElementById("newsletterForm");
  const toast = document.getElementById("toastSuccess");
  const toastMsg = document.getElementById("toastMessage");
  
  if (contactForm) {
    const fields = [
      { input: "contactName", error: "nameError", check: v => v.trim().length >= 2 },
      { input: "contactEmail", error: "emailError", check: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
      { input: "contactSubject", error: "subjectError", check: v => v.trim().length >= 3 },
      { input: "contactMessage", error: "messageError", check: v => v.trim().length >= 10 }
    ];
    
    // Real-time validation on typing
    fields.forEach(f => {
      const inp = document.getElementById(f.input);
      if (inp) {
        inp.addEventListener("input", () => {
          const err = document.getElementById(f.error);
          if (f.check(inp.value)) {
            inp.classList.remove("error");
            inp.classList.add("success");
            if (err) err.classList.remove("show");
          } else {
            inp.classList.remove("success");
            inp.classList.add("error");
            if (err) err.classList.add("show");
          }
        });
      }
    });
    
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;
      
      fields.forEach(f => {
        const inp = document.getElementById(f.input);
        const err = document.getElementById(f.error);
        if (!inp) return;
        
        if (f.check(inp.value)) { 
          inp.classList.remove("error"); 
          inp.classList.add("success"); 
          if (err) err.classList.remove("show"); 
        } else { 
          inp.classList.remove("success"); 
          inp.classList.add("error"); 
          if (err) err.classList.add("show"); 
          valid = false; 
        }
      });
      
      if (valid) {
        toastMsg.textContent = "Mensagem enviada com sucesso! Nossa redação entrará em contato em breve.";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 4000);
        contactForm.reset();
        
        // Remove validation classes
        fields.forEach(f => {
          const inp = document.getElementById(f.input);
          if (inp) inp.classList.remove("success", "error");
        });
      }
    });
  }
  
  if (newsForm) {
    newsForm.addEventListener("submit", e => {
      e.preventDefault();
      const input = newsForm.querySelector("input[type='email']");
      if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        toastMsg.textContent = "Inscrição realizada com sucesso! Prepare-se para receber novidades insanas.";
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 4000);
        newsForm.reset();
      }
    });
  }
}

/* ========== AUTOMATIC CURRENT YEAR ========== */
function setYear() { 
  const el = document.getElementById("currentYear");
  if (el) el.textContent = new Date().getFullYear(); 
}

/* ========== INITIALIZATION ========== */
document.addEventListener("DOMContentLoaded", () => {
  renderTips();
  renderReleases();
  renderFilterTabs();
  renderRecommendations("Todos");
  renderNews();
  buildSearchIndex();
  initSearch();
  initNavbar();
  initBackToTop();
  initScrollAnimations();
  initCounters();
  initForms();
  setYear();
});
