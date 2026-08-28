import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5502);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

const FISHING_GUIDE = [
  {
    id: "superficie",
    terms: ["superficie", "superfície", "topwater", "boia", "boia pao", "cevadeira", "anteninha", "palminho"],
    title: "PESCA DE SUPERFÍCIE",
    text: "Trabalhe a isca na lâmina d'água quando houver atividade, insetos, frutos, ração ou peixes caçando. Procure estruturas, sombra, margens com alimento e pontos de água oxigenada. Faça apresentações discretas e observe o momento em que o peixe carrega a isca antes de fisgar."
  },
  {
    id: "boias",
    terms: ["boia", "boia pao", "cevadeira", "torpedo", "anteninha", "palminho"],
    title: "BOIAS E MONTAGENS",
    text: "Boia cevadeira lança ração e trabalha anteninha, EVA ou miçanga na superfície; boia torpedo ajuda em arremessos longos; boia-pão apresenta pão na superfície; palminho usa ração artificial, EVA ou miçangas. Regule o chicote conforme a profundidade, o vento e a atividade do peixe, sempre respeitando as regras do local."
  },
  {
    id: "chumbo",
    terms: ["chumbo", "chumbada", "chumbadas", "chumbos", "peso", "fundo", "pesca de fundo"],
    title: "CHUMBO E PESCA DE FUNDO",
    text: "Use apenas o peso necessário para manter a isca no ponto. Chumbo de correr deixa o peixe sentir menos resistência; chumbada fixa mantém a montagem em posição; oliva e gota funcionam em situações diferentes de corrente e fundo. Observe pedras, galhadas, areia, lama, profundidade e corrente, evitando peso excessivo que prende ou afunda demais a isca."
  },
  {
    id: "sistemas",
    terms: ["sistema", "sistemas", "montagem", "montagens", "chicote", "anzol", "corrico", "trolling", "pincho", "fly", "rodada"],
    title: "SISTEMAS DE PESCA",
    text: "Escolha o sistema pela espécie, profundidade, corrente e estrutura: fundo com chumbo para manter a isca no leito; boia para superfície e meia-água; arremesso ou pincho para predadores junto de estruturas; corrico para cobrir áreas abertas; rodada para apresentar isca na corrente; fly para uma apresentação leve. Ajuste vara, linha, líder, anzol e freio ao tamanho do peixe."
  },
  {
    id: "agua-doce",
    terms: ["agua doce", "rio", "represa", "lago", "lagoa", "doce"],
    title: "PESCA EM ÁGUA DOCE",
    text: "Em rios, leia correnteza, remansos, poços, entradas de afluentes, galhadas e barrancos. Em represas e lagos, procure estruturas submersas, drop-offs, vegetação e áreas de alimentação. Predadores respondem a iscas artificiais em estruturas; peixes de couro costumam ser procurados em poços e no fundo."
  },
  {
    id: "mar",
    terms: ["agua salgada", "mar", "praia", "oceano", "costao", "mangue", "estuario", "maré", "mare"],
    title: "PESCA DE MAR",
    text: "No mar, combine maré, vento, corrente, transparência da água e estrutura. Na praia, observe valas, canais e ondas quebrando; em costões, pesque bordas e espumas com segurança; em mangues e estuários, procure canais, galhadas e mudanças de corrente. Use equipamento, anzol e líder compatíveis com salinidade e força da espécie."
  },
  {
    id: "pesqueiro",
    terms: ["pesqueiro", "pesque-pague", "pesque pague", "ceva", "racao", "ração"],
    title: "PESCA EM PESQUEIRO",
    text: "Leia o regulamento do pesqueiro antes de montar. Tambaqui, pacu e híbridos podem responder a massa, milho, frutas, ração, salsicha e montagens de superfície; peixes de couro costumam ser procurados no fundo com isca natural. A profundidade e o ponto da ceva mudam ao longo do dia, então teste superfície, meia-água e fundo."
  },
  {
    id: "artificiais",
    terms: ["artificial", "artificiais", "plug", "plugs", "jig", "jigs", "spinner", "colher", "minnow", "shad", "soft", "isca artificial"],
    title: "ISCAS ARTIFICIAIS",
    text: "Use plugs de superfície quando houver peixe caçando acima; meia-água para cobrir a coluna; crankbaits para explorar profundidade; jigs e shads perto do fundo; spinners e colheres para brilho e vibração; soft baits quando for preciso uma apresentação natural. Varie velocidade, pausas, cor, tamanho e profundidade até identificar o padrão do dia."
  },
  {
    id: "naturais",
    terms: ["isca", "iscas", "minhoca", "lambari", "massa", "milho", "fruta", "camarao", "camarão", "tuvira"],
    title: "ISCAS NATURAIS",
    text: "Iscas naturais devem combinar com a alimentação da espécie e com o ambiente. Minhoca e massa são versáteis em água doce; milho, frutas e ração funcionam para espécies onívoras; lambari, tuvira, camarão e filé atendem predadores e peixes de fundo. Conserve a isca fresca, use anzol proporcional e verifique se a isca viva é permitida."
  },
  {
    id: "seguranca",
    terms: ["seguranca", "segurança", "regra", "regras", "defeso", "licenca", "licença", "legal", "proibido"],
    title: "SEGURANÇA E REGRAS",
    text: "Consulte licença, período de defeso, tamanho mínimo, limite de captura e espécies protegidas na autoridade ambiental da região. Use colete em embarcação, não pesque durante tempestades e manuseie anzóis, garatéias e peixes grandes com equipamento adequado. Priorize pesque e solte responsável quando aplicável."
  }
];

