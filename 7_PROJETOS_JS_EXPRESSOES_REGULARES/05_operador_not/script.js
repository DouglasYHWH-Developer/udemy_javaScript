//     Operador not
//  Podemos escrever um set que aceitam tudo,
//menos alguns caracteres com o not;
//  Lembrando que combinações serão aceitas, o
//negado é apenas se bate com o set;
//  Mais adiante aprenderemos negar de outras formaws;

let notAeB = /[^ab]/; // somente isoladamente;

console.log(notAeB.test("a"));
console.log(notAeB.test("aqui tem a"));

const notAaZ = /[^a-z]/;
console.log(notAaZ.test("123 as"));
console.log(notAaZ.test("akjldhdaskf"));
