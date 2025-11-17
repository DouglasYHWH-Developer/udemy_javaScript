/**     Alterando a DOM com insertBefore
 *  Insere um nó antes do nó de referência do método;
 *  Precisamos de um elemento para ser adicionado;
 *  O elemento que terá o outro elemento adicionado antes dele;
 *  E o elemento pai destes dois;
 */

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);
