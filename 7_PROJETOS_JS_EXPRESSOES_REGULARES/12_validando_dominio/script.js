//      Na prática: validando um domínio;

//  Da seguinte forma, podemos validar um domínio;

const validarDominio = /www.\w+\.com|.com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com"));
console.log(validarDominio.test("www.horadecodar.com.br"));
