let Mission = cc.Class({

    properties: {
        _data:{
            default:{}
        },
        beginTime:{
            get:function(){
                return this._data.get('mission.beginTime');
            },
            set:function(value){
                this._data.set('mission.beginTime',value);
            },
        },
        endTime:{
            get:function(){
                return this._data.get('mission.endTime');
            },
            set:function(value){
                this._data.set('mission.endTime',value);
            },
        },
        repeatType:{
            get:function(){
                return this._data.get('mission.repeatType');
            },
            // set:function(value){
            //     this._data.set('mission.repeatType',value);
            // },
        },
        repeatInterval:{
            get:function(){
                return this._data.get('mission.repeatInterval');
            },
            // set:function(value){
            //     this._data.set('mission.repeatInterval',value);
            // },
        },
        activeLogic:{
            get:function(){
                return this._data.get('mission.activeLogic');
            },
            // set:function(value){
            //     this._data.set('mission.activeLogic',value);
            // },
        },
        conditionLogic:{
            get:function(){
                return this._data.get('mission.conditionLogic');
            },
            // set:function(value){
            //     this._data.set('mission.conditionRules',value);
            // },
        },
        activeRules:{
            get:function(){
                return this._data.get('mission.activeRules');
            },
        },
        conditionRules:{
            get:function(){
                return this._data.get('mission.conditionRules');
            },
        },
        state:{
            get:function(){
                return this._data.get('mission.record.state');
            },
            set:function(value){
                this._data.set('mission.record.state',value);
            }
        },
        nextTime:{
            get:function(){
                return this._data.get('mission.record.nextTime');
            },
            set:function(value){
                this._data.set('mission.record.nextTime',value);
            }
        },
        finishTime:{
            get:function(){
                return this._data.get('mission.record.finishTime');
            },
            set:function(value){
                this._data.set('mission.record.finishTime',value);
            }
        },
        userLevelOnAccept:{
            get:function(){
                return this._data.get('mission.record.userLevelOnAccept');
            },
            set:function(value){
                this._data.set('mission.record.userLevelOnAccept',value);
            }
        },
        userHungryOnAccept:{
            get:function(){
                return this._data.get('mission.record.userHungryOnAccept');
            },
            set:function(value){
                this._data.set('mission.record.userHungryOnAccept',value);
            }
        },
        userVisitOnAccept:{
            get:function(){
                return this._data.get('mission.record.userVisitOnAccept');
            },
            set:function(value){
                this._data.set('mission.record.userVisitOnAccept',value);
            }
        },
        record:{//玩家的任务记录
            get:function(){
                return this._data.get('mission.record');
            },
            set:function(value){
                this._data.set('mission.record',value);
            }
        }
    },

    ctor:function(){
        
    },
    
    initWithData(controller,data,uid){
        this._controller = controller;
        this._data = new Data();
        let missionData = {};
        for(let key in data){
            if(key == 'records'){
                missionData.record = data.records[uid];                
            }else{
                missionData[key] = data[key];
            }
        }
        this._data.set("mission",missionData);
    },
    
});

module.exports = Mission;
