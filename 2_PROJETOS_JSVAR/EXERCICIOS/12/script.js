/**  Aprofundando em condicionais
Crie uma função chamada classificarNumero que recebe um número inteiro como argumento.

A função deve retornar uma string com a classificação do número de acordo com as seguintes regras:

Se o número for positivo e par, retorne "Positivo e Par".

Se o número for positivo e ímpar, retorne "Positivo e Ímpar".

Se o número for negativo, retorne "Negativo".

Se o número for zero, retorne "Neutro".
*/

function classificarNumero(num) {
  if(num > 0){
    if(num % 2 == 0){
      console.log("Positivo e Par")
    }else{
      console.log("Positivo e Ímpar")
    }
  }else if(num < 0){
    console.log("Negativo")
  }else{
    console.log("Neutro")
  }
}

classificarNumero(10);
classificarNumero(9);
classificarNumero(-1);
classificarNumero(0);
