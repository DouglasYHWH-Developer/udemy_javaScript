//     Classes: construtor por função

// Construtores são formas de instanciar uma classe em uma
//linguagem de programação;
// Instanciar = crir um objeto novo;
// No construtor já podemos definir propridades;

function criarCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function () {
    console.log("auau");
  };
  return cachorro;
}

let doberman = criarCachorro("Doberman", 4, "preto");
console.log(doberman);
doberman.latir()