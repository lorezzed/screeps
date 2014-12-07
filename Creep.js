var behaviours = require('behaviours');

module.exports = (function(){
    
    var data = {
        Harvester: Harvester,
        Guard: Guard
    }
    
    return data;
    
    function Harvester(name){
        var harvester = CreepAbstract(name)
        
        harvester.role = 'harvester';
        harvester.max = 2;
        harvester.body = [Game.MOVE, Game.CARRY, Game.WORK];
        harvester.behaviour = behaviours.harvester;
        
        return harvester;
    }
    
    function Guard(name){
        
        var guard = CreepAbstract(name);
        
        guard.role = 'guard';
        guard.max = 2;
        guard.body = [Game.MOVE, Game.CARRY, Game.WORK];
        guard.behaviour = behaviours.guard;
        
        return guard;
    }
    
    function CreepAbstract(name){
        
        var creep = {
            name: name,
            role: '',
            max: 0,
            body: [],
            behaviour: function(){}
        }
        
        return creep;
    }
    
})();