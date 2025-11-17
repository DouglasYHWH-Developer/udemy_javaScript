//      Exercicio 01

//  Crie uma classe que simula uma conta no banco
//(utilize a forma que prefirir)
//  Deve conter a propriedade saldo;
//  E os métodos deposito e saque;
//  Teste os métodos

class ContaBancaria {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposito(deposito) {
    this.saldo = this.saldo + deposito;
  }

  saque(saque) {
    this.saldo -= saque;
  }
}

let minhaConta = new ContaBancaria(40);
console.log(minhaConta.saldo);

minhaConta.deposito(100);
console.log(minhaConta.saldo);

minhaConta.saque(65);
console.log(minhaConta.saldo);
