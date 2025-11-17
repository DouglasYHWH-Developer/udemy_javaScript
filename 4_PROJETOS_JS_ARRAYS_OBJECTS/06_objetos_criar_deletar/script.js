// Podemos adicionar e deletar propriedades ao longo do programa

let pessoa = {
  nome: "Douglas",
  idade: 30,
  profissao: "Programador",
};

console.log(pessoa.nome);
delete pessoa.nome; // deletando um atributo do obj
console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = true; // add um atributo no obj
console.log(pessoa.casado);
console.log(pessoa);
