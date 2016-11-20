const App = require('App');
cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {

        window.add = function(...numbers) {
            let result = 0;
            numbers.forEach(number => {
                let parseNumber = /./.test(number) ? parseFloat(number) : parseInt(number, 10);
                if (isNaN(parseNumber))
                    parseNumber = 0;
                result += parseNumber;
            })
            return result;
        }

        window.app = new App();
        app.init();

        cc.director.loadScene('TestScene');
    },

});