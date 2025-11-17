// Escreva uma funçãoque recebe a idade de uma pessoa;
// Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima
//uma mensagem informando isso;
//Se ela tem menos, ela não pode, imprima outr mensagem com este aviso;
//execute a função nos dois casos;

function idade(idade) {
  if (idade >= 18) {
    return "Pode entrar na auto escola";
  } else {
    return "Menor de idade! Não pode entrar na auto escola";
  }
}

console.log(idade(18));
console.log(idade(21));
console.log(idade(17));