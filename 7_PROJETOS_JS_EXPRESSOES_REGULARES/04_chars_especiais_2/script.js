//     Caracteres especiais
// \d - Qualquer dígito de caractere;
// \w - Um caractere alfanumérico;
// \s - Qualquer caractere de espaço em branco;
// \D - Caracteres que não são dígitos
// \W - Caractere não alfanumérico;
// \S - Caractere que não seja espaço em branco;
// .  - Qualquer caractere, menos nova linha;
// Podemos utilizar os caracteres especiais de várias maneiras, veja:

const dia = /\d\d/; // está verificando se possui 2 dígitos numéricos
console.log(dia.test("2019") && "2019".length == 2);
console.log(dia.test("asd"));
console.log(dia.test("05") && "05".length == 2);

const palavraTresLetras = "/\w\w\w/";
console.log(palavraTresLetras.test("asd"));
console.log(palavraTresLetras.test("asdd"));
console.log(palavraTresLetras.test("as"));
