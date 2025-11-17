//     Override nas propriedades do prototype

// Sempre que adicionamos uma propriedade a um objeto,
//é criada uma tedência no prototype;
// Podemos susbtituir a do prototype

class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }
  latir() {
    console.log("au au");
  }
}

Cachorro.prototype.raca = "SRD";
Cachorro.prototype.patas = 4;

let poodle = new Cachorro("Poodle", "branco");

console.log(poodle.raca);
console.log(poodle.patas);
console.log(Cachorro.prototype.raca);
