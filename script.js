const apiBase = 'https://pokeapi.co/api/v2';
const pokemonGrid = document.getElementById('pokemonGrid');
const loader = document.getElementById('loader');
const searchInput = document.getElementById('searchInput');
const refreshButton = document.getElementById('refreshButton');
const detailModal = document.getElementById('detailModal');
const modalClose = document.getElementById('modalClose');
const generationButtons = document.querySelectorAll('.gen-button');
const viewTabs = document.querySelectorAll('.view-tab');
const heroSection = document.querySelector('.hero');
const generationSection = document.querySelector('.generation-selector');
const mainContent = document.querySelector('.content');
const battleView = document.getElementById('battleView');
const choosePokemonBtn = document.getElementById('choosePokemonBtn');
const randomPokemonBtn = document.getElementById('randomPokemonBtn');
const battleSelection = document.getElementById('battleSelection');
const battlePokemonGrid = document.getElementById('battlePokemonGrid');
const battleArena = document.getElementById('battleArena');
const battleScenario = document.querySelector('.battle-scenario');
const startBattleBtn = document.getElementById('startBattleBtn');
const battleMessage = document.getElementById('battleMessage');
const battleResult = document.getElementById('battleResult');
const rematchBtn = document.getElementById('rematchBtn');
const backMenuBtn = document.getElementById('backMenuBtn');
const playerPokemonImage = document.getElementById('playerPokemonImage');
const playerPokemonName = document.getElementById('playerPokemonName');
const enemyPokemonImage = document.getElementById('enemyPokemonImage');
const enemyPokemonName = document.getElementById('enemyPokemonName');
const winnerPokemonImage = document.getElementById('winnerPokemonImage');
const winnerPokemonName = document.getElementById('winnerPokemonName');

let pokemons = [];
let currentSelection = '1';
let playerPokemon = null;
let enemyPokemon = null;
const generationData = {};

const modalName = document.getElementById('modalName');
const modalNumber = document.getElementById('modalNumber');
const modalImage = document.getElementById('modalImage');
const modalTypes = document.getElementById('modalTypes');
const modalDescription = document.getElementById('modalDescription');
const modalHeight = document.getElementById('modalHeight');
const modalWeight = document.getElementById('modalWeight');
const modalHabitat = document.getElementById('modalHabitat');
const modalAbility = document.getElementById('modalAbility');
const modalStats = document.getElementById('modalStats');

const typeColors = {
  fire: '#F78E50',
  water: '#5AA7FF',
  grass: '#7BC96F',
  electric: '#F6D55C',
  psychic: '#D46CC3',
  ice: '#7ED4F5',
  dragon: '#8B72F2',
  dark: '#5E5B6A',
  fairy: '#F4B5E8',
  normal: '#A8A77A',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0'
};

const typeTranslations = {
  fire: 'Fogo',
  water: 'Água',
  grass: 'Grama',
  electric: 'Elétrico',
  psychic: 'Psíquico',
  ice: 'Gelo',
  dragon: 'Dragão',
  dark: 'Sombrio',
  fairy: 'Fada',
  normal: 'Normal',
  fighting: 'Lutador',
  flying: 'Voador',
  poison: 'Veneno',
  ground: 'Terreno',
  rock: 'Rocha',
  bug: 'Inseto',
  ghost: 'Fantasma',
  steel: 'Aço'
};

const statTranslations = {
  hp: 'Vida',
  attack: 'Ataque',
  defense: 'Defesa',
  'special-attack': 'Ataque Especial',
  'special-defense': 'Defesa Especial',
  speed: 'Velocidade'
};

