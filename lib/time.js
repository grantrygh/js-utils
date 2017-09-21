'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    // {time} tense - past/future/present
    tense: function tense(timestring) {
        var now = Date.now();
        var time = new Date(timestring).getTime();
        if (now - time > 0) {
            return 'past';
        } else if (now === time) {
            return 'present';
        }
        return 'future';
    },

    // Seconds since {time}
    since: function since(timestring) {
        var now = Date.now();
        var time = new Date(timestring).getTime();
        return (now - time) / 1000; // in seconds
    },

    // Seconds until {time}
    until: function until(timestring) {
        var now = Date.now();
        var time = new Date(timestring).getTime();
        return (time - now) / 1000; // in seconds
    }
};