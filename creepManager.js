var creepHelper = require('creepHelper');
var Creep = require('Creep');
var ai = require('ai');

var spawn = Game.spawns.Spawn1;

module.exports = (function(){
    
    var data = {
        go: go
    }
    
    return data;
    
    function go() {
        ai.go();
        buildCreeps();
    }
    
    function buildCreeps(){
        if(spawn.spawning)
            return;
        // factory.createCreep('guard');// spam guards
        var newCreep = getName('harvester');
        var creep = Creep.Harvester(newCreep);
        var buildResult = Game.spawns.Spawn1.createCreep(creep.body, creep.name, {role: creep.role });
        console.log(buildResult);
    }
    
    function createCreep(role){
        if(!roleExists(role))
            return;
        var model = new _.find(getCreepEntities(), {role: role});
        var creepName = getName(role);
        var result = Game.spawns.Spawn1.createCreep(model.body, creepName, {role: role });
        console.log(result);
    }
    
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function getName(role){
        //so good
        var random = getRandomInt(1, 999999);
        var name = role + random;
        return name;
    }
    
    function roleExists(role){
        var hasRole = _.contains(creepHelper.getRoles(), role);
            if(!hasRole){
                console.log('error: "' + role + '" is not a role.');
                return false;
            }
        return true;
    }
    
})()