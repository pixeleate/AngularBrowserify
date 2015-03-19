/**
 * Created by uligarcia on 03/03/15.
 */
'use strict';
    require('./core-dependencies');
angular.module('wiki-pelis',['ui.router','ui.bootstrap']);
    require('./wiki-pelis');

    angular.module('wiki-pelis').config(['$stateProvider','$urlRouterProvider',require('./routes')]);