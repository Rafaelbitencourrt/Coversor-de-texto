const Reader = require("./Reader");

var leitor = new Reader();

async function main() {
  var dados = leitor.Read("./Pasta1.csv");
}

main();
