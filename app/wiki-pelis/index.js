/**
 * Created by uligarcia on 03/03/15.
 */
angular.module('wiki-pelis')
    .constant('CONSTANTS_WIKI',require('./constants-wiki-pelis'))
    .controller('WikiPelisController',['WikiPelisService',require('./controller-wiki-pelis')])
    .factory('WikiPelisService', ['$http','$q',require('./service-wiki-pelis')])
    .directive('isSelected',require('./directive-wiki-pelis'));