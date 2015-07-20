(function(){
    'use strict';
    angular.module('twitterSearch.controllers',[])

    .controller('twitterSearchController', ['$scope', function($scope) {
        $scope.tweet = "I'm a tweet";
        $scope.search = "chau";
        console.log($scope.tweet);
    }]);
})();
