//      Criando expressão regular
// Podemos instancia-lo de dus formas;
// new RegExp e /.../;

let reg1 = new RegExp("bola");
console.log(reg1.test("Tem bola?"));
console.log(reg1.test("Não tem?"));

let reg2 = /bola/;
console.log(reg2.test("Tem bola?"));
console.log(reg2.test("Não tem?"));

let text = "Tem na cesta";
console.log(reg2.test(text));


console.log(/testando/.test("ttttestandoooo"));
console.log(/testando/.test("adaskjdh"));
