const UserMission = cc.Class({

    properties: {
        //映射
        userId:{
            get:function(){
                return this._data.get('userMission.userId');
            },
        },
        missionId:{
            get:function(){
                return this._data.get('userMission.missionId');
            },
        },
        //任务
        missionState:{
            get:function(){
                return this._data.get('userMission.missionState');
            },
            set:function(value){
                this._data.set('userMission.missionState',value);
            }
        },
        nextTime:{
            get:function(){
                return this._data.get('userMission.nextTime');
            },
            set:function(value){
                this._data.set('userMission.nextTime',value);
            }
        },
        finishTime:{
            get:function(){
                return this._data.get('userMission.finishTime');
            },
            set:function(value){
                this._data.set('userMission.finishTime',value);
            }
        },
        //用户
        userLevelOnAccept:{
            get:function(){
                return this._data.get('userMission.userLevelOnAccept');
            },
            set:function(value){
                this._data.set('userMission.userLevelOnAccept',value);
            }
        },
        userHungryOnAccept:{
            get:function(){
                return this._data.get('userMission.userHungryOnAccept');
            },
            set:function(value){
                this._data.set('userMission.userHungryOnAccept',value);
            }
        },
        userVisitOnAccept:{
            get:function(){
                return this._data.get('userMission.userVisitOnAccept');
            },
            set:function(value){
                this._data.set('userMission.userVisitOnAccept',value);
            }
        },
    },

    initWithData(controller,data){
        this._controller = controller;
        this._data = new Data();
        let userMissionData = {};
        for(let key in data){
            userMissionData[key] = data[key];
        }

        this._data.set('userMission',userMissionData);
    },
});

module.exports = UserMission;
