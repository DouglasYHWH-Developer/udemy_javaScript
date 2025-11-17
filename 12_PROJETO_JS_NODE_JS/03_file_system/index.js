/**     Módulo de file system
 *  Um dos módulos mais utilizados;
 *  Ele serve para trabalhar com arquivos e diretórios;
 *  Já é incluso no node, ou seja, não precisamos instalar;
 *      File system: escrevendo
 *  Além de ler arquivo, podemos tambpem alterar o mesmo;
 *  Chamamos isso de escrever no arquivo;
 */

let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf8", (error, texto) => {
  if (error) {
    throw error;
  } else {
    console.log(texto);
  }
});

writeFile("arquivo.txt", "Inserindo este texto", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Escreveu com sucesso!");
  }
});
