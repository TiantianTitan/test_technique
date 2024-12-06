const sqlite3 = require('sqlite3').verbose();

// Vous pouvez utiliser ':memory:' pour une DB en mémoire
// ou './contacts.db' pour un fichier local.
const DB_SOURCE = ':memory:';
// const DB_SOURCE = './contacts.db';

const db = new sqlite3.Database(DB_SOURCE, (err) => {
  if (err) {
    console.error("Erreur de connexion à la base SQLite:", err.message);
    throw err;
  } else {
    console.log('Connecté à la base SQLite');
    db.run(`CREATE TABLE contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT
    )`,
    (err) => {
      if (err) {
        // La table existe déjà
      } else {
        console.log("Table 'contacts' créée ou déjà existante.");
      }
    });
  }
});

module.exports = db;
