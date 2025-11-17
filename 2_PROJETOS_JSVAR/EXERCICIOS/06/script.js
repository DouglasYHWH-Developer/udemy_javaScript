/**     EXERCICIO 06
 * Faça uma estrutura if/else para verificar se um usuário
 * pode dirigir;
 * Armazene em variáveis algumas informações sobre o usuário;
 * idade, se tem cnh;
 * Se a idade for maior que 18 e não possui CNH, exiba uma
 * mensagem;
 * Se a idade for maior que 18 e tem CNH, exiba uma mensagem;
 * Se não tiver 18 CNH, exiba outra mensagem;
 */

let idade = 18;
let cnh = true;

if (idade >= 18 && cnh == true) {
  console.log("Pode dirigir");
} else if (idade >= 18 && cnh == false) {
  console.log("Não pode dirigir");
} else {
  console.log("menor de idade");
}