const pokemonDescriptions = {
  bulbasaur: 'Existe uma semente em seu dorso desde o dia em que nasce. A semente cresce lentamente.',
  ivysaur: 'Quando o brotamento em seu dorso cresce, parece perder a capacidade de caminhar em suas patas traseiras.',
  venusaur: 'A flor em seu dorso aproveita a energia solar. Portanto, é mais forte nos dias ensolarados.',
  charmander: 'Claramente, prefere locais quentes. Quando chove, diz-se que vapor sai de sua cauda.',
  charmeleon: 'Quando sua boca está fechada, um único chifre é visível em sua cabeça. É do tipo que prefere lutar sozinho.',
  charizard: 'Relata-se que seu corpo tem a temperatura de 1200 graus. É dito ser capaz de voar tão alto quanto a altitude de um avião.',
  squirtle: 'Frequentemente retira para dentro de sua concha; portanto, é impossível vê-lo além de sua cabeça.',
  wartortle: 'Frequentemente fica entre as rochas costeiras. A cor de seu corpo mistura-se com o piso rochoso.',
  blastoise: 'Uma evolução de Squirtle. O canhão em seu dorso é muito preciso.',
  pikachu: 'Quando vários destes Pokémon reúnem-se, eles podem gerar poderosas descargas elétricas. Nada de grave jamais vem de deixá-lo sozinho.',
  raichu: 'Sua cauda pisca intermitentemente com a mesma frequência de uma transmissão de rádio.',
  psyduck: 'Enquanto ele flutua nos refrescantes bancos, ele frequentemente fica sobrecarregado com aflições.',
  golduck: 'Geralmente descansa em águas frias. Frequentemente é visto capturando e comendo presas aquáticas em rios e lagos.',
};

function formatNumber(id) {
  return `#${String(id).padStart(3, '0')}`;
}

function createTypePill(type) {
  const pill = document.createElement('span');
  pill.className = 'type-pill';
  pill.textContent = typeTranslations[type] ?? type;
  pill.style.background = `${typeColors[type] ?? '#2F2F2F'}22`;
  pill.style.color = typeColors[type] ?? '#FFF';
  return pill;
}

function getPokemonCard(pokemon) {
  const card = document.createElement('article');
  card.className = 'card';
  const mainType = pokemon.types[0].type.name;
  const mainTypeTranslated = typeTranslations[mainType] ?? mainType;
  card.innerHTML = `
    <div class="card-header">
      <span class="pokemon-number">${formatNumber(pokemon.id)}</span>
      <span class="pokemon-type">${mainTypeTranslated}</span>
    </div>
    <h3 class="card-title">${pokemon.name}</h3>
    <img class="pokemon-image" src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <div class="card-body">
      <div class="type-list">${pokemon.types.map((item) => `<span class="type-pill" style="background:${typeColors[item.type.name] ?? '#555'}22;color:${typeColors[item.type.name] ?? '#FFF'}">${typeTranslations[item.type.name] ?? item.type.name}</span>`).join('')}</div>
      <button class="details-button" data-pokemon="${pokemon.name}">Ver detalhes</button>
    </div>
  `;

  card.querySelector('.details-button').addEventListener('click', () => openModal(pokemon));
  return card;
}

function showPokemons(list) {
  pokemonGrid.innerHTML = '';
  if (list.length === 0) {
    pokemonGrid.innerHTML = '<p style="color: var(--muted); grid-column: 1 / -1; text-align: center;">Nenhum Pokémon encontrado.</p>';
    return;
  }
  list.forEach(pokemon => pokemonGrid.appendChild(getPokemonCard(pokemon)));
}

const loaderLabel = loader.querySelector('p');

function setLoading(isLoading, text = 'Carregando Pokémons...') {
  loader.classList.toggle('hidden', !isLoading);
  pokemonGrid.classList.toggle('hidden', isLoading);
  loaderLabel.textContent = text;
}

function normalizeSearch(value) {
  return value.trim().toLowerCase();
}

function filterPokemons(query) {
  const normalized = normalizeSearch(query);
  if (!normalized) {
    showPokemons(pokemons);
    return;
  }
  const filtered = pokemons.filter(pokemon => {
    return pokemon.name.includes(normalized) || String(pokemon.id) === normalized;
  });
  showPokemons(filtered);
}

function updateGenerationButtons() {
  generationButtons.forEach(button => {
    button.classList.toggle('active', button.dataset.gen === String(currentSelection));
  });
}

function getSpeciesId(species) {
  return Number(species.url.match(/\/pokemon-species\/(\d+)\//)?.[1] ?? 0);
}

async function fetchWithRetry(url, retries = 2) {
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      lastError = error;
      await new Promise(resolve => setTimeout(resolve, 200 * (attempt + 1)));
    }
  }
  throw lastError;
}

