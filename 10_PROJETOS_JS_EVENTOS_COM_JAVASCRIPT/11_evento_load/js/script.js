/**    Evento de carregamento
 *  Podemos atrelar um evento quando a página carrega,
 * pelo evento load;
 *  E antes do usuário fechar a página pelo evento beforeunload;
 */

//window.addEventListener("load",()=>{
//alert("Assine nossos termos de uso")
//});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
});
