
/**
 * Created by Mozahid on 5/2/2017.
 */
angular.module('user.controllers', []);
angular.module('user.services', []);

angular.module('myApp.user', [
    'ngRoute',
    'user.controllers',
    'user.services'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/user', {
            templateUrl: 'user/user.html',
            controller: 'UserController'
        });
    }]);