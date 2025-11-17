//      Exercicio 09

// Crie um array a partir de uma frase;
// Imprima cada palavra do array no console,
// por meio de um for;

let frase = "Eu sou um excelente programador";
let newArr = frase.split(" ");

for(let i = 0; i < newArr.length; i++){
  console.log(newArr[i]);
}
