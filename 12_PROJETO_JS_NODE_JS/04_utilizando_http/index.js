/**     Módulo HTTP
 *  Outro módulo muito utilizado, para
 * fazer comunicação http;
 * O módulo já vem com o Node;
 *  Pode criar um servidor que serve
 * páginas web para nós;
 *
 */

const { createServer } = require("http");

let server = createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(`
    <h1>Hello World</h2>
    <p>Primeira página com Node</p>
    `);
  response.end();
});

server.listen(8000);
console.log("Ouvindo a porta 8000");
