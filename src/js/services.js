(function(){
    'use strict';
    angular.module('twitterSearch.services',[])
        .factory('twitterSearchService', ['$http', '$q', function($http, $q){

            function getTweets(data){
                var deferred = $q.defer();

                $http.post('/', {userSearch: data})
                    .success(function(data){
                        deferred.resolve(data);
                    }
                );
                return deferred.promise;
            }

            return {
                getTweets: getTweets
            }
        }]);
})();
