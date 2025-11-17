//     Caracteres especiais
// \d - Qualquer dígito de caractere;
// \w - Um caractere alfanumérico;
// \s - Qualquer caractere de espaço em branco;
// \D - Caracteres que não são dígitos
// \W - Caractere não alfanumérico;
// \S - Caractere que não seja espaço em branco;
// .  - Qualquer caractere, menos nova linha;
const pontoRegex = /./;
console.log(".");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const dRegex = /\d/; // /[0-9]/
console.log("d");
console.log(dRegex.test("asd"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

const dRegex2 = /\D/; // /[^0-9]/ negação
console.log("D");
console.log(dRegex2.test("asd"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("123sad"));

const sRegex = /\s/;
console.log("s");
console.log(sRegex.test("asd"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("123sad"));

const wRegex = /\w/; // /[0-9]/ /[a-z]/
console.log("w");
console.log(wRegex.test("asd"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));
