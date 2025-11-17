/**    Debounce
 *  Um evento que dispara múltiplas vezes pode ser um problema
 * para o computador do cliente;
 *  Por isso podeos fazer um debounce, que é um suavizador de
 * evento, para nao chamar o mesmo tatas vezes;
 */


let timeout;

window.addEventListener("mousemove", (e) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log(e.x);
  }, 500);
});
