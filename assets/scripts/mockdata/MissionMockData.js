const Types = require("MissionTypes");
const LOGIC_TYPE = Types.LOGIC_TYPE;
const REPEAT_LOGIC = Types.REPEAT_TYPE;
const MISSION_STATE = Types.MISSION_STATE;
// const MISSION_STATE = cc.Enum({
//   NOT_ACCEPT:0,
//   ACCEPTED:1,
//   FINISHED:2
// });
// const LOGIC_TYPE = cc.Enum({
//     ALL_RULES_SATISFIED:0,
//     ANY_RULES_SATISFIED:1
// });
// const REPEAT_TYPE = cc.Enum({
//     NOT_REPEAT:0 ,
//     REPEAT_BEGIN:1,
//     REPEAT_AFTER:2
// });
const missions = [
    {
        beginTime:1476282510,
        endTime:1476282600,
        repeatType:REPEAT_LOGIC.REPEAT_AFTER,
        repeatInterval:5,
        activeLogic:LOGIC_TYPE.ALL_RULES_SATISFIED,
        conditionLogic:LOGIC_TYPE.ALL_RULES_SATISFIED,
        activeRules:{
            minLevel:1,
            // maxLevel:0,
            // minHungry:0,
            // maxHungry:0,
            // minVisit:3,
            // maxVisit:0
        },
        conditionRules:{
            // levelUp:0,
            minLevel:10,
            // eat:0,
            // minHungry:0,
            // visit:0,
            //minVisit:5
        },
        records:{
            0:{
                state:MISSION_STATE.NOT_ACCEPT,
                nextTime:1476282510,
                finishTime:null,
                userLevelOnAccept:0,
                userHungryOnAccept:0,
                userVisitOnAccept:0
            },
            1:{
                state:MISSION_STATE.NOT_ACCEPT,
                nextTime:0,
                finishTime:null,
                userLevelOnAccept:0,
                userHungryOnAccept:0,
                userVisitOnAccept:0
            }
        }
    },
        {
        beginTime:1476282510,
        endTime:1476282600,
        repeatType:REPEAT_LOGIC.REPEAT_AFTER,
        repeatInterval:5,
        activeLogic:LOGIC_TYPE.ALL_RULES_SATISFIED,
        conditionLogic:LOGIC_TYPE.ALL_RULES_SATISFIED,
        activeRules:{
            // minLevel:0,
            // maxLevel:0,
            // minHungry:0,
            // maxHungry:0,
            minVisit:3,
            // maxVisit:0
        },
        conditionRules:{
            // levelUp:0,
            minLevel:5,
            // eat:0,
            // minHungry:0,
            // visit:0,
            minVisit:5
        },
        records:{
            0:{
                state:MISSION_STATE.NOT_ACCEPT,
                nextTime:1476282510,
                finishTime:null,
                userLevelOnAccept:0,
                userHungryOnAccept:0,
                userVisitOnAccept:0
            },
            1:{
                state:MISSION_STATE.NOT_ACCEPT,
                nextTime:0,
                finishTime:null,
                userLevelOnAccept:0,
                userHungryOnAccept:0,
                userVisitOnAccept:0
            }
        }
    },
        {
        beginTime:1476282510,
        endTime:1476282600,
        repeatType:REPEAT_LOGIC.REPEAT_AFTER,
        repeatInterval:5,
        activeLogic:LOGIC_TYPE.ALL_RULES_SATISFIED,
        conditionLogic:LOGIC_TYPE.ALL_RULES_SATISFIED,
        activeRules:{
            // minLevel:0,
            // maxLevel:0,
            // minHungry:0,
            // maxHungry:0,
            minVisit:3,
            // maxVisit:0
        },
        conditionRules:{
            // levelUp:0,
            minLevel:5,
            // eat:0,
            // minHungry:0,
            // visit:0,
            minVisit:5
        },
        records:{
            0:{
                state:MISSION_STATE.NOT_ACCEPT,
                nextTime:1476282510,
                finishTime:null
            },
            1:{
                state:MISSION_STATE.NOT_ACCEPT,
                nextTime:0,
                finishTime:null,
                userLevelOnAccept:0,
                userHungryOnAccept:0,
                userVisitOnAccept:0
            }
        }
    }
]

module.exports = {
    missions: missions
};