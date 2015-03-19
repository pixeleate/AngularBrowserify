/**
 * Created by uligarcia on 03/03/15.
 */
'use strict'
var WikiService = function($http,$q){
//var WikiService = function(CONSTANTS_WIKI,$http,$q,$log){

    return {
        getMovies: getMovies
    }

    function getMovies() {
        var deferred = $q.defer();
        $http.jsonp('/url/movies')
        //$http.jsonp(CONSTANTS_WIKI.urls.in_theaters)
            .success(function(data,status,headers,config) {
                console.log('Hola');
                deferred.resolve({
                    results: data.results
                });
            }).error(function(msg,code) {
                console.log('Hola');
                //var msg = msg || 'Request failed: ';
                //deferred.reject(msg);
                //var errorMsg = msg || 'Request failed';
                //$log.error(msg,code);
                return 'Hola';
            });
        return deferred.promise;
    }

}

module.exports = WikiService;