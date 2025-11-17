// Escreva uma função que recebe uma string;
// Se o texto conter mais de 10 caracteres imprima "Texto muito longo";
// Se conter menos, imprimir "Texto dentro do limite";

function texto(string) {
  if (string.length > 10) {
    return "Texto muito longo";
  } else {
    return " Texto dentro do limite";
  }
}

console.log(texto("Era uma vez meu ovo!"));
console.log(texto("Boa Tarde"));
console.log(texto("Olá"));
