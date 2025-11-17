//      Getters e Setters

// Get: serve para resgatar o valor de uma propriedade;
// Set serve para alterar o valor de uma propriedade;

class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  get getCor() {
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }
}

let pastor = new Cachorro("Pastor alemão", "sem cor");
console.log(pastor);

pastor.setCor = "Marron";
console.log(pastor.getCor);
