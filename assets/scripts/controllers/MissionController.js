const Mission = require('MissionModel');
const MissionMockData = require('MissionMockData');
const MissionController = cc.Class({

    properties: {
        missions: [],
    },

    ctor() {
        for (let i in MissionMockData.missions) {
            this.missions[i] = new Mission();
            this.missions[i].initWithData(this, MissionMockData.missions[i]);
        }
    },

    findMissionById(id) {
        for (let i in this.missions) {
            if (this.missions[i].mid === id) {
                return this.missions[i];
            }
        }
        cc.log("no such mission!!!!");
        return null;
    },

});

module.exports = MissionController;