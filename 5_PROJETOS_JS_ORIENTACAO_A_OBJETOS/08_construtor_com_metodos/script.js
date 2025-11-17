//     Classes: construtor por metodos prototype

// Além de propriedades, podemos criar a classe base já com métodos;
// Basta definir ao prototype o método desado

function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
}

Cachorro.prototype.uivar = function () {
  console.log("Auuuuuu");
};

let pug = new Cachorro("Pug", 4, "bege");
console.log(pug.raca);
pug.uivar();
console.log(pug)