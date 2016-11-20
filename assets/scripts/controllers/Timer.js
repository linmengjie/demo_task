let Timer = cc.Class({

    properties: {

    },

    updateUserAndMissionInfo() {
        // this.userLabel.string = "User:"+"l:"+app.userController.user.level+"h:"+app.userController.user.hungry+"v:"+app.userController.user.visit;
        // this.mission1Label.string = "Mission1:"+"state:"+app.missionController.missions[0].state+"nextTime:"+app.missionController.missions[0].nextTime+"finishTime:"+app.missionController.missions[0].finishTime;
        // this.mission2Label.string = "Mission2:"+"state:"+app.missionController.missions[1].state+"nextTime:"+app.missionController.missions[1].nextTime+"finishTime:"+app.missionController.missions[1].finishTime;
        // this.mission3Label.string = "Mission3:"+"state:"+app.missionController.missions[2].state+"nextTime:"+app.missionController.missions[2].nextTime+"finishTime:"+app.missionController.missions[2].finishTime;
    },

    ctor() {
        //模拟时间
        this.time = 1476282500;
        let now = Math.floor(new Date() / 1000);
        let timeOffset = now - this.time;
        this.updateTime = function() {
            let now = Math.floor(new Date() / 1000);
            this.time = now - timeOffset;
            if (this.time % 5 === 0) {
                app.userController.user.addLevel(1);
                app.userController.user.minusHungry(10);
            }
        }
        this.updateTime();
        this.updateUserAndMissionInfo();
        setInterval(() => {
            this.updateTime();
            // app.userMissionController.updateUserMissionState();
            app.emit('updateUserMissionState');
            app.emit('updateTime');
        }, 1000);
    }
});

module.exports = Timer;