//      Exercicio 04

// Crie uma classe que simule um caro;
// Propriedades: marca, cor, gasolina restante;
// Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
// E um de abastecer para aumenar a gasolina quando necessário;

class Carro {
  constructor(marca, cor, gasRestante) {
    this.marca = marca;
    this.cor = cor;
    this.gasRestante = gasRestante;
  }
  dirigir(gasAtual) {
    this.gasRestante = this.gasRestante - gasAtual;
  }

  abastecer(gasAtual) {
    this.gasRestante = this.gasRestante + gasAtual;
  }
}

let meuCarro = new Carro("Land Rover", "Preto", 100);

meuCarro.dirigir(55);
console.log(meuCarro);

meuCarro.abastecer(16);
console.log(meuCarro);

// Solucão do professor

class CarroProfessor {
  constructor(marca, cor, gasRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasRestante = gasRestante;
    this.consumo = consumo;
  }
  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasRestante = this.gasRestante - litrosConsumidos;
  }

  abastecer(litros) {
    this.gasRestante = this.gasRestante + litros;
  }
}

let carroProfessor = new CarroProfessor("Land Rover", "Preto", 100, 10);

carroProfessor.dirigir(55);
console.log(carroProfessor);

carroProfessor.abastecer(16);
console.log(carroProfessor);
