// Escreva uma função que recebe um número e o decrementa de um em um com um loop;
// Além disso imprima somente os números pares no console;

function numero(num) {
  for (let i = num; i >= 0; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}

numero(10);
numero(50);
numero(13);


