const db = require('../db');

// Simple validation d'email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

module.exports = {
  getAllContacts: (req, res) => {
    db.all("SELECT * FROM contacts", [], (err, rows) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      res.json(rows);
    });
  },

  getContactById: (req, res) => {
    const { id } = req.params;
    db.get("SELECT * FROM contacts WHERE id = ?", [id], (err, row) => {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      if (!row) {
        return res.status(404).json({ error: "Contact non trouvé." });
      }
      res.json(row);
    });
  },

  createContact: (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Les champs 'name' et 'email' sont obligatoires." });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Format d'email invalide." });
    }

    db.run("INSERT INTO contacts (name, email, phone) VALUES (?,?,?)", [name, email, phone], function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      res.status(201).json({ id: this.lastID, name, email, phone });
    });
  },

  updateContact: (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Les champs 'name' et 'email' sont obligatoires." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Format d'email invalide." });
    }

    db.run("UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?", [name, email, phone, id], function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: "Contact non trouvé." });
      }
      res.json({ id: Number(id), name, email, phone });
    });
  },

  deleteContact: (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM contacts WHERE id = ?", [id], function (err) {
      if (err) {
        console.error(err.message);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: "Contact non trouvé." });
      }
      res.status(204).send();
    });
  }
};
