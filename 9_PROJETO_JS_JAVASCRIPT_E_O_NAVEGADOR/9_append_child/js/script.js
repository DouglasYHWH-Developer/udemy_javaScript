/**     Alterando a DOM com appendChild
 *  Adicona um nó após todos os elementos do elemento pai específico;
 * 
 */

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let p = document.querySelector("#paragrafo-principal");
let pai = p.parentNode;

pai.appendChild(novoElemento)

