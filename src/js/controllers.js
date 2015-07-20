(function(){
    'use strict';
    angular.module('twitterSearch.controllers',[])

    .controller('twitterSearchController', ['$scope','twitterSearchService', function($scope, twitterSearchService) {
        $scope.tweets = [];

        $scope.submit = function(search){
            //$scope.tweets = getTweets(search);
            twitterSearchService.getTweets(search).then(function(tweets){
                $scope.tweets = tweets.statuses;
                console.log($scope.tweets);
            })
        }
    }]);
})();
