let User = require('UserModel');
let UserMockData = require('UserMockData');
let UserController = cc.Class({

    properties: {
        user:{
            default:{}
        }
    },

    ctor(){
        this.user = new User();
        this.user.initWithData(this,UserMockData.users[0]);
    },

    updateUserMissionState(){
        for(let i in app.missionController.missions){
            app.missionController.tryAcceptMission(this.user,app.missionController.missions[i]);
        }
        for(let i in app.missionController.missions){
            app.missionController.tryFinishMission(this.user,app.missionController.missions[i]);
        }
    },

    
});

module.exports = UserController;