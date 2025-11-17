let nome = "Matheus";

switch (nome) {
  case "João":
    console.log("O seu nome é João");
    break;
  case "Marcos":
    console.log("Seu nome é Marcos");
    break;
  case "Matheus":
    console.log("Seu nome é Matheus");
    break;
  default:
    console.log("Nome não encontrado");
    break;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for(let i = 0; i < arr.length; i++){
  if(arr[i] % 2 != 0){
    console.log(semPares.push(arr[i]))
  }
}