async function fetchPokemonData(species) {
  const poke = await fetchWithRetry(`${apiBase}/pokemon/${species.name}`);
  return {
    ...poke,
    speciesUrl: species.url
  };
}

async function fetchInBatches(items, handler, batchSize = 8) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const responses = await Promise.all(batch.map(item => handler(item).catch(() => null)));
    results.push(...responses);
  }
  return results;
}

async function loadSpeciesInfo(pokemon) {
  if (pokemon.speciesData) return pokemon.speciesData;
  const species = await fetch(pokemon.speciesUrl).then(r => r.json());
  pokemon.speciesData = species;
  return species;
}

function translateDescription(text) {
  if (!text) return 'Descrição não disponível.';
  return text.replace(/\n|\f/g, ' ');
}

function showView(view) {
  const isBattle = view === 'battle';
  battleView.classList.toggle('hidden', !isBattle);
  heroSection.classList.toggle('hidden', isBattle);
  mainContent.classList.toggle('hidden', isBattle);
  viewTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.view === view));
  if (isBattle) {
    resetBattle();
  }
}

function getRandomPokemon(exclude) {
  if (!pokemons.length) return null;
  const available = pokemons.filter(p => !exclude || p.id !== exclude.id);
  return available[Math.floor(Math.random() * available.length)];
}

function createBattleCard(pokemon) {
  const card = document.createElement('article');
  card.className = 'card';
  const mainType = pokemon.types[0].type.name;
  const mainTypeTranslated = typeTranslations[mainType] ?? mainType;
  card.innerHTML = `
    <div class="card-header">
      <span class="pokemon-number">${formatNumber(pokemon.id)}</span>
      <span class="pokemon-type">${mainTypeTranslated}</span>
    </div>
    <h3 class="card-title">${pokemon.name}</h3>
    <img class="pokemon-image" src="${pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <div class="card-body">
      <div class="type-list">${pokemon.types.map((item) => `<span class="type-pill" style="background:${typeColors[item.type.name] ?? '#555'}22;color:${typeColors[item.type.name] ?? '#FFF'}">${typeTranslations[item.type.name] ?? item.type.name}</span>`).join('')}</div>
      <button class="details-button" data-pokemon="${pokemon.name}">Ver detalhes</button>
      <button class="secondary-button select-button" data-pokemon="${pokemon.name}">Selecionar</button>
    </div>
  `;

  card.querySelector('.details-button').addEventListener('click', () => openModal(pokemon));
  card.querySelector('.select-button').addEventListener('click', () => selectPlayerPokemon(pokemon));
  return card;
}

function renderBattleSelection() {
  battlePokemonGrid.innerHTML = '';
  if (!pokemons.length) {
    battlePokemonGrid.innerHTML = '<p style="color: var(--muted);">Carregando Pokémon para batalha...</p>';
    return;
  }
  pokemons.forEach(pokemon => battlePokemonGrid.appendChild(createBattleCard(pokemon)));
}

function resetBattle() {
  playerPokemon = null;
  enemyPokemon = null;
  battleSelection.classList.add('hidden');
  battleArena.classList.add('hidden');
  battleResult.classList.add('hidden');
  if (battleScenario) battleScenario.classList.remove('show-bg');
  battleMessage.textContent = 'Pronto para começar?';
  playerPokemonImage.src = '';
  enemyPokemonImage.src = '';
  playerPokemonName.textContent = '';
  enemyPokemonName.textContent = '';
  winnerPokemonImage.src = '';
  winnerPokemonName.textContent = '';
}

function selectPlayerPokemon(pokemon) {
  playerPokemon = pokemon;
  enemyPokemon = getRandomPokemon(pokemon);
  showBattleArena();
}

function showBattleArena() {
  battleSelection.classList.add('hidden');
  battleArena.classList.remove('hidden');
  battleResult.classList.add('hidden');
  battleMessage.textContent = 'Seu oponente foi escolhido. Preparado para iniciar!';
  playerPokemonImage.src = playerPokemon.sprites.other['official-artwork'].front_default || playerPokemon.sprites.front_default;
  playerPokemonName.textContent = playerPokemon.name;
  enemyPokemonImage.src = enemyPokemon.sprites.other['official-artwork'].front_default || enemyPokemon.sprites.front_default;
  enemyPokemonName.textContent = enemyPokemon.name;
}

