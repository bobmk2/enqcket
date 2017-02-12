var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("enquete.sqlite");

db.serialize(function() {
  db.run('CREATE TABLE IF NOT EXISTS enquetes (' +
      'id INTEGER PRIMARY KEY AUTOINCREMENT,' +
      'title TEXT NOT NULL,' +
      'description TEXT,' +
      'content_json TEXT NOT NULL' +
    ')');
  db.run('CREATE INDEX IF NOT EXISTS enquetes_idx0 on enquetes(id)');
  db.run("CREATE TABLE IF NOT EXISTS answers (" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    "enq_id INTEGER NOT NULL," +
    "content_json TEXT NOT NULL" +
    ")");
  db.run('CREATE INDEX IF NOT EXISTS answers_idx0 on answers(enq_id)');
});
