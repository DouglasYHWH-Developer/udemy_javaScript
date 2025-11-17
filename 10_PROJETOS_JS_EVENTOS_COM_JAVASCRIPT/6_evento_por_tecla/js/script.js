/**    Eventos de tecla(key event)
 *  Sempre que uma tecla é pressionada, são gerados
 * dois eventos: keyup e keydown;
 *  Podemos realizar ações nestes eventos também;
 *  keyup é quando soltamos a tecla;
 *  keydown é quando apertamos;
 */

window.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    console.log("Apertou a letra q");
  } else if (e.key == "Enter") {
    console.log("Apertou Enter");
  }
});

window.addEventListener("keyup", (e) => {
  
if (e.key == "Enter") {
  console.log("Soltou Enter");
}else if (e.key == "q") {
    console.log("Soltou a letra q");
}
});
