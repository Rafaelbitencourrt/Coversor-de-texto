const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./Pasta1.csv");
  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  console.log(usuarios.header);
}

main();
