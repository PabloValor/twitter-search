(function(){
    'use strict';
    angular.module('twitterSearch.controllers',[])

    .controller('twitterSearchController', ['$scope','twitterSearchService', function($scope, twitterSearchService) {

        $scope.submit = function(){
            $scope.tweets = [];
            $scope.tweetsCounter = 5; // initial amount of fetch tweets
            $scope.progressBarFlag = true; //show the progress bar while request is sending

            twitterSearchService.getTweets($scope.search, $scope.tweetsCounter)
                .then(function(tweets){
                    $scope.tweets = tweets.statuses;
                });
            $scope.progressBarFlag = false;
        }
        $scope.loadMore = function() {
            $scope.tweetsCounter += 5; // give me five more please
            $scope.progressBarFlag = true; //show the progress bar while request is sending
            twitterSearchService.getTweets($scope.search, $scope.tweetsCounter)
                .then(function(tweets){
                    $scope.tweets = [];
                    tweets.statuses.forEach(function(element){
                        $scope.tweets.push(element);
                    });
                });
            $scope.progressBarFlag = false;
        }
    }]);
})();
