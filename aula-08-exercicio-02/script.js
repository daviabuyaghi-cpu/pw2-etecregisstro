// Exercício 1
const titulo = document.querySelector("#titulo");

titulo.innerText = "Título Alterado";
titulo.style.color = "blue";


// Exercício 2
const paragrafos = document.querySelectorAll(".paragrafo");

paragrafos.forEach(function(paragrafo) {
    paragrafo.style.backgroundColor = "yellow";
});


// Exercício 3
const caixa = document.querySelector("#caixa");

caixa.innerText = "Conteúdo atualizado!";
caixa.style.border = "3px solid red";
caixa.style.fontSize = "20px";


// Exercício 4
const lista = document.querySelector("#lista");

lista.querySelectorAll("li").forEach(function(item) {
    item.innerText = "Item alterado";
});


// Exercício 5
const botao = document.querySelector("#botao");

botao.innerText = "Clique aqui";
botao.style.backgroundColor = "green";
botao.style.color = "white";