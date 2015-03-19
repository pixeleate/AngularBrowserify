/**
 * Created by uligarcia on 03/03/15.
 */
'use strict';
var wikiPelisCtrl = function WikiPelisController(WikiPelisService  ){
    var self = this;
    self.heading = 'Wiki Pelis';

    var promise = WikiPelisService.getMovies();

    promise.then(function(payload){
        self.total = payload.results[0].artistName;
        //$log.log(self.total);
    }, function (errorPayload) {
        //$log.error('Hi ' + errorPayload);
    })


}
module.exports = wikiPelisCtrl;