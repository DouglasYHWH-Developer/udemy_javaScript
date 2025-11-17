/**    Estilizando com JS
 *  Podemos também mudar as propriedades de estilo dos elementos
 * do html com JS;
 *  Acessando a propriedade style podemos fazer as modificações;
 *  O estilo é manipulado direto na tag, ou seja, substitui o do CSS
 * na maioria das vezes;
 */

let elemento = document.querySelector("#titulo-principal");

setTimeout(() => {
  elemento.style.color = "red";
  elemento.style.backgroundColor = "blue";
  elemento.style.width = '400px';
}, 2000);