function chooseRandomBattle() {
  playerPokemon = getRandomPokemon();
  enemyPokemon = getRandomPokemon(playerPokemon);
  showBattleArena();
}

function calculateBattleWinner() {
  const playerPower = playerPokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0) + Math.random() * 20;
  const enemyPower = enemyPokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0) + Math.random() * 20;
  return playerPower >= enemyPower ? playerPokemon : enemyPokemon;
}

function playBattleAnimation() {
  battleArena.classList.add('battle-active');
  battleMessage.textContent = 'A batalha começou!';
  return new Promise(resolve => {
    setTimeout(() => {
      battleMessage.textContent = `${playerPokemon.name} usa ataque especial!`;
      document.querySelector('.battle-side.player-side').classList.add('active-attack');
    }, 400);
    setTimeout(() => {
      document.querySelector('.battle-side.player-side').classList.remove('active-attack');
      document.querySelector('.battle-side.enemy-side').classList.add('active-attack');
      battleMessage.textContent = `${enemyPokemon.name} contra-ataca com força!`;
    }, 900);
    setTimeout(() => {
      battleArena.classList.remove('battle-active');
      document.querySelector('.battle-side.enemy-side').classList.remove('active-attack');
      resolve();
    }, 1600);
  });
}

async function startBattle() {
  if (!playerPokemon || !enemyPokemon) return;
  battleMessage.textContent = 'Iniciando batalha...';
  if (battleScenario) battleScenario.classList.add('show-bg');
  startBattleBtn.disabled = true;
  await playBattleAnimation();
  const winner = calculateBattleWinner();
  battleResult.classList.remove('hidden');
  winnerPokemonImage.src = winner.sprites.other['official-artwork'].front_default || winner.sprites.front_default;
  winnerPokemonName.textContent = winner.name;
  battleMessage.textContent = 'Batalha finalizada! Veja o vencedor abaixo.';
  startBattleBtn.disabled = false;
}

function returnToMenu() {
  showView('pokedex');
}

function startBattleSelection() {
  battleSelection.classList.remove('hidden');
  battleArena.classList.add('hidden');
  battleResult.classList.add('hidden');
  renderBattleSelection();
}

async function ensureBattlePokemons() {
  if (!pokemons.length) {
    await loadSelection(currentSelection);
  }
}

function randomizeBattleWithAnimation() {
  battleMessage.textContent = 'Sorteando os Pokémon...';
  setTimeout(() => {
    chooseRandomBattle();
  }, 350);
}

async function openBattleMode() {
  await ensureBattlePokemons();
  resetBattle();
}

async function handleViewClick(event) {
  const view = event.currentTarget.dataset.view;
  if (view === 'battle') {
    showView('battle');
    await openBattleMode();
  } else {
    showView('pokedex');
  }
}

async function handleChoosePokemon() {
  await ensureBattlePokemons();
  startBattleSelection();
}

async function handleRandomPokemon() {
  await ensureBattlePokemons();
  randomizeBattleWithAnimation();
}

async function initBattleListeners() {
  viewTabs.forEach(tab => tab.addEventListener('click', handleViewClick));
  choosePokemonBtn.addEventListener('click', handleChoosePokemon);
  randomPokemonBtn.addEventListener('click', handleRandomPokemon);
  startBattleBtn.addEventListener('click', startBattle);
  rematchBtn.addEventListener('click', () => {
    resetBattle();
    startBattleSelection();
  });
  backMenuBtn.addEventListener('click', returnToMenu);
}

