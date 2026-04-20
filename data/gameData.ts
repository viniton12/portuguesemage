// ─── MÓDULOS DE CONTEÚDO ────────────────────────────────────────────
export interface Modulo {
  id: string;
  titulo: string;
  emoji: string;
  cor: string;
  descricao: string;
  topicos: string[];
}

export const modulos: Modulo[] = [
  {
    id: "argumentacao",
    titulo: "Argumentação & Debate",
    emoji: "⚖️",
    cor: "#F59E0B",
    descricao: "Posicionamentos, defesa e refutação em textos polêmicos",
    topicos: ["Tese e antítese", "Argumentos de defesa", "Refutação de argumentos", "Textos de opinião"],
  },
  {
    id: "operadores",
    titulo: "Operadores Argumentativos",
    emoji: "🔗",
    cor: "#3B82F6",
    descricao: "Conectivos que orientam o sentido e a força dos argumentos",
    topicos: ["Adição e oposição", "Conclusão e causa", "Concessão e explicação", "Exemplificação"],
  },
  {
    id: "modificadores",
    titulo: "Modificadores & Sentido",
    emoji: "✨",
    cor: "#8B5CF6",
    descricao: "Como advérbios e adjetivos mudam o efeito de sentido no texto",
    topicos: ["Advérbios de intensidade", "Adjetivos avaliativos", "Efeito de atenuação", "Efeito de intensificação"],
  },
  {
    id: "termos",
    titulo: "Termos da Oração",
    emoji: "🏗️",
    cor: "#10B981",
    descricao: "Sujeito, predicado e seus complementos",
    topicos: ["Sujeito simples e composto", "Predicado verbal e nominal", "Objeto direto e indireto", "Regência verbal"],
  },
  {
    id: "adjetivos",
    titulo: "Adjuntos & Adjetivos",
    emoji: "🎨",
    cor: "#EC4899",
    descricao: "Artigos, adjetivos e expressões que enriquecem o texto",
    topicos: ["Adjunto adnominal", "Artigos definidos e indefinidos", "Locuções adjetivas", "Ordem dos adjetivos"],
  },
  {
    id: "porques",
    titulo: "Os Quatro Porquês",
    emoji: "❓",
    cor: "#EF4444",
    descricao: "Porque, por que, por quê e porquê — quando usar cada um",
    topicos: ["Porque (conjunção)", "Por que (pergunta/relativo)", "Por quê (fim de frase)", "Porquê (substantivo)"],
  },
  {
    id: "leitura",
    titulo: "Leitura & Seleção de Informações",
    emoji: "📰",
    cor: "#06B6D4",
    descricao: "Compreensão textual e seleção crítica de fontes eletrônicas",
    topicos: ["Ideia principal e secundária", "Inferência e implícitos", "Fontes confiáveis", "Fake news e checagem"],
  },
];

// ─── FLASHCARDS ──────────────────────────────────────────────────────
export interface Flashcard {
  id: string;
  moduloId: string;
  frente: string;
  verso: string;
  exemplo?: string;
  dica?: string;
  cor: string;
}

