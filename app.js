const Reader = require("./Reader");
var Writer = require("./Writter");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const PDFWrite = require("./PDFwrite");
const PDFWriter = require("./PDFwrite");
var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var dados = await leitor.Read("./Pasta1.csv");

  var dadosProcessados = Processor.Process(dados);

  var usuarios = new Table(dadosProcessados);

  var html = await HtmlParser.Parse(usuarios);

  escritor.Writer(date.now() + ".html", html);
  PDFWriter.WritePDF(date.now() + ".PDF", html);

  console.log(html);
}

main();
