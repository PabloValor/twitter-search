(function(){
    'use strict';
    angular.module('twitterSearch.controllers',[])

    .controller('twitterSearchController', ['$scope','twitterSearchService', function($scope, twitterSearchService) {
        $scope.submit = function(search){
            $scope.progressBarFlag = true; //show the progress bar while request is sending

            twitterSearchService.getTweets(search)
                .then(function(tweets){
                    $scope.tweets = tweets.statuses;
                    $scope.progressBarFlag = false;
                })
        }
    }]);
})();
