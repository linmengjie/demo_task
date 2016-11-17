const Types = require("MissionTypes");
var STATE = Types.MISSION_STATE;
var LOGIC_TYPE = Types.LOGIC_TYPE;
var REPEAT_TYPE = Types.REPEAT_TYPE;
var Mission = require('MissionModel');
var MissionMockData = require('MissionMockData');
var MissionController = cc.Class({

    properties: {
        missions:[],
    },
    
    ctor(){
        for(let i in MissionMockData.missions){
            this.missions[i] = new Mission();
            this.missions[i].initWithData(this,MissionMockData.missions[i],app.userController.user.uid);
        }
    },
    
    _ruleValidator(ruleName,ruleValue,user,record){
        switch(ruleName){
            //active_rules
            case "minHungry":return (ruleValue <= user.hungry);
            case "maxHungry":return (ruleValue >= user.hungry);
            case "minLevel":return (ruleValue <= user.level);
            case "maxLevel":return (ruleValue >= user.level);
            case "minVisit":return (ruleValue <= user.visit);
            case "maxVisit":return (ruleValue >= user.visit);
            //condition_rules
            case "levelUp":return (user.level - record.userLevelOnAccept >= levelUp);
            //case "minLevel":return (ruleValue <= user.level);
            case "eat":return (user.hungry - record.userHungryOnAccept >= eat);
            //case "minHungry":return (ruleValue <= user.hungry);
            case "visit":return (user.visit - record.userVisitOnAccept >= visit);
            //case "minVisit":return (ruleValue <= user.visit);
        }  
    },
    
    _areAllRulesSatisfied(rules,user,record){
        for(let ruleName in rules){
            let ruleValue = rules[ruleName];
            if(!this._ruleValidator(ruleName,ruleValue,user,record))
                return false
        }
        return true;
    },
    
    _areAnyRulesSatisfied(rules,user,record){
        for(let ruleName in rules){
            let ruleValue = rules[ruleName];
            if(this._ruleValidator(ruleName,ruleValue,user,record))
                return true;
        }
        return false;
    },
    
    tryAcceptMission(user,mission){
        if(mission.state == STATE.NOT_ACCEPT || mission.state == STATE.FINISHED){
            let isActiveLogicSatisfied = false;
            switch(mission.activeLogic){
                case LOGIC_TYPE.ALL_RULES_SATISFIED:
                    isActiveLogicSatisfied = this._areAllRulesSatisfied(mission.activeRules,user,mission.record);
                    break;
                case LOGIC_TYPE.ANY_RULES_SATISFIED:
                    isActiveLogicSatisfied = this._areAnyRulesSatisfied(mission.activeRules, user,mission.record);
                    break;
            }
            if(mission.nextTime !== null && app.time >= mission.nextTime && app.time <= mission.endTime && isActiveLogicSatisfied){
                mission.state = STATE.ACCEPTED;
                mission.finishTime = null;
                switch(mission.repeatType){
                    case REPEAT_TYPE.NOT_REPEAT:
                        mission.nextTime = null;
                        break;
                    case REPEAT_TYPE.REPEAT_BEGIN:
                        mission.nextTime = app.time+mission.repeatInterval;
                        break;
                    case REPEAT_TYPE.REPEAT_AFTER:
                        mission.nextTime = null;
                        break;
                }
                //封装方法
                mission.record.userLevelOnAccept = user.level;
                mission.record.userHungryOnAccept = user.hungry;
                mission.record.userVisitOnAccept = user.visit;
            }
        }
    },
    
    
    tryFinishMission(user,mission){
        if(mission.state == STATE.ACCEPTED){
            let isConditionLogicSatisfied = false;
            switch(mission.conditionLogic){
                case LOGIC_TYPE.ALL_RULES_SATISFIED:
                    isConditionLogicSatisfied = this._areAllRulesSatisfied(mission.conditionRules,user,mission.record);
                    break;
                case LOGIC_TYPE.ANY_RULES_SATISFIED:
                    isConditionLogicSatisfied = this._areAnyRulesSatisfied(mission.conditionRules, user,mission.record);
                    break;
            }
            if(app.Timer.time <= mission.endTime && isConditionLogicSatisfied){
                mission.state = STATE.FINISHED;
                mission.finishTime = app.Timer.time;
                switch(mission.repeatType){
                    case REPEAT_TYPE.NOT_REPEAT:
                        mission.nextTime = null;
                        break;
                    case REPEAT_TYPE.REPEAT_BEGIN:
                        mission.nextTime = null;
                        break;
                    case REPEAT_TYPE.REPEAT_AFTER:
                        mission.nextTime = app.time+mission.repeatInterval;
                        break;
                }
                
            }
        }
    },
    
});

module.exports = MissionController;