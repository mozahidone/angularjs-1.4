/**
 * Created by Mozahid on 5/23/17.
 */

'use strict';

angular.module('user.controllers')

    .controller('UserManagementController', UserManagementController);

UserManagementController.$inject = ['$scope', '$state', '$rootScope', '$timeout','$filter','$cookies','UserService', 'ROUTE'];
function UserManagementController($scope, $state, $rootScope, $timeout, $filter, $cookies, UserService, ROUTE) {

}