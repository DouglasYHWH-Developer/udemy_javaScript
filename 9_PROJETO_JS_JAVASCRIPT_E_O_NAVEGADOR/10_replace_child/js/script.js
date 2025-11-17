/**     Alterando a DOM com replaceChild
 *  Repõe um antigo elemento no DOM, com um novo;
 *  parentNode - essa propriedade é utilizada para 
 * acessar o nó pai de um elemento.
 */

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);
