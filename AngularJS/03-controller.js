(function() {
  'use strict';

  /*
  5 - module, on peut déclarer des composants javascript
  (controller, animation, service...) dans des modules pour
  éviter les variable globales (1 module = 1 fichier)
  6 - controller fonction constructeur (new PrenomCtrl())
  appelée sur la directive ng-controller sur laquelle on
  peut intéragir avec le scope
  7 - injection de dépendance : un controller qui déclarer un
  paramètre d'entrée demande à l'injector de lui passer cette
  dépendance (ici $scope reçoit le scope)
  8 - annotation : pour voir minifier les JS on déclare les
  controller à la fin d'un tableau, les premiers éléments étant
  le nom des dépendances sous la forme de chaine de caractères
   */

  var module = angular.module('app.module', []);

  module.controller('PrenomCtrl', ['$http', '$scope', function($http, $scope) {
    $scope.prenoms = [];

    $scope.ajouter = function() {
      $scope.prenoms.push($scope.prenom);
    };

    $scope.supprimer = function(i) {
      $scope.prenoms.splice(i, 1);
    };
  }]);
}());