//      Promisses
//  As promises são ações assíncronas que podem produzir
// um valor em algum momento no código;
//  Uma forma de dizer a linguagem que um valor pode estar
// pode estar presente em um futuro do código;
//  O objeto das promises Pomise, resolve é o método que resolve
// uma Promise, o then é o que faz ela poder ser executada em um
// ponto futuro;

let promessa = Promise.resolve(4 + 8);
console.log("Algum código");
promessa.then((value) => console.log(`A soma é ${value}`));

let p = Promise.resolve(5);
console.log("Outros códigos");
console.log(p);
p.then((value) => {
  return +5;
});
p.then((value) => {console.log(value)});
