//      Herança inheritance

// Uma classe pode herdar propriedades de outra classe por herança;
// Para isso utilizamos extends;

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Cachorro extends Mamifero {
  constructor(patas, raca) {
    super(patas, patas);
    this.raca = raca;
  }
}

let pug = new Cachorro(4, "pug");

console.log(pug.patas);
