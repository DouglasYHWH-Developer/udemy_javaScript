//       Rejeitando Promises
//  Além do resolve, ha o método reject;
//  Que é quando determinada logica não satisfaz nosso programa;
// então podemos ir para outra com o reject, em vez do resolve;
//  Resolve e reject termina a Promise, ou seja, não
// podemos chamar mais o then, pode exemplo;

function verificarAlgo(num) {
  return new Promise((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(`O número é ${num}`));
    } else {
      reject(new Error("Falhou"));
    }
  });
}
verificarAlgo(2);

let p = new Promisse((resolve, reject)=>{
  if (num == 2) {
    resolve(console.log(`O número é ${num}`));
  } else {
    reject(new Error("Falhou"));
  }
})


