alert('Insira o nome completo e o telefone com DDD e sem traço, ok?')

const form = document.getElementById('agenda-contato');
const nomeCompleto = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e){
  e.preventDefault();
  
  adicionaLinha();
  atualizaTabela();
  atualizaCadastrados();
})

function adicionaLinha() {
    const nomeCompleto = document.getElementById('nome-completo');
    const telefone = document.getElementById('numero-telefone');
    let cad = document.getElementById('cadastros');

        let linha = '<tr>';
        linha += `<td>${nomeCompleto.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += `</td>`;
  
        linhas += linha;

        nomeCompleto.value = '';
        telefone.value;
    }

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaCadastrados (){
    console.log(nomeCompleto);
    console.log(telefone);
}