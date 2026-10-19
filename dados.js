// =====================================================
// Revisão SARESP · Língua Inglesa · Prof. Carlos Augusto
// E.E. José Roberto Friebolin · 2026
// Conteúdo de cada ano. Para editar, mude só os textos.
//  lousa  -> o esquema curto para copiar no quadro
//  prof   -> roteiro do professor (aparece só com ?prof=1)
//  quiz   -> t:'one' (uma resposta) | t:'two' (marcar DUAS)
//            a: índices das respostas certas (começa em 0)
// =====================================================

const ARMADILHAS = {
  titulo: "As 3 armadilhas da prova",
  lousa: [
    "DUAS alternativas → marque 2!",
    "INCORRETA → procure a ERRADA",
    "RESPECTIVAMENTE → siga a ORDEM"
  ],
  texto: `<p>No SARESP, muita gente erra <b>não por causa do inglês</b>, mas porque não leu direito o que a pergunta pede.</p>
  <p>Antes de responder, <b>circule a palavra-chave do comando</b>. Ela diz o que você precisa fazer.</p>`,
  prof: [
    "Escreva as 3 linhas na lousa no 1º dia e deixe num canto até a prova.",
    "Toda questão corrigida em sala: pergunte \"qual era o comando?\" antes da resposta.",
    "Peer Instruction: vota → discute em dupla → vota de novo."
  ],
  quiz: [
    { t:"two", s:"<b>Indique as DUAS</b> frases que são cumprimentos (greetings).",
      o:["Good morning!","Thank you!","Hi!","Sorry!"], a:[0,2],
      e:"Good morning e Hi são cumprimentos. Viu? A pergunta pedia DUAS." },
    { t:"one", s:"Indique a alternativa <b>INCORRETA</b>.",
      o:["Cat = gato","Dog = cachorro","Fish = pássaro","Bird = pássaro"], a:[2],
      e:"Fish = peixe. A pergunta queria a ERRADA, não a certa!" },
    { t:"one", s:"Complete <b>respectivamente</b>: \"She ___ 12. They ___ friends.\"",
      o:["are / is","is / are","am / is","is / am"], a:[1],
      e:"She is, They are. Respectivamente = na ordem das lacunas." }
  ]
};

