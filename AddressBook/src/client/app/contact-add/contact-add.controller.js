import angular from 'angular';
import uiRouter from 'angular-ui-router';

class ContactAddCtrl {
  constructor($scope, $http, $state) {

    $scope.ajouter = function() {
      $http.post('/api/v1.0/contacts', $scope.contact)
        .then(res => {
          $state.go('contact-list');
        });
    };

  }
}

let module = angular.module('contact-add.controller', [
  uiRouter
]);
module.controller('ContactAddCtrl', ['$scope', '$http', '$state', ContactAddCtrl]);

export default module.name;
