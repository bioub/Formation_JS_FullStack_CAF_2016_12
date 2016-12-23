import angular from 'angular';

class ContactListCtrl {
  constructor($scope, $http) {
    $http.get('/api/v1.0/contacts')
      .then(res =>{
        $scope.contacts = res.data;
      });
  }
}

let module = angular.module('contact-list.controller', []);
module.controller('ContactListCtrl', ['$scope', '$http', ContactListCtrl]);

export default module.name;
