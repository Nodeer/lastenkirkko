angular.module('lastenkirkko')
    .controller('DialogController', function ($scope, $log, $sce, runningNumber, modalData, $modalInstance) {
        $scope.runningNumber = runningNumber;
        $scope.modalData = modalData;
        $scope.activeContentUrl = $scope.modalData.activeContentUrl;
        $scope.activeContentType = $scope.modalData.activeContentType;

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        };

        $scope.changeActiveContent = function(src, type) {
            $scope.activeContentUrl = src;
            $scope.activeContentType = type;
        };

    })
    .controller('MainController', function ($scope, $log, $http, $modal, StorageService, $timeout) {
        $scope.username = null;
        $scope.isActive = false;


        // Get data for modals
        $http.get('assets/data/data.json')
        .then(function(res) {
            $scope.data = res.data;

        }, function(err) {
            $log.debug(err);
        });

        $scope.openModal = function (runningNumber) {
            $modal.open({
                templateUrl: 'components/main/modal.html',
                controller: 'DialogController',
                resolve: {
                    runningNumber: function () {
                        return runningNumber;
                    },
                    modalData: function() {
                        return $scope.data[runningNumber];
                    }
                }
            });
        };

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