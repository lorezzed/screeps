var _ = require('lodash');
var creepHelper = require('creepHelper');

var getRoles = creepHelper.getRoles;
var getCreepEntities = creepHelper.getCreepEntities; 

module.exports = (function(){
   
    var data = {
        createCreep: createCreep
    }
    
    return data;
})();

function createCreep(role){
    if(!roleExists(role))
        return;
    //
    //check what needs building
    //
    //build
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

