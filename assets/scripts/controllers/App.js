const MissionController = require('MissionController');
const UserController = require('UserController');
const UserMissionController = require('UserMissionController');
const Timer = require('Timer');
const App = cc.Class({

    properties: {

    },
    
    ctor:function(){

    },
    
    init(){
        this.userController = new UserController();
        this.missionController = new MissionController();
        this.userMissionController = new UserController();
        this.Timer = new Timer();
        this.eventTarget = new cc.EventTarget();
        let self = this;
        this.on('userStateChange',function(){
            self.updateUserMissionState();
        });
    },
    
    on(type, callback){
        this.eventTarget.on(type, callback, this.eventTarget, false);
    },
    
    off(type, callback){
        this.eventTarget.off(type, callback, this.eventTarget, false);
    },
    
    emit(type, data){
        this.eventTarget.emit(type,data);
    }

});

module.exports = App;