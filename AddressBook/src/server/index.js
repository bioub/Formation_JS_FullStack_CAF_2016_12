const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const contactRoutes = require('./routes/contacts');

// Connection à MongoDB
mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use(morgan('dev'));

app.use('/api/v1.0/contacts', contactRoutes);

app.use('/api', function (req, res, next) {
  res.statusCode = 404;
  res.json({
    message: 'Not found'
  })
});

app.listen(8080, function() {
  console.log('Serveur démarré');
});