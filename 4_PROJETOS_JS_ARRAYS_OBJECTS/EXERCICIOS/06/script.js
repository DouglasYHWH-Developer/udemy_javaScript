//      Exercicio 06

// Crie dois arrays, um com mais de 5 elementos e outro com menos;
// Faça uma função que verifica o número de elementos;
// Se possuir menos que 5, imprima "Poucos elementos" no console;
// Se tiver mais, imprima "Muitos elementos";

let arr1 = [1, 3, 5, 10, 6, 8];
let arr2 = [22, 33, 9];

function verificaNumeroElementos(arr) {
  if (arr1.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("poucos elementos");
  }
}

verificaNumeroElementos(arr1);
verificaNumeroElementos(arr2);