angular.module('lastenkirkko')
    .controller('DialogController', function ($scope, $log, runningNumber, $modalInstance) {
        $scope.runningNumber = runningNumber;
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    })
    .controller('MainController', function ($scope, $log, $modal, StorageService) {
        $scope.username = null;

        $scope.openModal = function (runningNumber) {
            $modal.open({
                templateUrl: 'components/content/' + runningNumber + '.html',
                controller: 'DialogController',
                windowClass: 'content-modal',
                resolve: {
                    runningNumber: function () {
                        return runningNumber;
                    }
                }
            });
        };

        function showLogin() {
            var modalInstance = $modal.open({
                templateUrl: 'components/main/login.html',
                controller: 'LoginController',
                windowClass: 'login-modal'

            });

            modalInstance.result.then(function (name) {
                $scope.username = name;
            }, function () {

            });
        }

        $scope.login = function () {
            showLogin();
        };

        $scope.logout = function () {
            StorageService.remove('name');
            $scope.username = null;
            showLogin();
        };

        var name = StorageService.get('name');
        if (name) {
            $scope.username = name;
        }
    });

