//      Tratamento de input por função
//  Não podemos controlar os dados que o usuário enviar, então
// para o bom funionamento do software, devemos tratar eles;
// Veja um exemplo de tratamento de number:
function checarNumero(valor) {
  let resultado = Number(valor);
  if (Number.isNaN(resultado)) {
    //.isNaN e um método da classe Numer que diz que, se aquele parâmetro não é um número
    alert("Por favor, digite apenas números");
  } else {
    return resultado;
  }
}

//checarNumero(5);
//checarNumero("teste");

let numero = prompt("Digite um numero");
checarNumero(numero);
