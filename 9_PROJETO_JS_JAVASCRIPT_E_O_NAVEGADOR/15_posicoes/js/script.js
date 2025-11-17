/**    Posição do elemento na tela
 *  Também é possível checar a posição do elemento na tela;
 *  getBoundingClientRect nos da posições de top, left, right, bottom
 * do elemento e outras informações;
 */

let elemento = document.querySelector("#titulo-principal");

console.log(elemento.getBoundingClientRect());
