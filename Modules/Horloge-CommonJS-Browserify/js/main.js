'use strict';

var Clock = require('./horloge');

var div = document.querySelector('#horloge');

var horloge = new Clock(div);
horloge.update();
horloge.start();


