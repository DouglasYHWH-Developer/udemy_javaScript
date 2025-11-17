/**    Selecionar vários elementos com query
 *  Para selecionar diversos elementos com query, podemos utilizar 
 * o método querySelectorAll;
 *  Em vez de um, podemos pegar todos os elementos semelhantes
 * com o seletor;
 */

let items = document.querySelectorAll('.items-vermelhos')

console.log(items[0].style.color);

items[0].style.color = 'red';

console.log(items[0].style.color)

let items2 = document.querySelectorAll('.items-azuis');

console.log(items2)