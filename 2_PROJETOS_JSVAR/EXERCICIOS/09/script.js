/**     EXERCICIO 07
 * Escreva um loop for ou while quie exiba qual número é par e qual número é ímpar;
 * O contador deve iniciar em 0 e até 50;
 */
;
let x = 50;

for (let i = 0; i <= x; i++) {
  if(i % 2 == 0){
    console.log(`${i} É par \n`);
  }else{
    console.log(`${i} É ímpar`)
  }
}

let i = 0;
do{
  if(i % 2 == 0){
    console.log(`${i} while É par \n`);
  }else{
    console.log(`${i} while É ímpar`);
  }
  i++;
}while(i <= 50);