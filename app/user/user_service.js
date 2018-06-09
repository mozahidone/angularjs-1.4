/**
 * Created by Mozahid on 4/26/2017.
 */
(function () {
    'use strict';
    angular.module('user.services')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', 'CONFIG'];

    function UserService($http, CONFIG) {

        function getUsers() {
            var users =
                [
                  { name: 'Mozahid', code: 'MMM' },
                  { name: 'Rony', code: 'RRR' },
                  { name: 'Yousuf', code: 'YYY' }

                ];
            return users;
        }

        return {
            getUsers: getUsers
        };
    }

})();