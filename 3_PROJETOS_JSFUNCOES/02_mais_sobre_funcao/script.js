function multiplicarTresNumeros(x, y, z) {
  return x * y * z;
}
console.log(multiplicarTresNumeros(3, 2, 4));

const mult = multiplicarTresNumeros(5, 4, 8);
console.log(`O valor de mult é: ${mult}`);

function podeDirigir(idade, cnh) {
  if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir");
  } else {
    console.log("Não pode dirigir");
  }
}

podeDirigir(19, true)
podeDirigir(44, false)
podeDirigir(25, 1)// o booelan pode ser representado por 1 = true e false = 0;
podeDirigir(17, 0)