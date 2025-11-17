//      Try e Catch
//  O bloco try catch, vai tentar executar um código, caso não siga
// ele pode retornar o erro que esse código gerou;
//  Muito útil para debug;

let b = 2;

try {
  let a = 2 + b;
} catch (e) {
  console.log("Algo deu errado: " + e);
//  throw new Error(e); // Aqui o código seria interrompido
}

console.log("teste");
