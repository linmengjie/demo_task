let User = require('UserModel');
let UserMockData = require('UserMockData');
let UserController = cc.Class({

    properties: {
        user: {
            default: {}
        }
    },

    ctor() {
        this.user = new User();
        this.user.initWithData(this, UserMockData.users[0]);
    },

});

module.exports = UserController;