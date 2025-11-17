// Método de array: join
// Junta elementos de um array em uma frase, por meio de um separador;

let frase = "O rato roeu a roupa do rei de roma";

let palavras = frase.split(" ");

let novaFrase = palavras.join("@");
console.log(novaFrase);

console.log(palavras.join(" "));
