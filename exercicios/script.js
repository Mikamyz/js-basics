// Selecionar elementos do DOM
const btnMais = document.getElementById("btn-mais");
const btnMenos = document.getElementById("btn-menos");
let numero = document.getElementById("numero");
const btnReset = document.getElementById("btn-reset");

// Variáveis
let contador = 0;

// Adicionar eventos

// Add Numeros
btnMais.addEventListener("click", addNumero);

function addNumero() {
  contador += 1;
  numero.textContent = contador;
  if (contador > 1) {
    numero.style.color = "green"
  };
  // console.log(contador);
}

// Remover Numeros
btnMenos.addEventListener("click", removerNumero);

function removerNumero() {
  contador -= 1;
  numero.textContent = contador;
  // console.log(contador);
}

// Reset 
btnReset.addEventListener("click", resetarNumero);

function resetarNumero() {
  contador = 0;
  numero.textContent = contador;
  // console.log(contador);
}

