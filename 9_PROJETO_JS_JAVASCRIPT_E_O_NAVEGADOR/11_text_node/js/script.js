/**    Criando nós de texto
 *  Podemos criar um nó de texto puro e inserir em um elemento;
 */

let pSemTexto = document.getElementById("sem-texto");
let texto = document.createTextNode("Inserir este texto");

pSemTexto.appendChild(texto);
