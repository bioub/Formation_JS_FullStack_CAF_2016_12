require(['./horloge'], function(Clock) {
  'use strict';

  var div = document.querySelector('#horloge');

  var horloge = new Clock(div);
  horloge.update();
  horloge.start();
});



