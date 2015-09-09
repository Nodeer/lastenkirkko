
















angular.module('lastenkirkko')
    .controller('DialogController', function($scope, $log, runningNumber) {
        $scope.runningNumber = runningNumber;

    })
    .controller('MainController', function($scope, $log, $modal, localStorageService) {
        $scope.openModal = function(runningNumber) {
            $modal.open({
                templateUrl: 'components/content/' +runningNumber + '.html',
                controller: 'DialogController',
                resolve: {
                    runningNumber: function () {
                        return runningNumber;
                    }
                }
            });
        };
            console.log(localStorageService.get('name'));
        if (!localStorageService.get('name')) {
            $modal.open({
                templateUrl: 'components/main/login.html',
                controller: 'LoginController'

            });
        }
    });