function sendJson(response, status, body) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  response.end(JSON.stringify(body));
}

async function readBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 20000) throw new Error("Pergunta muito longa.");
  }
  return JSON.parse(body || "{}");
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "FISHDEx/1.0 (pesquisa educativa de pesca)" }
  });
  if (!response.ok) throw new Error(`Fonte indisponível: ${response.status}`);
  return response.json();
}

function cleanText(value, maxLength = 900) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function getFishingGuide(question) {
  const normalized = String(question || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const selected = FISHING_GUIDE.filter(topic => topic.terms.some(term => normalized.includes(term.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))));
  return selected.length ? selected : FISHING_GUIDE.filter(topic => ["agua-doce", "artificiais", "naturais"].includes(topic.id));
}

const SEARCH_KEYWORDS = {
  isca: ["isca", "iscas", "bait", "minhoca", "lambari", "massa", "milho", "fruta", "camarao", "tuvira"],
  artificial: ["artificial", "artificiais", "plug", "jig", "spinner", "colher", "minnow", "shad", "crankbait", "soft bait"],
  chumbo: ["chumbo", "chumbada", "chumbadas", "chumbos", "peso", "oliva", "gota"],
  boia: ["boia", "boia pao", "cevadeira", "torpedo", "anteninha", "palminho"],
  superficie: ["superficie", "topwater", "lambari na superficie"],
  fundo: ["fundo", "pesca de fundo", "leito", "profundidade"],
  sistema: ["sistema", "sistemas", "montagem", "montagens", "chicote", "corrico", "trolling", "pincho", "fly", "rodada"],
  aguaDoce: ["agua doce", "rio", "represa", "lago", "lagoa", "ribeirao"],
  mar: ["agua salgada", "mar", "praia", "oceano", "costao", "mangue", "estuario", "mare"],
  pesqueiro: ["pesqueiro", "pesque pague", "pesque-pague", "ceva", "racao"],
  habitat: ["habitat", "onde vive", "onde encontrar", "local", "regiao", "ocorrencia"],
  biologia: ["alimentacao", "come", "comportamento", "tamanho", "comprimento", "peso", "epoca", "reproducao"]
};

function normalizeSearchText(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function findSearchKeywords(question) {
  const normalized = normalizeSearchText(question);
  return Object.entries(SEARCH_KEYWORDS)
    .filter(([, terms]) => terms.some(term => normalized.includes(normalizeSearchText(term))))
    .map(([keyword]) => keyword);
}

function getKeywordQueries(question, fish) {
  const normalized = normalizeSearchText(question);
  const keywords = findSearchKeywords(question);
  const species = fish?.nomeCientifico || fish?.nome;
  const queries = [];
  const add = query => { if (query && !queries.includes(query)) queries.push(query); };
  if (species) add(species);
  const queryMap = {
    isca: "iscas pesca peixe",
    artificial: "iscas artificiais pesca",
    chumbo: "chumbada chumbo pesca",
    boia: "boias montagem pesca",
    superficie: "pesca de superficie",
    fundo: "pesca de fundo",
    sistema: "sistemas montagem pesca",
    aguaDoce: "pesca agua doce rios lagos",
    mar: "pesca mar praia estuario",
    pesqueiro: "pesca pesqueiro ceva",
    habitat: "habitat distribuicao peixes",
    biologia: "biologia comportamento peixes"
  };
  keywords.forEach(keyword => add(queryMap[keyword]));
  if (!keywords.length) add(normalized);
  return queries.slice(0, 8);
}

function uniqueByUrl(results) {
  return [...new Map(results.filter(result => result?.url).map(result => [result.url, result])).values()];
}

function getSearchQueries(question, fish) {
  const stopWords = new Set([
    "a", "as", "o", "os", "um", "uma", "uns", "umas", "de", "da", "do", "das", "dos",
    "e", "ou", "em", "no", "na", "nos", "nas", "para", "por", "com", "que", "qual",
    "quais", "como", "onde", "quando", "posso", "melhor", "usar", "pescar", "pesca"
  ]);
  const topic = cleanText(question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ").split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word)).slice(0, 6).join(" "));
  const species = fish?.nomeCientifico || fish?.nome;
  const queries = [
    species,
    species ? `${species} peixe` : null,
    topic ? `${topic} pesca` : question,
    topic ? `${topic} pesca esportiva` : null,
    question.toLowerCase().includes("isca") ? "isca pesca peixe" : null,
    question.toLowerCase().includes("fundo") ? "pesca de fundo" : null,
    question.toLowerCase().includes("boia") ? "boia pesca" : null,
    question.toLowerCase().includes("habitat") || question.toLowerCase().includes("vive") ? "habitat peixes" : null,
    "pesca esportiva"
  ];
  return [...new Set(queries.filter(Boolean))].slice(0, 6);
}

async function searchWikipedia(query, language) {
  const params = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: query,
    srlimit: "3",
    format: "json",
    origin: "*"
  });
  const data = await fetchJson(`https://${language}.wikipedia.org/w/api.php?${params}`);
  return (data.query?.search || []).map(result => ({
    pageid: result.pageid,
    title: result.title,
    snippet: cleanText(result.snippet.replace(/<[^>]+>/g, "")),
    url: `https://${language}.wikipedia.org/wiki/${encodeURIComponent(result.title.replace(/ /g, "_"))}`
  }));
}

