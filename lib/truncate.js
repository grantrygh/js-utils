'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = truncate;
function truncate(string, length) {
    var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';

    var cut = string.indexOf(' ', length);
    if (cut === -1) return string;
    return string.substring(0, cut) + suffix;

    // if (string && string.length > length) {
    //     return string.slice(0, length) + suffix;
    // }

    // return string;
}