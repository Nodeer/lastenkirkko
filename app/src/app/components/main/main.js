
















angular.module('lastenkirkko')
    .controller('DialogController', function($scope, $log, runningNumber, $modalInstance) {
        $scope.runningNumber = runningNumber;
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    })

    .controller('MainController', function($scope, $log, $modal, StorageService) {
        $scope.openModal = function(runningNumber) {
            $modal.open({
                templateUrl: 'components/content/' +runningNumber + '.html',
                controller: 'DialogController',
                windowClass: 'content-modal',
                resolve: {
                    runningNumber: function () {
                        return runningNumber;
                    }
                }
            });

        };

        $scope.username = StorageService.get('name');

        $scope.logout = function () {
            StorageService.remove('name');
            delete $scope.user;
            $modal.open({
                templateUrl: 'components/main/login.html',
                controller: 'LoginController'

            });
        };


        if (!StorageService.get('name')) {
            $modal.open({
                templateUrl: 'components/main/login.html',
                controller: 'LoginController'

            });
        }

    });

