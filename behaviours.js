module.exports = (function() {
    
    var data = {
        guard: guard,
        harvester: harvester
    }
    
    return data;
    
    function guard(creep){
        return function() {
            var targets = creep.room.find(Game.HOSTILE_CREEPS);
    	    if (targets.length) {
    	        creep.moveTo(targets[0]);
    	        creep.attack(targets[0]);
    	    }
        }
    }
    
    function harvester(creep){
        console.log(creep);
        // return;
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
    
})();