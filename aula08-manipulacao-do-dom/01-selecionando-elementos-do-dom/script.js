// JAVASCRIPT

// Selecionando um elemento pela tag
const p0=window.document.getElementsByTagName('p')[0];
// Alterando as caracteristicas do elemento
p0.style.color='yellow';
p0.innerText="Mudei o texto =)";

const p1=document.getElementsByTagName('p')[1];
p1.style.color="black";

// Capturando o corpo do site
const corpoSite=window.document.body;
// Mudando sua cor
corpoSite.style.background="2f2f2f";
document.write(`<br> No 1° paragrafo do site esta escrito assim: ${p1.innerText}`);

// Selecionando pelo ID
const p2=window.document.getElementById("p2");
p2.innerText="Selecionando elementos pelo ID";
p2.style.background="purple";

// Selecionando pelo Nome
const nome=window.document.getElementsByName("nome")[0];
nome.innerText="Selecionando elementos pelo NOME";
nome.style.background="blue";

// Selecionando pela Class
const p4=window.document.getElementsByClassName("p4")[0];
p4.innerText="Selecionando elementos pela CLASSE";
p4.style.background="blue";
