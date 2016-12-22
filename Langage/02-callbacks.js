setInterval(function intervalCb(){
  console.log('1s');
}, 1000);

setTimeout(function timeoutCb() {
  console.log('2s');
}, 2000);

['Romain', 'Edouard'].forEach(function cb(prenom) {
  console.log(prenom);
});


