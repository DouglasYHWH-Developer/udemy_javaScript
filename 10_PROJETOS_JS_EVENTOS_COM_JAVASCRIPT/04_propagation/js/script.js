/**     PRopagação
 *  Quando não definimos um elemento muito bem(seletor brando)
 * ou um elemento está dentro de outro elemento que tem um evento;
 *  Pode aconetcer a propagação, ou seja, o outro elemento ativar um
 * evento também, aí teremos uma duplicação;
 *  Por isso temos um método que para esta propagação e resolve
 * este problema, o stopPropagation;
 */

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p")

function msg(e){
  console.log("Clicou no button");
  e.stopPropagation()
}

btn1.addEventListener("click", msg)

p.addEventListener("click", function() {
  console.log("clicou no parágrafo")
})
