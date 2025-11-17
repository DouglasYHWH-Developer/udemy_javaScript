//      Na prática: validando um domínio;

//  Da seguinte forma, podemos validar um domínio;

const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2024]{4}/;

console.log(validarDataNasc.test("25/12/2015"));
console.log(validarDataNasc.test("25/12/15"));
console.log(validarDataNasc.test("2/2/2015"));
console.log(validarDataNasc.test("30/02/1999"));
