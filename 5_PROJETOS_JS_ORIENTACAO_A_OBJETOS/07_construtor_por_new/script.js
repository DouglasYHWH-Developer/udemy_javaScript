//     Classes: construtor por New

// Em muitas linguagens temos a possibilidade de
//instanciar um objeto com new, no JS também

function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log("Aauuuuu!");
  };
}

let husky = new Cachorro("Husky", 4, "branco");
console.log(husky);
husky.uivar();
