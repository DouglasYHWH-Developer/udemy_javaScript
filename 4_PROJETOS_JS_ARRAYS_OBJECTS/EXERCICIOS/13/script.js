
/*Crie uma função chamada findMaxNumber que recebe 
como parâmetro um array de números.

A função deve retornar o maior número presente no array.
*/

function findMaxNumer(arr){
   return Math.max(...arr)
}

let arr = [23, 10, 15, 100, 200]
let maiorNumero = findMaxNumer(arr)

console.log(maiorNumero)