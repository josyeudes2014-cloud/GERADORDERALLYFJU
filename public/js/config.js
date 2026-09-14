// --- CONFIGURAÇÕES DO FIREBASE ---
const firebaseConfig = {
  apiKey: "AIzaSyBx2F_8g2N780kud762VlXrimIVowmSIik",
  authDomain: "rallyfjuniteroi.firebaseapp.com",
  projectId: "rallyfjuniteroi",
  storageBucket: "rallyfjuniteroi.appspot.com",
  messagingSenderId: "1032707908409",
  appId: "1:1032707908409:web:d492b01cb7b51fa42d3ee8",
  measurementId: "G-BP81LCPJC5"
};

const firebaseVapidKey = "BKvqGmMsf-EAh84C8-05b9blhxy_SXnsWqgyw6bKqPTTxGrkQfLRY5fjqZoHu8ktp9uprYlcGtyabuczEgps4qs";

const FALLBACK_DATA = {"configuracao": {"geral": {"tituloEvento": "RALLY DOS 300!", "subtituloEvento": "Só os Valentes fazem a Diferença!", "tribosAtivas": {
    "levi": {"nome": "Levi", "img": "imgs/tribos/levi.jpg"},
    "juda": {"nome": "Judá", "img": "imgs/tribos/juda.png"},
    "benjamim": {"nome": "Benjamim", "img": "imgs/tribos/benjamin.png"},
    "aser": {"nome": "Aser", "img": "imgs/tribos/aser.png"},
    "efraim": {"nome": "Efraim", "img": "imgs/tribos/efraim.jpg"},
    "gade": {"nome": "Gade", "img": "imgs/tribos/gade.png"},
    "issacar": {"nome": "Issacar", "img": "imgs/tribos/issacar.png"},
    "manasses": {"nome": "Manassés", "img": "imgs/tribos/manasseis.jpg"},
    "naftali": {"nome": "Naftali", "img": "imgs/tribos/naftali.png"},
    "ruben": {"nome": "Rúben", "img": "imgs/tribos/rubens.jpg"},
    "simeao": {"nome": "Simeão", "img": "imgs/tribos/simeao.png"},
    "zebulom": {"nome": "Zebulom", "img": "imgs/tribos/zebulom.png"}
}, "tema": {"principal": "#5b21b6", "secundaria": "#9333ea", "destaque": "#f59e0b"}, "finalizado": false}}, "tribos": {
    "levi": {"nome": "Levi", "img": "imgs/tribos/levi.jpg", "pontos": 0},
    "juda": {"nome": "Judá", "img": "imgs/tribos/juda.png", "pontos": 0},
    "benjamim": {"nome": "Benjamim", "img": "imgs/tribos/benjamin.png", "pontos": 0},
    "aser": {"nome": "Aser", "img": "imgs/tribos/aser.png", "pontos": 0},
    "efraim": {"nome": "Efraim", "img": "imgs/tribos/efraim.jpg", "pontos": 0},
    "gade": {"nome": "Gade", "img": "imgs/tribos/gade.png", "pontos": 0},
    "issacar": {"nome": "Issacar", "img": "imgs/tribos/issacar.png", "pontos": 0},
    "manasses": {"nome": "Manassés", "img": "imgs/tribos/manasseis.jpg", "pontos": 0},
    "naftali": {"nome": "Naftali", "img": "imgs/tribos/naftali.png", "pontos": 0},
    "ruben": {"nome": "Rúben", "img": "imgs/tribos/rubens.jpg", "pontos": 0},
    "simeao": {"nome": "Simeão", "img": "imgs/tribos/simeao.png", "pontos": 0},
    "zebulom": {"nome": "Zebulom", "img": "imgs/tribos/zebulom.png", "pontos": 0}
}};

