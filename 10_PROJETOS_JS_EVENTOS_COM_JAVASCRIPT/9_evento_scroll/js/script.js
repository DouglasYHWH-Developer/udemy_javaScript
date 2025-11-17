/**    Eventos por scroll
 *  Podemos atrelar evento ao scroll da tela também,
 * pelo evento scroll;
 *  Por exemplo: podemos criar um elemento assim que o scroll
 * atingir uma posição x;
 * pageYOffset: eixo de cima para baixo(vertical) use o scrollY
 */

window.addEventListener("scroll",(e) =>{
  if(window.scrollY > 1000){
    console.log("ativou")
  }
})
