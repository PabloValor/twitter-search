$(document).on('ready', function(){
    "use strict";
    var $btnSearch      = $('#btnSearch');
    var $btnLoadMore    = $('#btnLoadMore');

    // setup and configure scrollFire Materialize feature
    /*var options = [{
        selector: '#tweetsList',
        offset: 200,
        callback: 'Materialize.showStaggeredList("#tweetsList")'
    }];
    // scrollFire starts
    Materialize.scrollFire(options);*/

    // initialize Materialize tooltip
    function initializeTooltip () {
        setTimeout(function(){
            // dirty hack to apply tooltip functionallity in dom elements
            $('.tooltipped').tooltip({delay: 50});
        },2500);
    }

    $('#btnSearch').on('click', initializeTooltip);
    $('#btnLoadMore').on('click', initializeTooltip);

    console.log("dom ready...");
});
