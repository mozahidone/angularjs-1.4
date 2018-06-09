angular.module('common.constants')
    .factory('HttpStatus', function () {
        'use strict';
        return {
            OK: {value: 'OK', code: 200},
            CREATED: {value: 'CREATED', code: 201},
            ACCEPTED: {value: 'ACCEPTED', code: 202},
            BAD_REQUEST: {value: 'BAD REQUEST', code: 400},
            UNAUTHORIZED: {value: 'UNAUTHORIZED', code: 401},
            FORBIDDEN: {value: 'FORBIDDEN', code: 403},
            NOT_FOUND: {value: 'NOT FOUND', code: 404},
            INTERNAL_SERVER_ERROR: {value: 'INTERNAL SERVER ERROR', code: 500},
            BAD_GATEWAY: {value: 'BAD GATEWAY', code: 502}

        }
    });
