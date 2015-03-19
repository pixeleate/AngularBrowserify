/**
 * Created by uligarcia on 03/03/15.
 */
var chai = require('chai'),
    should = chai.should(),
    sinon = require('sinon');

describe('Wiki Pelis page',function(){

    'use strict';

    var controller,$q, WikiPelisController = require('./controller-wiki-pelis');

    var _wikiPelisService = {
        getMovies : function(){
            return{
                then:function(){
                    return function(payload) {
                        
                    }
                }
            }
        }

    }

    sinon.stub(_wikiPelisService,"getMovies",_wikiPelisService.getMovies);

    beforeEach(function(){
        controller = new WikiPelisController(_wikiPelisService);
    });

    it('should have a heading saying "Wiki Pelis"',function(){
        controller.heading.should.equal('Wiki Pelis');
    });

    it('should call "getMovies" method once...',function(){
        _wikiPelisService.getMovies.called.should.be.true;
    });

    it('should call "getMovies" method once...',function(){
        var response = "Hi this is my response";
        console.log(_wikiPelisService.getMovies().then());
    });
});