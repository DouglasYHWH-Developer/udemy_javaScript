// Podemos copiar todas as propriedades de um obj para outro;
//A classe Object é usada para acessar métodos dentro dos objetos;
// assign é um método que aproveita as propriedades de um objeto em outro.
let objetoA = {
  prop1: "teste",
  prop2: "testando",
};

let objetoB = {
  prop3: "propriedade",
};

Object.assign(objetoA, objetoB);
console.log(objetoA);

let carro = {
  portas: 2,
  portamalas: '200L',
  motor: 2.0,
}

let adicionais = {
  tetoSolar: true,
  arCondicionado: true,
}

Object.assign(carro, adicionais)
console.log(carro)