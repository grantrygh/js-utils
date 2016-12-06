'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var truncate = function truncate(string, length) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

    if (string.length > length) {
        return string.slice(0, length) + suffix;
    }

    return string;
};

exports.default = truncate;