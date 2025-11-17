// uma coleção de propriedades, parecidos com arrays;
// Podemos acessar estas propriedades;

let pessoa = {
  nome: "Matheus",
  profissao: "Programador",
  idade: 28,
  falar: function () {
    console.log("Olá!");
  },
};

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);
console.log(pessoa.falar());