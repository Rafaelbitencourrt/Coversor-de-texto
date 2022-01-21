class Processor {
  static Process(data) {
    var a = data.split("\r\n");
    var rows = [];

    a.forEach((rows) => {
      var arr = rows.toString(",");
      rows.push(arr);
    });
    console.log(rows);
  }
}

module.exports = Processor;
