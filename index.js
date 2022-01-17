///////LEITURA DE ARQUIVO///////////

/* const fs = require("fs");

var conteudo;

fs.readFile("./rafael", { encoding: "utf-8" }, (err, dados) => {
  if (err) {
    console.log("Ocorreu uma falha!");
  } else {
    conteudo = dados;

    console.log(conteudo);
  }
}); */

////////////ESCRITA DE ARQUIVOS////////////////

/* const fs = require("fs");

fs.writeFile("./rafael", "Novo conteudo do arquivo", (err) => {
  if (err) {
    console.log("Erro durante o salvamento....");
  }
}); */

/////////LEITOR/ESCRITOR JSON/////////////////////

const fs = require("fs");

fs.readFile("./usuario.json", { encoding: "utf-8" }, (erro, dados) => {
  if (erro) {
    console.log("um erro aconteceu");
  } else {
    var conteudo = dados;
    console.log(conteudo);
  }
});
