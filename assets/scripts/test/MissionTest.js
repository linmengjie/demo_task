let MissionController = require("MissionController");
let MissionTest = cc.Class({
    start: function(){
        describe("Mission", function() {
            it("should return true when user's hungry is not less than minHungry", function() {
                let missionController = new MissionController();
                let user = {
                    hungry: 100
                };
                expect(missionController._ruleValidator("minHungry", 30, user, null)).toBe(true);
            });
        });
        jasmine.getEnv().execute();
    }
});
module.exports = MissionTest;