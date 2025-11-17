//      Mais sobre Prototypes;

// Quando criamos um objeto a partir de um outro
// o base será prototype;
// Ele herdará tanto os métodos e propriedades de Object
//(O prototype do objeto base);
// Quanto os do objeto base para este novo;
let pessoa = {
  maos: 2,
}

let pessoaNova = Object.create(pessoa)

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova));
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);