var _ = require('lodash');
var config = require('config');

module.exports = (function(){
    
    var data = {
        getCreepEntities: getCreepEntities,
        getRoles: getRoles
    }
    
    return data;
})();

function getCreepEntities(){
    return config.creepEntities();
}

function getRoles() {
    return _.pluck(getCreepEntities(), 'role');
}

