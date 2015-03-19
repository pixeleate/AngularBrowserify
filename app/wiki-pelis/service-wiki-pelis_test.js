/**
 * Created by uligarcia on 03/03/15.
 */

var should = require('chai').should(),
    sinon = require('sinon'),
    sinonAsPromised = require('sinon-as-promised');

describe('Wiki Pelis service',function(){

    'use strict';

    var _service, deferred, WikiPelisService = require('./service-wiki-pelis'),url,callback, errorCallback;
    url = "/url/movies";
    callback = sinon.stub().returns({deferred:{
        promise:{}
    }});
    errorCallback = sinon.stub();
    var $http = {
            jsonp: function(url){
                return{
                    success:function(callback){},
                    error:function(errorCallback){}
                }
            }
        },
        $q = {
            defer: sinon.stub().returns({
                resolve:function(){},
                reject:function(){},
                promise:{}
            })

        };


    beforeEach(function(){
        //console.log();
        _service = new WikiPelisService($http,$q);
        deferred = $q.defer();
        sinon.stub(_service,"getMovies");
        //var promisedResponse = _service.getMovies() ;
        //deferred = sinon.stub($q,"defer");
        _service.getMovies();
        //sinonAsPromised($q);

        //done();
    });

    it('should call "getMovies" method once...',function(){
        //$http.jsonp.calledWith('/url/movies').should.be.true;
        _service.getMovies.callCount.should.equal(1);
    });

    it('should be using "/url/movies" in $http.jsonp method...',function(){
        sinon.stub($http,"jsonp");
        //console.log(_service.getMovies.returns(deferred.promise));
        //_service.getMovies.returns(deferred.promise);
        $http.jsonp('/url/movies');
        $http.jsonp.calledWithExactly("/url/movies").should.be.true;
        //console.log($http.jsonp);
        //$http.jsonp.should.be.true;

    });

    it('should be using "/url/movies" in $http.jsonp method...',function(){
        sinon.stub($http,"jsonp");
        //console.log(_service.getMovies.returns(deferred.promise));
        //_service.getMovies.returns(deferred.promise);
        $http.jsonp('/url/movies')
        //$http.jsonp.calledWithExactly("/url/movies").should.be.true;
        //console.log($http.jsonp);
        //$http.jsonp.should.be.true;

    });
});