async function enrichWikipediaResult(result, language) {
  const params = new URLSearchParams({
    action: "query",
    pageids: String(result.pageid),
    prop: "extracts",
    explaintext: "1",
    exintro: "1",
    exchars: "1400",
    format: "json",
    origin: "*"
  });
  const data = await fetchJson(`https://${language}.wikipedia.org/w/api.php?${params}`);
  const page = data.query?.pages?.[result.pageid];
  return { ...result, extract: cleanText(page?.extract, 1400) };
}

async function fetchWikipediaSummary(title, language) {
  const encodedTitle = encodeURIComponent(title.replace(/ /g, "_"));
  const data = await fetchJson(`https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodedTitle}`);
  if (data.type === "https://mediawiki.org/wiki/HyperSwitch/errors/not_found" || !data.extract) return null;
  return {
    title: data.title || title,
    snippet: cleanText(data.extract, 1400),
    extract: cleanText(data.extract, 1400),
    url: data.content_urls?.desktop?.page || `https://${language}.wikipedia.org/wiki/${encodedTitle}`
  };
}

async function findGbifSpecies(name) {
  if (!name) return null;
  const params = new URLSearchParams({ name, rank: "SPECIES", limit: "1" });
  const data = await fetchJson(`https://api.gbif.org/v1/species/match?${params}`);
  const match = data.matchType === "NONE" ? null : data;
  if (!match) return null;
  return {
    scientificName: match.scientificName,
    canonicalName: match.canonicalName,
    kingdom: match.kingdom,
    family: match.family,
    order: match.order,
    status: match.status,
    key: match.usageKey,
    url: `https://www.gbif.org/species/${match.usageKey}`
  };
}

function formatCatalogContext(fish) {
  if (!fish) return "Nenhuma espécie foi identificada no catálogo local.";
  const fields = [
    ["Espécie", fish.nome], ["Nome científico", fish.nomeCientifico],
    ["Habitat", fish.habitat], ["Região", fish.regiao],
    ["Alimentação", fish.alimentacao], ["Tamanho médio", fish.tamanhoMedio],
    ["Peso médio", fish.pesoMedio], ["Iscas naturais", fish.iscas?.naturais?.join(", ")],
    ["Iscas artificiais", fish.iscas?.artificiais?.join(", ")],
    ["Técnicas", fish.tecnicasPesca], ["Melhor época", fish.melhorEpoca],
    ["Descrição", fish.descricao]
  ];
  return fields.filter(([, value]) => value).map(([label, value]) => `${label}: ${cleanText(value, 500)}`).join("\n");
}

