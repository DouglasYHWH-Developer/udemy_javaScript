/**     Removendo eventos
 *  Da mesma forma que podemos adicionar eventos,
 * podemos remover quando acharmos necessários;
 *  Para isso utilizamos o método removeEventListener,
 * onde passamos o evento e a função que o evento está
 * escutando;
 *  Somos obrigados a criar uma função externaa(a anônima não funcionaria)
 */

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function msg(){
  console.log("Clicou");
}
btn1.addEventListener("click", msg)

btn2.addEventListener("click", ()=>{
  btn1.removeEventListener("click", msg)
})
