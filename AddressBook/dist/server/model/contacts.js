const mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  prenom: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  email: String,
  telephone: String
});

var Contact = mongoose.model('contacts', contactSchema);

module.exports = Contact;
