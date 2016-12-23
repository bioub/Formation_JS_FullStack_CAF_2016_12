import 'bootstrap';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import contactListCtrl from './contact-list/contact-list.controller';
import contactAddCtrl from './contact-add/contact-add.controller';

var module = angular.module('app.module', [
  uiRouter,
  contactListCtrl,
  contactAddCtrl
]);

module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/contacts');

  // Now set up the states
  $stateProvider
    .state('contact-list', {
      url: '/contacts',
      templateUrl: 'app/contact-list/contact-list.template.html',
      controller: 'ContactListCtrl'
    });

  $stateProvider
    .state('contact-add', {
      url: '/contacts/add',
      templateUrl: 'app/contact-add/contact-add.template.html',
      controller: 'ContactAddCtrl'
    });

}]);
