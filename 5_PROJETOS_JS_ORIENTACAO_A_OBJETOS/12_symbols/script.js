//      Symbols

// Propriedades únicas, que não podem ser alteradas
//e nem criadas duas vezes;
// Podemos utilizar como uma constante, só que para
//proriedade de objeto;

class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("au au");
  }
}

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labradaor = new Cachorro("Labrador", "branco");

//acessando Symbol
console.log(Cachorro.prototype[patas]);
console.log(labradaor[patas]);
console.log(labradaor)
