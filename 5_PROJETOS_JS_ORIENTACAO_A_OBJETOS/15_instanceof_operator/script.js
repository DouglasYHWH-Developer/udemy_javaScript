//      Instace of operator

// Podemos verificar quem é o pai do objeto utilizando o instanceof
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

console.log(new Cachorro() instanceof Mamifero);
