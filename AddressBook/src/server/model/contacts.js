const mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  prenom: String,
  nom: String
});

var Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
