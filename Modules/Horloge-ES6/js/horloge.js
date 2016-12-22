'use strict';

import moment from "./moment";

const dateFormat = 'hh[h]mm[m]ss';

export default class Horloge {
  constructor(conteneur) {
    this.conteneur = conteneur;
  }

  update() {
    this.conteneur.innerHTML = moment().format(dateFormat);
  }

  start() {
    setInterval(this.update.bind(this), 1000);
  }
}


