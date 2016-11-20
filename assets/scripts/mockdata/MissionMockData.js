const Types = require("MissionTypes");
const LOGIC_TYPE = Types.LOGIC_TYPE;
const REPEAT_TYPE = Types.REPEAT_TYPE;
const MISSION_STATE = Types.MISSION_STATE;
const missions = [{
        mid: 0,
        beginTime: 1476282510,
        endTime: 1476282600,
        repeatType: REPEAT_TYPE.REPEAT_AFTER,
        repeatInterval: 5,
        activeLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
        conditionLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
        activeRules: {
            minLevel: 1,
            // maxLevel:0,
            // minHungry:0,
            // maxHungry:0,
            // minVisit:3,
            // maxVisit:0
        },
        conditionRules: {
            // levelUp:0,
            minLevel: 10,
            // eat:0,
            // minHungry:0,
            // visit:0,
            //minVisit:5
        },
    },
    {
        mid: 1,
        beginTime: 1476282510,
        endTime: 1476282600,
        repeatType: REPEAT_TYPE.REPEAT_AFTER,
        repeatInterval: 5,
        activeLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
        conditionLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
        activeRules: {
            // minLevel:0,
            // maxLevel:0,
            // minHungry:0,
            // maxHungry:0,
            minVisit: 3,
            // maxVisit:0
        },
        conditionRules: {
            // levelUp:0,
            minLevel: 5,
            // eat:0,
            // minHungry:0,
            // visit:0,
            minVisit: 5
        },
    },
    {
        mid: 2,
        beginTime: 1476282510,
        endTime: 1476282600,
        repeatType: REPEAT_TYPE.REPEAT_AFTER,
        repeatInterval: 5,
        activeLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
        conditionLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
        activeRules: {
            // minLevel:0,
            // maxLevel:0,
            // minHungry:0,
            // maxHungry:0,
            minVisit: 3,
            // maxVisit:0
        },
        conditionRules: {
            // levelUp:0,
            minLevel: 5,
            // eat:0,
            // minHungry:0,
            // visit:0,
            minVisit: 5
        },
    }
]

module.exports = {
    missions: missions
};