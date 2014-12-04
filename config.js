module.exports = (function() {
    
    var data = {
        creepEntities: creepEntities
    };
    
    return data;
    
})();

function creepEntities() {
    return [
        {
            role: 'guard',
            max: 2,
            body: [Game.MOVE, Game.ATTACK],
            behaviour: guardBehaviour
        },
        {
            role: 'harvester',
            max: 2,
            body: [Game.MOVE, Game.CARRY, Game.WORK],
            behaviour: harvesterBehaviour
        }
    ];
}

function guardBehaviour(creep){
    return function() {
        var targets = creep.room.find(Game.HOSTILE_CREEPS);
	    if (targets.length) {
	        creep.moveTo(targets[0]);
	        creep.attack(targets[0]);
	    }
    }
}

function harvesterBehaviour(creep){
    return function() {
        if (creep.energy < creep.energyCapacity) {
	        var sources = creep.room.find(Game.SOURCES);
	        creep.moveTo(sources[0]);
	        creep.harvest(sources[0]);
	    } else {
	        creep.moveTo(Game.spawns.Spawn1);
	        creep.transferEnergy(Game.spawns.Spawn1)
	    }
    }
}
