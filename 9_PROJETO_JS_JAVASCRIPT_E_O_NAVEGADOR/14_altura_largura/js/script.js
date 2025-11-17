/**    Verificando altura e largura do elemento
 *  Com o JS também é possível verificar propriedades
 * do elemento como altura e largura;
 * offsetWidth e offsetHeight consideram as bordas(border box);
 * clientWidth e clientHeight não considera as bordas(border box);
 */

let elemento = document.querySelector("#titulo-principal");
console.log('largura: ' + elemento.offsetWidth) //considera as bordas
console.log('altura: ' + elemento.offsetHeight) //considera as bordas

console.log('largura: ' + elemento.clientWidth) //não considera as bordas
console.log('altura: ' + elemento.clientHeight) //não considera as bordas