const MISSOES_PADRAO = {
    1: `🛡️ SEMANA 1 (09/11 a 15/11) 🛡️
TEMA: O CHAMADO DOS VALENTES
📅 MISSÕES SEMANAIS ⚔️

15: 🅰️➕ ALGO A MAIS: por jovem presente na reunião.
75: 🦶🏘️ PÉ NO BAIRRO (Evangelismo): por trabalho realizado (mínimo 3 jovens).
200: 📖 SALVAÇÃO DA ALMA: por jovem que decidir se entregar nas reuniões.
30: ❤️‍🔥 TERAPIA DO AMOR: por jovem presente às 19h.
10: 📻 CONEXÃO JOVEM: por jovem conectado na rádio (11h30).
100: 🎯 ENCONTRO JOVEM (EJ): por jovem novo.
100: 🎯 ENCONTRO JOVEM (EJ): por jovem afastado que retornar.
150: ⛪ CONCENTRAÇÃO DE FÉ: MISSÃO PRINCIPAL por jovem presente às 9h30!

🔥 MISSÕES ESPECIAIS (BÔNUS ALTO!)

250: PONTO DE ORAÇÃO: Por tribo que organizar um momento de oração.
350: EVANGELIZAÇÃO CRIATIVA: Para a tribo que fizer uma ação evangelística inovadora.
300: TIME DE FUTEBOL: Por tribo que organizar um time e realizar uma partida/treino.
200: DESAFIO DOS VALENTES: Missão especial diferente por semana.
150: DOAÇÃO: Por doação de materiais de limpeza ou escritório.
100: MELHOR FOTO/VIDEO: A melhor foto ou vídeo criativo da tribo.
50: MANUTENÇÃO DO TEMPLO: Por jovem que ajudar na limpeza no Sábado.
400: META DA SEMANA (BÔNUS - TRIBO DE ELITE): Para a tribo que mais trouxer jovens novos.`,
    2: `🛡️ SEMANA 2 (16/11 a 22/11) 🛡️
TEMA: A FORÇA DA UNIÃO
📅 MISSÕES SEMANAIS ⚔️

15: 🅰️➕ ALGO A MAIS: por jovem presente na reunião.
75: 🦶🏘️ PÉ NO BAIRRO (Evangelismo): por trabalho realizado (mínimo 3 jovens).
200: 📖 SALVAÇÃO DA ALMA: por jovem que decidir se entregar nas reuniões.
30: ❤️‍🔥 TERAPIA DO AMOR: por jovem presente às 19h.
10: 📻 CONEXÃO JOVEM: por jovem conectado na rádio (11h30).
100: 🎯 ENCONTRO JOVEM (EJ): por jovem novo.
100: 🎯 ENCONTRO JOVEM (EJ): por jovem afastado que retornar.
150: ⛪ CONCENTRAÇÃO DE FÉ: MISSÃO PRINCIPAL por jovem presente às 9h30!

🔥 MISSÕES ESPECIAIS (BÔNUS ALTO!)

250: PONTO DE ORAÇÃO: Por tribo que organizar um momento de oração.
350: EVANGELIZAÇÃO CRIATIVA: Para a tribo que fizer uma ação evangelística inovadora.
300: TIME DE FUTEBOL: Por tribo que organizar um time e realizar uma partida/treino.
200: DESAFIO DOS VALENTES: Missão especial diferente por semana.
150: DOAÇÃO: Por doação de materiais de limpeza ou escritório.
100: MELHOR FOTO/VIDEO: A melhor foto ou vídeo criativo da tribo.
50: MANUTENÇÃO DO TEMPLO: Por jovem que ajudar na limpeza no Sábado.
400: META DA SEMANA (BÔNUS - TRIBO DE ELITE): Para a tribo que mais trouxer jovens novos.`,
    3: `🛡️ SEMANA 3 (23/11 a 29/11) 🛡️
TEMA: GUERREIROS DA FÉ
📅 MISSÕES SEMANAIS ⚔️

15: 🅰️➕ ALGO A MAIS: por jovem presente na reunião.
75: 🦶🏘️ PÉ NO BAIRRO (Evangelismo): por trabalho realizado (mínimo 3 jovens).
200: 📖 SALVAÇÃO DA ALMA: por jovem que decidir se entregar nas reuniões.
30: ❤️‍🔥 TERAPIA DO AMOR: por jovem presente às 19h.
10: 📻 CONEXÃO JOVEM: por jovem conectado na rádio (11h30).
100: 🎯 ENCONTRO JOVEM (EJ): por jovem novo.
100: 🎯 ENCONTRO JOVEM (EJ): por jovem afastado que retornar.
150: ⛪ CONCENTRAÇÃO DE FÉ: MISSÃO PRINCIPAL por jovem presente às 9h30!

🔥 MISSÕES ESPECIAIS (BÔNUS ALTO!)

250: PONTO DE ORAÇÃO: Por tribo que organizar um momento de oração.
350: EVANGELIZAÇÃO CRIATIVA: Para a tribo que fizer uma ação evangelística inovadora.
300: TIME DE FUTEBOL: Por tribo que organizar um time e realizar uma partida/treino.
200: DESAFIO DOS VALENTES: Missão especial diferente por semana.
150: DOAÇÃO: Por doação de materiais de limpeza ou escritório.
100: MELHOR FOTO/VIDEO: A melhor foto ou vídeo criativo da tribo.
50: MANUTENÇÃO DO TEMPLO: Por jovem que ajudar na limpeza no Sábado.
400: META DA SEMANA (BÔNUS - TRIBO DE ELITE): Para a tribo que mais trouxer jovens novos.`,
    4: `🛡️ SEMANA 4 (30/11 a 06/12) 🛡️
TEMA: TRANSFORMAÇÃO RADICAL
📅 MISSÕES SEMANAIS ⚔️

15: 🅰️➕ ALGO A MAIS: por jovem presente na reunião.
75: 🦶🏘️ PÉ NO BAIRRO (Evangelismo): por trabalho realizado (mínimo 3 jovens).
200: 📖 SALVAÇÃO DA ALMA: por jovem que decidir se entregar nas reuniões.
30: ❤️‍🔥 TERAPIA DO AMOR: por jovem presente às 19h.
10: 📻 CONEXÃO JOVEM: por jovem conectado na rádio (11h30).
100: 🎯 ENCONTRO JOVEM (EJ): por jovem novo.
100: 🎯 ENCONTRO JOVEM (EJ): por jovem afastado que retornar.
150: ⛪ CONCENTRAÇÃO DE FÉ: MISSÃO PRINCIPAL por jovem presente às 9h30!

🔥 MISSÕES ESPECIAIS (BÔNUS ALTO!)

250: PONTO DE ORAÇÃO: Por tribo que organizar um momento de oração.
350: EVANGELIZAÇÃO CRIATIVA: Para a tribo que fizer uma ação evangelística inovadora.
300: TIME DE FUTEBOL: Por tribo que organizar um time e realizar uma partida/treino.
200: DESAFIO DOS VALENTES: Missão especial diferente por semana.
150: DOAÇÃO: Por doação de materiais de limpeza ou escritório.
100: MELHOR FOTO/VIDEO: A melhor foto ou vídeo criativo da tribo.
50: MANUTENÇÃO DO TEMPLO: Por jovem que ajudar na limpeza no Sábado.
400: META DA SEMANA (BÔNUS - TRIBO DE ELITE): Para a tribo que mais trouxer jovens novos.`,
    5: `🛡️ SEMANA 5 (07/12 a 13/12) 🛡️
TEMA: A VITÓRIA FINAL
📅 MISSÕES SEMANAIS ⚔️

15: 🅰️➕ ALGO A MAIS: por jovem presente na reunião.
75: 🦶🏘️ PÉ NO BAIRRO (Evangelismo): por trabalho realizado (mínimo 3 jovens).
200: 📖 SALVAÇÃO DA ALMA: por jovem que decidir se entregar nas reuniões.
30: ❤️‍🔥 TERAPIA DO AMOR: por jovem presente às 19h.
10: 📻 CONEXÃO JOVEM: por jovem conectado na rádio (11h30).
100: 🎯 ENCONTRO JOVEM (EJ): por jovem novo.
100: 🎯 ENCONTRO JOVEM (EJ): por jovem afastado que retornar.
150: ⛪ CONCENTRAÇÃO DE FÉ: MISSÃO PRINCIPAL por jovem presente às 9h30!

🔥 MISSÕES ESPECIAIS (BÔNUS ALTO!)

250: PONTO DE ORAÇÃO: Por tribo que organizar um momento de oração.
350: EVANGELIZAÇÃO CRIATIVA: Para a tribo que fizer uma ação evangelística inovadora.
300: TIME DE FUTEBOL: Por tribo que organizar um time e realizar uma partida/treino.
200: DESAFIO DOS VALENTES: Missão especial diferente por semana.
150: DOAÇÃO: Por doação de materiais de limpeza ou escritório.
100: MELHOR FOTO/VIDEO: A melhor foto ou vídeo criativo da tribo.
50: MANUTENÇÃO DO TEMPLO: Por jovem que ajudar na limpeza no Sábado.
400: META DA SEMANA (BÔNUS - TRIBO DE ELITE): Para a tribo que mais trouxer jovens novos.`
};

let app, db, auth, storage;
let isAdmin = false;
let rallyConfig = {};
let atividadesDaSemanaRenderizadas = [];
let tribosInfo = {};
let tribosNomes = [];
let tituloDoEvento = "RALLY FJU";
let subtituloDoEvento = "Só os valentes fazem a diferença!";

window.firebaseConfig = firebaseConfig;
window.FALLBACK_DATA = FALLBACK_DATA;
window.MISSOES_PADRAO = MISSOES_PADRAO;