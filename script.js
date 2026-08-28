/* ==========================================================================
   FISHDEx - JAVASCRIPT COMPLETO
   "Explore. Conheça. Pesque."
   ========================================================================== */

// ==========================================================================
// 1. BANCO DE DADOS DE PEIXES (37 ESPÉCIES COM IMAGENS REAIS DO WIKIMEDIA)
// ==========================================================================

const PEIXES_DATA = [

  // ============================
  // PESQUEIRO (12 ESPÉCIES)
  // ============================
  {
    id: "tambaqui",
    nome: "Tambaqui",
    nomeCientifico: "Colossoma macropomum",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Lagos de pesqueiro e bacias amazônica e do Araguaia-Tocantins",
    regiao: "Norte, Centro-Oeste e Pesqueiros de todo o Brasil",
    alimentacao: "Frutos, sementes, castanhas, ração flutuante e caramujos (Onívoro)",
    tamanhoMedio: "60 cm a 1,10 m",
    tamanhoMaximo: "1,30 m",
    pesoMedio: "8 kg a 30 kg",
    pesoMaximo: "45 kg",
    porte: "gigante",
    status: { forca: 96, velocidade: 75, tamanho: 92, dificuldade: 78 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/5/57/Tambaqui_%28Colossoma_macropomum%29.jpg",
    descricao: "Um dos peixes de maior porte e força bruta da pesca esportiva brasileira. Famoso por suas corridas imparáveis e tomadas de linha vigorosas nos pesqueiros.",
    iscas: {
      naturais: ["Coquinho", "Salsicha", "Massa doce", "Goiabada", "Queijo", "Caramujo"],
      artificiais: ["Miçangas no palminho", "Rações artificiais em EVA", "Plugs de meia-água"]
    },
    melhorEpoca: "Primavera e Verão",
    tecnicasPesca: "Pesca de superfície com boia cevadeira e chicote de EVA/miçanga, ou pesca de fundo com massas bem consistentes.",
    curiosidades: [
      "Possui dentição molariforme muito forte, capaz de quebrar sementes duras como castanha-do-pará.",
      "Em pesqueiros, acostuma-se com o som das boias cevadeiras caindo na água."
    ]
  },
  {
    id: "pacu",
    nome: "Pacu",
    nomeCientifico: "Piaractus mesopotamicus",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Lagos de pesqueiros, Bacia do Rio Paraná e Pantanal",
    regiao: "Centro-Oeste, Sudeste e Sul",
    alimentacao: "Frutos nativos, folhas, sementes, algas e ração (Onívoro)",
    tamanhoMedio: "35 cm a 65 cm",
    tamanhoMaximo: "80 cm",
    pesoMedio: "3 kg a 8 kg",
    pesoMaximo: "18 kg",
    porte: "medio",
    status: { forca: 84, velocidade: 78, tamanho: 68, dificuldade: 65 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/3/33/Piaractus_mesopotamicus_-_Flickr_-_Dick_Culbert.jpg",
    descricao: "Conhecido carinhosamente como o 'trator do lago', o Pacu possui corpo em formato de disco e uma briga lateral muito pesada e veloz.",
    iscas: {
      naturais: ["Massa de fundo", "Milho verde cozido", "Salsicha", "Frutas (figo, uva)", "Pão"],
      artificiais: ["Miçangas marrons/amarelas", "Rações de EVA", "Spinners pequenos"]
    },
    melhorEpoca: "Meses mais quentes (Outubro a Março)",
    tecnicasPesca: "Pesca de fundo com chumbada leve e anzol direto na massa ou com boia torpedo e chicote médio.",
    curiosidades: [
      "É um dos maiores dispersores de sementes das florestas inundáveis do Pantanal.",
      "Sua tomada de linha inicial costuma ser fulminante, exigindo freio da carretilha bem ajustado."
    ]
  },
  {
    id: "tambacu",
    nome: "Tambacu",
    nomeCientifico: "Colossoma macropomum × Piaractus mesopotamicus",
    categoria: "pesqueiro",
    categoriasAdicionais: [],
    habitat: "Pesqueiros e tanques de engorda por todo o território nacional",
    regiao: "Pesqueiros do Brasil",
    alimentacao: "Ração flutuante, massas, salsicha, carnes e doces (Onívoro)",
    tamanhoMedio: "50 cm a 1,05 m",
    tamanhoMaximo: "1,20 m",
    pesoMedio: "7 kg a 25 kg",
    pesoMaximo: "40 kg",
    porte: "gigante",
    status: { forca: 94, velocidade: 76, tamanho: 90, dificuldade: 72 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Schwarzer_Pacu_Piaractus_Tierpark_Hellabrunn-2.jpg/960px-Schwarzer_Pacu_Piaractus_Tierpark_Hellabrunn-2.jpg",
    descricao: "Híbrido resultante do cruzamento da fêmea de Tambaqui com o macho de Pacu. Reúne a grande capacidade de ganho de peso do Tambaqui com a resistência ao frio do Pacu.",
    iscas: {
      naturais: ["Massa japonesa", "Salsicha flutuando", "Pão de queijo", "Goiabada", "Bacon"],
      artificiais: ["Anteninhas de EVA", "Palminho com miçanga", "Ração artificial"]
    },
    melhorEpoca: "Ano todo em pesqueiros, com pico no calor",
    tecnicasPesca: "Pesca com boias cevadeiras arremessadas no centro do lago utilizando anteninhas no palminho.",
    curiosidades: [
      "É o peixe mais pescado em competições e torneios de pesque-pague no Brasil.",
      "Possui crescimento 20% mais rápido do que as espécies puras em cativeiro."
    ]
  },
  {
    id: "patinga",
    nome: "Patinga",
    nomeCientifico: "Piaractus mesopotamicus × Piaractus brachypomus",
    categoria: "pesqueiro",
    categoriasAdicionais: [],
    habitat: "Lagos de pesqueiros e represas esportivas",
    regiao: "Sudeste e Centro-Oeste",
    alimentacao: "Rações, massas doces, insetos e pequenos frutos (Onívoro)",
    tamanhoMedio: "35 cm a 55 cm",
    tamanhoMaximo: "70 cm",
    pesoMedio: "2 kg a 6 kg",
    pesoMaximo: "10 kg",
    porte: "medio",
    status: { forca: 78, velocidade: 82, tamanho: 60, dificuldade: 55 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Piaractus_brachypomus_208962529.jpg/960px-Piaractus_brachypomus_208962529.jpg",
    descricao: "Híbrido entre o Pacu e a Pirapitinga. Peixe extremamente veloz, com coloração prateada e manchas alaranjadas na região ventral.",
    iscas: {
      naturais: ["Massas à base de leite condensado", "Salsicha em cubos", "Milho verde"],
      artificiais: ["Miçangas pequenas", "Mini plugs de meia-água", "E.V.A. marrom"]
    },
    melhorEpoca: "Primavera e Verão",
    tecnicasPesca: "Pesca com boia torpedinho leve e chicote de linha monofilamento.",
    curiosidades: [
      "Gera saltos acrobáticos logo após a fisgada, diferente dos redondos que buscam o fundo.",
      "Adapta-se muito bem a lagos de médio porte."
    ]
  },
  {
    id: "pintado",
    nome: "Pintado",
    nomeCientifico: "Pseudoplatystoma corruscans",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Calhas profundas de rios, poções e lagos de pesqueiros com boa oxigenação",
    regiao: "Bacia do Prata, São Francisco e Pesqueiros",
    alimentacao: "Peixes vivos, tuviras, minhocuçu, filés e ração carnosa (Carnívoro)",
    tamanhoMedio: "70 cm a 1,30 m",
    tamanhoMaximo: "1,80 m",
    pesoMedio: "8 kg a 25 kg",
    pesoMaximo: "60 kg",
    porte: "gigante",
    status: { forca: 90, velocidade: 72, tamanho: 88, dificuldade: 75 },
    dificuldade: "Dificil",
    foto: "https://inaturalist-open-data.s3.amazonaws.com/photos/220738253/original.jpg",
    descricao: "Majestoso bagre de couro com corpo cilíndrico, dorso acinzentado e pequenas pintas pretas espalhadas. Um dos peixes mais nobres dos rios brasileiros.",
    iscas: {
      naturais: ["Tuvira viva", "Minhocuçu", "Lambari vivo", "Coração de boi", "Salsicha no fundo"],
      artificiais: ["Jigs de penas pesados no fundo", "Shads com jig head"]
    },
    melhorEpoca: "Outono e Inverno (muito ativo no entardecer e à noite)",
    tecnicasPesca: "Pesca de fundo com chumbo de correr, linha grossa e chicote com anzol circle hook.",
    curiosidades: [
      "Possui longos barbilhões sensoriais repletos de papilas gustativas para localizar presas na escuridão.",
      "Sua carne é extremamente valorizada por não possuir espinhas intramusculares."
    ]
  },
  {
    id: "cachara",
    nome: "Cachara",
    nomeCientifico: "Pseudoplatystoma fasciatum",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Rios, canais, lagoas marginais e pesqueiros",
    regiao: "Bacia Amazônica e do Prata",
    alimentacao: "Peixes menores, crustáceos e iscas cárneas (Carnívoro)",
    tamanhoMedio: "60 cm a 1,10 m",
    tamanhoMaximo: "1,40 m",
    pesoMedio: "6 kg a 18 kg",
    pesoMaximo: "35 kg",
    porte: "grande",
    status: { forca: 86, velocidade: 70, tamanho: 82, dificuldade: 70 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/0/03/Pseudoplatystoma_fasciatum_01.JPG",
    descricao: "Semelhante ao Pintado, porém distinguível por suas faixas verticais escuras (listras de tigre) pelo corpo. Peixe de fundo com imensa força de arrasto.",
    iscas: {
      naturais: ["Tuviras", "Pedaços de peixe", "Guelra de peixe", "Salsicha"],
      artificiais: ["Rubber jigs", "Iscas de fundo com chocalho (rattle)"]
    },
    melhorEpoca: "Meses de estiagem nos rios e noites amenas em pesqueiros",
    tecnicasPesca: "Pesca noturna encostada nas margens e saídas de canais com iscas naturais no fundo.",
    curiosidades: [
      "Frequentemente hibridiza com o Pintado originando o 'Pintachara'.",
      "Caça em emboscadas camuflado entre galhadas submersas."
    ]
  },
  {
    id: "pirarara",
    nome: "Pirarara",
    nomeCientifico: "Phractocephalus hemioliopterus",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Poços profundos de grandes rios amazônicos e tanques de gigantes em pesqueiros",
    regiao: "Bacias Amazônica, Tocantins-Araguaia e Pesqueiros",
    alimentacao: "Peixes inteiros, caranguejos, frutos caídos, lula e vísceras (Onívoro/Carnívoro)",
    tamanhoMedio: "80 cm a 1,20 m",
    tamanhoMaximo: "1,50 m",
    pesoMedio: "15 kg a 40 kg",
    pesoMaximo: "70 kg",
    porte: "gigante",
    status: { forca: 99, velocidade: 62, tamanho: 95, dificuldade: 88 },
    dificuldade: "Muito Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/5/58/Phractocephalus_hemioliopterus%2C_GDY.jpg",
    descricao: "Apelidada de o 'trator vermelho das águas', a Pirarara é famosa por sua cauda avermelhada vibrante, barriga branca e uma força de tração descomunal.",
    iscas: {
      naturais: ["Cabeça de peixe", "Tuvira grande", "Filé de tilápia", "Salsicha inteira", "Calamar/Lula"],
      artificiais: ["Grandes shads de silicone no fundo"]
    },
    melhorEpoca: "Ano inteiro, com atividade máxima no pôr do sol e à noite",
    tecnicasPesca: "Varas pesadas de 60 a 100 libras, carretilhas com alta capacidade de linha e freio travado.",
    curiosidades: [
      "Emite um som grave característico quando retirada da água, parecendo um ronco alto.",
      "É considerada o peixe de couro de maior arrancada curta do Brasil por muitos guias."
    ]
  },
  {
    id: "carpa-cabecuda",
    nome: "Carpa Cabeçuda",
    nomeCientifico: "Hypophthalmichthys nobilis",
    categoria: "pesqueiro",
    categoriasAdicionais: [],
    habitat: "Lagos e represas de pesqueiros com água rica em nutrientes",
    regiao: "Introduzida em todo o Centro-Sul do Brasil",
    alimentacao: "Fitoplâncton, zooplâncton e microalgas filtradas (Filtrador)",
    tamanhoMedio: "70 cm a 1,10 m",
    tamanhoMaximo: "1,40 m",
    pesoMedio: "12 kg a 30 kg",
    pesoMaximo: "55 kg",
    porte: "gigante",
    status: { forca: 92, velocidade: 58, tamanho: 94, dificuldade: 82 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bighead_carp_%28March_2012%29.jpg/960px-Bighead_carp_%28March_2012%29.jpg",
    descricao: "Peixe asiático de grande porte com cabeça desproporcionalmente grande e olhos posicionados para baixo. Requer montagens de pesca muito específicas.",
    iscas: {
      naturais: ["Massa pastosa (chuveirinho de carpa)", "Amendoim moído com leite em pó", "Banana amassada"],
      artificiais: ["Não ataca iscas artificiais convencionais"]
    },
    melhorEpoca: "Dias com vento brando e sol suave",
    tecnicasPesca: "Pesca com boia grande de carpa e chuveirinho com mola pastosa armada com pequenos anzóis sem farpa.",
    curiosidades: [
      "Pode filtrar dezenas de litros de água por hora através de seus rastros branquiais modificados.",
      "Exige extremo silêncio na margem do lago, pois é extremamente desconfiada."
    ]
  },
  {
    id: "carpa-capim",
    nome: "Carpa Capim",
    nomeCientifico: "Ctenopharyngodon idella",
    categoria: "pesqueiro",
    categoriasAdicionais: [],
    habitat: "Lagos, açudes e pesqueiros com vegetação aquática",
    regiao: "Pesqueiros e represas de todo o país",
    alimentacao: "Vegetação aquática, grama fresca, folhas de capim e milho (Herbívoro)",
    tamanhoMedio: "50 cm a 85 cm",
    tamanhoMaximo: "1,10 m",
    pesoMedio: "4 kg a 12 kg",
    pesoMaximo: "25 kg",
    porte: "grande",
    status: { forca: 85, velocidade: 75, tamanho: 78, dificuldade: 70 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/48/Grass_carp_fexx.jpg",
    descricao: "Corpo longo e esguio, cor verde-oliva com reflexos dourados. Peixe herbívoro muito voraz que proporciona brigas longas e velozes.",
    iscas: {
      naturais: ["Folhas de capim elefante", "Bolinhas de massa verde", "Milho cozido no fundo", "Goiaba"],
      artificiais: ["Iscas flutuantes imitando folhas verdes"]
    },
    melhorEpoca: "Meses temperados a quentes",
    tecnicasPesca: "Pesca na superfície com folhas de capim amarradas ao anzol ou pesca de fundo com pequenos grãos.",
    curiosidades: [
      "Pode ingerir diariamente uma quantidade de plantas aquáticas equivalente ao seu próprio peso.",
      "Sua boca tem lábios duros e fortes dentes faríngeos para cortar fibras vegetais."
    ]
  },
  {
    id: "tilapia-do-nilo",
    nome: "Tilápia do Nilo",
    nomeCientifico: "Oreochromis niloticus",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Represas, açudes, pesqueiros e rios de águas calmas",
    regiao: "Onipresente no Brasil",
    alimentacao: "Algas, ração comercial, insetos, pequenos vermes e massas (Onívoro)",
    tamanhoMedio: "25 cm a 45 cm",
    tamanhoMaximo: "60 cm",
    pesoMedio: "800 g a 3 kg",
    pesoMaximo: "6 kg",
    porte: "pequeno",
    status: { forca: 62, velocidade: 74, tamanho: 45, dificuldade: 40 },
    dificuldade: "Facil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Fresh_tilapia.jpg/960px-Fresh_tilapia.jpg",
    descricao: "A espécie mais popular e democrática da pesca esportiva no Brasil. Fácil de encontrar e incrivelmente combativa em equipamentos ultra-leves.",
    iscas: {
      naturais: ["Massa de trigo com essência", "Bichinho da laranja", "Minhoca", "Milho verde"],
      artificiais: ["Micro jigs", "Spinners 0 e 1", "Moscas de fly (ninfas e streamers)"]
    },
    melhorEpoca: "Ano inteiro, principalmente em dias quentes e com sol",
    tecnicasPesca: "Pesca com varinha telescópica de mão (vara caipira) ou molinetes ultralight (UL).",
    curiosidades: [
      "Os machos escavam ninhos circulares de reprodução no fundo arenoso dos lagos.",
      "A fêmea protege os ovos e filhotes recém-nascidos guardando-os dentro da própria boca."
    ]
  },
  {
    id: "matrinxa",
    nome: "Matrinxã",
    nomeCientifico: "Brycon amazonicus",
    categoria: "pesqueiro",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Rios rápidos, corredeiras e lagos esportivos",
    regiao: "Bacia Amazônica, Araguaia e Pesqueiros de todo o país",
    alimentacao: "Frutas caídas, flores, pequenos peixes e insetos da superfície (Onívoro)",
    tamanhoMedio: "35 cm a 60 cm",
    tamanhoMaximo: "80 cm",
    pesoMedio: "1,5 kg a 4 kg",
    pesoMaximo: "7 kg",
    porte: "medio",
    status: { forca: 76, velocidade: 92, tamanho: 60, dificuldade: 62 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Brycon_amazonicus.jpg",
    descricao: "Peixe extremamente ágil e acrobático com corpo alongado, cauda avermelhada e uma mancha escura característica na nadadeira caudal.",
    iscas: {
      naturais: ["Frutas (figo, acerola)", "Pedaços de salsicha", "Gafanhotos", "Massa"],
      artificiais: ["Plugs de meia-água pequenos", "Colheres", "Poppers pequenos", "Moscas secas"]
    },
    melhorEpoca: "Primavera e Verão",
    tecnicasPesca: "Pesca de arremesso com plugs velozes de meia-água ou pesca de superfície visual.",
    curiosidades: [
      "Dá múltiplos saltos espetaculares fora d'água logo após sentir o anzol.",
      "Possui dentes triangulares cortantes capazes de partir linhas finas de monofilamento."
    ]
  },
  {
    id: "bagre-africano",
    nome: "Bagre Africano",
    nomeCientifico: "Clarias gariepinus",
    categoria: "pesqueiro",
    categoriasAdicionais: [],
    habitat: "Fundos lodosos de pesqueiros e represas",
    regiao: "Introduzido em vários estados do Brasil",
    alimentacao: "Peixes mortos, carnes, insetos e matéria orgânica (Carnívoro oportunista)",
    tamanhoMedio: "50 cm a 90 cm",
    tamanhoMaximo: "1,20 m",
    pesoMedio: "3 kg a 10 kg",
    pesoMaximo: "25 kg",
    porte: "grande",
    status: { forca: 88, velocidade: 60, tamanho: 80, dificuldade: 50 },
    dificuldade: "Facil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/African_Cat_fish.jpg/960px-African_Cat_fish.jpg",
    descricao: "Espécie exótica famosa por sua altíssima rusticidade e capacidade de respirar ar atmosférico diretamente por um órgão branquial acessório.",
    iscas: {
      naturais: ["Fígado de frango", "Tripa de galinha", "Salsicha", "Minhocuçu", "Carne sangrenta"],
      artificiais: ["Raramente ataca artificiais"]
    },
    melhorEpoca: "Ano todo, inclusive em águas mais frias ou turvas",
    tecnicasPesca: "Pesca de fundo com chumbo e anzol rente ao lodo.",
    curiosidades: [
      "Pode se locomover por terra úmida entre poças d'água utilizando suas nadadeiras peitorais espinhosas.",
      "Sobrevive em ambientes com níveis quase nulos de oxigênio dissolvido."
    ]
  },

  // ============================
  // ÁGUA DOCE (19 ESPÉCIES)
  // ============================
  {
    id: "tucunare-acu",
    nome: "Tucunaré-Açu",
    nomeCientifico: "Cichla temensis",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Rios de águas negras e claras, lagos e ressacas da Bacia Amazônica",
    regiao: "Bacia Amazônica (especialmente Rio Negro e afluentes)",
    alimentacao: "Peixes de diversas espécies e pequenos animais aquáticos (Piscívoro voraz)",
    tamanhoMedio: "50 cm a 85 cm",
    tamanhoMaximo: "1,05 m",
    pesoMedio: "4 kg a 10 kg",
    pesoMaximo: "16 kg",
    porte: "grande",
    status: { forca: 95, velocidade: 94, tamanho: 85, dificuldade: 85 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/4/41/Cichla_temensis.jpg",
    descricao: "Considerado o embaixador mundial da pesca esportiva brasileira. Ataques explosivos na superfície e força descomunal que testam o pescador ao limite.",
    iscas: {
      naturais: ["Peixes vivos (lambaris, piabas, tucunarés filhotes)"],
      artificiais: ["Hélices de madeira (Rip Roller)", "Zaras grandes", "Poppers", "Jigs de cerdas naturais"]
    },
    melhorEpoca: "Setembro a Fevereiro (temporada de águas baixas na Amazônia)",
    tecnicasPesca: "Trabalho agressivo com iscas de hélice na superfície, exigindo recolhimento rápido com golpes fortes de vara.",
    curiosidades: [
      "Muda drasticamente de cor e padrão corporal durante o período reprodutivo.",
      "Possui um ocelo na cauda que imita um olho para enganar predadores que tentem atacá-lo por trás."
    ]
  },
  {
    id: "tucunare-amarelo",
    nome: "Tucunaré-Pavão",
    nomeCientifico: "Cichla ocellaris",
    categoria: "agua-doce",
    categoriasAdicionais: ["pesqueiro"],
    habitat: "Represas, lagoas e rios de quase todo o Brasil",
    regiao: "Bacia do Tocantins-Araguaia e introduzido em represas do Sudeste/Centro-Oeste",
    alimentacao: "Pequenos peixes, camarões de água doce e alevinos (Carnívoro)",
    tamanhoMedio: "30 cm a 50 cm",
    tamanhoMaximo: "65 cm",
    pesoMedio: "1 kg a 3,5 kg",
    pesoMaximo: "6 kg",
    porte: "medio",
    status: { forca: 78, velocidade: 86, tamanho: 58, dificuldade: 58 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Cichla_ocellaris.jpg",
    descricao: "A espécie de tucunaré mais espalhada pelas represas do Sudeste e Centro-Oeste brasileiro. Muito agressivo em iscas artificiais de superfície e meia-água.",
    iscas: {
      naturais: ["Lambaris vivos", "Camarão de água doce"],
      artificiais: ["Zaras de 7 a 9 cm", "Stickbaits", "Shads soft com anzol offset", "Jigs"]
    },
    melhorEpoca: "Primavera e Verão (Outubro a Março)",
    tecnicasPesca: "Arremessos precisos rente a troncos, pedreiras e margens de represas.",
    curiosidades: [
      "Protege seus filhotes com extrema agressividade, atacando qualquer intruso próximo à ninhada.",
      "Possui coloração amarela dourada brilhante com pontinhos dourados nas nadadeiras."
    ]
  },
  {
    id: "dourado",
    nome: "Dourado",
    nomeCientifico: "Salminus brasiliensis",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Corredeiras, cachoeiras e águas rápidas e bem oxigenadas",
    regiao: "Bacias do Prata, Paraná, Paraguai, Uruguai e São Francisco",
    alimentacao: "Peixes de cardume como curimbatás, lambaris e piaus (Carnívoro predador)",
    tamanhoMedio: "55 cm a 90 cm",
    tamanhoMaximo: "1,20 m",
    pesoMedio: "4 kg a 12 kg",
    pesoMaximo: "25 kg",
    porte: "grande",
    status: { forca: 96, velocidade: 98, tamanho: 86, dificuldade: 90 },
    dificuldade: "Muito Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dourado%28Salminus_brasiliensis%29emBonito.jpg",
    descricao: "Apelidado com reverência de 'Rei do Rio'. Possui corpo dourado brilhante, dentes afiadíssimos e uma energia inigualável com múltiplos saltos acrobáticos.",
    iscas: {
      naturais: ["Tuvira", "Mussum", "Lambari", "Curimbatá pequeno"],
      artificiais: ["Plugs de barbela média e longa", "Colheres prateadas e douradas", "Streamers de Fly"]
    },
    melhorEpoca: "Meses quentes e épocas de piracema (respeitando as leis de defeso)",
    tecnicasPesca: "Corrico (trolling) ou arremesso em bocas de corixos e logo abaixo de corredeiras violentas.",
    curiosidades: [
      "Consegue saltar cachoeiras de mais de 1 metro e meio para subir o rio durante a reprodução.",
      "Sua boca óssea extremamente dura exige anzóis muito afiados para penetrar no momento da fisgada."
    ]
  },
  {
    id: "traira",
    nome: "Traíra",
    nomeCientifico: "Hoplias malabaricus",
    categoria: "agua-doce",
    categoriasAdicionais: ["pesqueiro"],
    habitat: "Lagoas rasas, brejos, braços de represas com vegetação e fundos lodosos",
    regiao: "Presente em todo o Brasil e América do Sul",
    alimentacao: "Peixes, sapos, rãs, lagartixas e insetos (Carnívoro oportunista)",
    tamanhoMedio: "30 cm a 50 cm",
    tamanhoMaximo: "65 cm",
    pesoMedio: "800 g a 2,5 kg",
    pesoMaximo: "4,5 kg",
    porte: "pequeno",
    status: { forca: 75, velocidade: 72, tamanho: 50, dificuldade: 48 },
    dificuldade: "Facil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Hoplias_malabaricus2.jpg/960px-Hoplias_malabaricus2.jpg",
    descricao: "Peixe pré-histórico de emboscada com dentes cônicos muito afiados. Ataca iscas de superfície com extrema ferocidade entre a vegetação aquática.",
    iscas: {
      naturais: ["Pedaço de peixe", "Coração", "Lambari vivo", "Sapo"],
      artificiais: ["Sapos de borracha anti-enrosco (frogs)", "Buzzbaits", "Spinnerbaits", "Soft shads"]
    },
    melhorEpoca: "Primavera e noites quentes de Verão",
    tecnicasPesca: "Pesca com frog de silicone trabalhado por cima de tapetes de algas e vitória-régia.",
    curiosidades: [
      "Pode sobreviver enterrada na lama úmida quando o nível da água do açude seca completamente.",
      "Possui dentes extremamente afiados que podem causar cortes profundos se manuseada sem alicate."
    ]
  },
  {
    id: "trairao",
    nome: "Trairão",
    nomeCientifico: "Hoplias aimara",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Rios com pedrais, remansos e águas limpas da Amazônia e Centro-Oeste",
    regiao: "Bacia Amazônica, Tapajós, Xingu e Araguaia",
    alimentacao: "Peixes grandes, cobras d'água, pequenas aves e anfíbios (Predador de topo)",
    tamanhoMedio: "60 cm a 95 cm",
    tamanhoMaximo: "1,20 m",
    pesoMedio: "5 kg a 14 kg",
    pesoMaximo: "22 kg",
    porte: "grande",
    status: { forca: 94, velocidade: 80, tamanho: 88, dificuldade: 80 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Aymara.JPG/960px-Aymara.JPG",
    descricao: "O gigante entre as espécies de Hoplias. Predador implacável capaz de destruir iscas de madeira dura com sua mordida colossal.",
    iscas: {
      naturais: ["Peixes inteiros", "Pedaços de piranha e cará"],
      artificiais: ["Poppers gigantes", "Zaras de 13 a 15 cm com rattling forte", "Iscas de hélice"]
    },
    melhorEpoca: "Julho a Novembro (águas baixas e limpas)",
    tecnicasPesca: "Arremesso em estruturas de pedrais e fendas de rochas com trabalho de superfície estalado e barulhento.",
    curiosidades: [
      "Possui uma mordida com pressão capaz de entortar garatéias reforçadas 4X ou 6X.",
      "Costuma perseguir a isca até a borda do barco antes de desferir o bote final."
    ]
  },
  {
    id: "pirarucu",
    nome: "Pirarucu",
    nomeCientifico: "Arapaima gigas",
    categoria: "agua-doce",
    categoriasAdicionais: ["pesqueiro"],
    habitat: "Lagos de várzea, meandros abandonados e canais lentos da Amazônia",
    regiao: "Bacia Amazônica e Pesqueiros de grande porte",
    alimentacao: "Peixes, caramujos, caranguejos e pequenos animais terrestres caídos (Carnívoro)",
    tamanhoMedio: "1,20 m a 2,20 m",
    tamanhoMaximo: "3,00 m",
    pesoMedio: "30 kg a 100 kg",
    pesoMaximo: "200 kg",
    porte: "gigante",
    status: { forca: 100, velocidade: 70, tamanho: 100, dificuldade: 95 },
    dificuldade: "Muito Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Arapaima_gigas_at_Beijing_aquarium.JPG/960px-Arapaima_gigas_at_Beijing_aquarium.JPG",
    descricao: "O maior peixe de escamas de água doce do planeta. Conhecido como o 'Bacalhau da Amazônia', é um fóssil vivo com escamas duras como armaduras.",
    iscas: {
      naturais: ["Peixes inteiros (aruanãs, piaus, tilápias)", "Filé sangrento"],
      artificiais: ["Grandes streamers de fly pesca", "Shads grandes com jig head reforçado", "Plugs de subsuperfície"]
    },
    melhorEpoca: "Setembro a Dezembro (estiagem amazônica em reservas manejadas)",
    tecnicasPesca: "Pesca visual no momento do 'boquejo' (quando o peixe sobe para respirar ar atmosférico na superfície).",
    curiosidades: [
      "Precisa subir à superfície a cada 15-20 minutos para encher sua bexiga natatória com oxigênio do ar.",
      "Suas escamas gigantes são tão resistentes que resistem a ataques de dentes de piranhas."
    ]
  },
  {
    id: "jau",
    nome: "Jaú",
    nomeCientifico: "Zungaro zungaro",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Grandes poções fundos, pés de cachoeira e remansos de pedrais",
    regiao: "Bacias Amazônica, Araguaia-Tocantins e do Prata",
    alimentacao: "Peixes de fundo, cascudos, curimbatás e mandis (Carnívoro de fundo)",
    tamanhoMedio: "90 cm a 1,50 m",
    tamanhoMaximo: "1,80 m",
    pesoMedio: "20 kg a 60 kg",
    pesoMaximo: "100 kg",
    porte: "gigante",
    status: { forca: 98, velocidade: 55, tamanho: 96, dificuldade: 86 },
    dificuldade: "Muito Dificil",
    foto: "https://inaturalist-open-data.s3.amazonaws.com/photos/320535172/original.jpg",
    descricao: "Um dos maiores bagres da América do Sul. Peixe de couro atarracado e muito pesado, com cabeça larga e força extrema de ancoragem no fundo.",
    iscas: {
      naturais: ["Piau vivo", "Curimbatá", "Mandi", "Tuvira grande"],
      artificiais: ["Não é comum o uso de iscas artificiais"]
    },
    melhorEpoca: "Meses de seca nos rios",
    tecnicasPesca: "Pesca embarcada de rodada ou apoitado sobre poções com chumbadas pesadas de até 300g.",
    curiosidades: [
      "Ao ser fisgado, costuma se prender em fendas de pedras no fundo do rio, exigindo paciência.",
      "Sua boca é tão ampla que pode engolir presas de vários quilos inteiras."
    ]
  },
  {
    id: "piraiba",
    nome: "Piraíba",
    nomeCientifico: "Brachyplatystoma filamentosum",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Canais principais e poços mais profundos dos grandes rios amazônicos",
    regiao: "Bacia Amazônica e Araguaia-Tocantins",
    alimentacao: "Grandes peixes de cardume (Carnívoro de topo)",
    tamanhoMedio: "1,40 m a 2,50 m",
    tamanhoMaximo: "3,20 m",
    pesoMedio: "40 kg a 120 kg",
    pesoMaximo: "250 kg",
    porte: "gigante",
    status: { forca: 100, velocidade: 82, tamanho: 100, dificuldade: 98 },
    dificuldade: "Muito Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Brachyplatystoma_filamentosum_Totto.jpg",
    descricao: "O maior peixe de couro da Amazônia e um dos maiores peixes de água doce do mundo. Conhecida como o monstro sagrado dos rios.",
    iscas: {
      naturais: ["Matrinxã inteiro", "Curimbatá vivo", "Pedaços grandes de peixe com sangue"],
      artificiais: ["Iscas artificiais não são empregadas"]
    },
    melhorEpoca: "Agosto a Novembro (Rio Araguaia e Rio Negro)",
    tecnicasPesca: "Equipamento super pesado de 100 a 130 lb, linha multifilamento de 0.80mm+ e anzol encastoado com cabo de aço.",
    curiosidades: [
      "Quando jovem, é chamada de 'Filhote' até atingir cerca de 50 a 60 kg.",
      "Tem longos filamentos que saem de suas nadadeiras caudais e peitorais quando jovem."
    ]
  },
  {
    id: "curimbata",
    nome: "Curimbatá",
    nomeCientifico: "Prochilodus lineatus",
    categoria: "agua-doce",
    categoriasAdicionais: ["pesqueiro"],
    habitat: "Fundos lodosos de rios, represas e lagoas marginais",
    regiao: "Bacia do Prata, São Francisco e rios do Sul/Sudeste",
    alimentacao: "Detritos orgânicos do fundo, algas e lodo (Iliófago / Detritívoro)",
    tamanhoMedio: "30 cm a 55 cm",
    tamanhoMaximo: "75 cm",
    pesoMedio: "1,5 kg a 4 kg",
    pesoMaximo: "8 kg",
    porte: "medio",
    status: { forca: 70, velocidade: 74, tamanho: 55, dificuldade: 76 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Prochilodus_lineatus_351939209.jpg",
    descricao: "Peixe prateado com boca em formato de ventosa repleta de pequenos lábios raspadores. Proporciona brigas intensas e é muito técnico para fisgar.",
    iscas: {
      naturais: ["Massa à base de farinha de milho azeda", "Massa de sangue", "Bolinhas de massa de queijo"],
      artificiais: ["Não pega iscas artificiais convencionais"]
    },
    melhorEpoca: "Primavera e Verão",
    tecnicasPesca: "Pesca com chuveirinho pequeno ou anzol com pequenas bolinhas de massa bem firme rente ao fundo.",
    curiosidades: [
      "Emite um som roncador audível sob a água durante suas migrações reprodutivas.",
      "É a espécie base de alimentação da maioria dos grandes predadores dos rios brasileiros."
    ]
  },
  {
    id: "lambari",
    nome: "Lambari",
    nomeCientifico: "Astyanax bimaculatus",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Pequenos córregos, riachos límpidos, represas e margens de rios",
    regiao: "Todo o território brasileiro",
    alimentacao: "Insetos aquáticos, sementes caídas, migalhas e larvas (Onívoro)",
    tamanhoMedio: "8 cm a 16 cm",
    tamanhoMaximo: "20 cm",
    pesoMedio: "30 g a 100 g",
    pesoMaximo: "200 g",
    porte: "pequeno",
    status: { forca: 25, velocidade: 80, tamanho: 15, dificuldade: 20 },
    dificuldade: "Facil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Astyanax_bimaculatus_%2845778390%29.jpg/960px-Astyanax_bimaculatus_%2845778390%29.jpg",
    descricao: "O pequeno grande peixe das pescarias de infância. Ágil, colorido e com apetite insaciável, diverte pescadores de todas as idades.",
    iscas: {
      naturais: ["Bichinho da laranja", "Bolinhas de pão", "Minhoca picada", "Milho triturado"],
      artificiais: ["Micro moscas secas em Fly Ultra Light", "Micro spinners 00"]
    },
    melhorEpoca: "Dias ensolarados do ano inteiro",
    tecnicasPesca: "Vara de bambu ou telescópica fina com pequena boia de isopor e anzol mosquitinho.",
    curiosidades: [
      "Excelente isca viva para predadores maiores como Tucunaré, Dourado e Robalo.",
      "Apresenta uma mancha preta ovalada característica logo atrás do opérculo e outra no pedúnculo caudal."
    ]
  },
  {
    id: "acara-disco",
    nome: "Acará-Disco",
    nomeCientifico: "Symphysodon aequifasciatus",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Igarapés calmos, galhadas submersas e águas ácidas da Amazônia",
    regiao: "Bacia Amazônica",
    alimentacao: "Pequenos invertebrados, larvas e zooplâncton (Onívoro)",
    tamanhoMedio: "12 cm a 20 cm",
    tamanhoMaximo: "25 cm",
    pesoMedio: "150 g a 350 g",
    pesoMaximo: "500 g",
    porte: "pequeno",
    status: { forca: 35, velocidade: 45, tamanho: 25, dificuldade: 65 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Symphysodon%2C_Acar%C3%A1_disco_A74260220241123.jpg",
    descricao: "Conhecido mundialmente como o 'Rei do Aquário' pela sua beleza estonteante, formato de disco perfeito e cores hipnotizantes.",
    iscas: {
      naturais: ["Larvas de insetos", "Pequenas minhocas d'água"],
      artificiais: ["Micro moscas"]
    },
    melhorEpoca: "Época de águas baixas na Amazônia",
    tecnicasPesca: "Pesca artesanal e de observação científica / aquarismo responsável.",
    curiosidades: [
      "Os pais alimentam os alevinos secretando um muco nutritivo especial através de sua própria pele.",
      "Sua coloração e intensidade das faixas mudam de acordo com o humor e status social no cardume."
    ]
  },
  {
    id: "piapara",
    nome: "Piapara",
    nomeCientifico: "Megaleporinus obtusidens",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Poções de rios, remansos de canais e cevas em leitos arenosos",
    regiao: "Bacia do Prata, Paraná, Paraguai e Uruguai",
    alimentacao: "Grãos caídos, caramujos, caranguejos pequenos e sementes (Onívoro)",
    tamanhoMedio: "35 cm a 60 cm",
    tamanhoMaximo: "80 cm",
    pesoMedio: "1,5 kg a 4 kg",
    pesoMaximo: "7 kg",
    porte: "medio",
    status: { forca: 78, velocidade: 85, tamanho: 60, dificuldade: 82 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Megaleporinus_obtusidens_107498091.jpg",
    descricao: "Peixe muito esportivo e refinado para pesca de espera em rios. Tem três manchas escuras no dorso e dentes incisivos afiados.",
    iscas: {
      naturais: ["Milho verde azedo", "Caranguejinho de rio", "Minhoca", "Massa doce"],
      artificiais: ["Raramente pega artificiais"]
    },
    melhorEpoca: "Novembro a Março",
    tecnicasPesca: "Pesca apoitada com ceva contínua de milho no fundo e linha fina (0.28mm a 0.33mm).",
    curiosidades: [
      "Pega a isca com toques imperceptíveis na ponta da vara (a famosa 'mordidinha da piapara').",
      "Possui dentes afiados como os de um roedor, capazes de cortar sementes duras."
    ]
  },
  {
    id: "bicuda",
    nome: "Bicuda",
    nomeCientifico: "Boulengerella cuvieri",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Corredeiras rápidas, praias e ressacas de rios da bacia amazônica e do Tocantins",
    regiao: "Bacia Amazônica, Araguaia e Tocantins",
    alimentacao: "Pequenos peixes que nadam próximos à flor da água (Piscívoro)",
    tamanhoMedio: "45 cm a 75 cm",
    tamanhoMaximo: "90 cm",
    pesoMedio: "1 kg a 3,5 kg",
    pesoMaximo: "6 kg",
    porte: "medio",
    status: { forca: 74, velocidade: 96, tamanho: 65, dificuldade: 68 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Boulengerella_cuvieri.jpg/960px-Boulengerella_cuvieri.jpg",
    descricao: "Peixe de corpo esguio e focinho alongado com boca cheia de dentes afiados. Extremamente rápida na superfície, saltando repetidamente.",
    iscas: {
      naturais: ["Pequenos peixes vivos"],
      artificiais: ["Zaras velozes", "Poppers pequenos", "Colheres leves", "Iscas de fly"]
    },
    melhorEpoca: "Meses de estiagem nos rios",
    tecnicasPesca: "Recolhimento contínuo e ultrarrápido na flor da água.",
    curiosidades: [
      "Ataca em velocidades impressionantes cortando a água como uma flecha.",
      "Sua boca dura e óssea costuma cuspir anzóis com facilidade durante os saltos."
    ]
  },
  {
    id: "aruana",
    nome: "Aruanã",
    nomeCientifico: "Osteoglossum bicirrhosum",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Lagos de várzea, igapós e margens calmas de rios amazônicos",
    regiao: "Bacia Amazônica e Guianas",
    alimentacao: "Peixes, insetos, crustáceos e pequenos animais da superfície (Carnívoro)",
    tamanhoMedio: "60 cm a 90 cm",
    tamanhoMaximo: "1,20 m",
    pesoMedio: "3 kg a 6 kg",
    pesoMaximo: "6 kg",
    porte: "grande",
    status: { forca: 72, velocidade: 88, tamanho: 78, dificuldade: 72 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/5/56/Arowana%28Osteoglossum_bicirrhosum%29.jpg",
    descricao: "Peixe de superfície conhecido pelos saltos impressionantes e pelos dois barbilhões na ponta da mandíbula.",
    iscas: {
      naturais: ["Pequenos peixes vivos", "Insetos de superfície", "Camarão de água doce"],
      artificiais: ["Poppers pequenos", "Iscas de hélice leves", "Streamers"]
    },
    melhorEpoca: "Meses de cheia e início da vazante",
    tecnicasPesca: "Arremessos delicados junto às margens alagadas, trabalhando a isca na superfície.",
    curiosidades: [
      "Consegue saltar para capturar insetos e pequenos animais sobre galhos baixos.",
      "A boca voltada para cima é uma adaptação para caçar na superfície."
    ]
  },
  {
    id: "piranha-vermelha",
    nome: "Piranha-Vermelha",
    nomeCientifico: "Pygocentrus nattereri",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Lagoas marginais, remansos e rios de águas quentes",
    regiao: "Bacias Amazônica, do Prata e do São Francisco",
    alimentacao: "Peixes, crustáceos, insetos e matéria animal (Carnívoro oportunista)",
    tamanhoMedio: "20 cm a 30 cm",
    tamanhoMaximo: "50 cm",
    pesoMedio: "300 g a 800 g",
    pesoMaximo: "1,2 kg",
    porte: "pequeno",
    status: { forca: 45, velocidade: 76, tamanho: 35, dificuldade: 45 },
    dificuldade: "Facil",
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Pygocentrus%20nattereri.jpg?width=960",
    descricao: "Piranha de corpo prateado e ventre avermelhado, importante predadora e necrófaga dos ambientes de água doce.",
    iscas: {
      naturais: ["Pequenos pedaços de peixe", "Camarão de água doce", "Carne de peixe"],
      artificiais: ["Pequenos spinners", "Micro jigs"]
    },
    melhorEpoca: "Ano inteiro, especialmente em águas quentes",
    tecnicasPesca: "Pesca leve com líder resistente e isca natural, respeitando as regras locais.",
    curiosidades: [
      "Seus dentes triangulares se encaixam como uma tesoura.",
      "O ventre vermelho fica mais intenso em indivíduos adultos."
    ]
  },
  {
    id: "pirapitinga",
    nome: "Pirapitinga",
    nomeCientifico: "Piaractus brachypomus",
    categoria: "agua-doce",
    categoriasAdicionais: ["pesqueiro"],
    habitat: "Rios, lagos de várzea e áreas alagadas da Amazônia",
    regiao: "Bacias Amazônica e do Orinoco; também criada em pesqueiros",
    alimentacao: "Frutos, sementes, folhas e pequenos invertebrados (Onívoro)",
    tamanhoMedio: "40 cm a 65 cm",
    tamanhoMaximo: "88 cm",
    pesoMedio: "4 kg a 10 kg",
    pesoMaximo: "20 kg",
    porte: "grande",
    status: { forca: 82, velocidade: 78, tamanho: 72, dificuldade: 66 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Piaractus_brachypomus_Zoologischer_Garten_Berlin.JPG",
    descricao: "Redondo amazônico de corpo alto e coloração avermelhada nas nadadeiras, muito forte e procurado na pesca esportiva.",
    iscas: {
      naturais: ["Frutas maduras", "Milho verde", "Massa doce", "Sementes"],
      artificiais: ["Rações artificiais", "Miçangas", "Pequenos spinners"]
    },
    melhorEpoca: "Meses quentes e período de vazante",
    tecnicasPesca: "Pesca de fundo ou de superfície com ceva e equipamento médio pesado.",
    curiosidades: [
      "Seus dentes fortes trituram sementes e frutos de casca dura.",
      "É uma espécie importante para a dispersão de sementes na floresta alagada."
    ]
  },
  {
    id: "cascudo",
    nome: "Cascudo",
    nomeCientifico: "Hypostomus plecostomus",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Rios, córregos e margens com pedras, troncos e correnteza",
    regiao: "Bacias costeiras e do norte da América do Sul",
    alimentacao: "Algas, biofilme, matéria vegetal e pequenos invertebrados (Onívoro)",
    tamanhoMedio: "20 cm a 35 cm",
    tamanhoMaximo: "50 cm",
    pesoMedio: "300 g a 900 g",
    pesoMaximo: "1,5 kg",
    porte: "medio",
    status: { forca: 58, velocidade: 34, tamanho: 42, dificuldade: 60 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Common_pleco%28Hypostomus_plecostomus%29_%2828698%29.jpg",
    descricao: "Peixe de couro protegido por placas ósseas e boca em forma de ventosa, adaptado a viver junto ao fundo.",
    iscas: {
      naturais: ["Massa de pão", "Milho", "Minhoca", "Vegetais"],
      artificiais: ["Não costuma atacar iscas artificiais"]
    },
    melhorEpoca: "Períodos de chuva e água em movimento",
    tecnicasPesca: "Pesca de fundo com pequenas iscas naturais próximas a pedras e troncos.",
    curiosidades: [
      "As placas ósseas funcionam como proteção contra predadores e abrasão.",
      "A boca ventral permite raspar algas e organismos das superfícies submersas."
    ]
  },
  {
    id: "apapa",
    nome: "Apapá",
    nomeCientifico: "Pellona castelnaeana",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Lagos, ressacas e margens calmas dos grandes rios amazônicos",
    regiao: "Bacia Amazônica e Tocantins-Araguaia",
    alimentacao: "Peixes pequenos e insetos aquáticos (Piscívoro)",
    tamanhoMedio: "30 cm a 55 cm",
    tamanhoMaximo: "75 cm",
    pesoMedio: "500 g a 2 kg",
    pesoMaximo: "3 kg",
    porte: "medio",
    status: { forca: 62, velocidade: 91, tamanho: 56, dificuldade: 64 },
    dificuldade: "Medio",
    foto: "https://commons.wikimedia.org/wiki/Special:FilePath/Pellona%20castelnaeana.jpg?width=960",
    descricao: "Peixe prateado de corpo comprimido e boca voltada para cima, conhecido pelos ataques rápidos na superfície.",
    iscas: {
      naturais: ["Lambari vivo", "Pequenos peixes", "Camarão de água doce"],
      artificiais: ["Plugs de meia-água", "Poppers pequenos", "Colheres"]
    },
    melhorEpoca: "Vazante e águas baixas",
    tecnicasPesca: "Arremesso de iscas pequenas em praias, remansos e entradas de lagoas.",
    curiosidades: [
      "A mandíbula projetada para cima facilita a captura de presas na flor da água.",
      "É um peixe muito veloz, apesar do corpo alto e comprimido."
    ]
  },
  {
    id: "jeju",
    nome: "Jeju",
    nomeCientifico: "Hoplerythrinus unitaeniatus",
    categoria: "agua-doce",
    categoriasAdicionais: [],
    habitat: "Lagoas, brejos, campos alagados e pequenos cursos de água",
    regiao: "Bacias Amazônica, do Prata e do São Francisco",
    alimentacao: "Peixes pequenos, insetos e crustáceos (Carnívoro)",
    tamanhoMedio: "15 cm a 25 cm",
    tamanhoMaximo: "35 cm",
    pesoMedio: "100 g a 300 g",
    pesoMaximo: "500 g",
    porte: "pequeno",
    status: { forca: 42, velocidade: 70, tamanho: 30, dificuldade: 38 },
    dificuldade: "Facil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/a/af/Hoplerythrinus_unitaeniatus_174300214.jpg",
    descricao: "Pequeno predador de águas rasas, parente das traíras e capaz de tolerar ambientes com pouco oxigênio.",
    iscas: {
      naturais: ["Minhoca", "Pequenos peixes", "Insetos"],
      artificiais: ["Micro spinners", "Pequenos plugs"]
    },
    melhorEpoca: "Primavera e Verão",
    tecnicasPesca: "Pesca ultraleve em margens com vegetação e água parada.",
    curiosidades: [
      "Consegue respirar ar atmosférico em situações de baixa oxigenação.",
      "Costuma permanecer escondido entre plantas aquáticas para emboscar suas presas."
    ]
  },

  // ============================
  // ÁGUA SALGADA (12 ESPÉCIES)
  // ============================
  {
    id: "robalo-flecha",
    nome: "Robalo-Flecha",
    nomeCientifico: "Centropomus undecimalis",
    categoria: "agua-salgada",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Estuários, manguezais, canais marítimos, baías e até rios de água doce",
    regiao: "Toda a costa brasileira (do Norte ao Sul)",
    alimentacao: "Camarões vivos, pequenos peixes (manjubas, sardinhas e paratis) (Carnívoro)",
    tamanhoMedio: "50 cm a 90 cm",
    tamanhoMaximo: "1,30 m",
    pesoMedio: "3 kg a 10 kg",
    pesoMaximo: "24 kg",
    porte: "grande",
    status: { forca: 88, velocidade: 85, tamanho: 80, dificuldade: 84 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Centropomus_undecimalis.jpg/960px-Centropomus_undecimalis.jpg",
    descricao: "O rei dos estuários e manguezais. Apresenta corpo prateado, nadadeiras amareladas e uma clássica linha lateral preta bem demarcada.",
    iscas: {
      naturais: ["Camarão vivo no jig head ou com boia", "Lambaris de água doce nos canais"],
      artificiais: ["Camarões de silicone (soft)", "Jigs de cerdas", "Plug de meia-água suspenso", "Stickbaits"]
    },
    melhorEpoca: "Outono e Inverno no Sul/Sudeste; ano todo no Nordeste",
    tecnicasPesca: "Trabalho minucioso de camarão soft dando toques de ponta de vara próximos a estruturas e pilares de pontes.",
    curiosidades: [
      "É um peixe eurialino, tolerando transitar da água 100% salgada até água doce límpida dos rios.",
      "Consegue engolir presas por sucção abrindo subitamente sua cavidade bucal."
    ]
  },
  {
    id: "robalo-peva",
    nome: "Robalo-Peva",
    nomeCientifico: "Centropomus parallelus",
    categoria: "agua-salgada",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Galhadas em mangues, raízes e cabeceiras de rios estuarinos",
    regiao: "Litoral brasileiro",
    alimentacao: "Camarões pequenos, caranguejinhos e pequenos alevinos (Carnívoro)",
    tamanhoMedio: "25 cm a 45 cm",
    tamanhoMaximo: "65 cm",
    pesoMedio: "600 g a 2 kg",
    pesoMaximo: "5 kg",
    porte: "pequeno",
    status: { forca: 70, velocidade: 78, tamanho: 45, dificuldade: 62 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Centropomus_parallelus.jpg/960px-Centropomus_parallelus.jpg",
    descricao: "Menor e mais atarracado que o Robalo-Flecha. Habita as partes mais fechadas de mangues e proporciona capturas técnicas.",
    iscas: {
      naturais: ["Camarão vivo pequeno"],
      artificiais: ["Micro camarões soft de 5 a 7 cm", "Mini jigs", "Grubs", "Iscas de superfície pequenas"]
    },
    melhorEpoca: "Meses de maré morta em manguezais",
    tecnicasPesca: "Pincho preciso de arremesso bem embaixo das raízes de mangue vermelho.",
    curiosidades: [
      "Geralmente vive mais tempo em águas de baixa salinidade do que o flecha.",
      "Possui dorso mais elevado (formato corcunda) e dentes minúsculos em lixa."
    ]
  },
  {
    id: "dourado-do-mar",
    nome: "Dourado-do-Mar",
    nomeCientifico: "Coryphaena hippurus",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Alto-mar, águas oceânicas azuis e em volta de objetos flutuantes",
    regiao: "Águas oceânicas tropicais e subtropicais de todo o Brasil",
    alimentacao: "Peixes voadores, lulas, cavalinhas e caranguejos pelágicos (Carnívoro veloz)",
    tamanhoMedio: "70 cm a 1,30 m",
    tamanhoMaximo: "1,80 m",
    pesoMedio: "5 kg a 18 kg",
    pesoMaximo: "40 kg",
    porte: "grande",
    status: { forca: 94, velocidade: 100, tamanho: 88, dificuldade: 86 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Common_Dolphinfish_Monterey_Bay.jpg/960px-Common_Dolphinfish_Monterey_Bay.jpg",
    descricao: "Um dos peixes mais espetaculares do oceano. Cores verde-esmeralda, azul e dourado brilhantes com saltos acrobáticos em alta velocidade.",
    iscas: {
      naturais: ["Lula fresca", "Sardinha", "Pedaço de bonito"],
      artificiais: ["Lulas de corrico (trolling lures)", "Poppers grandes de mar", "Colheres oceânicas"]
    },
    melhorEpoca: "Verão e início de Outono (águas quentes do mar aberto)",
    tecnicasPesca: "Corrico oceânico a velocidades de 6 a 9 nós ou arremesso de poppers perto de troncos à deriva.",
    curiosidades: [
      "Os machos adultos desenvolvem uma crista frontal vertical na cabeça muito pronunciada.",
      "É um dos peixes de nado mais rápido do mundo, ultrapassando 80 km/h em arrancadas curtas."
    ]
  },
  {
    id: "tarpon",
    nome: "Tarpon (Camurupim)",
    nomeCientifico: "Megalops atlanticus",
    categoria: "agua-salgada",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Baías rasas, praias, canais de maré e rios de água doce costeiros",
    regiao: "Costa Norte e Nordeste do Brasil",
    alimentacao: "Sardinhas, paratis, camarões e caranguejos nadadores (Carnívoro)",
    tamanhoMedio: "1,00 m a 1,80 m",
    tamanhoMaximo: "2,40 m",
    pesoMedio: "20 kg a 60 kg",
    pesoMaximo: "130 kg",
    porte: "gigante",
    status: { forca: 99, velocidade: 92, tamanho: 96, dificuldade: 96 },
    dificuldade: "Muito Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Megalops_atlanticus.jpg/960px-Megalops_atlanticus.jpg",
    descricao: "O 'Rei Prateado dos Mares'. Famoso por suas escamas reluzentes e saltos gigantescos que chegam a 3 metros de altura fora da água.",
    iscas: {
      naturais: ["Sardinha viva", "Parati vivo", "Siri"],
      artificiais: ["Plugs de barbela pesados", "Grandes moscas de Fly Marítimo", "Shads com anzol reforçado"]
    },
    melhorEpoca: "Outubro a Março no litoral do Nordeste e Norte",
    tecnicasPesca: "Pesca com mosca marítima (Saltwater Fly) ou arremesso em bocas de barra com iscas de meia-água robustas.",
    curiosidades: [
      "Pode viver mais de 50 anos e possui boca quase tão dura quanto pedra calcária.",
      "Apenas 1 em cada 5 tarpons fisgados costuma ser embarcado devido aos saltos violentos."
    ]
  },
  {
    id: "garoupa-verdadeira",
    nome: "Garoupa-Verdadeira",
    nomeCientifico: "Epinephelus marginatus",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Recifes de coral, costões rochosos e lajes submarinas de 5 a 60 metros",
    regiao: "Litoral Sudeste e Sul do Brasil",
    alimentacao: "Polvos, caranguejos, siris e peixes de pedra (Carnívoro de fundo)",
    tamanhoMedio: "40 cm a 85 cm",
    tamanhoMaximo: "1,40 m",
    pesoMedio: "3 kg a 15 kg",
    pesoMaximo: "50 kg",
    porte: "grande",
    status: { forca: 95, velocidade: 60, tamanho: 84, dificuldade: 82 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/5/55/Epinephelus_marginatus.jpg",
    descricao: "Peixe nobre de fundo rochoso com corpo robusto e boca enorme. Arranca imediatamente para dentro de tocas de pedra ao ser fisgada.",
    iscas: {
      naturais: ["Polvo fresco", "Sardinha inteira", "Pedaços de lula", "Caranguejo vivo"],
      artificiais: ["Slow jigs pesados", "Jigs de borracha (rubber jigs)", "Grandes shads"]
    },
    melhorEpoca: "Meses de mar calmo em lajes marinhas",
    tecnicasPesca: "Pesca vertical de fundo com slow jigging ou linhas de fundo travadas para evitar que entoque.",
    curiosidades: [
      "É uma espécie hermafrodita proterogínica: todos nascem fêmeas e os maiores tornam-se machos.",
      "Sua carne é considerada uma das maiores iguarias da culinária litorânea mundial."
    ]
  },
  {
    id: "pargo",
    nome: "Pargo",
    nomeCientifico: "Pagrus pagrus",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Fundos de areia, cascalho e pedras de 20 a 100 metros de profundidade",
    regiao: "Costa brasileira, especialmente Nordeste e Sudeste",
    alimentacao: "Crustáceos, moluscos e pequenos peixes bentônicos (Carnívoro)",
    tamanhoMedio: "30 cm a 55 cm",
    tamanhoMaximo: "75 cm",
    pesoMedio: "1,5 kg a 4 kg",
    pesoMaximo: "9 kg",
    porte: "medio",
    status: { forca: 74, velocidade: 68, tamanho: 58, dificuldade: 55 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Pagrus_pagrus.jpg/960px-Pagrus_pagrus.jpg",
    descricao: "Peixe de belíssima coloração rosada avermelhada com dentes fortes para esmagar conchas de moluscos e cascas de caranguejo.",
    iscas: {
      naturais: ["Camarão descascado", "Tiras de lula", "Pedaço de sardinha"],
      artificiais: ["Sabikis com isca", "Micro jigs de fundo"]
    },
    melhorEpoca: "Outono e Inverno",
    tecnicasPesca: "Pesca de fundo embarcada com chicotes múltiplos (paternoster) e chumbada pesada.",
    curiosidades: [
      "Tem dentes caninos frontais fortes e molares trituradores no fundo da boca.",
      "Forma grandes cardumes em bancos oceânicos profundos."
    ]
  },
  {
    id: "anchova",
    nome: "Anchova",
    nomeCientifico: "Pomatomus saltatrix",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Águas agitadas, espumas de costões rochosos e mar aberto costeiro",
    regiao: "Litoral Sudeste e Sul do Brasil",
    alimentacao: "Sardinhas, manjubas, lulas e pequenos peixes pelágicos (Piscívoro voraz)",
    tamanhoMedio: "40 cm a 75 cm",
    tamanhoMaximo: "1,10 m",
    pesoMedio: "2 kg a 6 kg",
    pesoMaximo: "14 kg",
    porte: "medio",
    status: { forca: 85, velocidade: 92, tamanho: 72, dificuldade: 72 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Pomatomus_saltatrix_287704526.jpg",
    descricao: "Apelidada de o 'Tubarão dos Costões'. Caçadora implacável com dentes triangulares cortantes e ataques ferozes em cardume.",
    iscas: {
      naturais: ["Sardinha inteira ou em filé", "Tiras de lula"],
      artificiais: ["Jumping jigs", "Poppers de mar", "Colheres pesadas", "Plugs de meia-água"]
    },
    melhorEpoca: "Meses de Inverno e Primavera (Maio a Novembro no Sudeste/Sul)",
    tecnicasPesca: "Arremesso de jumping jigs nas espumas de costões rochosos e ilhas costeiras.",
    curiosidades: [
      "Cardumes em frenesi alimentar podem atacar qualquer coisa que caia na água, cortando linhas com facilidade.",
      "É um dos peixes marinhos mais rápidos e agressivos nas pescarias de costão."
    ]
  },
  {
    id: "tainha",
    nome: "Tainha",
    nomeCientifico: "Mugil cephalus",
    categoria: "agua-salgada",
    categoriasAdicionais: ["agua-doce"],
    habitat: "Praias oceânicas, estuários, baías e lagoas salobras",
    regiao: "Todo o litoral brasileiro, com destaque para a Região Sul",
    alimentacao: "Microalgas, detritos marinhos e matéria orgânica no fundo (Detritívoro)",
    tamanhoMedio: "35 cm a 65 cm",
    tamanhoMaximo: "85 cm",
    pesoMedio: "1 kg a 3,5 kg",
    pesoMaximo: "7 kg",
    porte: "medio",
    status: { forca: 68, velocidade: 80, tamanho: 60, dificuldade: 85 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Mugil_cephalus.jpg/960px-Mugil_cephalus.jpg",
    descricao: "Peixe prateado clássico das migrações de inverno no Brasil. Muito desconfiada e difícil de fisgar com anzol convencional.",
    iscas: {
      naturais: ["Miolo de pão com queijo ralado", "Massa de farinha com sardinha prensada", "Lodo"],
      artificiais: ["Moscas de fly marítimo imitando algas"]
    },
    melhorEpoca: "Maio a Julho (época do famoso inverno e safra da tainha no Sul)",
    tecnicasPesca: "Pesca com boia sensível e micro anzol com miolo de pão umedecido.",
    curiosidades: [
      "Protagoniza saltos frequentes para fora da água sem motivo aparente de fuga de predadores.",
      "Realiza uma das maiores migrações reprodutivas ao longo da costa sul do Brasil."
    ]
  },
  {
    id: "badejo-quadrado",
    nome: "Badejo-Quadrado",
    nomeCientifico: "Mycteroperca bonaci",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Recifes de corais profundos, parcéis e naufrágios oceânicos",
    regiao: "Costa brasileira, especialmente Nordeste e Espírito Santo",
    alimentacao: "Peixes recifais, polvos, caranguejos e lulas (Carnívoro de emboscada)",
    tamanhoMedio: "60 cm a 1,10 m",
    tamanhoMaximo: "1,50 m",
    pesoMedio: "8 kg a 25 kg",
    pesoMaximo: "65 kg",
    porte: "gigante",
    status: { forca: 96, velocidade: 66, tamanho: 92, dificuldade: 88 },
    dificuldade: "Muito Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Mycteroperca_bonaci.jpg/960px-Mycteroperca_bonaci.jpg",
    descricao: "Um dos mais potentes membros da família dos serranídeos. Corpo escuro com retângulos geométricos característicos.",
    iscas: {
      naturais: ["Peixes vivos no fundo", "Polvo inteiro", "Lula"],
      artificiais: ["Vertical Jigs pesados", "Slow Jigs de 150g a 300g"]
    },
    melhorEpoca: "Meses de mar calmo em parcéis distantes da costa",
    tecnicasPesca: "Pesca com jumping jigs trabalhados com toques rápidos perto de estruturas no fundo oceânico.",
    curiosidades: [
      "Sua primeira arrancada para o fundo é uma das mais brutas dos oceanos tropicais.",
      "Gosta de habitar as estruturas internas de antigos naufrágios afundados."
    ]
  },
  {
    id: "cavala",
    nome: "Cavala",
    nomeCientifico: "Scomberomorus cavalla",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Águas oceânicas costeiras e mar aberto",
    regiao: "Litoral do Nordeste, Sudeste e Norte do Brasil",
    alimentacao: "Cardumes de sardinhas, peixes-voadores e lulas (Piscívoro veloz)",
    tamanhoMedio: "60 cm a 1,20 m",
    tamanhoMaximo: "1,70 m",
    pesoMedio: "4 kg a 15 kg",
    pesoMaximo: "40 kg",
    porte: "grande",
    status: { forca: 88, velocidade: 98, tamanho: 85, dificuldade: 80 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/8/80/King_mackerel_%28_Scomberomorus_cavalla_%29.jpg",
    descricao: "Peixe pelágico hidrodinâmico em formato de torpedo. Possui dentes em forma de navalha e atinge velocidades espantosas em águas abertas.",
    iscas: {
      naturais: ["Sardinha fresca no corrico", "Filé de peixe"],
      artificiais: ["Plugs de barbela metálica", "Colheres de corrico pesadas", "Jigs"]
    },
    melhorEpoca: "Verão e Outono",
    tecnicasPesca: "Corrico oceânico a 5-7 nós com empate de aço flexível indispensável.",
    curiosidades: [
      "Pode saltar mais de 4 metros fora da água ao atingir sua presa em velocidade máxima.",
      "Seus dentes cortam linhas de monofilamento grossas como se fossem linhas de costura."
    ]
  },
  {
    id: "peixe-espada",
    nome: "Peixe-Espada",
    nomeCientifico: "Trichiurus lepturus",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Águas costeiras, canais de portos e baías durante a noite",
    regiao: "Toda a costa brasileira",
    alimentacao: "Pequenos peixes, camarões e lulas (Carnívoro noturno voraz)",
    tamanhoMedio: "60 cm a 1,10 m",
    tamanhoMaximo: "1,50 m",
    pesoMedio: "800 g a 2,5 kg",
    pesoMaximo: "5 kg",
    porte: "medio",
    status: { forca: 65, velocidade: 82, tamanho: 75, dificuldade: 52 },
    dificuldade: "Medio",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/A_Box_of_Largehead_hairtail_at_Tsuen_Wan.jpg/960px-A_Box_of_Largehead_hairtail_at_Tsuen_Wan.jpg",
    descricao: "Corpo fino e prateado como uma fita de aço brilhante, sem escamas e com mandíbula repleta de presas caninas afiadas.",
    iscas: {
      naturais: ["Filé de sardinha fresca", "Tiras de lula com luz química"],
      artificiais: ["Iscas com luz química (starlite)", "Jigs prateados luminosos"]
    },
    melhorEpoca: "Outono e Inverno (pescaria predominantemente noturna)",
    tecnicasPesca: "Pesca noturna com boia iluminada por starlite ou jigs prateados em canais.",
    curiosidades: [
      "Nada frequentemente em posição vertical na coluna d'água para emboscar presas que nadam acima dele.",
      "Sua pele reflete a luz como um espelho de prata polida."
    ]
  },
  {
    id: "xareu",
    nome: "Xaréu",
    nomeCientifico: "Caranx hippos",
    categoria: "agua-salgada",
    categoriasAdicionais: [],
    habitat: "Costões rochosos, praias de tombo, canais e mar aberto",
    regiao: "Costa Norte, Nordeste e Sudeste do Brasil",
    alimentacao: "Cardumes de sardinhas, manjubas e pequenos caranguejos (Carnívoro)",
    tamanhoMedio: "50 cm a 90 cm",
    tamanhoMaximo: "1,25 m",
    pesoMedio: "4 kg a 16 kg",
    pesoMaximo: "32 kg",
    porte: "grande",
    status: { forca: 96, velocidade: 94, tamanho: 84, dificuldade: 82 },
    dificuldade: "Dificil",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Caranx_hippos.jpg/960px-Caranx_hippos.jpg",
    descricao: "O touro das águas salgadas. Corpo robusto e musculoso com cauda fina e bifurcada que gera uma tração contínua e incansável.",
    iscas: {
      naturais: ["Sardinha viva", "Parati", "Tiras de lula"],
      artificiais: ["Poppers gigantes trabalhados rápido", "Jumping jigs", "Colheres pesadas"]
    },
    melhorEpoca: "Primavera e Verão",
    tecnicasPesca: "Pesca na praia (surfcasting) ou pincho de poppers nas espumas de quebra-mares.",
    curiosidades: [
      "Emite um som seco e roncador quando retirado da água.",
      "Nada em cardumes organizados que cercam e encurralam cardumes de peixes menores contra praias e costões."
    ]
  }
];

// ==========================================================================
// 2. BANCO DE DADOS — MÉTODOS HELPER
// ==========================================================================

const PeixesDB = {
  getAll() { return PEIXES_DATA; },

  getById(id) { return PEIXES_DATA.find(p => p.id === id); },

  getByCategoria(cat) {
    if (cat === "todos") return PEIXES_DATA;
    return PEIXES_DATA.filter(p => p.categoria === cat || (p.categoriasAdicionais || []).includes(cat));
  },

  getCounters() {
    return {
      pesqueiro: PEIXES_DATA.filter(p => p.categoria === "pesqueiro" || (p.categoriasAdicionais||[]).includes("pesqueiro")).length,
      aguaDoce:  PEIXES_DATA.filter(p => p.categoria === "agua-doce"  || (p.categoriasAdicionais||[]).includes("agua-doce")).length,
      aguaSalgada: PEIXES_DATA.filter(p => p.categoria === "agua-salgada" || (p.categoriasAdicionais||[]).includes("agua-salgada")).length,
    };
  }
};

// ==========================================================================
// 3. FAVORITOS MANAGER
// ==========================================================================

const FavoritosManager = {
  _key: "fishdex_favoritos",

  getAll() {
    try { return JSON.parse(localStorage.getItem(this._key)) || []; }
    catch { return []; }
  },

  save(list) {
    try { localStorage.setItem(this._key, JSON.stringify(list)); } catch {}
  },

  isFav(id) { return this.getAll().includes(id); },

  toggle(id) {
    let list = this.getAll();
    const idx = list.indexOf(id);
    if (idx >= 0) { list.splice(idx, 1); }
    else { list.push(id); }
    this.save(list);
    return idx < 0;
  },

  count() { return this.getAll().length; }
};

// ===========================================================================
// 3B. CAPTURAS REGISTRADAS
// ===========================================================================

const CapturasManager = {
  _key: "fishdex_capturas",

  getAll() {
    try {
      const data = JSON.parse(localStorage.getItem(this._key));
      return Array.isArray(data) ? data : [];
    } catch { return []; }
  },

  save(list) {
    try { localStorage.setItem(this._key, JSON.stringify(list)); } catch {}
  },

  add(captura) {
    const list = this.getAll();
    list.unshift({ ...captura, id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}` });
    this.save(list);
  },

  remove(id) {
    this.save(this.getAll().filter(captura => captura.id !== id));
  }
};

// ===========================================================================
// 3C. TEMA DA INTERFACE
// ===========================================================================

const ThemeManager = {
  _key: "fishdex_tema",

  getTheme() {
    try { return localStorage.getItem(this._key) || "dark"; }
    catch { return "dark"; }
  },

  apply(theme) {
    const nextTheme = theme === "light" ? "light" : "dark";
    document.body.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    const button = document.getElementById("themeToggle");
    if (button) {
      const isLight = nextTheme === "light";
      button.querySelector(".theme-toggle-icon").textContent = "Tema";
      button.querySelector(".theme-toggle-label").textContent = isLight ? "Escuro" : "Claro";
      button.setAttribute("aria-label", isLight ? "Ativar tema escuro" : "Ativar tema claro");
      button.title = isLight ? "Ativar tema escuro" : "Ativar tema claro";
    }
  },

  toggle() {
    const nextTheme = this.getTheme() === "light" ? "dark" : "light";
    try { localStorage.setItem(this._key, nextTheme); } catch {}
    this.apply(nextTheme);
  }
};

// ==========================================================================
// 4. FILTROS MANAGER
// ==========================================================================

const FiltrosManager = {
  _state: {
    habitat: "todos",
    texto: "",
    alimentacao: "todos",
    porte: "todos",
    dificuldade: "todos",
    ordem: "nome-asc"
  },

  setState(key, val) { this._state[key] = val; },
  getState() { return { ...this._state }; },

  _normalize(str) {
    return String(str || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  },

  applyFilters() {
    const s = this._state;
    let list = PEIXES_DATA;

    // Habitat filter
    if (s.habitat === "favoritos") {
      const favs = FavoritosManager.getAll();
      list = list.filter(p => favs.includes(p.id));
    } else if (s.habitat !== "todos") {
      list = list.filter(p => p.categoria === s.habitat || (p.categoriasAdicionais || []).includes(s.habitat));
    }

    // Text search
    if (s.texto.length >= 2) {
      const q = this._normalize(s.texto);
      list = list.filter(p => {
        const haystack = this._normalize([
          p.nome, p.nomeCientifico, p.categoria, p.habitat,
          p.regiao, p.alimentacao, (p.iscas?.naturais || []).join(" "),
          (p.iscas?.artificiais || []).join(" ")
        ].join(" "));
        return haystack.includes(q);
      });
    }

    // Alimentação filter
    if (s.alimentacao !== "todos") {
      list = list.filter(p => this._normalize(p.alimentacao).includes(this._normalize(s.alimentacao)));
    }

    // Porte filter
    if (s.porte !== "todos") {
      list = list.filter(p => p.porte === s.porte);
    }

    // Dificuldade filter
    if (s.dificuldade !== "todos") {
      list = list.filter(p => p.dificuldade === s.dificuldade);
    }

    // Ordenação
    list = [...list];
    switch (s.ordem) {
      case "nome-asc":       list.sort((a,b) => a.nome.localeCompare(b.nome)); break;
      case "nome-desc":      list.sort((a,b) => b.nome.localeCompare(a.nome)); break;
      case "forca-desc":     list.sort((a,b) => b.status.forca - a.status.forca); break;
      case "velocidade-desc":list.sort((a,b) => b.status.velocidade - a.status.velocidade); break;
      case "tamanho-desc":   list.sort((a,b) => b.status.tamanho - a.status.tamanho); break;
      case "dificuldade-desc":list.sort((a,b) => b.status.dificuldade - a.status.dificuldade); break;
    }

    return list;
  }
};

// ==========================================================================
// 5. COMPARADOR MANAGER
// ==========================================================================

const ComparadorManager = {
  render(p1id, p2id) {
    const p1 = PeixesDB.getById(p1id);
    const p2 = PeixesDB.getById(p2id);
    if (!p1 || !p2) return "";

    const statLabels = [
      { key: "forca",      label: "Força",      fill: "fill-strength" },
      { key: "velocidade", label: "Velocidade",  fill: "fill-speed" },
      { key: "tamanho",    label: "Porte",       fill: "fill-size" },
      { key: "dificuldade",label: "Dificuldade", fill: "fill-diff" }
    ];

    const statsHtml = statLabels.map(s => {
      const v1 = p1.status[s.key], v2 = p2.status[s.key];
      const win1 = v1 > v2, win2 = v2 > v1;
      return `
        <div class="compare-bar-item">
          <div class="stat-header-row">
            <span class="stat-num ${win1 ? "winning" : ""}">${v1}</span>
            <span class="stat-name">${s.label}</span>
            <span class="stat-num ${win2 ? "winning" : ""}">${v2}</span>
          </div>
          <div class="dual-progress-bar">
            <div class="side left-side"><div class="bar-p1" style="width:${v1}%"></div></div>
            <div class="side right-side"><div class="bar-p2" style="width:${v2}%"></div></div>
          </div>
        </div>`;
    }).join("");

    const infoRow = (label, v1, v2) => `
      <div class="compare-info-row">
        <span class="val" style="max-width:40%;text-align:left">${v1}</span>
        <span class="label" style="text-align:center">${label}</span>
        <span class="val" style="max-width:40%;text-align:right">${v2}</span>
      </div>`;

    return `
      <div class="compare-grid">
        ${App.renderCompareSide(p1, "p1")}
        <div class="compare-vs-badge"><span>VS</span></div>
        ${App.renderCompareSide(p2, "p2")}
      </div>
      <div class="compare-detailed-section glass">
        <h3>Comparativo de Atributos</h3>
        <div class="compare-bars-list">${statsHtml}</div>
        <br/>
        <div class="compare-bars-list">
          ${infoRow("Tamanho Máx.",  p1.tamanhoMaximo, p2.tamanhoMaximo)}
          ${infoRow("Peso Máx.",     p1.pesoMaximo,    p2.pesoMaximo)}
          ${infoRow("Habitat",       p1.habitat,       p2.habitat)}
          ${infoRow("Dificuldade",   p1.dificuldade,   p2.dificuldade)}
        </div>
      </div>`;
  }
};

// ==========================================================================
// 6. APP CONTROLLER
// ==========================================================================

const App = {
  _currentView: "home",
  _pendingCaptureDelete: null,

  init() {
    ThemeManager.apply(ThemeManager.getTheme());
    this._createBubbles();
    this._updateCounters();
    this._renderFishOfTheDay();
    this._populateCompareSelects();
    this._populateCaptureFishSelect();
    this._setupEventListeners();
    this._updateFavBadge();
    this._renderCatalog();
    this._renderCaptures();
  },

  // --- Bolhas de água decorativas ---
  _createBubbles() {
    const container = document.getElementById("bubbleContainer");
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const b = document.createElement("div");
      b.className = "water-bubble";
      const size = 6 + Math.random() * 20;
      b.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${8+Math.random()*18}s;animation-delay:${Math.random()*10}s;opacity:${0.2+Math.random()*0.4}`;
      container.appendChild(b);
    }
  },

  // --- Contadores nos cards de categoria ---
  _updateCounters() {
    const c = PeixesDB.getCounters();
    const el = (id, txt) => { const e = document.getElementById(id); if(e) e.textContent = txt; };
    el("countPesqueiro",   c.pesqueiro   + " peixes");
    el("countAguaDoce",    c.aguaDoce    + " peixes");
    el("countAguaSalgada", c.aguaSalgada + " peixes");
  },

  // --- Peixe do Dia ---
  _renderFishOfTheDay() {
    const box = document.getElementById("fishOfTheDayCard");
    if (!box) return;
    const seed = new Date().toDateString();
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i), hash |= 0;
    const peixe = PEIXES_DATA[Math.abs(hash) % PEIXES_DATA.length];

    box.innerHTML = `
      <div class="fotd-container glass">
        <div class="fotd-badge">Peixe do Dia</div>
        <div class="fotd-content">
          <div class="fotd-image-box">
            <img class="fotd-image" src="${peixe.foto}" alt="${peixe.nome}"
              onerror="this.src='https://via.placeholder.com/340x240/0b1a2f/00e5ff?text=${encodeURIComponent(peixe.nome)}'" />
            <div class="fotd-tags">${this._renderBadges(peixe)}</div>
          </div>
          <div class="fotd-info">
            <div class="fotd-header">
              <div>
                <div class="fotd-name">${peixe.nome}</div>
                <div class="fotd-scientific">${peixe.nomeCientifico}</div>
              </div>
            </div>
            <div class="fotd-curiosity">${peixe.curiosidades[0]}</div>
            <div class="fotd-metrics">
              <div class="metric"><span class="m-label">Porte</span><span class="m-val">${peixe.tamanhoMedio}</span></div>
              <div class="metric"><span class="m-label">Peso Médio</span><span class="m-val">${peixe.pesoMedio}</span></div>
              <div class="metric"><span class="m-label">Dificuldade</span><span class="m-val ${this._diffClass(peixe.dificuldade)}">${peixe.dificuldade}</span></div>
            </div>
            <div class="fotd-actions">
              <button class="btn-primary" onclick="App.openModal('${peixe.id}')">Ver Ficha Completa</button>
              <button class="btn-secondary" onclick="App._navigate('explorar')">Ver Catálogo</button>
            </div>
          </div>
        </div>
      </div>`;
  },

  // --- Catálogo de peixes ---
  _renderCatalog() {
    const grid = document.getElementById("fishGrid");
    const counter = document.getElementById("resultsCounter");
    const empty = document.getElementById("emptyState");
    if (!grid) return;

    const list = FiltrosManager.applyFilters();
    if (counter) counter.textContent = `${list.length} espécie${list.length !== 1 ? "s" : ""} encontrada${list.length !== 1 ? "s" : ""}`;

    if (!list.length) {
      grid.innerHTML = "";
      if (empty) {
        empty.classList.remove("hidden");
        empty.innerHTML = `<div class="empty-content"><span class="empty-icon">Busca</span><h3>Nenhum peixe encontrado</h3><p>Tente outros filtros ou limpe a pesquisa.</p><button class="btn-primary" id="emptyResetBtn">Limpar Filtros</button></div>`;
        document.getElementById("emptyResetBtn")?.addEventListener("click", () => this._resetFilters());
      }
      return;
    }

    if (empty) empty.classList.add("hidden");

    grid.innerHTML = list.map((p, idx) => `
      <div class="fish-card" style="animation-delay:${idx * 0.04}s" onclick="App.openModal('${p.id}')">
        <div class="fish-card-header">
          <div class="fish-image-wrap">
            <img class="fish-card-image" src="${p.foto}" alt="${p.nome}"
              onerror="this.src='https://via.placeholder.com/400x190/0b1a2f/00e5ff?text=${encodeURIComponent(p.nome)}'" loading="lazy" />
          </div>
          <button class="card-fav-btn ${FavoritosManager.isFav(p.id) ? "active" : ""}"
            onclick="event.stopPropagation();App.toggleFav('${p.id}',this)" title="Favoritar">${FavoritosManager.isFav(p.id) ? "Favoritado" : "Favoritar"}</button>
          <span class="card-difficulty-badge ${this._diffClass(p.dificuldade)}">${p.dificuldade}</span>
        </div>
        <div class="fish-card-body">
          <div class="category-pills">${this._renderBadges(p)}</div>
          <h3 class="fish-title">${p.nome}</h3>
          <p class="fish-scientific">${p.nomeCientifico}</p>
          <p class="fish-habitat">${p.habitat}</p>
          <div class="fish-quick-stats">
            <div class="quick-stat"><span class="qs-label">PORTE</span><span class="qs-val">${p.tamanhoMedio}</span></div>
            <div class="quick-stat"><span class="qs-label">PESO MÉDIO</span><span class="qs-val">${p.pesoMedio}</span></div>
          </div>
          <div class="card-stat-bars">
            <div class="mini-bar-row"><span class="mb-label">Força</span><div class="mb-track"><div class="mb-fill fill-strength" style="width:${p.status.forca}%"></div></div></div>
            <div class="mini-bar-row"><span class="mb-label">Vel.</span><div class="mb-track"><div class="mb-fill fill-speed" style="width:${p.status.velocidade}%"></div></div></div>
          </div>
        </div>
        <div class="fish-card-footer">
          <button class="btn-card-details" onclick="event.stopPropagation();App.openModal('${p.id}')">Ver detalhes <span class="arrow">→</span></button>
          <button class="btn-card-compare" onclick="event.stopPropagation();App.addToCompare('${p.id}')" title="Comparar">Comparar</button>
        </div>
      </div>`).join("");
  },

  // --- Modal de ficha detalhada ---
  openModal(id) {
    const p = PeixesDB.getById(id);
    const backdrop = document.getElementById("fishModalBackdrop");
    const content  = document.getElementById("fishModalContent");
    if (!p || !backdrop || !content) return;

    const isFav = FavoritosManager.isFav(p.id);

    content.innerHTML = `
      <div class="modal-inner glass">
        <div class="modal-top-bar">
          <div class="modal-badge-group">
            ${this._renderBadges(p)}
            <span class="badge badge-diff ${this._diffClass(p.dificuldade)}">${p.dificuldade}</span>
          </div>
          <button class="modal-close" onclick="App.closeModal()">Fechar</button>
        </div>
        <div class="modal-hero-split">
          <div class="modal-image-column">
            <div class="modal-img-frame">
              <img class="modal-fish-img" src="${p.foto}" alt="${p.nome}"
                onerror="this.src='https://via.placeholder.com/380x280/0b1a2f/00e5ff?text=${encodeURIComponent(p.nome)}'" />
            </div>
            <div class="modal-action-buttons">
              <button class="btn-fav-toggle ${isFav ? "is-favorited" : ""}" id="modalFavBtn" onclick="App.toggleFavModal('${p.id}')">
                ${isFav ? "Favoritado" : "Favoritar"}
              </button>
              <button class="btn-compare-action" onclick="App.addToCompare('${p.id}');App.closeModal()">Comparar</button>
            </div>
          </div>
          <div class="modal-info-column">
            <h2 class="modal-fish-name">${p.nome}</h2>
            <p class="modal-fish-scientific">${p.nomeCientifico}</p>
            <div class="modal-biometry-grid">
              <div class="bio-item"><span class="bio-label">Habitat</span><span class="bio-val">${p.habitat}</span></div>
              <div class="bio-item"><span class="bio-label">Região</span><span class="bio-val">${p.regiao}</span></div>
              <div class="bio-item"><span class="bio-label">Tamanho Médio</span><span class="bio-val">${p.tamanhoMedio}</span></div>
              <div class="bio-item"><span class="bio-label">Tamanho Máximo</span><span class="bio-val">${p.tamanhoMaximo}</span></div>
              <div class="bio-item"><span class="bio-label">Peso Médio</span><span class="bio-val">${p.pesoMedio}</span></div>
              <div class="bio-item"><span class="bio-label">Peso Máximo</span><span class="bio-val">${p.pesoMaximo}</span></div>
              <div class="bio-item" style="grid-column:1/-1"><span class="bio-label">Alimentação</span><span class="bio-val">${p.alimentacao}</span></div>
            </div>
            <div class="modal-stats-section">
              <p class="section-title">Atributos de Pesca</p>
              <div class="stat-meters-list">
                ${[
                  { key:"forca",       label:"Força",      fill:"fill-strength"},
                  { key:"velocidade",  label:"Velocidade",  fill:"fill-speed"},
                  { key:"tamanho",     label:"Porte",       fill:"fill-size"},
                  { key:"dificuldade", label:"Dificuldade", fill:"fill-diff"}
                ].map(s => `
                  <div class="stat-meter-row">
                    <div class="stat-meta"><span class="sm-label">${s.label}</span><span class="sm-value">${p.status[s.key]}/100</span></div>
                    <div class="sm-track"><div class="sm-fill ${s.fill}" style="width:${p.status[s.key]}%"></div></div>
                  </div>`).join("")}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-extra-tabs">
          <div class="modal-guide-box">
            <div class="guide-title">Como Pescar</div>
            <div class="guide-grid">
              <div class="guide-col">
                <h5>Iscas Naturais</h5>
                <ul class="guide-tags">${(p.iscas?.naturais||[]).map(i=>`<li>${i}</li>`).join("")}</ul>
              </div>
              <div class="guide-col">
                <h5>Iscas Artificiais</h5>
                <ul class="guide-tags">${(p.iscas?.artificiais||[]).map(i=>`<li>${i}</li>`).join("")}</ul>
              </div>
            </div>
            <div class="guide-details-rows">
              <div><strong>Melhor Época:</strong> ${p.melhorEpoca}</div>
              <div><strong>Técnica:</strong> ${p.tecnicasPesca}</div>
            </div>
          </div>
          <div class="modal-trivia-box">
            <div class="trivia-title">Você Sabia?</div>
            <div class="trivia-list">
              ${(p.curiosidades||[]).map(c=>`<div class="trivia-item"><span class="check-icon"></span><span>${c}</span></div>`).join("")}
              ${p.descricao ? `<div class="trivia-item"><span class="check-icon"></span><span>${p.descricao}</span></div>` : ""}
            </div>
          </div>
        </div>
      </div>`;

    backdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  },

  closeModal() {
    document.getElementById("fishModalBackdrop")?.classList.add("hidden");
    document.body.style.overflow = "";
  },

  // --- Toggle Favorito ---
  toggleFav(id, btn) {
    const added = FavoritosManager.toggle(id);
    if (btn) {
      btn.textContent = added ? "Favoritado" : "Favoritar";
      btn.classList.toggle("active", added);
    }
    this._updateFavBadge();
    const habFilt = FiltrosManager.getState().habitat;
    if (habFilt === "favoritos") this._renderCatalog();
    this._showToast(added ? `${PeixesDB.getById(id)?.nome} adicionado aos favoritos!` : `Removido dos favoritos.`);
  },

  toggleFavModal(id) {
    const added = FavoritosManager.toggle(id);
    const btn = document.getElementById("modalFavBtn");
    if (btn) {
      btn.textContent = added ? "Favoritado" : "Favoritar";
      btn.classList.toggle("is-favorited", added);
    }
    this._updateFavBadge();
    this._showToast(added ? `${PeixesDB.getById(id)?.nome} favoritado!` : `Removido dos favoritos.`);
    const cards = document.querySelectorAll(`.card-fav-btn`);
    cards.forEach(c => {
      const cardId = c.closest(".fish-card")?.querySelector(".btn-card-details")?.getAttribute("onclick")?.match(/'([^']+)'/)?.[1];
      if (cardId === id) {
        c.textContent = added ? "Favoritado" : "Favoritar";
        c.classList.toggle("active", added);
      }
    });
  },

  _updateFavBadge() {
    const badge = document.getElementById("favCountBadge");
    if (badge) badge.textContent = FavoritosManager.count();
  },

  // --- Comparar ---
  addToCompare(id) {
    const sel1 = document.getElementById("compareSelect1");
    const sel2 = document.getElementById("compareSelect2");
    if (!sel1 || !sel2) return;
    if (!sel1.value || sel1.value === id) { sel1.value = id; }
    else { sel2.value = id; }
    this._navigate("comparar");
    this._renderCompare();
    this._showToast(`${PeixesDB.getById(id)?.nome} adicionado ao comparador!`);
  },

  _populateCompareSelects() {
    const opts = PEIXES_DATA.map(p => `<option value="${p.id}">${p.nome}</option>`).join("");
    ["compareSelect1","compareSelect2"].forEach((id,i) => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = opts;
        el.value = PEIXES_DATA[i]?.id || PEIXES_DATA[0].id;
      }
    });
    this._renderCompare();
  },

  _renderCompare() {
    const stage = document.getElementById("compareStage");
    const id1 = document.getElementById("compareSelect1")?.value;
    const id2 = document.getElementById("compareSelect2")?.value;
    if (stage && id1 && id2) stage.innerHTML = ComparadorManager.render(id1, id2);
  },

  renderCompareSide(p, side) {
    return `
      <div class="compare-card">
        <div class="compare-fish-header">
          <div class="compare-img-wrap">
            <img src="${p.foto}" alt="${p.nome}"
              onerror="this.src='https://via.placeholder.com/280x180/0b1a2f/00e5ff?text=${encodeURIComponent(p.nome)}'" />
            <span class="compare-tag">${side === "p1" ? "Peixe 1" : "Peixe 2"}</span>
          </div>
          <h3>${p.nome}</h3>
          <p class="scientific-name">${p.nomeCientifico}</p>
          <div class="compare-badges">${this._renderBadges(p)}</div>
        </div>
        <div class="compare-info-list">
          <div class="compare-info-row"><span class="label">Tamanho Médio</span><span class="val">${p.tamanhoMedio}</span></div>
          <div class="compare-info-row"><span class="label">Peso Médio</span><span class="val">${p.pesoMedio}</span></div>
          <div class="compare-info-row"><span class="label">Dificuldade</span><span class="val ${this._diffClass(p.dificuldade)}">${p.dificuldade}</span></div>
          <div class="compare-info-row"><span class="label">Habitat</span><span class="val">${p.habitat.substring(0,60)}...</span></div>
        </div>
      </div>`;
  },

  // --- Peixe do Dia e Surpreenda-me ---
  _surpriseMe() {
    const p = PEIXES_DATA[Math.floor(Math.random() * PEIXES_DATA.length)];
    this.openModal(p.id);
    this._showToast(`Descobriu: ${p.nome}!`);
  },

  // --- Navegação de Views ---
  _navigate(view) {
    this._currentView = view;
    const heroSection       = document.getElementById("heroSection");
    const categoriesSection = document.getElementById("categoriesSection");
    const fotdSection       = document.getElementById("fishOfTheDaySection");
    const exploreSection    = document.getElementById("exploreSection");
    const compareSection    = document.getElementById("compareSection");
    const capturesSection   = document.getElementById("capturesSection");

    const all = [heroSection, categoriesSection, fotdSection, exploreSection, compareSection, capturesSection];
    all.forEach(el => el?.classList.add("hidden"));

    document.querySelectorAll(".nav-link").forEach(nl => {
      nl.classList.toggle("active", nl.dataset.navView === view ||
        (view === "pesqueiro" && nl.dataset.navView === "explorar") ||
        (view === "agua-doce" && nl.dataset.navView === "explorar") ||
        (view === "agua-salgada" && nl.dataset.navView === "explorar") ||
        (view === "favoritos" && nl.dataset.navView === "explorar")
      );
    });

    switch (view) {
      case "home":
        heroSection?.classList.remove("hidden");
        categoriesSection?.classList.remove("hidden");
        fotdSection?.classList.remove("hidden");
        document.querySelector('[data-nav-view="home"]')?.classList.add("active");
        break;
      case "explorar":
        exploreSection?.classList.remove("hidden");
        FiltrosManager.setState("habitat", "todos");
        this._syncPills("todos");
        this._renderCatalog();
        document.querySelector('[data-nav-view="explorar"]')?.classList.add("active");
        break;
      case "pesqueiro":
      case "agua-doce":
      case "agua-salgada":
        exploreSection?.classList.remove("hidden");
        FiltrosManager.setState("habitat", view);
        this._syncPills(view);
        const titleMap = {
          "pesqueiro":   ["Peixes de Pesqueiro", "Espécies consagradas nos pesqueiros esportivos brasileiros."],
          "agua-doce":   ["Peixes de Água Doce",  "Espécies selvagens de rios, represas e lagos de água doce."],
          "agua-salgada":["Peixes de Água Salgada","Espécies marinhas e estuarinas do litoral brasileiro."]
        };
        document.getElementById("catalogTitle").textContent    = titleMap[view][0];
        document.getElementById("catalogSubtitle").textContent = titleMap[view][1];
        this._renderCatalog();
        document.querySelector('[data-nav-view="explorar"]')?.classList.add("active");
        break;
      case "favoritos":
        exploreSection?.classList.remove("hidden");
        FiltrosManager.setState("habitat", "favoritos");
        this._syncPills("favoritos");
        document.getElementById("catalogTitle").textContent    = "Meus Favoritos";
        document.getElementById("catalogSubtitle").textContent = "Suas espécies favoritas salvas localmente no navegador.";
        this._renderCatalog();
        document.querySelector('[data-nav-view="favoritos"]')?.classList.add("active");
        break;
      case "comparar":
        compareSection?.classList.remove("hidden");
        document.querySelector('[data-nav-view="comparar"]')?.classList.add("active");
        break;
      case "capturas":
        capturesSection?.classList.remove("hidden");
        this._renderCaptures();
        document.querySelector('[data-nav-view="capturas"]')?.classList.add("active");
        break;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  _syncPills(habitat) {
    document.querySelectorAll(".pill-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.habitatFilter === habitat);
    });
  },

  _resetFilters() {
    FiltrosManager.setState("texto", "");
    FiltrosManager.setState("habitat", "todos");
    FiltrosManager.setState("alimentacao", "todos");
    FiltrosManager.setState("porte", "todos");
    FiltrosManager.setState("dificuldade", "todos");
    FiltrosManager.setState("ordem", "nome-asc");

    const si = document.getElementById("searchInput"); if(si) si.value = "";
    const fa = document.getElementById("filterAlimentacao"); if(fa) fa.value = "todos";
    const fp = document.getElementById("filterPorte"); if(fp) fp.value = "todos";
    const fd = document.getElementById("filterDificuldade"); if(fd) fd.value = "todos";
    const so = document.getElementById("sortSelect"); if(so) so.value = "nome-asc";
    this._syncPills("todos");
    this._renderCatalog();
  },

  _populateCaptureFishSelect() {
    const select = document.getElementById("captureFish");
    if (!select) return;
    select.innerHTML = `<option value="">Selecione a espécie</option>` +
      PEIXES_DATA.slice().sort((a, b) => a.nome.localeCompare(b.nome)).map(p =>
        `<option value="${p.id}">${p.nome} (${p.nomeCientifico})</option>`
      ).join("");
    const date = document.getElementById("captureDate");
    if (date && !date.value) date.value = new Date().toISOString().slice(0, 10);
  },

  _escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
    }[char]));
  },

  _renderCaptures() {
    const box = document.getElementById("captureRecords");
    const count = document.getElementById("captureCount");
    if (!box) return;
    const records = CapturasManager.getAll();
    if (count) count.textContent = records.length;
    if (!records.length) {
      box.innerHTML = `<div class="capture-empty"><strong>Nenhum registro no diário</strong><span>Use o formulário para adicionar a primeira pescaria.</span></div>`;
      return;
    }

    box.innerHTML = records.map((captura, index) => {
      const peixe = PeixesDB.getById(captura.fish);
      const nomePeixe = peixe?.nome || captura.fishName || "Peixe não identificado";
      const data = captura.date ? new Date(`${captura.date}T12:00:00`).toLocaleDateString("pt-BR") : "Data não informada";
      return `
        <article class="capture-record" style="animation-delay:${index * 0.05}s">
          ${this._pendingCaptureDelete === captura.id ? `
            <div class="capture-delete-confirm" role="group" aria-label="Confirmar exclusão">
              <span>Excluir este registro?</span>
              <button class="capture-confirm-btn" type="button" onclick="App.confirmDeleteCapture('${this._escapeHtml(captura.id)}')">Confirmar</button>
              <button class="capture-cancel-btn" type="button" onclick="App.cancelDeleteCapture()">Cancelar</button>
            </div>` : `
            <button class="capture-delete" type="button" onclick="App.requestDeleteCapture('${this._escapeHtml(captura.id)}')" aria-label="Excluir registro" title="Excluir registro">Excluir</button>`}
          <div class="capture-record-top">
            <div>
              <h4>${this._escapeHtml(nomePeixe)}</h4>
              <span class="capture-record-person">${this._escapeHtml(captura.person)}</span>
            </div>
            <span class="capture-record-date">${this._escapeHtml(data)}</span>
          </div>
          <div class="capture-record-details">
            <div class="capture-detail"><strong>Peso</strong>${this._escapeHtml(captura.weight)} kg</div>
            <div class="capture-detail"><strong>Tamanho</strong>${this._escapeHtml(captura.length)} cm</div>
            <div class="capture-detail"><strong>Local</strong>${this._escapeHtml(captura.location)}</div>
            <div class="capture-detail"><strong>Isca utilizada</strong>${this._escapeHtml(captura.bait)}</div>
          </div>
        </article>`;
    }).join("");
  },

  _saveCapture(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const fish = PeixesDB.getById(data.get("fish"));
    if (!fish) return;
    const weight = String(data.get("weight") || "").replace(",", ".");
    if (!/^\d+(\.\d+)?$/.test(weight) || Number(weight) <= 0) {
      this._showToast("Informe um peso válido usando apenas números.");
      document.getElementById("captureWeight")?.focus();
      return;
    }
    const length = String(data.get("length") || "").replace(",", ".");
    if (!/^\d+(\.\d+)?$/.test(length) || Number(length) <= 0) {
      this._showToast("Informe um tamanho válido usando apenas números.");
      document.getElementById("captureLength")?.focus();
      return;
    }
    CapturasManager.add({
      fish: fish.id,
      fishName: fish.nome,
      person: String(data.get("person")).trim(),
      date: data.get("date"),
      weight,
      length,
      location: String(data.get("location")).trim(),
      bait: String(data.get("bait")).trim()
    });
    form.reset();
    document.getElementById("captureDate").value = new Date().toISOString().slice(0, 10);
    this._renderCaptures();
    this._showToast(`Registro de ${fish.nome} salvo!`);
  },

  requestDeleteCapture(id) {
    this._pendingCaptureDelete = id;
    this._renderCaptures();
  },

  cancelDeleteCapture() {
    this._pendingCaptureDelete = null;
    this._renderCaptures();
  },

  confirmDeleteCapture(id) {
    CapturasManager.remove(id);
    this._pendingCaptureDelete = null;
    this._renderCaptures();
    this._showToast("Registro removido.");
  },

  // --- Utilitários de UI ---
  _renderBadges(p) {
    const cats = [p.categoria, ...(p.categoriasAdicionais || [])];
    const map = {
      "pesqueiro":    ["badge-pesqueiro",    "Pesqueiro"],
      "agua-doce":    ["badge-agua-doce",    "Água Doce"],
      "agua-salgada": ["badge-agua-salgada", "Água Salgada"]
    };
    return [...new Set(cats)].map(c => map[c] ? `<span class="badge ${map[c][0]}">${map[c][1]}</span>` : "").join("");
  },

  _diffClass(d) {
    return { "Facil": "diff-facil", "Medio": "diff-medio", "Dificil": "diff-dificil", "Muito Dificil": "diff-muito-dificil" }[d] || "";
  },

  _showToast(msg) {
    let toast = document.getElementById("appToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "appToast";
      toast.className = "app-toast";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => toast.classList.remove("show"), 3000);
  },

  _assistantAnswer(question) {
    const normalized = FiltrosManager._normalize(question);
    const peixe = this._assistantFindFish(normalized);
    const fishingTerms = [
      "pesca", "peixe", "peixes", "isca", "iscas", "anzol", "vara", "carretilha", "molinete", "sistema", "montagem",
      "fundo", "boia", "cevadeira", "diretinho", "anteninha", "antena", "boia pao", "palminho", "estilo goiano", "torpedo", "corrico", "trolling", "fly", "pincho", "arremesso", "superficie", "rodada",
      "rio", "represa", "lago", "lagoa", "mar", "praia", "oceano", "pescador", "pescaria", "pesqueiro",
      "agua doce", "agua salgada", "clima", "tempo", "previsao", "chuva", "chuvas", "vento", "sol", "calor", "frio", "temperatura",
      "mare", "corrente", "profundidade", "diario", "captura", "registro", "comparar", "tamanho", "peso",
      "dourado", "tucunare", "tucuna", "tilapia", "pacu", "tambaqui", "tamba", "pintado", "surubim", "jau", "piraiba", "filhote", "pirarucu", "robalo", "anchova"
    ];
    const isFishingQuestion = fishingTerms.some(term => normalized.includes(term));

    if (!isFishingQuestion) {
      return "Sou o Seu Zé e meu chat se limita a pesca, peixes, iscas, clima e técnicas de pescaria.";
    }

    if (peixe) {
      const systemAnswer = this._assistantSystemAnswer(normalized, peixe);
      if (systemAnswer) return systemAnswer;
      if (normalized.includes("sistema") || normalized.includes("montagem") || normalized.includes("fundo") || normalized.includes("boia") || normalized.includes("cevadeira") || normalized.includes("corrico") || normalized.includes("trolling") || normalized.includes("fly") || normalized.includes("pincho") || normalized.includes("arremesso") || normalized.includes("superficie") || normalized.includes("rodada")) {
        if (normalized.includes("fundo") || normalized.includes("rodada")) return `${peixe.nome}: use pesca de fundo com isca natural e chumbo adequado. Na rodada, acompanhe a corrente e mantenha a isca próxima ao leito.`;
        if (normalized.includes("boia") || normalized.includes("cevadeira")) return `${peixe.nome}: use boia e ceva quando o peixe estiver ativo na meia-água ou superfície. Ajuste a altura do chicote conforme a profundidade.`;
        if (normalized.includes("corrico") || normalized.includes("trolling")) return `${peixe.nome}: o corrico funciona em áreas abertas. Varie a velocidade e passe a isca perto de estruturas ou quedas.`;
        if (normalized.includes("fly")) return `${peixe.nome}: no fly, use uma apresentação leve e combine o tamanho do streamer com o alimento disponível.`;
        if (normalized.includes("pincho") || normalized.includes("arremesso") || normalized.includes("superficie")) return `${peixe.nome}: use arremesso próximo a estruturas e trabalhe a isca na superfície ou meia-água, conforme a atividade do peixe.`;
        return `${peixe.nome}: o sistema depende do local e da profundidade. Comece com fundo para peixe de couro e arremesso ou boia para predadores ativos.`;
      }
      if (normalized.includes("isca") || normalized.includes("pescar") || normalized.includes("pega")) {
        return `${peixe.nome}: use ${peixe.iscas.naturais.slice(0, 2).join(" ou ")}. Artificial: ${peixe.iscas.artificiais[0]}.`;
      }
      if (normalized.includes("onde") || normalized.includes("habitat") || normalized.includes("local")) {
        return `${peixe.nome}: ${peixe.habitat}.`;
      }
      if (normalized.includes("tamanho") || normalized.includes("comprimento")) {
        return `${peixe.nome}: mede ${peixe.tamanhoMedio}; máximo de ${peixe.tamanhoMaximo}.`;
      }
      if (normalized.includes("peso") || normalized.includes("pesado")) {
        return `${peixe.nome}: peso médio de ${peixe.pesoMedio}; máximo de ${peixe.pesoMaximo}.`;
      }
      return `${peixe.nome} (${peixe.nomeCientifico}): ${peixe.alimentacao}. Melhor época: ${peixe.melhorEpoca}.`;
    }

    if (normalized.includes("diario") || normalized.includes("registro") || normalized.includes("captura")) {
      return "Abra o Diário de Pesca e registre pescador, espécie, peso, tamanho, local e isca.";
    }
    if (normalized.includes("agua doce") || normalized.includes("rio") || normalized.includes("represa")) {
      return "Use o filtro Água Doce. Consulte Tucunaré, Dourado, Traíra ou Pintado.";
    }
    if (normalized.includes("agua salgada") || normalized.includes("mar") || normalized.includes("praia")) {
      return "Observe maré, corrente e estrutura. Consulte Robalo, Anchova ou Dourado-do-Mar.";
    }
    if (normalized.includes("isca") || normalized.includes("iscas")) {
      return "Diga o peixe ou o local. Eu indico uma isca do catálogo.";
    }
    if (normalized.includes("chuva") || normalized.includes("chuvas")) {
      return "Com chuva leve, procure margens e águas mais oxigenadas. Com chuva forte, priorize segurança e espere a água baixar a turbidez.";
    }
    if (normalized.includes("vento")) {
      return "Vento moderado pode ativar a superfície e levar alimento para a margem. Vento forte dificulta o arremesso e pede mais segurança.";
    }
    if (normalized.includes("frio") || normalized.includes("temperatura baixa")) {
      return "No frio, muitos peixes ficam menos ativos. Tente trabalhar a isca mais devagar e pescar em horários de maior aquecimento.";
    }
    if (normalized.includes("calor") || normalized.includes("sol") || normalized.includes("temperatura alta")) {
      return "No calor, prefira começo da manhã, fim da tarde e áreas com sombra. Peixes de superfície podem ficar mais ativos nesses horários.";
    }
    if (normalized.includes("clima") || normalized.includes("tempo") || normalized.includes("previsao")) {
      return "Não tenho previsão local em tempo real. Para pescar, observe vento, chuva, temperatura, nível e turbidez da água.";
    }
    if (normalized.includes("comparar") || normalized.includes("diferenca")) {
      return "Abra Comparar e escolha duas espécies.";
    }
    const systemAnswer = this._assistantSystemAnswer(normalized);
    if (systemAnswer) return systemAnswer;
    if (normalized.includes("sistema") || normalized.includes("montagem") || normalized.includes("fundo") || normalized.includes("boia") || normalized.includes("cevadeira") || normalized.includes("corrico") || normalized.includes("trolling") || normalized.includes("fly") || normalized.includes("pincho") || normalized.includes("rodada")) {
      return "Diga o peixe e o local. Eu indico entre fundo, boia, corrico, pincho ou fly.";
    }
    return "Diga o peixe, a isca, o local, o tamanho ou o peso.";
  },

  _assistantSystemAnswer(normalized, peixe) {
    const nome = peixe ? ` para ${peixe.nome}` : "";
    if (normalized.includes("boia cevadeira") || normalized.includes("cevadeira")) {
      return `Boia cevadeira${nome}: indicada para lançar ração e trabalhar a isca na superfície ou meia-água. Ajuste o chicote à profundidade e use apenas onde a ceva é permitida.`;
    }
    if (normalized.includes("boia pao") || normalized.includes("boia de pao")) {
      return `Boia-pão${nome}: apresenta pão na superfície, comum para peixes que sobem para comer. Use montagem leve e fisgue com calma quando o peixe carregar a isca.`;
    }
    if (normalized.includes("palminho")) {
      return `Palminho${nome}: montagem de superfície usada com ração artificial, EVA ou miçangas. Trabalhe perto da ceva e mantenha o conjunto leve.`;
    }
    if (normalized.includes("anteninha") || normalized.includes("antena")) {
      return `Anteninha${nome}: isca de EVA ou material flutuante usada na superfície, geralmente próxima da ceva. Ajuste a distância do anzol para o peixe não estranhar o conjunto.`;
    }
    if (normalized.includes("estilo goiano")) {
      return `Estilo goiano${nome}: sistema de pesca de pesqueiro que costuma trabalhar ração, EVA ou miçangas na superfície, com apresentação delicada e próxima da ceva. Confira a regra do pesqueiro antes de montar.`;
    }
    if (normalized.includes("diretinho")) {
      return `Diretinho${nome}: montagem simples, com a isca apresentada diretamente ao peixe, usando pouco excesso de componentes. Funciona melhor quando o peixe está ativo e a água está limpa.`;
    }
    if (normalized.includes("boia torpedo") || normalized.includes("torpedo")) {
      return `Boia torpedo${nome}: boa para arremessos longos e para trabalhar isca na superfície ou meia-água. Regule o chicote conforme a profundidade e o vento.`;
    }
    if (normalized.includes("pesca de fundo") || normalized.includes("fundo")) {
      return `Pesca de fundo${nome}: use chumbo suficiente para manter a isca no leito, sem exagerar. Observe o tipo de fundo, a corrente e a atividade do peixe.`;
    }
    return null;
  },

  _assistantFindFish(normalized) {
    const directFish = PEIXES_DATA.find(p => normalized.includes(FiltrosManager._normalize(p.nome)));
    if (directFish) return directFish;
    const aliases = {
      "tucuna": "tucunare-acu",
      "tucunare": "tucunare-acu",
      "tucuna amarelo": "tucunare-amarelo",
      "surubim": "pintado",
      "surubi": "pintado",
      "filhote": "piraiba",
      "tamba": "tambaqui",
      "dourado do rio": "dourado",
      "jau": "jau",
      "piraiba": "piraiba"
    };
    const alias = Object.keys(aliases).find(name => normalized.includes(name));
    return alias ? PeixesDB.getById(aliases[alias]) : null;
  },

  _assistantIsFishingQuestion(question) {
    const normalized = FiltrosManager._normalize(question);
    return [
      "pesca", "peixe", "isca", "anzol", "vara", "carretilha", "molinete", "sistema", "montagem", "fundo", "boia", "cevadeira", "diretinho", "anteninha", "antena", "boia pao", "palminho", "estilo goiano", "torpedo", "corrico", "trolling", "fly", "pincho", "rio", "represa", "lago",
      "mar", "praia", "oceano", "pescador", "pescaria", "pesqueiro", "agua doce", "agua salgada",
      "clima", "tempo", "previsao", "chuva", "vento", "sol", "calor", "frio", "temperatura", "mare",
      "corrente", "profundidade", "tamanho", "peso", "dourado", "tucunare", "tucuna", "tilapia", "pacu", "tambaqui", "tamba",
      "pintado", "surubim", "jau", "piraiba", "filhote", "pirarucu", "robalo", "anchova"
    ].some(term => normalized.includes(term));
  },

  async _fetchFishingSource(question, peixe) {
    const searchTerm = `${peixe?.nomeCientifico || ""} ${question} pesca`.trim();
    const searchUrl = `https://pt.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchTerm)}&srlimit=1&format=json&origin=*`;
    const searchResponse = await fetch(searchUrl);
    if (!searchResponse.ok) throw new Error("Falha na busca");
    const searchData = await searchResponse.json();
    const result = searchData.query?.search?.[0];
    if (!result) return null;

    const pageUrl = `https://pt.wikipedia.org/w/api.php?action=query&pageids=${result.pageid}&prop=extracts&exintro=1&explaintext=1&exchars=520&format=json&origin=*`;
    const pageResponse = await fetch(pageUrl);
    if (!pageResponse.ok) throw new Error("Falha na fonte");
    const pageData = await pageResponse.json();
    const page = pageData.query?.pages?.[result.pageid];
    const extract = String(page?.extract || "").replace(/\s+/g, " ").trim();
    if (!extract) return null;
    return { extract, title: result.title };
  },

  _appendAssistantMessage(text, type) {
    const messages = document.getElementById("assistantMessages");
    if (!messages) return;
    const message = document.createElement("div");
    message.className = `assistant-message assistant-message-${type}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  },

  async _askAssistant(question) {
    const cleanQuestion = String(question || "").trim();
    if (!cleanQuestion) return;
    this._appendAssistantMessage(cleanQuestion, "user");
    this._appendAssistantMessage(this._assistantAnswer(cleanQuestion), "bot");
  },

  _toggleFishingAssistant(force) {
    const panel = document.getElementById("fishingAssistant");
    const toggle = document.getElementById("fishingAssistantToggle");
    if (!panel || !toggle) return;
    const open = typeof force === "boolean" ? force : panel.getAttribute("aria-hidden") === "true";
    panel.setAttribute("aria-hidden", String(!open));
    panel.classList.toggle("is-open", open);
    toggle.classList.toggle("is-hidden", open);
    if (open) {
      document.getElementById("assistantUnread")?.classList.add("hidden");
      document.getElementById("assistantInput")?.focus();
    }
  },

  _setupAssistantDrag() {
    const panel = document.getElementById("fishingAssistant");
    const header = panel?.querySelector(".assistant-header");
    if (!panel || !header) return;

    let dragState = null;
    header.addEventListener("pointerdown", event => {
      if (event.target.closest("button")) return;
      const rect = panel.getBoundingClientRect();
      dragState = { startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top };
      panel.style.left = `${rect.left}px`;
      panel.style.top = `${rect.top}px`;
      panel.style.right = "auto";
      panel.style.bottom = "auto";
      panel.style.transform = "none";
      panel.classList.add("is-dragging");
      header.setPointerCapture?.(event.pointerId);
    });

    header.addEventListener("pointermove", event => {
      if (!dragState) return;
      const maxLeft = Math.max(8, window.innerWidth - panel.offsetWidth - 8);
      const maxTop = Math.max(8, window.innerHeight - panel.offsetHeight - 8);
      const left = Math.min(maxLeft, Math.max(8, dragState.left + event.clientX - dragState.startX));
      const top = Math.min(maxTop, Math.max(8, dragState.top + event.clientY - dragState.startY));
      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
    });

    const stopDrag = () => {
      if (!dragState) return;
      dragState = null;
      panel.classList.remove("is-dragging");
    };
    header.addEventListener("pointerup", stopDrag);
    header.addEventListener("pointercancel", stopDrag);
  },

  _setupAssistantSuggestionsDrag() {
    const scroller = document.querySelector(".assistant-suggestions");
    if (!scroller) return;
    let dragState = null;
    let dragged = false;
    let suppressClick = false;

    scroller.addEventListener("pointerdown", event => {
      dragState = { startX: event.clientX, scrollLeft: scroller.scrollLeft };
      dragged = false;
      scroller.setPointerCapture?.(event.pointerId);
      scroller.classList.add("is-dragging");
    });

    scroller.addEventListener("pointermove", event => {
      if (!dragState) return;
      const distance = event.clientX - dragState.startX;
      if (Math.abs(distance) > 4) dragged = true;
      scroller.scrollLeft = dragState.scrollLeft - distance;
    });

    const stopSuggestionsDrag = event => {
      if (dragged) {
        suppressClick = true;
      }
      dragState = null;
      scroller.classList.remove("is-dragging");
    };

    scroller.addEventListener("pointerup", stopSuggestionsDrag, true);
    scroller.addEventListener("pointercancel", stopSuggestionsDrag, true);
    scroller.addEventListener("click", event => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }, true);
  },

  // --- Event Listeners ---
  _setupEventListeners() {

    // Alternância entre tema escuro e claro
    document.getElementById("themeToggle")?.addEventListener("click", () => ThemeManager.toggle());

    // Assistente virtual de pesca
    document.getElementById("fishingAssistantToggle")?.addEventListener("click", () => this._toggleFishingAssistant(true));
    document.getElementById("fishingAssistantClose")?.addEventListener("click", () => this._toggleFishingAssistant(false));
    this._setupAssistantDrag();
    this._setupAssistantSuggestionsDrag();
    document.getElementById("assistantForm")?.addEventListener("submit", event => {
      event.preventDefault();
      const input = document.getElementById("assistantInput");
      this._askAssistant(input?.value);
      if (input) input.value = "";
    });
    document.querySelectorAll("[data-assistant-question]").forEach(button => {
      button.addEventListener("click", () => this._askAssistant(button.dataset.assistantQuestion));
    });

    // Botão do hero
    document.getElementById("heroCtaBtn")?.addEventListener("click", () => this._navigate("explorar"));

    // Botão surpreenda-me no hero e topbar
    document.querySelectorAll(".btn-surprise-me").forEach(btn => btn.addEventListener("click", () => this._surpriseMe()));
    document.getElementById("navSurpriseBtn")?.addEventListener("click", () => this._surpriseMe());

    // Navegação pelos botões do menu
    document.querySelectorAll(".nav-link[data-nav-view]").forEach(btn => {
      btn.addEventListener("click", () => {
        this._navigate(btn.dataset.navView);
        document.getElementById("navLinks")?.classList.remove("open");
      });
    });

    // Brand logo → home
    document.querySelector(".brand[data-nav-view='home']")?.addEventListener("click", () => this._navigate("home"));

    // Cards de habitat
    document.querySelectorAll(".habitat-card[data-explore-habitat]").forEach(card => {
      card.addEventListener("click", () => this._navigate(card.dataset.exploreHabitat));
    });

    // Menu mobile
    document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
      document.getElementById("navLinks")?.classList.toggle("open");
    });

    // Pílulas de habitat
    document.querySelectorAll(".pill-btn[data-habitat-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        FiltrosManager.setState("habitat", btn.dataset.habitatFilter);
        this._syncPills(btn.dataset.habitatFilter);
        const t = document.getElementById("catalogTitle");
        const s = document.getElementById("catalogSubtitle");
        if(t) t.textContent = "Catálogo Completo de Peixes";
        if(s) s.textContent = "Filtrando por habitat selecionado.";
        this._renderCatalog();
      });
    });

    // Search input
    let searchTimer;
    document.getElementById("searchInput")?.addEventListener("input", e => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        FiltrosManager.setState("texto", e.target.value);
        this._renderCatalog();
      }, 280);
    });

    // Atalho "/" para focar na busca
    document.addEventListener("keydown", e => {
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        this._navigate("explorar");
        document.getElementById("searchInput")?.focus();
      }
      if (e.key === "Escape") this.closeModal();
    });

    // Filtros dropdown
    document.getElementById("filterAlimentacao")?.addEventListener("change", e => { FiltrosManager.setState("alimentacao", e.target.value); this._renderCatalog(); });
    document.getElementById("filterPorte")?.addEventListener("change", e => { FiltrosManager.setState("porte", e.target.value); this._renderCatalog(); });
    document.getElementById("filterDificuldade")?.addEventListener("change", e => { FiltrosManager.setState("dificuldade", e.target.value); this._renderCatalog(); });
    document.getElementById("sortSelect")?.addEventListener("change", e => { FiltrosManager.setState("ordem", e.target.value); this._renderCatalog(); });
    document.getElementById("resetAllFiltersBtn")?.addEventListener("click", () => this._resetFilters());

    // Cadastro de capturas
    document.getElementById("captureForm")?.addEventListener("submit", event => this._saveCapture(event));
    document.getElementById("captureWeight")?.addEventListener("input", event => {
      event.target.value = event.target.value.replace(/[^0-9.,]/g, "");
    });
    document.getElementById("captureLength")?.addEventListener("input", event => {
      event.target.value = event.target.value.replace(/[^0-9.,]/g, "");
    });

    // Fechar modal clicando no backdrop
    document.getElementById("fishModalBackdrop")?.addEventListener("click", e => {
      if (e.target === e.currentTarget) this.closeModal();
    });

    // Comparador
    document.getElementById("compareSelect1")?.addEventListener("change", () => this._renderCompare());
    document.getElementById("compareSelect2")?.addEventListener("change", () => this._renderCompare());
    document.getElementById("compareSwapBtn")?.addEventListener("click", () => {
      const s1 = document.getElementById("compareSelect1");
      const s2 = document.getElementById("compareSelect2");
      if (s1 && s2) { [s1.value, s2.value] = [s2.value, s1.value]; this._renderCompare(); }
    });
    document.getElementById("compareRandomBtn")?.addEventListener("click", () => {
      const ids = PEIXES_DATA.map(p => p.id);
      const i1 = Math.floor(Math.random() * ids.length);
      let i2 = Math.floor(Math.random() * ids.length);
      while (i2 === i1) i2 = Math.floor(Math.random() * ids.length);
      const s1 = document.getElementById("compareSelect1");
      const s2 = document.getElementById("compareSelect2");
      if (s1) s1.value = ids[i1];
      if (s2) s2.value = ids[i2];
      this._renderCompare();
      this._showToast("Duelo aleatório sorteado!");
    });
  }
};

// ==========================================================================
// 7. INICIALIZAÇÃO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
