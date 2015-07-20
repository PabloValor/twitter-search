(function(){
    'use strict';
    var app = angular.module('TwitterSearch',[
        'twitterSearch.controllers',
        'twitterSearch.services'
    ]);
    app.config(['$interpolateProvider',
        function($interpolateProvider) {
            // Swig uses {{}} for variables which makes it clash with the use of {{}} in AngularJS.
            // Replaced use of {{}} with [[]] in AngularJS to make it work with Swig.
            $interpolateProvider.startSymbol('[[');
            $interpolateProvider.endSymbol(']]');
        }
    ]);

})();
