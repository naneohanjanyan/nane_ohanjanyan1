class Database {
  static id = 1;
  static instance = null;

  static get() {
    if (localStorage.getItem("db") === null) {
      localStorage.setItem("db", JSON.stringify([], undefined, 2));
    }
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  getTable(name) {
    const arr = JSON.parse(localStorage.getItem("db"));
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === `${name}`) return new Table(name);
    }
  }

  createTable(name, column, values = null) {
    const db = localStorage.getItem("db");
    let arr = [];
    arr = JSON.parse(db);

    if (!arr.find((element) => element.name === name)) {
      arr.push({
        name: `${name}`,
        columns: [`${column[0]}`, `${column[1]}`, `${column[2]}`],
        values: [Database.id, `${values[0]}`, `${values[1]}`],
      });
    }
    localStorage.setItem("db", JSON.stringify(arr));
    Database.id++;
  }
}

class Table {
  constructor(name) {
    this.name = name;
  }
}

let temp = Database.get();
temp.createTable("user", ["id", "username", "password"], ["Nane", "asd"]);
temp.createTable("admin", ["id", "username", "password"], ["Gagik", "xyz"]);

console.log(temp.getTable("admin"));
console.log(temp.getTable("user"));
