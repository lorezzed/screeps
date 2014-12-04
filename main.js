var _ = require('lodash');
var factory = require('creepFactory');
var config = require('config');// remove

var spawn = Game.spawns.Spawn1;

run();

function run(){
    ai();// move this
    buildCreeps();
}

function buildCreeps(){
    if(spawn.spawning)
        return;
    //factory.createCreep('harvester');// spam harvesters
    factory.createCreep('guard');// spam guards
}

function ai() {
    var entities = config.creepEntities();
    _.forEach(Game.creeps, function(name){
        var creepEntity = _.find(entities, { role: name.memory.role });
        creepEntity.behaviour(name)();
    });
}