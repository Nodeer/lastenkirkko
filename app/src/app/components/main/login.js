angular.module('lastenkirkko')
    .controller('LoginController', function ($scope, StorageService, $modalInstance) {
        $scope.user = {};

        /**
         * Logs in.
         */
        $scope.login = function () {
            if ($scope.user.name) {
                StorageService.set('name', $scope.user.name);

                $modalInstance.close($scope.user.name);
            }
        };

        $scope.logout = function () {
            StorageService.remove('name');
            delete $scope.user.name;
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };


        /**
         * Checks if the login form can be submitted.
         * @return {boolean}
         */
        $scope.canSubmit = function () {
            return $scope.user.name && !!$scope.user.name.length;
        };
    });