async function openModal(pokemon) {
  const speciesInfo = await loadSpeciesInfo(pokemon);
  modalName.textContent = pokemon.name;
  modalNumber.textContent = formatNumber(pokemon.id);
  modalImage.src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
  modalImage.alt = pokemon.name;
  modalTypes.innerHTML = '';
  pokemon.types.forEach(item => modalTypes.appendChild(createTypePill(item.type.name)));

  let description = pokemonDescriptions[pokemon.name.toLowerCase()];
  if (!description) {
    const descriptionEntry = speciesInfo.flavor_text_entries.find(entry => entry.language.name === 'pt');
    if (descriptionEntry) {
      description = descriptionEntry.flavor_text;
    } else {
      const englishEntry = speciesInfo.flavor_text_entries.find(entry => entry.language.name === 'en');
      description = englishEntry?.flavor_text || 'Descrição não disponível.';
    }
  }
  modalDescription.textContent = translateDescription(description);
  
  modalHeight.textContent = `${(pokemon.height / 10).toFixed(1)} m`;
  modalWeight.textContent = `${(pokemon.weight / 10).toFixed(1)} kg`;
  modalHabitat.textContent = speciesInfo.habitat?.name?.replace('-', ' ') ?? 'Desconhecido';
  modalAbility.textContent = pokemon.abilities[0]?.ability.name?.replace('-', ' ') ?? 'Nenhuma';
  modalStats.innerHTML = '';
  pokemon.stats.forEach(stat => {
    const item = document.createElement('div');
    item.className = 'progress-item';
    const statName = statTranslations[stat.stat.name] || stat.stat.name.replace('-', ' ');
    item.innerHTML = `<span><span>${statName}</span><strong>${stat.base_stat}</strong></span>`;
    const bar = document.createElement('div');
    bar.className = 'progress-bar';
    const fill = document.createElement('div');
    fill.className = 'progress-fill';
    fill.style.width = `${Math.min(stat.base_stat, 100)}%`;
    bar.appendChild(fill);
    item.appendChild(bar);
    modalStats.appendChild(item);
  });
  detailModal.classList.remove('hidden');
}

async function loadGenerationData(id) {
  const selection = String(id);
  if (generationData[selection]) return generationData[selection];

  const response = await fetchWithRetry(`${apiBase}/generation/${selection}`);
  const generation = response;
  const sortedSpecies = generation.pokemon_species.slice().sort((a, b) => getSpeciesId(a) - getSpeciesId(b));
  const details = await fetchInBatches(sortedSpecies, fetchPokemonData, 6);
  const validDetails = details.filter(Boolean).sort((a, b) => a.id - b.id);
  generationData[selection] = validDetails;
  return validDetails;
}

async function loadAllGenerations() {
  if (generationData.all) return generationData.all;
  const allPokemons = [];
  for (let id = 1; id <= 9; id += 1) {
    const generationDataSet = await loadGenerationData(id);
    allPokemons.push(...generationDataSet);
  }
  generationData.all = allPokemons;
  return allPokemons;
}

async function loadSelection(selection) {
  try {
    currentSelection = String(selection);
    updateGenerationButtons();
    if (currentSelection === 'all') {
      setLoading(true, 'Carregando todas as gerações...');
      pokemons = await loadAllGenerations();
      showPokemons(pokemons);
      return;
    }

    setLoading(true, `Carregando Geração ${currentSelection}...`);
    pokemons = await loadGenerationData(currentSelection);
    showPokemons(pokemons);
  } catch (error) {
    pokemonGrid.innerHTML = '<p style="color: var(--muted); text-align:center; grid-column: 1 / -1;">Falha ao carregar a seleção. Tente novamente.</p>';
    console.error('Erro ao carregar seleção:', error);
  } finally {
    setLoading(false);
  }
}

searchInput.addEventListener('input', (event) => {
  filterPokemons(event.target.value);
});

generationButtons.forEach(button => {
  button.addEventListener('click', async () => {
    const selection = button.dataset.gen;
    if (selection === currentSelection) return;
    searchInput.value = '';
    await loadSelection(selection);
    if (!battleView.classList.contains('hidden')) {
      renderBattleSelection();
    }
  });
});

refreshButton.addEventListener('click', async () => {
  searchInput.value = '';
  filterPokemons('');
  await loadSelection(currentSelection);
  if (!battleView.classList.contains('hidden')) {
    renderBattleSelection();
  }
});

modalClose.addEventListener('click', () => detailModal.classList.add('hidden'));
detailModal.addEventListener('click', (event) => {
  if (event.target === detailModal) {
    detailModal.classList.add('hidden');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !detailModal.classList.contains('hidden')) {
    detailModal.classList.add('hidden');
  }
});

initBattleListeners();
loadSelection(currentSelection);
