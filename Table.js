class Table {
  constructor(arr) {
    this.header = arr[0];
    arr.shift(); //é uma função de arrays que remove o primeiro elemento
    this.rows = arr;
  }
}

module.exports = Table;