//      Prototypes;

// Um objeto fallback de outro objeto;
// Quando um objeto recebe uma requisição 
//de uma propriedade que não tem, ela procura no 
//prototype deste objeto;
// O prototype de um objeto criado do zero é o Object, 
//que tem os métodos nativos da linguagem;

let pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

console.log(pessoa.hasOwnProperty('maos'))