export const flashcards: Flashcard[] = [
  // OPERADORES
  { id: "f1", moduloId: "operadores", cor: "#3B82F6",
    frente: "Operadores de ADIÇÃO",
    verso: "Acrescentam informações na mesma direção argumentativa.",
    exemplo: "\"O texto é claro e, além disso, muito bem fundamentado.\"",
    dica: "Palavras: e, também, além disso, ademais, ainda, não só… mas também" },
  { id: "f2", moduloId: "operadores", cor: "#3B82F6",
    frente: "Operadores de OPOSIÇÃO",
    verso: "Introduzem um argumento contrário ao anterior.",
    exemplo: "\"O aluno estudou muito; no entanto, não foi bem na prova.\"",
    dica: "Palavras: mas, porém, contudo, todavia, entretanto, no entanto" },
  { id: "f3", moduloId: "operadores", cor: "#3B82F6",
    frente: "Operadores de CONCLUSÃO",
    verso: "Introduzem uma conclusão a partir dos argumentos anteriores.",
    exemplo: "\"Portanto, conclui-se que a leitura é essencial.\"",
    dica: "Palavras: portanto, logo, então, assim, por isso, consequentemente" },
  { id: "f4", moduloId: "operadores", cor: "#3B82F6",
    frente: "Operadores de CAUSA / EXPLICAÇÃO",
    verso: "Indicam motivo, razão ou explicação para algo dito.",
    exemplo: "\"Não fui à aula porque estava doente.\"",
    dica: "Palavras: porque, pois, já que, uma vez que, visto que" },
  { id: "f5", moduloId: "operadores", cor: "#3B82F6",
    frente: "Operadores de CONCESSÃO",
    verso: "Admitem algo antes de contrapor com o argumento principal.",
    exemplo: "\"Embora chova muito, o evento será realizado.\"",
    dica: "Palavras: embora, apesar de, ainda que, mesmo que, conquanto" },
  { id: "f6", moduloId: "operadores", cor: "#3B82F6",
    frente: "Operadores de EXEMPLIFICAÇÃO",
    verso: "Introduzem exemplos para ilustrar e reforçar um argumento.",
    exemplo: "\"Há muitos problemas ambientais, por exemplo, o desmatamento.\"",
    dica: "Palavras: por exemplo, como, tal como, isto é, ou seja" },
  // PORQUÊS
  { id: "f7", moduloId: "porques", cor: "#EF4444",
    frente: "PORQUE (junto, sem acento)",
    verso: "Conjunção causal ou explicativa. Responde a uma pergunta ou explica algo.",
    exemplo: "\"Fiquei em casa porque estava chovendo.\"",
    dica: "Substitua por 'pois' ou 'uma vez que'. Se funcionar, é PORQUE." },
  { id: "f8", moduloId: "porques", cor: "#EF4444",
    frente: "POR QUE (separado, sem acento)",
    verso: "Usado em perguntas diretas ou indiretas, e em orações relativas.",
    exemplo: "\"Por que você chegou tarde? / Não sei por que ele saiu.\"",
    dica: "Aparece em perguntas (diretas ou indiretas) ou pode ser substituído por 'pelo qual'." },
  { id: "f9", moduloId: "porques", cor: "#EF4444",
    frente: "POR QUÊ (separado, com acento)",
    verso: "Usado no final de frase ou antes de ponto, quando isolado.",
    exemplo: "\"Você foi embora, mas não disse por quê.\"",
    dica: "É a versão acentuada de 'por que' quando aparece no fim da frase ou isolado." },
  { id: "f10", moduloId: "porques", cor: "#EF4444",
    frente: "PORQUÊ (junto, com acento)",
    verso: "Substantivo. Equivale a 'o motivo', 'a razão'. Sempre acompanhado de artigo.",
    exemplo: "\"Quero entender o porquê da sua decisão.\"",
    dica: "Pode ser substituído por 'o motivo' ou 'a razão'. Sempre precedido de artigo (o, um)." },
  // MODIFICADORES
  { id: "f11", moduloId: "modificadores", cor: "#8B5CF6",
    frente: "Efeito de INTENSIFICAÇÃO",
    verso: "Modificadores que ampliam, exageram ou reforçam o sentido de uma palavra.",
    exemplo: "\"A situação é extremamente grave e totalmente inaceitável.\"",
    dica: "Advérbios: muito, extremamente, totalmente, absolutamente, completamente" },
  { id: "f12", moduloId: "modificadores", cor: "#8B5CF6",
    frente: "Efeito de ATENUAÇÃO",
    verso: "Modificadores que suavizam, diminuem ou relativizam o sentido.",
    exemplo: "\"O texto está um pouco desorganizado, mas é relativamente interessante.\"",
    dica: "Advérbios: um pouco, relativamente, meio, ligeiramente, certo, quase" },
  // TERMOS DA ORAÇÃO
  { id: "f13", moduloId: "termos", cor: "#10B981",
    frente: "OBJETO DIRETO",
    verso: "Complemento verbal sem preposição obrigatória. Responde 'O quê?' ou 'Quem?'",
    exemplo: "\"A professora explicou a matéria.\" → a matéria = OD",
    dica: "Verbos transitivos diretos: amar, ver, fazer, ter, querer, encontrar" },
  { id: "f14", moduloId: "termos", cor: "#10B981",
    frente: "OBJETO INDIRETO",
    verso: "Complemento verbal com preposição obrigatória. Responde 'A quem?' ou 'De quê?'",
    exemplo: "\"Ele gosta de literatura.\" → de literatura = OI",
    dica: "Verbos transitivos indiretos: gostar de, precisar de, obedecer a, depender de" },
  { id: "f15", moduloId: "termos", cor: "#10B981",
    frente: "ADJUNTO ADNOMINAL",
    verso: "Termo que modifica um substantivo, indicando qualidade, posse, quantidade ou determinação.",
    exemplo: "\"O livro velho da biblioteca foi encontrado.\"",
    dica: "Artigos, adjetivos, pronomes e locuções adjetivas exercem função de adjunto adnominal." },
];

