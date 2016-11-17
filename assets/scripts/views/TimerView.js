cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel:cc.Label,
        userLabel:cc.Label,
        mission1Label:cc.Label,
        mission2Label:cc.Label,
        mission3Label:cc.Label,
    },

    // use this for initialization
    onLoad: function () {

    },

    updateUserAndMissionInfo(){
            this.userLabel.string = "User:"+"l:"+app.userController.user.level+"h:"+app.userController.user.hungry+"v:"+app.userController.user.visit;
            this.mission1Label.string = "Mission1:"+"state:"+app.missionController.missions[0].state+"nextTime:"+app.missionController.missions[0].nextTime+"finishTime:"+app.missionController.missions[0].finishTime;
            this.mission2Label.string = "Mission2:"+"state:"+app.missionController.missions[1].state+"nextTime:"+app.missionController.missions[1].nextTime+"finishTime:"+app.missionController.missions[1].finishTime;
            this.mission3Label.string = "Mission3:"+"state:"+app.missionController.missions[2].state+"nextTime:"+app.missionController.missions[2].nextTime+"finishTime:"+app.missionController.missions[2].finishTime;
    },
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.timeLabel.string = "Time:"+app.Timer.time;
        this.updateUserAndMissionInfo();
    },
});
