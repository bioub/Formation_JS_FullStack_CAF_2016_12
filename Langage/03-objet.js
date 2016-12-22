console.log(typeof console); // 'object'

var contact = {
  prenom: 'Romain',
  nom: 'Bohdanowicz'
};

console.log(typeof contact); // 'object'
console.log(contact.prenom); // 'Romain'

var json = JSON.stringify(contact);
console.log(typeof json); // 'string'
console.log(json); // {"prenom":"Romain","nom":"Bohdanowicz"}
// ... réseau ...
var contactFromJson = JSON.parse(json);
console.log(contactFromJson.prenom); // 'Romain'

var Contact = function(prenom) {
  this.prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

var romain = new Contact('Romain');
console.log(typeof romain); // 'object'
console.log(romain.prenom); // 'Romain'
console.log(romain.hello()); // 'Bonjour je suis Romain'


class ContactES6 {
  constructor(prenom) {
    this.prenom = prenom;
  }

  hello() {
    return 'Bonjour je suis ' + this.prenom;
  }
}

var romain = new ContactES6('Romain');
console.log(typeof romain); // 'object'
console.log(romain.prenom); // 'Romain'
console.log(romain.hello()); // 'Bonjour je suis Romain'
console.log(typeof ContactES6); // 'function'
