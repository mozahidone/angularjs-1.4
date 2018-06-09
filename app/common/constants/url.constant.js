(function () {
    angular.module('common.constants')
        .constant("ROUTE", {
            USER_MANAGEMENT: {
                STATE: 'main.user-management',
                URL: '/user-management',
                TEMPLATE_URL: 'user_management/manage-users.html',
                TITLE: 'User Management',
                CONTROLLER: 'UserManagementController'
            },
            USER_CREATE: {
                STATE: 'main.user-create',
                URL: '/user-create/{id}',
                TEMPLATE_URL: 'user_management/user.html',
                TITLE: 'User Management',
                CONTROLLER: 'UserController'
            },
            USER_MESSAGE: {
                STATE: 'main.user-message',
                URL: '/user-message',
                TEMPLATE_URL: 'user_management/message.html',
                TITLE: 'User Message',
                CONTROLLER: 'UserController'
            }
        });
})();
