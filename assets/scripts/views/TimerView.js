const Timer = require("Timer");
cc.Class({
    extends: cc.Component,

    properties: {
        timeLabel: cc.Label,
        userLabel: cc.Label,
        mission1Label: cc.Label,
        mission2Label: cc.Label,
        mission3Label: cc.Label,
    },

    // use this for initialization
    onLoad: function() {
        // let self = this;
        // self.timeLabel.string = "Time:" + app.Timer.time;
        // self.updateUserAndMissionInfo();

        // app.on('updateTime', function() {
        //     self.timeLabel.string = "Time:" + app.Timer.time;
        // });
        // app.on('updateUserMissionState', function() {
        //     self.updateUserAndMissionInfo();
        // });
    },

    updateUserAndMissionInfo() {
        this.userLabel.string = "User:" + "l:" + app.userController.user.level + "h:" + app.userController.user.hungry + "v:" + app.userController.user.visit;
        this.mission1Label.string = "Mission1:" + "state:" + app.userMissionController.userMissions[0].missionState + "nextTime:" + app.userMissionController.userMissions[0].nextTime + "finishTime:" + app.userMissionController.userMissions[0].finishTime;
        this.mission2Label.string = "Mission2:" + "state:" + app.userMissionController.userMissions[1].missionState + "nextTime:" + app.userMissionController.userMissions[1].nextTime + "finishTime:" + app.userMissionController.userMissions[1].finishTime;
        this.mission3Label.string = "Mission3:" + "state:" + app.userMissionController.userMissions[2].missionState + "nextTime:" + app.userMissionController.userMissions[2].nextTime + "finishTime:" + app.userMissionController.userMissions[2].finishTime;
    },
    // called every frame, uncomment this function to activate update callback
    update: function(dt) {
        this.timeLabel.string = "Time:" + app.Timer.time;
        this.updateUserAndMissionInfo();
    },
});