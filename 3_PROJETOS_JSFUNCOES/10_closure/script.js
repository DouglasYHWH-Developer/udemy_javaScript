// Closure é uma função que se lembra do ambiente em que ela foi criada;

function armazenarSoma(x) {
  return (y) => x + y;
}

let soma1 = armazenarSoma(3);
console.log(soma1(5)); //8
let soma2 = armazenarSoma(5);
console.log(soma2(10)); //15

function lembrarSoma(x) {
  return function (y) {
    return x + y;
  };
}

let somaUm = lembrarSoma(2);
console.log(somaUm(5));

let somaDois = lembrarSoma(5);
console.log(somaDois(7));

function contador(i) {
  let cont = i;
  let somarContador = function () {
    console.log(cont);
    cont++;
  };
  return somarContador;
}
let meuContador = contador(5);
meuContador();
meuContador();
