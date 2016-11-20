const Types = require("MissionTypes");
const MISSION_STATE = Types.MISSION_STATE;
const LOGIC_TYPE = Types.LOGIC_TYPE;
const REPEAT_TYPE = Types.REPEAT_TYPE;
const UserMissionMockData = require('UserMissionMockData');
const UserMission = require('UserMissionModel');
const UserMissionController = cc.Class({

    properties: {

    },

    ctor() {
        this.userMissions = [];
        for (let i in UserMissionMockData.userMissions) {
            this.userMissions[i] = new UserMission();
            this.userMissions[i].initWithData(this, UserMissionMockData.userMissions[i]);
        }
        let self = this;
        app.on('updateUserMissionState', function() {
            self.updateUserMissionState();
        });
    },

    _ruleValidator(ruleName, ruleValue, user, userMission) {
        switch (ruleName) {
            //active_rules
            case "minHungry":
                return (ruleValue <= user.hungry);
            case "maxHungry":
                return (ruleValue >= user.hungry);
            case "minLevel":
                return (ruleValue <= user.level);
            case "maxLevel":
                return (ruleValue >= user.level);
            case "minVisit":
                return (ruleValue <= user.visit);
            case "maxVisit":
                return (ruleValue >= user.visit);
                //condition_rules
            case "levelUp":
                return (user.level - userMission.userLevelOnAccept >= ruleValue);
                //case "minLevel":return (ruleValue <= user.level);
            case "eat":
                return (user.hungry - userMission.userHungryOnAccept >= ruleValue);
                //case "minHungry":return (ruleValue <= user.hungry);
            case "visit":
                return (user.visit - userMission.userVisitOnAccept >= ruleValue);
                //case "minVisit":return (ruleValue <= user.visit);
        }
    },

    _areAllRulesSatisfied(rules, user, userMission) {
        for (let ruleName in rules) {
            let ruleValue = rules[ruleName];
            if (!this._ruleValidator(ruleName, ruleValue, user, userMission))
                return false
        }
        return true;
    },

    _areAnyRulesSatisfied(rules, user, userMission) {
        for (let ruleName in rules) {
            let ruleValue = rules[ruleName];
            if (this._ruleValidator(ruleName, ruleValue, user, userMission))
                return true;
        }
        return false;
    },

    _tryAcceptMission(user, mission, userMission) {
        if (userMission.missionState == MISSION_STATE.NOT_ACCEPT || userMission.missionState == MISSION_STATE.FINISHED) {
            if ((userMission.nextTime !== null) && (app.Timer.time >= userMission.nextTime) && (app.Timer.time <= mission.endTime)) {
                let isActiveLogicSatisfied = false;
                switch (mission.activeLogic) {
                    case LOGIC_TYPE.ALL_RULES_SATISFIED:
                        isActiveLogicSatisfied = this._areAllRulesSatisfied(mission.activeRules, user, userMission);
                        break;
                    case LOGIC_TYPE.ANY_RULES_SATISFIED:
                        isActiveLogicSatisfied = this._areAnyRulesSatisfied(mission.activeRules, user, userMission);
                        break;
                }
                if (isActiveLogicSatisfied) {
                    userMission.missionState = MISSION_STATE.ACCEPTED;
                    userMission.finishTime = null;
                    switch (mission.repeatType) {
                        case REPEAT_TYPE.NOT_REPEAT:
                            userMission.nextTime = null;
                            break;
                        case REPEAT_TYPE.REPEAT_BEGIN:
                            userMission.nextTime = app.Timer.time + mission.repeatInterval;
                            break;
                        case REPEAT_TYPE.REPEAT_AFTER:
                            userMission.nextTime = null;
                            break;
                    }
                    userMission.userLevelOnAccept = user.level;
                    userMission.userHungryOnAccept = user.hungry;
                    userMission.userVisitOnAccept = user.visit;
                }
            }
        }
    },


    _tryFinishMission(user, mission, userMission) {
        if (userMission.missionState == MISSION_STATE.ACCEPTED && app.Timer.time <= mission.endTime) {
            let isConditionLogicSatisfied = false;
            switch (mission.conditionLogic) {
                case LOGIC_TYPE.ALL_RULES_SATISFIED:
                    isConditionLogicSatisfied = this._areAllRulesSatisfied(mission.conditionRules, user, userMission);
                    break;
                case LOGIC_TYPE.ANY_RULES_SATISFIED:
                    isConditionLogicSatisfied = this._areAnyRulesSatisfied(mission.conditionRules, user, userMission);
                    break;
            }
            if (isConditionLogicSatisfied) {
                userMission.missionState = MISSION_STATE.FINISHED;
                userMission.finishTime = app.Timer.time;
                switch (mission.repeatType) {
                    case REPEAT_TYPE.NOT_REPEAT:
                        userMission.nextTime = null;
                        break;
                    case REPEAT_TYPE.REPEAT_BEGIN:
                        userMission.nextTime = null;
                        break;
                    case REPEAT_TYPE.REPEAT_AFTER:
                        userMission.nextTime = app.Timer.time + mission.repeatInterval;
                        break;
                }
            }
        }
    },

    updateUserMissionState() {
        for (let i in this.userMissions) {
            this._tryAcceptMission(app.userController.user,
                app.missionController.findMissionById(this.userMissions[i].missionId),
                this.userMissions[i]);
        }
        for (let i in this.userMissions) {
            this._tryFinishMission(app.userController.user,
                app.missionController.findMissionById(this.userMissions[i].missionId),
                this.userMissions[i]);
        }
    },

    findUserMissionByMid(mid) {
        for (let i in this.userMissions) {
            if (this.userMissions[i].missionId === mid) {
                return this.userMissions[i];
            }
        }
        cc.log("no such userMission!!!!");
        return null;
    }

});

module.exports = UserMissionController;