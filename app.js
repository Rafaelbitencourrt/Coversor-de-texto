const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./Pasta1.csv");

  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  console.log(html);
}

main();
