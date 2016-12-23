const express = require('express');
const bodyParser = require('body-parser');

const Contact = require('../model/contacts');

const router = new express.Router();

// GET /prefix -> Lister
router.get('/', function(req, res, next) {
  Contact.find('prenom nom')
    .then(contacts => res.json(contacts))
    .catch(next);
});

// POST /prefix -> Ajouter
router.post('/', bodyParser.json());
router.post('/', function(req, res, next) {
  var contact = new Contact(req.body);
  contact.save(function(err, contact) {
    if (err) {
      return next(err);
    }
    res.statusCode = 201;
    res.json(contact);
  });
});

// GET /prefix/id -> Afficher (de manière détaillée)
router.get('/:id', function(req, res, next) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) {
      return next(err);
    }
    if (!contact) {
      return next();
    }
    res.json(contact);
  });
});

// DELETE /prefix/id -> Supprimer
router.delete('/:id', function(req, res, next) {
  Contact.findByIdAndRemove(req.params.id, function(err, contact) {
    if (err) {
      return next(err);
    }
    if (!contact) {
      return next();
    }
    res.statusCode = 204;
    res.json('');
  });
});

module.exports = router;