function buildFactualAnswer(question, fish, wikiResults, gbif) {
  const sections = [];
  const keywords = findSearchKeywords(question);
  if (keywords.length) sections.push(`PALAVRAS-CHAVE IDENTIFICADAS\n${keywords.join(", ")}`);
  const guide = getFishingGuide(question);
  sections.push(`GUIA TÉCNICO FISHDEx\n${guide.map(topic => `${topic.title}: ${topic.text}`).join("\n\n")}`);
  if (fish) {
    sections.push(`DADOS TÉCNICOS DO CATÁLOGO FISHDEx\n${formatCatalogContext(fish)}`);
  }
  if (gbif) {
    sections.push(`TAXONOMIA E OCORRÊNCIA (GBIF)\nNome reconhecido: ${gbif.canonicalName || gbif.scientificName}\nFamília: ${gbif.family || "não informado"}\nOrdem: ${gbif.order || "não informado"}\nReino: ${gbif.kingdom || "não informado"}`);
  }
  const snippets = wikiResults.filter(result => result.extract || result.snippet).slice(0, 8);
  if (snippets.length) {
    sections.push(`INFORMAÇÕES ENCONTRADAS NA INTERNET\n${snippets.map(result => `• ${result.title}: ${result.extract || result.snippet}`).join("\n")}`);
  }
  if (!sections.length) {
    return `Não encontrei informação factual suficiente para “${question}”. Tente informar o nome da espécie, região ou técnica de pesca.`;
  }
  sections.push("\nOs dados técnicos do catálogo são apresentados separadamente das fontes online. Recomendações de captura, tamanhos mínimos e períodos de defeso dependem da região: consulte a autoridade ambiental antes de pescar.");
  sections.push(`FONTES\n${[...wikiResults.slice(0, 6).map(result => `${result.title}: ${result.url}`), gbif?.url].filter(Boolean).join("\n")}`);
  return sections.join("\n\n");
}

async function handleChat(request, response) {
  let payload;
  try {
    payload = await readBody(request);
  } catch {
    return sendJson(response, 400, { error: "JSON inválido." });
  }

  const question = String(payload.question || "").trim();
  if (!question) return sendJson(response, 400, { error: "Pergunta vazia." });

  const fish = payload.fishContext && typeof payload.fishContext === "object" ? payload.fishContext : null;
  const queries = [...new Set([...getKeywordQueries(question, fish), ...getSearchQueries(question, fish)])].slice(0, 8);
  const directTitles = [...new Set([
    fish?.nome,
    fish?.nomeCientifico,
    question.toLowerCase().includes("pesca") ? "Pesca esportiva" : null,
    question.toLowerCase().includes("isca") ? "Isca" : null,
    question.toLowerCase().includes("fundo") ? "Pesca" : null,
    question.toLowerCase().includes("chumb") ? "Chumbada pesca" : null,
    question.toLowerCase().includes("sistema") || question.toLowerCase().includes("montagem") ? "Sistema de pesca" : null
  ].filter(Boolean))];
  const [wikiSearches, gbif] = await Promise.all([
    Promise.allSettled(queries.flatMap(query => [searchWikipedia(query, "pt"), searchWikipedia(query, "en")])),
    findGbifSpecies(fish?.nomeCientifico || fish?.nome).catch(() => null)
  ]);
  const wikiResults = uniqueByUrl(wikiSearches
    .filter(result => result.status === "fulfilled")
    .flatMap(result => result.value));
  const directResults = (await Promise.allSettled(
    directTitles.flatMap(title => [fetchWikipediaSummary(title, "pt"), fetchWikipediaSummary(title, "en")])
  )).filter(result => result.status === "fulfilled").map(result => result.value).filter(Boolean);
  const combinedResults = uniqueByUrl([...directResults, ...wikiResults]);
  const enrichedResults = (await Promise.allSettled(
    combinedResults.slice(0, 8).filter(result => !result.extract).map(result => enrichWikipediaResult(result, result.url.includes("pt.wikipedia") ? "pt" : "en"))
  )).filter(result => result.status === "fulfilled").map(result => result.value);
  const answerResults = uniqueByUrl([...combinedResults.filter(result => result.extract), ...enrichedResults]);
  return sendJson(response, 200, {
    answer: buildFactualAnswer(question, fish, answerResults, gbif),
    generated: false,
    keywords: findSearchKeywords(question),
    sources: [...answerResults.map(result => result.url), gbif?.url].filter(Boolean)
  });
}

async function serveStatic(request, response, pathname) {
  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(__dirname, `.${requestedPath}`);
  if (!filePath.startsWith(__dirname)) return sendJson(response, 403, { error: "Acesso negado." });

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": contentTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    response.end(file);
  } catch {
    sendJson(response, 404, { error: "Arquivo não encontrado." });
  }
}

const server = http.createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
  try {
    if (request.method === "POST" && requestUrl.pathname === "/api/chat") {
      await handleChat(request, response);
      return;
    }
    if (request.method === "GET") {
      await serveStatic(request, response, requestUrl.pathname);
      return;
    }
    sendJson(response, 405, { error: "Método não permitido." });
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Erro interno do servidor." });
  }
});

server.listen(port, () => {
  console.log(`FISHDEx rodando em http://localhost:${port}`);
});
