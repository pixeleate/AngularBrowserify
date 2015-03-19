/**
 * Created by uligarcia on 03/03/15.
 */
'use strict';
function Routes($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'views/wiki-pelis.html',
            controller:'WikiPelisController as wiki'
        });
}

module.exports = Routes;