var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

var Jeu = function(options) {
  options = options || {};
  this._min = options.min || 0;
  this._max = options.max || 100;
  this._entierAlea = getRandomIntInclusive(this._min, this._max);
  this._essais = [];
};

Jeu.prototype.jouer = function() {

  if (this._essais.length) {
    console.log('Vous avez déjà saisi : ' + this._essais.join(', '));
  }

  rl.question(`Quel est l'entier ? `, this._answerCb.bind(this));
};

Jeu.prototype._answerCb = function answerCallback(answer) {

  let entierSaisi = Number.parseInt(answer);

  if (Number.isNaN(entierSaisi)) {
    console.log('Erreur : il faut saisir un nombre');
    return this.jouer();
  }

  this._essais.push(entierSaisi);

  if (entierSaisi < this._entierAlea) {
    console.log('Trop petit');
    return this.jouer();
  }

  if (entierSaisi > this._entierAlea) {
    console.log('Trop grand');
    return this.jouer();
  }

  console.log('Gagné !');
  rl.close();
};

var jeu = new Jeu({
  min: 0,
  max: 100
});
jeu.jouer();

