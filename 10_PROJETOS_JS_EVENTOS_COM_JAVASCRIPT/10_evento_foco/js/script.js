/**    Eventos por foco
 *  Quando focamos em um elemento ou saímos dele, podemos
 * também atrelar um evento a esta ação;
 *  Focus para quando um elemento recebe foco e blur quando
 * ele perde;
 * focus: aumenta o foco
 * blur: tira o foco
 */

let input = document.querySelector("input");
let input1 = document.querySelector("#input1");

input.addEventListener("focus", () => {
  console.log("entrou no input");
});

input1.addEventListener("blur", () => {
  console.log("sair do input");
});
