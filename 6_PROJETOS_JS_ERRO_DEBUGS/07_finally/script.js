//     Finnly
//  Finally é executada independnte do resultado do try/catch;
//  E pode existir com try e catch ou apenas try;

let b = 2;

try {
  let a = 2 + b;
} catch (e) {
  console.log("Algo deu errado: " + e);
//  throw new Error(e); // Aqui o código seria interrompido
}finally{
  console.log("Executou")
}

console.log("teste");
