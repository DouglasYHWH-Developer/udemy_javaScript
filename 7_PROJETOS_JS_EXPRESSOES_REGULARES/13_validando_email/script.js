//      Na prática: validando um domínio;

//  Da seguinte forma, podemos validar um domínio;

const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@gmail.com"));
console.log(validarEmail.test("email@email"));
console.log(validarEmail.test("ronaldo@yahoo.com.br"));
console.log(validarEmail.test("email.com"));
