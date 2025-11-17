//      Choice pattern

//  Podemos colocar uma instrução na
//regex que funciona como um || (or) das condicionais;

const frutas = /\d+ (bananas|macãs|laranjas)/;
console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

const reg = /\w+: (Matheus|João|Maria)/;
console.log(reg.test("Nome: Matheus"));
console.log(reg.test("Nome: José"));
console.log(reg.test("Nome: Maria"));
