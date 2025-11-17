//      Falha nas Promises
//  Uma Promise pode falhar, podemos reter esse erro
// com um m´todo chamando catch;
//  Com ele podemos exibir o erro no console, por exemplo
// debug no código;

let promiseErrada = Promise.resolve(new Error("Algo deu errado"));

console.log("la la la");
promiseErrada
  .then((value) => console.log(value))
  .catch((reason) => console.log("Erro: " + reason));
