//      Exercicio 10

// Crie um objeto calculadora;
// Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir;
// Os métodos sp devem aceitar dois parâmetros;
// Utilize cada um dos métodos e imprima os valores no console;

let calculadora = {
  somar: function (a, b) {
    return a + b;
  },
  subtrair: function (a, b) {
    return a - b;
  },
  multiplicar: function (a, b) {
    return a * b;
  },
  dividir: function (a, b) {
    console.log(a / b);
  },
};

console.log(calculadora.somar(5, 6));
console.log(calculadora.subtrair(5, 6));
console.log(calculadora.multiplicar(5, 6));
calculadora.dividir(5, 6);