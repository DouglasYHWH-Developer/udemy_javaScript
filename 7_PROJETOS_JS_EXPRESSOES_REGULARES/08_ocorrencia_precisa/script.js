//     OcorrÊncia precisa
//  Inserir o número de ocorrência entre {};

let telefone = /\d{4,5}-\d{4}/;
console.log(telefone.test("4004-5050"));
console.log(telefone.test("99999-8080"));
console.log(telefone.test("999-999"));
console.log(telefone.test("9999-9"));

console.log("cep")
const cep = /\d{5}-\d{3}/;
console.log(cep.test("31525-400"));
console.log(cep.test("31525-40"));
console.log(cep.test("3152-400"));

console.log("Telefone com ddd")
const telComDdd = /\(\d{2}\)\d{4,5}-\d{4}/;
console.log(telComDdd.test("(31)99999-9999"))