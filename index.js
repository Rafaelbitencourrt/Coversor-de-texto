const fs = require("fs");

fs.readFile("./rafael.bitencourt", { encoding: "utf-8" }, (err, dados) => {
  if (err) {
    console.log("Ocorreu uma falha!");
  } else dados;
});