// ─── QUIZ QUESTIONS ──────────────────────────────────────────────────
export interface QuizQuestion {
  id: string;
  moduloId: string;
  enunciado: string;
  contexto?: string;
  opcoes: string[];
  resposta: number;
  explicacao: string;
  dificuldade: "facil" | "medio" | "dificil";
}

export const quizPerguntas: QuizQuestion[] = [
  // PORQUÊS
  {
    id: "q1", moduloId: "porques", dificuldade: "facil",
    enunciado: "Assinale a alternativa com o uso CORRETO do 'porque':",
    opcoes: [
      "Não sei porque ele saiu tão cedo.",
      "Fiquei em casa porque estava doente.",
      "Você foi embora, mas não disse porque.",
      "Quero entender o porque da decisão.",
    ],
    resposta: 1,
    explicacao: "'Porque' junto e sem acento é conjunção causal/explicativa — pode ser substituído por 'pois'. Opção B está correta: 'Fiquei em casa pois estava doente' funciona perfeitamente.",
  },
  {
    id: "q2", moduloId: "porques", dificuldade: "facil",
    enunciado: "Complete: 'Você estudou, mas não disse _____ não foi à prova.'",
    opcoes: ["porque", "por que", "por quê", "porquê"],
    resposta: 1,
    explicacao: "'Por que' separado e sem acento aparece em perguntas indiretas. A frase equivale a: 'não disse o motivo pelo qual não foi à prova' — oração relativa com 'pelo qual'.",
  },
  {
    id: "q3", moduloId: "porques", dificuldade: "medio",
    enunciado: "Qual uso de 'porquê' está CORRETO?",
    opcoes: [
      "Não entendi porquê você saiu.",
      "Porquê você não veio ontem?",
      "Quero saber o porquê da sua ausência.",
      "Faltei porquê estava com febre.",
    ],
    resposta: 2,
    explicacao: "'Porquê' junto e com acento é SUBSTANTIVO, equivale a 'o motivo'. Só aparece precedido de artigo ou pronome: 'o porquê', 'um porquê'. Apenas a opção C está correta.",
  },
  {
    id: "q4", moduloId: "porques", dificuldade: "medio",
    enunciado: "Em 'Você foi embora sem explicar por quê', o uso está correto porque:",
    opcoes: [
      "Está no início de frase",
      "É conjunção causal",
      "Está no final da frase, isolado",
      "Acompanha um substantivo",
    ],
    resposta: 2,
    explicacao: "'Por quê' separado e com acento é usado quando aparece no final da frase ou quando está isolado (antes de ponto final, de interrogação ou de vírgula). É a versão acentuada de 'por que'.",
  },
  // OPERADORES
  {
    id: "q5", moduloId: "operadores", dificuldade: "facil",
    enunciado: "Qual operador argumentativo indica OPOSIÇÃO?",
    contexto: "O candidato apresentou boas propostas ___ não convenceu os eleitores.",
    opcoes: ["e também", "portanto", "mas", "porque"],
    resposta: 2,
    explicacao: "'Mas' é um operador de oposição/adversidade — introduz um argumento que contraria o anterior. 'O candidato apresentou boas propostas MAS não convenceu' cria contraste entre os dois fatos.",
  },
  {
    id: "q6", moduloId: "operadores", dificuldade: "facil",
    enunciado: "O conectivo 'portanto' indica:",
    opcoes: ["Adição de informações", "Oposição de ideias", "Conclusão lógica", "Concessão"],
    resposta: 2,
    explicacao: "'Portanto' é um operador de conclusão — introduz uma consequência ou dedução a partir do que foi dito anteriormente. 'Estudei bastante, portanto passei.' = conclusão natural.",
  },
  {
    id: "q7", moduloId: "operadores", dificuldade: "medio",
    enunciado: "Identifique o operador de CONCESSÃO na frase:",
    contexto: "Embora o texto seja longo, sua leitura é agradável.",
    opcoes: ["Embora", "seja", "longo", "agradável"],
    resposta: 0,
    explicacao: "'Embora' é conjunção concessiva — admite algo (o texto é longo) mas não permite que isso impeça a conclusão (a leitura é agradável). Outros exemplos: ainda que, mesmo que, apesar de.",
  },
  {
    id: "q8", moduloId: "operadores", dificuldade: "medio",
    enunciado: "Em qual alternativa o operador argumentativo está usado INCORRETAMENTE?",
    opcoes: [
      "Ele errou, portanto pediu desculpas.",
      "Não vim porque estava doente.",
      "O texto é bem escrito, mas é confuso.",
      "Estudei bastante, portanto não entendi nada.",
    ],
    resposta: 3,
    explicacao: "Na opção D, 'portanto' indica conclusão, mas a frase é contraditória: estudar bastante não leva à conclusão de 'não entender nada'. O operador correto seria 'mas' ou 'porém' (oposição).",
  },
  {
    id: "q9", moduloId: "operadores", dificuldade: "dificil",
    enunciado: "Qual par de operadores torna o texto MAIS PERSUASIVO em uma redação argumentativa?",
    contexto: "A educação é importante ___ transforma vidas. ___ ainda há muitos sem acesso a ela.",
    opcoes: [
      "porque / Porém",
      "mas / Então",
      "ou / Contudo",
      "pois / Logo",
    ],
    resposta: 0,
    explicacao: "'Porque' (causal) fortalece o argumento explicando o motivo, e 'Porém' (adversativo) cria contraste para introduzir o problema. Esta combinação é eficiente em textos dissertativo-argumentativos.",
  },
  // MODIFICADORES
  {
    id: "q10", moduloId: "modificadores", dificuldade: "facil",
    enunciado: "Qual frase apresenta um efeito de INTENSIFICAÇÃO?",
    opcoes: [
      "O problema é relativamente simples.",
      "A situação é extremamente grave.",
      "O texto está um pouco confuso.",
      "A proposta é razoavelmente boa.",
    ],
    resposta: 1,
    explicacao: "'Extremamente' é advérbio de intensidade que amplifica o adjetivo 'grave'. Já 'relativamente', 'um pouco' e 'razoavelmente' atenuam — diminuem ou relativizam o sentido do adjetivo.",
  },
  {
    id: "q11", moduloId: "modificadores", dificuldade: "medio",
    enunciado: "Como o modificador altera o sentido nas frases abaixo?",
    contexto: "A) 'O político mentiu.' / B) 'O político praticamente mentiu.'",
    opcoes: [
      "Não há diferença de sentido",
      "B atenua a acusação, tornando-a menos direta",
      "B intensifica a acusação",
      "B transforma a frase em pergunta",
    ],
    resposta: 1,
    explicacao: "'Praticamente' é advérbio de atenuação — suaviza a afirmação, criando uma zona de dúvida. O falante evita uma acusação direta. Esse recurso é muito usado em discursos políticos e jornalismo.",
  },
  {
    id: "q12", moduloId: "modificadores", dificuldade: "dificil",
    enunciado: "Em qual contexto o modificador tem função ARGUMENTATIVA importante?",
    contexto: "Defesa: 'O réu apenas estava no local.' / Acusação: 'O réu estava exatamente no local.'",
    opcoes: [
      "Os advérbios não têm função argumentativa",
      "'Apenas' defende; 'exatamente' acusa — os modificadores direcionam o argumento",
      "Ambos os advérbios têm o mesmo efeito de sentido",
      "Só 'exatamente' muda o sentido da frase",
    ],
    resposta: 1,
    explicacao: "Modificadores têm poder argumentativo decisivo. 'Apenas' minimiza a presença do réu; 'exatamente' reforça e confirma. A escolha do advérbio revela a posição do falante — recurso central em textos de opinião.",
  },
  // TERMOS DA ORAÇÃO
  {
    id: "q13", moduloId: "termos", dificuldade: "facil",
    enunciado: "Identifique o OBJETO DIRETO na frase:",
    contexto: "\"A professora entregou os trabalhos corrigidos.\"",
    opcoes: ["A professora", "entregou", "os trabalhos corrigidos", "corrigidos"],
    resposta: 2,
    explicacao: "'Os trabalhos corrigidos' é objeto direto — complemento do verbo 'entregou' sem preposição. Responde à pergunta: a professora entregou O QUÊ? → os trabalhos corrigidos.",
  },
  {
    id: "q14", moduloId: "termos", dificuldade: "medio",
    enunciado: "Qual frase contém OBJETO INDIRETO?",
    opcoes: [
      "O aluno leu o livro inteiro.",
      "Maria comprou um caderno novo.",
      "Ele gosta de poesia moderna.",
      "A turma assistiu ao filme.",
    ],
    resposta: 2,
    explicacao: "Em 'Ele gosta de poesia moderna', 'de poesia moderna' é objeto indireto — o verbo 'gostar' é transitivo indireto e exige a preposição 'de'. Responde: gosta DE QUÊ? → de poesia moderna.",
  },
  {
    id: "q15", moduloId: "termos", dificuldade: "medio",
    enunciado: "Qual é o SUJEITO da oração: 'Foram encontradas várias inconsistências no relatório.'?",
    opcoes: [
      "no relatório",
      "Foram encontradas",
      "várias inconsistências",
      "A oração não tem sujeito",
    ],
    resposta: 2,
    explicacao: "'Várias inconsistências' é o sujeito — o verbo 'foram encontradas' concorda com ele (plural). É sujeito simples paciente: não pratica a ação, mas a recebe. Trata-se de uma voz passiva analítica.",
  },
  {
    id: "q16", moduloId: "termos", dificuldade: "dificil",
    enunciado: "Sobre regência verbal, qual alternativa está CORRETA?",
    opcoes: [
      "Obedeça as regras do jogo.",
      "Prefiro sair do que ficar.",
      "O médico assistiu o paciente.",
      "Ela aspirava ao cargo de diretora.",
    ],
    resposta: 3,
    explicacao: "'Aspirar a' (desejar algo) é verbo transitivo indireto — exige a preposição 'a'. As outras estão erradas: 'obedecer a' (não obedecer), 'preferir a' (não 'do que'), 'assistir a' (não assistiu O paciente).",
  },
  // ADJUNTOS E ADJETIVOS
  {
    id: "q17", moduloId: "adjetivos", dificuldade: "facil",
    enunciado: "Qual alternativa apresenta um ADJUNTO ADNOMINAL?",
    contexto: "Analise: \"O jovem estudante de medicina aprovou no concurso.\"",
    opcoes: [
      "aprovou",
      "no concurso",
      "O jovem estudante de medicina",
      "O jovem / de medicina",
    ],
    resposta: 3,
    explicacao: "'O' (artigo definido), 'jovem' (adjetivo) e 'de medicina' (locução adjetiva) são adjuntos adnominais — todos modificam o substantivo 'estudante', determinando-o e qualificando-o.",
  },
  {
    id: "q18", moduloId: "adjetivos", dificuldade: "medio",
    enunciado: "Como os adjetivos enriquecem o texto argumentativo?",
    opcoes: [
      "Não têm função argumentativa",
      "Apenas embelezam o texto",
      "Qualificam e avaliam, revelando o ponto de vista do autor",
      "Substituem os verbos na frase",
    ],
    resposta: 2,
    explicacao: "Adjetivos avaliativos (injusto, absurdo, urgente, essencial) revelam o posicionamento do autor e direcionam o leitor. 'Uma medida urgente e necessária' constrói argumento diferente de 'uma medida polêmica'.",
  },
  // ARGUMENTAÇÃO
  {
    id: "q19", moduloId: "argumentacao", dificuldade: "medio",
    enunciado: "O que caracteriza uma REFUTAÇÃO eficaz em um debate?",
    opcoes: [
      "Ignorar o argumento do oponente",
      "Apresentar dados que contradizem o argumento do oponente com base em evidências",
      "Repetir o próprio argumento mais alto",
      "Atacar a personalidade do oponente",
    ],
    resposta: 1,
    explicacao: "Refutar é contestar o argumento do oponente com contra-argumentos embasados em fatos, dados ou lógica. Atacar a pessoa (ad hominem) ou ignorar o argumento são falácias — estratégias desonestas no debate.",
  },
  {
    id: "q20", moduloId: "argumentacao", dificuldade: "dificil",
    enunciado: "Ao selecionar informações eletrônicas para uma pesquisa, qual critério é MAIS CONFIÁVEL?",
    opcoes: [
      "O site com mais curtidas nas redes sociais",
      "O primeiro resultado do Google",
      "Fonte com autoria identificada, data e referências verificáveis",
      "Sites com design mais moderno",
    ],
    resposta: 2,
    explicacao: "Fontes confiáveis têm autoria clara, data de publicação, referências verificáveis e são vinculadas a instituições reconhecidas (universidades, órgãos oficiais, revistas científicas). Curtidas e ranking no Google não garantem credibilidade.",
  },
  // LEITURA
  {
    id: "q21", moduloId: "leitura", dificuldade: "medio",
    enunciado: "Qual habilidade de leitura é usada quando você entende algo que NÃO está escrito diretamente no texto?",
    opcoes: ["Decodificação", "Inferência", "Paráfrase", "Memorização"],
    resposta: 1,
    explicacao: "Inferência é a capacidade de compreender informações implícitas — o que o texto sugere sem dizer diretamente. É uma habilidade essencial avaliada no ENEM e em provas de interpretação textual.",
  },
  {
    id: "q22", moduloId: "leitura", dificuldade: "dificil",
    enunciado: "O que diferencia a ideia PRINCIPAL das ideias SECUNDÁRIAS num texto?",
    opcoes: [
      "A ideia principal está sempre no primeiro parágrafo",
      "A ideia principal é a mais longa do texto",
      "A ideia principal é aquela que sustenta toda a argumentação; as secundárias a desenvolvem e exemplificam",
      "Não há diferença — todas as ideias têm o mesmo peso",
    ],
    resposta: 2,
    explicacao: "A ideia principal (tese) é o argumento central que o texto defende. As ideias secundárias são argumentos de apoio, exemplos, dados e explicações que desenvolvem e fortalecem a tese. Identificá-las é essencial para resumir e interpretar textos.",
  },
];

