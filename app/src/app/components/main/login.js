angular.module('lastenkirkko')
    .controller('LoginController', function ($scope, StorageService) {
        $scope.user = {};

        /**
         * Logs in.
         */
        $scope.login = function () {
            if ($scope.user.name) {
                StorageService.set('name', $scope.user.name);
            }
        };


        /**
         * Checks if the login form can be submitted.
         * @return {boolean}
         */
        $scope.canSubmit = function () {
            return $scope.user.name && !!$scope.user.name.length;
        };
    });

