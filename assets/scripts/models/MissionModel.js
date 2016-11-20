let Mission = cc.Class({

    properties: {
        _data: {
            default: {}
        },
        mid: {
            get: function() {
                return this._data.get('mission.mid');
            },
        },
        beginTime: {
            get: function() {
                return this._data.get('mission.beginTime');
            },
            // set:function(value){
            //     this._data.set('mission.beginTime',value);
            // },
        },
        endTime: {
            get: function() {
                return this._data.get('mission.endTime');
            },
            // set:function(value){
            //     this._data.set('mission.endTime',value);
            // },
        },
        repeatType: {
            get: function() {
                return this._data.get('mission.repeatType');
            },
        },
        repeatInterval: {
            get: function() {
                return this._data.get('mission.repeatInterval');
            },
        },
        activeLogic: {
            get: function() {
                return this._data.get('mission.activeLogic');
            },
        },
        conditionLogic: {
            get: function() {
                return this._data.get('mission.conditionLogic');
            },
        },
        activeRules: {
            get: function() {
                return this._data.get('mission.activeRules');
            },
        },
        conditionRules: {
            get: function() {
                return this._data.get('mission.conditionRules');
            },
        },
    },

    ctor: function() {

    },

    initWithData(controller, data) {
        this._controller = controller;
        this._data = new Data();
        let missionData = {};
        for (let key in data) {
            missionData[key] = data[key];
        }
        this._data.set("mission", missionData);
    },

});

module.exports = Mission;