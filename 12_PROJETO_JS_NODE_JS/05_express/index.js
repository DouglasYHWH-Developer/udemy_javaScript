let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.send("Primeira rota com Express");
});

app.get("/teste", function (req, res) {
  res.send("Testanto rota");
});

app.listen(3000, () => {
  console.log("A apicação está funcionando na porta 3000");
});
