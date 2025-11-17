//     Classes

// O prodtotype do JavaScript pode ser chamado de classe;
// Pois nas outras linguagens uma Class é um molde de um objeto;
// Ou seja, podemos criar diversos objetos em cima de um prototype;

let cachorro = {
  raca: "SRD",
  patas: 4,
  latir: function () {
    console.log("auau");
  },
};
let pastorAlemao = Object.create(cachorro);
pastorAlemao.latir();
pastorAlemao.raca = "Pastor Alemao";

console.log(pastorAlemao.raca);
console.log(cachorro.raca);

let labrador = Object.create(cachorro);
labrador.raca = "Labrador";
console.log(labrador.raca)