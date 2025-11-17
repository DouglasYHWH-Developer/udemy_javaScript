/**     Como acionar um evento
 *  Devemos atrelar o evento a um elemento, por exemplo um botão;
 *  Depois inserir um listener e o tipo de evento como argumento;
 *  Aí o elemento responderá por este evento e, obviamente, os
 * outros da página, não;
 */

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Clicou");
});
