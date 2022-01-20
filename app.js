const Reader = require("./Reader");
const Processor = require("./Processor");

var leitor = new Reader();

async function main() {
  var dados = leitor.Read("./Pasta1.csv");

  Processor.Process(dados);
}

main();
