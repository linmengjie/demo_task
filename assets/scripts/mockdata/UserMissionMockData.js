const Types = require("MissionTypes");
const MISSION_STATE = Types.MISSION_STATE;
const userMissions = [{
        userId: 0,
        missionId: 0,
        missionState: MISSION_STATE.NOT_ACCEPT,
        nextTime: 1476282510,
        finishTime: null,
        userLevelOnAccept: 0,
        userHungryOnAccept: 0,
        userVisitOnAccept: 0
    },
    {
        userId: 0,
        missionId: 1,
        missionState: MISSION_STATE.NOT_ACCEPT,
        nextTime: 1476282510,
        finishTime: null,
        userLevelOnAccept: 0,
        userHungryOnAccept: 0,
        userVisitOnAccept: 0
    },
    {
        userId: 0,
        missionId: 2,
        missionState: MISSION_STATE.NOT_ACCEPT,
        nextTime: 1476282510,
        finishTime: null,
        userLevelOnAccept: 0,
        userHungryOnAccept: 0,
        userVisitOnAccept: 0
    },
];

module.exports = {
    userMissions: userMissions
}