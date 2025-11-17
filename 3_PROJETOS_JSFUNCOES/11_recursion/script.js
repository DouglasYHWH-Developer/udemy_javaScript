//Uma funcionalidade que permite uma função se chamar novamente;
//Isso pode ser um problema caso a função se chame muitas vezes;

function retornarNumeroPar(n) {
  if (n % 2 == 0) {
    console.log(`n agora é par: ${n}`);
  } else {
    console.log(n);
    retornarNumeroPar(n - 1);
  }
}

retornarNumeroPar(33);

function recursao(n) {
  if (n - 1 == 2) {
    console.log("Recursão parou");
  } else if (n % 2 != 0) {
    console.log(`Número ímpar ${n}`);
    recursao(n - 1);
  } else {
    console.log(`Número par ${n}`);
  }
}

recursao(10);
recursao(11);
recursao(3);

