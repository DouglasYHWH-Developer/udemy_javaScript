//     Conjunto de caracteres
// Podemos definir um conjunto de caracteres para encontrar por regex;
// Nasta por entre []
// Com um traço podemos definir um intervalo também, veja;

const reg1 = /[12345]/;
console.log(reg1.test("Temos o número 6"));
console.log(reg1.test("Temos o número 2"));

const reg2 = /[0-9]/;
console.log(reg2.test("Temos o número 6"));
console.log(reg2.test("Temos o número 6214564"));
