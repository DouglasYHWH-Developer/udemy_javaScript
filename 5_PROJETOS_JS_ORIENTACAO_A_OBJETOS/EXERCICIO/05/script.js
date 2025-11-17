//      Exercício 05

// Crie uma classe conta bancaria;
// Com as propriedades de saldo na conta corrente, saldo na conta,
//poupança e juros da poupança;
// Crie os métodos de depósito e saque, também um método para
//traferir dinheiro da conta poupança para a corrente;
// Além disso crie uma conta especial que herda da conta normal;
// Na conta especial os juros são dobrados da conta normal

class ContaBancaria {
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
    this.saldoContaCorrente = saldoContaCorrente;
    this.saldoContaPoupanca = saldoContaPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  deposito(saldo) {
    this.saldoContaCorrente += saldo;
  }
  saque(saldo) {
    this.saldoContaCorrente -= saldo;
  }
  tranferirContaPoupanca(valor) {
    this.saldoContaCorrente -= valor;
    this.saldoContaPoupanca += valor;
  }
  tranferirContacorrente(valor) {
    this.saldoContaPoupanca -= valor;
    this.saldoContaCorrente += valor;
  }

  jurosAniversario() {
    let juros = (this.saldoContaPoupanca * this.juros) / 100;
    this.saldoContaPoupanca += juros;
   
  }
}



let minhaConta = new ContaBancaria(1000, 5000, 1);

/*minhaConta.deposito(5000);
console.log(minhaConta);

minhaConta.saque(10);
console.log(minhaConta);

minhaConta.tranferirContaPoupanca(15);
console.log(minhaConta);

minhaConta.jurosAniversario();
console.log(minhaConta);*/


class ContaEspecial extends ContaBancaria{
  constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca){
    super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2)
  }
}

let outraConta = new ContaEspecial(10000, 50000, 1);

console.log(outraConta)

outraConta.saque(5000);
console.log(outraConta)

outraConta.tranferirContaPoupanca(3000);
console.log(outraConta)