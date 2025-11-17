/*      Movendo-se através do DOM
 *   Podemos acessar todos os elementos a partir de document..body;
 *   A partir dele vamos entrando nos childNodes
 */

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1]);

console.log(document.body.childNodes[1].childNodes[1].innerText);
