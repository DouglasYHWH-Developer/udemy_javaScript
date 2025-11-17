// Escreva uma função qu detecta o tipo de dado passado;
// Verifique se e um number, boolean ou string;
// Eretorne uma mensagem para cada tipo;
// Execute uma função para cada caso;

function verificaTipo(a) {
  if (typeof a === "number") {
    console.log(`${a} é um number`);
  } else if (typeof a === "boolean") {
    console.log(`${a} é um booelean`);
  } else if (typeof a === "string") {
    console.log(`${a} é uma String`);
  }
}

verificaTipo("olá");
verificaTipo(10);
verificaTipo(true);
