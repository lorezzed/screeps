var _ = require('lodash');

var config = require('config');
var behaviours = require('behaviours');

module.exports = (function(){
    
    var data = {
        go: go
    }
    
    return data;
    
    function go() {
        // _.forEach(Game.creeps, function(creep){
        //     var role = creep.memory.role;
        //     behaviours.harvester(creep);
        // });
        var entities = config.creepEntities();
        _.forEach(Game.creeps, function(name){
            var creepEntity = _.find(entities, { role: name.memory.role });
            creepEntity.behaviour(name)();
        });
    }
    
})()