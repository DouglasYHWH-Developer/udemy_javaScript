/**     Ações default(padrão)
 *  Muitos elementos/tclas já tem ações pré-defenidas,
 * como clicar num link nos leva a outra página;
 *  Podemos para este evento default, criar uma lógica diferente
 * para o elemento em questão;
 */

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("p")
let a = document.querySelector("a");

function msg(e){
  console.log("Clicou no button");
  e.stopPropagation()
}

btn1.addEventListener("click", msg)

p.addEventListener("click", function() {
  console.log("clicou no parágrafo")
})


a.addEventListener("click", function(e){
  e.preventDefault();
  console.log("Não mudar de link")
})