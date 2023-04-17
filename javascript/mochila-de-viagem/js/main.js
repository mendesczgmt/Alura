const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

itens.forEach(element => {
    criarElemento(element);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

const nome = evento.target.elements['nome'];
const quantidade = evento.target.elements['quantidade'];

const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
 }

 itens.push(itemAtual);

 localStorage.setItem("itens", JSON.stringify(itens));

    criarElemento(itemAtual);
    
    nome.value = "";
    quantidade.value = "";
})

function criarElemento(item) {

 const novoItem = document.createElement('li');
 novoItem.classList.add("item");

 const numeroIntem = document.createElement("strong");
 numeroIntem.innerHTML = item.quantidade;
 
 novoItem.appendChild(numeroIntem);
 novoItem.innerHTML += item.nome;

 lista.appendChild(novoItem);
}