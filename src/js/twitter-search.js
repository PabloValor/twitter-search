$(document).on('ready', function(){
    "use strict";
    var $searchInput = $('#search');

    // setup and configure scrollFire Materialize feature
    /*var options = [{
        selector: '#tweetsList',
        offset: 200,
        callback: 'Materialize.showStaggeredList("#tweetsList")'
    }];
    // scrollFire starts
    Materialize.scrollFire(options);*/

    // initialize Materialize tooltip
    $('#btnSearch').on('click', function(){
        // dirty hack to apply tooltip functionallity in dom elements
        setTimeout(function(){
            $('.tooltipped').tooltip({delay: 50});

        },2500);
    });

    console.log("dom ready...");
});
