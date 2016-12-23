const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const contactRoutes = require('./routes/contacts');

// Connection à MongoDB
mongoose.connect('mongodb://localhost/addressbook');
mongoose.Promise = Promise;

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/../client'));

app.use('/api/v1.0/contacts', contactRoutes);

app.use('/api', function (req, res, next) {
  res.statusCode = 404;
  res.json({
    message: 'Not found'
  })
});

app.use('/api', function (err, req, res, next) {
  res.statusCode = 500;
  res.json({
    message: err
  })
});

app.listen(8080, function() {
  console.log('Serveur démarré');
});