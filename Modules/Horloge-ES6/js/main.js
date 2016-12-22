'use strict';

import Clock from "./horloge";

let div = document.querySelector('#horloge');

let horloge = new Clock(div);
horloge.update();
horloge.start();


