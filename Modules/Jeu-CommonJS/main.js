var JeuDuPlusOuMoins = require('./jeu');

var jeu = new JeuDuPlusOuMoins({
  min: 0,
  max: 100
});
jeu.jouer();