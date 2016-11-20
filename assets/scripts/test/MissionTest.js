let UserMissionController = require("UserMissionController");
let Types = require("MissionTypes");
let MISSION_STATE = Types.MISSION_STATE;
let LOGIC_TYPE = Types.LOGIC_TYPE;
let REPEAT_TYPE = Types.REPEAT_TYPE;
let MissionTest = cc.Class({
    start: function() {
        describe("UserMissionFunction", function() {
            it("should return true when user's hungry is not less than minHungry /false when less", function() {
                let user = {
                    hungry: 100
                };
                expect(app.userMissionController._ruleValidator("minHungry", 30, user, null)).toBe(true);
                expect(app.userMissionController._ruleValidator("minHungry", 200, user, null)).toBe(false);
            });
        });
        describe("AcceptMission", function() {
            it("userMission state should equal to accepted when conditions are satisfied", function() {
                let now = app.Timer.time;
                let user = {
                    level: 2,
                    hungry: 3
                };
                let mission = {
                    beginTime: now,
                    endTime: now + 100000,
                    repeatType: REPEAT_TYPE.REPEAT_AFTER,
                    repeatInterval: 5,
                    activeLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
                    conditionLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
                    activeRules: {
                        minLevel: 1,
                        // maxLevel:0,
                        minHungry: 2,
                        // maxHungry:0,
                        // minVisit:3,
                        // maxVisit:0
                    },
                };
                let userMission = {
                    missionState: MISSION_STATE.NOT_ACCEPT,
                    nextTime: now,
                    finishTime: null,
                    userLevelOnAccept: 0,
                    userHungryOnAccept: 0,
                    userVisitOnAccept: 0
                };
                app.userMissionController._tryAcceptMission(user, mission, userMission);
                expect(userMission.missionState).toEqual(MISSION_STATE.ACCEPTED);
            });
        });
        describe("FinishMission", function() {
            it("userMission state should equal to finished when conditions are satisfied ", function() {
                let now = app.Timer.time;
                let user = {
                    level: 6,
                    visit: 5,
                    hungry: 8
                };
                let mission = {
                    beginTime: now,
                    endTime: now + 1000000,
                    repeatType: REPEAT_TYPE.REPEAT_AFTER,
                    repeatInterval: 5,
                    activeLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
                    conditionLogic: LOGIC_TYPE.ALL_RULES_SATISFIED,
                    conditionRules: {
                        // levelUp:0,
                        minLevel: 5,
                        eat: 2,
                        // minHungry:0,
                        // visit:0,
                        minVisit: 5
                    },
                };
                let userMission = {
                    missionState: MISSION_STATE.ACCEPTED,
                    nextTime: null,
                    finishTime: null,
                    userLevelOnAccept: 0,
                    userHungryOnAccept: 5,
                    userVisitOnAccept: 0
                };
                // let isConditionLogicSatisfied = app.userMissionController._areAllRulesSatisfied(mission.conditionRules, user, userMission);
                // expect(isConditionLogicSatisfied).toBe(true);
                app.userMissionController._tryFinishMission(user, mission, userMission);
                expect(userMission.missionState).toEqual(MISSION_STATE.FINISHED);
            });
        });
        jasmine.getEnv().execute();
    }
});
module.exports = MissionTest;