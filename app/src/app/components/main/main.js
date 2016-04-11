angular.module('lastenkirkko')
    .controller('DialogController', function ($scope, $log, runningNumber, $modalInstance) {
        $scope.runningNumber = runningNumber;
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    })
    .controller('MainController', function ($scope, $log, $modal, StorageService, $timeout) {
        $scope.username = null;
        $scope.isActive = false;

        $scope.animateToimi = function (el, soundfile) {
            $scope.toimiActive = $scope.toimiActive ? false : true;

            if($scope.toimiActive) {
                playSound(el, soundfile);

                $scope.toimiTimeout = $timeout(function() {
                    $scope.toimiActive = false;
                }, 11000);
            } else {
                pauseSound(el);
                $timeout.cancel($scope.toimiTimeout);
            }
        };

        $scope.animateTuuli = function (el, soundfile) {
            $scope.tuuliActive = $scope.tuuliActive ? false : true;

            if($scope.tuuliActive) {
                playSound(el, soundfile);

                $scope.tuuliTimeout = $timeout(function() {
                    $scope.tuuliActive = false;
                }, 8176);
            } else {
                pauseSound(el);
                $timeout.cancel($scope.tuuliTimeout);
            }
        };

        $scope.animateToivo = function (el, soundfile) {
            $scope.toivoActive = $scope.toivoActive ? false : true;

            if($scope.toivoActive) {
                playSound(el, soundfile);

                $scope.toivoTimeout = $timeout(function() {
                    $scope.toivoActive = false;
                }, 6000);
            } else {
                pauseSound(el);
                $timeout.cancel($scope.toivoTimeout);
            }
        };

        $scope.animateTaito = function (el, soundfile) {
            $scope.taitoActive = $scope.taitoActive ? false : true;

            if($scope.taitoActive) {
                playSound(el, soundfile);

                $scope.taitoTimeout = $timeout(function() {
                    $scope.taitoActive = false;
                }, 8385);
            } else {
                pauseSound(el);
                $timeout.cancel($scope.taitoTimeout);
            }
        };

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

        function pauseSound(el) {
            el.mp3.pause();
        }

        function playSound(el,soundfile) {
            el.mp3 = new Audio(soundfile);
            el.mp3.play();
        }

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