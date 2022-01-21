class Processor {
  static Process(data) {
    var a = data.split("\r\n");
    var rows = [];

    a.forEach((rows) => {
      var arr = rows.split(",");
      rows.push(arr);
    });
    return rows;
  }
}

module.exports = Processor;