// ─── DEBATE: SITUAÇÕES POLÊMICAS ─────────────────────────────────────
export interface SituacaoDebate {
  id: string;
  tema: string;
  emoji: string;
  cor: string;
  contexto: string;
  tese: string;
  antitese: string;
  argumentosFavor: string[];
  argumentosContra: string[];
  operadoresUsados: string[];
  reflexao: string;
}

export const situacoesDebate: SituacaoDebate[] = [
  {
    id: "d1",
    tema: "Uso de celular na sala de aula",
    emoji: "📱",
    cor: "#F59E0B",
    contexto: "Uma escola está debatendo se deve ou não proibir o uso de celulares durante as aulas. Alunos, professores e pais têm opiniões divergentes.",
    tese: "O celular deve ser proibido na sala de aula.",
    antitese: "O celular pode ser uma ferramenta pedagógica valiosa.",
    argumentosFavor: [
      "Reduz a distração e aumenta o foco dos alunos",
      "Evita o uso de redes sociais durante explicações",
      "Contribui para um ambiente de aprendizagem mais disciplinado",
      "Pesquisas mostram aumento no desempenho após a proibição",
    ],
    argumentosContra: [
      "Pode ser usado para pesquisas e acesso a conteúdo educacional",
      "Prepara os alunos para o mundo digital",
      "Proibir não ensina o uso responsável da tecnologia",
      "Aplicativos educacionais tornam o aprendizado mais dinâmico",
    ],
    operadoresUsados: ["portanto", "no entanto", "além disso", "embora"],
    reflexao: "A questão não é apenas proibir ou permitir, mas como criar regras que equilibrem foco e aprendizado com as tecnologias do mundo atual.",
  },
  {
    id: "d2",
    tema: "Redes sociais e fake news",
    emoji: "📰",
    cor: "#EF4444",
    contexto: "Com a proliferação de notícias falsas, discute-se se as plataformas digitais devem ser responsabilizadas pelo conteúdo publicado pelos usuários.",
    tese: "As plataformas digitais devem ser responsáveis por combater fake news.",
    antitese: "Responsabilizar plataformas pode restringir a liberdade de expressão.",
    argumentosFavor: [
      "Fake news causam danos reais à saúde e à democracia",
      "As plataformas lucram com o engajamento, inclusive de conteúdos falsos",
      "Empresas têm recursos para desenvolver mecanismos de verificação",
      "Outros países já regulamentam isso com resultados positivos",
    ],
    argumentosContra: [
      "É difícil definir o que é 'falso' sem censura",
      "Pode abrir espaço para controle de narrativas pelo Estado",
      "A responsabilidade deve ser do usuário que cria e compartilha",
      "Algoritmos de moderação cometem erros e removem conteúdo legítimo",
    ],
    operadoresUsados: ["visto que", "contudo", "por exemplo", "ainda que"],
    reflexao: "O combate às fake news exige um equilíbrio delicado entre responsabilidade das plataformas, educação midiática dos usuários e proteção à liberdade de expressão.",
  },
  {
    id: "d3",
    tema: "Redução da maioridade penal",
    emoji: "⚖️",
    cor: "#8B5CF6",
    contexto: "O debate sobre reduzir a maioridade penal de 18 para 16 anos mobiliza juristas, educadores e a sociedade há décadas no Brasil.",
    tese: "A maioridade penal deve ser reduzida para 16 anos.",
    antitese: "Reduzir a maioridade penal não resolve o problema da violência juvenil.",
    argumentosFavor: [
      "Jovens de 16 anos têm capacidade de entender as consequências dos atos",
      "Aos 16 anos o brasileiro já pode votar",
      "Penas mais severas podem ter efeito dissuasório",
      "Vítimas merecem justiça independentemente da idade do autor",
    ],
    argumentosContra: [
      "O sistema carcerário brasileiro não recupera — piora o infrator",
      "A Constituição classifica como cláusula pétrea — não pode ser alterada",
      "Jovens são frequentemente cooptados pelo crime por vulnerabilidade social",
      "Países que reduziram não registraram queda na criminalidade juvenil",
    ],
    operadoresUsados: ["embora", "portanto", "além disso", "no entanto"],
    reflexao: "A redução da maioridade é uma questão constitucional, social e criminológica complexa. Argumentos precisam ser embasados em dados e não apenas em emoção.",
  },
];

