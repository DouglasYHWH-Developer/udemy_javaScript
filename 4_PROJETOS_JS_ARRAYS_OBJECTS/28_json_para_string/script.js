// Converter json para string

// Podemos converter o JSON para uma string de forma fácil;
//Ou tambem uma string para JSON;

let pessoa = {
  nome: "Douglas",
  idade: 30,
  profissao: "Programador",
  hobbies: ["video game", "animes", "mangas"],
};

// transforma json em string.
let pessoaTexto = JSON.stringify(pessoa);
console.log(pessoaTexto);

// tranforma string em json
let pessoaJSON = JSON.parse(pessoaTexto);
console.log(pessoaJSON);
