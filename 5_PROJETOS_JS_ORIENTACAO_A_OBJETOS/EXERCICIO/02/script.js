//      Exercicio 02

//  Crie uma classe que simula um carrinho de compras
//de um e-commerce;
//  Propriedades itens, quantidade total, valor total;
//  Crie os métoos para adicionar e remover itens;

class Carrinho {
  constructor(itens, qtd, valorTotal) {
    this.itens = itens;
    this.qtd = qtd;
    this.valorTotal = valorTotal;
  }
  addItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      let obj = this.itens[itemCarrinho];
      if (obj.id == item.id) {
        obj.qtd += item.qtd;
        contador = 1;
      }
    }
    if (contador == 0) {
      this.itens.push(item);
    }
    this.qtd += item.qtd;
    this.valorTotal += item.preco * item.qtd;
  }
  removerItem(item) {
    for (let itemCarrinho in this.itens) {
      let obj = this.itens[itemCarrinho];
      if (obj.id == item.id) {
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        this.qtd -= obj.qtd;
        this.valorTotal -= obj.preco * obj.qtd;

        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    {
      id: 1,
      nome: "Camisa",
      qtd: 1,
      preco: 20,
    },
    {
      id: 2,
      nome: "Calça",
      qtd: 2,
      preco: 50,
    },
  ],
  3,
  120
);

carrinho.addItem({ id: 3, nome: "Boné", qtd: 1, preco: 15 });
console.log(carrinho);

carrinho.removerItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(carrinho);

// pra entender melhor!
let array = ["a", "b", "c", "d"];

for (let newArray in array) {
  console.log(array[newArray]);
}

//console.log(array)
//console.log(newArray);