// ─── EXERCÍCIOS DE TEXTO ─────────────────────────────────────────────
export interface ExercicioTexto {
  id: string;
  moduloId: string;
  titulo: string;
  texto: string;
  pergunta: string;
  opcoes: string[];
  resposta: number;
  explicacao: string;
}

export const exerciciosTexto: ExercicioTexto[] = [
  {
    id: "t1", moduloId: "leitura",
    titulo: "Leia o texto e responda",
    texto: "\"A leitura é, antes de tudo, um ato de resistência. Em um mundo de imagens instantâneas e informações fragmentadas, dedicar tempo a um livro é uma forma de aprofundar o pensamento e ampliar horizontes. Não por acaso, sociedades que incentivam a leitura tendem a apresentar melhores índices de desenvolvimento humano.\"",
    pergunta: "Qual é a tese defendida pelo autor?",
    opcoes: [
      "A leitura é difícil e demorada.",
      "A leitura é um ato de resistência que aprofunda o pensamento e se relaciona com o desenvolvimento humano.",
      "Sociedades desenvolvidas não precisam de leitura.",
      "Imagens são melhores que textos escritos.",
    ],
    resposta: 1,
    explicacao: "A tese está expressa logo no início ('a leitura é um ato de resistência') e é desenvolvida com argumentos sobre aprofundamento do pensamento e dados sobre desenvolvimento humano. Os demais parágrafos são argumentos de apoio.",
  },
  {
    id: "t2", moduloId: "argumentacao",
    titulo: "Analise o argumento",
    texto: "\"Você não pode falar sobre educação porque nunca foi professor. Sua opinião não vale nada sobre esse assunto.\"",
    pergunta: "Esse argumento é um exemplo de:",
    opcoes: [
      "Argumento por autoridade",
      "Argumento de dados estatísticos",
      "Falácia ad hominem — ataque à pessoa, não ao argumento",
      "Argumento por analogia",
    ],
    resposta: 2,
    explicacao: "Ad hominem é uma falácia que ataca a pessoa (sua falta de experiência como professor) em vez de refutar o argumento. Qualquer pessoa pode ter argumentos válidos sobre educação, independente de ser professor ou não.",
  },
  {
    id: "t3", moduloId: "operadores",
    titulo: "Complete o texto argumentativo",
    texto: "\"A tecnologia trouxe avanços inegáveis para a medicina. ___, ela também gerou novos riscos, como a dependência de sistemas digitais em cirurgias. ___ é fundamental equilibrar inovação e segurança.\"",
    pergunta: "Qual par de operadores completa corretamente as lacunas?",
    opcoes: [
      "Portanto / Porque",
      "No entanto / Por isso",
      "Além disso / Embora",
      "Ou seja / Ainda que",
    ],
    resposta: 1,
    explicacao: "'No entanto' introduz oposição (a tecnologia trouxe avanços MAS também trouxe riscos). 'Por isso' introduz conclusão (há riscos, PORTANTO é fundamental o equilíbrio). Essa combinação oposição→conclusão é clássica em dissertações.",
  },
];

// ─── BADGES ──────────────────────────────────────────────────────────
export const badges = [
  { id: "primeiro-acerto", nome: "Primeira Palavra!", emoji: "✍️", descricao: "Acertou a primeira questão do quiz" },
  { id: "quiz-70", nome: "Leitor Crítico", emoji: "📖", descricao: "Completou o quiz com 70% de acertos" },
  { id: "quiz-90", nome: "Mestre do Texto", emoji: "🏆", descricao: "Completou o quiz com 90% de acertos" },
  { id: "porques-ok", nome: "Sem Confusão!", emoji: "❓", descricao: "Acertou todas as questões dos Porquês" },
  { id: "operadores-ok", nome: "Conector de Ideias", emoji: "🔗", descricao: "Acertou todas as questões de Operadores" },
  { id: "debate-explorador", nome: "Debatedor", emoji: "⚖️", descricao: "Explorou todos os temas de debate" },
  { id: "flashcard-all", nome: "Gramático", emoji: "📚", descricao: "Revisou todos os flashcards" },
  { id: "texto-ok", nome: "Intérprete", emoji: "🔍", descricao: "Acertou todos os exercícios de texto" },
];
