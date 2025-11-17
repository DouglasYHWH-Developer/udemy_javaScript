//Escreva um função que retorne um numéro aleatório;
//O número máximo retornando deve ser passado via parâmetro;
//Dica: utilize Math.random();

function numeroAleatorio(max){
  return Math.floor(Math.random() * max) + 1;
}

console.log(numeroAleatorio(10))
