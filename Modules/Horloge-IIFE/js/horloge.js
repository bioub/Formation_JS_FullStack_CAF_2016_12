(function(global) {
  'use strict';

  var dateFormat = 'DD/MM/YYYY hh[h]mm[m]ss';

  var Horloge = function(conteneur) {
    this.conteneur = conteneur;
  };

  Horloge.prototype.update = function() {
    this.conteneur.innerHTML = moment().format(dateFormat);
  };

  Horloge.prototype.start = function() {
    setInterval(this.update.bind(this), 1000);
  };

  global.Horloge = Horloge;
}(this));
