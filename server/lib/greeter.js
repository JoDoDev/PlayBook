"use strict";
exports.__esModule = true;
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hallo, " + this.greeting + "!";
    };
    return Greeter;
}());
exports.Greeter = Greeter;
;
