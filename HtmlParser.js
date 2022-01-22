var eja = require("ejs");

class HtmlParser {
  static Parse(table) {
    ejs.renderFile("./table.ejs", { header: table.header });
  }
}
