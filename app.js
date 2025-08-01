const nomes = [];

function adicionarNome() {
  const input = document.getElementById('nomeInput');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  nomes.push(nome);

  const lista = document.getElementById('listaNomes');
  const item = document.createElement('li');
  item.textContent = nome;
  lista.appendChild(item);

  input.value = '';
  input.focus();
}

function sortearAmigo() {
  if (nomes.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceSorteado];
  document.getElementById('resultado').textContent = `Amigo sorteado: ${nomeSorteado}`;
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

