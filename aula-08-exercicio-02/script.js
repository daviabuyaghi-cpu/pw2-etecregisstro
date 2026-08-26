/*
  EXERCÍCIO: Seleção e Manipulação do DOM
  ----------------------------------------
  Objetivo: praticar como selecionar elementos do DOM e alterar sua aparência.
  Complete cada exercício abaixo escrevendo o código onde indicado.
  */
// ------------------------------------------------------
// Exercício 1
// Selecione o elemento com id "titulo" e:
// - altere o texto para "Título Alterado"
// - mude a cor do texto para azul
// ------------------------------------------------------
// seu código aqui

const titulo = window.document.getElementById("titulo");
titulo.innerText = "Título Alterado";
titulo.style.color = "blue";
// ------------------------------------------------------
// Exercício 2
// Selecione TODOS os elementos com a classe "paragrafo"
// e mude a cor de fundo (background-color) de todos eles para amarelo.
// Dica: use querySelectorAll e um laço (for ou forEach) para
// percorrer os elementos, já que são vários.
// ------------------------------------------------------
// seu código aqui

const paragrafos = window.document.querySelectorAll(".paragrafo");
paragrafos.forEach(function(paragrafo) {
    paragrafo.style.backgroundColor = "yellow";
});
// ------------------------------------------------------
// Exercício 3
// Selecione o elemento com id "caixa" e:
// - altere o innerText para "Conteúdo atualizado!"
// - mude a borda (border) para "3px solid red"
// - mude o tamanho da fonte (fontSize) para "20px"
// ------------------------------------------------------
// seu código aqui

const caixa = window.document.getElementById("caixa");
caixa.innerText = "Conteúdo atualizado!";
caixa.style.border = "3px solid red";
caixa.style.fontSize = "20px";
// ------------------------------------------------------
// Exercício 4
// Selecione os itens da lista (id "lista")
// usando querySelector e mude seu texto para "Item alterado"
// ------------------------------------------------------
// seu código aqui

const lista = window.document.querySelector("#lista");
const itens = lista.querySelectorAll("li");
itens.forEach(function(item) {
    item.innerText = "Item alterado";
});
// ------------------------------------------------------
// Exercício 5
// Selecione o botão com id "botao" e:
// - altere o texto para "Clique aqui"
// - mude a cor de fundo para verde
// - mude a cor do texto para branco
// ------------------------------------------------------
// seu código aqui

const botao = window.document.getElementById("botao");
botao.innerText = "Clique aqui";
botao.style.backgroundColor = "green";
botao.style.color = "white";