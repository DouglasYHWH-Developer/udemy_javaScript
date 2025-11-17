//     Método exec
//  O método exec nos retorna um objeto com
//algumas informações sobre a regex;
//  Se nada for encontrado, retorna null;

let teste = /\d+/.exec("O número 100");
console.log(teste);
console.log(teste.index);

console.log("\n");
const digitos = /\d+/;
console.log(digitos.exec("Tem o número 100 aqui"));
console.log(digitos.exec("Tem o número aqui"));
