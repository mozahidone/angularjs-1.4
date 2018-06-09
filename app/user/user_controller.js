/**
 * Created by Mozahid on 4/26/2017.
 */
'use strict';

angular.module('user.controllers')

       .controller('UserController', UserController);

UserController.$inject = ['$scope', '$rootScope', '$timeout', '$filter', 'UserService', 'ROUTE', 'CONFIG'];
function UserController($scope, $rootScope, $timeout, $filter, UserService, ROUTE, CONFIG) {

    $scope.users = [];

    init();

    function init() {
        $scope.users = UserService.getUsers();
    }
}
