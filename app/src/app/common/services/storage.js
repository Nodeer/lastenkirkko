angular.module('lastenkirkko')

    .service('StorageService', function (localStorageService) {

        this.get = function(key) {
            return localStorageService.get(key);
        };

        this.set = function(key, value) {
            return localStorageService.set(key, value);
        };

        this.remove = function(key) {
            return localStorageService.remove(key);
        };
    });