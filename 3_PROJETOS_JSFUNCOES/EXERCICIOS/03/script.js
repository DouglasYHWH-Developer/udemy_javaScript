//Escreva uma função que some 2 números e retorne eles;
// Depois imprima este return;
function soma(a, b) {
  return a + b;
}

console.log(soma(4, 4));
console.log(soma(5, 1));
console.log(soma(3, 9));

function isPalindrome(palindromo) {
  const reversedpalindromo = palindromo.split("").reverse().join("");
  return palindromo === reversedpalindromo;
}

console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));

console.log("\n");

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Exemplo de uso
let stringOriginal = "Olá, mundo!";
let stringInvertida = reverseString(stringOriginal);
console.log(stringInvertida); // Output: "!odnum ,álO"
