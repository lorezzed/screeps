var _ = require('lodash');
var behaviours = require('behaviours');

module.exports = (function(){
    
    var data = {
        go: go
    }
    
    return data;
    
    function go() {
        _.forEach(Game.creeps, function(creep){
            behaviours[creep.memory.role](creep)();
        });
    }
    
})()