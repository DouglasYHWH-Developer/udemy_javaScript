/**    Outros eventos de mouse
 *  No mouse temos também eventos como mousedown
 * e mouseup, semelhante aos das teclas;
 *  Dblclick para ativar com dois cliques;
 */

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", () => {
  console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", () => {
  console.log("Soltouo botão");
});

btn2.addEventListener("dblclick", () => {
  console.log("Deu um doble click");
});

btn2.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log("Botão direito");
});
