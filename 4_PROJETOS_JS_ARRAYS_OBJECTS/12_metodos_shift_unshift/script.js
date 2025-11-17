// métodos de arrays
// shift: remove o primiro elemento de um array;
// unshift: adiciona um ou mais elementos no início de um array;

let frutas = ["Maçãs", "Melão", "Uva"];
console.log(frutas);

let frutaRemovida = frutas.shift();
console.log(`Fruta removida: ${frutaRemovida}`);

frutas.unshift("Pêra", "Melancia");
console.log(frutas);
