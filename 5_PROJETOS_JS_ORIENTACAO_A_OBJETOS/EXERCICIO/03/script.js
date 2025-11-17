//      Exercicio 03

// Crie um objeto que simula um endereço de um cliente;
// Propriedades: Rua, Bairro, Cidade e Estado;
// No construtor o endereço já deve ser definido por completo;
// Crie métodos para atualizar todas as propriedades;

class Endereço {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set setNovaRua(rua){
    this.rua = rua;
  }
  set setNovoBairro(bairro){
    this.bairro = bairro;
  }
  set setNovaCidade(cidade){
    this.cidade = cidade;
  }
  set setNovoEstado(estado){
    this.estado = estado;
  }
}

let endereço = new Endereço(
  "Rua janete clair",
  "Santa Monica",
  "Belo Horizonte",
  "MG"
);
endereço.setNovaRua = "José Marcos Felício"
endereço.setNovoBairro = "Jardim dos comerciarios"
endereço.setNovaCidade = "Belo Horionte"
endereço.setNovoEstado = "MG"
console.log(endereço);

/*let endereço1 =  new Endereço([
  {
    id: 1,
    rua: "Rua janete clair",
    bairro: "Santa Monica",
    cidade: "Belo Horizonte",
    estado: "MG",
  },
  {
    id: 2,
    rua: "José Marcos Felicio",
    bairro: "Jardim dos comerciarios",
    cidade: "Belo Horizonte",
    estado: "MG",
  },
],0,0,0);
console.log(endereço1)*/
