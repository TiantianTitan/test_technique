const express = require('express');
const bodyParser = require('body-parser');
const contactsHandler = require('./handlers/contacts');

const app = express();

app.use(bodyParser.json());

// Routes
app.get('/contacts', contactsHandler.getAllContacts);
app.get('/contacts/:id', contactsHandler.getContactById);
app.post('/contacts', contactsHandler.createContact);
app.put('/contacts/:id', contactsHandler.updateContact);
app.delete('/contacts/:id', contactsHandler.deleteContact);

// Gestion des erreurs générales
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Erreur serveur interne." });
});

module.exports = app;