const ANOS = {
"6": {
  nome:"6º ano", cor:"#2a7f62",
  topicos:[
  { id:"6-conv", titulo:"Expressões do dia a dia", tag:"Convívio social",
    lousa:["please = por favor · thank you = obrigado","sorry = desculpa · excuse me = com licença","Hi / Hello = oi · Bye = tchau"],
    texto:`<p>A prova mostra um <b>bilhete, card ou diálogo</b> e pergunta: <i>para que serve essa mensagem?</i></p>
    <p>Dica: procure a palavra-chave. <b>Thank you</b> → agradecer. <b>Sorry</b> → pedir desculpas. <b>Excuse me</b> → pedir licença.</p>`,
    pega:"\"Excuse me\" (com licença) é diferente de \"Sorry\" (desculpa por um erro).",
    prof:["Lousa: as 3 linhas.","Mostre um card \"Thank you for the gift!\" e pergunte: para que serve?","Peer Instruction com as questões abaixo."],
    quiz:[
      { t:"one", s:"Um card diz: <i>\"Thank you for helping me!\"</i>. A mensagem serve para:",
        o:["pedir desculpas","agradecer","se apresentar","reclamar"], a:[1], e:"Thank you = obrigado → agradecer." },
      { t:"one", s:"Você esbarrou em alguém sem querer. O que diz?",
        o:["Sorry!","Good night!","Thank you!","Bye!"], a:[0], e:"Sorry = desculpa." },
      { t:"two", s:"Indique as <b>DUAS</b> formas educadas de pedir o número de emergência.",
        o:["What's the emergency number, please?","What is your name?","What is the emergency phone number?","How old are you?"], a:[0,2],
        e:"As duas perguntam pelo emergency number. Era para marcar DUAS!" }
    ]},
  { id:"6-tobe", titulo:"Verb to be", tag:"am · is · are",
    lousa:["I → AM","He / She / It → IS","You / We / They → ARE"],
    texto:`<p>O verbo <b>to be</b> significa <b>ser</b> ou <b>estar</b>.</p>
    <p><b>Negativa:</b> coloque <b>not</b> depois: <i>She is not (isn't) sad.</i></p>
    <p><b>Pergunta:</b> o verbo vai para a frente: <i>Is she sad?</i></p>`,
    pega:"Em perguntas de lacuna \"respectivamente\", olhe QUEM vem antes de cada lacuna.",
    prof:["Lousa: a tabelinha de 3 linhas.","Brincadeira: diga um pronome, a turma responde am/is/are.","Mostre um texto de apresentação (\"My name is…\") e circulem os verbos."],
    quiz:[
      { t:"one", s:"Complete respectivamente: \"My name ___ Josh. I ___ 24 years old.\"",
        o:["am / is","is / am","are / is","is / are"], a:[1], e:"My name IS, I AM." },
      { t:"one", s:"Qual frase está na <b>negativa</b>?",
        o:["He is happy.","Is he happy?","He isn't happy.","He happy is."], a:[2], e:"isn't = is not." },
      { t:"one", s:"\"Lucas and Ana ___ my friends.\"",
        o:["am","is","are","be"], a:[2], e:"Lucas and Ana = they → ARE." }
    ]},
  { id:"6-pron", titulo:"Pronomes", tag:"Trocar o nome",
    lousa:["menino → HE · menina → SHE","coisa / animal → IT","várias pessoas → THEY · eu + alguém → WE"],
    texto:`<p>Para não repetir o nome, usamos <b>pronomes</b>.</p>
    <p><i>Maria is 12.</i> → <b>She</b> is 12.<br><i>The dog is big.</i> → <b>It</b> is big.<br><i>Pedro and I are friends.</i> → <b>We</b> are friends.</p>`,
    pega:"\"Pedro and I\" vira WE (eu estou junto!). \"Pedro and Ana\" vira THEY.",
    prof:["Lousa: as 3 linhas.","Escreva 5 nomes; turma troca pelo pronome em voz alta.","Questão-modelo: tabela com nomes x pronomes, qual está errada?"],
    quiz:[
      { t:"one", s:"\"<u>My mother</u> is a teacher.\" Troque pelo pronome:",
        o:["He","She","It","They"], a:[1], e:"Mother = mulher → SHE." },
      { t:"one", s:"Qual troca está <b>INCORRETA</b>?",
        o:["The cat → It","Tom and Ana → They","My father → She","Ana and I → We"], a:[2], e:"Father = pai → HE, não she." },
      { t:"one", s:"\"<u>The books</u> are on the table.\"",
        o:["It","They","He","We"], a:[1], e:"Vários livros → THEY." }
    ]},
  { id:"6-vocab", titulo:"Palavras que mais caem", tag:"Vocabulário",
    lousa:["Família: mother, father, son, daughter, uncle, niece","Comida: bread, milk, juice, coffee, egg","Corpo: head, eye, hair, leg · Roupa: pants, shirt, shoes"],
    texto:`<p>O SARESP gosta de <b>imagens com números</b>: você liga a imagem à palavra.</p>
    <p><b>Família:</b> son = filho · daughter = filha · uncle = tio · aunt = tia · niece = sobrinha · nephew = sobrinho</p>
    <p><b>Horas:</b> <i>It's three o'clock</i> = 3h · <i>It's midday</i> = meio-dia · <i>midnight</i> = meia-noite</p>
    <p><b>Opostos:</b> tall (alto) x short (baixo) · fast (rápido) x slow (lento) · joy (alegria) x sadness (tristeza)</p>`,
    pega:"SHORT é baixo! Muita gente marca \"short\" para alto.",
    prof:["Lousa: as 3 linhas (uma por grupo de palavras).","Use a árvore da família Simpson: Marge → Lisa is my daughter.","Jogo rápido: aponte no corpo, a turma fala em inglês."],
    quiz:[
      { t:"two", s:"Marge é a mãe de Bart e Lisa. Indique as <b>DUAS</b> frases certas ditas por Marge:",
        o:["Homer is my uncle.","Lisa is my daughter.","Bart is my son.","Bart is my father."], a:[1,2], e:"Lisa = daughter (filha), Bart = son (filho)." },
      { t:"one", s:"Indique a alternativa <b>INCORRETA</b>:",
        o:["Shy = tímido","Fast = rápido","Tall = baixo","Blue eyes = olhos azuis"], a:[2], e:"Tall = ALTO. Baixo é short." },
      { t:"one", s:"\"It's midnight.\" Que horas são?",
        o:["Meio-dia","Meia-noite","3h da tarde","9h da manhã"], a:[1], e:"Midnight = meia-noite." }
    ]},
  { id:"6-info", titulo:"Achar a informação no texto", tag:"Leitura",
    lousa:["1º leia a PERGUNTA","2º procure a PALAVRA-CHAVE no texto","3º confira: está ESCRITO lá?"],
    texto:`<p>Muitas questões só pedem que você <b>encontre</b> uma informação que está escrita.</p>
    <p>Se a pergunta é sobre a <b>Anna</b>, procure o nome <b>Anna</b> no texto e leia só aquele pedaço.</p>
    <p><b>Frequência:</b> always = sempre · usually = geralmente · sometimes = às vezes · never = nunca</p>`,
    pega:"Cuidado com nomes parecidos no mesmo texto! Leia a frase inteira do nome certo.",
    prof:["Lousa: os 3 passos.","Texto da Laura e da Anna: a turma sublinha só a parte da Anna.","Mostre por que \"um cachorro e um peixe\" é pegadinha (é da irmã)."],
    quiz:[
      { t:"one", s:"<i>\"I'm Laura. I have a dog called Rex. My friend Anna has a dog called Fred and five cats.\"</i><br>Quais são os animais da Anna?",
        o:["Um cachorro e um peixe","Um gato","Um cachorro e cinco gatos","Rex"], a:[2], e:"Anna has a dog (Fred) and five cats." },
      { t:"one", s:"\"I <b>always</b> have eggs for breakfast.\" Isso significa que eu como ovos:",
        o:["nunca","às vezes","sempre","só no domingo"], a:[2], e:"Always = sempre." },
      { t:"one", s:"<i>\"Andrew loves to walk on the beach and play volleyball.\"</i> O que Andrew gosta de fazer?",
        o:["Andar na praia e jogar vôlei","Nadar e jogar futebol","Dormir","Jogar videogame"], a:[0], e:"walk on the beach + play volleyball." }
    ]},
  { id:"6-prep", titulo:"in · on · at", tag:"Preposições",
    lousa:["IN → cidade, país, mês, ano (in Brazil, in May)","ON → rua, dia (on Paulista Ave., on Monday)","AT → número, hora (at 7 o'clock)"],
    texto:`<p>As três significam \"em\", mas cada uma tem seu lugar.</p>
    <p><i>I live <b>in</b> Guarulhos, <b>on</b> Flores Street, <b>at</b> number 25.</i></p>`,
    pega:"Dia da semana é ON (on Friday), mas mês é IN (in October).",
    prof:["Lousa: as 3 linhas, do maior para o menor.","Desenhe um funil: IN (grande) → ON → AT (ponto).","Cada aluno escreve o próprio endereço com in/on/at."],
    quiz:[
      { t:"one", s:"\"The SARESP is ___ November.\"",
        o:["on","in","at","to"], a:[1], e:"Mês → IN." },
      { t:"one", s:"\"The class starts ___ 7 o'clock.\"",
        o:["in","on","at","of"], a:[2], e:"Hora → AT." },
      { t:"one", s:"Complete respectivamente: \"I live ___ Brazil, ___ Rio Street.\"",
        o:["on / in","in / on","at / in","in / at"], a:[1], e:"País → IN, rua → ON." }
    ]}
  ]},

"7": {
  nome:"7º ano", cor:"#3b5bdb",
  topicos:[
  { id:"7-scan", titulo:"Scanning: caçar a informação", tag:"Leitura",
    lousa:["WHO? → procure NOMES","WHEN? → procure NÚMEROS e DATAS","WHERE? → procure LUGARES"],
    texto:`<p><b>Scanning</b> é ler rápido procurando <b>uma coisa só</b>, como quem procura um nome numa lista.</p>
    <p>A pergunta diz o que caçar. <i>When was he born?</i> → seus olhos procuram <b>números</b>.</p>`,
    pega:"Questão de DUAS alternativas sobre biografia: confira as duas no texto, uma por uma.",
    prof:["Lousa: as 3 linhas.","Texto do Gabriel Medina: cronômetro de 1 minuto para achar ano e cidade.","Peer Instruction com as questões abaixo."],
    quiz:[
      { t:"two", s:"<i>\"Gabriel Medina was born in São Sebastião in 1993. He won three World Championships.\"</i><br>Indique as <b>DUAS</b> corretas:",
        o:["Medina nasceu em 1993.","Ele perdeu todos os campeonatos.","Ele ganhou três campeonatos mundiais.","Ele é americano."], a:[0,2], e:"born in 1993 + won three World Championships." },
      { t:"one", s:"Para responder \"<b>Where</b> does she live?\", você procura no texto:",
        o:["uma data","um lugar","um nome de pessoa","um número de telefone"], a:[1], e:"Where = onde → lugar." },
      { t:"two", s:"<i>\"Quindim is made with eggs, sugar and coconut.\"</i> Indique os <b>DOIS</b> ingredientes citados:",
        o:["Cupcake","Coconut","Milk","Eggs"], a:[1,3], e:"eggs e coconut estão no texto." }
    ]},
  { id:"7-skim", titulo:"Skimming: do que o texto fala?", tag:"Leitura",
    lousa:["Leia o TÍTULO","Leia a 1ª frase","Pergunte: qual é o ASSUNTO?"],
    texto:`<p><b>Skimming</b> é ler por cima para descobrir o <b>assunto geral</b>.</p>
    <p>Não precisa entender todas as palavras! O título e a primeira frase já dizem muito.</p>`,
    pega:"Uma alternativa pode citar algo que está no texto, mas não é o assunto PRINCIPAL.",
    prof:["Lousa: os 3 passos.","Mostre 3 títulos (notícia, receita, panfleto) e a turma diz o assunto.","Peça para justificarem: \"que palavra te deu a pista?\""],
    quiz:[
      { t:"one", s:"Título: <i>\"Nigerian restaurant brings African food to London\"</i>. A notícia fala sobre:",
        o:["imigração na Nigéria","um restaurante nigeriano em Londres","a culinária inglesa","um jogo de futebol"], a:[1], e:"restaurant + London = o assunto." },
      { t:"one", s:"<i>\"Day of the Dead: this Mexican celebration helps families honor their ancestors.\"</i> O texto fala de:",
        o:["uma festa mexicana para lembrar os antepassados","o Ano Novo","fantasias astecas","um filme de terror"], a:[0], e:"celebration + honor their ancestors." },
      { t:"one", s:"Um texto começa com <i>\"Supplies: eggs, vinegar, a jar. Step 1: …\"</i>. É:",
        o:["uma notícia","um experimento / instrução","uma carta","um poema"], a:[1], e:"Supplies + Step 1 = instruções de experimento." }
    ]},
  { id:"7-ed", titulo:"Passado regular (-ED)", tag:"Simple Past",
    lousa:["Passado regular = verbo + ED","play → played · watch → watched","Pista: yesterday, last week, in 2010"],
    texto:`<p>Quando o texto fala de algo que <b>já aconteceu</b>, o verbo vai para o passado.</p>
    <p>Nos verbos <b>regulares</b>, é só colocar <b>-ed</b>: <i>work → worked · live → lived · study → studied</i>.</p>`,
    pega:"Terminou com -ED = REGULAR. Accepted, voted, played são regulares, não irregulares!",
    prof:["Lousa: as 3 linhas.","Texto curto com verbos em destaque; turma pinta os que têm -ed.","Questão de Certo/Errado: discutir em dupla."],
    quiz:[
      { t:"one", s:"Qual verbo está no passado <b>regular</b>?",
        o:["went","played","was","known"], a:[1], e:"play + ed = played." },
      { t:"one", s:"Indique a afirmação <b>INCORRETA</b>:",
        o:["-ED indica passado regular.","WERE é o passado de to be no plural.","ACCEPTED é irregular porque tem -ED.","Played é passado de play."], a:[2], e:"Com -ED é REGULAR. Accepted é regular." },
      { t:"one", s:"Um texto com <i>was born, joined, released</i> e datas como 1997 e 2005 está no:",
        o:["Futuro","Presente simples","Passado simples","Presente contínuo"], a:[2], e:"Fatos que já aconteceram = passado simples." }
    ]},
  { id:"7-irr", titulo:"Passado irregular · was / were", tag:"Simple Past",
    lousa:["go → WENT · have → HAD · see → SAW","I / he / she / it → WAS","you / we / they → WERE"],
    texto:`<p>Os <b>irregulares</b> mudam de forma e não ganham -ed. Precisa conhecer os principais:</p>
    <p>go → went · eat → ate · see → saw · have → had · make → made · know → knew · win → won</p>
    <p><b>To be no passado:</b> <i>She <b>was</b> happy. They <b>were</b> at school.</i></p>`,
    pega:"Was é para UM (I, he, she, it). Were é para VÁRIOS (we, they) e para YOU.",
    prof:["Lousa: as 3 linhas.","Jogo da memória: presente x passado (go/went…).","Fechamento: completar biografia curta com was/were."],
    quiz:[
      { t:"two", s:"Indique os <b>DOIS</b> verbos <b>irregulares</b> no passado:",
        o:["was (de to be)","played (de play)","went (de go)","voted (de vote)"], a:[0,2], e:"was e went não têm -ed: são irregulares." },
      { t:"one", s:"\"My grandparents ___ farmers.\"",
        o:["was","were","is","be"], a:[1], e:"grandparents = they → WERE." },
      { t:"one", s:"\"Yesterday I ___ to the park.\"",
        o:["go","goes","went","going"], a:[2], e:"Yesterday = passado. go → went." }
    ]},
  { id:"7-could", titulo:"Could · couldn't · used to", tag:"Habilidade no passado",
    lousa:["could = conseguia / podia","couldn't = NÃO conseguia","used to = costumava (I used to play…)"],
    texto:`<p><i>When I was 7, I <b>could</b> swim.</i> = Quando eu tinha 7, eu <b>conseguia</b> nadar.</p>
    <p><i>I <b>couldn't</b> climb trees.</i> = Eu <b>não conseguia</b> subir em árvores.</p>
    <p><i>I <b>used to</b> play outside.</i> = Eu <b>costumava</b> brincar lá fora.<br>Negativa: <i>I <b>didn't use to</b>…</i></p>`,
    pega:"Na negativa com DID, o verbo volta ao normal: did not USE (não \"used\").",
    prof:["Lousa: as 3 linhas.","Conte uma lembrança sua de infância com could / couldn't.","Turma escreve 2 frases: \"When I was 6, I could… / I couldn't…\""],
    quiz:[
      { t:"one", s:"Como dizer \"Quando eu era pequeno, eu NÃO conseguia subir em árvores\"?",
        o:["When I was young, I couldn't climb trees.","When I am young, I climb trees.","When I was young, I could climb trees.","When I am young, I don't climb trees."], a:[0], e:"was (passado) + couldn't (não conseguia)." },
      { t:"one", s:"<i>\"When I was 7, I played tug of war.\"</i> \"Tug of war\" é:",
        o:["pega-pega","esconde-esconde","cabo de guerra","quebra-cabeça"], a:[2], e:"tug of war = cabo de guerra." },
      { t:"one", s:"Negativa correta de \"I used to own a car\":",
        o:["I did not used to owned a car.","I not use to own a car.","I did not use to own a car.","I not used owned a car."], a:[2], e:"did not + USE (sem -d) + own." }
    ]},
  { id:"7-bio", titulo:"Biografia e linha do tempo", tag:"Gênero textual",
    lousa:["Biografia = vida de alguém, no PASSADO","was born = nasceu","Monte a linha do tempo: ano → fato"],
    texto:`<p>Biografias contam a vida de uma pessoa em ordem: <b>nasceu</b>, <b>estudou</b>, <b>conquistou</b>.</p>
    <p>Marcadores: <i>in 1997 · when she was 18 · after that · ten years ago · last year</i></p>`,
    pega:"\"ago\" vem DEPOIS do tempo: ten years ago (há dez anos).",
    prof:["Lousa: as 3 linhas.","Minibiografia + linha do tempo no caderno (só 3 datas).","Pergunta: o que aconteceu primeiro? Justifique com a data."],
    quiz:[
      { t:"one", s:"<i>\"Jihyo was born on February 1, 1997, in South Korea.\"</i> \"Was born\" significa:",
        o:["vai nascer","nasceu","mora","trabalha"], a:[1], e:"was born = nasceu." },
      { t:"one", s:"\"Ten years <b>ago</b>\" quer dizer:",
        o:["daqui a dez anos","há dez anos","durante dez anos","a cada dez anos"], a:[1], e:"ago = atrás, há." },
      { t:"one", s:"Numa biografia, a maioria dos verbos está no:",
        o:["passado","futuro","imperativo","presente contínuo"], a:[0], e:"Fala de fatos que já aconteceram." }
    ]}
  ]},

"8": {
  nome:"8º ano", cor:"#c2410c",
  topicos:[
  { id:"8-comp", titulo:"Comparativo", tag:"Comparar 2 coisas",
    lousa:["Palavra curta → -ER + THAN (taller than)","Palavra longa → MORE + THAN (more expensive than)","good → BETTER · bad → WORSE"],
    texto:`<p>Usamos o comparativo para comparar <b>duas</b> coisas.</p>
    <p><i>São Paulo is <b>bigger than</b> Guarulhos.</i><br><i>Math is <b>more difficult than</b> Art.</i><br><i>Summer is <b>better than</b> winter.</i></p>`,
    pega:"Nunca use os dois juntos: \"more taller\" está ERRADO.",
    prof:["Lousa: as 3 linhas.","Compare dois alunos, dois times, duas cidades.","Peer Instruction com as questões abaixo."],
    quiz:[
      { t:"one", s:"<i>\"Alice: I think summer is better than winter.\"</i> Alice diz que:",
        o:["o inverno é melhor","o verão é melhor que o inverno","os dois são iguais","não gosta de verão"], a:[1], e:"better than = melhor que." },
      { t:"one", s:"\"A car is ___ than a bike.\"",
        o:["more fast","faster","fastest","the faster"], a:[1], e:"fast é curta → faster than." },
      { t:"one", s:"Indique a frase <b>INCORRETA</b>:",
        o:["She is taller than me.","This book is more interesting than that one.","My dog is more bigger than yours.","Pizza is better than salad."], a:[2], e:"bigger já é comparativo. \"more bigger\" está errado." }
    ]},
  { id:"8-sup", titulo:"Superlativo", tag:"O mais de todos",
    lousa:["Palavra curta → THE + -EST (the tallest)","Palavra longa → THE MOST (the most beautiful)","good → THE BEST · bad → THE WORST"],
    texto:`<p>O superlativo diz quem é <b>o mais</b> de um grupo.</p>
    <p><i>Brazil is <b>the biggest</b> country in South America.</i><br><i>She is <b>the most famous</b> singer in the school.</i></p>`,
    pega:"Comparativo = 2 coisas (than). Superlativo = o grupo todo (the).",
    prof:["Lousa: as 3 linhas.","Ranking com 3 cidades, times ou animais.","Duas colunas na lousa: comparativo x superlativo; turma classifica frases."],
    quiz:[
      { t:"one", s:"\"Mount Everest is ___ mountain in the world.\"",
        o:["higher","the highest","more high","high"], a:[1], e:"o mais alto do mundo → the highest." },
      { t:"two", s:"Indique as <b>DUAS</b> frases no <b>superlativo</b>:",
        o:["She is the best student.","He is taller than me.","It is the most expensive car.","Cats are smaller than dogs."], a:[0,2], e:"the best e the most expensive são superlativos." },
      { t:"one", s:"\"Mumbai is India's largest city.\" Significa que Mumbai é:",
        o:["a menor cidade","a maior cidade da Índia","maior que Londres","a capital"], a:[1], e:"largest = a maior." }
    ]},
  { id:"8-inf", titulo:"Inferência: ler nas entrelinhas", tag:"Leitura",
    lousa:["O que o texto DIZ? (explícito)","Que PISTAS eu achei?","O que posso CONCLUIR? (implícito)"],
    texto:`<p>Às vezes a resposta <b>não está escrita</b>. Você precisa juntar as pistas.</p>
    <p><i>\"She took her umbrella.\"</i> → Não diz \"chuva\", mas a pista indica que <b>talvez vá chover</b>.</p>`,
    pega:"A resposta de inferência precisa de PISTA no texto. Se você inventou, está errado.",
    prof:["Lousa: as 3 perguntas (Isabel Solé).","Exemplo do guarda-chuva; depois uma tirinha.","Sempre pergunte: \"que palavra te deu a pista?\""],
    quiz:[
      { t:"one", s:"Título: <i>\"Where <b>will</b> we have snow on Thursday?\"</i>. A palavra \"will\" indica que:",
        o:["já nevou na quinta","há previsão de neve na quinta","nunca neva","está nevando agora"], a:[1], e:"will = futuro → previsão." },
      { t:"one", s:"<i>\"Della sold her hair to buy Jim a chain. Jim sold his watch to buy Della combs.\"</i> O que podemos concluir?",
        o:["Eles não se gostavam","Os dois se sacrificaram por amor","Della queria cabelo curto","Jim odiava relógios"], a:[1], e:"Pista: cada um vendeu o que tinha de mais valioso pelo outro." },
      { t:"one", s:"<i>\"Ugh! Too much salt!\" said Helena.</i> O que Helena achou da comida?",
        o:["Doce demais","Salgada demais","Muito boa","Azeda"], a:[1], e:"Too much salt = sal demais." }
    ]},
  { id:"8-narr", titulo:"Elementos da narrativa", tag:"Conto e fábula",
    lousa:["SETTING = onde e quando","CHARACTERS = personagens","PLOT = o que acontece · MORAL = a lição"],
    texto:`<p>Toda história tem <b>lugar</b>, <b>personagens</b> e <b>enredo</b>. A fábula ainda tem uma <b>moral</b>.</p>
    <p><i>\"In the bustling city of New York lived Jim and Della.\"</i> → setting = New York · characters = Jim and Della</p>`,
    pega:"Setting pergunta ONDE. Não confunda com quem (characters).",
    prof:["Lousa: as 4 palavras.","Fábula curta: a turma preenche as 4 partes.","Pergunta final: qual é a moral? Justifique."],
    quiz:[
      { t:"one", s:"<i>\"In the bustling city of New York lived a young couple.\"</i> Onde a história se passa?",
        o:["A remote island","A magical forest","A bustling city","A small village"], a:[2], e:"bustling city = cidade movimentada." },
      { t:"one", s:"Em uma fábula, a <b>moral</b> é:",
        o:["o nome do autor","a lição da história","o lugar da história","o título"], a:[1], e:"moral = lição." },
      { t:"one", s:"\"Characters\" são:",
        o:["os personagens","o lugar","o final","o tempo"], a:[0], e:"characters = personagens." }
    ]},
  { id:"8-gen", titulo:"Que tipo de texto é esse?", tag:"Gêneros textuais",
    lousa:["Review / resenha → opinião sobre filme ou livro","News / notícia → fato novo (manchete + lead)","Ad / anúncio → quer vender ou convencer"],
    texto:`<p>Reconhecer o gênero ajuda a entender o objetivo do texto.</p>
    <p><b>Resenha:</b> \"Critics Consensus\", \"audience says\", estrelas.<br><b>Notícia:</b> manchete + primeiro parágrafo (lead).<br><b>Anúncio:</b> slogan, imagem, verbo no imperativo (Buy! Try!).</p>`,
    pega:"Resenha tem OPINIÃO (funny, clever). Notícia conta FATOS.",
    prof:["Lousa: as 3 linhas.","Mostre 3 textos curtos e a turma classifica.","Pergunta: que palavra mostrou o gênero?"],
    quiz:[
      { t:"one", s:"<i>\"Critics Consensus: Barbie is a visually dazzling comedy… Audience says: clever, funny.\"</i> O gênero é:",
        o:["anúncio","reportagem","resenha crítica","abaixo-assinado"], a:[2], e:"Opinião de críticos e público = resenha." },
      { t:"one", s:"Um texto com manchete e lead, contando um fato novo, é:",
        o:["uma notícia","uma receita","um poema","um diário"], a:[0], e:"manchete + lead = notícia." },
      { t:"one", s:"<i>\"Many places will be between 25 and 32 degrees on Monday.\"</i> Esse texto é:",
        o:["uma previsão do tempo","uma resenha","uma fábula","uma biografia"], a:[0], e:"degrees + will = previsão do tempo." }
    ]},
  { id:"8-pres", titulo:"Presente: has · lives · doesn't", tag:"Simple Present",
    lousa:["He / She / It → verbo + S (lives, comes)","have → HAS (para he/she/it)","Negativa: I/you/we/they DON'T · he/she/it DOESN'T"],
    texto:`<p>No presente, com <b>he, she, it</b>, o verbo ganha <b>-s</b>.</p>
    <p><i>I <b>have</b> a sister. She <b>lives</b> in Peruíbe. She <b>doesn't</b> have a car.</i></p>`,
    pega:"Depois de DOESN'T, o verbo NÃO tem -s: she doesn't LIVE.",
    prof:["Lousa: as 3 linhas.","Questão de lacunas \"respectivamente\": olhar o sujeito de cada uma.","Turma escreve 3 frases sobre um colega (He lives… He has…)."],
    quiz:[
      { t:"one", s:"Complete respectivamente: \"I ___ a sister. My sister ___ in Peruíbe.\"",
        o:["has / live","have / lives","have / live","has / lives"], a:[1], e:"I HAVE, my sister (she) LIVES." },
      { t:"one", s:"\"He ___ three brothers.\"",
        o:["have","has","haves","having"], a:[1], e:"he → HAS." },
      { t:"one", s:"\"She ___ come from Boituva.\"",
        o:["don't","doesn't","isn't","aren't"], a:[1], e:"she → DOESN'T." }
    ]}
  ]},

"9": {
  nome:"9º ano", cor:"#7c3aed",
  topicos:[
  { id:"9-con", titulo:"Conectores (linking words)", tag:"Ligar ideias",
    lousa:["AND / ALSO → soma (adição)","BUT / HOWEVER → contrário (contraste)","SO / THEREFORE → resultado · IF → condição"],
    texto:`<p>Os conectores mostram a <b>relação</b> entre as ideias.</p>
    <p><i>She studied <b>and</b> slept well.</i> (soma)<br><i>She studied, <b>but</b> she failed.</i> (contraste)<br><i>She studied, <b>so</b> she passed.</i> (resultado)</p>`,
    pega:"HOWEVER parece complicado, mas é igual a BUT (porém).",
    prof:["Lousa: as 3 linhas com setinhas (+, ×, →).","Mesma frase com conectores diferentes; turma diz o sentido.","Peer Instruction com as questões abaixo."],
    quiz:[
      { t:"one", s:"Qual frase mostra <b>adição</b>?",
        o:["She studied. However, she didn't sleep.","She studied, so she passed.","She studied but she didn't pass.","She studied yesterday and for many hours."], a:[3], e:"AND = adição." },
      { t:"one", s:"\"It was raining, ___ we stayed home.\"",
        o:["but","so","however","if"], a:[1], e:"Ficamos em casa POR CAUSA da chuva → so (resultado)." },
      { t:"one", s:"\"However\" tem o mesmo sentido de:",
        o:["and","but","so","if"], a:[1], e:"However = porém = but." }
    ]},
  { id:"9-arg", titulo:"Argumento e evidência", tag:"Texto argumentativo",
    lousa:["ARGUMENTO = a ideia defendida","EVIDÊNCIA = a prova (dado, fato, pesquisa)","Pergunte: o que PROVA isso?"],
    texto:`<p>Num texto de opinião, o autor defende uma ideia e usa <b>provas</b> para convencer.</p>
    <p><i>Argumento:</i> \"We must use renewable energy.\"<br><i>Evidência:</i> \"Sea levels set new records in 2021.\"</p>`,
    pega:"Evidência tem número, pesquisa ou fato. Se for só \"eu acho\", não é evidência.",
    prof:["Lousa: as 3 linhas.","Organizador gráfico: argumento → evidência.","Dado um argumento, a turma acha a evidência (e vice-versa)."],
    quiz:[
      { t:"one", s:"<i>\"Four climate indicators set new records in 2021. The cause is our reliance on fossil fuels.\"</i> Por que os recordes aconteceram?",
        o:["A humanidade insiste em usar energia não renovável","Usamos energia solar","As atividades humanas mudaram para o renovável","Precisamos de petróleo novo"], a:[0], e:"reliance on fossil fuels = dependência de combustíveis fósseis." },
      { t:"one", s:"Qual frase é uma <b>evidência</b>?",
        o:["I think school is boring.","70% of students use phones daily.","Everybody should read more.","Respect is important."], a:[1], e:"Tem dado (70%) = evidência." },
      { t:"two", s:"<i>\"Respect prevents bullying. When we feel respected, our brain releases serotonin.\"</i> Indique as <b>DUAS</b> corretas:",
        o:["You must respect bullying.","You must not accept disrespect.","You must not prevent bullying.","You must respect others and oneself."], a:[1,3], e:"O texto defende o respeito e combate o desrespeito." }
    ]},
  { id:"9-fato", titulo:"Fato x opinião", tag:"News Detectives",
    lousa:["FATO → dá para provar (data, número, lugar)","OPINIÃO → o que alguém ACHA","Pistas: I think, should, best, beautiful"],
    texto:`<p><b>Fato:</b> <i>The restaurant opened in 2024.</i> (dá para conferir)</p>
    <p><b>Opinião:</b> <i>It is the best restaurant in town.</i> (é o que alguém acha)</p>
    <p>Palavras de opinião: <b>I think, in my opinion, should, best, amazing, terrible</b>.</p>`,
    pega:"\"You should…\" (você deveria) é sempre opinião ou conselho.",
    prof:["Lousa: as 3 linhas.","Notícia recortada: turma separa frases em fact / opinion.","Pergunta: que palavra mostrou a opinião?"],
    quiz:[
      { t:"one", s:"Qual trecho traz uma <b>opinião</b> da autora?",
        o:["\"You should choose only a few phrases that feel natural.\"","\"Many people state opinions without an opening phrase.\"","\"This is acceptable with friends.\"","\"They might just say: summer is better.\""], a:[0], e:"\"should\" = conselho/opinião da autora." },
      { t:"one", s:"Qual frase é um <b>fato</b>?",
        o:["Mumbai is the most beautiful city.","Mumbai is on India's west coast.","Mumbai is amazing.","I love Mumbai."], a:[1], e:"Localização dá para provar." },
      { t:"one", s:"<i>\"The breakfast was excellent. The restaurant is very clean.\"</i> James está:",
        o:["dando uma opinião positiva","dando uma notícia","reclamando","vendendo comida"], a:[0], e:"excellent, very clean = opinião positiva." }
    ]},
  { id:"9-pers", titulo:"Persuasão nos anúncios", tag:"Publicidade",
    lousa:["Anúncio quer CONVENCER","Verbo no imperativo: Buy! Try! Have!","Pergunte: o que ele quer que eu FAÇA?"],
    texto:`<p>Anúncios usam <b>imagem + slogan</b> para levar você a agir.</p>
    <p>O verbo no <b>imperativo</b> é uma ordem ou convite: <i><b>Have</b> a break!</i> · <i><b>Leave</b> only footprints.</i></p>`,
    pega:"O objetivo do anúncio quase sempre é CONVENCER, não só informar.",
    prof:["Lousa: as 3 linhas.","Analise 2 anúncios reais (imagem + slogan).","Pergunta: o que ele quer provocar em você?"],
    quiz:[
      { t:"one", s:"Num slogan de chocolate, \"<b>Have</b> a break!\" está no imperativo para:",
        o:["informar promoções","orientar sobre a qualidade","convencer o público a agir","mostrar produtos"], a:[2], e:"Imperativo em anúncio = convencer." },
      { t:"one", s:"Placa de ecoturismo: <i>\"Take only pictures. Leave only footprints.\"</i> A mensagem é:",
        o:["Não pise na grama","Aproveite, mas não deixe lixo","Ande descalço","Faça o que quiser"], a:[1], e:"Leve só fotos, deixe só pegadas." },
      { t:"one", s:"Qual palavra é um verbo no <b>imperativo</b>?",
        o:["Try!","Tried","Trying","Tries"], a:[0], e:"Try! = experimente!" }
    ]},
  { id:"9-must", titulo:"Must · must not", tag:"Regras e obrigações",
    lousa:["MUST = tem que (obrigação)","MUST NOT = não pode (proibição)","Placa, regra, lei → must / must not"],
    texto:`<p><i>You <b>must</b> wear a helmet.</i> = Você <b>tem que</b> usar capacete.</p>
    <p><i>You <b>must not</b> use your phone here.</i> = Você <b>não pode</b> usar o celular aqui.</p>`,
    pega:"Depois de MUST não vem TO: must GO (e não \"must to go\").",
    prof:["Lousa: as 3 linhas.","Regras da sala em inglês: turma completa com must / must not.","Mostre placas e peça a frase."],
    quiz:[
      { t:"one", s:"\"You ___ smoke in the hospital.\"",
        o:["must","must not","can","should"], a:[1], e:"Proibido → must not." },
      { t:"one", s:"\"Students ___ respect their classmates.\"",
        o:["must","must not","mustn't","don't"], a:[0], e:"Obrigação → must." },
      { t:"one", s:"Qual frase está <b>INCORRETA</b>?",
        o:["You must study.","We must not run here.","You must to go now.","They must wear uniforms."], a:[2], e:"Must + verbo sem TO: must go." }
    ]},
  { id:"9-dont", titulo:"Don't · doesn't", tag:"Negativa no presente",
    lousa:["I / you / we / they → DON'T","he / she / it → DOESN'T","Depois deles, verbo SEM -s"],
    texto:`<p><i>We <b>don't</b> have a car. She <b>doesn't</b> live here.</i></p>
    <p>Em questões de lacuna, olhe o <b>sujeito</b> de cada frase antes de escolher.</p>`,
    pega:"\"It\" (coisa ou animal) também usa DOESN'T.",
    prof:["Lousa: as 3 linhas.","Questão-modelo com 5 lacunas: turma sublinha os sujeitos primeiro.","Correção em dupla."],
    quiz:[
      { t:"one", s:"Complete respectivamente: \"We ___ have a dog. It ___ have money.\"",
        o:["doesn't / don't","don't / doesn't","don't / don't","doesn't / doesn't"], a:[1], e:"We DON'T, it DOESN'T." },
      { t:"one", s:"\"My brother ___ like coffee.\"",
        o:["don't","doesn't","isn't","aren't"], a:[1], e:"brother = he → DOESN'T." },
      { t:"one", s:"Qual frase está correta?",
        o:["She doesn't lives here.","She don't live here.","She doesn't live here.","She not live here."], a:[2], e:"doesn't + verbo sem -s." }
    ]}
  ]}
};
