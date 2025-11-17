//      Mais sobre métodos;

// Normalmente os métodos interagem com os objetos;
// Até mudando os valores das suas propriedades para
//corresponder a logica do programa desenvolvido;

let pessoa = {
  nome: "",
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
  getNome: function () {
    return this.nome;
  },
};

pessoa.setNome("Douglas");
console.log(pessoa.getNome());

//

const cachorro = {
  raca: "SRD",
  latir: function () {
    console.log("Au au");
  },
  rosnar: function () {
    console.log("grrrrr");
  },
  setRaca: function (novaRaca) {
    this.raca = novaRaca;
  },
  getRaca: function () {
    return this.raca;
  },
};

cachorro.latir();
cachorro.rosnar();
console.log(cachorro.getRaca());
